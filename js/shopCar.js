window.onload = function () {


    var goodsBox = document.querySelector('.box')
    REQUEST.get('/shoplist', {
        params: {
            token: localStorage.getItem('loginF')
        }
    }, function (data) {
        

        for (var i = 0; i < data.length; i++) {
            goodsBox.innerHTML += `
    <div class="listBox">
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
            <span class="dj">${data[i].price}</span>
            <div class="sl" >
                <div class="jian">-</div>
                <div class="gs">${data[i].count}</div>
                <div class="jia">+</div>
            </div>
            <span class="je">￥${data[i].price * data[i].count}</span>
            <div class="cz">
                <span class="yrscj">移入收藏夹</span><br>
                <span class="del">删除</span>
            </div>
        </div>
    </div>
        `
        }
        // console.log(data);
        var publicData=data
        var listBoxS = document.querySelectorAll('.listBox')
        var adds = document.querySelectorAll('.jia')
        var reduce = document.querySelectorAll('.jian')
        var remove = document.querySelectorAll('.del')
        var gss = document.querySelectorAll('.gs')
        var jes = document.querySelectorAll('.je')
        var djs = document.querySelectorAll('.dj')

        for (let i = 0; i < adds.length; i++) {
            adds[i].addEventListener('click', function () {
                REQUEST.get('/add', {
                    params: {
                        token: localStorage.getItem('loginF'),
                        goodId: publicData[i].Id
                    }
                }, function (data) { 
                    if (data.code == 1) {
                        gss[i].innerHTML++
                        jes[i].innerHTML = `${gss[i].innerHTML * djs[i].innerHTML}`
                    }
                })
            })
        }
        for (let j = 0; j < reduce.length; j++) {
            reduce[j].addEventListener('click', function () {
                REQUEST.get('/remove', {
                    params: {
                        token: localStorage.getItem('loginF'),
                        goodId: publicData[j].Id
                    }
                }, function (data) {
                    if (data.code == 1) {
                        gss[j].innerHTML--
                        jes[j].innerHTML = `${gss[j].innerHTML * djs[j].innerHTML}`
                        if (gss[j].innerHTML == 0) {
                            // console.log(publicData[j].Id);
                            REQUEST.get('/del', {
                                params: {
                                    token: localStorage.getItem('loginF'),
                                    goodId: publicData[j].Id
                                }
                            }, function (data) {
                                listBoxS[j].remove()
                            })
                        }
                    }
                })
            })
        }
        for (let k = 0; k < remove.length; k++) {
            remove[k].addEventListener('click', function () {
                REQUEST.get('/del', {
                    params: {
                        token: localStorage.getItem('loginF'),
                        goodId: publicData[k].Id
                    }
                }, function (data) {
                    if (data.code == 1) {
                        location.reload()
                    }
                })
            })
        }
        // 搜索 
        var searchText =document.querySelector('.search input')
        var searchKey=document.querySelector('.search button')
        searchKey.addEventListener('click',function(){
            var code=encodeURI(searchText.value)
            // loading()
            location.href=`../view/search.html?word=${code}`
            
        })
    })
}