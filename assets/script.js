const btnHamburger = document.querySelector("#hmbg");
const header = document.querySelector(".header");
const fade = document.querySelector(".visible");
const body = document.querySelector("body");

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");


btnHamburger.addEventListener('click', function(){
    console.log("open hamburger");

    if(header.classList.contains('open')){ //close hamburger menu
        header.classList.remove('open');
        body.classList.remove("noscroll");
        fade.classList.add('visible')
    }else{ //open hamburger menu
        body.classList.add("noscroll");
        header.classList.add('open');
        fade.classList.remove('visible');

        home.addEventListener('click', function(){
            console.log("about");

            body.classList.remove("noscroll");
            header.classList.remove('open');
            fade.classList.add('visible')
        });

        about.addEventListener('click', function(){
            console.log("about");

            body.classList.remove("noscroll");
            header.classList.remove('open');
            fade.classList.add('visible')
        });

        contact.addEventListener('click', function(){
            console.log("contact");

            body.classList.remove("noscroll");
            header.classList.remove('open');
            fade.classList.add('visible')
        });
        
    }


});