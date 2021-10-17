//HEADER STICKY
window.onscroll = function() {stickyHeaderFunction()};
var header = document.querySelector("header");
var sticky = header.offsetTop + 100;
function stickyHeaderFunction() {
  header.style.opacity=0;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
    header.style.opacity=1
  } else {
    header.classList.remove("sticky-header");
    header.style.opacity=1

  }
}
//back to top
let backTopBtn = document.querySelector('.back-top')
window.addEventListener('scroll',() =>{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backTopBtn.style.opacity = "1";
  } else {
    backTopBtn.style.opacity = "0";
  }
})

//FILTER MENU
if(document.querySelector('.filter-wrap p')){
let filterOptions = [...document.querySelectorAll('.filter-wrap ul li')]
let filterWrapText = document.querySelector('.filter-wrap p');
let filterWrap = document.querySelector('.filter-wrap');

function showFilterOptionsWrap(e){
  let filterOptionsWrap = document.querySelector('.filter-wrap ul')
  elementStyle = window.getComputedStyle(filterOptionsWrap)
  styleDisplay = elementStyle.getPropertyValue('display')
  if(styleDisplay === 'none'){
    filterOptionsWrap.style.display='block'

 }else{
  filterOptionsWrap.style.display='none'
 }
}
filterWrap.addEventListener('click', showFilterOptionsWrap)

function filterFunction(){
  filterWrapText.innerHTML = this.innerHTML
}

filterOptions.forEach(option => option.addEventListener('click',filterFunction))
}


//QUICK VIEW DIV CAROUSEL
$(document).ready(function(){

  $('#quick-view-div .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    
  });
  $('#quick-view-div .slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    arrows:false,
    focusOnSelect: true,
    responsive:[
    {
      breakpoint:479.98,
      settings:{
        slidesToShow:2
      }
      
    }
  ]
  });
});

//PROPERTY DETAILS DIV CAROUSEL
$(document).ready(function(){

  $('#property-details .slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    
  });
  $('#property-details .slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    arrows:false,
    focusOnSelect: true,
    responsive:[
    {
      breakpoint:479.98,
      settings:{
        slidesToShow:2
      }
      
    }
  ]
  });
});

//QUICK VIEW DIV DISPLAY
if(document.querySelector('#quick-view-div')){
  let quickViewBtns = [...document.querySelectorAll('.properties-quick-view')]
  let quickViewDiv = document.querySelector('#quick-view-div')
  let exitViewDivBtn = document.querySelector('.exit-btn img').addEventListener('click', () => {
    quickViewDiv.style.opacity='0'
    quickViewDiv.style.zIndex='-1'
  })
  function openQuickViewDiv(){
    quickViewDiv.style.opacity='1'
    quickViewDiv.style.zIndex='9'
  }
  quickViewBtns.forEach(btn=>btn.addEventListener('click',openQuickViewDiv))
}
//SUBMIT PROPERTY CHECK
  if(document.querySelector('.submit-property-property-type')){
    let checkButtons = [...document.querySelectorAll('.submit-property-property-type .check')]
    console.log(...document.querySelectorAll('.submit-property-property-type .check'))
    function displayCheck(){
      this.classList.toggle('check-display')
    }
    checkButtons.forEach(btn => btn.addEventListener('click',displayCheck))
  }



