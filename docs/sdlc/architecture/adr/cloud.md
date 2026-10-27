<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Proposed  
Date: 2026-10-27

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- GCP
- Azure

## Decision Outcome

Chosen option: AWS, because Provides S3 for durable file storage, RDS PostgreSQL 16 with pgvector, and container hosting for the API and worker in one place for a single-organisation deployment.

## Consequences

Gemini is a Google SaaS called over HTTPS from AWS, so AI calls cross a provider boundary — acceptable given no hard latency deadline (NFR-006).
<!-- sdlc:auto:end adr -->