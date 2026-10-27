<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Proposed  
Date: 2026-10-27

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- React 19
- Vue
- SvelteKit

## Decision Outcome

Chosen option: React 19, because Drives the two interactive, state-heavy surfaces in this design: a public chat that renders streamed tokens and running history, and an admin area with file-upload progress and live ingestion status.

## Consequences

A SPA needs its own build/hosting (served as static assets via CloudFront) and the streaming consumer is hand-wired against the backend's event stream.
<!-- sdlc:auto:end adr -->