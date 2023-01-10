const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // the toggle navigation
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 7 + 1.5
        }s`;
      }
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};

let number = document.querySelector("#number");
let counter = 0;
setInterval(() => {

    if (counter == 30) {
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 1000);

let cssStyle = document.querySelector("#css");
let time = 0;
setInterval(() => {
    if (time == 30) {
        clearInterval();
    }else{
        time += 1;
        css.innerHTML = counter + "%";
    }
}, 1000);

let bootstrap = document.querySelector("#strap");
let count = 0;
setInterval(() => {
    if (count == 30) {
        clearInterval();
    }else{
        count += 1;
        strap.innerHTML = counter + "%";
    }
}, 1000);
