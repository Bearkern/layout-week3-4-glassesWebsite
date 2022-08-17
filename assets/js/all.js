"use strict";

var hamMenu = document.getElementById("hamMenu");
var hamClose = document.getElementById("hamClose");
hamMenu.addEventListener('click', function () {
  this.style.display = "none";
  hamClose.style.display = "block";
  var navMenu = document.getElementById("navMenu");
  navMenu.style.display = "block";
});
hamClose.addEventListener('click', function () {
  this.style.display = "none";
  hamMenu.style.display = "block";
  var navMenu = document.getElementById("navMenu");
  navMenu.style.display = "none";
});
//# sourceMappingURL=all.js.map
