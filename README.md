# Supplier Management App — Frontend

Web-based analytical dashboard surfacing supplier KPIs (Quality, Delivery) with an embedded AI chat assistant. See [`.specs/constitution.md`](./.specs/constitution.md) for the full project specification, architecture principles, and open questions.

## Stack

Next.js (App Router) · TypeScript · Material UI · Zod · Vitest · Playwright

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm run test` | Unit/integration tests (Vitest) |
| `npm run test:e2e` | End-to-end tests (Playwright) |

## Project structure

```
src/
  app/         route definitions (pages, layout)
  components/  reusable UI (ui/) and layout (layout/) components
  features/    feature-specific functionality (e.g. chatbot, kpi-dashboard)
  services/    all backend API access
  hooks/       shared client-side hooks
  types/       shared TypeScript models
  lib/         design tokens, theme, cross-cutting utilities
.specs/        project specification and design docs
```

Data flows one direction: **services fetch → pages consume services → components receive props.** Reusable components never call APIs directly.
