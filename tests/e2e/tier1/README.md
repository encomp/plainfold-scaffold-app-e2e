# Tier 1: Functional

**Question it answers:** Does the app work?

**Browsers:** Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari, Tablet

**What goes here:**
- Golden path flows that must work on every browser and device
- CRUD operations for each domain entity
- Core infrastructure smoke tests (theme, i18n, backup, onboarding, navigation, PWA)

**Naming convention:**
- `smoke-*.spec.ts` — infrastructure smoke tests (keep as-is)
- `<entity>-*.spec.ts` — domain-specific tests (replace examples)
