ScrollReveal({
    //  reset: true,
    distance: '60px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal("#my_card1", {delay: 200})
ScrollReveal().reveal("#my_card2", {delay: 300})
ScrollReveal().reveal("#my_card3", {delay: 400})
ScrollReveal().reveal("#slide_new_product", {delay: 400})
ScrollReveal().reveal("#ace", {delay: 300})



let zoro = document.getElementById("zoro");
let kaido = document.getElementById("kaido");
let ace = document.getElementById("ace");

console.log(ace.offsetWidth)



// if(ace.offsetWidth == "250"){
//   console.log(zoro.offsetWidth)
// }
// else{
//   window.addEventListener("scroll", function(){
//     let value = scrollY;
//     zoro.style.bottom = value * 0.15 + 'px';
//     // mountains_behind.style.top = value * 0.25 + 'px';
//     zoro.style.right = value * 0.15 + 'px';
//     kaido.style.bottom = value * 0.25 + 'px';
//   })
// }


let nextBtn = document.getElementById("right");
let prevBtn = document.getElementById("left");
const sliderItemWidth = 1050 ;
const sliderItemWidthResponsive = 330 ;
let positionX = 0;
let countSlide = 0;
let disableCount = 0;
let slideMain = document.getElementById('slide_new_product')
console.log(slideMain)

// prevBtn.disabled = true;

nextBtn.addEventListener("click", () => {
  handleSlider(1);

});

prevBtn.addEventListener("click", () => {
  handleSlider(-1);
});

function handleSlider(a) {
  if (a === 1) {
    countSlide++;
    if (countSlide < 3) {
      console.log(countSlide)
      if(ace.offsetWidth == "330"){
        positionX -= sliderItemWidthResponsive
        slideMain.style.transform = `translate(${positionX}px)`;
        slideMain.style.transition = "1s";
        console.log("1: ", ace.offsetWidth)
      }
      else{
        positionX -= sliderItemWidth;
        slideMain.style.transform = `translate(${positionX}px)`;
        slideMain.style.transition = "1s";
        console.log(ace.offsetWidth)
      }
      
    }   
    if(countSlide >= 3){
        countSlide = 0
        positionX = 0
        slideMain.style.transform = `translate(0px)`;
      slideMain.style.transition = "1s";
    }
    
  } else {
    --testCount;
    if (testCount > 0) {
      --countSlide;
      positionX += sliderItemWidth;
      slideMain.style.transform = `translate(${positionX}px)`;
      slideMain.style.transition = "1s";
    }

  }
}
