function loading() {

    var load = document.createElement('div')
    load.className = "load"
    document.body.appendChild(load)
    loadCss(load)
    load.style.display = 'block'
   var loadout= setTimeout(function () {
       load.style.display = 'none'
       clearTimeout(loadout)
    }, 1000)
}

function loadCss(option) {
    var style = {
        width: '100vw',
        height: '100vh',
        position:'absolute',
        top: '0',
        left: '0',
        zInedx:'9999',
        opacity: '0.95',
        background: '#eee url(../assets/images/loading.jpg) no-repeat ',
        backgroundSize: '200px 200px',
        backgroundPosition: '50% 50%',
        textAlign: 'center',
        display: 'none',
    }

    for (var x in style) {
        option.style[x] = style[x];
    }
  
    return option

}
// loading()