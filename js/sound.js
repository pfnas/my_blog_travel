document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("pink-floyd-section");
  const player = document.getElementById("music-player");
  const audio = document.getElementById("pink-floyd-audio");
  const playBtn = document.getElementById("play-pause-btn");
  const volume = document.getElementById("volume-control");

  // ✅ Boucle automatique
  audio.loop = true;

  // 🔸 Play / Pause toggle
  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸️";
      playBtn.classList.add("playing");
    } else {
      audio.pause();
      playBtn.textContent = "▶️";
      playBtn.classList.remove("playing");
    }
  });

  // 🔸 Volume control
  volume.addEventListener("input", () => {
    audio.volume = volume.value;
  });

  // 🔸 Observer pour lecture automatique + affichage fluide
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          player.classList.add("visible");

          // ✅ Lecture automatique dès qu’on entre dans la section
          if (audio.paused) {
            audio.play().then(() => {
              playBtn.textContent = "⏸️";
              playBtn.classList.add("playing");
            }).catch(err => {
              console.log("Autoplay bloqué :", err);
            });
          }
        } else {
          player.classList.remove("visible");

          // ✅ Pause automatique quand on quitte la section
          if (!audio.paused) {
            audio.pause();
            playBtn.textContent = "▶️";
            playBtn.classList.remove("playing");
          }
        }
      });
    },
    { threshold: 0.1 } // déclenche dès qu’on entre dans la section
  );

  observer.observe(section);
});
