// Brugermenuen
var showingMenu = false


function openMenu() {
  // Fjerner eller tilføjer en class, ved at toggle
  let links = document.getElementById("myLinks")

  links.classList.toggle("showLinks")

  showingMenu = !showingMenu;
}

// Pop up bokse variabler
var showingSundhed = false
var showingErnaring = false
var showingMotion = false
var showingSkraddersyet = false

// Funktion til når man klikker på det uden om den åbne burgermenu, så lukker menuen også
window.onclick = ((event) => {
  let classes = event.target.classList
  let isShowLinks = false
  let isMenu = false
  let menuIcon = document.getElementById("menu-icon")

  let popUpSundhed = false
  let popUpErnaring = false
  let popUpMotion = false
  let popUpSkraddersyet = false


  for (let i = 0; i < classes.length; i++) {
    // Tjekker om det element der klikkes på indeholder classen "showLinks"
    if (classes[i] == "showLinks"){
      isShowLinks = true
    }
    // Tjekker om det element der klikkes på indeholder classen "menu-icon"
    if (classes[i] == "menu-icon"){
      isMenu = true
    }

    if (classes[i] == "popUpSundhed" || classes[i] == "closeIcon" || classes[i] == "pointIconPopBox" || classes[i] == "popBoxh1" || classes[i] == "popBoxP" || classes[i] == "linkText"){
      popUpSundhed = true
    }
    if (classes[i] == "popUpErnaring" || classes[i] == "closeIcon" || classes[i] == "pointIconPopBox" || classes[i] == "popBoxh1" || classes[i] == "popBoxP" || classes[i] == "linkText"){
      popUpErnaring = true
    }
    if (classes[i] == "popUpMotion" || classes[i] == "closeIcon" || classes[i] == "pointIconPopBox" || classes[i] == "popBoxh1" || classes[i] == "popBoxP" || classes[i] == "linkText"){
      popUpMotion = true
    }
    if (classes[i] == "popUpSkraddersyet" || classes[i] == "closeIcon" || classes[i] == "pointIconPopBox" || classes[i] == "popBoxh1" || classes[i] == "popBoxP" || classes[i] == "linkText"){
      popUpSkraddersyet = true
    }
  }
  // ShowingMenu skal være true, isShowLinks skal være false og isMenu skal være false - før den toggle classen
  if (showingMenu && !isShowLinks && !isMenu) {
    openMenu()
    menuIcon.classList.toggle("active")
  } 

  if (!popUpSundhed && showingSundhed) {
    openSundhed()
  }
  if (!popUpErnaring && showingErnaring) {
    openErnaring()
  }
  if (!popUpMotion && showingMotion) {
    openMotion()
  }
  if (!popUpSkraddersyet && showingSkraddersyet) {
    openSkraddersyet()
  }
})



// Slideshowet er taget fra Dittes portfolio
// https://github.com/dittelh/portfolio/blob/main/craftddk/craftddk.js
// D. 7.6 2022
// Funktion til at skifte mellem kundeudtalelser
var activeId = 0; 

function nextClient(){
  if(activeId !== 2){
    activeId = activeId + 1;
  } else {
    activeId = 0;
  }

  for (let i = 0; i < 3; i++){
    if(i == activeId){
      document.getElementById('client' + i).classList.add('clientActive');
    } else{
      document.getElementById('client' + i).classList.remove('clientActive')
    }
  }
}

function previousClient(){
  if(activeId !== 0){
    activeId = activeId - 1;
  } else {
    activeId = 2;
  }

  for (let i = 0; i < 3; i++){
    if(i == activeId){
      document.getElementById('client' + i).classList.add('clientActive');
    } else{
      document.getElementById('client' + i).classList.remove('clientActive')
    }
  }
}



// Funktion til instagram feede'ene
let feedContainer = document.getElementById("feedContainer")

// Tjekker om feedContainer er på documentet, hvis den ikke, er så har den ikke værdi
if(feedContainer !== null){

// Denne sektion af kode fra postman, som er et program til at arbejde med API'er, 
// som vi skal bruge til at hente instagram billeder ud af
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

// Denne token skal udskiftes med en ny token hver 2. måned 
// Tokenet er fra d. 3 maj 2022
var token = "IGQVJYNU02ZADQ0cWNkcWFyOTNtUVBEUl9FYVRYNGFfUjJuS2x5ZAlBkbzg3cno4aHZAzaURBNzV0QUtaQ1dMNlhvX3dDNENudkhMcXhoOHYybjdGVEJMeTE5ZAFBBNDJFN3IzTVdQVUNHZA1kwMTNfVW1XYgZDZD"

fetch("https://graph.instagram.com/v13.0/me/media?fields=id,media_url,permalink&access_token="+token+"&limit=10", requestOptions)
  .then(response => response.text())
  .then(result => handleInstagramFeed(result))
  .catch(error => console.log('error', error));


  // JSON kode inspirationen kommer fra dette link:
  // https://www.w3schools.com/js/js_json_parse.asp?fbclid=IwAR0IdcBPxPTi2ceGQSZiBRf9BbA9d_7kaFbh1Q5UmfuQDJLmqx0Mu-4kt4g
  // d. 1/6/2022
function handleInstagramFeed(instagramFeed) {
  // JSON.parse = parse gør, at vi JavaScripten kan håndtere JSON som et objekt og ikke bare en lang string
  let feed = JSON.parse(instagramFeed).data

  console.log(instagramFeed)
    for (let i = 0; i < feed.length; i++) {
      var newA = document.createElement("a")
      newA.href = feed[i].permalink
      newA.target = "_blank"
      newA.className = "instaA"
      newA.title = "Klik for at se Instagram billedet"
      feedContainer.appendChild(newA)
      

      var newImg = document.createElement("img")
      newImg.src = feed[i].media_url
      newImg.alt = "Instagram billede"
      newImg.className = "instaImg"
      newA.appendChild(newImg)
    }
  }
}





// Pop up bokse

function openSundhed() {
  // Fjerner eller tilføjer en class, ved at toggle
  let popBox = document.getElementById("sundhedBox")
  let blurBoxes = document.getElementsByClassName('popUpBlur');

  popBox.classList.toggle("popBox")

  for (let i = 0; i < blurBoxes.length; i++) {
    blurBoxes[i].classList.toggle('blur');
  }

  showingSundhed = !showingSundhed
}

function openErnaring() {
  // Fjerner eller tilføjer en class, ved at toggle
  let popBox = document.getElementById("ernaringBox");
  let blurBoxes = document.getElementsByClassName('popUpBlur');

  popBox.classList.toggle("popBox")

  for (let i = 0; i < blurBoxes.length; i++) {
    blurBoxes[i].classList.toggle('blur');
  }

  showingErnaring = !showingErnaring
}

function openMotion() {
  // Fjerner eller tilføjer en class, ved at toggle
  let popBox = document.getElementById("motionBox");
  let blurBoxes = document.getElementsByClassName('popUpBlur');

  popBox.classList.toggle("popBox")

  for (let i = 0; i < blurBoxes.length; i++) {
    blurBoxes[i].classList.toggle('blur');
  }

  showingMotion = !showingMotion
}

function openSkraddersyet() {
  // Fjerner eller tilføjer en class, ved at toggle
  let popBox = document.getElementById("skraddersyetBox");
  let blurBoxes = document.getElementsByClassName('popUpBlur');

  popBox.classList.toggle("popBox")

  for (let i = 0; i < blurBoxes.length; i++) {
    blurBoxes[i].classList.toggle('blur');
  }

  showingSkraddersyet = !showingSkraddersyet
}