function backTop() {
    var backTop = document.createElement('div')
    backTop.className = 'backTop'
    backTopCss(backTop)
    backTop.innerText='回'
    document.body.appendChild(backTop)
    window.addEventListener("scroll", function (e) {
        var top = this.document.documentElement.scrollTop
        top > 400 ? backTop.style.display = "block" : backTop.style.display = "none"
    })
    function back(obj, high) {
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
}

function backTopCss(option) {
    var style = {
        width: '100px',
        height: '100px',
        textAlign: 'center',
        lineHeight: '100px',
        backgroundColor:' #ccc',
        fontSize: '30px',
        position:'fixed',
        bottom:'5%',
        right:'3%',
        cursor: 'pointer',
        display:' none',
}

for (var x in style) {
    option.style[x] = style[x];
}

return option

}
