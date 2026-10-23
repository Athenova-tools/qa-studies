# Prompt — Minimal One-Section PayPal Donate Page (Single File, Static Hosting)

## 1. Project Objective

Build a **minimal, single-section donation page** that ships as **one static HTML file** (inline CSS/JS or one CSS + one JS file), ready for GitHub Pages or any static host, integrating PayPal for donations to `[PAYPAL_ACCOUNT_EMAIL_OR_MERCHANT_ID]`.

Design philosophy: one screen, zero clutter, loads instantly, works without JavaScript beyond the donation interaction. English, EUR default.

## 2. Donation Functionality (scope-limited on purpose)

Exactly this interaction, nothing more:

1. Row of amount chips: **€5 · €10 · €25 · €50** + **Custom** (single-select, one active at a time)
2. Custom chip reveals a compact number input
3. Summary line: `You're giving €10 via PayPal`
4. Button: **Donate with PayPal** → official PayPal payment flow with the chosen amount
5. Return link/button on success and cancel landing states (PayPal return URLs if the chosen product supports them)

Rules:

- Validate: reject empty/zero/negative/non-numeric; configurable minimum (default €1)
- Show chosen amount before redirect; no card data on the page; no fake success screens
- Configuration object at the top of the JS file:
  ```js
  const DONATION_CONFIG = {
    paypalAccount: '[PAYPAL_ACCOUNT_EMAIL_OR_MERCHANT_ID]',
    currency: 'EUR',
    amounts: [5, 10, 25, 50],
    minimum: 1,
    projectName: '[PROJECT_NAME]',
    websiteUrl: '[PROJECT_WEBSITE_URL]'
  };
  ```
- Use an official PayPal-supported mechanism for passing a dynamic amount (PayPal Donate button with hosted button id, or PayPal.me with amount if your verification shows it supports it, or a PayPal Checkout JS integration). **Verify first**; document which one was chosen and why in the README section of the file comments.

## 3. Visual Spec (compact)

- Max-width ~560px card, centered, generous padding, system font stack or the project's existing font
- Headline: **"Support [PROJECT_NAME]"**
- One supporting sentence; no long sections, no accordion, no images beyond optional 40px logo
- Chips: pill buttons with clear selected state (border/fill), `:focus-visible` ring, min touch target 44px
- Amount chips as radio semantics (`role="radiogroup"` / `aria-checked`) for accessibility
- Footer line: *"Payments are processed by PayPal. We never see your card details."*
- Light + dark mode via `prefers-color-scheme`, respecting the host site's palette tokens if present

## 4. Technical Requirements

- Static-hosting compatible (GitHub Pages): no backend unless strictly required — if required, provide the minimum secure implementation with env vars
- No frameworks; vanilla HTML/CSS/JS; total page weight target < 50 KB excluding PayPal scripts
- Accessible (keyboard, ARIA, contrast), responsive from 320px up
- SEO: title, meta description, Open Graph basics
- Centralized `DONATION_CONFIG`; changing the PayPal account or amounts = editing one object

## 5. Deliverables

- Single-page source file(s)
- Inline configuration instructions as comments at the top of the file
- Short testing checklist: each preset chip, custom valid amount, invalid amounts, PayPal redirect, cancel path
- Notes on PayPal prerequisites (which integration used, sandbox steps, account flags needed)

Do not deliver a mock-up: the Donate button must trigger the real PayPal flow. Flag any step that needs merchant credentials or account configuration by the owner.
