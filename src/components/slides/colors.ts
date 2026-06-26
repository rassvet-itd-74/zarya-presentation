export const C = {
  bg:      '#0f172a',
  card:    '#1e293b',
  subtle:  '#334155',
  text:    '#f1f5f9',
  sec:     '#94a3b8',
  muted:   '#64748b',
  brand:   '#932421',
  peach:   '#F6B485',
  border:  '#334155',
  green:   '#4ade80',
  red:     '#f87171',
  redDark: '#dc2626',
  amber:   '#f59e0b',
  yellow:  '#fbbf24',
  darkBg:  '#0a1628',
  darkRed: '#1a0d0c',
  slate:   '#475569',
} as const;

export type ColorKey = keyof typeof C;

export const cssVars: Record<string, string> = {
  '--z-bg': C.bg,
  '--z-card': C.card,
  '--z-subtle': C.subtle,
  '--z-text': C.text,
  '--z-sec': C.sec,
  '--z-muted': C.muted,
  '--z-brand': C.brand,
  '--z-peach': C.peach,
  '--z-border': C.border,
  '--z-green': C.green,
  '--z-red': C.red,
  '--z-red-dark': C.redDark,
  '--z-amber': C.amber,
  '--z-yellow': C.yellow,
  '--z-slate': C.slate,
};
