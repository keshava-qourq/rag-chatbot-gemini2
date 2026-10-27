<!-- sdlc:auto:start adr -->
# ADR-0002: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-10-27

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- FastAPI 0.115
- Flask
- Node/Express

## Decision Outcome

Chosen option: FastAPI 0.115, because Async request handling and native streaming responses fit the retrieve-then-stream Gemini answer path, and Python hosts the Gemini and document-parsing libraries the ingestion worker needs.

## Consequences

CPU-bound parsing/embedding is pushed to a separate RQ worker so it never blocks the async request loop (NFR-004).
<!-- sdlc:auto:end adr -->