# Traceability Matrix

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start legend -->
Built from recorded links, not written by a model: requirement key → plan item (`source_stable_key`) → development ticket (`stable_key`) → the ticket's test steps → the last live deployment that started after the work finished. **AC tests** counts the story's acceptance criteria that have a test case, and those whose test cases all passed in the latest finished E2E run.
<!-- sdlc:auto:end legend -->

<!-- sdlc:auto:start matrix -->
| Requirement | Epic | Title | Plan items | Sprint | Design | Code | Commits | Ticket | Tests | AC tests | Deployed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| US-001 | EPIC-001 | Ask a question without logging in | US-001, US-001-T1, US-001-T2, US-001-T3 | 1 | POST /api/chat, api_backend, chat_sessions, gemini, messages, postgres, web_frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-002 | EPIC-001 | Anonymous session tracking by session ID | US-002 | 2 | POST /api/chat, api_backend, chat_sessions, postgres | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-003 | EPIC-001 | Persisted history that resumes a returning thread | US-003 | 3 | GET /api/sessions/{session_id}/messages, api_backend, chat_sessions, messages, postgres, web_frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-004 | EPIC-001 | Use prior turns as context for follow-up questions | US-004 | 4 | POST /api/chat, api_backend, gemini, messages | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-005 | EPIC-001 | Responsive web chat interface | US-005 | 2 | web_frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-006 | EPIC-002 | Top-k similarity retrieval of relevant chunks | US-006, US-006-T1, US-006-T2, US-006-T3 | 4 | POST /api/chat, api_backend, document_chunks, documents, gemini, postgres | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-007 | EPIC-002 | Answers grounded strictly in uploaded documents | US-007 | 5 | POST /api/chat, api_backend, document_chunks, gemini | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-008 | EPIC-002 | Say 'I don't know' when the answer is not in the corpus | US-008 | 5 | POST /api/chat, api_backend, document_chunks, gemini | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-009 | EPIC-002 | Show source citations for answers | US-009 | 5 | POST /api/chat, api_backend, document_chunks, documents, web_frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-010 | EPIC-003 | Upload knowledge-base documents | US-010, US-010-T1, US-010-T2, US-010-T3, US-010-T4 | 2 | POST /api/admin/documents, api_backend, documents, redis_queue, s3_storage, web_frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-011 | EPIC-003 | Parse, chunk, embed and index uploaded documents | US-011, US-011-T1, US-011-T2, US-011-T3, US-011-T4 | 3 | document_chunks, documents, gemini, ingestion_worker, postgres, redis_queue, s3_storage | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-012 | EPIC-003 | View ingestion status | US-012 | 5 | GET /api/admin/documents, api_backend, documents, web_frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-013 | EPIC-004 | Password-protected admin login | US-013, US-013-T1, US-013-T2, US-013-T3 | 1 | POST /api/admin/login, admins, api_backend, postgres, web_frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-014 | EPIC-004 | List knowledge-base documents | US-014 | 2 | GET /api/admin/documents, api_backend, documents, postgres, web_frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-015 | EPIC-004 | Remove a document from the knowledge base | US-015 | 4 | DELETE /api/admin/documents/{document_id}, api_backend, document_chunks, documents, postgres, s3_storage | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-016 | EPIC-004 | Clear conversation history | US-016 | 4 | DELETE /api/admin/sessions/{session_id}/history, api_backend, chat_sessions, messages, postgres | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-017 | EPIC-005 | Configured Gemini API access | US-017 | 1 | api_backend, gemini | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-018 | EPIC-005 | Free to use with no payments | US-018 | 5 | web_frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-019 | EPIC-005 | Operate at modest scale | US-019 | 5 | api_backend, postgres | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
<!-- sdlc:auto:end matrix -->
