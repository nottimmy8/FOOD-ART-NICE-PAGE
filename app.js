var menuBtn = document.getElementById("menuBtn");
var sidenav = document.getElementById("sidenav");
var menu = document.getElementById("menu");

sidenav.style.left = "-250px";

menuBtn.onclick = function () {
  if (sidenav.style.left == "-250px") {
    sidenav.style.left = "0";
    menu.src = "close.png";
  } else {
    sidenav.style.left = "-250px";
    menu.src = "menu.png";
  }
};
