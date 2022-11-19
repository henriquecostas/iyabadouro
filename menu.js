let menuToggle = document.querySelector(".menu-toggle");
let menu = document.querySelector(".menu");
let btnFechar = document.querySelector(".fechar");
let nav = document.querySelector('nav');

menuToggle.addEventListener("click", ()=>{
    hideUnhide(menu);
})

btnFechar.addEventListener("click", ()=>{
    hideUnhide(menu);
})

function hideUnhide (element){
    if (element.classList == "menu hide"){
        element.classList.remove("hide");
        nav.classList.add("hide");
    } else {
        element.classList.add("hide");
        nav.classList.remove("hide");
    }
}