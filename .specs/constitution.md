# Project Specification — Supplier Management App Frontend

## Overview

> **Author's notes:**
> Dashboard consuming a backend API to surface supplier KPI performance, with an embedded AI chat assistant.
> The AI chat assistant will connect to a dedicated separate backend, and the user should be able to decide whether to use global data or data scoped to the current view. The user should also be able to keep the chat context through views or decide to start a new context/conversation.
> The first view is a summary section for leadership. KPIs are split into quality and delivery. There's a fourth view that will allow internal users to compare suppliers and will allow suppliers to review themselves.
> Suppliers will only have temporary access to this last view and will only be able to see their own data. No authentication needed for suppliers, no idea how we are going to implement this, signed URLs maybe.
> The SSO logic will be handled by a backend endpoint. Backend must provide an access token with an appropriate lifespan.

A web-based analytical dashboard that allows users to explore business KPIs through a set of four views.

- Internal Users authenticate through SSO.
- Suppliers (external users) authenticate through a signed URL.
- Users can save and reuse filter combinations.
- Most business data is shared across all users.
- The application must provide a consistent user experience through a common layout and reusable design system.

## Objectives

- Consistent UI across all views
- Minimal duplicated UI code
- Reusable component library
- Fast implementation from Figma
- Easy maintenance
- Easy onboarding for future developers
- Responsive experience

## Scope

### In Scope

- Dashboard
  - Summary view
  - Quality view
  - Delivery view
  - Suppliers view
- SSO authentication
- User saved filters
- Chatbot assistant

### Out of Scope

- User administration
- Custom report builder
- Mobile application

## Technology Stack

| Concern | Choice |
|---|---|
| Framework | Next.js |
| Language | TypeScript |
| Styling | MUI Theme + global CSS + CSS Modules + MUI `sx` props ¹ |
| Component Library | Material UI |
| Icons | Material Icons |
| Validation | Zod ² |
| Charts | TBD |
| Testing | Vitest, Playwright |
| Design Source | Figma via MCP |

> ¹ Prefer from left to right, adjusting best approach for each case.
> ² Open question: is this really useful if no forms are used and all data is validated by backend? Remove if not necessary.

## Architecture

> **Author's notes:** Is there anything else to add in terms of architecture? API consumption? 2 backends? State management? Chatbot logic lives in a different backend — should calls to that backend be made from the frontend or through our backend?

### Principles

- Component-driven architecture
- Design-system-first implementation
- Server-first Next.js approach
- Reusable components preferred over page-specific components
- Single source of truth for styling

### Project Structure

```
src/
  app/
  components/
  features/
  services/
  hooks/
  types/
  lib/
.specs/
```

### Responsibilities

| Directory | Responsibility |
|---|---|
| `app/` | Route definitions |
| `components/` | Reusable UI |
| `features/` | Feature-specific functionality |
| `services/` | API access |
| `types/` | Shared TypeScript models |

## Design System Strategy

The UI must be built from:

```
Tokens
  ↓
UI Components
  ↓
Layout Components
  ↓
Feature Components
  ↓
Pages
```

Tokens are the single source of truth for colors, spacing, typography, borders and shadows.

### Component Strategy

- Pages compose components.
- Pages should contain minimal UI logic.
- Reusable components should be created whenever a pattern appears in 2 or more places.
- Do not copy components between views.
- Prefer variants over duplicate components.

**Example**

- Good: `Button` with variants `Primary`, `Secondary`, `Danger`
- Bad: `BlueButton`, `RedButton`, `GrayButton`

## Layout Strategy

- All views share a common application layout.
- The shared layout will be implemented in `app/layout.tsx`.
- The layout includes:
  - Header
  - Navigation
  - Chatbot UI
- Pages provide content only.
- Pages do not contain any of the layout components.

## Data Flow Strategy

- Services fetch data.
- Pages consume services.
- Components receive props.
- Reusable components must never call APIs directly.

## State Management

| Scope | Approach |
|---|---|
| Local UI state | `useState` |
| Shared UI state | Context |
| Server state | TBD |

Avoid global state unless required.

## API Integration Strategy

- All backend communication occurs through services (`src/services/`).
- No page or component should access HTTP endpoints directly.

**Example:** `dashboard.service.ts`, `customer.service.ts`, `settings.service.ts`

## Authentication Strategy

- Authentication is performed using SSO or signed URL depending on user.
- User information is provided by the identity provider.
- Application stores user preferences and saved filters in a database.
- Authentication implementation TBD.

## Testing Strategy

- **Unit Tests:** Components, utility functions
- **Integration Tests:** Services
- **End-to-End Tests:** Critical user journeys

## Accessibility

Minimum WCAG AA compliance.

Requirements:

- Keyboard navigation
- Visible focus states
- Semantic HTML
- Accessible forms
- Accessible charts where possible

## Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Components | PascalCase | `StatCard.tsx` |
| Services | — | `dashboard.service.ts` |
| Hooks | — | `useDashboardData.ts` |
| Types | — | `DashboardMetric`, `UserPreference` |

## Development Workflow

1. Requirements
2. Data Model
3. API Specification
4. Design Tokens
5. Component Inventory
6. Shared Layout
7. View Implementation
8. Validation Against Figma

## Open Questions

| Topic | Status |
|---|---|
| KPI definitions | Pending |
| Analytics API | Pending |
| Charting library | Pending |
| User roles | Pending |
| Refresh strategy | Pending |
| Chatbot frontend | Pending |
