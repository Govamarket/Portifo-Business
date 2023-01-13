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
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 1000);

let cssStyle = document.querySelector("#css");
let time = 0;
setInterval(() => {
  if (time == 30) {
    clearInterval();
  } else {
    time += 1;
    css.innerHTML = counter + "%";
  }
}, 1000);

let bootstrap = document.querySelector("#strap");
let count = 0;
setInterval(() => {
  if (count == 30) {
    clearInterval();
  } else {
    count += 1;
    strap.innerHTML = counter + "%";
  }
}, 1000);

let javaScript = document.querySelector("#script");
let limit = 0;
setInterval(() => {
  if (limit == 30) {
    clearInterval();
  } else {
    limit += 1;
    script.innerHTML = counter + "%";
  }
}, 1000);
navSlide();

const formAll = document.querySelector("#form");
const userName = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const button = document.querySelector("#btn");

// Error handling
const errorMgs = document.querySelector("#error");
const errorPws = document.querySelector("#pswE");

// Funtionality check
const validate = () => {
  if (userName.value === "") {
    document.querySelector("#error").innerHTML = "Please enter username";
    errorMgs.style.visibility = "visible";
  }else{
    errorMgs.style.visibility ="hidden";
  }

  if (passwordInput.value === "") {
    document.querySelector("#pswE").innerHTML = "Please enter password";
    errorPws.style.visibility = "visible";
  }else{
    errorPws.style.visibility = "hidden";
    
  }
};



button.addEventListener("click", (event) => { 
  if (userName.value == "" || passwordInput.value == "") {
    alert("Please enter your credentials");
  }else{
    localStorage.setItem("username", JSON.stringify(userName.value));
    localStorage.setItem("password", JSON.stringify(passwordInput.value));
    alert(JSON.stringify(userName.value + ' please access the login page to confirm details'));
    location.reload();
    window.location.href ="login.html";
  }
  validate();
 
});


