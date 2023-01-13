const form = document.querySelector('form');
const userName = document.querySelector("#userName");
const passwordInput = document.querySelector("#password");
const buttonType = document.querySelector("#btn");

// Error messages of the form 
const errorMessages = document.querySelector("#error");
const passwordMsg = document.querySelector("#errorP"); 
const notMatchMsg = document.querySelector("#notmatch");
const notSame = document.querySelector("#notsame");

// Declaring localStorage properties "targeting"
const regData = JSON.parse(localStorage.getItem("username"));
const regPsw = JSON.parse(localStorage.getItem("password"));


const validateAll = () => {
    if (username.value === "" ) {
    errorMessages.innerHTML = "Please enter a username";
    errorMessages.style.visibility = "visible";
    notMatchMsg.style.visibility = "hidden";
    }
    else if (username.value !== regData) {
        notMatchMsg.innerHTML = "Password does not match";
        notMatchMsg.style.visibility = "visible";
        errorMessages.style.visibility = "hidden";
    }else if (username.value === regData) {
        errorMessages.style.visibility = "hidden";
    }

    if (passwordInput.value === "") {
        passwordMsg.innerHTML = "Please enter a password";
        passwordMsg.style.visibility = "visible";
        notSame.style.visibility = "hidden";
    }else if (passwordInput.value !== regPsw) {
        notSame.innerHTML = "Password does not match";
        notSame.style.visibility = "visible";
        passwordMsg.style.visibility = "hidden";
    }else if (passwordInput.value === regPsw) {
        notSame.style.visibility = "hidden";
        passwordMsg.style.visibility = "hidden";
    }
}



buttonType.addEventListener("click",(event) => {
    if (!username.value.match(regData) ||  !passwordInput.value.match(regPsw)) {
        alert("Incorrect details!");
    }else{
        alert("Welcome!");
        location.reload();
        window.location.href = "https://app.slack.com/client/T04D6SL23P1/C04DMD74KPU";  
    }
    validateAll();

})