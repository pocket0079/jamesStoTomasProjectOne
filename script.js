document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector('#hamburger');
    const menuCloseButton = document.querySelector('#menuClose');
    const menu = document.querySelector('.slideOutNav');
    const backToTop = document.querySelector('.backToTop');
    const header = document.querySelector('.top');

    hamburgerButton.addEventListener('click', (e) => {
        menu.classList.add('open');
    });

    menuCloseButton.addEventListener('click', (e) => {
        menu.classList.remove('open');
    });

    window.onscroll = function () { takeMeBack() };

    function takeMeBack() {
        if (document.documentElement.scrollTop > 900) {
            backToTop.classList.add('popUp')
        } else {
            backToTop.classList.remove('popUp')
        }
    }

    backToTop.addEventListener('click', (e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
})
