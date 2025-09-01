// ============================
// Sélection des éléments
// ============================
const clickCamion = document.querySelector(".loader");
const img = document.querySelector(".loader img"); // plus précis que "img"
const cancelPopUp = document.getElementById("cancelPopUp");
const popupForm = document.getElementById("popupForm");

// Debug console (à retirer en prod)
console.log("Loader trouvé:", clickCamion);

// ============================
// Fonctions
// ============================

// Ouvrir la popup (ou alerte provisoire)
function openForm() {
  if (popupForm) {
    popupForm.style.display = "block";
  } else {
    alert("🚧 En panne, page en construction !");
  }
}

// Fermer la popup
function closeForm() {
  if (popupForm) {
    popupForm.style.display = "none";
  }
}

// Exemple d’alternative : afficher l’image du camion en overlay
function eventAdd() {
  if (!img) return;
  img.style.position = "fixed";
  img.style.top = "0";
  img.style.left = "0";
  img.style.zIndex = "10000";
  img.style.width = "500px";
  img.style.height = "auto";
  img.src = "./Assets/camion.jpg";
}

// ============================
// Écouteurs d’événements
// ============================
if (clickCamion) {
  clickCamion.addEventListener("click", openForm);
  // 👉 Si tu veux l’effet "afficher l’image du camion" au lieu de l’alerte :
  // clickCamion.addEventListener("click", eventAdd);
}

if (cancelPopUp) {
  cancelPopUp.addEventListener("click", closeForm);
}
