# AGENTS.md

Guidance for AI coding agents (Antigravity, Claude Code, Cursor, Codex, ChatGPT) reading or implementing this design system.

---

## 1. What This Repository Is

This repository is the canonical source of truth for the **TJH Design System** — providing design foundations, tokens, typography rules, component patterns, and guardrails for all web applications and landing pages.

Primary brand anchor: **`#1657a7`** (Sapphire Blue).

---

## 2. File Directory Map

| File | Purpose |
|---|---|
| [`DESIGN.md`](./DESIGN.md) | **The primary specification.** Read this first before generating any UI, CSS, or layout. |
| [`tokens/tokens.css`](./tokens/tokens.css) | Pure CSS Custom Properties (`:root` variables) ready to import into any project. |
| [`tokens/tokens.tailwind.css`](./tokens/tokens.tailwind.css) | Tailwind CSS v4 `@theme` block and v3 configuration object. |
| [`tokens/tokens.json`](./tokens/tokens.json) | Standard W3C Design Tokens Community Group JSON format. |
| [`preview/index.html`](./preview/index.html) | Interactive living component showcase and token inspector. |

---

## 3. Strict Rules for AI Generation (Zero Hallucination)

1. **Quote Exact Hex Codes & Tokens:**
   - Default Brand Gradient: `linear-gradient(140deg, #3da2ff 0%, #1971d6 50%, #1657a7 100%)` (`--gradient-default` / `--gradient-sapphire`)
   - Sapphire Canopy Gradient: `linear-gradient(160deg, #3da2ff 0%, #1971d6 45%, #1657a7 100%)` (`--gradient-sapphire-canopy`)
   - Text Ink: `#0f172a` (`--color-ink`)
   - Secondary Text Slate: `#475569` (`--color-slate`)
   - Border Hairline: `#e2e8f0` (`--color-mist`)
   - Canvas: `#fafbfc` (`--color-canvas`)
   *Never round or substitute hex codes with generic framework defaults.*

2. **Typography Rules:**
   - Display headlines (`display`, `display-xl`, `heading-lg`) **must** have negative tracking: `letter-spacing: -0.02em` to `-0.035em`.
   - Body copy (14px–16px) **must** have neutral or slight positive tracking (`0.005em` to `0.01em`).
   - Headings **must** use **Title Case** (e.g. *"Manage Every Dollar with Confidence"*, not *"Manage every dollar with confidence"*).

3. **Canopy & Surface Rules:**
   - **Hero Canopies**: When using the saturated Sapphire canopy (`--gradient-sapphire-canopy`), buttons invert to **White Filled Pill** (`#ffffff` fill, `#1657a7` text) paired with **Frosted Glass Pill** (`rgba(255, 255, 255, 0.15)` fill with `rgba(255, 255, 255, 0.3)` border).
   - **Featured Cards**: In a multi-card grid, exactly one card may take the saturated `--gradient-featured-card` with white text and translucent icon plate. Sibling cards must remain on `#ffffff` Paper surface.
   - **Pricing Grids**: The Pro / Most Popular tier uses the Sapphire gradient fill, while Starter and Enterprise remain on white `#ffffff` cards.

4. **Prohibition of "The Vibe-Coded Look" (Zero-Tolerance):**
   - **No headline biscuit pills:** Never place a rounded biscuit/pill badge or bullet chip directly above main headlines (e.g. `• Next Gen Finance 2.0`). Headlines stand clean, bold, and unencumbered.
   - **No purple-on-dark:** Never inject violet, indigo, or purple gradients on dark containers. Primary chromatic accent is strictly Sapphire Blue (`#1657a7`, `#1971d6`, `#3da2ff`).
   - **No gradient keywords ("rainbow words"):** Headings must use solid Ink `#0f172a` (or solid white on canopy backgrounds) without CSS text gradient fills.
   - **No emojis in UI:** Never use emojis in badges, headings, cards, or buttons. Use semantic SVG icons or plain text.
   - **No decorative filler icons:** Every icon must relate directly to what it represents.
   - **No cliché bento boxes:** No bento boxes with floating glass spheres, glowing orbs, or faux isometric cubes.
   - **No grid line / mesh overlays:** No background wireframes, blueprint grid patterns, or particle canvas overlays.
   - **No colored border glows:** Cards use 1px hairline borders (`#e2e8f0`) with natural, featherlight soft elevation.
   - **No over-nested cards:** Do not nest rounded containers 3+ levels deep inside one another.
   - **Title Case headings:** All headings, card titles, and button labels must use Title Case.

5. **Respect Known Gaps:**
   - If a requested pattern is listed in `DESIGN.md` under **Known Gaps**, explicitly note to the user that it is being designed as a new extension rather than claiming it was already in the foundational spec.
