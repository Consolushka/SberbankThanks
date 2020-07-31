var btnToggle = document.querySelector(".header__user-events-search");
var mask = document.querySelector(".mask");
var searchModal = document.querySelector(".header__user-events-modal");
console.log(btnToggle);
btnToggle.addEventListener("click", function () {
  mask.classList.add("mask--active");
  searchModal.classList.add("modal--shown");
  mask.addEventListener("click", function () {
    mask.classList.remove("mask--active");
    searchModal.classList.remove("modal--shown");
  })
});
