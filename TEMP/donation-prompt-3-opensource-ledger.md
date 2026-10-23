# Prompt — Create a Transparent Funding Page for an Open-Source Project with PayPal

## 1. Project Objective

Create a funding page for an **open-source project** that lets users support maintenance and development through PayPal, while publishing a **transparent, honest view of how funds are used**.

Audience: developers and GitHub users; language: English; currency: EUR by default but configurable. Tone: factual, humble, no marketing hype.

The page must be honest about what donations do and do not buy (e.g., no promises of delivery dates tied to donations).

## 2. Funding Model

### Contribution options

- Preset amounts: €3, €10, €25, €50, €100 — labels describe impact, not guarantees (e.g., *"covers infrastructure for a month"* only if verified as accurate)
- Custom amount (validated: not empty/zero/negative/non-numeric; configurable minimum)
- Frequency: one-time (default) and optional monthly via PayPal's supported recurring product, if available for the account

### Transparency ledger (required)

A public section, data-driven from a single config/JSON file, showing:

- Funding goal per period (configurable) and current progress
- Cost breakdown rows (hosting, CI minutes, domains, tooling) with amounts
- "Last updated" date; ability to show as manual entry (no scraping) — values must be marked as estimates unless audited

Never fabricate numbers: if a field is unknown, render it as "—" or hide it.

### PayPal integration

- Account: `[PAYPAL_ACCOUNT_EMAIL_OR_MERCHANT_ID]`
- Official PayPal Donate/Checkout flow with preset amount passing; verify capabilities before choosing the product
- Summary → official PayPal page → complete/cancel → return URLs
- No fake confirmations; no secrets in frontend; minimum secure backend with env vars if required

## 3. Page Sections

### A. Hero

Headline: **"Fund the Tools You Depend On."**
Text: *"This project is free to use. Donations pay for hosting, CI, and maintenance time."*
CTA: **"Donate via PayPal"** + secondary link: **"View funding transparency"** (anchor)

### B. Donation selector

Amount cards + custom input + optional frequency toggle + live summary + "Continue with PayPal". Selected state obvious, accessible, keyboard-friendly.

### C. Transparency ledger

The data-driven table/progress bar described above, with a link to the config source (e.g., the JSON file in the repo).

### D. What donations do NOT buy

Explicit honest block: no paid support SLAs, no guaranteed features, no tax-deductible status unless verified.

### E. Other ways to help

Stars/issues/contributions links — funding is one option among several.

### F. Thank-you

Confirmed: *"Thank you for keeping this project alive."* Neutral fallback otherwise. Return link to project homepage.

## 4. Technical Requirements

- Responsive, accessible, SEO-friendly, fast, lightweight
- Progress/ledger data externalized (single config file, documented schema)
- Centralized config: project name, logo, repo URL, PayPal account, currency, amounts, minimum, goal values
- Reuse existing stack/design system; static-hosting friendly
- Validation with clear errors; no payment data on site; no false success states

## 5. Configuration

- `[PROJECT_NAME]`, `[LOGO_URL_OR_FILE]`, `[PROJECT_WEBSITE_URL]`, `[REPO_URL]`, `[CONTACT_EMAIL]`
- PayPal: `[PAYPAL_ACCOUNT_EMAIL_OR_MERCHANT_ID]`, currency `EUR`, amounts `[3, 10, 25, 50, 100]`, minimum `[MINIMUM_AMOUNT]`
- `[FUNDING_GOAL]`, `[FUNDING_BREAKDOWN_JSON]`, `[LEDGER_UPDATED_AT]`
- Language: English

## 6. Acceptance Criteria

1. All preset and custom amounts selectable and validated
2. Amount + currency reach PayPal correctly; cancellation graceful; no false success
3. Ledger renders entirely from config — editing the JSON updates the page without code changes
4. No unverifiable claims (tax, SLA, delivery dates) appear anywhere
5. Mobile + desktop OK; account changeable via config only
6. Setup guide includes sandbox testing and how to update ledger data

## 7. Deliverables

- Full source code, responsive page, real PayPal integration
- Ledger schema + example config file + update instructions
- Deployment and testing instructions
- Prerequisites/limitations list; clearly flag steps needing merchant credentials or account approval

Inspect the existing repo first; reuse its design system and stack.
