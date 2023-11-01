function colourMode() {
    let html = document.getElementsByTagName("html")[0];
    let current = html.getAttribute("id"); 
    let mode = "light"
    let text = "Dark"

    if (current === "light") {
        mode = "dark";
        text = "Light";
    }
    
    document.getElementById("mode").innerHTML = text + " Mode";
    html.setAttribute("id", mode);
}

function loadUp() {

    // Add the dark mode button to the top of the document
    const button = document.createElement("button");
    button.setAttribute("id", "mode");
    button.innerHTML = "Dark Mode";

    button.onclick = colourMode;
    const body = document.getElementsByTagName("body")[0];

    body.insertBefore(button, body.firstChild);

}


window.onload = function() {
    loadUp();
    // document.getElementById("mode").onclick = colourMode;
}