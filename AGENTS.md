# AGENT OPERATIONS
> **Repository**: `zs-hermanice-app` – a Next.js 16 / React 19 site with SST v4 for infra.
> This file exists for autonomous agents to pick up context, run the right commands, and write code that matches expectations.

---

## 1. Standard Commands

- **npm run dev** – start Next.js in watch/dev mode (default `localhost:3000`). Works for live UI work or debugging dynamic routes.
- **npm run build** – produce a production-ready `.next` build (needed before `npm start` or deploying). Validates static props, routes, and static export readiness.
- **npm run start** – run the production server from the last build. Only call after a successful `npm run build`.
- **npm run lint** – run `next lint`. Covers React/TypeScript rules via `eslint-config-next`; this is the main automated quality gate.
- **npm run test:accessibility** – run Pa11y CI accessibility audits against configured URLs (requires server running).
- **npm run test:axe** – run axe-core CLI accessibility scan against localhost:3000 (requires server running).
- **npm run test:lighthouse** – run Lighthouse CI accessibility audit (starts server automatically per lighthouserc.json).
- **npm run sst:dev** – bring up SST local services (stack defined in `sst.config.ts`). Useful for testing backend infra locally.
- **npm run sst:deploy --stage prod** – deploy the full SST stack to production. Always inspect logs before and after; the stack might rely on sensitive resources.
- **npm run sst:remove** – tear down the deployed SST stack. Use with caution to avoid deleting shared infrastructure inadvertently.

### Running a Single Test
- Accessibility tests are available via Pa11y CI, axe-core, and Lighthouse CI. Run `npm run test:accessibility`, `npm run test:axe`, or `npm run test:lighthouse` to audit specific aspects.
- For future unit/integration tests (e.g., with `vitest`, `jest`, or Playwright), define a `test` script in `package.json`.
- For targeted linting, you can scope ESLint by running `npx eslint path/to/file.tsx` (the same rule set as `npm run lint`).
- If you introduce Playwright or Cypress suites, document their “single spec” command here as `npx playwright test ./tests/foo.spec.ts`.

---

## 2. Styles & Expectations

### Structure & Imports
- Always prefer absolute imports via `@/…` aliases defined in `tsconfig.json`. Keep relative imports (`../`) only when crossing sibling folders inside the same domain (e.g., component subfolder).
- Group imports in this order:
  1. Node / built-in modules (e.g., `node:path`).
 2. External packages (React, Next, SST, gray-matter, etc.).
 3. Absolute project aliases (`@/components`, `@/lib`).
 4. Local relative imports (rare — mostly for tightly-coupled helpers).
- Within each group, sort alphabetically by module name and avoid unused imports; the lint step will catch them.
- Keep import lines under 120 characters by using multi-line destructuring or reorganizing exports if needed.

### Formatting & Layout
- Stick to the existing JSX/TSX formatting style: 2-space indents, trailing commas in multi-line objects/tuples, blank lines between logical sections (e.g., hooks vs. render).`
- Prefer using explicit braces in JSX attributes for expressions (`className={hero.cta.label}`) and avoid inline ternaries that span multiple lines; extract helper variables when an expression gets complex.
- Tailwind classes are stacked vertically where helpful; for very long strings (as in `HomePage.tsx`), wrap between quotes without string interpolation.
- Keep line length ≤ 120 columns unless a string literal makes it impossible; otherwise, wrap into multiple lines while preserving readability.

### Types & Data Contracts
- Use TypeScript’s `type` aliases for props (`HomePageProps`) and passive data shapes (`HeroContent`, `NewsItem`). Keep type definitions within component files when they are local; move them to `src/types` only when reused widely.
- Favor `interface` for open-ended objects (if you need extension) and `type` for unions/tuples. When defining API responses, make fields required unless you explicitly know they can be `undefined`.
- When working with markdown content (`src/lib/content.ts`), cast parsed data with `as HeroContent` or `satisfies NewsItem` to keep type guarantees while letting gray-matter remain untyped.
- Avoid `any`. If an upstream library forces it, wrap the `any` use in a minimal helper that immediately narrows the shape.

### Naming Conventions
- Follow PascalCase for React components/props (`HomePage`, `NewsPage`) and camelCase for functions or object fields (`getNewsItems`, `heroImage`).
- Keep CSS/Tailwind helper classes in kebab-case (`text-sm`, `rounded-2xl`). React hooks use camelCase prefixed with `use` if you introduce them.
- Content files (in `content/pages` or `content/news`) should use `kebab-case` filenames matching their slugs (e.g., `home.md`, `welcome-2025.md`).

### Error Handling & Resilience
- Server-side/helpers (like `getNewsItems`) currently assume all referenced files exist. If you add fallbacks, prefer `try/catch` blocks around filesystem calls and return sensible defaults (empty arrays, default hero data) instead of letting the app crash.
- Use `next`’s built-in error boundary patterns (`notFound()`, `redirect()`) when you detect missing content; for simple utilities, throw descriptive `Error` instances and let higher-level code choose how to respond.
- Do not swallow errors silently. Log the issue (`console.error`) and escalate by re-throwing if you can’t resolve locally.

---

## 3. Design & UX Patterns

- The UI relies on custom gradients, clay-inspired palette (`clay-50`, `clay-500`, etc.), and responsive cards. When adding new sections, continue the use of soft gradients, generous spacing, and rounded containers.
- Keep typography expressive: headlines (e.g., `text-4xl font-semibold`) are visually heavy, while body text stays `text-lg` or smaller with high line-height. Don’t revert to base fonts unless justified by performance (then document it).
- Reuse `Link` from `next/link` for both navigation and CTA buttons (apply `className` for styling). Avoid `<a>` tags without `Link` wrappers unless you need external navigation.

## 4. Content Handling

- Markdown files under `content/` drive the hero and news data. Each markdown should export frontmatter matching `HeroContent`/`NewsItem` shapes.
- When you add a new news item, publish both `title`, `summary`, `date`, and optional `coverImage`. The slug comes from the filename, so `_` should be avoided in favor of `-`.
- Date strings should be ISO (e.g., `2025-03-05`) so `new Date(item.date)` parses deterministically; those dates render with `toLocaleDateString('cs-CZ', {...})` in the UI.

---

## 5. Working with Infrastructure (SST)

- SST stacks live in `sst.config.ts` (check `cdk`/`lib` if added later). Use `npm run sst:dev` for iterative development; the CLI watches `src/` and reloads stacks after you save.
- Always run `npm run sst:deploy --stage prod` only after local verification—SST will provision AWS resources immediately.
- Capture SST outputs for secrets/URLs and stash them in a secure location; do not commit credentials to Git.

---

## 6. Agent Workflow Guidelines

- Before touching code, run `npm install` if needed, then `npm run lint` to understand baseline failures.
- When you modify UI components or pages, run `npm run test:accessibility` locally to check for accessibility regressions; no automated preview server exists beyond `next dev`.
- When you modify markdown or data helpers, re-run `npm run dev` to preview the Next.js pages; no automated preview server exists beyond `next dev`.
- Keep this AGENTS file updated with new commands, style changes, or infrastructure notes. Agents rely on its accuracy as their operational manual.
