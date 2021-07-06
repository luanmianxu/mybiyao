



// api.getDetail({
//     params:{
//         goodId:2
//     }
// },function(data){
//     console.log(data);
// })

// const { clear } = require("console");


var res = (location.search).split('=')[1]
console.log(res);


REQUEST.get('/detail', {
    params: {
        goodId: res
    }
}, function (data) {
    console.log(data);
    var magnifier = document.querySelector('.magnifier')
    var html = magnifier.innerHTML
    html += `
    <div class="small">
        <div class="mask">
        </div>
        <img src="${data[0].img_list_url}" alt="">
    </div>
    <div class="big">
        <img src="${data[0].img_list_url}" alt="">
    </div>
    `
    magnifier.innerHTML = html

    var tab = document.querySelector('.tab')

    var imgs = data[0].imgs.replace(/[\[\]]/g, "").split(",")
    var tab_html = tab.innerHTML
    tab_html += `
        <li><img src=${imgs[0]} alt=""></li>
        <li><img src=${imgs[1]} alt=""></li>
        <li><img src=${imgs[2]} alt=""></li>
        <li><img src=${imgs[3]} alt=""></li>
        <li><img src=${imgs[4]} alt=""></li>
        `
    tab.innerHTML = tab_html


    var title = document.querySelector('.title')
    var title_html = title.innerHTML

    title_html = `
        <h3>${data[0].title}</h3>
        <p>￥${data[0].price}</p>
        <span>⭐⭐⭐⭐⭐ 5.0</span>
        <div class="addshopCar">
            加入购物车
        </div>
        `
    title.innerHTML = title_html


})
REQUEST.get('/serach', {
    params: {
        word: '咖啡'
    }
}, function (data) {
    for (var i = 0; i < 5; i++) {
        var footer = document.createElement('footer')
        footer.className = 'w'
        document.body.append(footer)
        var list = footer.innerHTML
        list += `
    <h2>相关商品列表</h2>
    <div class="related">
        <ul>
            <li class="related-item">
                <img src="${data[i].img_list_url}" alt="">
                <h3>${data[i].title}</h3>
                <span class="fh">￥</span><span class="fh">59</span>
                ${data[i].mack}
            </li>
        </ul>
    </div>
    `
        footer.innerHTML = list
    }
}
)


// 延时获取
var getele = setTimeout(function () {
    var small = document.querySelector('.small')
    // console.log(small);
    var mask = document.querySelector('.mask')
    var big = document.querySelector('.big img')
    var magnifier = document.querySelector('.magnifier')
    small.addEventListener('mousemove', function (e) {
        var top = e.pageY - magnifier.offsetTop - 50;
        var left = e.pageX - magnifier.offsetLeft - 50;
        top = top < 0 ? 0 : top > 300 ? 300 : top
        left = left < 0 ? 0 : left > 300 ? 300 : left
        mask.style.top = top + 'px';
        mask.style.left = left + 'px'
        big.style.top = - top / 350 * 400 + 'px'
        big.style.left = - left / 350 * 400 + 'px'
    })
    clearTimeout(getele)
}, 1000)

