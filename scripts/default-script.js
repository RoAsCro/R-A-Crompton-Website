function colourMode() {
    let button = document.getElementById("mode");
    let sheet = "./styles/default-style.css";
    let mode = "dark"

    if (button.getAttribute("value") === "dark") {
        sheet = "./styles/dark-mode.css";
        mode = "light";
    }
    button.setAttribute("value", mode);
    document.getElementById("style-sheet").setAttribute("href", sheet);

}


window.onload = function() {
    document.getElementById("mode").onclick = colourMode;
}