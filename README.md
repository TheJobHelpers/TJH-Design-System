# TJH Design System

Shared design foundations, tokens, component recipes, and AI agent guardrails for all **The Job Helpers (TJH)** web products and interfaces.

![Brand Anchor](https://img.shields.io/badge/Primary_Color-%231657a7-1657a7?style=flat-square)
![Status](https://img.shields.io/badge/Status-Foundations%20v1.0-0d386c?style=flat-square)
![Tokens](https://img.shields.io/badge/Tokens-CSS%20%7C%20Tailwind%20%7C%20JSON-060d17?style=flat-square)
![AI Ready](https://img.shields.io/badge/LLM%20Ready-AGENTS.md-1657a7?style=flat-square)

**[DESIGN.md Specification](./DESIGN.md) · [AGENTS.md Guide](./AGENTS.md) · [CSS Tokens](./tokens/tokens.css) · [Tailwind Tokens](./tokens/tokens.tailwind.css) · [Interactive Preview](./preview/index.html)**

---

## Overview

The TJH Design System bridges clinical precision with warm editorial clarity. It is designed around the core brand sapphire blue (**`#1657a7`**) and combines:
- **Fintech Workbench Precision (Brex)**: Structured 12px radii, hairline borders, single-ember interactive discipline, and Abyss dark framing.
- **Warm Paper Canvas (Dock)**: Natural `#fafbfc` background with layered ivory/fog surfaces and featherlight elevation.
- **Typographic Authority (ElevenLabs & Pixso)**: Tight negative tracking on display headlines, crystal-clear body legibility, and quiet grayscale chrome where content is the hero.

---

## How to Use This Repo

### 1. For LLMs & AI Coding Agents
When building a new page or component using Antigravity, Claude Code, Cursor, or ChatGPT:
1. Direct the model to read [`AGENTS.md`](./AGENTS.md) and [`DESIGN.md`](./DESIGN.md).
2. Use the copy-pasteable prompts found in [Section 10 of DESIGN.md](./DESIGN.md#10--llm-agent-prompting-recipes).

### 2. For Web Developers

#### Vanilla CSS
Import the design tokens directly into your global stylesheet:
```css
@import url('path/to/tokens/tokens.css');

.btn-primary {
  background-color: var(--color-sapphire);
  color: var(--color-paper);
  border-radius: var(--radius-button);
  padding: var(--spacing-12) var(--spacing-24);
  font-family: var(--font-body);
  font-weight: 600;
}
```

#### Tailwind CSS (v4)
Add to your main CSS file:
```css
@import "./tokens/tokens.tailwind.css";
```

#### Tailwind CSS (v3)
Extend your `tailwind.config.js` using the exported theme settings in [`tokens/tokens.tailwind.css`](./tokens/tokens.tailwind.css).

---

## Interactive Showcase

To preview components, test responsive behavior, and inspect tokens interactively, open [`preview/index.html`](./preview/index.html) in your browser.

---

## Structure

```
TJH-Design-System/
├── README.md               # Repository overview & quick start
├── AGENTS.md               # Strict instructions & guardrails for AI coding agents
├── DESIGN.md               # Authoritative single source of truth spec
├── tokens/
│   ├── tokens.css          # CSS custom properties (:root variables)
│   ├── tokens.tailwind.css # Tailwind CSS v4 @theme and v3 theme configuration
│   └── tokens.json         # Design Tokens Community Group JSON format
└── preview/
    ├── index.html          # Interactive living design system preview
    ├── preview.css         # Preview styling
    └── preview.js          # Interactive switcher & prompt copy helpers
```
