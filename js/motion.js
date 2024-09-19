  function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return(
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}
function headline() {
   var isVisible = false;
   var element = document.getElementById("responsive-paragraph")
   setInterval(function() {
    if (elementInViewport(element)) {
      document.getElementById("responsive-paragraph").animate({left: '100px'}); 

    } 
  }, 500);


   }
   headline()