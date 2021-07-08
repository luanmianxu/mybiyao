window.onload=function(){


var goodsBox=document.querySelector('.box')
REQUEST.get('/shoplist', {
    params: {
        token:localStorage.getItem('loginF')
    }
}, function (data) {
    // console.log(data);
    for(var i=0;i<data.length;i++){
         goodsBox.innerHTML+=`
    <div class="dp">
            <input type="checkbox">
            店铺：${data[i].supplier}
        </div>
        <div class="sp">
            <input type="checkbox">
            <img src="${data[i].img_list_url}" alt="">
            <span class="xx">${data[i].title}</span>
            <div class="text">
            ${data[i].mack}
            </div>
            <span class="dj">￥${data[i].price}</span>
            <div class="sl">
                <div class="jian">-</div>
                <div class="gs">${data[i].count}</div>
                <div class="jia">+</div>
            </div>
            <span class="je">￥${data[i].price*data[i].count}</span>
            <div class="cz">
                <span class="yrscj">移入收藏夹</span><br>
                <span class="del">删除</span>
            </div>
        </div>
        `
    }
})
}