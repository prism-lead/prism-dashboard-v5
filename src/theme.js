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
// "WARM CANVAS + STEEL" PALETTE
// Beige/cream page bg · steel-grey cards & panels
// ─────────────────────────────────────────────────
const LIGHT = {

  // ── Core surfaces ──────────────────────────────
  bg:           "#e8e2d8",      // warm cream page bg
  bgAlt:        "#e0d8ce",      // slightly deeper warm alt
  card:         "#2c3446",      // steel-grey card (from twilight)
  cardAlt:      "#303a4c",      // secondary card fill
  cardHover:    "#3a4560",      // hover
  border:       "#4a5670",      // border inside cards
  borderStrong: "#5a6880",      // heavy divider
  strip:        "#384258",      // dot-strip tracks
  inputBg:      "#222838",      // input / sub-panel bg
  gridLine:     "#384258",      // SVG grid stroke

  // ── Page-level text (dark on beige bg) ────────
  // Use these for elements that sit directly on the page bg
  pgText:       "#3a3228",      // page-level primary (warm dark brown)
  pgBody:       "#4a4238",      // page-level body copy
  pgMono:       "#5a5248",      // page-level monospace / muted
  pgSubtle:     "#6a6058",      // page-level subtle labels
  pgDim:        "#988e84",      // page-level dim

  // ── Text hierarchy (light on steel cards) ─────
  text1:        "#dce4f0",      // primary text
  text2:        "#94a4ba",      // secondary / muted
  text3:        "#606e84",      // tertiary / dim labels
  textBright:   "#edf2fa",      // near-white emphasis
  textMax:      "#f4f8ff",      // maximum contrast headings
  textDim:      "#606e84",      // dim labels
  textSubtle:   "#708098",      // footer / legend
  textMono:     "#90a0b8",      // monospace UI labels
  textBody:     "#c4d0e0",      // body copy
  textInvert:   "#3a3228",      // text on bright accent fills

  // ── Accent / brand ─────────────────────────────
  accent:       "#70a8d8",      // bright blue accent
  accentLight:  "#90c4f0",      // vivid accent for labels
  accentMuted:  "#4878a8",      // muted accent borders
  accentDim:    "#2c4060",      // dim accent info boxes

  // ── Party ──────────────────────────────────────
  gop:          "#f06868",
  gopFill:      "#e03838",
  gopStroke:    "#f05858",
  gopText:      "#fcc8c8",
  gopBadgeBg:   "#5c1818",
  gopBadgeText: "#f8a8a8",
  gopHeaderBg:  "#321820",
  gopHeaderBdr: "#f05858",

  dem:          "#60a0f0",
  demFill:      "#3868e0",
  demStroke:    "#5890f0",
  demText:      "#c0d8f8",
  demBadgeBg:   "#182850",
  demBadgeText: "#98c0f8",
  demHeaderBg:  "#182030",
  demHeaderBdr: "#5890f0",

  // ── Tiers ──────────────────────────────────────
  tier1:        "#48d898",
  tier1Bg:      "#143828",
  tier2:        "#e8b038",
  tier2Bg:      "#382c10",
  tier3:        "#f05050",
  tier3Bg:      "#381414",

  // ── Semantic / data viz ────────────────────────
  green:        "#48d898",
  greenBright:  "#60f0a8",
  red:          "#f05050",
  redLight:     "#f87070",
  amber:        "#d89048",
  amberBright:  "#f0b048",
  cyan:         "#38d0f0",
  teal:         "#38d0b0",
  tealDark:     "#58e8c8",
  violet:       "#a888f0",
  violetDark:   "#8888f0",
  rose:         "#f04870",
  blue:         "#4888f0",
  blueLight:    "#60a0f8",
  blueDim:      "#60a0e0",

  // ── Profiler-specific ──────────────────────────
  govtBlue:     "#60a0e0",
  corpAmber:    "#d89048",

  // ── Message map theme badges ───────────────────
  themeFinancial:   "#48d898",
  themeCoverage:    "#60a0f8",
  themeInnovation:  "#a888f0",
  themeFreedom:     "#f0b048",
  themeSocial:      "#f05050",
  themeTrust:       "#38d0b0",
  themeOther:       "#90a0b8",

  // ── Persuadability stack ───────────────────────
  persHigh:     "#70a8d8",
  persLow:      "#90c4f0",
  persNot:      "#606e84",
  persNo:       "#404c60",
  persNeg:      "#2c3446",

  // ── MessageMap SoP heatmap (bg, text) ──────────
  sopHot:       { bg: "#145038", text: "#78f0b8" },
  sopWarm:      { bg: "#143828", text: "#68e0a8" },
  sopMid:       { bg: "#1c3830", text: "#90e0c0" },
  sopNeutral:   { bg: "#303a4c", text: "#c4d0e0" },
  sopCool:      { bg: "#282e40", text: "#94a4ba" },
  sopCold:      { bg: "#382028", text: "#e098a0" },
  sopChilly:    { bg: "#441820", text: "#f8a8a8" },
  sopIce:       { bg: "#501018", text: "#fca8b0" },

  // ── Map / geography ────────────────────────────
  mapActive:       "#70a8d8",
  mapActiveBorder: "#5088c8",
  mapIdle:         "#2c3446",
  mapIdleBorder:   "#4a5670",
  mapHover:        "#4878a8",

  // ── Segment map specific ───────────────────────
  segMapBg:        "#e0d8ce",
  segMapGrid:      "#384258",
  segMapDivider:   "#5a6880",
  segMapBadgeBg:   "#222838",

  // ── Ideology heatmap ───────────────────────────
  ideoBlue:     "rgba(72,136,240,",
  ideoRed:      "rgba(240,80,80,",
  ideoNeutral:  "rgba(96,110,132,",

  // ── Rings / donut charts ───────────────────────
  ring1:        "#70a8d8",
  ring2:        "#384258",

  // ── Sort / interactive state ───────────────────
  sortActiveBg:  "#2c4060",
  sortIndicator: "#60a0f8",

  // ── PE (Policy Elites) column ──────────────────
  peColor:      "#a888f0",
  peHeaderBg:   "#241838",
  peBorder:     "#a888f0",

  // ── Total column ───────────────────────────────
  totalColor:   "#48d898",
  totalHeaderBg:"#142820",
  totalBorder:  "#48d898",
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
export const T = LIGHT;       // ← warm canvas + steel grey (active)

// Both palettes are also available for a runtime toggle:
export { DARK, LIGHT };
