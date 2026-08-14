# TJH Design System — Design Foundations

> A clinical financial and enterprise workbench illuminated by a single sapphire ember (`#1657a7`) on clean paper canvas.

**Theme:** Light (with Deep Abyss `#060d17` framing)  
**Primary Accent:** `#1657a7` (Sapphire Blue)  
**Display Typography:** Inter Display / Satoshi (Negative Tracking)  
**Body Typography:** Inter  
**Component Radii:** 12px (Engineered) / 9999px (Pill CTAs) / 16–20px (Cards)

---

## 01 — Design Principles

1. **Single Sapphire Voice (`#1657a7`)**: The primary brand sapphire blue is the single chromatic voice on the screen. It commands all high-intent actions, active states, and focal points without becoming decorative wallpaper.
2. **Clinical Precision Meets Warm Paper Canvas**: Surfaces live on warm, clean paper (`#fafbfc` / `#ffffff`) rather than stark digital glare. Structural depth is created with hairline borders (`#e2e8f0`) and layered secondary surfaces (`#f4f8fd`), not muddy, heavy drop shadows.
3. **Hard Bookends for Architectural Height**: The bright, tall body is framed by crisp dark surfaces — a deep Abyss (`#060d17`) footer and optional Carbon chrome — creating a grounded, authoritative presence.
4. **Engineered Typography**: Display typography employs deliberate negative letter-spacing (`-0.02em` to `-0.03em`) and tight line-heights (1.05 to 1.20) for a confident, engineered aesthetic. Body copy utilizes relaxed line-heights (1.50 to 1.60) with slight positive tracking (`+0.01em`) for effortless scanning.
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

### Rules of Application:
- **Single Action Dominance:** Exactly one primary filled sapphire (`#1657a7`) button per visual region. Pair with outlined secondary buttons or ghost links.
- **Surface Elevation Steps:** Canvas (`#fafbfc`) → Paper Surface (`#ffffff`) → Elevated Dropdown/Modal (`#ffffff` + `shadow-modal`).
- **Strict WCAG Compliance:** All text on light surfaces must use `--color-ink` (14.2:1) or `--color-slate` (5.9:1). Text on `--color-sapphire` must be `#ffffff` (5.38:1).

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

### Layout Rules
- **Container Max Width:** `1200px` (standard content rail), `1280px` (wide gallery).
- **Horizontal Gutters:** `24px` on desktop, `16px` on mobile.
- **Section Rhythm:** `80px` to `120px` vertical margin between content sections.

---

## 05 — Component Specifications

### 1. Primary Filled Button
- **Fill:** `--color-sapphire` (`#1657a7`)
- **Text:** `#ffffff`, Inter 15px / 600 weight
- **Radius:** `12px` (precision UI) or `9999px` (marketing pill)
- **Padding:** `12px 24px` (desktop), `10px 20px` (compact)
- **Border:** None (hairline 0.5px inset specular sheen optional)
- **Hover:** Background `--color-sapphire-deep` (`#0d386c`), `transform: translateY(-1px)`, `box-shadow: 0 4px 14px -2px rgba(22, 87, 167, 0.35)`
- **Active / Pressed:** `transform: translateY(0px)`
- **Focus:** `outline: 2px solid #2d7ee8`, `outline-offset: 2px`

### 2. Secondary Outlined Button
- **Fill:** `#ffffff` (or `transparent`)
- **Text:** `--color-ink` (`#0f172a`), Inter 15px / 600 weight
- **Border:** `1px solid var(--color-mist)` (`#e2e8f0`)
- **Radius:** Same as primary (`12px` or `9999px`)
- **Padding:** `12px 24px`
- **Hover:** Border `--color-steel` (`#8392a5`), Background `--color-glacier-frost` (`#f4f8fd`)

### 3. Ghost Link Button
- **Fill:** `transparent`
- **Text:** `--color-ink` (`#0f172a`), Inter 14–15px / 500 weight
- **Icon:** Optional leading/trailing icon in `--color-sapphire`
- **Hover:** Text `--color-sapphire` (`#1657a7`), subtle background wash

### 4. Input Field & Email Capture
- **Fill:** `#ffffff`
- **Border:** `1px solid var(--color-mist)` (`#e2e8f0`)
- **Radius:** `10px` to `12px`
- **Padding:** `12px 16px`
- **Typography:** 15px Inter 400, color `--color-ink`
- **Placeholder:** `--color-steel` (`#8392a5`)
- **Focus State:** Border `--color-sapphire` (`#1657a7`), `box-shadow: 0 0 0 3px rgba(22, 87, 167, 0.15)`

### 5. Feature Card & Panel
- **Fill:** `--color-paper` (`#ffffff`)
- **Border:** `1px solid var(--color-mist)` (`#e2e8f0`)
- **Radius:** `16px` (standard), `20px` (large hero feature)
- **Padding:** `24px` to `32px`
- **Shadow:** `0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02)`
- **Hover (Interactive):** `border-color: #cbd5e1`, `transform: translateY(-2px)`, `box-shadow: 0 12px 24px -8px rgba(15, 23, 42, 0.08)`

### 6. Metric / Stat Card
- **Layout:** Vertical stack (Value → Label → Micro Subtext)
- **Value:** 40px–48px Inter 700, color `--color-sapphire` (`#1657a7`) or `--color-ink` (`#0f172a`)
- **Label:** 14px Inter 600, color `--color-slate` (`#475569`)
- **Container:** Warm Paper surface with 16px radius

### 7. Primary Navigation Bar
- **Height:** `64px` to `72px`
- **Background:** `#ffffff` (with `backdrop-filter: blur(12px)` when sticky)
- **Border Bottom:** `1px solid var(--color-mist)` (`#e2e8f0`)
- **Layout:** Logo mark left (Sapphire mark + Ink wordmark), center nav links (14px / 500 Slate), right actions (Ghost 'Sign in' + Filled Sapphire 'Get Started' CTA).

### 8. Dark Abyss Footer
- **Background:** `--color-abyss` (`#060d17`) full-bleed
- **Padding:** `64px 0 40px 0`
- **Wordmark:** `#ffffff` top-left
- **Link Groups:** 4–5 columns; Headers in 14px / 600 `#ffffff`, Links in 14px / 400 `#8392a5` (hover: `#ffffff`)
- **Bottom Bar:** 1px top border `rgba(255, 255, 255, 0.08)`, copyright & legal in 12px `#64748b`.

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
| `--radius-pill` | `9999px` | Conversion CTAs, pill badges, floating pills |

### Shadow Scale

```css
:root {
  /* Subtle featherlight elevation */
  --shadow-subtle: 0 1px 2px 0 rgba(15, 23, 42, 0.05);
  --shadow-card: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02);
  --shadow-card-hover: 0 12px 24px -8px rgba(15, 23, 42, 0.08), 0 4px 8px -4px rgba(15, 23, 42, 0.03);
  --shadow-button-primary: 0 4px 14px -2px rgba(22, 87, 167, 0.35);
  --shadow-modal: 0 24px 48px -12px rgba(15, 23, 42, 0.18), 0 8px 16px -4px rgba(15, 23, 42, 0.08);
}
```

---

## 07 — Motion & Transitions

All micro-interactions prioritize crisp physical responsiveness over floating floaty lag:
- **Standard Ease:** `cubic-bezier(0.16, 1, 0.3, 1)` (snappy ease-out)
- **Fast Transition:** `150ms` (buttons, links, hover background tints)
- **Card Lift:** `200ms` (hover elevation)
- **Modal Entrance:** `240ms` (fade + `translateY(12px) -> 0` + `scale(0.98) -> 1`)

```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 08 — Accessibility Baseline

- **Focus Visibility:** Every interactive element must present a `2px solid #2d7ee8` outline with `2px` offset upon keyboard navigation (`:focus-visible`).
- **Touch Target Size:** Minimum `44px × 44px` on mobile for all tap targets.
- **Contrast Ratios:**
  - Primary text on Paper/Canvas: `14.2:1` (Exceeds WCAG AAA).
  - Sapphire button text: `#ffffff` on `#1657a7` is `5.38:1` (Exceeds WCAG AA).
  - Secondary text on Paper: `#475569` is `5.9:1` (Exceeds WCAG AA).
- **Dialog & Modals:** Must implement `role="dialog"`, `aria-modal="true"`, focus trapping, and Escape key listeners.

---

## 09 — AI-Slop & Vibe-Coding Guardrails

**Strictly Forbidden Anti-Patterns:**
1. **No Violet/Purple Accents on Dark Backgrounds:** Never substitute `#1657a7` with neon indigo, violet, or magenta.
2. **No Unrelatable Icons:** Every icon must map directly to its semantic function (e.g. an arrow for navigation, a shield for security, a document for resumes). Never scatter decorative random icons.
3. **No Emoji in Product UI:** No emojis in badges, headings, cards, or buttons. Use monochrome SVG line icons.
4. **No Cliché 3-Column Bento Boxes with Floating Glowing Spheres.**
5. **No Gradient Text Across Key Words:** Headings must be solid `--color-ink` (`#0f172a`).
6. **Title Case Headings:** All section headings, card titles, and button labels must use Title Case (e.g., *"Precision Talent Discovery"*, not *"precision talent discovery"* or *"PRECISION TALENT DISCOVERY"*).

---

## 10 — LLM Agent Prompting Recipes

When instructing LLMs to generate pages or components using this design system, provide these concise recipes:

### Recipe: Hero Section
```markdown
Create a hero section using the TJH Design System:
- Canvas background: #fafbfc, content rail max-width: 1200px centered.
- Headline: 64px Inter weight 700, color #0f172a, letter-spacing -0.035em, line-height 1.05, Title Case.
- Subtext: 18px Inter weight 400, color #475569, max-width 640px.
- Action row: Horizontal flex with 12px gap:
  - Primary button: #1657a7 filled, #ffffff text, 12px radius, 12px 24px padding, Inter 15px/600.
  - Secondary button: 1px #e2e8f0 border, #ffffff background, #0f172a text, 12px radius.
- Supporting social proof strip below with 3 trust metrics (40px #1657a7 bold values).
```

### Recipe: Feature Card Grid
```markdown
Create a 3-column feature grid using the TJH Design System:
- Section gap: 80px, max-width 1200px.
- Section header: Centered 36px Inter 600 in #0f172a with 16px subtitle in #475569.
- Cards: #ffffff background, 16px radius, 1px solid #e2e8f0 border, 28px padding, shadow 0 1px 3px rgba(15,23,42,0.04).
- Card Title: 20px Inter 600 in #0f172a.
- Card Body: 14px Inter 400 in #475569.
- Card Icon: 40px square plate in #edf4fc with 10px radius, containing a 20px #1657a7 line icon.
```

### Recipe: Footer
```markdown
Create a site footer using the TJH Design System:
- Background: #060d17 (Abyss) full-bleed.
- Padding: 64px top, 40px bottom.
- 4 columns of links: Column title 14px/600 #ffffff, links 14px/400 #8392a5 (hover #ffffff).
- Bottom legal strip with 1px border rgba(255,255,255,0.08) and 12px #64748b text.
```

---

## 11 — Known Gaps & Governance

The following components are currently pending dedicated reference implementations:
- Complex multi-level data tables with sorting/filtering
- Toast notifications outside modal contexts
- Multi-step file upload dropzones
- Dark-mode alternative theme for dashboard workspaces

### Governance Rule
- When building on existing patterns: Copy the exact tokens and hex codes above.
- When expanding into Known Gaps: Formally document the token values in `DESIGN.md` before shipping code.
