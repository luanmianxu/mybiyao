function navLogin() {
    var a = document.querySelectorAll(' .top h2 a')
    if (localStorage.getItem('loginF')) {
        a[1].style.display = 'none';
        a[2].style.display = 'none';
        a[3].style.display = ' inline-block';
        a[4].style.display = 'inline-block';
    } else {

    }
    a[4].addEventListener('click', function () {
        localStorage.removeItem('loginF')
        a[3].style.display = 'none';
        a[4].style.display = 'none';
        a[2].style.display = ' inline-block';
        a[1].style.display = 'inline-block';
    })
}
