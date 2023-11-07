const api_url = "https://randomuser.me/api/"; 
const api_url_2 = "https://api.magicthegathering.io/v1/cards?"; 
const api_url_3 = "https://api.magicthegathering.io/v1/cards/"; 
const scryfall = "https://api.scryfall.com/cards/random";
let cardName = "";

async function getCard() { 

  // document.getElementById("text-output").setAttribute("style", "visibility: hidden;")
  $("#text-output").attr("style", "visibility: hidden;");
  $("#type-output").attr("style", "visibility: hidden;");
  $("#identity-output").attr("style", "visibility: hidden;");

  const responseThree = await fetch(scryfall);
  const dataThree = await responseThree.json(); 

  console.log(dataThree); 
  if (typeof dataThree.image_uris == 'undefined') {
    getCard();
    return;
  }

  document.getElementById("output").setAttribute("src", dataThree.image_uris.art_crop);
  let description = dataThree.oracle_text;
  cardName = dataThree.name;
  description = description.replace(cardName, "[CARD NAME]")
  document.getElementById("text-output").innerHTML = description
  $("#type-output").text(dataThree.type_line)

  let identity = dataThree.color_identity;
  if (identity.length == 0) {
    identity = "Colorless";
  }
  $("#identity-output").text(identity)

}

function getHint(type) {
  document.getElementById(type + "-output").setAttribute("style", "")
}

function submitAnswer() {
  if ($("#answer").val() === cardName) {
    const correct = $("#correct");
    correct.text(parseInt(correct.text()) + 1);
  } else {
    
  }
  const questions = $("#questions");
  questions.text(parseInt(questions.text()) + 1);
  getCard();

}


window.onload = function() {
    loadUp();
    $("#hint").on("click", function() {
      getHint("text")
    });
    $("#identity").on("click", function() {
      getHint("identity")
    });
    $("#types").on("click", function() {
      getHint("type")
    });
    getCard();


    $("#answer").on("keypress", function(e) {
      if (e.which === 13) {
        submitAnswer();
      }
      });
}