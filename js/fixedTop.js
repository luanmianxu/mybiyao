function fixedTop(){
        var html=`
        <div class="fixedTop">
        <div class="w">
            <a href="./index.html">首页</a>
            <a href="./login.html">登录</a>
            <a href="./register.html">注册</a>

            <div class="fixedSearch">
                <input type="text" placeholder="   请输入你想要的商品">
                <button>搜索</button>
            </div>
        </div>
    </div>
        `
        document.body.innerHTML+=html
        // 获取dom节点
        var fixedTop=document.querySelector('.fixedTop')
        var fixedSearch=document.querySelector('.fixedSearch')
        var fixedTopA =document.querySelectorAll('.fixedTop a')
        var fixedTopBtn=document.querySelector('.fixedSearch button')
        var fixedSearchInput=document.querySelector('.fixedSearch input')

        fixedTopCss(fixedTop,{
            position: 'fixed',
            top: '0',
            backgroundColor:' #fff',
            height:' 80px',
            borderBottom:' 1px solid #000',
            boxShadow: '#ccc 1px 6px 10px',
            width:' 100%',
            zIndex: '1000',
            display:'none'
        })

        fixedTopCss(fixedSearch,{
            float:'right',
            marginTop:'15px',
            marginRight:'80px',
        })

        for(var i=0;i<fixedTopA.length;i++){
            fixedTopCss(fixedTopA[i],{
                display:'inline-block',
                lineHeight:'80px',
                padding:'0 8px 5px',
                height: '40px',
                textAlign:'center',
                marginLeft:'25px',
                color:'#000',
                fontSize:'20px',
            })
        }

        fixedTopCss(fixedTopBtn,{
            width:'100px',
            height:'50px',
            border:' 1px solid rgb(212, 212, 212)',
            backgroundColor:' #fff',
            marginLeft:'-5px',  
            borderRadius:'0 5px 5px 0',
            cursor:'pointer',
        })
        fixedTopCss(fixedSearchInput,{
            width:' 420px',
            height: '50px',
            border: '1px solid #ccc',
            outline: 'none',
            verticalAlign: 'top',
            borderRadius:'6px 0px 0px 6px',
            fontSize: '16px'
        })
        
        window.addEventListener('scroll',function(){
        document.documentElement.scrollTop>=300?fixedTop.style.display='block':fixedTop.style.display='none'
        })
}

function fixedTopCss(dom,obj){
    var style = obj

for (var x in style) {
    dom.style[x] = style[x];
}

return dom

}