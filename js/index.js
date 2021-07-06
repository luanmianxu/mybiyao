// window.onload = function () {

// const { log } = require("console")

var ul = document.querySelector(".big")
var left = document.querySelector('.left')
var right = document.querySelector('.right')
var spans = document.querySelectorAll('.sricle span')
var mr = 0
var index = 0
setInterval(function () {
    mr += 1100
    index++
    if (mr >= 6600 && index >= 5) {
        ul.style.transition = 'none'
        index = 0
        mr = 0
    } else {
        ul.style.transition = 'all .5s'
    }
    // index=index>=4?0:index
    for (var i = 0; i < spans.length; i++) {
        spans[i].style.backgroundColor = '#ccc'
    }
    ul.style.marginLeft = - mr + "px"
    spans[index].style.backgroundColor = '#fff'
}, 2000)
left.onclick = function () {
    mr -= 1100;
    ul.style.marginLeft = - mr + "px"
}
right.onclick = function () {
    mr += 1100;
    ul.style.marginLeft = - mr + "px"
}

//轮播图结束



// 回到顶部

var backTop = document.querySelector('.backTop')
window.addEventListener("scroll", function (e) {
    var top = this.document.documentElement.scrollTop
    top > 400 ? backTop.style.display = "block" : backTop.style.display = "none"
})

function back(obj, high) {
    //  = obj.time
    var timer = setInterval(function () {
        var step = (high - window.pageYOffset) / 10;
        if (document.documentElement.scrollTop <= 0) {
            clearInterval(timer)
        } else {
            window.scrollTo(0, window.pageYOffset + step);
        }

    }, 16)

}
backTop.onclick = function () {
    back(window, 0)
}




// 渲染列表 
function Rendering(data, container) {
    console.log(data);
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
    var item=document.querySelectorAll('.item')
    
    for(let i=0;i<item.length;i++){
         item[i].addEventListener('click',function(){
            //  console.log(data.Id);
            var ids=item[i].getAttribute('data-Id')
             location.href=`../view/details.html?goodId=${ids}`
    })
    }
   

}


function add(page) {
    REQUEST.get('/goodlist', { params: { page: page } }, function (data) {
        Rendering(data, '.list ul')
    }
    )
}

//#region 
//     var list = document.querySelector('.list ul')
//     var html = list.innerHTML
//     for (var i = 0; i < data.length; i++) {
//         html += `
//                 <li class="item">
//                     <img src="${data[i].img_list_url}" alt="">
//                     <h3>${data[i].title}</h3>
//                     <span class="fh">￥</span><span class="fh fl">${data[i].price}</span>
//                     ${data[i].mack}
//                 </li>
//             `
//         list.innerHTML = html
//     }
//#endregion


// 懒加载

var page = 1
add(page)


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
        if (Math.abs((document.documentElement.scrollTop + window.innerHeight) - document.body.scrollHeight) < 50) {

            page++
            add(page)

        }


    }
}, 800)




// 

a()





