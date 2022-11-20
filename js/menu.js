let menuToggle = document.querySelector(".menu-toggle");
let menu = document.querySelector(".menu");
let btnFechar = document.querySelector(".fechar");

menuToggle.addEventListener("click", ()=>{
    hideUnhide(menu);
})

btnFechar.addEventListener("click", ()=>{
    hideUnhide(menu);
})

function hideUnhide (element){
    if (element.classList.contains("hide")){
        element.classList.remove("hide");
    } else {
        console.log("a")
        element.classList.add("hide");
    }
}


let menuLi = document.querySelector(".menu-li");
let menuOrixas = document.querySelector(".orixas");

menuLi.addEventListener('click', ()=>{
    expandMenu(menuLi, menuOrixas);
});

function expandMenu(elToggle, elHide){
    if (elToggle.classList.contains('expand')){
        elToggle.classList.remove('expand')
        elHide.classList.add('hide');
    } else {
        elToggle.classList.add('expand');
        elHide.classList.remove('hide');
    }
};