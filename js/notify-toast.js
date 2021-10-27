
/** Affichage du message de validation */
function showNotificationToast() {
    const child = document.querySelector('#clonemother');
    // Clone l'élément node 
    const clone = child.cloneNode(true);
    // Push the node
    const node = document.querySelector("#toasts").appendChild(clone);
    // Définit le timer pour le message de validation
    setTimeout(() => {
            if (node) {
                node.style.animation = "toast 2s ease-out forwards";
                setTimeout(() => { node.remove(); }, 5000);
            }
        },2000);
  }
 