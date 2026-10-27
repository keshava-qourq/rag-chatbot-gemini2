# Development

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### PLAN-SPRINTS · approved · source: plan:v1

Approved development plan, version 1, organized into 5 sprints of 20-point capacity each, progressing from foundational AI/admin access through full chat, grounding, ingestion, and admin management capability.

Sprint 1 goal: deliver foundational platform capabilities -- configured Gemini access, password-protected admin login, and a basic public chat endpoint returning a generated answer. Sprint 2 goal: add anonymous session assignment, a responsive chat UI, the admin document list view, and the document upload entry point. Sprint 3 goal: persist and resume per-session conversation history, and build the full ingestion pipeline (parse, chunk, embed, index). Sprint 4 goal: wire prior-turn context into follow-up answers, add top-k retrieval over indexed chunks, and let admins clear history and remove documents. Sprint 5 goal: ground answers strictly in retrieved content with citations and an 'I don't know' fallback, surface ingestion status to admins, and verify free-to-use and modest-scale requirements. All 5 sprints share a stated capacity of 20 points.

**Related:** US-001, US-002, US-003, US-004, US-005, US-006, US-007, US-008, US-009, US-010, US-011, US-012, US-013, US-014, US-015, US-016, US-017, US-018, US-019

- ⚠ Input gives sprint goals in prose but does not explicitly map individual backlog items (US-xxx) to a specific sprint number -- any epic/sprint correlation below is inferred from goal wording and item order, not stated directly.
- ⚠ No sprint status (in-progress/completed) or burndown/velocity data was provided.

### EPIC-001 · draft · source: plan:EPIC-001

Epic: Public Chat Experience -- covers unauthenticated question asking, anonymous session tracking, persisted/resumable history, follow-up context use, and a responsive chat UI.

Backlog items under this epic: US-001 'Ask a question without logging in' (8 pts, backend-agent) with tasks US-001-T1 (POST /api/chat calling Gemini 2.5 Flash for an answer), US-001-T2 (persist chat_sessions and messages on turn completion), US-001-T3 (build public chat page with question input and answer display, frontend-agent). US-002 'Anonymous session tracking by session ID' (3 pts, backend-agent). US-003 'Persisted history that resumes a returning thread' (5 pts, backend-agent). US-004 'Use prior turns as context for follow-up questions' (3 pts, backend-agent). US-005 'Responsive web chat interface' (3 pts, frontend-agent).

**Related:** US-001, US-002, US-003, US-004, US-005

- ⚠ No completion/build status reported for any item in this epic -- cannot confirm the chat endpoint, session persistence, history resume, or UI actually exist yet.

### EPIC-002 · draft · source: plan:EPIC-002

Epic: Grounded Answering with Citations -- covers top-k retrieval, strict grounding in uploaded documents, an 'I don't know' fallback, and source citations.

Backlog items: US-006 'Top-k similarity retrieval of relevant chunks' (8 pts, backend-agent) with tasks US-006-T1 (query embedding via gemini-embedding-001, integration-agent), US-006-T2 (pgvector top-k similarity query over document_chunks, backend-agent), US-006-T3 (wire retrieval results into chat answer-generation pipeline, backend-agent). US-007 'Answers grounded strictly in uploaded documents' (5 pts, backend-agent). US-008 "Say 'I don't know' when the answer is not in the corpus" (3 pts, backend-agent). US-009 'Show source citations for answers' (5 pts, backend-agent).

**Related:** US-006, US-007, US-008, US-009

- ⚠ No completion/build status reported -- cannot confirm retrieval, grounding, fallback behavior, or citation display are implemented.

### EPIC-003 · draft · source: plan:EPIC-003

Epic: Document Ingestion & Knowledge Base -- covers document upload, the parse/chunk/embed/index pipeline, and admin visibility into ingestion status.

Backlog items: US-010 'Upload knowledge-base documents' (8 pts, backend-agent) with tasks US-010-T1 (POST /api/admin/documents with file type validation), US-010-T2 (S3 upload for original files, integration-agent), US-010-T3 (admin upload UI with progress/rejection messaging, frontend-agent), US-010-T4 (enqueue ingestion job on Redis after upload). US-011 'Parse, chunk, embed and index uploaded documents' (13 pts, integration-agent) with tasks US-011-T1 (parse PDF/.docx/.txt/.md), US-011-T2 (chunk parsed text), US-011-T3 (embed each chunk via gemini-embedding-001, integration-agent), US-011-T4 (store embeddings and chunk metadata in pgvector). US-012 'View ingestion status' (3 pts, frontend-agent).

**Related:** US-010, US-011, US-012

- ⚠ No completion/build status reported -- cannot confirm upload, queuing, parsing, chunking, embedding, indexing, or status-view are implemented.

### EPIC-004 · draft · source: plan:EPIC-004

Epic: Admin Area & Document Management -- covers password-protected admin login, listing documents, removing documents, and clearing conversation history.

Backlog items: US-013 'Password-protected admin login' (8 pts, backend-agent) with tasks US-013-T1 (POST /api/admin/login with credential verification and session/token issuance), US-013-T2 (admins table migration), US-013-T3 (admin login page and route guard, frontend-agent). US-014 'List knowledge-base documents' (5 pts, backend-agent). US-015 'Remove a document from the knowledge base' (5 pts, backend-agent). US-016 'Clear conversation history' (3 pts, backend-agent).

**Related:** US-013, US-014, US-015, US-016

- ⚠ No completion/build status reported -- cannot confirm login, document listing, document removal, or history clearing are implemented.

### EPIC-005 · draft · source: plan:EPIC-005

Epic: Platform, AI Configuration & Service Constraints -- covers configured Gemini API access and verification of free-to-use and modest-scale operating requirements.

Backlog items: US-017 'Configured Gemini API access' (3 pts, backend-agent). US-018 'Free to use with no payments' (1 pt, qa-agent). US-019 'Operate at modest scale' (3 pts, qa-agent).

**Related:** US-017, US-018, US-019

- ⚠ No completion/build/verification status reported for Gemini configuration, free-to-use validation, or scale testing -- these are QA-owned items with no test results provided yet.
<!-- sdlc:auto:end narrative -->
