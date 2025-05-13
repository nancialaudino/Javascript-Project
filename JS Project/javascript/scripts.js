async function afficherBlagues() {
    const blagues = document.querySelector("#blagues");
    for (let i = 0; i < 10; i++) {
      try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr");
        const json = await response.json();
  
        const option = document.createElement("option");
  
        if (json.type === "twopart") {
          option.innerText = `${json.setup} - ${json.delivery}`;
        } else {
          option.innerText = json.joke;
        }
  
        blagues.appendChild(option);
      } catch (error) {
        console.error("Erreur lors de la recherche d'une blague:", error);
      }
    }
  }
  
  afficherBlagues();
  







/*
async function afficherFormation() {

const blagues = document.querySelector("#blagues");

fetch ("https://v2.jokeapi.dev/joke/Any?lang=fr").then(response => response.json()).then(json => {
    json.map(blague => {
        let option = document.createElement("option");
        option.innerText = blague.setup;
        blagues.appendChild(option);
    })
})

    /*
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr");
    const formation = await response.json();
    console.log(formation);
    */


    /*
  }

afficherFormation ();

  agora fazer com que ao ser seleciona

function displayBlagues () {

}



const blagues = document.querySelector("#blagues");
const url = "https://v2.jokeapi.dev/joke/Any?lang=fr";

fetch (url).then(response => response.json()).then(json => {
    json.map(blague => {
        const option = document.createElement("option")
        option.innerText = blague.setup;
        blagues.appendChild(option);
    })
})
*/

