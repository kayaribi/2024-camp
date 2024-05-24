document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger .material-icons');
    const menu = document.querySelector('.frame4');

    hamburger.addEventListener('click', function () {
        menu.classList.toggle('show');
        if (menu.classList.contains('show')) {
            hamburger.textContent = 'close';
        } else {
            hamburger.textContent = 'menu';
        }
    });
});