<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Proposed  
Date: 2026-10-27

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- MySQL
- dedicated vector DB

## Decision Outcome

Chosen option: PostgreSQL 16, because One database holds admins, documents+status, per-session history and — via pgvector — the chunk embeddings and top-k similarity search, keeping the system simple at hundreds-to-low-thousands document scale.

## Consequences

pgvector is excellent at this scale; a dedicated vector store would only matter at far larger corpora and would add an operational component we deliberately avoid.
<!-- sdlc:auto:end adr -->