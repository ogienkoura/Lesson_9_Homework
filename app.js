const productsCountEl = document.getElementById("products-count");
const addToCartBtns = document.querySelectorAll(".btn-add-to-cart");


for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function (){
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
}

const modalBtns = document.querySelectorAll(".btn-more-details");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".btn-close");

modalBtns.forEach((btn) => {
    btn.addEventListener("click", function() {
        modal.classList.add("show");
    })
})



closeModal.addEventListener("click", function () {
    modal.classList.add("hide");
    modal.className = "modal";
})

// likes 

const likeBtns = document.querySelectorAll(".like-item");


likeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        const likedBtn = btn;
        likedBtn.classList.add("like-item-liked");
        if (likedBtn.classList.contains ("like-item-liked")) {
            likedBtn.addEventListener("click", function (){
                likedBtn.classList.remove("like-item-liked");
                likedBtn.className = "like-item";
            })           
        }
    })
})

