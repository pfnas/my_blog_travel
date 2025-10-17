// ./js/sound-pompei.js
document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("section-pompei");
  if (!section) return;

  const soundPath = section.dataset.sound;
  if (!soundPath) return;

  const btn = document.getElementById("pompei-sound-btn");
  const enableBtn = document.getElementById("pompei-enable-btn");

  // audio dédié à cette section (unique)
  const audio = new Audio(soundPath);
  audio.preload = "auto";
  audio.loop = true;
  audio.volume = 0; // start at 0 to allow fade-in

  let playing = false;
  let fadeTimer = null;
  let playBlocked = false;

  // fade helper
  function fadeTo(target, duration = 500) {
    clearInterval(fadeTimer);
    const steps = 20;
    const stepTime = Math.max(10, Math.floor(duration / steps));
    const start = audio.volume;
    const delta = (target - start) / steps;
    let i = 0;
    fadeTimer = setInterval(() => {
      i++;
      audio.volume = Math.min(1, Math.max(0, +(start + delta * i).toFixed(3)));
      if (i >= steps) {
        clearInterval(fadeTimer);
        audio.volume = target;
        if (target === 0) audio.pause();
      }
    }, stepTime);
  }

  // try to play, handle autoplay block
  async function tryPlay() {
    try {
      await audio.play();
      // success
      fadeTo(0.6, 600);
      btn.classList.add("playing");
      btn.setAttribute("aria-pressed", "true");
      playing = true;
      playBlocked = false;
      if (enableBtn) enableBtn.classList.add("hidden");
      localStorage.setItem("pompei_sound_allowed", "true");
    } catch (err) {
      // play blocked by browser -> show enable button so user can gesture
      playBlocked = true;
      if (enableBtn) enableBtn.classList.remove("hidden");
      console.warn("play() blocked (user gesture required)", err);
    }
  }

  function stopPlaying() {
    fadeTo(0, 500);
    btn.classList.remove("playing");
    btn.setAttribute("aria-pressed", "false");
    playing = false;
    localStorage.setItem("pompei_sound_allowed", "false");
  }

  // Toggle via button
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (playing) stopPlaying();
    else tryPlay();
  });

  // Enable button (user gesture) -> try play
  if (enableBtn) {
    enableBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      tryPlay();
    });
  }

  // IntersectionObserver to detect when section is in viewport
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.target !== section) continue;
      if (entry.isIntersecting) {
        // mark visible
        section.classList.add("in-view");
        // show button while in view
        btn.style.display = "flex";
        // auto-play only if user hasn't explicitly disabled (respect localStorage)
        const allowed = localStorage.getItem("pompei_sound_allowed");
        if (allowed === "false") {
          // user previously disabled -> don't autoplay
          // do nothing
        } else {
          // either allowed or not set -> try to play
          if (!playing) tryPlay();
        }
      } else {
        // not visible -> hide and stop
        section.classList.remove("in-view");
        btn.style.display = "none";
        // stop only if currently playing
        if (playing) stopPlaying();
      }
    }
  }, { threshold: 0.35 });

  io.observe(section);

  // If user manually enabled via earlier session, resume attempt on load when visible
  const saved = localStorage.getItem("pompei_sound_allowed");
  if (saved === "true") {
    // will auto-play once section becomes visible by observer
  }

  // cleanup on page hide
  window.addEventListener("pagehide", () => {
    if (!audio.paused) audio.pause();
  });
});
