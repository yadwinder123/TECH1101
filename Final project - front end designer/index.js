// Scroll To Top Button

// Get the button
const up = document.querySelector("#btn");

// when click on button
up.addEventListener("click" ,function(){
    document.body.scroll = 0; //For Safari
    document.documentElement.scrollTop = 0; //For IE, OperaChrome, Firefox and Chrome 


});

// when scroll down, show the button
window.onscroll = function() {
    scrollFn();
}

function scrollFn(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        up.style.display = "block";
    }
    else{
        up.style.display = "none";
    }
}

//Get dynamic year from internet
const dynamic = document.querySelector("#dynamicyear");
dynamic.textContent= new Date().getFullYear();

