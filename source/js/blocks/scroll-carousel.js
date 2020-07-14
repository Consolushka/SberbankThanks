let wrapper = document.querySelector(".examples__offer-wrapper");
let arr = wrapper.querySelectorAll(".examples__offer-card");
let btnPrev = wrapper.querySelector(".examples__offer-btn--prev");
let btnNext = wrapper.querySelector(".examples__offer-btn--next");


console.log(wrapper.querySelector(".examples__offer-card").lastElementChild);
btnPrev.addEventListener("click",()=>{
  wrapper.removeChild(wrapper.querySelector("#last"));
  wrapper.prepend(arr[2]);
  arr = wrapper.querySelectorAll(".examples__offer-card");
  arr[0].setAttribute("id","first");
  arr[1].removeAttribute("id");
  arr[2].setAttribute("id","last");
});
btnNext.addEventListener("click", ()=>{
  wrapper.removeChild(wrapper.querySelector("#first"));
  wrapper.append(arr[0]);
  arr = wrapper.querySelectorAll(".examples__offer-card");
  arr[0].setAttribute("id","first");
  arr[1].removeAttribute("id");
  arr[2].setAttribute("id","last");
});
