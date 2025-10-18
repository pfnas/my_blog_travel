// carousel.js — Utiliser à la place de l'ancien (copier-coller)
document.addEventListener("DOMContentLoaded", () => {
  if (window.__nomadCarouselInit) return;
  window.__nomadCarouselInit = true;

  // On initialise chaque carousel qui a data-gallery (ou tous si pas présent)
  document.querySelectorAll(".gallery-carousel").forEach((carousel, ci) => {
    // repère l'image principale
    const main = carousel.querySelector(".gallery-main") || carousel.querySelector(".gallery-display");
    if (!main) return;

    // identifiant logique (préférer data-gallery)
    const gid = (carousel.dataset.gallery || `__auto_${ci}`).trim();

    // cherche le container de miniatures associé (par data-gallery)
    let thumbsContainer = document.querySelector(`.gallery-thumbs[data-gallery="${gid}"]`);

    // fallback : si pas trouvé, on prend la .gallery-thumbs la plus proche dans le même .gallery-block
    if (!thumbsContainer) {
      const host = carousel.closest(".gallery-block") || carousel.parentElement;
      thumbsContainer = host ? host.querySelector(".gallery-thumbs") : null;
    }
    const thumbs = thumbsContainer ? Array.from(thumbsContainer.querySelectorAll(".gallery-thumb")) : [];

    // boutons prev/next du carousel (localisés dans ce carousel)
    const prevBtn = carousel.querySelector(".gallery-prev") || carousel.querySelector(".gallery-btn.gallery-prev");
    const nextBtn = carousel.querySelector(".gallery-next") || carousel.querySelector(".gallery-btn.gallery-next");

    // état local
    let index = 0;

    // si une miniature a déjà .active on l'utilise
    if (thumbs.length) {
      const activeIdx = thumbs.findIndex(t => t.classList.contains("active"));
      index = activeIdx >= 0 ? activeIdx : 0;
      // initialise l'image principale depuis la miniature active
      if (thumbs[index] && thumbs[index].src) {
        main.src = thumbs[index].src;
        if (thumbs[index].alt) main.alt = thumbs[index].alt;
      }
    }

    // helper : met à jour seulement CE carousel
    const update = (i) => {
      if (!thumbs.length) return;
      if (i < 0) i = thumbs.length - 1;
      if (i >= thumbs.length) i = 0;
      index = i;

      const t = thumbs[index];
      if (t && t.src) {
        // transition douce (si tu veux, sinon retire)
        try {
          main.style.transition = "opacity 180ms ease";
          main.style.opacity = 0;
          setTimeout(() => {
            main.src = t.src;
            if (t.alt) main.alt = t.alt;
            main.style.opacity = 1;
          }, 160);
        } catch (e) {
          main.src = t.src;
          if (t.alt) main.alt = t.alt;
        }
      }

      // n'affecte que les miniatures de cette gallery
      thumbs.forEach(x => x.classList.remove("active"));
      if (thumbs[index]) thumbs[index].classList.add("active");
    };

    // empêcher double-initialisation (sécurité)
    if (carousel.dataset._inited === "true") return;
    carousel.dataset._inited = "true";

    // clic sur miniatures -> change uniquement l'image de la même data-gallery
    thumbs.forEach((thumb, i) => {
      // retirer d'éventuels anciens handlers (safer)
      thumb.replaceWith(thumb.cloneNode(true));
      // récupérer de nouveau la node pour attacher proprement
    });
    // re-obtenir thumbs après clone (si clonés)
    const freshThumbs = thumbsContainer ? Array.from(thumbsContainer.querySelectorAll(".gallery-thumb")) : [];

    freshThumbs.forEach((thumb, i) => {
      thumb.addEventListener("click", (e) => {
        e.preventDefault?.();
        update(i);
      });
    });

    // flèches locales
    prevBtn?.addEventListener("click", (e) => {
      e?.preventDefault?.();
      update(index - 1);
    });
    nextBtn?.addEventListener("click", (e) => {
      e?.preventDefault?.();
      update(index + 1);
    });

    // init
    update(index);
  });
});
