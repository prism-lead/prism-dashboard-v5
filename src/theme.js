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
  // Cool slate-tinted grays — modern but NOT stark white
  bg:           "#edf0f4",      // soft blue-gray page bg
  bgAlt:        "#e5e9ef",      // slightly deeper alternate bg
  card:         "#f4f6f9",      // tinted off-white cards (NOT pure white)
  cardAlt:      "#eef1f5",      // secondary card fill
  cardHover:    "#dfe4ec",      // hover state with visible lift
  border:       "#c8d0db",      // cool mid-tone border
  borderStrong: "#b0bac8",      // heavier divider
  strip:        "#d5dbe5",      // dot-strip tracks
  inputBg:      "#e8ecf2",      // input / sub-panel bg
  gridLine:     "#d5dbe5",      // SVG grid stroke

  // ── Text hierarchy ─────────────────────────────
  text1:        "#1a2536",      // primary text (dark navy)
  text2:        "#556275",      // secondary / muted
  text3:        "#8896a7",      // tertiary / dim labels
  textBright:   "#0d1826",      // near-black emphasis
  textMax:      "#040a14",      // maximum contrast headings
  textDim:      "#8896a7",      // dim labels
  textSubtle:   "#8896a7",      // footer / legend
  textMono:     "#556275",      // monospace UI labels
  textBody:     "#2d3d50",      // body copy
  textInvert:   "#f4f6f9",      // text on dark accent fills

  // ── Accent / brand ─────────────────────────────
  accent:       "#3572a5",      // richer blue accent
  accentLight:  "#245d8f",      // darker accent for labels
  accentMuted:  "#88b8e0",      // muted accent borders
  accentDim:    "#cdddf0",      // dim accent info boxes

  // ── Party ──────────────────────────────────────
  gop:          "#d42020",
  gopFill:      "#d42020",
  gopStroke:    "#b01818",
  gopText:      "#741414",
  gopBadgeBg:   "#f8d5d5",
  gopBadgeText: "#8b1515",
  gopHeaderBg:  "#f2e3e3",      // tinted, not pure white
  gopHeaderBdr: "#e04040",

  dem:          "#2058d4",
  demFill:      "#2058d4",
  demStroke:    "#1a48b8",
  demText:      "#142e78",
  demBadgeBg:   "#d0dff8",
  demBadgeText: "#1a3898",
  demHeaderBg:  "#e2eaf5",      // tinted, not pure white
  demHeaderBdr: "#3878e8",

  // ── Tiers ──────────────────────────────────────
  tier1:        "#058060",
  tier1Bg:      "#c4eeda",
  tier2:        "#956000",
  tier2Bg:      "#f5e8c0",
  tier3:        "#c82020",
  tier3Bg:      "#f5d4d4",

  // ── Semantic / data viz ────────────────────────
  green:        "#058060",
  greenBright:  "#0ea572",
  red:          "#c82020",
  redLight:     "#e04040",
  amber:        "#a34c00",
  amberBright:  "#c87000",
  cyan:         "#0880a0",
  teal:         "#0c8878",
  tealDark:     "#12a898",
  violet:       "#6c30d8",
  violetDark:   "#5858e0",
  rose:         "#cc1840",
  blue:         "#2058d4",
  blueLight:    "#3878e8",
  blueDim:      "#3878e8",

  // ── Profiler-specific ──────────────────────────
  govtBlue:     "#2058d4",
  corpAmber:    "#a34c00",

  // ── Message map theme badges ───────────────────
  themeFinancial:   "#058060",
  themeCoverage:    "#2058d4",
  themeInnovation:  "#6c30d8",
  themeFreedom:     "#c87000",
  themeSocial:      "#c82020",
  themeTrust:       "#0c8878",
  themeOther:       "#556275",

  // ── Persuadability stack ───────────────────────
  persHigh:     "#3572a5",
  persLow:      "#88b8e0",
  persNot:      "#8896a7",
  persNo:       "#b8c2ce",
  persNeg:      "#d5dbe5",

  // ── MessageMap SoP heatmap (bg, text) ──────────
  sopHot:       { bg: "#c0ead2", text: "#065040" },
  sopWarm:      { bg: "#ccf0da", text: "#0e5428" },
  sopMid:       { bg: "#ddf0e6", text: "#186848" },
  sopNeutral:   { bg: "#e0e5ec", text: "#3d4e60" },
  sopCool:      { bg: "#e8ecf2", text: "#556275" },
  sopCold:      { bg: "#f0e0e0", text: "#901030" },
  sopChilly:    { bg: "#f0d0d0", text: "#881818" },
  sopIce:       { bg: "#ecc0c4", text: "#781028" },

  // ── Map / geography ────────────────────────────
  mapActive:       "#3572a5",
  mapActiveBorder: "#1a48b8",
  mapIdle:         "#d5dbe5",
  mapIdleBorder:   "#b8c2ce",
  mapHover:        "#b0cce8",

  // ── Segment map specific ───────────────────────
  segMapBg:        "#e5e9ef",
  segMapGrid:      "#d5dbe5",
  segMapDivider:   "#b8c2ce",
  segMapBadgeBg:   "#e8ecf2",

  // ── Ideology heatmap ───────────────────────────
  ideoBlue:     "rgba(32,88,212,",
  ideoRed:      "rgba(200,32,32,",
  ideoNeutral:  "rgba(85,98,117,",

  // ── Rings / donut charts ───────────────────────
  ring1:        "#3572a5",
  ring2:        "#d5dbe5",

  // ── Sort / interactive state ───────────────────
  sortActiveBg:  "#cdddf0",
  sortIndicator: "#2058d4",

  // ── PE (Policy Elites) column ──────────────────
  peColor:      "#6c30d8",
  peHeaderBg:   "#ece6f5",      // tinted lavender, not white
  peBorder:     "#6c30d8",

  // ── Total column ───────────────────────────────
  totalColor:   "#058060",
  totalHeaderBg:"#e0f0e6",      // tinted green, not white
  totalBorder:  "#058060",
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
export const T = LIGHT;       // ← soft-mist light mode (active)

// Both palettes are also available for a runtime toggle:
export { DARK, LIGHT };
