# Assessment Pro - Online Timed Tests

## Overview

Assessment Pro is a professional online timed assessment platform that enables users to take multiple-choice tests with automatic timing, submission, and instant scoring. The application provides a clean, distraction-free interface for test-takers with features including countdown timers, progress tracking, automatic submission on timeout, and detailed results with answer review.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom build configuration
- **Routing**: Wouter (lightweight React router)
- **State Management**: React Query (@tanstack/react-query) for server state, React useState for local state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **Design System**: Apple HIG + Material Design principles focusing on clarity and focus

The frontend follows a single-page application pattern with three main views:
1. Landing page - Test overview and start button
2. Test page - Active assessment with timer and question navigation
3. Results page - Score display and answer review

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: Node.js with HTTP server (supports WebSocket upgrade path)
- **API Style**: RESTful JSON API under `/api` prefix
- **Build**: esbuild for production bundling with selective dependency bundling

Key API endpoints:
- `GET /api/test-config` - Fetch test configuration (questions without answers)
- `POST /api/sessions` - Create new test session
- `GET /api/sessions/:id` - Get session status
- `POST /api/sessions/submit` - Submit test answers and receive results

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` using Zod for validation
- **Current Implementation**: In-memory storage (`server/storage.ts`) with sample questions
- **Database Ready**: Drizzle configuration exists for PostgreSQL migration

Data models:
- `TestConfig` - Test metadata and questions
- `TestSession` - Active test state with answers
- `TestResult` - Completed test scores and answer breakdown
- `Question` - Individual question with options and correct answer

### Code Organization
```
client/           # React frontend
  src/
    components/ui/  # shadcn/ui components
    pages/          # Page components (landing, test, results)
    hooks/          # Custom React hooks
    lib/            # Utilities and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage layer
  static.ts       # Static file serving (production)
  vite.ts         # Vite dev server integration
shared/           # Shared TypeScript types and schemas
  schema.ts       # Zod schemas and types
```

### Security Considerations
- Correct answers are stripped from test config sent to client
- Session-based test tracking prevents answer manipulation
- Answer validation happens server-side on submission

## External Dependencies

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migration tooling (`db:push` script)

### UI Framework Dependencies
- **Radix UI**: Headless component primitives (dialogs, dropdowns, forms, etc.)
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management

### Development Tools
- **Vite**: Development server with HMR
- **Replit plugins**: Dev banner, error overlay, cartographer (Replit-specific)
- **TypeScript**: Full type coverage across frontend and backend

### Session Management (Available)
- **connect-pg-simple**: PostgreSQL session store (imported but not currently active)
- **express-session**: Session middleware (available in dependencies)