let bag = document.querySelector(".bag");
let modal = document.querySelector(".bag-menu");

bag.addEventListener("click", ()=>{
    hideUnhide(modal);
})


function hideUnhide (element){
    if (element.classList.contains("hide")){
        element.classList.remove("hide");
    } else {
        element.classList.add("hide");
    }
}

