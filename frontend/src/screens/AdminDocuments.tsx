// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, Upload } = Icons;

const rgba = (hex, a) => {
  let h = String(hex || '#000000').replace('#', '');
  if (h.length === 3) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h, 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const CT = {
  'application/pdf': { short: 'PDF', mime: 'application/pdf' },
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
    short: 'DOCX',
    mime: 'vnd…wordprocessingml.document',
  },
  'text/plain': { short: 'TXT', mime: 'text/plain' },
  'text/markdown': { short: 'MD', mime: 'text/markdown' },
};

const EXT_TO_CT = {
  pdf: 'application/pdf',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  txt: 'text/plain',
  md: 'text/markdown',
};

const DOCS = [
  { id: 'doc_8f21', filename: 'employee-handbook-2026.pdf', content_type: 'application/pdf', s3_key: 'kb-corpus/2026/10/employee-handbook-2026.pdf', status: 'ready', error_message: null, uploaded_by: 'maya.okonjo', uploaded_at: '2026-10-27T09:14:06', chunks: 318, bytes: 2418944 },
  { id: 'doc_8f1e', filename: 'q3-board-pack.pdf', content_type: 'application/pdf', s3_key: 'kb-corpus/2026/10/q3-board-pack.pdf', status: 'processing', error_message: null, uploaded_by: 'ruben.sato', uploaded_at: '2026-10-27T09:02:11', chunks: null, bytes: 7348096 },
  { id: 'doc_8f0a', filename: 'security-policy-v4.docx', content_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', s3_key: 'kb-corpus/2026/10/security-policy-v4.docx', status: 'ready', error_message: null, uploaded_by: 'ada.whitfield', uploaded_at: '2026-10-26T17:48:52', chunks: 94, bytes: 486912 },
  { id: 'doc_8ef3', filename: 'incident-postmortem-2026-09-14.md', content_type: 'text/markdown', s3_key: 'kb-corpus/2026/10/incident-postmortem-2026-09-14.md', status: 'ready', error_message: null, uploaded_by: 'tomas.lindqvist', uploaded_at: '2026-10-26T16:21:30', chunks: 27, bytes: 38214 },
  { id: 'doc_8ee7', filename: 'scanned-invoice-batch-aug.pdf', content_type: 'application/pdf', s3_key: 'kb-corpus/2026/10/scanned-invoice-batch-aug.pdf', status: 'failed', error_message: 'No text layer found — this file is an image scan. OCR is not available.', uploaded_by: 'ruben.sato', uploaded_at: '2026-10-26T15:55:40', chunks: 0, bytes: 11290624 },
  { id: 'doc_8ed2', filename: 'vendor-msa-acme-robotics.pdf', content_type: 'application/pdf', s3_key: 'kb-corpus/2026/10/vendor-msa-acme-robotics.pdf', status: 'ready', error_message: null, uploaded_by: 'ada.whitfield', uploaded_at: '2026-10-26T14:09:17', chunks: 142, bytes: 1204224 },
  { id: 'doc_8ec6', filename: 'pricing-emea-2026h2.docx', content_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', s3_key: 'kb-corpus/2026/10/pricing-emea-2026h2.docx', status: 'ready', error_message: null, uploaded_by: 'maya.okonjo', uploaded_at: '2026-10-26T11:37:04', chunks: 61, bytes: 312320 },
  { id: 'doc_8eb0', filename: 'support-macros.txt', content_type: 'text/plain', s3_key: 'kb-corpus/2026/10/support-macros.txt', status: 'ready', error_message: null, uploaded_by: 'tomas.lindqvist', uploaded_at: '2026-10-25T18:02:49', chunks: 38, bytes: 57344 },
  { id: 'doc_8ea4', filename: 'data-retention-policy.pdf', content_type: 'application/pdf', s3_key: 'kb-corpus/2026/10/data-retention-policy.pdf', status: 'failed', error_message: 'gemini-embedding-001 rejected the batch: 401 invalid API key. Check GEMINI_API_KEY and retry.', uploaded_by: 'ada.whitfield', uploaded_at: '2026-10-25T16:44:12', chunks: 0, bytes: 724992 },
  { id: 'doc_8e99', filename: 'api-reference-v3.md', content_type: 'text/markdown', s3_key: 'kb-corpus/2026/10/api-reference-v3.md', status: 'ready', error_message: null, uploaded_by: 'tomas.lindqvist', uploaded_at: '2026-10-25T10:28:55', chunks: 203, bytes: 288768 },
  { id: 'doc_8e8b', filename: 'benefits-enrolment-faq.docx', content_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', s3_key: 'kb-corpus/2026/10/benefits-enrolment-faq.docx', status: 'ready', error_message: null, uploaded_by: 'maya.okonjo', uploaded_at: '2026-10-24T17:12:38', chunks: 46, bytes: 198656 },
  { id: 'doc_8e7f', filename: 'travel-expense-policy.pdf', content_type: 'application/pdf', s3_key: 'kb-corpus/2026/10/travel-expense-policy.pdf', status: 'ready', error_message: null, uploaded_by: 'maya.okonjo', uploaded_at: '2026-10-24T15:40:02', chunks: 52, bytes: 409600 },
  { id: 'doc_8e62', filename: 'release-notes-4.8.md', content_type: 'text/markdown', s3_key: 'kb-corpus/2026/10/release-notes-4.8.md', status: 'ready', error_message: null, uploaded_by: 'tomas.lindqvist', uploaded_at: '2026-10-24T09:55:21', chunks: 19, bytes: 24576 },
  { id: 'doc_8e55', filename: 'soc2-controls-matrix.docx', content_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', s3_key: 'kb-corpus/2026/10/soc2-controls-matrix.docx', status: 'failed', error_message: 'Password-protected .docx — remove the password and upload the file again.', uploaded_by: 'ada.whitfield', uploaded_at: '2026-10-23T16:30:44', chunks: 0, bytes: 640000 },
  { id: 'doc_8e41', filename: 'customer-churn-review-q2.pdf', content_type: 'application/pdf', s3_key: 'kb-corpus/2026/10/customer-churn-review-q2.pdf', status: 'ready', error_message: null, uploaded_by: 'ruben.sato', uploaded_at: '2026-10-23T13:18:09', chunks: 88, bytes: 1812480 },
  { id: 'doc_8e3c', filename: 'runbook-oncall.md', content_type: 'text/markdown', s3_key: 'kb-corpus/2026/10/runbook-oncall.md', status: 'ready', error_message: null, uploaded_by: 'tomas.lindqvist', uploaded_at: '2026-10-23T08:47:33', chunks: 71, bytes: 96256 },
  { id: 'doc_8e2a', filename: 'brand-guidelines-2026.pdf', content_type: 'application/pdf', s3_key: 'kb-corpus/2026/10/brand-guidelines-2026.pdf', status: 'ready', error_message: null, uploaded_by: 'maya.okonjo', uploaded_at: '2026-10-22T16:02:58', chunks: 64, bytes: 5242880 },
  { id: 'doc_8e18', filename: 'sales-objection-handling.txt', content_type: 'text/plain', s3_key: 'kb-corpus/2026/10/sales-objection-handling.txt', status: 'ready', error_message: null, uploaded_by: 'ruben.sato', uploaded_at: '2026-10-22T11:26:14', chunks: 33, bytes: 46080 },
  { id: 'doc_8e05', filename: 'dpa-standard-clauses.docx', content_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', s3_key: 'kb-corpus/2026/10/dpa-standard-clauses.docx', status: 'ready', error_message: null, uploaded_by: 'ada.whitfield', uploaded_at: '2026-10-22T09:04:41', chunks: 57, bytes: 253952 },
  { id: 'doc_8df8', filename: 'warehouse-sop-pick-pack.pdf', content_type: 'application/pdf', s3_key: 'kb-corpus/2026/10/warehouse-sop-pick-pack.pdf', status: 'ready', error_message: null, uploaded_by: 'ruben.sato', uploaded_at: '2026-10-21T18:39:27', chunks: 110, bytes: 1540096 },
  { id: 'doc_8de4', filename: 'glossary.md', content_type: 'text/markdown', s3_key: 'kb-corpus/2026/10/glossary.md', status: 'ready', error_message: null, uploaded_by: 'tomas.lindqvist', uploaded_at: '2026-10-21T14:15:50', chunks: 12, bytes: 15360 },
  { id: 'doc_8dd1', filename: 'interview-rubric-engineering.docx', content_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', s3_key: 'kb-corpus/2026/10/interview-rubric-engineering.docx', status: 'ready', error_message: null, uploaded_by: 'maya.okonjo', uploaded_at: '2026-10-21T10:51:06', chunks: 29, bytes: 143360 },
  { id: 'doc_8dc0', filename: 'uptime-sla-2026.pdf', content_type: 'application/pdf', s3_key: 'kb-corpus/2026/10/uptime-sla-2026.pdf', status: 'ready', error_message: null, uploaded_by: 'ada.whitfield', uploaded_at: '2026-10-20T16:22:19', chunks: 24, bytes: 184320 },
  { id: 'doc_8db5', filename: 'office-access-guide.txt', content_type: 'text/plain', s3_key: 'kb-corpus/2026/10/office-access-guide.txt', status: 'ready', error_message: null, uploaded_by: 'tomas.lindqvist', uploaded_at: '2026-10-20T09:33:02', chunks: 9, bytes: 12288 },
];

const INITIAL_LOG = [
  { t: '09:02:11', text: 'POST /api/admin/documents  q3-board-pack.pdf  7,348,096 B  → s3://kb-corpus/2026/10/', kind: 'info' },
  { t: '09:02:14', text: 'parse pdf  88 pages → 214,880 chars', kind: 'info' },
  { t: '09:02:19', text: 'chunk size=1200 overlap=180 → 196 chunks', kind: 'info' },
  { t: '09:02:31', text: 'embed gemini-embedding-001 (768d)  141/196 …', kind: 'run' },
  { t: '09:14:06', text: 'index pgvector ivfflat  employee-handbook-2026.pdf  318 chunks  ready', kind: 'ok' },
  { t: '15:55:40', text: 'scanned-invoice-batch-aug.pdf  parse aborted: 0 chars extracted (image-only)', kind: 'err' },
];

const MAX_CHUNKS = 320;

export default function Screen() {
  const navigate = useNavigate();
  const ink = brand.primaryColor;
  const paper = brand.backgroundColor;
  const neutral = brand.neutralColor;
  const accent = brand.accentColor;
  const hair = rgba(ink, 0.14);
  const MONO = `${brand.fontHeading}, ui-monospace, SFMono-Regular, Menlo, monospace`;
  const SANS = `${brand.fontBody}, system-ui, -apple-system, sans-serif`;

  const [docs, setDocs] = React.useState(DOCS);
  const [picked, setPicked] = React.useState(null);
  const [formError, setFormError] = React.useState(null);
  const [busy, setBusy] = React.useState(false);
  const [log, setLog] = React.useState(INITIAL_LOG);
  const [pending, setPending] = React.useState(null);
  const [justAdded, setJustAdded] = React.useState(null);

  const fileRef = React.useRef(null);
  const logRef = React.useRef(null);
  const confirmRef = React.useRef(null);
  const timers = React.useRef([]);

  React.useEffect(() => () => timers.current.forEach((t) => clearTimeout(t)), []);

  React.useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log]);

  React.useEffect(() => {
    if (!pending) return;
    const onKey = (e) => { if (e.key === 'Escape') setPending(null); };
    window.addEventListener('keydown', onKey);
    const id = window.setTimeout(() => confirmRef.current && confirmRef.current.focus(), 20);
    return () => { window.removeEventListener('keydown', onKey); window.clearTimeout(id); };
  }, [pending]);

  const clock = () => {
    const d = new Date();
    const p = (n) => String(n).padStart(2, '0');
    return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
  };
  const bytes = (n) => n.toLocaleString('en-US');
  const human = (n) =>
    n >= 1048576 ? `${(n / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`;
  const stamp = (iso) => {
    const d = new Date(iso);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const p = (n) => String(n).padStart(2, '0');
    return `${p(d.getDate())} ${months[d.getMonth()]} ${d.getFullYear()} · ${p(d.getHours())}:${p(d.getMinutes())}`;
  };

  const pushLog = (entry) => setLog((prev) => [...prev.slice(-40), { t: clock(), ...entry }]);

  const counts = docs.reduce(
    (acc, d) => { acc[d.status] = (acc[d.status] || 0) + 1; return acc; },
    { ready: 0, processing: 0, failed: 0 }
  );

  const onPick = (e) => {
    const f = e.target.files && e.target.files[0];
    setFormError(null);
    if (!f) { setPicked(null); return; }
    const ext = (f.name.split('.').pop() || '').toLowerCase();
    setPicked({ name: f.name, size: f.size, ext });
    if (!EXT_TO_CT[ext]) {
      setFormError({
        head: `${f.name} is not a format we can index.`,
        body: 'Only PDF, Word (.docx), plain text and Markdown are supported. Scanned-image OCR is not available, so image-only files cannot be read.',
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (busy) return;
    if (!picked) {
      setFormError({
        head: 'Choose a file before indexing.',
        body: 'Pick a PDF, .docx, .txt or .md file from your machine — it goes to S3, then straight into the chunk and embed pipeline.',
      });
      return;
    }
    if (!EXT_TO_CT[picked.ext]) {
      setFormError({
        head: `${picked.name} is not a format we can index.`,
        body: 'Only PDF, Word (.docx), plain text and Markdown are supported. Scanned-image OCR is not available, so image-only files cannot be read.',
      });
      pushLog({ text: `reject ${picked.name}  unsupported type .${picked.ext}`, kind: 'err' });
      return;
    }

    const id = 'doc_' + Math.random().toString(16).slice(2, 6);
    const content_type = EXT_TO_CT[picked.ext];
    const chunks = Math.max(6, Math.round(picked.size / 1800));
    const now = new Date();
    const iso = now.toISOString().slice(0, 19);
    const doc = {
      id,
      filename: picked.name,
      content_type,
      s3_key: `kb-corpus/2026/10/${picked.name}`,
      status: 'processing',
      error_message: null,
      uploaded_by: 'maya.okonjo',
      uploaded_at: iso,
      chunks: null,
      bytes: picked.size,
    };

    setBusy(true);
    setFormError(null);
    setDocs((prev) => [doc, ...prev]);
    setJustAdded(id);
    pushLog({ text: `POST /api/admin/documents  ${picked.name}  ${bytes(picked.size)} B  → s3://kb-corpus/2026/10/`, kind: 'info' });

    const q = [
      [700, { text: `parse ${picked.ext}  → ${(chunks * 1180).toLocaleString('en-US')} chars`, kind: 'info' }],
      [1500, { text: `chunk size=1200 overlap=180 → ${chunks} chunks`, kind: 'info' }],
      [2300, { text: `embed gemini-embedding-001 (768d)  ${chunks}/${chunks}`, kind: 'run' }],
    ];
    q.forEach(([ms, entry]) => timers.current.push(window.setTimeout(() => pushLog(entry), ms)));
    timers.current.push(
      window.setTimeout(() => {
        setDocs((prev) => prev.map((d) => (d.id === id ? { ...d, status: 'ready', chunks } : d)));
        pushLog({ text: `index pgvector ivfflat  ${picked.name}  ${chunks} chunks  ready`, kind: 'ok' });
        setBusy(false);
        setPicked(null);
        if (fileRef.current) fileRef.current.value = '';
      }, 3100)
    );
  };

  const confirmRemove = () => {
    const d = pending;
    setDocs((prev) => prev.filter((x) => x.id !== d.id));
    pushLog({
      text: `DELETE /api/admin/documents/${d.id}  ${d.filename}  ${d.chunks || 0} chunks purged from pgvector`,
      kind: 'err',
    });
    setPending(null);
  };

  const statusChip = (d) => {
    const map = {
      ready: { label: 'Ready', Icon: Icons.CheckCircle, tint: rgba(ink, 0.05), mark: ink },
      processing: { label: 'Indexing', Icon: Icons.Clock, tint: rgba(ink, 0.05), mark: neutral },
      failed: { label: 'Failed', Icon: Icons.AlertCircle, tint: rgba(accent, 0.1), mark: accent },
    };
    const s = map[d.status];
    return (
      <span
        className="inline-flex items-center gap-1.5 border px-2 py-[3px] text-[11px] uppercase tracking-[0.08em]"
        style={{ fontFamily: MONO, borderColor: d.status === 'failed' ? rgba(accent, 0.45) : hair, backgroundColor: s.tint, color: ink }}
      >
        <s.Icon className="h-3 w-3 shrink-0" style={{ color: s.mark }} aria-hidden="true" />
        {s.label}
        {d.status === 'processing' ? <span className="kb-caret" aria-hidden="true" /> : null}
      </span>
    );
  };

  const focusStyle = { outlineColor: accent };
  const focusCls = 'outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  return (
    <div
      className="mx-auto w-full max-w-[1120px] px-4 py-8 sm:px-6"
      style={{ fontFamily: SANS, color: ink, fontVariantNumeric: 'tabular-nums' }}
    >
      <style>{`
        @keyframes kbBlink { 0%,49% { opacity: 1 } 50%,100% { opacity: 0 } }
        @keyframes kbRowIn { from { opacity: 0; transform: translateY(-4px) } to { opacity: 1; transform: none } }
        @keyframes kbPanelIn { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }
        .kb-caret { display:inline-block; width:6px; height:11px; background:currentColor; animation: kbBlink 1s steps(1) infinite; }
        .kb-row-in { animation: kbRowIn .28s ease-out both; }
        .kb-panel-in { animation: kbPanelIn .16s ease-out both; }
        @media (prefers-reduced-motion: reduce) {
          .kb-caret, .kb-row-in, .kb-panel-in { animation: none !important; }
        }
      `}</style>

      {/* b-0-0 page title */}
      <header data-wf="b-0-0" className="mb-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em]" style={{ fontFamily: MONO, color: neutral }}>
              Admin · corpus index
            </p>
            <h1 className="mt-2 text-[34px] leading-[1.1] font-medium" style={{ fontFamily: MONO, letterSpacing: '-0.02em' }}>
              Knowledge Base
            </h1>
          </div>
          <p className="text-[12px]" style={{ fontFamily: MONO, color: neutral }}>
            pgvector · 768d · top-k 6 · cutoff 0.72
          </p>
        </div>
        <div className="mt-4 h-px w-full" style={{ backgroundColor: hair }} />
        <div className="h-[2px] w-16" style={{ backgroundColor: accent }} />
      </header>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* b-1-0 upload form */}
        <section data-wf="b-1-0" className="lg:col-span-8">
          <div className="h-full border" style={{ borderColor: hair, backgroundColor: rgba(ink, 0.02) }}>
            <div className="flex items-center justify-between border-b px-4 py-2.5" style={{ borderColor: hair }}>
              <h2 className="text-[13px] font-medium uppercase tracking-[0.1em]" style={{ fontFamily: MONO }}>
                Upload document
              </h2>
              <span className="text-[11px]" style={{ fontFamily: MONO, color: neutral }}>
                POST /api/admin/documents
              </span>
            </div>

            <form id="kb-upload" onSubmit={onSubmit} noValidate className="px-4 py-4">
              <Label htmlFor="kb-file" className="text-[12px] font-medium uppercase tracking-[0.08em]" style={{ fontFamily: MONO }}>
                File (PDF, .docx, .txt, .md)
              </Label>
              <Input
                data-wf="i-1-0-0"
                id="kb-file"
                ref={fileRef}
                type="file"
                accept=".pdf,.docx,.txt,.md"
                onChange={onPick}
                aria-describedby="kb-file-help kb-file-error"
                className={`mt-2 w-full border bg-transparent text-[13px] file:mr-3 file:border file:bg-transparent file:px-3 file:py-1.5 file:text-[12px] ${focusCls}`}
                style={{ ...focusStyle, borderColor: hair, borderRadius: brand.radius, fontFamily: MONO, color: ink }}
              />
              <p id="kb-file-help" className="mt-2 text-[12px]" style={{ color: neutral }}>
                {picked
                  ? `${picked.name} · ${bytes(picked.size)} B · will be stored as s3://kb-corpus/2026/10/${picked.name}`
                  : 'One file per upload. Ingestion starts the moment it lands in S3.'}
              </p>

              <div id="kb-file-error" aria-live="polite">
                {formError ? (
                  <div
                    className="mt-3 border-l-2 px-3 py-2.5"
                    style={{ borderColor: accent, backgroundColor: rgba(accent, 0.07) }}
                  >
                    <p className="flex items-start gap-2 text-[13px] font-medium">
                      <Icons.AlertCircle className="mt-[2px] h-4 w-4 shrink-0" style={{ color: accent }} aria-hidden="true" />
                      <span>{formError.head}</span>
                    </p>
                    <p className="mt-1 pl-6 text-[12px] leading-[1.5]" style={{ color: neutral }}>
                      {formError.body}
                    </p>
                  </div>
                ) : null}
              </div>
            </form>

            {/* ingestion console — the running log */}
            <div className="border-t" style={{ borderColor: hair }}>
              <div className="flex items-center justify-between px-4 pt-3 pb-1.5">
                <h3 className="text-[11px] uppercase tracking-[0.14em]" style={{ fontFamily: MONO, color: neutral }}>
                  Ingestion log
                </h3>
                <span className="text-[11px]" style={{ fontFamily: MONO, color: neutral }}>
                  {busy ? 'running' : 'idle'}
                </span>
              </div>
              <div className="px-4 pb-4">
                <div
                  ref={logRef}
                  role="log"
                  aria-live="polite"
                  aria-label="Document ingestion log"
                  tabIndex={0}
                  className={`max-h-[148px] overflow-auto px-3 py-2.5 text-[11.5px] leading-[1.7] ${focusCls}`}
                  style={{ ...focusStyle, backgroundColor: ink, color: rgba(243, 238, 227, 0.86), fontFamily: MONO }}
                >
                  {log.map((l, i) => (
                    <p key={i} className="whitespace-pre-wrap break-words">
                      <span style={{ color: rgba(243, 238, 227, 0.45) }}>{l.t}</span>{'  '}
                      <span style={{ color: l.kind === 'err' ? accent : l.kind === 'ok' ? paper : rgba(243, 238, 227, 0.8) }}>
                        {l.text}
                      </span>
                    </p>
                  ))}
                  <p>
                    <span style={{ color: rgba(243, 238, 227, 0.45) }}>{busy ? 'ingest' : 'ready '}</span>{'  '}
                    <span style={{ color: accent }}>▸</span>{' '}
                    <span className="kb-caret" style={{ color: paper }} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* b-1-1 primary action */}
        <div data-wf="b-1-1" className="lg:col-span-4">
          <div className="flex h-full flex-col justify-between border px-4 py-4" style={{ borderColor: hair }}>
            <div>
              <p className="text-[11px] uppercase tracking-[0.14em]" style={{ fontFamily: MONO, color: neutral }}>
                Pipeline
              </p>
              <ol className="mt-2 space-y-1 text-[12px] leading-[1.5]" style={{ color: neutral }}>
                <li>1 · store in S3</li>
                <li>2 · parse to text</li>
                <li>3 · chunk 1200 / 180</li>
                <li>4 · embed gemini-embedding-001</li>
                <li>5 · index pgvector</li>
              </ol>
            </div>
            <Button
              type="submit"
              form="kb-upload"
              disabled={busy}
              className={`mt-5 inline-flex w-full items-center justify-center gap-2 px-4 py-3 text-[14px] font-medium ${focusCls} ${busy ? 'cursor-not-allowed opacity-70' : 'hover:opacity-90'} transition-opacity`}
              style={{ ...focusStyle, backgroundColor: ink, color: paper, borderRadius: brand.radius, fontFamily: MONO }}
            >
              {busy ? (
                <>
                  <Icons.Clock className="h-4 w-4" aria-hidden="true" />
                  Indexing…
                  <span className="kb-caret" aria-hidden="true" />
                </>
              ) : (
                <>
                  <Icons.Plus className="h-4 w-4" aria-hidden="true" />
                  Upload &amp; index
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* b-2-0 supported formats note */}
      <p data-wf="b-2-0" className="mt-4 max-w-[78ch] border-l-2 py-1 pl-3 text-[13px] leading-[1.6]" style={{ borderColor: rgba(ink, 0.25), color: neutral }}>
        Only PDF, Word (.docx), plain text and Markdown are supported. Scanned-image OCR is not available. Uploads are
        parsed, chunked and embedded automatically.
      </p>

      {/* b-3-0 documents table */}
      <section data-wf="b-3-0" className="mt-8">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 className="text-[20px] font-medium" style={{ fontFamily: MONO, letterSpacing: '-0.01em' }}>
            Documents ({docs.length})
          </h2>
          <p className="text-[12px]" style={{ fontFamily: MONO, color: neutral }}>
            {counts.ready} ready · {counts.processing} indexing · {counts.failed} failed · snapshot 09:41
          </p>
        </div>

        {docs.length > 0 ? (
          <div className="mt-3 overflow-x-auto border" style={{ borderColor: hair }}>
            <Table className="w-full min-w-[880px] border-collapse text-left">
              <THead>
                <TR className="border-b" style={{ borderColor: hair, backgroundColor: rgba(ink, 0.04) }}>
                  <TH data-wf="i-3-0-0" scope="col" className="px-3 py-2 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: neutral }}>Filename</TH>
                  <TH data-wf="i-3-0-1" scope="col" className="px-3 py-2 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: neutral }}>Content type</TH>
                  <TH data-wf="i-3-0-2" scope="col" className="px-3 py-2 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: neutral }}>Status</TH>
                  <TH data-wf="i-3-0-3" scope="col" className="px-3 py-2 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: neutral }}>Error message</TH>
                  <TH data-wf="i-3-0-4" scope="col" className="px-3 py-2 text-[11px] font-medium uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: neutral }}>Uploaded at</TH>
                  <TH data-wf="i-3-0-5" scope="col" className="px-3 py-2 text-right text-[11px] font-medium uppercase tracking-[0.1em]" style={{ fontFamily: MONO, color: neutral }}>Remove</TH>
                </TR>
              </THead>
              <TBody>
                {docs.map((d) => (
                  <TR
                    key={d.id}
                    className={`border-b align-top transition-colors hover:bg-black/[0.03] ${justAdded === d.id ? 'kb-row-in' : ''}`}
                    style={{ borderColor: hair }}
                  >
                    <TD className="px-3 py-2.5">
                      <span className="block text-[13px] font-medium" style={{ fontFamily: MONO }}>{d.filename}</span>
                      <span className="mt-0.5 flex items-center gap-2 text-[11px]" style={{ color: neutral }}>
                        <span>{d.chunks === null ? 'chunking…' : `${d.chunks} chunks`}</span>
                        <span
                          aria-hidden="true"
                          className="hidden h-[3px] w-10 sm:inline-block"
                          style={{ backgroundColor: rgba(ink, 0.1) }}
                        >
                          <span
                            className="block h-full"
                            style={{
                              width: `${Math.min(100, ((d.chunks || 0) / MAX_CHUNKS) * 100)}%`,
                              backgroundColor: d.status === 'failed' ? accent : ink,
                            }}
                          />
                        </span>
                        <span>· {human(d.bytes)} · {d.uploaded_by}</span>
                      </span>
                    </TD>
                    <TD className="px-3 py-2.5">
                      <span className="block text-[12px] font-medium" style={{ fontFamily: MONO }}>
                        {CT[d.content_type].short}
                      </span>
                      <span className="text-[10.5px]" style={{ fontFamily: MONO, color: neutral }}>
                        {CT[d.content_type].mime}
                      </span>
                    </TD>
                    <TD className="px-3 py-2.5">{statusChip(d)}</TD>
                    <TD className="max-w-[260px] px-3 py-2.5 text-[12px] leading-[1.5]" style={{ color: d.error_message ? ink : neutral }}>
                      {d.error_message || '—'}
                    </TD>
                    <TD className="whitespace-nowrap px-3 py-2.5 text-[12px]" style={{ fontFamily: MONO, color: neutral }}>
                      {stamp(d.uploaded_at)}
                    </TD>
                    <TD className="px-3 py-2.5 text-right">
                      <Button
                        type="button"
                        onClick={() => setPending(d)}
                        aria-label={`Remove ${d.filename} from the knowledge base`}
                        className={`inline-flex items-center gap-1.5 border px-2.5 py-1.5 text-[12px] transition-colors hover:bg-black/[0.06] ${focusCls}`}
                        style={{ ...focusStyle, borderColor: hair, backgroundColor: 'transparent', color: ink, borderRadius: brand.radius, fontFamily: MONO }}
                      >
                        <Icons.Trash className="h-3.5 w-3.5" aria-hidden="true" />
                        Remove
                      </Button>
                    </TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </div>
        ) : null}

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-[11.5px]" style={{ fontFamily: MONO, color: neutral }}>
            GET /api/admin/documents · {docs.length} rows · retrieval only reads documents marked ready
          </p>
          <Button
            type="button"
            onClick={() => navigate('admin-sessions')}
            className={`inline-flex items-center gap-1 text-[12px] underline underline-offset-4 ${focusCls}`}
            style={{ ...focusStyle, backgroundColor: 'transparent', color: ink, fontFamily: MONO }}
          >
            Conversation history
            <Icons.ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Button>
        </div>
      </section>

      {/* b-4-0 empty state */}
      {docs.length === 0 ? (
        <div data-wf="b-4-0" className="mt-4 border px-4 py-10" style={{ borderColor: hair, backgroundColor: rgba(ink, 0.02) }}>
          <p className="mb-4 text-center text-[11.5px]" style={{ fontFamily: MONO, color: neutral }}>
            CORPUS: 0 DOCUMENTS · 0 CHUNKS INDEXED
          </p>
          <Empty
            title="The knowledge base is empty"
            description="No documents yet — upload a PDF, .docx, .txt or .md file to start building the knowledge base."
            action={
              <Button
                type="button"
                onClick={() => fileRef.current && fileRef.current.focus()}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium ${focusCls}`}
                style={{ ...focusStyle, backgroundColor: ink, color: paper, borderRadius: brand.radius, fontFamily: MONO }}
              >
                <Icons.Upload className="h-4 w-4" aria-hidden="true" />
                Choose a file
              </Button>
            }
          />
        </div>
      ) : null}

      {/* b-5-0 remove confirmation */}
      {pending ? (
        <div
          data-wf="b-5-0"
          className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
          style={{ backgroundColor: rgba(ink, 0.55) }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) setPending(null); }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="kb-remove-title"
            aria-describedby="kb-remove-desc"
            className="kb-panel-in w-full max-w-[520px] border shadow-xl"
            style={{ backgroundColor: paper, borderColor: rgba(ink, 0.35), borderRadius: brand.radius }}
          >
            <div className="flex items-start justify-between border-b px-5 py-3" style={{ borderColor: hair }}>
              <h2 id="kb-remove-title" className="text-[15px] font-medium" style={{ fontFamily: MONO }}>
                Remove {pending.filename}?
              </h2>
              <Button
                type="button"
                onClick={() => setPending(null)}
                aria-label="Close without removing"
                className={`-mr-1 -mt-1 inline-flex h-8 w-8 items-center justify-center ${focusCls}`}
                style={{ ...focusStyle, backgroundColor: 'transparent', color: neutral, borderRadius: brand.radius }}
              >
                <Icons.X className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            <div className="px-5 py-4">
              <p id="kb-remove-desc" className="text-[13.5px] leading-[1.6]">
                Its indexed chunks will no longer be retrieved or cited. Answers already sent to visitors keep their
                citation text, but future questions will not see this document.
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 border-t pt-3 text-[12px]" style={{ borderColor: hair, fontFamily: MONO }}>
                <dt style={{ color: neutral }}>document_id</dt>
                <dd className="text-right">{pending.id}</dd>
                <dt style={{ color: neutral }}>chunks purged</dt>
                <dd className="text-right">{pending.chunks || 0}</dd>
                <dt style={{ color: neutral }}>s3_key</dt>
                <dd className="truncate text-right">{pending.s3_key}</dd>
              </dl>
            </div>
            <div className="flex flex-col-reverse gap-2 border-t px-5 py-3 sm:flex-row sm:justify-end" style={{ borderColor: hair }}>
              <Button
                data-wf="i-5-0-1"
                type="button"
                onClick={() => setPending(null)}
                className={`inline-flex items-center justify-center border px-4 py-2.5 text-[13px] transition-colors hover:bg-black/[0.05] ${focusCls}`}
                style={{ ...focusStyle, borderColor: rgba(ink, 0.3), backgroundColor: 'transparent', color: ink, borderRadius: brand.radius, fontFamily: MONO }}
              >
                Cancel
              </Button>
              <Button
                data-wf="i-5-0-0"
                ref={confirmRef}
                type="button"
                onClick={confirmRemove}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[13px] font-medium transition-opacity hover:opacity-90 ${focusCls}`}
                style={{ ...focusStyle, backgroundColor: ink, color: paper, borderRadius: brand.radius, fontFamily: MONO }}
              >
                <Icons.Trash className="h-4 w-4" style={{ color: accent }} aria-hidden="true" />
                Remove document
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
