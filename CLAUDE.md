# plainfold-scaffold-app-e2e

E2E testing template for Plainfold apps using Playwright with a 5-tier testing framework.

## 5-Tier Testing Framework

| Tier | Dimension | Browsers | Question |
|------|-----------|----------|----------|
| 1 | Functional | All 6 | Does the app work? |
| 2 | Responsive | Chromium (3 viewports) | Does the layout adapt? |
| 3 | i18n | Chromium | Does it work in all languages? |
| 4 | Resilience | Chromium | Does it handle bad input? |
| 5 | Accessibility | Chromium | Can everyone use it? |

## Where to add tests

- **Core user flow that must work everywhere?** → `tier1/`
- **Layout differs by screen size?** → `tier2/`
- **Tests translated text?** → `tier3/`
- **Tests error handling or edge cases?** → `tier4/`
- **Tests keyboard nav or ARIA?** → `tier5/`

## Page Object Convention

- One page object per view in `tests/e2e/pages/`
- Locators as class properties using `page.getByTestId()`
- All methods async, wait for visibility before interacting

## Helpers

- `resetDB(page)` — wipe all IndexedDB databases + reload
- `seedOnboardedState(page)` — skip onboarding for non-onboarding tests
- `seedSettings(page, key, value)` — inject specific store values
- `setupOnboarded(page)` — convenience: goto + resetDB + seedOnboardedState
- `clickNavItem(page, testId)` — handles mobile overflow sheet automatically

## CI Pipeline

Tier 1 runs on 5 browsers in parallel. Tiers 2-5 run after Tier 1 on Chromium only.
The `e2e-complete` job gates branch protection.

## Connecting to a new app

1. Update `playwright.config.ts` — change webServer command path
2. Update `.github/workflows/e2e.yml` — change app repository name
3. Add `APP_REPO_PAT` secret to GitHub repo settings
4. Replace `Item*` example page objects and tests with your domain
5. Keep all `smoke-*` infrastructure tests as-is

## Running locally

```bash
# Start the app dev server first (in the app directory)
cd ../your-app && npm run dev

# Then run tests
npm test              # All tiers
npm run test:tier1    # Tier 1 only
npm run test:headed   # With browser visible
npm run test:ui       # Interactive UI mode
```
