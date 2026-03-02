// ═══════════════════════════════════════════════════════════════════════════════
// PRISM DASHBOARD — SHARED THEME
// ═══════════════════════════════════════════════════════════════════════════════
//
// SINGLE SOURCE OF TRUTH for every color token used across the dashboard.
// Import in each page:   import { T } from "../theme";
//
// To switch modes, change the export at the bottom of this file,
// or wire a React context / toggle so pages re-render with the new palette.
// ═══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────
// DARK PALETTE  (current production look)
// ─────────────────────────────────────────────────
const DARK = {

  // ── Core surfaces ──────────────────────────────
  bg:           "#080c16",      // page background
  bgAlt:        "#0b0e13",      // alternate page bg (SegmentMap, AudienceROI)
  card:         "#111620",      // card / panel fill
  cardAlt:      "#111827",      // slightly different card (MessageMap tables)
  cardHover:    "#1a2030",      // hovered row / cell highlight
  border:       "#1c2433",      // default border
  borderStrong: "#1e293b",      // heavier divider / dashed lines
  strip:        "#1a2940",      // dot-strip track backgrounds (profiler)
  inputBg:      "#0d1118",      // collapsed/expanded sub-panel bg
  gridLine:     "#1a1f2a",      // SVG grid pattern stroke

  // ── Text hierarchy ─────────────────────────────
  text1:        "#dce4ed",      // primary text
  text2:        "#7b8da3",      // secondary / muted
  text3:        "#3e4f63",      // tertiary / dim labels
  textBright:   "#e2e8f0",      // white-ish emphasis
  textMax:      "#f1f5f9",      // maximum contrast (headings)
  textDim:      "#4a5f78",      // very dim (profiler)
  textSubtle:   "#475569",      // subtle footer / legend text
  textMono:     "#64748b",      // monospace UI labels
  textBody:     "#cbd5e1",      // body copy / descriptions
  textInvert:   "#0f1a2e",      // text on bright accent fills

  // ── Accent / brand ─────────────────────────────
  accent:       "#5b93c7",      // primary accent
  accentLight:  "#7eb3e0",      // lighter accent (labels)
  accentMuted:  "#3a6a94",      // muted accent (borders)
  accentDim:    "#2a4a6a",      // dim accent (info boxes)

  // ── Party ──────────────────────────────────────
  gop:          "#e57373",      // GOP columns / badges
  gopFill:      "#dc2626",      // GOP bubble fill
  gopStroke:    "#ef4444",      // GOP bubble stroke
  gopText:      "#fecaca",      // GOP bubble text
  gopBadgeBg:   "#7f1d1d",      // GOP pill background
  gopBadgeText: "#fca5a5",      // GOP pill text
  gopHeaderBg:  "#1a0a0a",      // GOP column header bg
  gopHeaderBdr: "#f87171",      // GOP header bottom border

  dem:          "#64b5f6",      // DEM columns / badges
  demFill:      "#2563eb",      // DEM bubble fill
  demStroke:    "#3b82f6",      // DEM bubble stroke
  demText:      "#bfdbfe",      // DEM bubble text
  demBadgeBg:   "#1e3a5f",      // DEM pill background
  demBadgeText: "#93c5fd",      // DEM pill text
  demHeaderBg:  "#0a0a1a",      // DEM column header bg
  demHeaderBdr: "#60a5fa",      // DEM header bottom border

  // ── Tiers ──────────────────────────────────────
  tier1:        "#34d399",
  tier1Bg:      "#064e3b",
  tier2:        "#eab308",
  tier2Bg:      "#854d0e",
  tier3:        "#ef4444",
  tier3Bg:      "#991b1b",

  // ── Semantic / data viz ────────────────────────
  green:        "#34d399",      // positive delta
  greenBright:  "#4ade80",
  red:          "#ef4444",      // negative delta
  redLight:     "#f87171",
  amber:        "#d4915e",      // corporate trust, preserve-market
  amberBright:  "#fbbf24",      // warning / overindex marker
  cyan:         "#22d3ee",
  teal:         "#2dd4bf",
  tealDark:     "#5eead4",
  violet:       "#a78bfa",
  violetDark:   "#818cf8",
  rose:         "#fb7185",
  blue:         "#3b82f6",
  blueLight:    "#60a5fa",
  blueDim:      "#6ba3d6",      // govt trust dot-strip

  // ── Profiler-specific ──────────────────────────
  govtBlue:     "#6ba3d6",
  corpAmber:    "#d4915e",

  // ── Message map theme badges ───────────────────
  themeFinancial:   "#34d399",
  themeCoverage:    "#60a5fa",
  themeInnovation:  "#a78bfa",
  themeFreedom:     "#fbbf24",
  themeSocial:      "#f87171",
  themeTrust:       "#5eead4",
  themeOther:       "#94a3b8",

  // ── Persuadability stack ───────────────────────
  persHigh:     "#5b93c7",
  persLow:      "#7eb3e0",
  persNot:      "#4a5568",
  persNo:       "#2d3748",
  persNeg:      "#1a202c",

  // ── MessageMap SoP heatmap (bg, text) ──────────
  sopHot:       { bg: "#065f46", text: "#6ee7b7" },   // ≥13
  sopWarm:      { bg: "#064e3b", text: "#6ee7b7" },   // 10-12
  sopMid:       { bg: "#1a3a2a", text: "#a7f3d0" },   // 7-9
  sopNeutral:   { bg: "#1e293b", text: "#cbd5e1" },   // 6
  sopCool:      { bg: "#1a1f2e", text: "#94a3b8" },   // 5
  sopCold:      { bg: "#1a1520", text: "#94a3b8" },   // 4
  sopChilly:    { bg: "#1f1318", text: "#f9a8a8" },   // 3
  sopIce:       { bg: "#2d1215", text: "#fca5a5" },   // ≤2

  // ── Map / geography ────────────────────────────
  mapActive:       "#5b93c7",
  mapActiveBorder: "#7eb3e0",
  mapIdle:         "#151c28",
  mapIdleBorder:   "#222d3d",
  mapHover:        "#2a4a6a",

  // ── Segment map specific ───────────────────────
  segMapBg:        "#0b0e13",
  segMapGrid:      "#1a1f2a",
  segMapDivider:   "#1e293b",
  segMapBadgeBg:   "#0f172a",

  // ── Ideology heatmap ───────────────────────────
  ideoBlue:     "rgba(59,130,246,",    // liberal pole (append opacity + ")")
  ideoRed:      "rgba(239,68,68,",     // conservative pole
  ideoNeutral:  "rgba(100,116,139,",   // center

  // ── Rings / donut charts ───────────────────────
  ring1:        "#5b93c7",
  ring2:        "#1c2433",

  // ── Sort / interactive state ───────────────────
  sortActiveBg:  "#1a2332",
  sortIndicator: "#60a5fa",

  // ── PE (Policy Elites) column ──────────────────
  peColor:      "#a78bfa",
  peHeaderBg:   "#0d0520",
  peBorder:     "#a78bfa",

  // ── Total column ───────────────────────────────
  totalColor:   "#34d399",
  totalHeaderBg:"#0a1208",
  totalBorder:  "#34d399",
};



// ─────────────────────────────────────────────────
// LIGHT PALETTE
// ─────────────────────────────────────────────────
const LIGHT = {

  // ── Core surfaces ──────────────────────────────
  bg:           "#0d223e",
  bgAlt:        "#f1f3f6",
  card:         "#ffffff",
  cardAlt:      "#f9fafb",
  cardHover:    "#eef2f7",
  border:       "#d8dfe8",
  borderStrong: "#c5ced9",
  strip:        "#e2e8f0",
  inputBg:      "#f1f5f9",
  gridLine:     "#e2e8f0",

  // ── Text hierarchy ─────────────────────────────
  text1:        "#1e293b",
  text2:        "#64748b",
  text3:        "#94a3b8",
  textBright:   "#0f172a",
  textMax:      "#020617",
  textDim:      "#94a3b8",
  textSubtle:   "#94a3b8",
  textMono:     "#64748b",
  textBody:     "#334155",
  textInvert:   "#ffffff",

  // ── Accent / brand ─────────────────────────────
  accent:       "#3b7cb8",
  accentLight:  "#2563a0",
  accentMuted:  "#93c5fd",
  accentDim:    "#dbeafe",

  // ── Party ──────────────────────────────────────
  gop:          "#dc2626",
  gopFill:      "#dc2626",
  gopStroke:    "#b91c1c",
  gopText:      "#7f1d1d",
  gopBadgeBg:   "#fee2e2",
  gopBadgeText: "#991b1b",
  gopHeaderBg:  "#fef2f2",
  gopHeaderBdr: "#ef4444",

  dem:          "#2563eb",
  demFill:      "#2563eb",
  demStroke:    "#1d4ed8",
  demText:      "#1e3a8a",
  demBadgeBg:   "#dbeafe",
  demBadgeText: "#1e40af",
  demHeaderBg:  "#eff6ff",
  demHeaderBdr: "#3b82f6",

  // ── Tiers ──────────────────────────────────────
  tier1:        "#059669",
  tier1Bg:      "#d1fae5",
  tier2:        "#a16207",
  tier2Bg:      "#fef3c7",
  tier3:        "#dc2626",
  tier3Bg:      "#fee2e2",

  // ── Semantic / data viz ────────────────────────
  green:        "#059669",
  greenBright:  "#10b981",
  red:          "#dc2626",
  redLight:     "#ef4444",
  amber:        "#b45309",
  amberBright:  "#d97706",
  cyan:         "#0891b2",
  teal:         "#0d9488",
  tealDark:     "#14b8a6",
  violet:       "#7c3aed",
  violetDark:   "#6366f1",
  rose:         "#e11d48",
  blue:         "#2563eb",
  blueLight:    "#3b82f6",
  blueDim:      "#3b82f6",

  // ── Profiler-specific ──────────────────────────
  govtBlue:     "#2563eb",
  corpAmber:    "#b45309",

  // ── Message map theme badges ───────────────────
  themeFinancial:   "#059669",
  themeCoverage:    "#2563eb",
  themeInnovation:  "#7c3aed",
  themeFreedom:     "#d97706",
  themeSocial:      "#dc2626",
  themeTrust:       "#0d9488",
  themeOther:       "#64748b",

  // ── Persuadability stack ───────────────────────
  persHigh:     "#3b7cb8",
  persLow:      "#93c5fd",
  persNot:      "#94a3b8",
  persNo:       "#cbd5e1",
  persNeg:      "#e2e8f0",

  // ── MessageMap SoP heatmap (bg, text) ──────────
  sopHot:       { bg: "#d1fae5", text: "#065f46" },
  sopWarm:      { bg: "#dcfce7", text: "#166534" },
  sopMid:       { bg: "#ecfdf5", text: "#1e7a54" },
  sopNeutral:   { bg: "#f1f5f9", text: "#475569" },
  sopCool:      { bg: "#f8f9fb", text: "#64748b" },
  sopCold:      { bg: "#fef2f2", text: "#9f1239" },
  sopChilly:    { bg: "#fee2e2", text: "#991b1b" },
  sopIce:       { bg: "#fecdd3", text: "#881337" },

  // ── Map / geography ────────────────────────────
  mapActive:       "#3b7cb8",
  mapActiveBorder: "#1d4ed8",
  mapIdle:         "#e2e8f0",
  mapIdleBorder:   "#cbd5e1",
  mapHover:        "#bfdbfe",

  // ── Segment map specific ───────────────────────
  segMapBg:        "#f1f3f6",
  segMapGrid:      "#e2e8f0",
  segMapDivider:   "#cbd5e1",
  segMapBadgeBg:   "#f1f5f9",

  // ── Ideology heatmap ───────────────────────────
  ideoBlue:     "rgba(37,99,235,",
  ideoRed:      "rgba(220,38,38,",
  ideoNeutral:  "rgba(100,116,139,",

  // ── Rings / donut charts ───────────────────────
  ring1:        "#3b7cb8",
  ring2:        "#e2e8f0",

  // ── Sort / interactive state ───────────────────
  sortActiveBg:  "#dbeafe",
  sortIndicator: "#2563eb",

  // ── PE (Policy Elites) column ──────────────────
  peColor:      "#7c3aed",
  peHeaderBg:   "#f5f3ff",
  peBorder:     "#7c3aed",

  // ── Total column ───────────────────────────────
  totalColor:   "#059669",
  totalHeaderBg:"#f0fdf4",
  totalBorder:  "#059669",
};


// ─────────────────────────────────────────────────
// HELPER: SoP color lookup (replaces getSopC)
// ─────────────────────────────────────────────────
export function getSopColor(value, theme) {
  if (value >= 13) return theme.sopHot;
  if (value >= 10) return theme.sopWarm;
  if (value >= 7)  return theme.sopMid;
  if (value >= 6)  return theme.sopNeutral;
  if (value >= 5)  return theme.sopCool;
  if (value >= 4)  return theme.sopCold;
  if (value >= 3)  return theme.sopChilly;
  return theme.sopIce;
}

// ─────────────────────────────────────────────────
// HELPER: Tier accessors
// ─────────────────────────────────────────────────
export function tierColor(t, theme)  { return t === 1 ? theme.tier1 : t === 2 ? theme.tier2 : theme.tier3; }
export function tierBg(t, theme)     { return t === 1 ? theme.tier1Bg : t === 2 ? theme.tier2Bg : theme.tier3Bg; }
export function tierLabel(t)         { return t === 1 ? "TIER 1" : t === 2 ? "TIER 2" : "TIER 3"; }

// ─────────────────────────────────────────────────
// HELPER: Party color
// ─────────────────────────────────────────────────
export function partyColor(party, theme) { return party === "GOP" ? theme.gop : theme.dem; }

// ─────────────────────────────────────────────────
// HELPER: Theme-color map for message themes
// ─────────────────────────────────────────────────
export function themeColor(themeName, theme) {
  const map = {
    Financial:        theme.themeFinancial,
    Coverage:         theme.themeCoverage,
    Innovation:       theme.themeInnovation,
    Freedom:          theme.themeFreedom,
    "Social Contract":theme.themeSocial,
    Trust:            theme.themeTrust,
    Other:            theme.themeOther,
  };
  return map[themeName] || theme.themeOther;
}

// ─────────────────────────────────────────────────
// HELPER: Persuadability stack colors
// ─────────────────────────────────────────────────
export function persColors(theme) {
  return [theme.persHigh, theme.persLow, theme.persNot, theme.persNo, theme.persNeg];
}


// ═════════════════════════════════════════════════
// EXPORT — Change this one line to switch modes
// ═════════════════════════════════════════════════

// export const T = DARK;
export const T = LIGHT;       // ← Cloud + Violet (PRISM brand) active

// Both palettes are also available for a runtime toggle:
export { DARK, LIGHT };
