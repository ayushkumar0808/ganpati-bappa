# 🐘 Ganpati Bappa — Digital Aagman

**A Mini Project | Web Development (HTML, CSS, JavaScript)**

An interactive, animated web greeting for Ganesh Chaturthi. Built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies, no build tools. The page reveals a hand-drawn SVG illustration of Lord Ganesha through a sequenced line-drawing animation, accompanied by background music and a festive greeting message.

---

## 🚀 Live Demo

👉 **[View Live](https://ganpati-bappa-ayush.vercel.app/)**

---

## ✨ Features

- **SVG Path-Drawing Animation** — Ganesha's outline is drawn stroke-by-stroke using CSS `stroke-dashoffset` animation
- **Layered Reveal Sequence** — outline → color fill → shading/highlights → glowing halo → mandala rings → text reveal, all timed in JavaScript
- **Tap-to-Play Start Screen** — a dedicated start overlay that ensures background audio plays reliably on mobile browsers (works around browser autoplay restrictions)
- **Background Music** — festive dhol audio synced with the animation, with a smooth fade-out at the end
- **Replay Control** — users can restart the entire animation sequence on demand
- **Ambient Effects** — floating flower petals and flickering diya-light particles for atmosphere
- **Fully Responsive** — adapts cleanly across desktop and mobile screen sizes

---

## 🗂️ Project Structure

```
ganpati-digital-aagman/
├── index.html              # Page markup + SVG artwork
├── style.css                # Styling, layout, and CSS animations
├── script.js                 # Animation sequencing + audio control logic
├── assets/
│   └── ganpati_dhol.mp3      # Background music (add your own file)
└── README.md
```

---

## ⚙️ Setup & Installation

No installation or dependencies required — this is a static front-end project.

1. Clone or download the project folder.
2. Add your background music file inside the `assets/` folder, named exactly `ganpati_dhol.mp3`.
3. Open `index.html` directly in any modern browser.

That's it — no npm, no server, no build process.

---

## 🧠 How It Works

1. On load, a **"Tap to Play"** overlay is shown instead of auto-starting the animation. This is intentional — most browsers block audio autoplay until the user interacts with the page.
2. On tap, the overlay fades out and the animation sequence begins:
   - SVG outlines draw progressively using stroke animation
   - Colors and gradients fill in
   - Shading, jewel details, and a glowing halo appear
   - The greeting text fades in line by line
   - Background music plays in sync and fades out at the end
3. A **Replay** button lets the user trigger the sequence again at any time.

---

## 🚀 Deployment

Since this is a static project, it can be hosted for free on:

- **GitHub Pages**
- **Netlify**
- **Vercel**

Or simply shared as a zipped folder (`index.html` + `style.css` + `script.js` + `assets/`) for offline use.

---

## 👤 Author

Developed by **Ayush**

---

_Made with 🙏 for Ganesh Chaturthi 2026_
