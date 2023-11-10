const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});



function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
function brakechain() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf0c1;";
  setTimeout(function () {
      a.innerHTML = "&#xf127;";
    }, 1000);
}
brakechain();
setInterval(brakechain, 2000);


/*----------------------------------------------------admin of cs page*/
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/*----------------------------------------------------------------------------*/

function myFunction() {
  var x = document.getElementById("click");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function myFunction1() {
  var y = document.getElementById("click1");
 y.className = "show";
  setTimeout(function(){ y.className = y.className.replace("show", ""); }, 3000);
}

function myFunction2() {
  var y = document.getElementById("click2");
 y.className = "show";
  setTimeout(function(){ y.className = y.className.replace("show", ""); }, 3000);
}

function myFunction3() {
  var y = document.getElementById("click3");
 y.className = "show";
  setTimeout(function(){ y.className = y.className.replace("show", ""); }, 3000);
}

function myFunction4() {
  var y = document.getElementById("click4");
 y.className = "show";
  setTimeout(function(){ y.className = y.className.replace("show", ""); }, 3000);
}

/*-----------------------------------------------------------------------*/