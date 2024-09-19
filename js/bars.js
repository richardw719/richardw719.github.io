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
function python() {
   var isVisible = false;
   var element = document.getElementById("bar-expand-python")
   setInterval(function() {
    if (elementInViewport(element)) {
      document.getElementById("bar-expand-python").style.width = "80%"; 
      document.getElementById("bar-expand-python").style.MozAnimation =  "python 2s ease"; 
      document.getElementById("bar-expand-python").style.WebkitAnimation= "python 2s ease";

    } 
  }, 500);


   }

function java() {
   var isVisible = false;
   var element = document.getElementById("bar-expand-java")
   setInterval(function() {
    if (elementInViewport(element)) {
      document.getElementById("bar-expand-java").style.width = "40%"; 
      document.getElementById("bar-expand-java").style.MozAnimation =  "java 2s ease"; 
      document.getElementById("bar-expand-java").style.WebkitAnimation= "java 2s ease";

    } 
  }, 500);


   }

function css() {
   var isVisible = false;
   var element = document.getElementById("bar-expand-css")
   setInterval(function() {
    if (elementInViewport(element)) {
      document.getElementById("bar-expand-css").style.width = "40%"; 
      document.getElementById("bar-expand-css").style.MozAnimation =  "css 2s ease"; 
      document.getElementById("bar-expand-css").style.WebkitAnimation= "css 2s ease";

    } 
  }, 500);


   }

function html() {
   var isVisible = false;
   var element = document.getElementById("bar-expand-html5")
   setInterval(function() {
    if (elementInViewport(element)) {
      document.getElementById("bar-expand-html5").style.width = "70%"; 
      document.getElementById("bar-expand-html5").style.MozAnimation =  "html5 2s ease"; 
      document.getElementById("bar-expand-html5").style.WebkitAnimation= "html5 2s ease";

    } 
  }, 500);


   }

function javascript() {
   var isVisible = false;
   var element = document.getElementById("bar-expand-javascript")
   setInterval(function() {
    if (elementInViewport(element)) {
      document.getElementById("bar-expand-javascript").style.width = "60%"; 
      document.getElementById("bar-expand-javascript").style.MozAnimation =  "javascript 2s ease"; 
      document.getElementById("bar-expand-javascript").style.WebkitAnimation= "javascript 2s ease";

    } 
  }, 500);


   }


python()
java()
css()
html()
javascript()