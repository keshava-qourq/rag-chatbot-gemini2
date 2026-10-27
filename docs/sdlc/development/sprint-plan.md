# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Deliver foundational platform capabilities: configured Gemini access, password-protected admin login, and a basic public chat endpoint that returns a generated answer.

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Ask a question without logging in | 8 | backend-agent | US-017 |
| ↳ US-001-T1 | Task | Implement POST /api/chat endpoint calling Gemini 2.5 Flash for an answer | — | backend-agent | — |
| ↳ US-001-T2 | Task | Persist chat_sessions and messages on turn completion | — | backend-agent | — |
| ↳ US-001-T3 | Task | Build public chat page with question input and answer display | — | frontend-agent | — |
| US-013 | Story | Password-protected admin login | 8 | backend-agent | — |
| ↳ US-013-T1 | Task | Implement POST /api/admin/login endpoint with credential verification and session/token issuance | — | backend-agent | — |
| ↳ US-013-T2 | Task | Add admins table migration | — | backend-agent | — |
| ↳ US-013-T3 | Task | Build admin login page and route guard for admin area | — | frontend-agent | — |
| US-017 | Story | Configured Gemini API access | 3 | backend-agent | — |

## Sprint 2: Sprint 2

Add anonymous session assignment, a responsive chat UI, the admin document list view, and the document upload entry point.

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-002 | Story | Anonymous session tracking by session ID | 3 | backend-agent | US-001 |
| US-005 | Story | Responsive web chat interface | 3 | frontend-agent | US-001 |
| US-010 | Story | Upload knowledge-base documents | 8 | backend-agent | US-013 |
| ↳ US-010-T1 | Task | Implement POST /api/admin/documents endpoint with file type validation | — | backend-agent | — |
| ↳ US-010-T2 | Task | Integrate S3 upload for storing original document files | — | integration-agent | — |
| ↳ US-010-T3 | Task | Build admin document upload UI with progress and rejection messaging | — | frontend-agent | — |
| ↳ US-010-T4 | Task | Enqueue ingestion job on Redis after successful upload | — | backend-agent | — |
| US-014 | Story | List knowledge-base documents | 5 | backend-agent | US-013 |

## Sprint 3: Sprint 3

Persist and resume per-session conversation history, and build the full ingestion pipeline that parses, chunks, embeds and indexes uploaded documents.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-003 | Story | Persisted history that resumes a returning thread | 5 | backend-agent | US-002 |
| US-011 | Story | Parse, chunk, embed and index uploaded documents | 13 | integration-agent | US-010, US-017 |
| ↳ US-011-T1 | Task | Implement document parsing for PDF, .docx, .txt and .md formats | — | backend-agent | — |
| ↳ US-011-T2 | Task | Implement chunking of parsed document text | — | backend-agent | — |
| ↳ US-011-T3 | Task | Integrate gemini-embedding-001 calls to embed each chunk | — | integration-agent | — |
| ↳ US-011-T4 | Task | Store embeddings and chunk metadata in pgvector | — | backend-agent | — |

## Sprint 4: Sprint 4

Wire prior-turn context into follow-up answers, add top-k retrieval over indexed chunks, and let admins clear history and remove documents.

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-004 | Story | Use prior turns as context for follow-up questions | 3 | backend-agent | US-003 |
| US-006 | Story | Top-k similarity retrieval of relevant chunks | 8 | backend-agent | US-011, US-017 |
| ↳ US-006-T1 | Task | Implement query embedding call using gemini-embedding-001 | — | integration-agent | — |
| ↳ US-006-T2 | Task | Implement pgvector top-k similarity query over document_chunks | — | backend-agent | — |
| ↳ US-006-T3 | Task | Wire retrieval results into the chat answer-generation pipeline | — | backend-agent | — |
| US-015 | Story | Remove a document from the knowledge base | 5 | backend-agent | US-014, US-011 |
| US-016 | Story | Clear conversation history | 3 | backend-agent | US-003, US-013 |

## Sprint 5: Sprint 5

Ground answers strictly in retrieved content with citations and an 'I don't know' fallback, surface ingestion status to admins, and verify free-to-use and modest-scale requirements.

Capacity: 20 points · Committed: 20

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-007 | Story | Answers grounded strictly in uploaded documents | 5 | backend-agent | US-006 |
| US-008 | Story | Say 'I don't know' when the answer is not in the corpus | 3 | backend-agent | US-006, US-007 |
| US-009 | Story | Show source citations for answers | 5 | backend-agent | US-006, US-007 |
| US-012 | Story | View ingestion status | 3 | frontend-agent | US-011, US-014 |
| US-018 | Story | Free to use with no payments | 1 | qa-agent | — |
| US-019 | Story | Operate at modest scale | 3 | qa-agent | US-006, US-011 |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
