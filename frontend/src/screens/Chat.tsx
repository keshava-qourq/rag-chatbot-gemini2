// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Textarea, Label, Badge, Table, THead, TBody, TR, TH, TD, Stat, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Check, X, ChevronRight, ChevronDown, User, FileText, Clock, ArrowRight, AlertCircle, CheckCircle } = Icons;

/* Chat — public grounded Q&A, "Amber Phosphor" on paper ground.
   Signature element: the retrieval trace strip (chunk ids + cosine bar glyphs). */

const MONO = `${brand.fontHeading}, "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`;
const SANS = `${brand.fontBody}, "IBM Plex Sans", system-ui, -apple-system, sans-serif`;

const hexToRgb = (hex) => {
  const h = String(hex).replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const alpha = (hex, a) => {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r},${g},${b},${a})`;
};
const lighten = (hex, amt) => {
  const [r, g, b] = hexToRgb(hex);
  const m = (v) => Math.round(v + (255 - v) * amt);
  return `rgb(${m(r)},${m(g)},${m(b)})`;
};

const INK = brand.primaryColor;
const ACCENT = brand.accentColor;
const NEUTRAL = brand.neutralColor;
const BG = brand.backgroundColor;
const SURFACE = lighten(BG, 0.5);
const SUNK = alpha(INK, 0.035);
const LINE = alpha(INK, 0.14);
const LINE_SOFT = alpha(INK, 0.08);
const R = brand.radius;

const CORPUS = {
  documents: 37,
  chunks: 1284,
  processing: 2,
  syncedAt: "09:14",
};

const REPLY_SLA = {
  content:
    "A P1 incident gets a first human response within 15 minutes, 24 hours a day. The on-call engineer must acknowledge in the paging tool and open a public status-page incident within 30 minutes of that acknowledgement. P2 is two business hours and P3 is the next business day.",
  citations: [
    { document: "Support-SLA-2026.docx", chunk_index: 7, locator: "§2.2 Response targets" },
    { document: "Support-SLA-2026.docx", chunk_index: 8, locator: "§2.3 Acknowledgement" },
  ],
  trace: [
    { id: "c_0147", document: "Support-SLA-2026.docx", chunk_index: 7, score: 0.891 },
    { id: "c_0148", document: "Support-SLA-2026.docx", chunk_index: 8, score: 0.843 },
    { id: "c_0310", document: "On-Call-Rota-2026-Q4.md", chunk_index: 2, score: 0.781 },
    { id: "c_0149", document: "Support-SLA-2026.docx", chunk_index: 9, score: 0.736 },
    { id: "c_0522", document: "Onboarding-Handbook.md", chunk_index: 18, score: 0.642 },
  ],
  latency: "1.8 s",
  status: "ok",
};

const REPLY_WEEKEND = {
  content:
    "The 15-minute target does not pause at weekends or on public holidays. Weekend cover runs on the follow-the-sun rota described in the SLA, and the escalation manager is paged automatically if an acknowledgement is missed twice in a row.",
  citations: [
    { document: "Support-SLA-2026.docx", chunk_index: 9, locator: "§2.4 Out of hours" },
    { document: "On-Call-Rota-2026-Q4.md", chunk_index: 2, locator: "Rota mechanics" },
  ],
  trace: [
    { id: "c_0149", document: "Support-SLA-2026.docx", chunk_index: 9, score: 0.864 },
    { id: "c_0310", document: "On-Call-Rota-2026-Q4.md", chunk_index: 2, score: 0.822 },
    { id: "c_0311", document: "On-Call-Rota-2026-Q4.md", chunk_index: 3, score: 0.754 },
    { id: "c_0147", document: "Support-SLA-2026.docx", chunk_index: 7, score: 0.711 },
  ],
  latency: "2.1 s",
  status: "ok",
};

const REPLY_SECURITY = {
  content:
    "The Q3 review raised two high-risk findings: long-lived object-storage access keys on the ingestion worker (SEC-114), and missing rate limits on the public chat endpoint (SEC-119). Both sit with the Platform team with a remediation date of 14 November 2026. Six medium findings were accepted for this quarter with compensating controls recorded in the appendix.",
  citations: [
    { document: "Security-Review-2026-Q3.pdf", chunk_index: 9, locator: "p. 4, High risk" },
    { document: "Security-Review-2026-Q3.pdf", chunk_index: 12, locator: "p. 7, Appendix B" },
  ],
  trace: [
    { id: "c_0903", document: "Security-Review-2026-Q3.pdf", chunk_index: 9, score: 0.907 },
    { id: "c_0906", document: "Security-Review-2026-Q3.pdf", chunk_index: 12, score: 0.858 },
    { id: "c_0904", document: "Security-Review-2026-Q3.pdf", chunk_index: 10, score: 0.802 },
    { id: "c_0188", document: "Support-SLA-2026.docx", chunk_index: 14, score: 0.694 },
  ],
  latency: "2.4 s",
  status: "ok",
};

const REPLY_VPN = {
  content:
    "VPN access is requested in the #it-access channel with your manager approving in the same thread. IT provisions the ACL entry within one business day. The runbook asks you to enrol a hardware security key first, because the VPN profile is bound to it. Contractor accounts expire after 90 days and have to be re-requested.",
  citations: [
    { document: "VPN-Access-Runbook.md", chunk_index: 3, locator: "Requesting access" },
    { document: "Onboarding-Handbook.md", chunk_index: 21, locator: "Accounts and keys" },
  ],
  trace: [
    { id: "c_0711", document: "VPN-Access-Runbook.md", chunk_index: 3, score: 0.912 },
    { id: "c_0712", document: "VPN-Access-Runbook.md", chunk_index: 4, score: 0.845 },
    { id: "c_0525", document: "Onboarding-Handbook.md", chunk_index: 21, score: 0.788 },
    { id: "c_0713", document: "VPN-Access-Runbook.md", chunk_index: 5, score: 0.729 },
    { id: "c_0401", document: "Remote-Work-Policy.txt", chunk_index: 6, score: 0.618 },
  ],
  latency: "1.6 s",
  status: "ok",
};

const REPLY_REMOTE = {
  content:
    "Core hours are 10:00 to 15:00 in your own local time. Anyone within commuting distance of the London or Lisbon office is asked for two in-office days a week, booked through the desk tool by the Friday before. Contracts signed as fully remote are exempt from the office days but still overlap core hours.",
  citations: [
    { document: "Remote-Work-Policy.txt", chunk_index: 5, locator: "Core hours" },
    { document: "Remote-Work-Policy.txt", chunk_index: 6, locator: "Office attendance" },
  ],
  trace: [
    { id: "c_0400", document: "Remote-Work-Policy.txt", chunk_index: 5, score: 0.884 },
    { id: "c_0401", document: "Remote-Work-Policy.txt", chunk_index: 6, score: 0.861 },
    { id: "c_0402", document: "Remote-Work-Policy.txt", chunk_index: 7, score: 0.743 },
    { id: "c_0520", document: "Onboarding-Handbook.md", chunk_index: 16, score: 0.655 },
  ],
  latency: "1.5 s",
  status: "ok",
};

const REPLY_ONBOARD = {
  content:
    "Day one starts at 09:30 with IT setup: laptop collection, hardware key enrolment and account provisioning. Your buddy runs a tour of the handbook at 11:00, and the first-week checklist expects the security training module to be finished by day three.",
  citations: [
    { document: "Onboarding-Handbook.md", chunk_index: 2, locator: "Day one" },
    { document: "Onboarding-Handbook.md", chunk_index: 3, locator: "First-week checklist" },
  ],
  trace: [
    { id: "c_0502", document: "Onboarding-Handbook.md", chunk_index: 2, score: 0.898 },
    { id: "c_0503", document: "Onboarding-Handbook.md", chunk_index: 3, score: 0.836 },
    { id: "c_0525", document: "Onboarding-Handbook.md", chunk_index: 21, score: 0.751 },
    { id: "c_0711", document: "VPN-Access-Runbook.md", chunk_index: 3, score: 0.667 },
  ],
  latency: "1.7 s",
  status: "ok",
};

const REPLY_UNKNOWN = {
  content:
    "I don't know — that isn't in the uploaded documents. Nothing scored above the 0.72 similarity cut-off, so there is nothing to ground an answer in and I won't guess. If this should be covered, ask an admin to add the document to the knowledge base.",
  citations: [],
  trace: [
    { id: "c_0310", document: "On-Call-Rota-2026-Q4.md", chunk_index: 2, score: 0.612 },
    { id: "c_0188", document: "Support-SLA-2026.docx", chunk_index: 14, score: 0.547 },
    { id: "c_0402", document: "Remote-Work-Policy.txt", chunk_index: 7, score: 0.491 },
  ],
  latency: "0.9 s",
  status: "no_match",
};

const MATCHERS = [
  { words: ["vpn", "network access", "tailscale"], reply: REPLY_VPN },
  { words: ["security", "pentest", "vulnerab", "sec-1", "review"], reply: REPLY_SECURITY },
  { words: ["remote", "office day", "core hours", "work from home", "hybrid"], reply: REPLY_REMOTE },
  { words: ["onboard", "first day", "day one", "new starter", "laptop"], reply: REPLY_ONBOARD },
  { words: ["weekend", "out of hours", "public holiday", "bank holiday"], reply: REPLY_WEEKEND },
  { words: ["p1", "p2", "sla", "response time", "ticket", "incident"], reply: REPLY_SLA },
];

const SEED_MESSAGES = [
  { id: "m1", role: "user", content: "What's the first response time for a P1 ticket?", created_at: "26 Oct 18:40" },
  { id: "m2", role: "assistant", created_at: "26 Oct 18:40", ...REPLY_SLA },
  { id: "m3", role: "user", content: "And if it comes in over the weekend?", created_at: "26 Oct 18:42" },
  { id: "m4", role: "assistant", created_at: "26 Oct 18:42", ...REPLY_WEEKEND },
  { id: "m5", role: "user", content: "Who is on call this weekend?", created_at: "26 Oct 18:45" },
  { id: "m6", role: "assistant", created_at: "26 Oct 18:45", ...REPLY_UNKNOWN },
  { id: "m7", role: "user", content: "Summarise the findings of the Q3 security review.", created_at: "26 Oct 18:47" },
  {
    id: "m8",
    role: "assistant",
    created_at: "26 Oct 18:47",
    status: "error",
    content: "",
    citations: [],
    trace: REPLY_SECURITY.trace,
    latency: "9.6 s",
    errorCode: "gemini-2.5-flash · 503 model_overloaded",
  },
];

const SUGGESTIONS = [
  "How do I request VPN access?",
  "What are the core remote working hours?",
  "What did the Q3 security review flag as high risk?",
];

const STYLES = `
@keyframes ap-blink { 0%,49% { opacity: 1 } 50%,100% { opacity: 0 } }
@keyframes ap-rise { from { opacity: 0; transform: translateY(5px) } to { opacity: 1; transform: none } }
@keyframes ap-sweep { 0% { transform: scaleX(0.05) } 50% { transform: scaleX(1) } 100% { transform: scaleX(0.05) } }
.ap-cursor { display:inline-block; width:0.48em; height:1em; background: var(--ap-accent); vertical-align:-0.14em; margin-left:3px; animation: ap-blink 1.05s steps(1) infinite; }
.ap-rise { animation: ap-rise .2s ease-out both; }
.ap-sweep { transform-origin: left center; animation: ap-sweep 1.1s ease-in-out infinite; }
.ap-focus:focus-visible { outline: 2px solid var(--ap-accent); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) {
  .ap-cursor, .ap-rise, .ap-sweep { animation: none !important; }
}
`;

function matchReply(text) {
  const q = text.toLowerCase();
  for (const m of MATCHERS) {
    if (m.words.some((w) => q.includes(w))) return m.reply;
  }
  return REPLY_UNKNOWN;
}

function nowLabel() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `Today ${p(d.getHours())}:${p(d.getMinutes())}`;
}

function ScoreBar({ score, used }) {
  const filled = Math.max(1, Math.round(score * 10));
  return (
    <span className="inline-flex gap-px align-middle" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 4,
            height: 10,
            backgroundColor:
              i < filled ? (used ? ACCENT : alpha(NEUTRAL, 0.5)) : alpha(INK, 0.1),
          }}
        />
      ))}
    </span>
  );
}

export default function Screen() {
  const navigate = useNavigate();
  const [messages, setMessages] = React.useState(SEED_MESSAGES);
  const [draft, setDraft] = React.useState("");
  const [phase, setPhase] = React.useState("idle"); // idle | retrieving | streaming
  const [pending, setPending] = React.useState(null); // { question, reply }
  const [streamed, setStreamed] = React.useState("");
  const [sessionId, setSessionId] = React.useState("s_7f3a91c4");
  const [resumed, setResumed] = React.useState(true);
  const [openTrace, setOpenTrace] = React.useState({ m6: true });
  const [announce, setAnnounce] = React.useState("");
  const idRef = React.useRef(100);
  const liveRef = React.useRef(null);

  const busy = phase !== "idle";
  const turns = messages.filter((m) => m.role === "user").length;

  // retrieval delay -> streaming
  React.useEffect(() => {
    if (phase !== "retrieving") return;
    const t = setTimeout(() => setPhase("streaming"), 750);
    return () => clearTimeout(t);
  }, [phase, pending]);

  // token streaming
  React.useEffect(() => {
    if (phase !== "streaming" || !pending) return;
    const words = pending.reply.content.split(" ");
    let i = 0;
    setStreamed("");
    const int = setInterval(() => {
      i += 2;
      setStreamed(words.slice(0, i).join(" "));
      if (i >= words.length) {
        clearInterval(int);
        const reply = pending.reply;
        idRef.current += 1;
        setMessages((prev) => [
          ...prev,
          { id: `m${idRef.current}`, role: "assistant", created_at: nowLabel(), ...reply },
        ]);
        setAnnounce(
          reply.status === "no_match"
            ? "No chunks passed the similarity threshold. The assistant answered that it does not know."
            : `Answer complete, grounded in ${reply.citations.length} source document chunk${reply.citations.length === 1 ? "" : "s"}.`
        );
        setPending(null);
        setStreamed("");
        setPhase("idle");
      }
    }, 42);
    return () => clearInterval(int);
  }, [phase, pending]);

  React.useEffect(() => {
    if (phase === "retrieving" && liveRef.current) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      liveRef.current.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
    }
  }, [phase]);

  function send(text) {
    const q = text.trim();
    if (!q || busy) return;
    idRef.current += 1;
    setMessages((prev) => [
      ...prev,
      { id: `m${idRef.current}`, role: "user", content: q, created_at: nowLabel() },
    ]);
    setDraft("");
    setResumed(false);
    setPending({ question: q, reply: matchReply(q) });
    setPhase("retrieving");
    setAnnounce("Embedding question and searching the index.");
  }

  function retry(messageId, question) {
    if (busy) return;
    setMessages((prev) => prev.filter((m) => m.id !== messageId));
    setPending({ question, reply: matchReply(question) });
    setPhase("retrieving");
    setAnnounce("Retrying the answer.");
  }

  function newThread() {
    const id = "s_" + Math.random().toString(16).slice(2, 10);
    setMessages([]);
    setSessionId(id);
    setDraft("");
    setPending(null);
    setPhase("idle");
    setResumed(false);
    setOpenTrace({});
    setAnnounce(`New thread started under session ${id}.`);
  }

  const labelCls = "uppercase tracking-[0.14em]";

  const traceStrip = (m) => {
    const open = !!openTrace[m.id];
    const used = (m.trace || []).filter((c) => c.score >= 0.72);
    return (
      <div style={{ border: `1px solid ${LINE}`, backgroundColor: SUNK, borderRadius: R }}>
        <button
          type="button"
          className="ap-focus w-full flex items-center gap-2 px-3 py-2 text-left"
          aria-expanded={open}
          onClick={() => setOpenTrace((p) => ({ ...p, [m.id]: !p[m.id] }))}
          style={{ fontFamily: MONO, fontSize: 11, color: NEUTRAL, borderRadius: R }}
        >
          {open ? (
            <ChevronDown className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          ) : (
            <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          )}
          <span className={labelCls} style={{ color: INK, fontWeight: 500 }}>
            Retrieval
          </span>
          <span className="tabular-nums truncate">
            top-k 5 · {used.length} ≥ 0.72 · {m.trace ? m.trace.length : 0} scored · {m.latency}
          </span>
        </button>
        {open && (
          <div className="ap-rise px-3 pb-3 overflow-x-auto" style={{ borderTop: `1px solid ${LINE_SOFT}` }}>
            <Table className="w-full" style={{ fontFamily: MONO, fontSize: 11 }}>
              <THead>
                <TR>
                  <TH className={`${labelCls} text-left py-2 pr-3`} style={{ color: NEUTRAL, fontWeight: 500, fontSize: 10 }}>
                    Chunk
                  </TH>
                  <TH className={`${labelCls} text-left py-2 pr-3`} style={{ color: NEUTRAL, fontWeight: 500, fontSize: 10 }}>
                    Document
                  </TH>
                  <TH className={`${labelCls} text-left py-2 pr-3`} style={{ color: NEUTRAL, fontWeight: 500, fontSize: 10 }}>
                    Cosine
                  </TH>
                  <TH className={`${labelCls} text-left py-2`} style={{ color: NEUTRAL, fontWeight: 500, fontSize: 10 }}>
                    Used
                  </TH>
                </TR>
              </THead>
              <TBody>
                {(m.trace || []).map((c) => {
                  const ok = c.score >= 0.72;
                  return (
                    <TR key={c.id} style={{ borderTop: `1px solid ${LINE_SOFT}` }}>
                      <TD className="py-1.5 pr-3 tabular-nums whitespace-nowrap" style={{ color: INK }}>
                        {c.id}
                      </TD>
                      <TD className="py-1.5 pr-3 whitespace-nowrap" style={{ color: ok ? INK : NEUTRAL }}>
                        {c.document} <span style={{ color: NEUTRAL }}>#{c.chunk_index}</span>
                      </TD>
                      <TD className="py-1.5 pr-3 whitespace-nowrap tabular-nums" style={{ color: ok ? INK : NEUTRAL }}>
                        <ScoreBar score={c.score} used={ok} />{" "}
                        <span className="ml-1">{c.score.toFixed(3)}</span>
                      </TD>
                      <TD className="py-1.5 whitespace-nowrap" style={{ color: ok ? INK : NEUTRAL }}>
                        {ok ? (
                          <span className="inline-flex items-center gap-1">
                            <Check className="h-3 w-3" aria-hidden="true" /> yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1">
                            <X className="h-3 w-3" aria-hidden="true" /> below cut
                          </span>
                        )}
                      </TD>
                    </TR>
                  );
                })}
              </TBody>
            </Table>
          </div>
        )}
      </div>
    );
  };

  const sources = (m) => {
    if (m.status === "no_match" || !m.citations || m.citations.length === 0) {
      return (
        <p className="mt-3 tabular-nums" style={{ fontFamily: MONO, fontSize: 11, color: NEUTRAL }}>
          <span className={labelCls} style={{ fontWeight: 500 }}>Sources</span> — none. Nothing in the
          corpus scored above 0.72, so no document is cited.
        </p>
      );
    }
    return (
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className={labelCls} style={{ fontFamily: MONO, fontSize: 10, color: NEUTRAL, fontWeight: 500 }}>
          Sources
        </span>
        <ul className="flex flex-wrap gap-2">
          {m.citations.map((c) => (
            <li key={`${c.document}-${c.chunk_index}`}>
              <Badge
                className="inline-flex items-center gap-1.5 px-2 py-1 tabular-nums"
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  borderRadius: R,
                  border: `1px solid ${LINE}`,
                  backgroundColor: SURFACE,
                  color: INK,
                }}
              >
                <FileText className="h-3 w-3" style={{ color: ACCENT }} aria-hidden="true" />
                {c.document}
                <span style={{ color: NEUTRAL }}>· chunk {c.chunk_index} · {c.locator}</span>
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const assistantHeader = (time, extra) => (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
      <span className={labelCls} style={{ fontFamily: MONO, fontSize: 11, color: INK, fontWeight: 500 }}>
        gemini-2.5-flash
      </span>
      <span className="tabular-nums" style={{ fontFamily: MONO, fontSize: 11, color: NEUTRAL }}>
        {time}
      </span>
      {extra}
    </div>
  );

  return (
    <div
      className="min-h-full w-full"
      style={{
        backgroundColor: BG,
        color: INK,
        fontFamily: SANS,
        "--ap-accent": ACCENT,
        "--ap-ink": INK,
      }}
    >
      <style>{STYLES}</style>

      <div className="sr-only" role="status" aria-live="polite">
        {announce}
      </div>

      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-8 py-8">
        {/* ── Header ─────────────────────────────────────────── */}
        <header className="pb-6" style={{ borderBottom: `1px solid ${LINE}` }}>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <p className={labelCls} style={{ fontFamily: MONO, fontSize: 11, color: NEUTRAL }}>
                Public knowledge base · no sign-in, no charge
              </p>
              <h1
                className="mt-2 text-[32px] sm:text-[38px] leading-[1.1]"
                style={{ fontFamily: MONO, fontWeight: 500, letterSpacing: "-0.02em" }}
              >
                Ask the corpus
              </h1>
              <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.6]" style={{ color: NEUTRAL }}>
                Every answer is built only from the {CORPUS.documents} documents your team has uploaded,
                with the retrieved chunks shown above it. If the answer isn&apos;t in them, the bot says
                so rather than guessing.
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-2">
              <span
                className="inline-flex items-center gap-2 px-2.5 py-1.5 tabular-nums"
                style={{ fontFamily: MONO, fontSize: 11, border: `1px solid ${LINE}`, backgroundColor: SURFACE, borderRadius: R }}
              >
                <span style={{ width: 7, height: 7, backgroundColor: ACCENT, display: "inline-block" }} aria-hidden="true" />
                <span className={labelCls} style={{ color: NEUTRAL }}>Session</span>
                <span style={{ color: INK }}>{sessionId}</span>
              </span>
              <Button
                type="button"
                variant="outline"
                className="ap-focus inline-flex items-center gap-2 px-3 py-2 min-h-[44px]"
                onClick={newThread}
                style={{ fontFamily: MONO, fontSize: 12, borderRadius: R, border: `1px solid ${LINE}`, backgroundColor: "transparent", color: INK }}
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
                Start a new thread
              </Button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_292px] gap-8 lg:gap-10 pt-6">
          {/* ── Conversation ─────────────────────────────────── */}
          <main className="min-w-0">
            <h2 className="sr-only">Conversation</h2>

            {resumed && messages.length > 0 && (
              <div
                className="ap-rise mb-6 flex flex-wrap items-center justify-between gap-3 px-3 py-2.5"
                style={{ border: `1px solid ${LINE}`, borderLeft: `2px solid ${alpha(NEUTRAL, 0.55)}`, backgroundColor: SUNK, borderRadius: R }}
              >
                <p className="flex items-center gap-2 tabular-nums" style={{ fontFamily: MONO, fontSize: 11, color: NEUTRAL }}>
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  Thread resumed — {Math.ceil(SEED_MESSAGES.length / 2)} turns restored from 26 Oct 18:40
                </p>
                <button
                  type="button"
                  className="ap-focus px-2 py-1"
                  onClick={() => setResumed(false)}
                  style={{ fontFamily: MONO, fontSize: 11, color: INK, textDecoration: "underline", textUnderlineOffset: 3 }}
                >
                  Hide
                </button>
              </div>
            )}

            {messages.length === 0 && !pending ? (
              <div>
                <Empty
                  title="Nothing asked in this thread yet"
                  description={`Ask anything covered by the ${CORPUS.documents} documents in the knowledge base. The question and its answer are saved against session ${sessionId}, so you can close the tab and pick the thread back up.`}
                />
                <div className="mt-6">
                  <p className={labelCls} style={{ fontFamily: MONO, fontSize: 10, color: NEUTRAL, fontWeight: 500 }}>
                    Try one of these
                  </p>
                  <ul className="mt-3 flex flex-col sm:flex-row flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <li key={s}>
                        <button
                          type="button"
                          className="ap-focus text-left px-3 py-2.5 min-h-[44px] w-full sm:w-auto transition-colors"
                          onClick={() => send(s)}
                          style={{
                            fontFamily: MONO,
                            fontSize: 12,
                            border: `1px solid ${LINE}`,
                            backgroundColor: SURFACE,
                            color: INK,
                            borderRadius: R,
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = SUNK)}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = SURFACE)}
                        >
                          <span style={{ color: ACCENT }} aria-hidden="true">›</span> {s}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <ol className="space-y-7">
                {messages.map((m) =>
                  m.role === "user" ? (
                    <li key={m.id} className="ap-rise">
                      <div className="pl-3" style={{ borderLeft: `2px solid ${ACCENT}` }}>
                        <div className="flex flex-wrap items-baseline gap-x-3">
                          <span className={labelCls} style={{ fontFamily: MONO, fontSize: 11, color: NEUTRAL, fontWeight: 500 }}>
                            You
                          </span>
                          <span className="tabular-nums" style={{ fontFamily: MONO, fontSize: 11, color: NEUTRAL }}>
                            {m.created_at}
                          </span>
                        </div>
                        <p className="mt-1 text-[16px] leading-[1.5] font-medium break-words max-w-[68ch]">
                          {m.content}
                        </p>
                      </div>
                    </li>
                  ) : (
                    <li key={m.id} className="ap-rise">
                      {m.status === "error" ? (
                        <div>
                          {assistantHeader(
                            m.created_at,
                            <span
                              className="inline-flex items-center gap-1.5 px-1.5 py-0.5"
                              style={{ fontFamily: MONO, fontSize: 10, border: `1px solid ${ACCENT}`, color: INK, borderRadius: R }}
                            >
                              <AlertCircle className="h-3 w-3" style={{ color: ACCENT }} aria-hidden="true" />
                              <span className={labelCls}>Answer failed</span>
                            </span>
                          )}
                          {traceStrip(m)}
                          <div
                            className="mt-3 px-3 py-3"
                            style={{ border: `1px solid ${LINE}`, borderLeft: `2px solid ${ACCENT}`, backgroundColor: SURFACE, borderRadius: R }}
                          >
                            <p className="tabular-nums" style={{ fontFamily: MONO, fontSize: 11, color: NEUTRAL }}>
                              {m.errorCode} · gave up after 2 retries · {m.latency}
                            </p>
                            <p className="mt-2 text-[15px] leading-[1.6] max-w-[66ch]">
                              Retrieval worked — five chunks came back from the index — but the model
                              never returned text. Nothing was answered from memory, so there is no
                              half-grounded answer here. Your question is still above; send it again
                              when you&apos;re ready.
                            </p>
                            <Button
                              type="button"
                              className="ap-focus mt-3 inline-flex items-center gap-2 px-3 py-2 min-h-[44px]"
                              onClick={() => retry(m.id, "Summarise the findings of the Q3 security review.")}
                              disabled={busy}
                              style={{
                                fontFamily: MONO,
                                fontSize: 12,
                                borderRadius: R,
                                backgroundColor: busy ? alpha(INK, 0.35) : INK,
                                color: BG,
                                border: "none",
                              }}
                            >
                              <ArrowRight className="h-4 w-4" aria-hidden="true" />
                              Retry this answer
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          {assistantHeader(
                            m.created_at,
                            m.status === "no_match" ? (
                              <span
                                className="tabular-nums px-1.5 py-0.5"
                                style={{ fontFamily: MONO, fontSize: 10, border: `1px solid ${LINE}`, color: NEUTRAL, borderRadius: R }}
                              >
                                RETRIEVAL: 0 CHUNKS ≥ 0.72
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1" style={{ fontFamily: MONO, fontSize: 10, color: NEUTRAL }}>
                                <CheckCircle className="h-3 w-3" aria-hidden="true" />
                                <span className={labelCls}>Grounded</span>
                              </span>
                            )
                          )}
                          {traceStrip(m)}
                          <p
                            className="mt-3 text-[15.5px] leading-[1.62] max-w-[68ch] break-words"
                            style={{ color: m.status === "no_match" ? NEUTRAL : INK }}
                          >
                            {m.content}
                          </p>
                          {sources(m)}
                        </div>
                      )}
                    </li>
                  )
                )}

                {pending && (
                  <li className="ap-rise" ref={liveRef}>
                    {assistantHeader(
                      nowLabel(),
                      <span className={labelCls} style={{ fontFamily: MONO, fontSize: 10, color: NEUTRAL }}>
                        {phase === "retrieving" ? "working" : "streaming"}
                      </span>
                    )}
                    {phase === "retrieving" ? (
                      <div
                        className="px-3 py-3 tabular-nums"
                        style={{ border: `1px solid ${LINE}`, backgroundColor: SUNK, fontFamily: MONO, fontSize: 11, color: NEUTRAL, borderRadius: R }}
                      >
                        <p>EMBED query → gemini-embedding-001 · 768d</p>
                        <p className="mt-1">SEARCH pgvector · cosine · top-k 5 · {CORPUS.chunks.toLocaleString()} chunks</p>
                        <p className="mt-1" style={{ color: INK }}>
                          CONTEXT {turns > 1 ? `${Math.min(turns - 1, 4)} prior turns + retrieved chunks` : "retrieved chunks only"}
                          <span className="ap-cursor" />
                        </p>
                        <span
                          className="ap-sweep block mt-2"
                          style={{ height: 2, backgroundColor: ACCENT, width: "100%" }}
                          aria-hidden="true"
                        />
                      </div>
                    ) : (
                      <>
                        {traceStrip({ id: "pending", trace: pending.reply.trace, latency: pending.reply.latency })}
                        <p className="mt-3 text-[15.5px] leading-[1.62] max-w-[68ch] break-words">
                          {streamed}
                          <span className="ap-cursor" />
                        </p>
                      </>
                    )}
                  </li>
                )}
              </ol>
            )}

            {/* ── Composer ───────────────────────────────────── */}
            <form
              className="mt-8"
              onSubmit={(e) => {
                e.preventDefault();
                send(draft);
              }}
            >
              <div
                className="px-3 pt-3 pb-3"
                style={{ border: `1px solid ${alpha(INK, 0.28)}`, backgroundColor: SURFACE, borderRadius: R }}
              >
                <Label
                  htmlFor="question"
                  className={labelCls}
                  style={{ fontFamily: MONO, fontSize: 10, color: NEUTRAL, fontWeight: 500 }}
                >
                  Ask a question
                </Label>
                <div className="mt-2 flex items-start gap-2">
                  <span aria-hidden="true" className="pt-2 select-none" style={{ fontFamily: MONO, color: ACCENT, fontSize: 16 }}>
                    ›
                  </span>
                  <Textarea
                    id="question"
                    data-wf="b-3-0"
                    rows={2}
                    value={draft}
                    disabled={busy}
                    onChange={(e) => setDraft(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        send(draft);
                      }
                    }}
                    placeholder="e.g. How long do contractor VPN accounts last?"
                    className="ap-focus w-full resize-none bg-transparent border-0 p-0 text-[15.5px] leading-[1.6] focus:ring-0"
                    style={{ fontFamily: SANS, color: INK, borderRadius: R, outline: "none" }}
                  />
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3" style={{ borderTop: `1px solid ${LINE_SOFT}`, paddingTop: 12 }}>
                  <p className="tabular-nums" style={{ fontFamily: MONO, fontSize: 11, color: NEUTRAL }}>
                    Enter sends · Shift + Enter for a new line · {turns} turns in session
                  </p>
                  <Button
                    type="submit"
                    disabled={busy || draft.trim().length === 0}
                    className="ap-focus inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] transition-opacity"
                    style={{
                      fontFamily: MONO,
                      fontSize: 13,
                      fontWeight: 500,
                      borderRadius: R,
                      border: "none",
                      backgroundColor: busy || draft.trim().length === 0 ? alpha(INK, 0.3) : INK,
                      color: BG,
                      cursor: busy || draft.trim().length === 0 ? "not-allowed" : "pointer",
                    }}
                  >
                    {busy ? (
                      <>
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        {phase === "retrieving" ? "Retrieving…" : "Answering…"}
                      </>
                    ) : (
                      <>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        Ask the corpus
                      </>
                    )}
                  </Button>
                </div>
              </div>
              <p className="mt-2 text-[13px] leading-[1.5]" style={{ color: NEUTRAL }}>
                No account, no email, no payment. The session ID above is the only thing that links
                these turns together.
              </p>
            </form>
          </main>

          {/* ── Rail ─────────────────────────────────────────── */}
          <aside className="min-w-0 space-y-5">
            <Card style={{ backgroundColor: SURFACE, border: `1px solid ${LINE}`, borderRadius: R, boxShadow: "none" }}>
              <CardHeader className="px-4 pt-4 pb-2">
                <CardTitle
                  className={labelCls}
                  style={{ fontFamily: MONO, fontSize: 11, fontWeight: 500, color: INK }}
                >
                  <h2 style={{ font: "inherit", margin: 0 }}>Index</h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-1 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Stat
                    className="tabular-nums"
                    label="Documents"
                    value={String(CORPUS.documents)}
                    hint="PDF · docx · txt · md"
                  />
                  <Stat
                    className="tabular-nums"
                    label="Chunks"
                    value={CORPUS.chunks.toLocaleString()}
                    hint="pgvector · cosine"
                  />
                </div>
                <div style={{ borderTop: `1px solid ${LINE_SOFT}` }} />
                <p className="flex items-start gap-2 tabular-nums" style={{ fontFamily: MONO, fontSize: 11, color: NEUTRAL }}>
                  <Clock className="h-3.5 w-3.5 mt-px shrink-0" aria-hidden="true" />
                  <span>
                    Snapshot {CORPUS.syncedAt} · {CORPUS.processing} documents still embedding, so their
                    content can&apos;t be cited yet.
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card style={{ backgroundColor: "transparent", border: `1px solid ${LINE}`, borderRadius: R, boxShadow: "none" }}>
              <CardHeader className="px-4 pt-4 pb-2">
                <CardTitle className={labelCls} style={{ fontFamily: MONO, fontSize: 11, fontWeight: 500, color: INK }}>
                  <h2 style={{ font: "inherit", margin: 0 }}>Answer settings</h2>
                </CardTitle>
                <CardDescription className="text-[13px] leading-[1.5]" style={{ color: NEUTRAL }}>
                  Fixed for everyone. Shown so you can read the answer in context.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-1">
                <dl className="tabular-nums" style={{ fontFamily: MONO, fontSize: 11 }}>
                  {[
                    ["Answers", "gemini-2.5-flash"],
                    ["Embeddings", "gemini-embedding-001"],
                    ["Top-k", "5 chunks"],
                    ["Min score", "0.72 cosine"],
                    ["Context", "last 4 turns"],
                    ["Fallback", "“I don't know”"],
                  ].map(([k, v], i) => (
                    <div
                      key={k}
                      className="flex items-baseline justify-between gap-3 py-1.5"
                      style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE_SOFT}` }}
                    >
                      <dt className={labelCls} style={{ color: NEUTRAL, fontSize: 10 }}>{k}</dt>
                      <dd className="text-right" style={{ color: INK }}>{v}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>

            <Card style={{ backgroundColor: "transparent", border: `1px solid ${LINE}`, borderRadius: R, boxShadow: "none" }}>
              <CardHeader className="px-4 pt-4 pb-2">
                <CardTitle className={labelCls} style={{ fontFamily: MONO, fontSize: 11, fontWeight: 500, color: INK }}>
                  <h2 style={{ font: "inherit", margin: 0 }}>Staff only</h2>
                </CardTitle>
                <CardDescription className="text-[13px] leading-[1.55]" style={{ color: NEUTRAL }}>
                  Adding or removing documents is restricted to admins with the knowledge-base
                  password. Ask whoever maintains the corpus for access.
                </CardDescription>
              </CardHeader>
              <CardFooter className="px-4 pb-4 pt-1">
                <Button
                  type="button"
                  variant="outline"
                  className="ap-focus w-full inline-flex items-center justify-center gap-2 px-3 py-2 min-h-[44px]"
                  onClick={() => navigate("admin-login")}
                  style={{ fontFamily: MONO, fontSize: 12, borderRadius: R, border: `1px solid ${alpha(INK, 0.3)}`, backgroundColor: "transparent", color: INK }}
                >
                  <User className="h-4 w-4" aria-hidden="true" />
                  Admin sign-in
                </Button>
              </CardFooter>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
