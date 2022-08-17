const hamMenu = document.getElementById("hamMenu");
const hamClose = document.getElementById("hamClose");

hamMenu.addEventListener('click', function() {
  this.style.display = "none";
  hamClose.style.display = "block";
  const navMenu = document.getElementById("navMenu");
  navMenu.style.display = "block";
})
hamClose.addEventListener('click', function() {
  this.style.display = "none";
  hamMenu.style.display = "block";
  const navMenu = document.getElementById("navMenu");
  navMenu.style.display = "none";
})