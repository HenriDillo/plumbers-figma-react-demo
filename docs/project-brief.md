# Figma-to-code service landing page

User selected project 1 from the portfolio roadmap on 2026-10-29.

## Goal

Demonstrate implementation of an existing Figma design using React and TypeScript. User chose a fictional plumbing business. This is a self-directed portfolio sample, not paid client work.

## Required input

Source established: Plumbers by TemplatesJungle, https://templatesjungle.com/downloads/plumbers-figma/ . Their free Figma license permits personal/commercial projects and adaptations; redistribution of the unchanged design resource is prohibited. Downloaded the Free Figma version for US$0 from the creator's Gumroad listing. No account created or paid product selected. Original ZIP/FIG and reference are kept outside the app repository, not shipped as public downloads.

The source FIG was inspected locally with openfig-core0.4.1 (MIT) to extract491nodes, frame geometry, font information and included assets. Source main frame1920×8940; Roboto/Roboto Condensed, orange accent, pipe background, centered white shell. Mobile layouts are implementation adaptations because no mobile frame was supplied. This is not client-supplied work; credit the original designer and state Henri's implementation role.

## Scope

- Responsive landing page: offer, services, service area, process, FAQ and quote-request form, subject to the supplied design's structure.
- Match reference typography, spacing, colors, imagery and responsive layouts; document any justified deviations.
- Accessible mobile navigation, form labels, keyboard interaction, input validation and clear confirmation state.
- Simulated quote requests clearly disclosed; no real inquiry delivery, payments, customer information or fabricated reviews.
- Original or permitted imagery only. No unsupported commercial outcomes, ratings or conversion claims.

## Evidence and acceptance

- Desktop/mobile reference screenshots beside equivalent rendered screenshots.
- Functional quote validation/confirmation, mobile navigation and FAQ verification.
- No horizontal overflow across 320,375,414,768,1024,1280,1440 widths; respect reduced motion.
- Successful typecheck/build and relevant browser checks.
- Concise case study stating personal implementation role, stack, scope and limitations.

## Release boundary

Prepare local preview first. No GitHub push, deployment or Upwork publication performed for this project. Final compiled preview: http://127.0.0.1:4329/ (no HMR client).

Completed local preview: http://127.0.0.1:4328/ . React19/Vite8/TypeScript6, local fonts and included photographs. Quote and newsletter flows simulated in memory; no network delivery or persistence. Build/typecheck pass. In-app browser verified quote success, invalid email/whitespace rejection, edit retention, reset, newsletter confirmation, service preselection, dialog Escape/focus, FAQ exclusivity and hero controls. Responsive geometry checked at320/375/414/768/1024/1280/1440/1920; no page overflow. Browser errors/warnings empty. Screenshots in he/outputs/plumbing-*; reference in he/outputs/plumbers-source/design-reference.jpg.
