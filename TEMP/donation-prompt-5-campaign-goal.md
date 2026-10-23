# Prompt — Time-Limited Fundraising Campaign Page with Goal Progress and PayPal

## 1. Project Objective

Create a **campaign-style donation page** for a time-limited fundraising effort of an independent digital project: a visible goal, a deadline, live progress display, and PayPal as the payment rail.

The campaign must feel urgent but honest: progress numbers come from real confirmed donations (or explicitly marked manual updates), never invented. English, EUR default, international audience.

## 2. Campaign Model

### Campaign configuration (single source of truth)

- Campaign title: `[CAMPAIGN_TITLE]` (e.g., *"Help Us Reach €2,000 for v2 Development"*)
- Goal amount: `[GOAL_AMOUNT]` EUR
- Start date / end date: `[START_DATE]`, `[END_DATE]`
- Current raised: `[RAISED_AMOUNT]` + `updatedAt` timestamp (manual or via backend webhook — no client-side fabrication)
- Stretch goals list: optional tiers unlocked at higher totals

### Donation options

- Preset amounts tuned to the campaign: €5, €10, €20, €50, €100 (configurable) + custom amount
- Custom validation: empty/zero/negative/non-numeric rejected with clear messages; configurable minimum
- Optional "Give to the next stretch goal" hint chip that preselects a suggested amount (must remain editable)

### PayPal integration

- Account: `[PAYPAL_ACCOUNT_EMAIL_OR_MERCHANT_ID]`, currency `EUR`
- Official PayPal Donate/Checkout integration that passes the selected amount; verify product capabilities first (PayPal.me alone is not assumed sufficient)
- Flow: select amount → campaign summary modal/page (*"Your €20 donation to [CAMPAIGN_TITLE]"*) → official PayPal → complete/cancel → return to campaign with neutral thank-you unless PayPal confirms
- Success must NOT increment the public progress bar optimistically; only confirmed/recorded donations count (document how updates happen: webhook to backend, or manual update)
- No secrets in frontend; minimum secure backend if webhooks are used

## 3. Page Sections

### A. Hero + progress

- Campaign title, one-paragraph goal statement
- **Progress bar**: `€X raised of €Y` with percentage, plus donors count if available and time remaining (live countdown from `END_DATE`, hidden after it ends)
- CTA: **"Donate now"** (smooth-scrolls to selector)
- Ended state: bar frozen, CTA replaced by *"This campaign has ended — thank you!"*

### B. Donation selector

Amount cards + custom input + live summary + **"Continue with PayPal"**. Accessible single-select, clear selected state.

### C. Stretch goals / milestones

List of milestones with unlocked/locked states tied to `RAISED_AMOUNT` (config data only; honest labels).

### D. Use of funds

Configurable breakdown of what the goal funds; only owner-approved claims.

### E. Trust + FAQ

PayPal processes payments; site stores no card data; voluntary donations; no rewards unless configured; no tax claims without verification; FAQ items: can I give monthly? (answer per chosen PayPal product), refunds/cancellation.

### F. Share block

Copy-link button + share intents (X/LinkedIn/Email) using `PROJECT_WEBSITE_URL` and campaign title — static, no third-party trackers.

### G. Thank-you

Confirmed: *"Thank you — you're part of this campaign."* Neutral: *"Thank you for visiting the campaign page."* Return button.

## 4. Technical Requirements

- Responsive, accessible (progress bar with `role="progressbar"` + aria values, keyboard support), SEO with campaign OG image meta
- All campaign values from one config file/object; ended state automatic from dates
- Lightweight: no chart libraries; CSS progress bar; vanilla countdown
- Reuse existing project stack/design system; static-friendly; backend only for payment confirmation webhooks if implemented
- Clear validation errors; no fake confirmations; no card data storage

## 5. Configuration

- `[CAMPAIGN_TITLE]`, `[GOAL_AMOUNT]`, `[START_DATE]`, `[END_DATE]`, `[RAISED_AMOUNT]`, `[STRETCH_GOALS_JSON]`
- PayPal: `[PAYPAL_ACCOUNT_EMAIL_OR_MERCHANT_ID]`, currency `EUR`, amounts `[5, 10, 20, 50, 100]`, minimum `[MINIMUM_AMOUNT]`
- `[PROJECT_NAME]`, `[LOGO_URL_OR_FILE]`, `[PROJECT_WEBSITE_URL]`, `[CONTACT_EMAIL]`
- Language: English

## 6. Acceptance Criteria

1. All preset/custom amounts selectable and validated with clear errors
2. Selected amount + currency reach PayPal correctly; cancel handled gracefully; no false success
3. Progress bar renders only from config/confirmed data; editing config updates the page
4. Countdown and ended state behave correctly (CTA disabled after `END_DATE`)
5. Stretch goal states derive automatically from raised amount
6. Mobile + desktop OK; PayPal account/goal/dates changeable via configuration
7. Setup guide covers sandbox testing and how to update `RAISED_AMOUNT` (webhook or manual)

## 7. Deliverables

- Complete source code, responsive campaign page, real PayPal integration
- Config schema + example file, countdown/progress logic, ended-state behavior
- Deployment + testing instructions (success, cancel, invalid amounts, post-deadline behavior)
- PayPal prerequisites/limitations; explicit list of steps needing merchant credentials, webhooks setup, or owner approval

Inspect the existing project first and reuse its design system and technology stack whenever possible. Do not ship a visual mock-up of the payment flow.
