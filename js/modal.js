// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modal = document.getElementById('modal');
const confirmMessage = document.getElementById('confirmation-message')
const $registrationForm = document.querySelector('.registration-form');

// Fonction pour ouvrir la modal
function modalDisplay(displayStyle) {
  modal.style.display = displayStyle 
  openConfirmMessage('none');
  unloadScrollBars();
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Fonction pour fermer la modal avec la croix
function closeModal(displayStyle) {
  openConfirmMessage('none');
  modal.style.display = displayStyle 
  reloadScrollBars();
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Fonction pour afficher le message de confirmation
function openConfirmMessage(displayStyle) {
  confirmMessage.style.display = displayStyle 
  unloadScrollBars();
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Fonction pour cacher la barre de scroll
function reloadScrollBars() {
  document.body.style.overflow = 'auto';  // firefox, chrome
  document.body.scroll = "yes"; // ie 
}

function unloadScrollBars() {
  document.body.style.overflow = 'hidden';  // firefox, chrome
  document.body.scroll = "no"; // ie 
}

// Fonction de controle de la longueur du champ de saisie prénom 
function firstName() {
  const firstName = document.getElementById('first').value;
  const firstErrorMsg = document.querySelector('.firstErrorMsg');
  const isValueValid = firstName.trim().length >= 2 && firstName.match(/^[A-Za-z]+$/);
  if (isValueValid) {
    firstErrorMsg.classList.add('hidden');
  } else {
    firstErrorMsg.classList.remove('hidden');
  }
  return isValueValid;
}

// Fonction de controle de la longueur du champ de saisie nom 
function lastName() {
  const lastName = document.getElementById('last').value;
  const lastErrorMsg = document.querySelector('.lastErrorMsg');
  const isValueValid = lastName.trim().length >= 2 && lastName.match(/^[A-Za-z]+$/);
  if (isValueValid) {
    lastErrorMsg.classList.add('hidden');
  } else {
    lastErrorMsg.classList.remove('hidden');
  }
  return isValueValid;
}

//Fonction de controle pour valider une adresse mail
function checkEmail() {
  const email = document.getElementById('email').value;
  const emailErrorMsg = document.querySelector('.emailErrorMsg');
  const validMail = /\S+@\S+\.\S+/;

  if (validMail.test(email)){
    emailErrorMsg.classList.add('hidden');
    return true;
  } else {
    emailErrorMsg.classList.remove('hidden');
    return false;
  }
}

//Fonction de controle pour la date de naissance
function checkBirthdate() {
  const birthate = document.getElementById('birthdate').value;
  const ageErrorMsg = document.querySelector('.ageErrorMsg');
  const isValueValid = birthate.trim().length >= 8;
  if (isValueValid) {
    ageErrorMsg.classList.add('hidden');
  } else {
    ageErrorMsg.classList.remove('hidden');
  }
  return isValueValid;
}

//Fonction de controle pour la longueur du chiffre de participation aux tournois
function checkTournament() {
  const quantity = document.getElementById('quantity').value;
  const tournamentErrorMsg = document.querySelector('.tournamentErrorMsg');
  const isValueValid = quantity.trim().length >= 1; 
  if (isValueValid) {
    tournamentErrorMsg.classList.add('hidden');
  } else {
    tournamentErrorMsg.classList.remove('hidden'); 
  }
  return isValueValid;
}

//Fonction de controle de check des villes
function checkCity() {
  const cityCheckbox = document.querySelectorAll('#city-checkbox .checkbox-input');
  const tournamentCityErrorMsg = document.querySelector('.tournamentCityErrorMsg');
  for (let i=0; cityCheckbox[i]; i++) { 
    if (cityCheckbox[i].checked>0) {
    tournamentCityErrorMsg.classList.add('hidden');
    return cityCheckbox;
  } else {
    tournamentCityErrorMsg.classList.remove('hidden');
  }
  }
}

//Fonction de controle de check des conditions
function checkCheckBox() {
  const acceptConditions = document.getElementById('acceptConditions');
  const termsCheckMsg = document.querySelector('.termsCheckMsg');
  const isBoxChecked = acceptConditions.checked === false;
  if (isBoxChecked) {
    termsCheckMsg.classList.remove('hidden');
  } else {
    termsCheckMsg.classList.add('hidden');
    return !isBoxChecked;
  }
}

/**  au clic de soumission du formulaire */
$registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();
// si tous les appels aux fonction de controle retourne true
  firstName();
  lastName();
  checkEmail();
  checkBirthdate();
  checkTournament();
  checkCity();
  checkCheckBox();

  const isFormValid = () => firstName() && lastName() && checkEmail() && checkBirthdate() && checkTournament() && checkCity() && checkCheckBox();

  if (isFormValid()) {
    // on ouvre le message de confirmation
    openConfirmMessage('block');
    // puis on remet les champs de saisie a vide
    $registrationForm.reset();
  } 

})




