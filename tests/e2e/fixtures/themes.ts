export const ROSE_THEME = {
  id: 'test-rose',
  name: 'Test Rose',
  description: 'Test theme for E2E',
  version: '1.0',
  tokens: {
    '--pf-color-bg-base': '#1a0010',
    '--pf-color-bg-surface': '#2d0018',
    '--pf-color-bg-surface-alt': '#3d0020',
    '--pf-color-bg-overlay': 'rgba(0,0,0,0.72)',
    '--pf-color-border': '#5c0030',
    '--pf-color-border-strong': '#800040',
    '--pf-color-accent': '#f472b6',
    '--pf-color-accent-muted': 'rgba(244,114,182,0.12)',
    '--pf-color-accent-glow': 'rgba(244,114,182,0.25)',
    '--pf-color-positive': '#14b8a6',
    '--pf-color-warning': '#f59e0b',
    '--pf-color-danger': '#ef4444',
    '--pf-color-positive-muted': 'rgba(20,184,166,0.1)',
    '--pf-color-warning-muted': 'rgba(245,158,11,0.1)',
    '--pf-color-danger-muted': 'rgba(239,68,68,0.1)',
    '--pf-color-text-primary': '#fdf2f8',
    '--pf-color-text-secondary': '#fbcfe8',
    '--pf-color-text-muted': '#9d174d',
    '--pf-font-ui': "'DM Sans', system-ui, sans-serif",
    '--pf-font-mono': "'DM Mono', 'Courier New', monospace",
    '--pf-radius-sm': '6px',
    '--pf-radius-md': '10px',
    '--pf-radius-lg': '16px',
    '--pf-duration-fast': '150ms',
    '--pf-duration-normal': '300ms',
    '--pf-duration-slow': '600ms',
    '--pf-easing-default': 'cubic-bezier(0.4, 0, 0.2, 1)',
    '--pf-motion-intensity': '1',
  },
}

export const THEME_WITH_ICONS = {
  id: 'test-icons',
  name: 'Test Icons',
  description: 'Test theme with icon overrides',
  version: '1.0',
  icons: {
    'nav-dashboard': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>',
  },
  tokens: {
    ...ROSE_THEME.tokens,
    '--pf-color-accent': '#22c55e',
  },
}

export const INVALID_THEME = {
  id: 'invalid',
  name: 'Invalid Theme',
  description: 'Missing required tokens',
  version: '1.0',
  tokens: {
    '--pf-color-bg-base': '#000000',
  },
}
