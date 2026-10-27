# RAG-chatbot-gemini2 — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
RAG chatbot with history and session ID use gemini-2.5-flash for answers and gemini-embedding-001 for embeddings

**Documentation version:** v3
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 15 entries |
| [Development](development/README.md) | 6 entries |
| [Testing](testing/README.md) | 0 entries |
| [Deployment](deployment/README.md) | 0 entries |
| [Maintenance](maintenance/README.md) | 0 entries |
| [Data model](architecture/data-model.md) | generated |
| [API (OpenAPI)](architecture/api/openapi.yaml) | generated |
| [Decisions (ADRs)](architecture/adr/README.md) | 4 decisions |
| [Sprint plan](development/sprint-plan.md) | 5 sprints |
| [Developer guide](development/developer-guide.md) | generated |
| [API reference](development/api-reference.md) | 1 route |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 19 requirements |
| [Changelog](CHANGELOG.md) | 3 versions |
<!-- sdlc:auto:end contents -->

## Open gaps

<!-- sdlc:auto:start open-gaps -->
### Requirements

- Epic description flags the S3/pgvector storage choices for ingestion as 'open assumptions' not yet confirmed by an architecture decision -- needs sign-off once the architecture phase starts.
- No architecture or implementation exists yet to confirm the background ingestion job (NFR-004) is actually built as specified.
- Epic description explicitly labels scale, payment-free operation, and AI-service assumptions as 'open' pending confirmation -- no architecture or capacity plan exists yet to validate NFR-006/NFR-007 targets.

### Architecture

- No explicit mapping is given in the architecture input from components/endpoints/entities to specific requirement IDs (US-001 through US-019); a requirement-to-architecture traceability matrix cannot be derived from this input alone.

### Development

- Input gives sprint goals in prose but does not explicitly map individual backlog items (US-xxx) to a specific sprint number -- any epic/sprint correlation below is inferred from goal wording and item order, not stated directly.
- No sprint status (in-progress/completed) or burndown/velocity data was provided.
- No completion/build status reported for any item in this epic -- cannot confirm the chat endpoint, session persistence, history resume, or UI actually exist yet.
- No completion/build status reported -- cannot confirm retrieval, grounding, fallback behavior, or citation display are implemented.
- No completion/build status reported -- cannot confirm upload, queuing, parsing, chunking, embedding, indexing, or status-view are implemented.
- No completion/build status reported -- cannot confirm login, document listing, document removal, or history clearing are implemented.
- No completion/build/verification status reported for Gemini configuration, free-to-use validation, or scale testing -- these are QA-owned items with no test results provided yet.
<!-- sdlc:auto:end open-gaps -->
