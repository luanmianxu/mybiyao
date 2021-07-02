// window.onload = function () {

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
    var timer = obj.time
    obj.time = setInterval(function () {
        var step = (high - window.pageYOffset) / 10;
        if (window.pageYOffset == high) {
            clearInterval(obj.time)
        }
        window.scrollTo(0, window.pageYOffset + step);
    }, 16)

}
backTop.onclick = function () {
    back(window, 0)
}




// 渲染列表 
function  Rendering(data, container) {
    var list = document.querySelector(`${container}`)
    var html = list.innerHTML
    for (var i = 0; i < data.length; i++) {
        html += `
                <li class="item">
                    <img src="../asssts/images/loading.jpg" alt="" data-src='${data[i].img_list_url}'>
                    <h3>${data[i].title}</h3>
                    <span class="fh">￥</span><span class="fh fl">${data[i].price}</span>
                    ${data[i].mack}
                </li>
            `
        list.innerHTML = html
    }
}
function add(page){
   REQUEST.get('/api/goodlist', { params: { page: page } },function(data){
    Rendering(data,'.list ul')
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


    var page=1
    add(page)
    var lan=  setInterval(function(){
    var imgs = document.querySelectorAll(".item img")
    console.log(imgs);
    var lantop=document.documentElement.scrollTop
    clearInterval(lan)
    var endImg=imgs[imgs.length-1]
    for(var i=0;i<imgs.length;i++){
        if(window.innerHeight + lantop >= imgs[i].offsetTop){
            imgs[i].src=imgs[i].dataset.src
        }
        //判断触底
        var load =document.createElement('div')
        if(window.innerHeight +lantop >=imgs.offsetTop +imgs.offsetHeight){
            // load.className='load'
            // load.style.top=top +'px';
            // load.innerHTML=`
            // <img src="../asssts/images/loading.png" alt="logo" class="logo">
            // `
            list.appendChild(load)
            setTimeout(function(){
                page++
                add(page)
            },800)
        }
    }
    },100)











// }