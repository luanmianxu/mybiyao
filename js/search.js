var res=decodeURI( (location.search).split('=')[1])

REQUEST.get('/search',
 { params: { word: res } },
  function (data) {
    //   loading()
      if(data.length==0){
         return alert('暂时没有哦')
      }
    var list = document.querySelector(`.list ul`)
    var html = list.innerHTML
    for (var i = 0; i < data.length; i++) {
        html += `
            <li class="item" data-Id=${data[i].Id}>
                <img src="${data[i].img_list_url}" alt="" data-src='${data[i].img_list_url}'>
                <h3>${data[i].title}</h3>
                <span class="fh">￥</span><span class="fh fl">${data[i].price}</span>
                ${data[i].mack}
            </li>
        `
        list.innerHTML = html
    }
    var item = document.querySelectorAll('.item')
    console.log(item);
    for (let i = 0; i < item.length;i++) {
        item[i].addEventListener('click', function () {
            console.log(111);
            loading()
            var ids = item[i].getAttribute('data-Id')
            location.href = `../view/details.html?goodId=${ids}`
        })
    }

    fixedTop()
    backTop()
})
