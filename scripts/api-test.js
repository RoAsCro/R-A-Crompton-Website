const api_url = "https://randomuser.me/api/"; 
const api_url_2 = "https://api.magicthegathering.io/v1/cards?"; 
const api_url_3 = "https://api.magicthegathering.io/v1/cards/"; 
const scryfall = "https://api.scryfall.com/cards/multiverse/";

  async function getCard() { 

    // Reset hint
    document.getElementById("hint-output").setAttribute("style", "visibility: hidden;")

    
    // Making an API call (request) 
    // and getting the response back 
    const id = Math.floor(Math.random() * 4972)
    const response = await fetch(api_url_2 + new URLSearchParams({
      multiverseid: id
  }));
    
    // Parsing it to JSON format 
    const data = await response.json(); 
    // const mtg = require('mtgsdk')

    // mtg.card.find(386616)
    // .then(result => {
    //   console.log(result.card.name)
    // })


    console.log(data.cards); 
    console.log(data.cards[0].originalText); 

    // const responseTwo = await fetch(api_url_3 + id);
    // const dataTwo = await responseTwo.json()
    // console.log(dataTwo.card); 

    const responseThree = await fetch(scryfall + id);
    const dataThree = await responseThree.json()
    // console.log(dataThree.image_uris.small); 

    document.getElementById("output").setAttribute("src", dataThree.image_uris.art_crop);
    document.getElementById("hint-output").innerHTML = dataThree.oracle_text;
    
  }

  function getHint() {
    document.getElementById("hint-output").setAttribute("style", "")
  }

window.onload = function() {
  // window.alert();
    loadUp();
    document.getElementById("hint").onclick = getHint;
    document.getElementById("activate").onclick = getCard;
}