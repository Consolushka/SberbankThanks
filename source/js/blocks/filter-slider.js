var examplesRadio = document.querySelector(".examples__filter-radio");
var btns = (examplesRadio.querySelectorAll(".examples__filter-radio-change"));
$(btns).on("click", function () {
  btns.forEach(function (btn) {
    if(btn.classList.contains("examples__filter-radio-state")){
      $(btn).toggleClass("base-text--colored");
    }
    else{
      $(btn).toggleClass("examples__filter-radio-btn-slider--take");
    }

  });
});
