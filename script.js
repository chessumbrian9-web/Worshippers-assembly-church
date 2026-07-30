const slides = document.querySelectorAll(".slide");

let current = 0;

function nextSlide(){

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");
}

setInterval(nextSlide,5000);

// Back to top button
let topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

function topFunction(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}
// Mobile Menu

const menuToggle=document.getElementById("menu-toggle");

const navLinks=document.getElementById("nav-links");

menuToggle.onclick=function(){

navLinks.classList.toggle("active");

}

// Header Color Change

window.addEventListener("scroll",function(){

const header=document.getElementById("header");

if(window.scrollY>80){

header.style.background="#081625";

}else{

header.style.background="transparent";

}

});
