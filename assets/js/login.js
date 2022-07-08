const inputLogin = document.querySelector(".nickname");
const buttonLogin = document.querySelector(".play");
const form = document.querySelector(".form-login");

function validateInput (event) {
    const element = event.target;
    if (element.value.length >= 5) {
        buttonLogin.removeAttribute("disabled");
    } else {
        buttonLogin.setAttribute("disabled", "");
    }
}

function handleSubmit (event) {
    event.preventDefault();
    
    localStorage.setItem("player", inputLogin.value);
    window.location = "game.html";
}

inputLogin.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);