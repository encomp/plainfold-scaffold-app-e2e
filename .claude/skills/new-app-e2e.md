---
name: plainfold:new-app-e2e
description: Set up or extend E2E testing for a Plainfold app.
  Use when creating E2E tests, adding test coverage, or connecting
  the E2E repo to a new app. Enforces the 5-tier testing framework.
---

## Setup (new E2E repo)

1. **Create from template**
   - `gh repo create <app-name>-e2e --template encomp/plainfold-scaffold-app-e2e`

2. **Connect to app repo**
   - Edit `playwright.config.ts` — update app repo path
   - Edit `.github/workflows/e2e.yml` — update app repo name
   - Add `APP_REPO_PAT` secret to GitHub repo settings

3. **Create domain page objects**
   - Add page objects in `tests/e2e/pages/` for your domain views
   - Follow the pattern in `ItemListPage.ts` and `ItemFormPage.ts`
   - Delete the Item* example page objects

4. **Replace example domain tests**
   - Replace `items-*.spec.ts` files in each tier with your domain tests
   - Keep all `smoke-*.spec.ts` and infrastructure tests as-is

## Writing new tests — tier decision guide

| Ask yourself... | If yes → |
|----------------|----------|
| Is this a core user flow that must work on all browsers/devices? | **Tier 1: Functional** |
| Does this test how a view looks at different screen sizes? | **Tier 2: Responsive** |
| Does this test translated text or locale-specific formatting? | **Tier 3: i18n** |
| Does this test error handling, validation, or edge cases? | **Tier 4: Resilience** |
| Does this test keyboard nav, focus management, or screen readers? | **Tier 5: Accessibility** |

## Test patterns

### Page Object convention
- One page object per view/component
- Locators as class properties using `page.getByTestId()`
- Methods return promises (async/await)
- Methods wait for visibility before interacting

### Seeding data
- `resetDB(page)` — always call at start of test to ensure clean state
- `setupOnboarded(page)` — skip onboarding for tests that don't test it
- `seedSettings(page, key, value)` — inject specific settings

### Responsive tests (Tier 2)
- Test each view at 3 viewports: mobile (375x667), tablet (768x1024), desktop (1280x720)
- Use `test.describe` per viewport
- Assert layout changes: visibility, positioning, component swaps

### Accessibility tests (Tier 5)
- Tab through interactive elements, verify focus order
- Verify ARIA labels on non-text elements
- Test Escape key closes overlays
- Test screen reader announcements for dynamic content

## Checklist
- [ ] Page objects created for all domain views
- [ ] Tier 1: At least 1 happy-path CRUD test per entity
- [ ] Tier 2: Each view tested at mobile, tablet, desktop
- [ ] Tier 3: Domain labels verified in each supported language
- [ ] Tier 4: Form validation errors and empty states tested
- [ ] Tier 5: Keyboard navigation and ARIA labels verified
- [ ] All infrastructure smoke tests still pass
- [ ] CI pipeline runs and e2e-complete check passes
