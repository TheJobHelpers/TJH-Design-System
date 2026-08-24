# TJH Design System — Design Foundations

> A clinical financial and enterprise workbench illuminated by a single sapphire ember (`#1657a7`) on clean paper canvas, augmented with structured canopy surfaces and layered UI showcase architectures.

**Theme:** Light (with Deep Abyss `#060d17` & Sapphire Canopy framing)  
**Primary Accent:** `#1657a7` (Sapphire Blue)  
**Display Typography:** Inter Display / Satoshi (Negative Tracking)  
**Body Typography:** Inter  
**Component Radii:** 12px (Engineered) / 9999px (Pill CTAs) / 16–20px (Cards) / 28px (Canopy Shells)

---

## 01 — Design Principles

1. **Single Sapphire Voice (`#1657a7`)**: The primary brand sapphire blue is the single chromatic voice on the screen. It commands all high-intent actions, active states, and focal points without becoming decorative wallpaper.
2. **Clinical Precision Meets Warm Paper Canvas**: Surfaces live on warm, clean paper (`#fafbfc` / `#ffffff`) rather than stark digital glare. Structural depth is created with hairline borders (`#e2e8f0`) and layered secondary surfaces (`#f4f8fd`), not muddy, heavy drop shadows.
3. **Hard Bookends & Canopy Framing**: The bright body is framed by crisp dark surfaces — a deep Abyss (`#060d17`) footer and saturated Sapphire Hero Canopies (`linear-gradient(160deg, #3da2ff 0%, #1971d6 45%, #1657a7 100%)`) — creating a grounded, authoritative presence.
4. **Engineered Typography**: Display typography employs deliberate negative letter-spacing (`-0.02em` to `-0.035em`) and tight line-heights (1.05 to 1.20) for a confident, engineered aesthetic. Body copy utilizes relaxed line-heights (1.50 to 1.60) with slight positive tracking (`+0.01em`) for effortless scanning.
5. **Anti "Vibe-Coded" Discipline**: No generic purple/violet glows on dark backgrounds, no decorative floating blobs, no icon-stuffed bento boxes with meaningless icons, and no emojis in product UI. Headings use Title Case.

---

## 02 — Color System

### Primary & Brand Accents (Electric Sapphire System)

| Token | Hex | Role | Contrast on White |
|---|---|---|---|
| `--color-sapphire-sky` | `#3da2ff` | **Luminous Sky Accent** — Gradient top stop, vibrant highlights, telemetry markers | 2.14:1 (Accents/Dark surfaces) |
| `--color-electric-azure` | `#1971d6` | **Canonical Blue Text & Action** — All blue typography, links, section tags, focus rings, interactive buttons | 3.86:1 (AA large / UI) |
| `--color-sapphire` | `#1657a7` | **Canonical Brand Anchor** — Primary CTA buttons, active tabs, header elements | 5.38:1 (AAA large, AA normal) |
| `--color-glacier` | `#ebf5ff` | **Light Sky Wash** — Icon background plates, active row highlights | — |
| `--color-glacier-frost` | `#f4f9ff` | **Subtle Tinted Surface** — Secondary card backgrounds, search inputs | — |

### Gradients & Canopy Surfaces (Default Canonical Gradient)

| Token | CSS Value | Role |
|---|---|---|
| `--gradient-default` | `linear-gradient(140deg, #3da2ff 0%, #1971d6 50%, #1657a7 100%)` | **Canonical Brand Gradient** — Default for all gradient surfaces |
| `--gradient-sapphire` | `linear-gradient(140deg, #3da2ff 0%, #1971d6 50%, #1657a7 100%)` | Canonical sapphire gradient |
| `--gradient-sapphire-canopy` | `linear-gradient(160deg, #3da2ff 0%, #1971d6 45%, #1657a7 100%)` | Saturated hero canopy header container |
| `--gradient-sapphire-banner` | `linear-gradient(140deg, #3da2ff 0%, #1971d6 50%, #1657a7 100%)` | Final conversion banner / CTA shell |
| `--gradient-card-sapphire` | `linear-gradient(140deg, #3da2ff 0%, #1971d6 50%, #1657a7 100%)` | Featured card (Transfers, Speed, Core action) |
| `--gradient-card-cobalt` | `linear-gradient(140deg, #2563eb 0%, #1e40af 50%, #1657a7 100%)` | Themed card (AI Insights, Intelligence, Data) |
| `--gradient-card-emerald` | `linear-gradient(140deg, #10b981 0%, #059669 50%, #047857 100%)` | Themed card (Security, Compliance, Savings) |
| `--gradient-card-amber` | `linear-gradient(140deg, #f59e0b 0%, #d97706 50%, #b45309 100%)` | Themed card (Real-Time Tracking, Growth) |
| `--gradient-soft-emerald` | `linear-gradient(145deg, #f6fef9 0%, #ecfdf5 50%, #d1fae5 100%)` | Soft gradient for Security card |
| `--gradient-soft-sapphire` | `linear-gradient(145deg, #f8fbff 0%, #ebf5ff 50%, #dbeafe 100%)` | Soft gradient for Instant Transfers card |
| `--gradient-soft-sky` | `linear-gradient(145deg, #f8fcff 0%, #f0f9ff 50%, #e0f2fe 100%)` | Soft gradient for AI Insights card |
| `--gradient-soft-azure` | `linear-gradient(145deg, #f8faff 0%, #edf5ff 50%, #dbeafe 100%)` | Soft gradient for Global Payments card |
| `--gradient-soft-amber` | `linear-gradient(145deg, #fffef7 0%, #fffbeb 50%, #fef3c7 100%)` | Soft gradient for Real-Time Tracking card |
| `--gradient-soft-slate` | `linear-gradient(145deg, #fafbfc 0%, #f1f5f9 50%, #e2e8f0 100%)` | Soft gradient for All-in-One Wallet card |
| `--surface-frosted-glass` | `rgba(255, 255, 255, 0.15)` | Frosted glass secondary CTA button & floating badges |
| `--border-frosted-glass` | `rgba(255, 255, 255, 0.30)` | Border stroke for frosted glass controls |

### Neutrals & Surfaces

| Token | Hex | Role |
|---|---|---|
| `--color-abyss` | `#060d17` | **Footer & Deep Surface** — Full-bleed dark sections framing the canvas |
| `--color-carbon` | `#0e1726` | **Dark Chrome** — Announcement bars, dark badge fills, elevated dark panels |
| `--color-ink` | `#0f172a` | **Primary Headings & Text** — Highest-emphasis titles, dominant body text |
| `--color-slate` | `#475569` | **Secondary Text** — Descriptions, subheadings, metadata |
| `--color-steel` | `#8392a5` | **Muted Text & Chrome** — Helper text, placeholders, neutral icon strokes |
| `--color-mist` | `#e2e8f0` | **Hairline Borders** — 1px container dividers, input borders, card outlines |
| `--color-canvas` | `#fafbfc` | **Page Canvas** — Default page backdrop, warm paper-like tone |
| `--color-paper` | `#ffffff` | **Card & Panel Surfaces** — Raised cards, modals, dropdown menus |

### Supporting & Semantic

| Token | Hex | Background Hex | Role |
|---|---|---|---|
| `--color-success` | `#059669` | `#ecfdf5` | Positive feedback, verified status, completion |
| `--color-warning` | `#d97706` | `#fffbeb` | Warning notices, pending states |
| `--color-error` | `#dc2626` | `#fef2f2` | Form validation errors, destructive prompts |
| `--color-amber-ember` | `#e07a16` | `rgba(224,122,22,0.12)` | Urgency badges ("Limited Enrollment", "Live"), low-frequency attention |

---

## 03 — Typography Scale

### Font Families
- **Display & Headings:** `'Inter'`, `'Inter Display'`, `'Satoshi'`, ui-sans-serif, system-ui, sans-serif
- **Body & Interface:** `'Inter'`, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **Technical & Code:** `'Geist Mono'`, `'JetBrains Mono'`, `'SF Mono'`, Consolas, monospace

### Type Scale Table

| Token | Size | Weight | Line Height | Letter Spacing | Use For |
|---|---|---|---|---|---|
| `--text-display-xl` | `clamp(40px, 6vw, 72px)` | 700 / 600 | 1.05 | `-0.035em` | Flagship hero headline |
| `--text-display` | `clamp(32px, 4.5vw, 56px)` | 700 / 600 | 1.10 | `-0.03em` | Primary page title, major section display |
| `--text-heading-lg` | 40px (2.5rem) | 600 | 1.18 | `-0.025em` | Major section headings |
| `--text-heading` | 32px (2.0rem) | 600 | 1.22 | `-0.02em` | Section titles, modal titles |
| `--text-heading-sm` | 24px (1.5rem) | 600 | 1.30 | `-0.015em` | Feature card headings, drawer titles |
| `--text-subheading` | 20px (1.25rem) | 500 / 600 | 1.40 | `-0.01em` | Lead paragraphs, category titles |
| `--text-body-lg` | 18px (1.125rem) | 400 / 500 | 1.50 | `-0.005em` | Hero subtext, lead summary |
| `--text-body` | 16px (1.0rem) | 400 / 500 | 1.55 | `0.005em` | Standard body copy, table content |
| `--text-body-sm` | 14px (0.875rem) | 400 / 500 | 1.50 | `0.01em` | Form inputs, card descriptions, navigation |
| `--text-caption` | 12px (0.75rem) | 500 / 600 | 1.45 | `0.02em` | Helper text, metadata, table headers |
| `--text-tag` | 11px (0.6875rem) | 600 | 1.30 | `0.06em` | Uppercase category tags, status badges |

---

## 04 — Spacing & Layout Rhythm

**Base Unit:** 4px / 8px

### Spacing Scale

| Token | Value | Rem | Primary Usage |
|---|---|---|---|
| `--spacing-4` | 4px | 0.25rem | Micro offsets, inline badge padding |
| `--spacing-8` | 8px | 0.5rem | Tight element gaps, button icon spacing |
| `--spacing-12` | 12px | 0.75rem | Compact form row gaps, badge horizontal padding |
| `--spacing-16` | 16px | 1.0rem | Standard element gap, small card padding |
| `--spacing-24` | 24px | 1.5rem | Standard card padding, grid column gap |
| `--spacing-32` | 32px | 2.0rem | Large card padding, group spacing |
| `--spacing-48` | 48px | 3.0rem | Subsection gap, section inner padding |
| `--spacing-64` | 64px | 4.0rem | Standard section vertical gap (mobile) |
| `--spacing-80` | 80px | 5.0rem | Standard section vertical gap (desktop) |
| `--spacing-120` | 120px | 7.5rem | Major hero / banner breathing room |

---

## 05 — Component Specifications

### 1. Primary Filled Button (on Light Surfaces)
- **Fill:** `--color-sapphire` (`#1657a7`)
- **Text:** `#ffffff`, Inter 15px / 600 weight
- **Radius:** Strictly `12px` (`--radius-button: 12px`) precision radius
- **Padding:** `12px 24px` (desktop), `10px 20px` (compact)
- **Hover:** `filter: brightness(0.92)`, `transform: translateY(-1px)`, `box-shadow: 0 4px 14px -2px rgba(22, 87, 167, 0.35)`

### 2. Dual Buttons on Sapphire Canopy (on Dark / Blue Surfaces)
- **Primary on Blue:** `#ffffff` fill, `--color-sapphire` (`#1657a7`) text, 9999px pill radius, `box-shadow: 0 4px 14px -2px rgba(0, 0, 0, 0.12)`.
- **Secondary on Blue (Frosted Glass):** `background: rgba(255, 255, 255, 0.15)`, `border: 1px solid rgba(255, 255, 255, 0.30)`, `#ffffff` text, 9999px pill radius, `backdrop-filter: blur(8px)`.

### 3. Saturated Sapphire Hero Canopy (`hero-canopy`)
- **Container:** Full-bleed or rounded container (`border-radius: 0 0 28px 28px` or floating `28px`), background `--gradient-sapphire-canopy`.
- **Typography:** White display headlines with negative tracking (`-0.035em`), centered or asymmetric left-aligned.
- **Floating UI Widgets:** Stack of elevated floating cards (balance chips, transaction rows, analytics charts) overlapping and breaking through the lower boundary of the canopy into the white canvas (`margin-bottom: -60px` to `-80px`, `z-index: 10`, `box-shadow: 0 20px 40px -12px rgba(15, 23, 42, 0.16)`).

### 4. 6-Card Multi-Colored Grid Cards (`feature-grid`)
- **Use Case:** In the 6-card feature grid, each card commands a distinct, content-aligned color identity to aid visual scannability.
- **Card Color Mappings:**
  1. **Bank-Level Security (Emerald Mint):** `--card-tint-emerald-bg` (`#f0fdf4`), border `#bbf7d0`, circular icon plate `#dcfce7`, icon stroke `#166534`.
  2. **Instant Transfers (Electric Sapphire):** Primary focus card in `--gradient-card-sapphire` (`#3da2ff` &rarr; `#1657a7`), white text, frosted glass bubble plate (`rgba(255,255,255,0.22)`).
  3. **AI Smart Insights (Sky Cyan):** `--card-tint-sky-bg` (`#f0f9ff`), border `#bae6fd`, circular icon plate `#e0f2fe`, icon stroke `#0369a1`.
  4. **Global Payments (Azure Blue):** `--card-tint-azure-bg` (`#edf5ff`), border `#bfdbfe`, circular icon plate `#dbeafe`, icon stroke `#1d4ed8`.
  5. **Real-Time Tracking (Amber Sunrise):** `--card-tint-amber-bg` (`#fffbeb`), border `#fde68a`, circular icon plate `#fef3c7`, icon stroke `#b45309`.
  6. **All-in-One Wallet (Slate Graphite):** `--card-tint-slate-bg` (`#f8fafc`), border `#e2e8f0`, circular icon plate `#f1f5f9`, icon stroke `#334155`.
- **Card Geometry:** `24px` border radius, `32px 28px` padding, `48px` circular icon plate (`50%` radius), 20px Inter 600 title, 14px Inter 400 description.
- **All-Gradient Variant:** Alternatively, grids can use saturated gradients across all 6 cards (`--gradient-card-emerald`, `--gradient-card-sapphire`, `--gradient-card-cyan`, `--gradient-card-cobalt`, `--gradient-card-amber`, `--gradient-card-slate`).

### 5. Product Showcase 2x2 Grid (`showcase-card`)
- **Layout:** 2 columns × 2 rows of large feature cards (`20px` radius).
- **Structure:**
  1. **Top Preview Plate:** Light gray/canvas surface (`#f8fafc`) containing an elevated, layered UI component (stacked cards, transfer flow, insight graph, or analytics table) floating with `--shadow-card`.
  2. **Bottom Copy Block:** 20px Inter 600 headline in `--color-ink`, followed by 14px Inter 400 in `--color-slate`.

### 6. Human Proof & Bento Stat Block (`proof-bento`)
- **Layout:** 3-column bento composition:
  - **Center Column:** Real photography of an active human/professional in a rounded `20px` card, overlapped by a floating translucent transaction/status pill (`backdrop-filter: blur(12px)`).
  - **Flanking Columns:** 2×2 metric cards (e.g. `500K+ Active Users`, `4.9/5 Rating`, `$2.6B Managed`, `120+ Countries`).
  - **Social Proof Strip:** Monochrome partner logo row anchored below.

### 7. 3-Tier Pricing Component (`pricing-grid`)
- **Layout:** 3-column responsive card grid (`Starter`, `Pro Plan / Most Popular`, `Enterprise`).
- **Tier 1: Starter (`pricing-card-starter`):** Light Featherlight Azure gradient (`linear-gradient(155deg, #ffffff 0%, #f8fbff 50%, #f0f7ff 100%)`), `1px solid var(--color-mist)`, Ink typography, clean unencumbered header, and 12px precision secondary button.
- **Tier 2: Pro Plan (`pricing-card-pro` — Featured Hero Tier):** Saturated Electric Sapphire canopy gradient (`--gradient-card-sapphire`), elevated `scale(1.03)` with `0 20px 48px -10px rgba(22, 87, 167, 0.45)`, `#ffffff` typography, solid `#ffffff` 12px precision button, and topped with a **top-straddling "Most Popular" pill badge** (`position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: #1657a7; border: 2px solid #ffffff; border-radius: 9999px;`).
- **Tier 3: Enterprise (`pricing-card-enterprise`):** Light Architectural Slate gradient (`linear-gradient(155deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)`), `1px solid var(--color-mist)`, Ink typography, clean unencumbered header, and 12px precision secondary button.
- **Feature Checklist:** High-contrast semantic SVG vector checkmarks paired with 13.5px body text. Muted crossed SVGs for unavailable tier features.

### 8. Conversion Canopy Banner (`cta-canopy`)
- **Container:** Full-width or boxed `24px` radius container with `--gradient-sapphire-banner`.
- **Content:** Centered display headline in `#ffffff`, supporting copy in `rgba(255, 255, 255, 0.85)`, and dual action buttons (White filled pill + Frosted glass pill).

### 9. Watermarked Architectural Footer (`footer-watermark`)
- **Background:** `--color-abyss` (`#060d17`) or light canvas.
- **Watermark Element:** Huge subdued brand wordmark rendered in faint contrast (`color: rgba(255, 255, 255, 0.04)` on dark or `rgba(15, 23, 42, 0.04)` on light) spanning the lower background width behind the copyright strip.
- **Copyright & Legal Strip:** Clean copyright line and legal links only. Never include fake status markers or artificial pulsing operational badges (e.g. "All Systems Operational").

### 10. Gradient Progress & Loading Bars (`progress-bar`)
- **Track:** Height `6px` to `8px`, `--color-glacier` (`#ebf5ff`) fill, `9999px` pill border-radius, `overflow: hidden`.
- **Bar Fill:** Default Canonical Gradient (`--gradient-default`: `linear-gradient(140deg, #3da2ff 0%, #1971d6 50%, #1657a7 100%)`).
- **Thematic Variants:** Emerald (`--gradient-card-emerald`) for savings/positive thresholds; Amber (`--gradient-card-amber`) for budget limits.

### 11. 3D Tactile Glassmorphic Iconography Architecture
- **Composition Standard:** Multi-layered 3D tactile SVG vector composition built on a 48px × 48px canvas.
  - **Base Layer:** 3D squircle plate with rich chromatic gradient fill, inner top specular rim light (`stroke: linear-gradient(180deg, rgba(255,255,255,0.65), transparent)`), and soft elevation drop shadow.
  - **Core Glyph Layer:** High-contrast dimensional functional icon (Shield, Lightning, AI Spark, Globe, Gauge, Wallet) rendered in solid `#ffffff` or frosted translucent fill (`rgba(255, 255, 255, 0.45)`).
  - **Tactile Sub-Badge Layer:** Overlapping 3D circular/pill badge positioned at the bottom right (Checkmark, Sync arrows, Radar graph, Mini card, Timer clock, Puzzle connector) casting a micro drop shadow onto the base plate.
- **Scale Hierarchy:**
  - **`16px × 16px` (`--icon-sm`):** Inline status badges, tag prefixes, button icons, table actions.
  - **`20px × 20px` (`--icon-md`):** Form inputs, navigation menus, list checkpoints.
  - **`48px × 48px` (`--icon-plate-lg`):** Feature grid hero cards, prominent product showcase headers.
- **Thematic Color Formats:**
  - **Emerald Mint:** `#34d399` ➔ `#059669` plate with checkmark sub-badge.
  - **Electric Sapphire:** `#3da2ff` ➔ `#1657a7` plate with sync sub-badge.
  - **Sky Cyan:** `#38bdf8` ➔ `#0369a1` plate with radar telemetry sub-badge.
  - **Azure Blue:** `#60a5fa` ➔ `#1d4ed8` plate with floating card sub-badge.
  - **Amber Sunrise:** `#fbbf24` ➔ `#d97706` plate with timer sub-badge.
  - **Slate Graphite:** `#64748b` ➔ `#334155` plate with puzzle connector sub-badge.
- **Strict Guardrails:**
  - **Zero Emojis:** Emojis are strictly forbidden in all product UI, badges, cards, and buttons.
  - **Functional Semantic Integrity:** Every icon and sub-badge must communicate a concrete financial / system action. No meaningless visual filler.

---

## 06 — Border Radius & Elevation

### Named Radii

| Token | Value | Application |
|---|---|---|
| `--radius-tag` | `6px` | Inline category chips, micro tags |
| `--radius-input` | `10px` | Form inputs, select dropdowns, search bars |
| `--radius-button` | `12px` | Standard engineered buttons, tabs |
| `--radius-card` | `16px` | Product cards, feature blocks, content tiles |
| `--radius-panel` | `20px` | Large hero feature panels, dialog containers |
| `--radius-canopy` | `28px` | Rounded canopy headers, conversion banners |
| `--radius-pill` | `9999px` | Conversion CTAs, pill badges, floating pills |

### Shadow Scale

```css
:root {
  --shadow-subtle: 0 1px 2px 0 rgba(15, 23, 42, 0.05);
  --shadow-card: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02);
  --shadow-card-hover: 0 12px 24px -8px rgba(15, 23, 42, 0.08), 0 4px 8px -4px rgba(15, 23, 42, 0.03);
  --shadow-widget-floating: 0 20px 40px -12px rgba(15, 23, 42, 0.16), 0 2px 6px -1px rgba(15, 23, 42, 0.06);
  --shadow-button-primary: 0 4px 14px -2px rgba(22, 87, 167, 0.35);
  --shadow-button-white: 0 4px 14px -2px rgba(0, 0, 0, 0.12);
  --shadow-modal: 0 24px 48px -12px rgba(15, 23, 42, 0.18), 0 8px 16px -4px rgba(15, 23, 42, 0.08);
}
```

---

## 07 — Motion & Animation Principles

The TJH motion system is engineered for **instantaneous tactile responsiveness** without frivolous decoration.

### Timing & Deceleration Curves

| Token | Cubic-Bezier | Application |
|---|---|---|
| `--ease-snappy` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary interactive feedback (buttons, cards, focus rings) |
| `--ease-smooth` | `cubic-bezier(0.4, 0, 0.2, 1)` | Structural surface movements (modals, sheets, accordions) |

### Duration Hierarchy

- **Micro (150ms):** Button hover lifts (`translateY(-1px)`), border color shifts, active press depression.
- **Surface (250ms):** Spotlight glow opacity fades (`opacity: 1`), progress bar fill animations, toggle transitions.
- **Structural (350ms):** Modal dialogues, slide-over panels, canopy height changes.

### Card Interactive State: Mouse Pointer-Following Spotlight Corner Glow
Instead of generic vertical translation lifts, cards feature a luminous **mouse pointer-following radial corner glow**:
- The card sets `position: relative; overflow: hidden;`.
- A pseudo-element `::before` renders a `420px` circle radial gradient anchored to `--mouse-x` and `--mouse-y` coordinates tracked on `mousemove`.
- **Default / Non-Colored Cards:** Standard white paper cards (such as showcase and proof metrics) use a luminous **Sapphire Sky** (`#3da2ff` / `rgba(61, 162, 255, 0.18)`) spotlight halo.
- **Thematic Multi-Colored Cards:** Thematic cards project their respective soft tint hue (Emerald, Azure, Sky, Amber, Slate).
- On enter, the spotlight fades in briskly (`opacity: 1`, `transition: opacity 250ms var(--ease-snappy)`), and on leave it gently dissipates (`opacity: 0`, `transition: opacity 500ms var(--ease-smooth)`).
- Content elements sit at `z-index: 2` above the luminous layer.

### Motion Guardrails
1. **Respect Reduced Motion:** Always pair animations with `@media (prefers-reduced-motion: reduce)`.
2. **No Bouncy Cartoon Springs:** Avoid excessive bouncy overshoots on interactive UI.
3. **No Looping Rotations:** Avoid continuously spinning decorative elements.

---

## 08 — Prohibition of "The Vibe-Coded Look" (Anti-Slop Directives)

This design system strictly prohibits generic AI aesthetic tropes (the "vibe-coded look"). Any generated layout or component must comply with the following 10 zero-tolerance rules:

1. **No Headline Biscuit/Pill Badges:** Never place a rounded pill badge, chip, or pulsing bullet dot directly above hero or section headlines (e.g. `• Next Gen Finance 2.0`). Headlines must stand clean, bold, and unencumbered.
2. **No Purple/Violet on Dark ("Vibe Purple"):** Never inject violet, indigo, magenta, or neon purple accents on dark containers. The primary chromatic voice is strictly Sapphire Blue (`#1657a7`, `#1971d6`, `#3da2ff`).
3. **No Gradient Text Keywords ("Rainbow Words"):** Never apply CSS text gradient masks to headline keywords (`background-clip: text`). Headings must be solid, authoritative Ink `#0f172a` (or solid `#ffffff` on saturated canopy backgrounds).
4. **No Emoji in Product UI:** Emojis are strictly banned from UI controls, badges, cards, tabs, and buttons. Use precision semantic SVG icons or plain text.
5. **No Decorative Filler Icons:** Never use unrelated icons (sparkles, rockets, flame badges) as visual filler. Every icon must represent a concrete, relatable function.
6. **No Icon-Stuffed Bento Overuse:** Avoid bento boxes filled with meaningless floating glass spheres, glowing orbs, or faux 3D cubes. Bento structures must contain real quantitative metrics or concrete UI widgets.
7. **No Grid Line Backgrounds or Particle Overlays:** Never overlay blueprint gridlines, dot matrix patterns, or particle meshes onto page canvases.
8. **No Colored Border Glows or Neon Halos:** Cards use clean 1px hairline borders (`#e2e8f0`) with natural, featherlight soft drop elevation — never glowing colored outlines.
9. **No Over-Nested Cards:** Do not nest rounded containers three or more levels deep inside one another.
10. **Title Case Headings Required:** All section headings, card titles, and button labels must use Title Case (e.g. *"Instant Transfers"*, not *"Instant transfers"*).
11. **No Fake System Status Badges ("All Systems Operational"):** Never inject decorative or fabricated status pills, pulsing operational dots, or artificial uptime badges (e.g. "All Systems Operational", "99.9% Uptime", fake telemetry pings) into headers, cards, or footers unless connected to real live backend monitoring infrastructure.
12. **No Em Dashes in Titles or Headlines:** Do not use em dashes (`—`) in website titles, metadata title strings, or section headlines. Use clean pipes (`|`), standard hyphens (`-`), or colons (`:`) for separator formatting.

---

## 09 — LLM Agent Prompting Recipes

### Recipe 1: Saturated Sapphire Hero Canopy
```markdown
Build a Hero Canopy using the TJH Design System:
- Background: linear-gradient(140deg, #3da2ff 0%, #1971d6 50%, #1657a7 100%), rounded bottom corners (28px radius).
- Headline: Centered 56px Inter 700 in #ffffff with -0.035em letter-spacing, Title Case.
- Subtext: 18px Inter 400 in rgba(255,255,255,0.85), max-width 640px.
- Action row:
  - Primary button: #ffffff filled pill, #1657a7 text, 12px 24px padding, Inter 15px/600.
  - Secondary button: rgba(255,255,255,0.15) fill with 1px rgba(255,255,255,0.3) border, #ffffff text, pill radius.
- Floating widgets: 3 overlapping UI cards (balance, transaction, analytics chart) with white surfaces and 0 20px 40px -12px rgba(15,23,42,0.16) shadow, breaking out of the canopy by -60px into the canvas below.
```

### Recipe 2: Product Showcase 2x2 Grid
```markdown
Build a 2x2 Product Showcase grid using the TJH Design System:
- 2 columns × 2 rows, 24px gap, max-width 1200px.
- Each card: #ffffff background, 20px radius, 1px solid #e2e8f0 border, 24px padding.
- Top mockup area: #f8fafc background container with 14px radius, displaying layered interactive UI elements (cards/charts/flow).
- Bottom copy: 20px Inter 600 in #0f172a Title, followed by 14px Inter 400 in #475569 description.
```

### Recipe 3: 3-Tier Pricing Component
```markdown
Build a 3-tier pricing section using the TJH Design System:
- 3 columns (Starter, Pro, Enterprise), max-width 1200px.
- Starter & Enterprise: #ffffff fill, 1px solid #e2e8f0 border, 16px radius, #0f172a price, outlined pill button.
- Pro (Featured): linear-gradient(140deg, #3da2ff 0%, #1971d6 50%, #1657a7 100%) fill, #ffffff text and price, #ffffff filled pill button, "Most Popular" pill badge at top.
- Feature checklist with 14px text and checked icons.
```

---

## 10 — Known Gaps & Governance

The following components remain pending dedicated reference specifications:
- Complex multi-level data tables with inline column filters
- Multi-step file upload dropzones
- Dark-mode alternative theme for dashboard workspaces

### Governance Rule
- When building on existing patterns: Copy the exact tokens and hex codes above.
- When expanding into Known Gaps: Formally document the token values in `DESIGN.md` before shipping code.

---

## 11 — Accessibility & UI/UX Standards (WCAG 2.1 AA / 2.2 Compliant)

| Category | Standard | System Requirement |
|---|---|---|
| **Color Contrast** | WCAG 2.1 AA (4.5:1 text, 3:1 UI) | Ink `#0f172a` (16.2:1) & Sapphire `#1657a7` (5.38:1) pass AAA/AA on white. **`#3da2ff` is strictly restricted to decorative/graphical gradient stops and dark-surface highlights — never used for small body text on light backgrounds.** |
| **Focus Rings** | WCAG 2.4.7 / 2.4.11 | All interactive elements must implement a visible 2px focus ring (`--focus-ring-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #1971d6`) with 2px offset. |
| **Touch Targets** | WCAG 2.5.5 / 2.5.8 | All interactive controls (buttons, links, pills, dropdown items) must maintain a minimum bounding box / touch target of **44px × 44px** on mobile viewports. |
| **Reduced Motion** | WCAG 2.3.3 | All micro-interactions, translations, and hover lifts must respect `@media (prefers-reduced-motion: reduce)`. |
| **Non-Color Cues** | WCAG 1.4.1 | Status badges (Success, Warning, Error) must never rely on color alone; they must pair color fills with semantic text labels or icons. |
| **Reading Measure** | Typographic Best Practice | Body text blocks must maintain a comfortable line measure constrained to max **65–75 characters (~680px)** to prevent eye tracking fatigue. |
| **Fluid Responsiveness** | Layout Robustness | Overlapping floating widgets must collapse into vertical flow on screens `< 640px` with zero horizontal overflow or clipping. |
