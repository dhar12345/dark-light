let sun = document.querySelector(".sun")
let moon = document.querySelector(".moon")
let body = document.querySelector("body")


moon.addEventListener("click",function(){
    body.classList.add('mood')
    moon.style.display="none"
    sun.style.display="block"
})

sun.addEventListener("click",function(){
    body.classList.remove('mood')
    sun.style.display="none"
    moon.style.display="block"
})






let cursor = document.querySelector(".cursor")

window.addEventListener('mousemove',function(e){


let x = e.clientX;
let y = e.clientY;

cursor.style.left= x +"px";
cursor.style.top= y + "px";


})
