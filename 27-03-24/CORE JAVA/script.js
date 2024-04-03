console.log("page loaded...");

function message() {
    alert("Ninja was liked!");
}

function login(element) {
    if (element.innerText == "Iniciar Sesion") {
        element.innerText = "Cerrar Sesion";
    } else {
        element.innerText = "Iniciar Sesion";
    }
}

function hide(el) {
    el.remove();
}