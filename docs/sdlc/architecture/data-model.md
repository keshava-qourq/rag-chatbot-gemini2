# Data Model

<!-- sdlc:auto:start entities -->
### admins

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| username | varchar | False | — | False |
| password_hash | varchar | False | — | False |
| created_at | timestamptz | False | — | False |

### documents

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| filename | varchar | False | — | False |
| content_type | varchar | False | — | False |
| s3_key | varchar | False | — | False |
| status | varchar | False | — | False |
| error_message | text | False | — | True |
| uploaded_by | uuid | False | admins.id | True |
| uploaded_at | timestamptz | False | — | False |

### document_chunks

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| document_id | uuid | False | documents.id | False |
| chunk_index | integer | False | — | False |
| content | text | False | — | False |
| embedding | vector(3072) | False | — | False |
| created_at | timestamptz | False | — | False |

### chat_sessions

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| created_at | timestamptz | False | — | False |
| last_active_at | timestamptz | False | — | False |

### messages

| Field | Type | PK | FK | Nullable |
|---|---|---|---|---|
| id | uuid | True | — | False |
| session_id | uuid | False | chat_sessions.id | False |
| role | varchar | False | — | False |
| content | text | False | — | False |
| citations | jsonb | False | — | True |
| created_at | timestamptz | False | — | False |
<!-- sdlc:auto:end entities -->

<!-- sdlc:auto:start relationships -->
| Source | Target | Type |
|---|---|---|
| admins | documents | one-to-many |
| documents | document_chunks | one-to-many |
| chat_sessions | messages | one-to-many |
<!-- sdlc:auto:end relationships -->

<!-- sdlc:auto:start er-diagram -->
```mermaid
erDiagram
  admins {
    uuid id PK
    varchar username
    varchar password_hash
    timestamptz created_at
  }
  documents {
    uuid id PK
    varchar filename
    varchar content_type
    varchar s3_key
    varchar status
    text error_message
    uuid uploaded_by FK
    timestamptz uploaded_at
  }
  document_chunks {
    uuid id PK
    uuid document_id FK
    integer chunk_index
    text content
    vector_3072_ embedding
    timestamptz created_at
  }
  chat_sessions {
    uuid id PK
    timestamptz created_at
    timestamptz last_active_at
  }
  messages {
    uuid id PK
    uuid session_id FK
    varchar role
    text content
    jsonb citations
    timestamptz created_at
  }
  admins ||--o{ documents : "one-to-many"
  documents ||--o{ document_chunks : "one-to-many"
  chat_sessions ||--o{ messages : "one-to-many"
```
<!-- sdlc:auto:end er-diagram -->
