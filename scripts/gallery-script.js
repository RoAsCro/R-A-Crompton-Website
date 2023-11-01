

function loadGallery() {
    const filePath = "../resources/images/";
    
    let gallery = document.getElementsByClassName("gallery");
    
    for(let category of gallery) {

    
        let imageType = category.getAttribute("id");

        $.get("../scripts/images.xml", function( data ) {

            const images = data.querySelectorAll(imageType + " > image");
            
            for (let image of images) {
                const anchor = document.createElement("a");
                const img = document.createElement("img");
                const path = filePath + image.querySelector("name").innerHTML;
                img.setAttribute("src", path);
                anchor.setAttribute("href", path);
                img.setAttribute("alt", image.querySelector("alt").innerHTML);
                img.setAttribute("height", 400);
                img.setAttribute("class", "galleryItem");
                anchor.appendChild(img);
                category.append(anchor);
            }
            },
            "xml"
            )
    }
}



window.onload = function() {
    loadGallery();
    //Call the default-script load function
    loadUp();
}