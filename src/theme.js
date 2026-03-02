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
// "CLOUD + VIOLET" PALETTE  (PRISM brand-derived)
// Soft warm lavender bg · white cards · purple accent
// ─────────────────────────────────────────────────
const LIGHT = {

  // ── Core surfaces ──────────────────────────────
  bg:           "#37060e",      // soft warm lavender page bg
  bgAlt:        "#e4e0e6",      // deeper lavender alt
  card:         "#ffffff",      // clean white cards
  cardAlt:      "#f5f3f7",      // tinted card alt
  cardHover:    "#ebe8f0",      // hover
  border:       "#cdc6d4",      // soft purple-grey border
  borderStrong: "#b8b0c2",      // heavier divider
  strip:        "#ddd8e2",      // dot-strip tracks
  inputBg:      "#f0edf4",      // input / sub-panel bg
  gridLine:     "#ddd8e2",      // SVG grid stroke

  // ── Text hierarchy ─────────────────────────────
  text1:        "#1c1828",      // near-black primary
  text2:        "#60586e",      // warm grey secondary
  text3:        "#807088",      // tertiary
  textBright:   "#0c0814",      // max dark emphasis
  textMax:      "#0c0814",      // headings
  textDim:      "#908898",      // dim labels
  textSubtle:   "#908898",      // footer / legend
  textMono:     "#60586e",      // monospace UI labels
  textBody:     "#302840",      // body copy
  textInvert:   "#ffffff",      // text on dark accent fills

  // ── Accent / brand ─────────────────────────────
  accent:       "#6838a8",      // PRISM brand purple
  accentLight:  "#7c4cc0",      // lighter purple
  accentMuted:  "#b8a0d8",      // muted purple
  accentDim:    "#e8e0f4",      // dim purple info boxes

  // ── Party ──────────────────────────────────────
  gop:          "#d03030",
  gopFill:      "#c82828",
  gopStroke:    "#b01818",
  gopText:      "#701414",
  gopBadgeBg:   "#f8d4d4",
  gopBadgeText: "#881818",
  gopHeaderBg:  "#f8eeee",
  gopHeaderBdr: "#d84040",

  dem:          "#2858c8",
  demFill:      "#2050c0",
  demStroke:    "#1840a8",
  demText:      "#142870",
  demBadgeBg:   "#d4e0f8",
  demBadgeText: "#183898",
  demHeaderBg:  "#eef2fa",
  demHeaderBdr: "#3868d8",

  // ── Tiers ──────────────────────────────────────
  tier1:        "#0c9060",
  tier1Bg:      "#d0f0e0",
  tier2:        "#a87808",
  tier2Bg:      "#f4ecc8",
  tier3:        "#c82828",
  tier3Bg:      "#f8d4d4",

  // ── Semantic / data viz ────────────────────────
  green:        "#0c9060",
  greenBright:  "#10b870",
  red:          "#c82828",
  redLight:     "#e04040",
  amber:        "#a06008",
  amberBright:  "#c88010",
  cyan:         "#0888a8",
  teal:         "#0c8878",
  tealDark:     "#10a890",
  violet:       "#6838a8",
  violetDark:   "#5858c8",
  rose:         "#c01840",
  blue:         "#2858c8",
  blueLight:    "#3868d8",
  blueDim:      "#3868d8",

  // ── Profiler-specific ──────────────────────────
  govtBlue:     "#2858c8",
  corpAmber:    "#a06008",

  // ── Message map theme badges ───────────────────
  themeFinancial:   "#0c9060",
  themeCoverage:    "#2858c8",
  themeInnovation:  "#6838a8",
  themeFreedom:     "#c88010",
  themeSocial:      "#c82828",
  themeTrust:       "#0c8878",
  themeOther:       "#60586e",

  // ── Persuadability stack ───────────────────────
  persHigh:     "#6838a8",
  persLow:      "#b8a0d8",
  persNot:      "#908898",
  persNo:       "#cdc6d4",
  persNeg:      "#e4e0e6",

  // ── MessageMap SoP heatmap (bg, text) ──────────
  sopHot:       { bg: "#c8f0d8", text: "#065838" },   // ≥13
  sopWarm:      { bg: "#d4f0e0", text: "#087040" },   // 10-12
  sopMid:       { bg: "#e0f4ea", text: "#106848" },   // 7-9
  sopNeutral:   { bg: "#f0eef2", text: "#60586e" },   // 6
  sopCool:      { bg: "#f5f3f7", text: "#908898" },   // 5
  sopCold:      { bg: "#f8e4e4", text: "#981828" },   // 4
  sopChilly:    { bg: "#f4d0d2", text: "#881818" },   // 3
  sopIce:       { bg: "#f0c0c4", text: "#801020" },   // ≤2

  // ── Map / geography ────────────────────────────
  mapActive:       "#6838a8",
  mapActiveBorder: "#4c28a0",
  mapIdle:         "#e4e0e6",
  mapIdleBorder:   "#cdc6d4",
  mapHover:        "#d8c8f0",

  // ── Segment map specific ───────────────────────
  segMapBg:        "#e4e0e6",
  segMapGrid:      "#ddd8e2",
  segMapDivider:   "#b8b0c2",
  segMapBadgeBg:   "#f0edf4",

  // ── Ideology heatmap ───────────────────────────
  ideoBlue:     "rgba(40,88,200,",
  ideoRed:      "rgba(200,40,40,",
  ideoNeutral:  "rgba(96,88,110,",

  // ── Rings / donut charts ───────────────────────
  ring1:        "#6838a8",
  ring2:        "#d8d0e0",

  // ── Sort / interactive state ───────────────────
  sortActiveBg:  "#e0d8f0",
  sortIndicator: "#6838a8",

  // ── PE (Policy Elites) column ──────────────────
  peColor:      "#6838a8",
  peHeaderBg:   "#f4f0f8",
  peBorder:     "#6838a8",

  // ── Total column ───────────────────────────────
  totalColor:   "#0c9060",
  totalHeaderBg:"#ecf8f0",
  totalBorder:  "#0c9060",
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
