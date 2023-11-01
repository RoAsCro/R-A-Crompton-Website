

function loadGallery() {
    const filePath = "../resources/images/";
    
    let gallery = document.getElementsByTagName("head")[0].getAttribute("id");

    $.get("../scripts/images.xml", function( data ) {

        const images = data.querySelectorAll(gallery + " > image");
        
        let output = "<p>";
        for (let i = 0; i < images.length; i++) {
            const img = document.createElement("img");
            img.setAttribute("src", filePath + images[i].querySelector("name").innerHTML);
            img.setAttribute("alt", images[i].querySelector("alt").innerHTML);
            img.setAttribute("height", 400);
            document.getElementsByTagName("body")[0].append(img);
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