const form = document.querySelector("#login-form");
const userInput = document.querySelector("#user");
const passInput = document.querySelector("#pass");
const loginBtn = document.querySelector("#loginBtn");
const errorMsj = document.querySelector("#errorMsj");

if (localStorage.getItem("logged") === "true") {
    window.location.href = "mapa.html";
}


form.addEventListener("submit", (evS) => {
    evS.preventDefault();
    errorMsj.textContent = "";
    if (userInput.value === "estudiante@guayerd.com" && passInput.value === "123456") {
        userInput.value = "";
        passInput.value = "";
        window.location.href = "mapa.html";
        localStorage.setItem("logged", true);
    } else {
        errorMsj.textContent = "Usuario y/o contraseña incorrecto/s";
    }
});

