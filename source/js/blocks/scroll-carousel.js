let wrapper = document.querySelector(".examples__offer-wrapper");
console.log(wrapper);
wrapper.addEventListener('mouseover',()=> {
  /*window.addEventListener('scroll', (event)=>{
    event.preventDefault();
    console.log("scroll");
  })*/
  
  onkeydown("pageUp", (event)=>{
    console.log("asd");
  })
  console.log("on");
});
