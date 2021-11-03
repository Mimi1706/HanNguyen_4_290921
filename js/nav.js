function editNav() {
    var bouton = document.getElementById("myTopnav");
    if (bouton.className === "topnav") {
      bouton.className += " responsive";
    } else {
      bouton.className = "topnav";
    }
  }