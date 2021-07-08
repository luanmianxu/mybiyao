window.onload = function () {
  // 固定导航栏
    fixedTop()
    // // 回到顶部
    backTop()
    //轮播图
    var swiperUl = document.querySelector(".swiper .big")
    var left = document.querySelector('.swiper .left')
    var right = document.querySelector('.swiper .right')
    var spans = document.querySelectorAll('.sricle span')
    var mr = 0
    var index = 0
    setInterval(function () {
        mr += 1100
        index++
        if (mr >= 6600 && index >= 5) {
            swiperUl.style.transition = 'none'
            index = 0
            mr = 0
        } else {
            swiperUl.style.transition = 'all .5s'
        }

        for (var i = 0; i < spans.length; i++) {
            spans[i].style.backgroundColor = '#ccc'
        }
        swiperUl.style.marginLeft = - mr + "px"
        spans[index].style.backgroundColor = '#fff'
        console.log(mr,index);
    }, 2000)

    left.onclick = function () {
        mr -= 1100;
        swiperUl.style.marginLeft = - mr + "px"
    }
    right.onclick = function () {
        mr += 1100;
        swiperUl.style.marginLeft = - mr + "px"
        
    }
   

  


    // 渲染列表 
    function Rendering(data, container) {
        var list = document.querySelector(`${container}`)
        var html = list.innerHTML
        for (var i = 0; i < data.length; i++) {
            html += `
                <li class="item" data-Id=${data[i].Id}>
                    <img src="../assets/images/loading.jpg" alt="" data-src='${data[i].img_list_url}'>
                    <h3>${data[i].title}</h3>
                    <span class="fh">￥</span><span class="fh fl">${data[i].price}</span>
                    ${data[i].mack}
                </li>
            `
            list.innerHTML = html
        }
        var item = document.querySelectorAll('.item')

        for (let i = 0; i < item.length; i++) {
            item[i].addEventListener('click', function () {
                loading()
                var ids = item[i].getAttribute('data-Id')
                location.href = `../view/details.html?goodId=${ids}`
            })
        }

    }


    function add(page) {
        REQUEST.get('/goodlist', { params: { page: page } }, function (data) {
            Rendering(data, '.list ul')
        }
        )
    }

    // 懒加载

    var page = 1
    add(page)

    var flag = 1;
    var getImgs = setTimeout(function () {
        var imgs = document.querySelectorAll('.item img')
        clearTimeout(getImgs)
        window.addEventListener('scroll', function () {
            lazyLoad(imgs)
        })

        function lazyLoad(imgs) {
            imgs = document.querySelectorAll('.item img')
            var endImgs = imgs[imgs.length - 1]
            for (var i = 0; i < imgs.length; i++) {
                var listHeight = document.querySelector('.list').offsetHeight
                // console.log(listHeight);
                var height = imgs[i].offsetTop
                var wheight = window.innerHeight
                var scrollheight = document.documentElement.scrollTop
                if (scrollheight + wheight >= height) {
                    imgs[i].src = imgs[i].dataset.src
                }
            }
            if (Math.abs((document.documentElement.scrollTop + window.innerHeight) - document.body.scrollHeight) < 300) {
                
                if (flag) {
                    flag = 0
                    var dsq = setTimeout(function () {
                        loading()
                        page++
                        flag = 1
                        add(page)
                    }, 1000)
                }
            }
        }
    }, 800)


    //登录验证导航栏
    navLogin()

    var searchText =document.querySelector('.search input')
    var searchKey=document.querySelector('.search button')
    searchKey.addEventListener('click',function(){
        var code=encodeURI(searchText.value)
        // loading()
        location.href=`../view/search.html?word=${code}`
        
    })


    // tab切换
    var navLis=document.querySelectorAll('nav li')
    console.log(navLis);
    navLis.forEach(function(item,index){
        item.onclick=function(){
            var navLisCode=encodeURI(item.innerText)
            loading()
            location=`../view/classification.html?word=${navLisCode}`
        }
    })
}