# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-SCOPE · approved · source: requirements:scope

Defines the lightweight delivery scope (requirements v1): a free, text-only RAG chatbot with public chat, grounded/cited answers, document ingestion, and a password-protected admin area.

In scope: public no-login chat; answers grounded strictly in uploaded documents with an 'I don't know' fallback; source citations; top-k similarity retrieval via pgvector; session-based conversation history that resumes threads and is used as follow-up context; document upload with parsing/chunking/embedding/indexing; password-protected admin login; admin document list/removal; Gemini 2.5 Flash for answers and gemini-embedding-001 for embeddings; S3 for document storage; PDF/.docx/plain text/Markdown uploads (no scanned-image OCR); indefinite conversation history retention until an admin clears it; free to use with no payments or billing.
Out of scope -- explicitly excluded: voice input/output, image or video generation, native mobile app.

**Related:** EPIC-001, EPIC-002, EPIC-003, EPIC-004, EPIC-005

### REQ-STACK · approved · source: requirements:technology-stack

Product owner approved an exact technology stack to design against, with no substitutions permitted.

- Backend: FastAPI 0.115 -- handles orchestration (retrieval, Gemini calls, streaming answers with citations, document parsing/chunking/embedding on upload); chosen for Python ecosystem fit and clean async/streaming support.
- Cloud: AWS -- provides S3 (file storage), RDS Postgres with pgvector, and container hosting for the web app and ingestion worker.
- Database: PostgreSQL 16 -- single database for admin accounts, documents/ingestion status, per-session conversation history, and (via pgvector) embeddings.
- Frontend: React 19 -- powers the responsive public chat (streaming, running conversation) and the admin area (upload, ingestion status).

**Related:** EPIC-001, EPIC-002, EPIC-003, EPIC-004, EPIC-005

### REQ-SVC · approved · source: requirements:services

Product owner approved the exact runtime services and required API keys/env vars for the app.

- Vector store: pgvector inside PostgreSQL -- stores embedded chunks and runs top-k similarity search.
- AI provider: Google Gemini (SaaS, env GEMINI_API_KEY) -- Gemini 2.5 Flash for grounded/cited answers, gemini-embedding-001 for document and query embeddings.
- File storage: Amazon S3 (SaaS, env AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET) -- durable storage for original uploaded files.
- Queue: Redis as a background job queue (container redis:7-alpine, env REDIS_URL) -- runs parsing/chunking/embedding asynchronously so upload and chat stay responsive.
Required API keys/env vars: AWS_ACCESS_KEY_ID, AWS_REGION, AWS_SECRET_ACCESS_KEY, GEMINI_API_KEY, REDIS_URL, S3_BUCKET.

**Related:** EPIC-002, EPIC-003

### EPIC-001 · draft · source: requirements:EPIC-001

Public Chat Experience: a no-login chat page where each conversation is tracked anonymously by session ID, history persists and resumes per session, prior turns feed follow-up context, and the layout is responsive.

- US-001 (critical): Visitors ask questions with no account/login; page loads with no login prompt and an available input field (AC-001, AC-002).
- US-002 (high): First message assigns an anonymous session ID; later messages stay linked to it with no personal identity required or stored (AC-003, AC-004).
- US-003 (high): Q&A pairs are persisted against the session ID per turn; returning under the same session ID shows prior exchanges in order (AC-005, AC-006).
- US-004 (high): Prior session turns are included as context for follow-up questions; a brand-new session answers using only retrieved documents (AC-007, AC-008).
- US-005 (medium): Chat input/history remain usable without horizontal scrolling on mobile width, and the layout adapts on desktop while keeping input/history accessible (AC-009, AC-010).

**Related:** NFR-001, NFR-008, US-001, US-002, US-003, US-004, US-005

### EPIC-002 · draft · source: requirements:EPIC-002

Grounded Answering with Citations: top-k retrieval feeds Gemini 2.5 Flash answers that are strictly document-grounded, cited, and fall back to 'I don't know' when unsupported.

- US-006 (critical): Query is embedded and top-k most similar chunks are retrieved; retrieved chunks and their source documents are made available for grounding and citation (AC-011, AC-012).
- US-007 (critical): Answers are constructed strictly from retrieved content, not general model knowledge; partially-supported questions get answers limited to what's supported. Assumption: requires configured GEMINI_API_KEY (AC-013, AC-014).
- US-008 (critical): When no sufficiently relevant chunks are found or the answer isn't covered, the bot states it does not know and shows no citation for unrelated content (AC-015, AC-016).
- US-009 (high): Answers display citations identifying source document(s); multi-document answers list all contributing sources (AC-017, AC-018).

**Related:** NFR-005, US-006, US-007, US-008, US-009

### EPIC-003 · draft · source: requirements:EPIC-003

Document Ingestion & Knowledge Base: admins upload PDF/.docx/text/Markdown files (no OCR), which are stored in S3 and automatically parsed, chunked, embedded with gemini-embedding-001, and indexed in pgvector, with visible ingestion status.

- US-010 (critical): Supported uploads (PDF, .docx, plain text, Markdown) are accepted, stored, and queued for ingestion. Assumption: files stored in Amazon S3. Unsupported/scanned-image uploads are rejected with an explanatory message (AC-019, AC-020).
- US-011 (critical): Documents are parsed to text, chunked, embedded with gemini-embedding-001, and stored in pgvector for top-k retrieval. Assumption: embeddings require GEMINI_API_KEY; vectors stored in pgvector on PostgreSQL. Once indexed, chunks become eligible for retrieval/citation (AC-021, AC-022).
- US-012 (high): Admin document list shows per-document ingestion status (processing/ready/failed); failed documents are visibly flagged so admins can retry or remove them (AC-023, AC-024).
The epic description itself labels the service/storage choices (S3, pgvector) as 'open assumptions' rather than confirmed architecture decisions.

**Related:** NFR-004, US-010, US-011, US-012

- ⚠ Epic description flags the S3/pgvector storage choices for ingestion as 'open assumptions' not yet confirmed by an architecture decision -- needs sign-off once the architecture phase starts.
- ⚠ No architecture or implementation exists yet to confirm the background ingestion job (NFR-004) is actually built as specified.

### EPIC-004 · draft · source: requirements:EPIC-004

Admin Area & Document Management: password-protected admin login, document listing/removal, and the ability to clear conversation history.

- US-013 (critical): Unauthenticated users are denied access to every admin page until valid credentials are provided; invalid credentials are rejected (AC-025, AC-026).
- US-014 (high): Authenticated admins see all documents with name and ingestion status; an empty-state message shows when none exist (AC-027, AC-028).
- US-015 (high): Removing a document also removes its indexed chunks so it is no longer retrieved or cited, including for previously-answered questions (AC-029, AC-030).
- US-016 (medium): Conversation history is retained indefinitely per session ID unless an admin clears it; clearing deletes the targeted session history so it is no longer shown or used as follow-up context (AC-031, AC-032).

**Related:** NFR-002, NFR-003, US-013, US-014, US-015, US-016

### EPIC-005 · draft · source: requirements:EPIC-005

Platform, AI Configuration & Service Constraints: cross-cutting requirements for Gemini API configuration, free-to-use operation, and modest-scale performance, with voice/image/video/mobile explicitly out of scope.

- US-017 (high): With a valid GEMINI_API_KEY, embedding (gemini-embedding-001) and answer generation (Gemini 2.5 Flash) calls succeed; a missing/invalid key causes graceful failure with an error, not a fabricated result (AC-033, AC-034).
- US-018 (medium): No payment, billing, or subscription is ever requested anywhere in the product (AC-035, AC-036).
- US-019 (low): System is sized for hundreds to low-thousands of documents under low-to-moderate concurrency with acceptable response times; voice, image/video generation, and native mobile app remain absent as out-of-scope (AC-037, AC-038).
Epic description notes these are 'open assumptions' about AI services, storage, scale and payments.

**Related:** NFR-005, NFR-006, NFR-007, US-017, US-018, US-019

- ⚠ Epic description explicitly labels scale, payment-free operation, and AI-service assumptions as 'open' pending confirmation -- no architecture or capacity plan exists yet to validate NFR-006/NFR-007 targets.
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-10-27

**Capabilities in scope:** Public chat page where anyone can ask questions without logging in, Answers grounded strictly in uploaded documents, with 'I don't know' fallback, Source citations showing which documents an answer came from, Top-k similarity retrieval of relevant document chunks for each question, Session-based conversation history that resumes a returning thread, Prior turns used as context for follow-up questions, Document upload with parsing, chunking, embedding and indexing, Password-protected admin login, Admin document management (list and remove knowledge-base documents), Google Gemini 2.5 Flash for generating answers, gemini-embedding-001 for document and query embeddings, pgvector top-k similarity search for retrieval, Amazon S3 for storing uploaded documents, PDF, Word (.docx), plain text and Markdown uploads (no scanned-image OCR), Conversation history kept indefinitely unless an admin clears it, Free to use with no payments or billing

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | FastAPI | The core work is orchestration: receive a question, run top-k retrieval against pgvector, call Gemini, stream the answer with citations, and run document parsing/chunking/embedding on upload. FastAPI is Python, which is where the Gemini and document-parsing libraries live, and it supports streaming responses and async calls to the Gemini API cleanly -- a natural fit for this RAG flow. |
| cloud | AWS | You need durable storage for uploaded PDFs/Word/Markdown files, a managed PostgreSQL that supports the pgvector extension, and somewhere to run the web app and a background ingestion worker. AWS provides all of this (S3, RDS for Postgres with pgvector, container hosting) in one place, which suits a single-organisation deployment with no hard deadline. |
| database | PostgreSQL | One database covers everything this product stores: admin accounts, documents and their ingestion status, per-session conversation history, and -- through the pgvector extension -- the document embeddings for similarity search. Keeping chat history, documents and vectors in the same place keeps the system simple at your hundreds-to-low-thousands document scale and avoids running a separate vector database. |
| frontend | React | The product is a responsive web app with two distinct surfaces -- a live public chat that streams answers and updates a running conversation, and an admin area for uploading documents and watching ingestion status change. Both are interactive, state-heavy screens that React handles well, and it is the available option that fits a chat UI with real-time message updates and file-upload progress. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Public Chat Experience

A public, no-login chat page where anyone can ask questions. Each conversation is tracked anonymously by a session ID, history is persisted per session, and prior turns are used as context for follow-up questions. Delivered as a responsive web page.

### US-001: Ask a question without logging in

**Priority:** critical

> As a public visitor, I want to open the chat page and ask a question without creating an account or logging in, so that I can get answers from the knowledge base immediately.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | a visitor opens the public chat page with no authentication | they type a question and submit it | the system accepts the question and returns a generated answer without requiring any login or registration |
| AC-002 | a visitor has not provided any credentials | the chat page loads | no login prompt is shown and an input field for asking a question is available |

### US-002: Anonymous session tracking by session ID

**Priority:** high

> As a public visitor, I want my conversation to be tracked anonymously by a session ID, so that my chat is grouped into a single thread without identifying me personally.

| ID | Given | When | Then |
|---|---|---|---|
| AC-003 | a new visitor starts a conversation | they send their first message | the system assigns an anonymous session ID that groups the subsequent turns of that conversation |
| AC-004 | an active session ID exists for a visitor | they send further messages in the same session | those messages are associated with the same session ID and no personal identity is required or stored |

### US-003: Persisted history that resumes a returning thread

**Priority:** high

> As a public visitor, I want my conversation history to be saved and shown when I return within the same session, so that I can continue my thread where I left off.

| ID | Given | When | Then |
|---|---|---|---|
| AC-005 | a visitor had an earlier conversation under a session ID | they return to the chat page with that same session ID | the previously exchanged questions and answers are displayed in order so the thread resumes |
| AC-006 | a conversation turn has completed | the answer is returned | both the question and the answer are persisted against the session ID |

### US-004: Use prior turns as context for follow-up questions

**Priority:** high

> As a public visitor, I want the bot to take my earlier questions and answers into account, so that I can ask follow-up questions without repeating context.

| ID | Given | When | Then |
|---|---|---|---|
| AC-007 | a visitor has at least one prior turn in the current session | they ask a follow-up question that refers to the earlier exchange | prior turns from the session are included as context when generating the answer |
| AC-008 | a brand-new session with no prior turns | the first question is asked | the answer is generated using only the retrieved documents with no prior conversation context |

### US-005: Responsive web chat interface

**Priority:** medium

> As a public visitor, I want the chat page to work on desktop and mobile browsers, so that I can use it comfortably on any device.

| ID | Given | When | Then |
|---|---|---|---|
| AC-009 | a visitor opens the chat page on a mobile-width browser | the page renders | the chat input and conversation are usable and readable without horizontal scrolling |
| AC-010 | a visitor opens the chat page on a desktop browser | the page renders | the chat layout adapts to the larger viewport while keeping the input and history accessible |

## EPIC-002: Grounded Answering with Citations

For each question the bot retrieves relevant chunks via top-k similarity search, uses Google Gemini 2.5 Flash to answer strictly from the uploaded documents, shows source citations, and says it does not know when the answer is not in the corpus. Answers are generated with Gemini 2.5 Flash; this assumes a configured GEMINI_API_KEY.

### US-006: Top-k similarity retrieval of relevant chunks

**Priority:** critical

> As a public visitor, I want the system to find the most relevant document chunks for my question, so that the answer is based on the parts of the corpus that actually match my question.

| ID | Given | When | Then |
|---|---|---|---|
| AC-011 | a knowledge base with indexed document chunks | a visitor submits a question | the system embeds the query and retrieves the top-k most similar chunks from the vector store to build the answer context |
| AC-012 | a question is submitted | retrieval runs | the retrieved chunks and their source documents are made available for grounding the answer and producing citations |

### US-007: Answers grounded strictly in uploaded documents

**Priority:** critical

> As a public visitor, I want answers to come only from the uploaded documents, so that I can trust the response reflects the organisation's knowledge base rather than general knowledge.

| ID | Given | When | Then |
|---|---|---|---|
| AC-013 | relevant chunks have been retrieved for a question | Gemini 2.5 Flash generates the answer | the answer is constructed strictly from the retrieved document content and not from the model's general knowledge. Assumption: answers are generated with Google Gemini 2.5 Flash, which requires a configured GEMINI_API_KEY. |
| AC-014 | a question whose answer is partially supported by the documents | the answer is generated | the response only states what is supported by the retrieved content |

### US-008: Say 'I don't know' when the answer is not in the corpus

**Priority:** critical

> As a public visitor, I want the bot to tell me when it cannot find the answer in the documents, so that I am not given a fabricated or misleading answer.

| ID | Given | When | Then |
|---|---|---|---|
| AC-015 | a question whose answer is not covered by any retrieved document chunk | the bot responds | it clearly states that it does not know or that the answer is not in the available documents, rather than guessing |
| AC-016 | retrieval returns no sufficiently relevant chunks | the bot responds | it returns the 'I don't know' fallback and does not present a citation for unrelated content |

### US-009: Show source citations for answers

**Priority:** high

> As a public visitor, I want to see which documents an answer was drawn from, so that I can verify the answer and read the original source.

| ID | Given | When | Then |
|---|---|---|---|
| AC-017 | an answer generated from one or more retrieved chunks | the answer is displayed | it includes citations identifying the source document(s) the answer was based on |
| AC-018 | an answer that draws on multiple documents | the answer is displayed | all contributing source documents are listed as citations |

## EPIC-003: Document Ingestion & Knowledge Base

Admins upload documents which are stored in Amazon S3, parsed to text, chunked, embedded with gemini-embedding-001 and indexed in a pgvector-backed PostgreSQL vector store for top-k retrieval. Supported formats are PDF, Word (.docx), plain text and Markdown; scanned-image OCR is excluded. These service and storage choices are open assumptions.

### US-010: Upload knowledge-base documents

**Priority:** critical

> As a staff admin, I want to upload documents into the knowledge base, so that the chatbot can answer questions from them.

| ID | Given | When | Then |
|---|---|---|---|
| AC-019 | an authenticated admin in the admin area | they upload a PDF, .docx, plain text or Markdown file | the file is accepted and stored, and ingestion begins. Assumption: uploaded files are stored in Amazon S3. |
| AC-020 | an admin attempts to upload a scanned-image or other unsupported file type | they submit the upload | the system rejects it with a message that only PDF, .docx, plain text and Markdown are supported and scanned-image OCR is not available |

### US-011: Parse, chunk, embed and index uploaded documents

**Priority:** critical

> As a staff admin, I want uploaded documents to be parsed, chunked, embedded and indexed automatically, so that their content becomes retrievable for answering questions.

| ID | Given | When | Then |
|---|---|---|---|
| AC-021 | a supported document has been uploaded | ingestion runs | the document is parsed to text, split into chunks, embedded with gemini-embedding-001 and stored in the vector store for top-k similarity retrieval. Assumption: embeddings use gemini-embedding-001 (requires GEMINI_API_KEY) and vectors are stored in pgvector on PostgreSQL. |
| AC-022 | a document has been successfully indexed | a visitor asks a related question | chunks from that document are eligible to be retrieved and cited |

### US-012: View ingestion status

**Priority:** high

> As a staff admin, I want to see the ingestion status of each uploaded document, so that I know when a document is ready and can spot failures.

| ID | Given | When | Then |
|---|---|---|---|
| AC-023 | a document is being ingested | the admin views the document list | its current status (e.g. processing, ready, or failed) is shown |
| AC-024 | ingestion of a document fails | the admin views the document list | the document is shown as failed so the admin can retry or remove it |

## EPIC-004: Admin Area & Document Management

A password-protected admin area where staff authenticate, list and remove knowledge-base documents, and clear conversation history. Admins are the only authenticated role.

### US-013: Password-protected admin login

**Priority:** critical

> As a staff admin, I want to log into the admin area with a password, so that only authorised staff can manage the knowledge base.

| ID | Given | When | Then |
|---|---|---|---|
| AC-025 | an unauthenticated user | they attempt to access any admin page | they are required to authenticate and are denied access until they provide valid credentials |
| AC-026 | a user on the admin login screen | they submit valid admin credentials | they are granted access to the admin area; invalid credentials are rejected |

### US-014: List knowledge-base documents

**Priority:** high

> As a staff admin, I want to see a list of all documents in the knowledge base, so that I can review what the chatbot can answer from.

| ID | Given | When | Then |
|---|---|---|---|
| AC-027 | an authenticated admin | they open the document management view | all uploaded documents are listed with identifying details such as name and ingestion status |
| AC-028 | no documents have been uploaded yet | the admin opens the document management view | an empty-state message is shown instead of a list |

### US-015: Remove a document from the knowledge base

**Priority:** high

> As a staff admin, I want to delete a document from the knowledge base, so that outdated or incorrect content is no longer used in answers.

| ID | Given | When | Then |
|---|---|---|---|
| AC-029 | an authenticated admin viewing the document list | they remove a document | the document and its indexed chunks are removed so its content is no longer retrieved or cited in future answers |
| AC-030 | a document has been removed | a visitor asks a question previously answered from that document | chunks from the removed document are no longer returned by retrieval |

### US-016: Clear conversation history

**Priority:** medium

> As a staff admin, I want to clear stored conversation history, so that retained session data can be purged when needed.

| ID | Given | When | Then |
|---|---|---|---|
| AC-031 | conversation history persisted per session ID | no admin action is taken | history is retained indefinitely. Assumption: history is kept indefinitely per session ID unless an admin clears it. |
| AC-032 | an authenticated admin | they clear conversation history | the targeted session history is deleted and no longer displayed or used as follow-up context |

## EPIC-005: Platform, AI Configuration & Service Constraints

Cross-cutting platform concerns: responsive web delivery, configured Gemini API access, pgvector storage, free-to-use with no payments, and modest-scale expectations. Captures the open assumptions about AI services, storage, scale and payments. Voice, image/video generation and native mobile apps are out of scope.

### US-017: Configured Gemini API access

**Priority:** high

> As a system operator, I want the application to use a configured Gemini API key for answers and embeddings, so that generation and embedding calls work reliably.

| ID | Given | When | Then |
|---|---|---|---|
| AC-033 | a valid GEMINI_API_KEY is configured | the system embeds documents/queries or generates answers | it successfully calls gemini-embedding-001 for embeddings and Gemini 2.5 Flash for answers. Assumption: both AI services require a configured GEMINI_API_KEY. |
| AC-034 | the GEMINI_API_KEY is missing or invalid | an embedding or answer call is attempted | the operation fails gracefully with an error rather than returning a fabricated result |

### US-018: Free to use with no payments

**Priority:** medium

> As a public visitor, I want to use the chatbot without any payment or subscription, so that there is no barrier to asking questions.

| ID | Given | When | Then |
|---|---|---|---|
| AC-035 | a visitor using the chat page | they ask questions | no payment, billing, or subscription is ever requested. Assumption: the product is free to use with no payments or billing. |
| AC-036 | any surface of the product | a user navigates it | no payment or subscription features are present |

### US-019: Operate at modest scale

**Priority:** low

> As a system operator, I want the system to handle a single organisation's corpus and low-to-moderate concurrency, so that performance is adequate for expected usage.

| ID | Given | When | Then |
|---|---|---|---|
| AC-037 | a corpus of hundreds to low-thousands of documents | visitors ask questions under low-to-moderate concurrent load | the system retrieves and answers within acceptable response times for this scale. Assumption: modest scale with no hard deadline. |
| AC-038 | only a text-based web chat is delivered | a user looks for voice, image/video generation, or a native mobile app | those capabilities are absent as they are out of scope |
<!-- sdlc:auto:end epics -->
