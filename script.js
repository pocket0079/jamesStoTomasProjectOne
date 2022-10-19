document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector('#hamburger');
    const menuCloseButton = document.querySelector('#menuClose');
    const menu = document.querySelector('.slideOutNav');
    const backToTop = document.querySelector('.backToTop');
    const header = document.querySelector('.top');
    const closeMenu = menu.classList.contains('open')


    //hamburgerMenu-------------------//
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


    //back to top button-----------------------//
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

    
    //quote carousel-------------------------//
    //target arrow and listen for click event
    // const forwardArrow = document.querySelector('.fa-angle-right');

    // const backArrow = document.querySelector('.fa-angle-left');

    // forwardArrow.addEventListener('click', function (event) {
    //     console.log(event);
    // });

    // const prevQuote = backArrow.addEventListener('click', function (event) {
    //     console.log(event);
    // });

    //contact form required fields-----------------------------//

    const submitButton = document.querySelector('.contactButton');
    const formName = document.getElementById('name');
    const formEmail = document.getElementById('email');
    const formSubject = document.getElementById('subject');
    const formMessage = document.getElementById('message');
    console.log(formName.value)

    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        if (formName.value && formEmail.value && formSubject.value && formMessage.value != '') {
            alert('Thank you! We will be in touch!')
            
        } else {
            alert('Please fill out required fields')
            
        }
    })
});
