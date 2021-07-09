
var res = decodeURI((location.search).split('=')[1])
REQUEST.get('/goodlist',
                { params: { type_one: res } },
                function (data) {
                    //获取二级分类
                    for (var i = 0; i < data.length; i++) {
                        if (type.indexOf(data[i].type_two) == -1) {
                            type.push(data[i].type_two)
                        }
                    }



                    // 创建楼层
                    
                    for (var t = 0; t < type.length; t++) {
                        var h2 = document.createElement('h2');
                        h2.innerHTML = type[t];
                        list.appendChild(h2);
                        var p=document.createElement('p')
                        p.innerHTML=type[t]
                        floor.appendChild(p)
                        

                        for (var j = 0; j < data.length; j++) {
                            if (type[t] == data[j].type_two) {
                                list.innerHTML += `
                                     <li class="item" data-Id=${data[j].Id}>
                                         <img src="${data[j].img_list_url}" alt="" data-src='${data[j].img_list_url}'>
                                         <h3>${data[j].title}</h3>
                                         <span class="fh">￥</span><span class="fh fl">${data[j].price}</span>
                                         ${data[j].mack}
                                     </li>
                                 `
                            }
                        }
                       
                        var item = document.querySelectorAll('.item')
                        for (var i = 0; i < item.length; i++) {
                            item[i].addEventListener('click', function () {
                                var ids = this.getAttribute('data-Id');
                                location.href = `../view/details.html?goodId=${ids}`
                            })
                        }
                        
                    }
                    var floorScrollP=document.querySelectorAll('.floor p')
                    var floorScrollH=document.querySelectorAll('.list h2 ')
                    window.onscroll=function(){

                        for(var b=0;b<floorScrollH.length;b++){
    
                        if((document.documentElement.scrollTop + window.innerHeight/2) >= floorScrollH[b].offsetTop){
                            for(var c=0;c<floorScrollH.length;c++){
                                floorScrollP[c].style.backgroundColor='#fff'
                            }
                                floorScrollP[b].style.backgroundColor='red'
                        }
                        }
                        }
                        console.log(floorScrollP);
                         for(let d=0;d<floorScrollP.length;d++){
                             floorScrollP[d].addEventListener('click',function(){
                                 window.scrollTo(0,floorScrollH[d].offsetTop)   
                             })
                         }

                })
    // 组件
    fixedTop()
    backTop()
   loading()


    var item = document.querySelectorAll('.item')
    for (var i = 0; i < item.length;i++) {
        item[i].addEventListener('click', function () {
            var ids = this.getAttribute('data-Id');
            location.href = `../view/details.html?goodId=${ids}`
        })
 }

 //
    var navLis = document.querySelectorAll('nav li')
    var list = document.querySelector(`.list ul`)
    var floor=document.querySelector('.floor')
    // 创建二级标题数组
    var type = []
    for (let i = 0; i < navLis.length; i++) {
        navLis[i].addEventListener('click',function () {
            var navLis_text = navLis[i].innerText
            // 组件加载
            loading()
            list.innerHTML=""
            floor.innerHTML=""
            type=[]

            REQUEST.get('/goodlist',
                { params: { type_one: navLis_text } },
                function (data) {
                    //获取二级分类
                    for (var i = 0; i < data.length; i++) {
                        if (type.indexOf(data[i].type_two) == -1) {
                            type.push(data[i].type_two)
                        }
                    }
                        // console.log(type);



                    // 创建楼层
                    
                    for (var t = 0; t < type.length; t++) {
                        var h2 = document.createElement('h2');
                        h2.innerHTML = type[t];
                        list.appendChild(h2);
                        var p=document.createElement('p')
                        p.innerHTML=type[t]
                        floor.appendChild(p)
                        

                        for (var j = 0; j < data.length; j++) {
                            if (type[t] == data[j].type_two) {
                                list.innerHTML += `
                                     <li class="item" data-Id=${data[j].Id}>
                                         <img src="${data[j].img_list_url}" alt="" data-src='${data[j].img_list_url}'>
                                         <h3>${data[j].title}</h3>
                                         <span class="fh">￥</span><span class="fh fl">${data[j].price}</span>
                                         ${data[j].mack}
                                     </li>
                                 `
                            }
                        }
                       
                        var item = document.querySelectorAll('.item')
                        for (var i = 0; i < item.length; i++) {
                            item[i].addEventListener('click', function () {
                                var ids = this.getAttribute('data-Id');
                                location.href = `../view/details.html?goodId=${ids}`
                            })
                        }
                        
                    }
                    var floorScrollP=document.querySelectorAll('.floor p')
                    var floorScrollH=document.querySelectorAll('.list h2 ')
                    window.onscroll=function(){
                    // console.log(floorScrollP,floorScrollH);
                    for(var b=0;b<floorScrollH.length;b++){

                    if((document.documentElement.scrollTop + window.innerHeight/2) >= floorScrollH[b].offsetTop){
                        for(var c=0;c<floorScrollH.length;c++){
                            floorScrollP[c].style.backgroundColor='#fff'
                        }
                            floorScrollP[b].style.backgroundColor='red'
                    }
                    }
                    }
                     for(let d=0;d<floorScrollP.length;d++){
                         floorScrollP[d].addEventListener('click',function(){
                             window.scrollTo(0,floorScrollH[d].offsetTop)   
                         })
                     }
                    
                    


                })
                    
        

        })
        
        //
    }   
    // 固定导航搜索
    var searchText =document.querySelector('.fixedSearch input')
    var searchKey=document.querySelector('.fixedSearch button')
    searchKey.addEventListener('click',function(){
        var code=encodeURI(searchText.value)
        // loading()
        location.href=`../view/search.html?word=${code}`
        
    })

window.onload=function(){
// 搜索 
var searchText =document.querySelector('.search input')
var searchKey=document.querySelector('.search button')
searchKey.addEventListener('click',function(){
    var code=encodeURI(searchText.value)
    // loading()
    location.href=`../view/search.html?word=${code}`
    
})
}


