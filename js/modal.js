// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modal = document.getElementById('modal');
const $registrationForm = document.querySelector('.registration-form');

// Fonction pour ouvrir et fermer la modal
function modalDisplay(displayStyle) {
  modal.style.display = displayStyle 
  unloadScrollBars();
}

function modalDisplay2(displayStyle) {
  modal.style.display = displayStyle 
  reloadScrollBars();
}

// Fonction pour cacher la barre de scroll
function reloadScrollBars() {
  document.body.style.overflow = 'auto';  // firefox, chrome
  document.body.scroll = "yes"; // ie only
}

function unloadScrollBars() {
  document.body.style.overflow = 'hidden';  // firefox, chrome
  document.body.scroll = "no"; // ie only
}

// Fonction de controle de la longueur des champs de saisie nom et prenom variabilisé
function checkInputString(inputVal,errorMsg) {
  const isValueValid = inputVal.trim().length >= 2;
  const letters = /^[A-Za-z]+$/;
  if (isValueValid && inputVal.match(letters)) {
    errorMsg.classList.add('hidden');
  } else {
    errorMsg.classList.remove('hidden');
  }
  return isValueValid;
}

//Fonction de controle pour la longue du chiffre de participation aux tournois
function checkInputNumber(inputVal,errorMsg) {
  const isValueValid = inputVal.trim().length >= 1;
  if (isValueValid) {
    errorMsg.classList.add('hidden');
  } else {
    errorMsg.classList.remove('hidden');
  }
  return isValueValid;
}

//Fonction de controle pour valider une adresse mail
function checkInputEmail(checkedEmail,errorMsg) 
{
  const validMail = /\S+@\S+\.\S+/;

  if (validMail.test(checkedEmail)){
    errorMsg.classList.add('hidden');
  } else {
    errorMsg.classList.remove('hidden');
  }
  return true;
}

//Fonction de controle de check des villes
function checkCity(checkedCity,errorMsg) {
  let isCityChecked = false;
  for (let i=0; i<checkedCity.length ;i++) { 
    if (checkedCity[i].checked) {
    isCityChecked = true;
    errorMsg.classList.add('hidden');
    break;
  } else {
    errorMsg.classList.remove('hidden');
  }}
  return isCityChecked;
}

//Fonction de controle de check des conditions
function checkCheckBox(checkedBox,errorMsg) {
  let isBoxChecked = checkedBox.checked === false;
  if (isBoxChecked) {
    errorMsg.classList.remove('hidden');
  } else {
    errorMsg.classList.add('hidden');
  }
  return isBoxChecked;
}

/** On recupere le retour (true ou false) de toutes nos fonctions de controle dans la constante isFormValid */
let isFormValid = () => {
// debut d'une fonction de controle
checkInputString( // appel a la fonction de controle du champs de saisie
  document.getElementById('first').value, // parametre 1 l'input controlé
  document.querySelector(".firstErrorMsg"), // déclaration de l'element html contenant le message d'erreur associé
)

checkInputString(
  document.getElementById('last').value, 
  document.querySelector(".lastErrorMsg"),
)

checkInputEmail(
  document.getElementById('email').value, 
  document.querySelector(".emailErrorMsg"),
)

checkInputNumber(
  document.getElementById('birthdate').value,
  document.querySelector(".ageErrorMsg"),
)

checkInputNumber(
  document.getElementById('quantity').value, 
  document.querySelector(".tournamentErrorMsg"),
)

checkCity(
  document.querySelectorAll('#city-checkbox .checkbox-input'),
  document.querySelector(".tournamentCityErrorMsg")
)

checkCheckBox(
  document.getElementById('acceptConditions'),
  document.querySelector(".termsCheckMsg"),
)
// fin
};

/**  au clic de soumission du formulaire */
$registrationForm.addEventListener('submit', function(event) {
  event.preventDefault()
// si tous les appels aux fonction de controle retourne true
  if (isFormValid()) {
    // on ferme la modale
    modalDisplay('none');
    // et on ouvre celle de confirmation
    showNotificationToast()
    // puis on remet les champs de saisie a vide
    $registrationForm.reset();
  } 
  return true;
})



