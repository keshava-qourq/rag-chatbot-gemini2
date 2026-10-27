# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `320975f` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
RAG-chatbot-gemini2 is a two-part generated project for a retrieval-augmented chatbot (gemini-2.5-flash for answers, gemini-embedding-001 for embeddings): a Vite + React 19 single-page frontend containing the approved, reviewed screens (currently rendering seeded sample data, not yet wired to the API), and a FastAPI 0.115 backend scaffold that currently only exposes a health check endpoint, with SQLAlchemy models, Pydantic schemas, and a router package ready for the as-yet-unapproved architecture to be filled in. The approved stack also names PostgreSQL 16 and AWS, but the backend defaults to a local SQLite file so it runs with no external services.
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js and npm (for the frontend, Vite 6 / React 19 / TypeScript 5.6 toolchain)
- Python 3.12 and pip (backend, per backend/Dockerfile)
- Docker and Docker Compose (optional, for the Postgres and Redis services in docker-compose.yml)
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. Clone the repository
2. Copy .env.example to .env and fill in any required values
3. cd backend && pip install -r requirements.txt
4. cd frontend && npm install
5. (optional) from the repo root, run docker compose up -d to start the Postgres and Redis services defined in docker-compose.yml
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| backend dev | `cd backend && uvicorn app.main:app --reload` | Runs the FastAPI app locally with auto-reload; serves /health and the OpenAPI docs |
| frontend dev | `cd frontend && npm run dev` | Starts the Vite dev server for the React SPA |
| frontend build | `cd frontend && npm run build` | Bundles the frontend with Vite (does not typecheck) |
| frontend preview | `cd frontend && npm run preview` | Serves the production build locally |
| docker compose | `docker compose up -d` | Starts the Postgres 16 and Redis 7 containers defined for the architecture |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `backend` | FastAPI service: app package, Dockerfile, requirements, tests, lint/test config |
| `backend/app` | Application code: main.py entrypoint, database.py (engine/session), models.py (SQLAlchemy), schemas.py (Pydantic), routers/ (per-component endpoint routers), services.py |
| `backend/tests` | Pytest test suite (currently covers the health check) |
| `frontend` | Vite + React SPA: source, e2e tests, config files |
| `frontend/src` | App source: lib/ui.tsx and lib/icons.tsx component vocabulary, lib/api.ts API client, main.tsx entry, index.css brand tokens |
| `frontend/e2e` | Playwright acceptance tests |
| `.quorq` | Quorq platform metadata (handoff.json) for this generated project |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend organizes endpoints into one router per architecture component under app/routers/, registered in main.py
- Every unimplemented backend route returns a typed StubResponse (schemas.py) rather than raising, keeping the service startable with a complete OpenAPI doc
- SQLAlchemy models all inherit from the shared Base in app/database.py; main.py imports models before calling Base.metadata.create_all
- Backend config is environment-variable driven: DATABASE_URL (defaults to local SQLite) and ALLOWED_ORIGINS (comma-separated, for CORS) with dev defaults built in
- Frontend API access is centralized in src/lib/api.ts (apiFetch helper), configured via VITE_API_BASE_URL and VITE_API_SECRET_KEY, but screens currently render seeded sample data rather than calling it
- Frontend component tests live beside the components they cover and run under Vitest/jsdom; Playwright e2e specs live separately in e2e/
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| backend tests | `cd backend && pytest` | Runs the pytest suite (includes the health check test) |
| backend lint | `cd backend && ruff check .` | Lints the backend code with ruff |
| backend format | `cd backend && ruff format .` | Formats backend code with ruff |
| frontend unit tests | `cd frontend && npm test` | Runs Vitest component tests |
| frontend lint | `cd frontend && npm run lint` | Runs ESLint over the frontend; gate used by the platform during development |
| frontend typecheck | `cd frontend && npm run typecheck` | Runs tsc --noEmit (not run by the build) |
| frontend e2e install | `cd frontend && npm run test:e2e:install` | Installs the Chromium browser Playwright needs |
| frontend e2e | `cd frontend && npm run test:e2e` | Runs Playwright acceptance tests from e2e/; builds/serves the app locally unless E2E_BASE_URL is set |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Frontend calls to the backend are blocked by CORS | Set ALLOWED_ORIGINS on the backend to the frontend's origin (comma-separated); defaults only allow http://localhost:5173 and http://127.0.0.1:5173 |
| `pytest` fails with an import error for `app` | Run pytest from the backend/ directory so backend/pytest.ini's pythonpath = . setting applies |
| Playwright e2e run fails because no browser is installed | Run npm run test:e2e:install before npm run test:e2e |
| `npm run build` succeeds but the code has type errors | Run npm run typecheck (tsc --noEmit) separately, since build does not typecheck |
<!-- sdlc:auto:end troubleshooting -->
