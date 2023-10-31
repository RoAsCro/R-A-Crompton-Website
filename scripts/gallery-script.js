
window.onload = function() {
    // window.alert();

    const filePath = "/resources/images/gallery-images"
    let gallery = document.getElementsByTagName("head")[0].getAttribute("id");

    $.get("../scripts/images.xml", function(data) {
        window.alert();

        const images = data.querySelectorAll("image < " + gallery);

        let output = "<p>";
        for (let i = 0; i < images.length; i++) {
            const img = document.createElement("img");
            img.setAttribute("src", filePath + images[i].querySelector("name").innerHTML);
            document.getElementsByTagName("body")[0].append;
        }
    })

}