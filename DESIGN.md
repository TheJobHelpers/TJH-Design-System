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

### Primary & Brand Accents

| Token | Hex | Role | Contrast on White |
|---|---|---|---|
| `--color-sapphire` | `#1657a7` | **Primary Brand & Action** — High-intent CTA buttons, active tabs, primary links, focus rings | 5.38:1 (AAA large, AA normal) |
| `--color-sapphire-deep` | `#0d386c` | **Hover & Active Action** — Pressed button states, dark accent accents | 9.42:1 (AAA) |
| `--color-azure` | `#2d7ee8` | **Focus & Highlight Ring** — Keyboard focus states, active glow, secondary metric accents | 3.52:1 (AA large / UI) |
| `--color-glacier` | `#edf4fc` | **Light Accent Wash** — Pill button background tint, icon plates, active row highlights | — |
| `--color-glacier-frost` | `#f4f8fd` | **Subtle Tinted Surface** — Secondary card backgrounds, search bars | — |

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
- **Radius:** `12px` (precision UI) or `9999px` (marketing pill)
- **Padding:** `12px 24px` (desktop), `10px 20px` (compact)
- **Hover:** Background `--color-sapphire-deep` (`#0d386c`), `transform: translateY(-1px)`, `box-shadow: 0 4px 14px -2px rgba(22, 87, 167, 0.35)`

### 2. Dual Buttons on Sapphire Canopy (on Dark / Blue Surfaces)
- **Primary on Blue:** `#ffffff` fill, `--color-sapphire` (`#1657a7`) text, 9999px pill radius, `box-shadow: 0 4px 14px -2px rgba(0, 0, 0, 0.12)`.
- **Secondary on Blue (Frosted Glass):** `background: rgba(255, 255, 255, 0.15)`, `border: 1px solid rgba(255, 255, 255, 0.30)`, `#ffffff` text, 9999px pill radius, `backdrop-filter: blur(8px)`.

### 3. Saturated Sapphire Hero Canopy (`hero-canopy`)
- **Container:** Full-bleed or rounded container (`border-radius: 0 0 28px 28px` or floating `28px`), background `--gradient-sapphire-canopy`.
- **Typography:** White display headlines with negative tracking (`-0.035em`), centered or asymmetric left-aligned.
- **Floating UI Widgets:** Stack of elevated floating cards (balance chips, transaction rows, analytics charts) overlapping and breaking through the lower boundary of the canopy into the white canvas (`margin-bottom: -60px` to `-80px`, `z-index: 10`, `box-shadow: 0 20px 40px -12px rgba(15, 23, 42, 0.16)`).

### 4. Content-Aware Multi-Colored Grid Cards (`card-featured`)
- **Use Case:** In a 6-card or 3-column feature grid, cards dynamically adapt their surface treatment based on their content hierarchy.
- **Themed Gradients (Saturated / Highlighted Focus):**
  - **Transfers / Speed / Primary Action:** `--gradient-card-sapphire` (`#3da2ff` &rarr; `#1657a7`)
  - **AI / Intelligence / Analytics:** `--gradient-card-cobalt` (`#2563eb` &rarr; `#1657a7`)
  - **Security / Compliance / Savings:** `--gradient-card-emerald` (`#10b981` &rarr; `#047857`)
  - **Performance / Tracking / Growth:** `--gradient-card-amber` (`#f59e0b` &rarr; `#b45309`)
- **Highlighted Card Anatomy:** `24px` border radius, `32px 28px` padding, white typography (`20px` title, `14px` description at `rgba(255, 255, 255, 0.90)`), circular frosted translucent icon plate (`width: 48px`, `border-radius: 50%`, `background: rgba(255, 255, 255, 0.22)`, `border: 1px solid rgba(255, 255, 255, 0.35)`).
- **Sibling Neutral Cards:** Paper canvas (`#ffffff`), `24px` border radius, `1px solid var(--color-mist)`, with `--color-ink` title, `--color-slate` description, and circular neutral icon plate (`#f1f5f9` fill, `1px solid #e2e8f0`).

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
- **Layout:** 3-column cards (`Starter`, `Pro / Most Popular`, `Enterprise`).
- **Standard Tiers (Starter & Enterprise):** White background (`#ffffff`), `1px solid var(--color-mist)`, 16px radius, Ink price, outlined pill CTA button.
- **Featured Tier (Pro):** Sapphire gradient background (`--gradient-featured-card`), `#ffffff` price and feature text, `#ffffff` filled pill CTA button, topped with a "Most Popular" translucent pill badge.
- **Feature Checklist:** Checked icons (`#059669` or `#ffffff` on blue) paired with 14px body text.

### 8. Conversion Canopy Banner (`cta-canopy`)
- **Container:** Full-width or boxed `24px` radius container with `--gradient-sapphire-banner`.
- **Content:** Centered display headline in `#ffffff`, supporting copy in `rgba(255, 255, 255, 0.85)`, and dual action buttons (White filled pill + Frosted glass pill).

### 9. Watermarked Architectural Footer (`footer-watermark`)
- **Background:** `--color-abyss` (`#060d17`) or light canvas.
- **Watermark Element:** Huge subdued brand wordmark rendered in faint contrast (`color: rgba(255, 255, 255, 0.04)` on dark or `rgba(15, 23, 42, 0.04)` on light) spanning the lower background width behind the copyright strip.

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

## 07 — AI-Slop & Vibe-Coding Guardrails

**Strictly Forbidden Anti-Patterns:**
1. **No Headline Biscuit/Pill Badges:** Never place a rounded biscuit/pill badge or bullet chip directly above hero or section headlines (e.g. `• Next Gen Finance 2.0`). Headlines must stand clean and unencumbered.
2. **No Violet/Purple Accents on Dark Backgrounds:** Never substitute `#1657a7` with neon indigo, violet, or magenta.
3. **No Unrelatable Icons:** Every icon must map directly to its semantic function. Never scatter decorative random icons.
4. **No Emoji in Product UI:** No emojis in badges, headings, cards, or buttons. Use monochrome SVG line icons.
5. **No Cliché Bento Boxes with Floating Glowing Spheres.**
6. **Title Case Headings:** All section headings, card titles, and button labels must use Title Case.

---

## 08 — LLM Agent Prompting Recipes

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

## 09 — Known Gaps & Governance

The following components remain pending dedicated reference specifications:
- Complex multi-level data tables with inline column filters
- Multi-step file upload dropzones
- Dark-mode alternative theme for dashboard workspaces

### Governance Rule
- When building on existing patterns: Copy the exact tokens and hex codes above.
- When expanding into Known Gaps: Formally document the token values in `DESIGN.md` before shipping code.
