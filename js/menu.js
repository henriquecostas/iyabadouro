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