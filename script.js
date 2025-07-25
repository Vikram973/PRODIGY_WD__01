window.addEventListener("scroll", function () {
  const header = document.getElementById("navbar");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
