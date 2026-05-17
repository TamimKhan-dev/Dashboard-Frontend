# Hintro Dashboard

A mock frontend dashboard for [Hintro](https://www.hintro.ai), built as part of a frontend assignment. The UI is based on the provided Figma design and consumes mock APIs to display real and empty user states.

**GitHub:** https://github.com/TamimKhan-dev/Dashboard-Frontend

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React + Vite | Frontend framework and build tool |
| TypeScript | Type safety |
| Tailwind CSS | Styling with consistent design tokens |
| React Router v6 | Client-side routing |
| Axios | API requests |

---

## Features

- Login page with user switching (u1 / u2)
- Sidebar navigation (desktop + mobile responsive)
- Dashboard UI with stat cards and recent calls
- Empty state for u1 (new user)
- Populated state for u2 (active user)
- Fully responsive across desktop, tablet, and mobile

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/TamimKhan-dev/Dashboard-Frontend.git

# Navigate into the project
cd Dashboard-Frontend

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root of the project:

```env
VITE_API_BASE_URL=https://mock-backend-hintro.vercel.app
```

### Run Locally

```bash
npm run dev
```

The app will be running at `http://localhost:5173`

---

## User Switching

The app supports two mock users:

| User | Email to use at Login | Description |
|------|-----------------------|-------------|
| u1 | john@example.com | New user — shows empty states |
| u2 | any other email | Active user — shows populated data |

Login with either email to see the corresponding dashboard state.

---

## Project Structure

```
src/
├── api/              # Axios instance and API endpoint functions
├── context/          # UserContext (userId state)
├── hooks/            # Custom hooks (useUser)
├── pages/            # Login and Dashboard pages
├── components/       # Reusable UI components (Sidebar, StatCard, etc.)
├── utils/            # Formatting helpers (duration, date, last session)
├── types/            # TypeScript interfaces
└── main.tsx          # App entry point
```

---

## Conventions & Assumptions

- All colors are defined in `tailwind.config.ts` under `theme.extend.colors` — no hardcoded hex values in components
- The active user (`u2`) is identified at login and stored via `localStorage`
- API calls use the `x-user-id` header to switch between users
- `averageDuration` from the API is in seconds and is converted to `Xm Ysec` format for display
- `lastSession` is converted to a human-readable format (e.g. "2 days ago")
- Feedback is stored in `localStorage` (UI in progress)

---

## API Reference

Base URL: `https://mock-backend-hintro.vercel.app`

| Endpoint | Description |
|----------|-------------|
| `GET /api/auth/profile` | User profile |
| `GET /api/auth/dashboard` | Dashboard + usage data |
| `GET /api/call-sessions/stats` | Call statistics |
| `GET /api/call-sessions?limit=10` | Call history |

All endpoints require the `x-user-id: u1` or `x-user-id: u2` header.

---

## Author

**Tamim Khan**
GitHub: [@TamimKhan-dev](https://github.com/TamimKhan-dev)
LinkedIn: [linkedin.com/in/tamimkhan-dev](https://linkedin.com/in/tamimkhan-dev)