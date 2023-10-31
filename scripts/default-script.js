function colourMode() {
    let button = document.getElementById("mode");
    let sheet = "/default-style.css";
    let style = document.getElementById("style-sheet");
    let path = style.getAttribute("href");
    path = path.substring(0, path.lastIndexOf("/"));
    let mode = "dark"
    let text = "Dark"
    

    if (button.getAttribute("value") === "dark") {
        sheet = "/dark-mode.css";
        mode = "light";
        text = "Light";
    }
    button.setAttribute("value", mode);
    button.innerHTML = text + " Mode";
    document.getElementById("style-sheet").setAttribute("href", path + sheet);

}

function loadUp() {

    // Add the dark mode button to the top of the document
    const button = document.createElement("button");
    button.setAttribute("id", "mode");
    button.innerHTML = "Dark Mode";
    const body = document.getElementsByTagName("body")[0];

    body.insertBefore(button, body.firstChild);
}


window.onload = function() {
    loadUp();
    document.getElementById("mode").onclick = colourMode;
}