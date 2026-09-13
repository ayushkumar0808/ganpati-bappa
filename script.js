let musicStarted = false;
let fadeInterval = null;
const bgMusic = document.getElementById("bgMusic");

function tryPlayMusic() {
  if (fadeInterval) {
    clearInterval(fadeInterval);
    fadeInterval = null;
  }
  bgMusic.volume = 1;
  bgMusic.currentTime = 0;
  const p = bgMusic.play();
  if (p !== undefined) {
    p.then(() => {
      musicStarted = true;
    }).catch(() => {});
  }
}

document.addEventListener(
  "click",
  () => {
    if (!musicStarted) {
      bgMusic
        .play()
        .then(() => {
          musicStarted = true;
        })
        .catch(() => {});
    }
  },
  { once: false },
);

const outlinePaths = Array.from(
  document.querySelectorAll("#outlines .outline"),
);
const fillShapes = Array.from(document.querySelectorAll(".fillshape"));
const detailLines = Array.from(document.querySelectorAll(".detailline"));
const headline = document.getElementById("headline");
const revealLines = Array.from(document.querySelectorAll(".reveal-line"));
const controls = document.getElementById("controls");
const halo = document.getElementById("halo");
const mandala = document.getElementById("mandala");

function prepOutline(el) {
  let len;
  if (el.tagName === "circle") {
    const r = parseFloat(el.getAttribute("r"));
    len = 2 * Math.PI * r;
  } else {
    len = el.getTotalLength();
  }
  el.style.strokeDasharray = len;
  el.style.strokeDashoffset = len;
  el.style.transition = "none";
  return len;
}

function playAnimation() {
  headline.classList.remove("show");
  revealLines.forEach((l) => l.classList.remove("show"));
  controls.classList.remove("show");
  halo.classList.remove("show");
  mandala.classList.remove("show");
  fillShapes.forEach((f) => f.classList.remove("show"));
  detailLines.forEach((f) => f.classList.remove("show"));
  tryPlayMusic();

  let cumulative = 0;
  const perPathDuration = 520;
  const stagger = 240;

  outlinePaths.forEach((el, i) => {
    prepOutline(el);
    void el.getBoundingClientRect();
    const delay = i * stagger;
    el.style.transition = `stroke-dashoffset ${perPathDuration}ms ease-in-out ${delay}ms`;
    requestAnimationFrame(() => {
      el.style.strokeDashoffset = 0;
    });
    cumulative = delay + perPathDuration;
  });

  setTimeout(() => {
    mandala.classList.add("show");
    fillShapes.forEach((f, i) => {
      setTimeout(() => f.classList.add("show"), i * 70);
    });
  }, cumulative + 150);

  setTimeout(() => {
    halo.classList.add("show");
  }, cumulative + 400);

  setTimeout(() => {
    detailLines.forEach((d, i) =>
      setTimeout(() => d.classList.add("show"), i * 90),
    );
  }, cumulative + 600);

  setTimeout(
    () => {
      headline.classList.add("show");
      revealLines.forEach((l, i) =>
        setTimeout(() => l.classList.add("show"), i * 280),
      );
    },
    cumulative + 200 + fillShapes.length * 70 + 400,
  );

  setTimeout(
    () => {
      controls.classList.add("show");
    },
    cumulative + 200 + fillShapes.length * 70 + 900,
  );

  const animationEndTime =
    cumulative +
    200 +
    fillShapes.length * 70 +
    400 +
    revealLines.length * 280 +
    600;
  setTimeout(() => {
    fadeOutMusic();
  }, animationEndTime);
}

function fadeOutMusic() {
  const fadeStep = 0.05;
  fadeInterval = setInterval(() => {
    if (bgMusic.volume > fadeStep) {
      bgMusic.volume -= fadeStep;
    } else {
      bgMusic.pause();
      bgMusic.currentTime = 0;
      bgMusic.volume = 1;
      clearInterval(fadeInterval);
      fadeInterval = null;
    }
  }, 80);
}

window.addEventListener("load", playAnimation);
