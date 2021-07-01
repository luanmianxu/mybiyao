window.onload = function () {

    var ul = document.querySelector(".big")
    var left = document.querySelector('.left')
    var right = document.querySelector('.right')
    var spans = document.querySelectorAll('.sricle span')
    // console.log(spans);
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
        // console.log(mr);
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
        var timer = obj.time
        obj.time= setInterval(function () {
            var step = (high - window.pageYOffset) / 10
            // step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == high) {
                clearInterval(obj.time)
            }
            window.scrollTo(0, window.pageYOffset + step);
            // if(document.documentElement.scrollTop=0){
            //     clearInterval(timer)
            // }
        }, 16)

    }
    backTop.onclick=function(){
        back(window, 0)
    }
    


    // 渲染列表 
    var list = document.querySelector('.list ul')
    REQUEST.get('/api/goodlist', { params: { page: 1 } }, function (data) {
        var html = list.innerHTML
        for (var i = 0; i < data.length; i++) {
            html += `
                <li class="item">
                    <img src="${data[i].img_list_url}" alt="">
                    <h3>${data[i].title}</h3>
                    <span class="fh">￥</span><span class="fh fl">${data[i].price}</span>
                    ${data[i].mack}
                </li>
            `
            list.innerHTML = html
        }
    })










}