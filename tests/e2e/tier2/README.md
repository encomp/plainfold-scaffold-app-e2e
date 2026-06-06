# Tier 2: Responsive

**Question it answers:** Does the layout adapt correctly?

**Browsers:** Chromium only (3 viewport configs: mobile 375x667, tablet 768x1024, desktop 1280x720)

**What goes here:**
- Layout changes between viewports (visibility, positioning, component swaps)
- Navigation drawer → rail → bottom bar transitions
- Dialog → bottom sheet transitions
- Table → card layout transitions

**Pattern:**
Use `test.describe` per viewport. Assert layout changes: visibility, positioning, component swaps.
