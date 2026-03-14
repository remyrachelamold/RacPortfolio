// HAMBURGER MENU

const menu = document.getElementById("menu");
const openBtn = document.getElementById("menuOpen");
const closeBtn = document.getElementById("menuClose");

openBtn.onclick = () => {
menu.classList.add("active");
};

closeBtn.onclick = () => {
menu.classList.remove("active");
};



// TYPING EFFECT

new Typed("#typing",{

strings:[
"Software Engineer",
"AI Developer",
"Full Stack Developer"
],

typeSpeed:60,
backSpeed:30,
loop:true

});



// SCROLL ANIMATIONS

ScrollReveal().reveal('.reveal',{

distance:'40px',
duration:1000,
origin:'bottom',
interval:200

});