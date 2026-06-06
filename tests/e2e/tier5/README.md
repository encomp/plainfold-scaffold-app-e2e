# Tier 5: Accessibility

**Question it answers:** Can everyone use this app?

**Browsers:** Chromium only

**What goes here:**
- Keyboard navigation (tab order, Enter/Space activation, Escape to close)
- Focus management (trap in dialogs, restore on close)
- ARIA labels and roles
- Screen reader announcements for dynamic content
- Reduced motion support

**Pattern:**
Navigate entirely by keyboard. Verify ARIA attributes. Test with `prefers-reduced-motion: reduce`.
