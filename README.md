# Plumbers — Figma to React

A responsive plumbing-service landing page implemented by Henri James Dillo in React, TypeScript and Vite from the **Plumbers Figma design by TemplatesJungle**. Self-directed portfolio sample; fictional business, not client work.

Live demo: https://plumbers-henridillo.vercel.app

## Run

Use Node24 LTS, then `npm ci` and `npm run dev`. Local preview: http://127.0.0.1:4328/ . `npm run build` runs TypeScript and a production Vite build; `npm run preview` serves that build.

## Design source and credit

- Original design: https://templatesjungle.com/downloads/plumbers-figma/
- Creator's Free Figma download: https://templatesjungle.gumroad.com/l/plumbers-plumbing-service-free-figma-web-design-template
- License: https://templatesjungle.com/free-license/ — free personal/commercial use and modification; do not redistribute the original FIG/ZIP or sell it as a template product.
- Template credits identify Roboto/Roboto Condensed, Unsplash/Freepik/Pexels/Pixabay stock resources and icon libraries. This implementation uses the included photographs in context, local Fontsource Roboto fonts, and Lucide icons. The source identifies the background photograph as Karosu on Unsplash. No photo represents Henri's team or completed plumbing work. Retain source attribution; do not republish the design bundle as a standalone asset pack.
- Original FIG/ZIP and full reference screenshot remain outside the application repository. They are not exposed as public downloads.

## What works

Responsive navigation; two manually controlled hero slides; service details with quote preselection; sample newsletter confirmation; gallery/lightbox and guide dialogs; accessible native FAQ; validated demo quote with confirmation, preserved editing and reset. Forms never send messages or book appointments. Use fictional input. No backend, account, localStorage, analytics or third-party embed.

## Design translation

The source contains a1920×8940desktop page. Geometry, typography and asset mappings were extracted from the actual FIG rather than an HTML template. Original presentation anchors retained: dark pipe background; white centered shell; italic orange/white logo and hero; pale navigation; pill CTAs; city grid; wide team photograph; 4×2desktop service grid; neutral process band; square gallery; boxed FAQ; 3-column guides; paired service area/form; compact footer. Mobile layout is derived, because the supplied file contains no mobile frame.

Intentional adaptations:

- Demo disclosure replaces a real business phone number; no unsupported licensing claims.
- Placeholder reviews/rating cards become planning guidance, retaining the neutral band/card structure without inventing customer endorsements.
- Illustrated service-area diagram replaces embedded map tiles; no location tracker or third-party map request.
- Video-style control opens a truthful project explanation because the design supplies a still image, not a video.
- Gallery shows labelled illustrative photos; guide content is readable in dialogs rather than dead links.
- Hero remains manual, with no distracting auto-advance; accessible contrast/focus and reduced motion added.
- Quote fields have visible labels and validation; form city/service fields replace unnecessary collection of a real property address. Newsletter is a clear local simulation.

This is an adapted implementation of a supplied design, not a claim of pixel-perfect equivalence or original visual authorship.

## Verified locally

Production build/typecheck passed. Dependencies audited with zero advisories at installation. Codex in-app browser verified responsive geometry at320,375,414,768,1024,1280,1440,1920px; no horizontal page overflow. Verified service-to-quote preselection, native email validation, custom whitespace validation, success focus, edit retention, clean reset, newsletter confirmation, small dialog containment and Escape focus restoration, FAQ exclusivity, hero controls and mobile menu Escape. Browser errors/warnings were empty. No physical-device/Safari test or live delivery claim.

The development browser briefly lost its Vite HMR websocket during formatting. A fresh compiled preview at http://127.0.0.1:4329/ is used for final handoff; it contains no HMR client. No production-preview console errors were reported. Mobile hero controls move below the heading to avoid covering text, with44px touch targets.

User authorized deployment, public source-code publication and Upwork portfolio publication on2026-10-29. Vercel project `plumbers-figma-demo` serves the static build; no environment variable is required by the application. Local environment files and the original FIG/ZIP are excluded from Git and deployment source.
