function ScrollUp(){
    scroll(0, 0);
}


// Gender section

var genderPicked = document.getElementById("genderPicked")
var man = document.getElementById("man")

man.addEventListener("click", (event) => {
    let value = event.target.value
    genderPicked.innerHTML = value
})

var woman = document.getElementById("woman")

woman.addEventListener("click", (event) => {
    let value = event.target.value
    genderPicked.innerHTML = value
})


// Facts section

var weight = document.getElementById("weight")

weight.addEventListener("input", (event) => {
    let value = event.target.value
    let weightPicked = document.getElementById("weightPicked")
    weightPicked.innerHTML = value + " kg"
})

var age = document.getElementById("age")

age.addEventListener("input", (event) => {
    let value = event.target.value
    let agePicked = document.getElementById("agePicked")
    agePicked.innerHTML = value + " år"
})

var height = document.getElementById("height")

height.addEventListener("input", (event) => {
    let value = event.target.value
    let heightPicked = document.getElementById("heightPicked")
    heightPicked.innerHTML = value + " cm"
})


// Activity section

var points = document.getElementById("points")

points.addEventListener("input", (event) => {
    let value = event.target.value
    let activityPicked = document.getElementById("activityPicked")

    if(value == "0"){
        activityPicked.innerHTML = "Slet ikke"
    } else if(value == "1"){
        activityPicked.innerHTML = "Lidt"
    } else if(value == "2"){
        activityPicked.innerHTML = "Moderat"
    } else if(value == "3"){
        activityPicked.innerHTML = "Meget"
    } else if(value == "4"){
        activityPicked.innerHTML = "Ekstremt"
    }
})

var activ = document.getElementById("activ")

activ.addEventListener("input", (event) => {
    let value = event.target.value
    let activPicked = document.getElementById("activPicked")
    activPicked.innerHTML = value
})


// Wishing weight section

var wishWeight = document.getElementById("wishWeight")
var dontKnow = document.getElementById("dontKnow")

wishWeight.addEventListener("input", (event) => {
    let value = event.target.value
    let wishWeightPicked = document.getElementById("wishWeightPicked")
    wishWeightPicked.innerHTML = value + " kg"

    // dontKnow.value = "off"
    dontKnow.checked = false
})

dontKnow.addEventListener("click", (event) => {
    let value = event.target.value
    let wishWeightPicked = document.getElementById("wishWeightPicked")
    wishWeightPicked.innerHTML = value

    if(event.target.checked){
        wishWeight.value = "Ved ikke"
    } else {
        wishWeight.value = ""
    }
})


// Motivation section

var motivation = document.getElementById("motivationPoints")

motivation.addEventListener("input", (event) => {
    let value = event.target.value
    let motivationPicked = document.getElementById("motivationPicked")

    if(value == "0"){
        motivationPicked.innerHTML = "Slet ikke"
    } else if(value == "1"){
        motivationPicked.innerHTML = "Lidt"
    } else if(value == "2"){
        motivationPicked.innerHTML = "Moderat"
    } else if(value == "3"){
        motivationPicked.innerHTML = "Meget"
    } else if(value == "4"){
        motivationPicked.innerHTML = "Ekstremt"
    }
})


// Allergy section

var allergy = document.getElementById("allergy")
var noAllergy = document.getElementById("noAllergy")

allergy.addEventListener("input", (event) => {
    let value = event.target.value
    let allergyPicked = document.getElementById("allergyPicked")
    allergyPicked.innerHTML = value

    noAllergy.value = "Nej"
    noAllergy.checked = false
})

noAllergy.addEventListener("click", (event) => {
    let value = event.target.value
    let allergyPicked = document.getElementById("allergyPicked")
    allergyPicked.innerHTML = value

    if(event.target.checked){
        allergy.value = "Nej"
    } else {
        allergy.value = ""
    }
})


// Diseases section

var diseases = document.getElementById("diseases")
var noDiseases = document.getElementById("noDiseases")

diseases.addEventListener("input", (event) => {
    let value = event.target.value
    let diseasesPicked = document.getElementById("diseasesPicked")
    diseasesPicked.innerHTML = value

    noDiseases.value = "Nej"
    noDiseases.checked = false
})

noDiseases.addEventListener("click", (event) => {
    let value = event.target.value
    let diseasesPicked = document.getElementById("diseasesPicked")
    diseasesPicked.innerHTML = value

    if(event.target.checked){
        diseases.value = "Nej"
    } else {
        diseases.value = ""
    }
})


// Mail response
// Koden er taget fra https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
// 26-05-2022

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let wasMailSent = params.success;

if(wasMailSent == "1"){
    alert('Testen er nu afsendt. Du vil høre fra mig snarest.');

}else if(wasMailSent == "0"){
      alert('Der skete desværre en fejl... Prøv igen');
  }


function submitForm(){

    // Input field
    let email = document.getElementById("email");
    let emailConfirm = document.getElementById("emailConfirm");
    let number = document.getElementById("number");
    let numberConfirm = document.getElementById("numberConfirm");

    // Fejl beskeder
    let emailError = document.getElementById("emailError");
    let numberError = document.getElementById("numberError");

    // Fjern fejlbeskeder, hvis de skulle være fremme fra et tidligere submit forsøg
    emailError.style = "display: none";
    numberError.style = "display: none";

    let noError = true;

    // Tjek om emails er ens og at de er fyldt ud
    if(email.value !== emailConfirm.value || email.value === ""){
        emailError.style = "display: unset";
        noError = false;
    } 
    
    // Tjek om telefonnumre er ens og at de er fyldt ud
    if(number.value !== numberConfirm.value || number.value === ""){
        numberError.style = "display: unset";
        noError = false;
    }

    // Send mailen hvis der ikke er fejl
    return noError;
}