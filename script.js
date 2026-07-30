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
