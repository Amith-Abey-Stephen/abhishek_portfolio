# Pilea Agency - Pixel Perfect Website Clone

An exact, modern, pixel-perfect clone of **[pilea.agency](https://pilea.agency/)** built with clean semantic HTML5, modern Vanilla CSS, and lightweight JavaScript.

Designed to be **100% easily customizable and remodifiable** so you can adapt it to your own agency, portfolio, or clients.

---

## 🚀 Quick Start

### Option 1: Run with Vite (Recommended)
```bash
# Navigate to the project folder
cd "scrap 2"

# Install dev dependencies (Vite)
npm install

# Start local development server with hot reloading
npm run dev
```

### Option 2: Open Directly
Because this project uses standard web technologies without proprietary runtimes, you can also open `index.html` directly in any web browser or with VSCode Live Server.

---

## 📂 File Architecture

```
scrap 2/
├── index.html        # Complete semantic HTML markup with all sections & SVG icons
├── styles.css        # CSS Design System (variables, tokens, glassmorphism, animations)
├── script.js         # Interactive features (video modal, tabs, calendar, FAQ, scroll)
├── package.json      # Vite configuration for local dev server
└── README.md         # Documentation & customization guide
```

---

## 🎨 How to Customize & Remodify

### 1. Changing Colors, Typography & Tokens
All global styles are controlled via CSS custom properties at the top of `styles.css`:
```css
:root {
  --bg-black: #000000;
  --bg-card: #111111;
  --accent-blue: #006efe;
  --font-serif: "Instrument Serif", serif; /* Signature italic font */
  --font-sans: "Urbanist", "Mona Sans", sans-serif;
  ...
}
```

### 2. Updating Hero Video & Modal Player
In `index.html`, update the `data-video-src` on the video trigger elements:
```html
<div class="video-mockup-wrapper" data-video-trigger data-video-src="YOUR_YOUTUBE_EMBED_OR_VIDEO_URL">
```

### 3. Modifying the 4-Step Process Tabs
The process section is structured into 4 interactive tabs (`#tab-meet`, `#tab-notion`, `#tab-frameio`, `#tab-youtube`).
You can customize the step titles, descriptions, and feature bullet points inside `.tab-pane`.

### 4. Updating Client Reviews & Testimonials
All testimonial cards are inside the `.reviews-grid` section in `index.html`. You can add, remove, or edit cards with custom avatars, author names, follower counts, and review text.

### 5. Customizing the Booking Calendar
The interactive booking calendar in `#booking` allows users to select dates and time slots. You can connect it to Cal.com, Calendly, or your own backend booking API by replacing the card with an embed or updating the click handler in `script.js`.

---

## ✨ Features Included

- **OLED Dark Mode & Glassmorphism**: Frosted cards with `backdrop-filter: blur(20px)`.
- **Dashed Guideline Accents**: Vertical guides masked with gradient fades.
- **Hero Video Showcase**: Floating feedback comments & metadata tags.
- **Infinite Marquees**: Smooth horizontal auto-scrolling creator bar and portfolio thumbnails.
- **MacOS App Window Mockup**: Interactive 4-step process viewer with tab switcher.
- **Layered Case Study Cards**: Angled 3D card layout with hover interactions.
- **Responsive Masonry Reviews**: Auto-adapting 3-column, 2-column, and single-column grid.
- **Interactive Booking Widget**: Date & slot picker with dynamic feedback.
- **Accordion FAQ**: Animated toggle with smooth height transition.
- **Responsive Breakpoints**: Seamless display across desktop, tablet, and mobile.
