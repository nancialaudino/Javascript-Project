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
  
  

function afficherGallery (){
  fetch('///home/user/Documents/Javascript-Project/JS%20Project/index.html#')
  .then(response => response.text())
  .then(htmlText => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    const images = doc.querySelectorAll('.row img');
    
    let imageGallery = document.querySelector(".imageGallery");
    images.forEach(img => {
      const newImg = document.createElement('img');
      newImg.src = img.src;
      imageGallery.appendChild(newImg);
    });
  });
  
  
}










//console.log(arrayImages);



/*



function afficherGallery (){
  let imageGallery = document.querySelector(".imageGallery");
  let images = document.querySelectorAll(".row img");
  for (i=0; i<images.length;i++){
    const new_image = document.createElement('img');
    new_image.src=images[i].src
    imageGallery.appendChild(new_image);

    console.log(images)
  }











function afficherGallery (){
  let images = document.querySelectorAll(".row img");
  let arrayImages = [];
  for (i=0; i<images.length;i++){
    arrayImages.push(images[i].src);
  }
  
//console.log(arrayImages);
  
}




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

