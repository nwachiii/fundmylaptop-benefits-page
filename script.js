//navbar links

const navbar = document.querySelector(".nav-ham");
a = navbar.querySelectorAll("a")

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active")
    }
    this.classList.add("active");
    document.querySelector(".nav-ham").classList.toggle("show");
  })
})

//Hamburger

const hamBurger = document.querySelector(".hamburger");

hamBurger.addEventListener("click", function () {
  document.querySelector(".nav-ham").classList.toggle("show");
})