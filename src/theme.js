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
// MID-TONE "TWILIGHT" PALETTE  (halfway between dark & light)
// ─────────────────────────────────────────────────
const LIGHT = {

  // ── Core surfaces ──────────────────────────────
  // Mid-tone slate — the sweet spot between dark and light
  bg:           "#2a3040",      // medium slate page bg
  bgAlt:        "#262c3a",      // slightly deeper alternate bg
  card:         "#313848",      // raised card surface
  cardAlt:      "#353d4e",      // secondary card fill
  cardHover:    "#3d4558",      // hover state
  border:       "#434d60",      // visible but not harsh border
  borderStrong: "#505b70",      // heavier divider
  strip:        "#3a4358",      // dot-strip tracks
  inputBg:      "#282e3c",      // input / sub-panel bg
  gridLine:     "#3a4358",      // SVG grid stroke

  // ── Text hierarchy ─────────────────────────────
  text1:        "#d0d8e4",      // primary text — easy on eyes
  text2:        "#8a96aa",      // secondary / muted
  text3:        "#5c6880",      // tertiary / dim labels
  textBright:   "#e0e6f0",      // emphasis
  textMax:      "#edf1f7",      // maximum contrast headings
  textDim:      "#5c6880",      // dim labels
  textSubtle:   "#6a7890",      // footer / legend
  textMono:     "#8090a8",      // monospace UI labels
  textBody:     "#b8c4d4",      // body copy
  textInvert:   "#1e2430",      // text on bright accent fills

  // ── Accent / brand ─────────────────────────────
  accent:       "#6aa0d0",      // brighter blue accent for mid bg
  accentLight:  "#88bce4",      // lighter accent for labels
  accentMuted:  "#4a78a0",      // muted accent borders
  accentDim:    "#354860",      // dim accent info boxes

  // ── Party ──────────────────────────────────────
  gop:          "#e06060",
  gopFill:      "#d43030",
  gopStroke:    "#e85050",
  gopText:      "#f4baba",
  gopBadgeBg:   "#5a2020",
  gopBadgeText: "#f0a0a0",
  gopHeaderBg:  "#382028",      // muted rose tint
  gopHeaderBdr: "#e85050",

  dem:          "#5888e0",
  demFill:      "#3060d0",
  demStroke:    "#5080e8",
  demText:      "#b0cef4",
  demBadgeBg:   "#1e3058",
  demBadgeText: "#90b8f0",
  demHeaderBg:  "#202838",      // muted blue tint
  demHeaderBdr: "#5080e8",

  // ── Tiers ──────────────────────────────────────
  tier1:        "#40c890",
  tier1Bg:      "#1a3830",
  tier2:        "#d8a030",
  tier2Bg:      "#3a3018",
  tier3:        "#e04848",
  tier3Bg:      "#3a1818",

  // ── Semantic / data viz ────────────────────────
  green:        "#40c890",
  greenBright:  "#58e0a0",
  red:          "#e04848",
  redLight:     "#f06060",
  amber:        "#c88040",
  amberBright:  "#e0a040",
  cyan:         "#30c0e0",
  teal:         "#30c0a8",
  tealDark:     "#50d8c0",
  violet:       "#9878e0",
  violetDark:   "#7878e0",
  rose:         "#e84068",
  blue:         "#4080e0",
  blueLight:    "#5898f0",
  blueDim:      "#5898d0",

  // ── Profiler-specific ──────────────────────────
  govtBlue:     "#5898d0",
  corpAmber:    "#c88040",

  // ── Message map theme badges ───────────────────
  themeFinancial:   "#40c890",
  themeCoverage:    "#5898f0",
  themeInnovation:  "#9878e0",
  themeFreedom:     "#e0a040",
  themeSocial:      "#e04848",
  themeTrust:       "#30c0a8",
  themeOther:       "#8090a8",

  // ── Persuadability stack ───────────────────────
  persHigh:     "#6aa0d0",
  persLow:      "#88bce4",
  persNot:      "#5c6880",
  persNo:       "#434d60",
  persNeg:      "#343c4e",

  // ── MessageMap SoP heatmap (bg, text) ──────────
  sopHot:       { bg: "#1a4838", text: "#70e8b0" },
  sopWarm:      { bg: "#1a3830", text: "#60d8a0" },
  sopMid:       { bg: "#243838", text: "#88d8b8" },
  sopNeutral:   { bg: "#353d4e", text: "#b8c4d4" },
  sopCool:      { bg: "#303848", text: "#8a96aa" },
  sopCold:      { bg: "#382830", text: "#d09098" },
  sopChilly:    { bg: "#402028", text: "#f0a0a0" },
  sopIce:       { bg: "#481820", text: "#f4a0a8" },

  // ── Map / geography ────────────────────────────
  mapActive:       "#6aa0d0",
  mapActiveBorder: "#4880c0",
  mapIdle:         "#353d4e",
  mapIdleBorder:   "#434d60",
  mapHover:        "#4a78a0",

  // ── Segment map specific ───────────────────────
  segMapBg:        "#262c3a",
  segMapGrid:      "#3a4358",
  segMapDivider:   "#505b70",
  segMapBadgeBg:   "#2a3040",

  // ── Ideology heatmap ───────────────────────────
  ideoBlue:     "rgba(64,128,224,",
  ideoRed:      "rgba(224,72,72,",
  ideoNeutral:  "rgba(90,104,128,",

  // ── Rings / donut charts ───────────────────────
  ring1:        "#6aa0d0",
  ring2:        "#3a4358",

  // ── Sort / interactive state ───────────────────
  sortActiveBg:  "#354860",
  sortIndicator: "#5898f0",

  // ── PE (Policy Elites) column ──────────────────
  peColor:      "#9878e0",
  peHeaderBg:   "#282038",      // muted purple tint
  peBorder:     "#9878e0",

  // ── Total column ───────────────────────────────
  totalColor:   "#40c890",
  totalHeaderBg:"#1a3028",      // muted green tint
  totalBorder:  "#40c890",
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
export const T = LIGHT;       // ← mid-tone "twilight" mode (active)

// Both palettes are also available for a runtime toggle:
export { DARK, LIGHT };
