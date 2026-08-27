# WINA Coin — Production React + Tailwind Landing Page

A responsive, component-based WINA Coin landing page built with React, Vite and Tailwind CSS v4.

## Stack
- React 19
- Vite
- Tailwind CSS v4 + `@tailwindcss/vite`
- Lucide React icons
- Responsive/mobile-first layout
- `prefers-reduced-motion` support

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Structure

```text
src/
  components/
    About.jsx
    Footer.jsx
    Hero.jsx
    Icon.jsx
    Liquidity.jsx
    Navbar.jsx
    Roadmap.jsx
    SectionTitle.jsx
    Tokenomics.jsx
    Utilities.jsx
  data/
    site.js
  assets/
  App.jsx
  index.css
  main.jsx
```

## Before deployment
Update the placeholder URLs in `src/data/site.js`:
- Buy WINA
- Telegram main channel
- X/Twitter main channel
- X/Twitter DAO
- DexScreener
- Whitepaper
- BSC contract
- Pruk Lock

The copy should also be reviewed for factual/legal accuracy before publishing a live crypto site.
