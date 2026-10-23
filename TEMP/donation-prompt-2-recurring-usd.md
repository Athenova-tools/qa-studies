# Prompt — Create a Donation Page with One-Time and Recurring PayPal Giving (USD)

## 1. Project Objective

Create a modern, responsive donation page for an independent digital project that supports **both one-time donations and recurring monthly giving** through PayPal.

The page must let visitors choose a preset amount or a custom amount, decide whether to give once or monthly, and complete the payment through PayPal's official flow. Default currency: **USD ($)**.

The page must communicate trust and transparency, work for an international audience in English, and never claim a payment succeeded before PayPal confirms it.

## 2. Donation Functionality

### Giving frequency

Two mutually exclusive modes, visually prominent:

- **One-time** (default)
- **Monthly** — short copy explaining recurring support: *"Monthly support lets us plan ahead and keep improving the project."*

Changing frequency must not lose the selected amount.

### Preset amounts (one-time)

- $3 — Coffee
- $10 — Supporter
- $25 — Contributor
- $50 — Champion
- Custom — any amount

### Preset amounts (monthly)

- $2/mo — Supporter
- $5/mo — Sustainer
- $10/mo — Patron
- Custom monthly amount

All amounts configurable. Selecting "Custom" reveals a numeric input.

### Custom amount rules

- Currency: USD by default
- Validate before redirect: reject empty, zero, negative, non-numeric, below configurable minimum
- Show a clear summary: **"$25 one-time"** or **"$5/month"** before redirect
- No card data collected or stored on the site; no automatic charges outside PayPal's own flow

### PayPal integration

- Merchant/PayPal account: `[PAYPAL_ACCOUNT_EMAIL_OR_MERCHANT_ID]`
- Use PayPal's official support for recurring billing (Subscriptions/Donations with a plan) and one-time Checkout/Donate. **Verify** which products your account is eligible for; do not assume PayPal.me supports these features.
- Flow: choose amount + frequency → summary → official PayPal interface → complete or cancel → return to success/cancel pages when supported.
- Never simulate success. Never expose secrets in frontend code; if a backend is required, keep credentials in environment variables and implement the minimum secure backend.

## 3. Page Design

Modern layout, professional typography, consistent with the existing project's design system (reuse it if present).

### A. Hero

Headline: **"Keep This Project Growing."**
Supporting text: *"Your donation pays for maintenance, new features, and infrastructure. Give once or make it monthly — every bit helps."*
CTA: **"Donate with PayPal"**

### B. Donation selector

Segmented control: **One-time | Monthly**. Amount cards with amount, friendly label, selected state, accessible interaction. Custom amount field. Live summary line above the CTA showing amount + frequency + currency.

### C. Where your support goes

Configurable list (e.g., maintenance, new features, hosting). Only claims approved by the project owner.

### D. Trust block

Payments processed by PayPal; site never stores card details; donations voluntary; state explicitly whether monthly giving can be cancelled anytime (only if true and supported by the chosen PayPal product).

### E. Thank-you state

Confirmed state: *"Thank you for your donation — it really helps."* Neutral state otherwise: *"Thank you for visiting our donation page."* Return-to-site button.

## 4. Technical Requirements

- Responsive, accessible, keyboard navigable, clear validation errors
- Frequency and amount both passed correctly to PayPal (recurring amounts must create a recurring agreement/plan, not a one-time payment)
- SEO metadata, fast load, lightweight assets, maintainable code
- Centralized config; reuse existing stack; static hosting preferred, backend only if the integration requires it (documented)

## 5. Configuration

- Project name / logo / website URL / contact: `[PROJECT_NAME]`, `[LOGO_URL_OR_FILE]`, `[PROJECT_WEBSITE_URL]`, `[CONTACT_EMAIL]`
- PayPal account: `[PAYPAL_ACCOUNT_EMAIL_OR_MERCHANT_ID]`
- Currency: `USD`
- One-time amounts: `[3, 10, 25, 50]`
- Monthly amounts: `[2, 5, 10]`
- Minimum donation: `[MINIMUM_AMOUNT]`
- Default language: English

## 6. Acceptance Criteria

1. Every preset amount works in both frequencies
2. Custom amounts validate correctly (empty/zero/negative/below minimum rejected with clear messages)
3. Summary always shows correct amount + frequency + currency before redirect
4. One-time → one-time PayPal payment; monthly → recurring PayPal agreement (verified in sandbox)
5. Cancellation handled gracefully; no false success messages
6. Works on mobile and desktop
7. PayPal account, amounts, and frequencies changeable via configuration only
8. Setup guide covers sandbox testing for both payment modes

## 7. Deliverables

- Complete working source code and responsive page
- Real PayPal integration for one-time **and** recurring flows (no visual mock-ups)
- Configuration, deployment, and testing instructions (success, cancellation, invalid input, recurring cancel)
- List of PayPal account prerequisites/limitations and every step requiring merchant credentials or approval
