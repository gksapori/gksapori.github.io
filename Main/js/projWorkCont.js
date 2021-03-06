/**Function to check if image entered viewport
*@Input element to enter viewport
*
*@retun boolean
*/
var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};


/**Fades in projects and work experience
*@Input Null
*
*@retun NULL
*/
function contAppear() {
  var prods = $('.contIn h4 img');
  var prod = $('.hidden1');
  var scrollPosition = 0;
  var prodDistFromTop = [];
  window.addEventListener("scroll", function() {
    for(let i = 0; i < prods.length; i++) {
      let appeared = false;
      if(isInViewport(prods[i]) && !appeared){
        prod[i].classList.remove("hidden1");
        prod[i].classList.add("visible1");
        appeared = true;
      }

    }
  });	
}


contAppear();