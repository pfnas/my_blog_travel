document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".gallery-block");

  carousels.forEach(block => {
    const mainImg = block.querySelector(".gallery-main");
    const thumbs = block.querySelectorAll(".gallery-thumb");
    const prevBtn = block.querySelector(".gallery-prev");
    const nextBtn = block.querySelector(".gallery-next");

    let currentIndex = 0;

    // Fonction pour afficher une image
    function showImage(index) {
      // Boucle infinie manuelle
      if (index < 0) {
        index = thumbs.length - 1; // revient à la dernière
      } else if (index >= thumbs.length) {
        index = 0; // revient à la première
      }
      currentIndex = index;

      // Transition fluide
      mainImg.style.opacity = 0;
      setTimeout(() => {
        mainImg.src = thumbs[currentIndex].src;
        mainImg.alt = thumbs[currentIndex].alt;
        mainImg.style.opacity = 1;
      }, 200);

      // Met à jour les miniatures
      thumbs.forEach(t => t.classList.remove("active"));
      thumbs[currentIndex].classList.add("active");
    }

    // Navigation par clic
    thumbs.forEach((thumb, idx) => {
      thumb.addEventListener("click", () => showImage(idx));
    });

    if (prevBtn) prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => showImage(currentIndex + 1));

    // Initialisation
    showImage(0);
  });
});


document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne tous les carousels de la page
    const carousels = document.querySelectorAll(".gallery-block");

    carousels.forEach(carousel => {
        const mainImg = carousel.querySelector(".gallery-main");
        const thumbs = carousel.querySelectorAll(".gallery-thumb");
        const prevBtn = carousel.querySelector(".gallery-prev");
        const nextBtn = carousel.querySelector(".gallery-next");

        let currentIndex = 0;

        // Fonction pour changer l'image principale
        function showImage(index) {
            if (index < 0) index = thumbs.length - 1;
            if (index >= thumbs.length) index = 0;
            currentIndex = index;

            // Ajoute la transition douce
            mainImg.style.opacity = 0;
            setTimeout(() => {
                mainImg.src = thumbs[currentIndex].src;
                mainImg.alt = thumbs[currentIndex].alt;
                mainImg.style.opacity = 1;
            }, 200);

            // Active la miniature
            thumbs.forEach(thumb => thumb.classList.remove("active"));
            thumbs[currentIndex].classList.add("active");
        }

        // Cliquer sur les miniatures
        thumbs.forEach((thumb, idx) => {
            thumb.addEventListener("click", () => showImage(idx));
        });

        // Boutons précédent / suivant
        if (prevBtn) prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
        if (nextBtn) nextBtn.addEventListener("click", () => showImage(currentIndex + 1));
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".gallery-block");

  carousels.forEach(block => {
    const mainImg = block.querySelector(".gallery-main");
    const thumbs = block.querySelectorAll(".gallery-thumb");
    const prevBtn = block.querySelector(".gallery-prev");
    const nextBtn = block.querySelector(".gallery-next");

    let currentIndex = 0;

    function showImage(index) {
      if (index < 0) index = thumbs.length - 1;
      if (index >= thumbs.length) index = 0;
      currentIndex = index;

      mainImg.style.opacity = 0;
      setTimeout(() => {
        mainImg.src = thumbs[currentIndex].src;
        mainImg.alt = thumbs[currentIndex].alt;
        mainImg.style.opacity = 1;
      }, 150);

      thumbs.forEach(t => t.classList.remove("active"));
      thumbs[currentIndex].classList.add("active");
    }

    thumbs.forEach((thumb, idx) => thumb.addEventListener("click", () => showImage(idx)));

    if (prevBtn) prevBtn.addEventListener("click", () => showImage(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => showImage(currentIndex + 1));
  });
});
