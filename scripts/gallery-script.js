

function loadGallery() {
    const filePath = "../resources/images/";
    
    let gallery = document.getElementsByTagName("head")[0].getAttribute("id");

    $.get("../scripts/images.xml", function( data ) {

        const images = data.querySelectorAll(gallery + " > image");
        
        let output = "<p>";
        for (let i = 0; i < images.length; i++) {
            const anchor = document.createElement("a");
            const img = document.createElement("img");
            const path = filePath + images[i].querySelector("name").innerHTML;
            img.setAttribute("src", path);
            anchor.setAttribute("href", path);
            img.setAttribute("alt", images[i].querySelector("alt").innerHTML);
            img.setAttribute("height", 400);
            anchor.appendChild(img);
            document.getElementsByTagName("body")[0].append(anchor);
        }
        },
        "xml"
        )
}



window.onload = function() {
    loadGallery();
    //Call the default-script load function
    loadUp();
}