document.addEventListener("DOMContentLoaded", () => {
  const lightboxOverlay = document.createElement("div");
  lightboxOverlay.classList.add("lightbox-overlay");
  document.body.appendChild(lightboxOverlay);

  // Fermer la lightbox
  lightboxOverlay.addEventListener("click", () => {
    lightboxOverlay.classList.remove("active");
    lightboxOverlay.innerHTML = "";
  });

  // Appliquer sur toutes les images sauf miniatures
  document.querySelectorAll("img:not(.gallery-thumb)").forEach(img => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      const lightboxImg = document.createElement("img");
      lightboxImg.src = img.src;
      lightboxOverlay.innerHTML = "";
      lightboxOverlay.appendChild(lightboxImg);
      lightboxOverlay.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Popup
  const popup = document.getElementById("popupForm");
  const cancelBtn = document.getElementById("cancelPopUp");
  if (cancelBtn) {
    cancelBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  // Mode sombre
  const toggleButton = document.getElementById("darkModeToggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});

