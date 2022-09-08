document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector('#hamburger');
    const menuCloseButton = document.querySelector('#menuClose');
    const menu = document.querySelector('.slideOutNav');


    hamburgerButton.addEventListener('click', (e) => {
        menu.classList.add('open');

    });
    if (closeMenu) {
        console.log('hello');
        window.addEventListener('click', function (event) {
            if (event.target != menu) {
                console.log('bye');
                menu.classList.remove('open');
            }
        })
    }

    menuCloseButton.addEventListener('click', (e) => {
        menu.classList.remove('open');
    });

    window.addEventListener('click', function (event) {
        if (event.target != menu && closeMenu == true){
            menu.classList.remove('open');
            console.log(closeMenu)
        }
    })


})
