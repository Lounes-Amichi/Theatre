// ||Theme management

let lightThemeButton = document.querySelector("#lightThemeButton")
let darkThemeButton = document.querySelector("#darkThemeButton")

function setTheme(theme) { // fonction interne pour le thème
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    lightThemeButton.classList.toggle("noDisplay")
    darkThemeButton.classList.toggle("noDisplay")
}

function toggleTheme() { // changement du thème
    if (localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "light");
    }
    else {
        localStorage.setItem("theme", "dark");
    }
    setTheme(localStorage.getItem("theme"));
}

window.onload = setTheme(localStorage.getItem("theme"));