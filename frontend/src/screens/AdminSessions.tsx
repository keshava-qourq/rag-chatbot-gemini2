// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, CardHeader, CardTitle, CardContent, CardFooter, Input, Label, Badge, Table, THead, TBody, TR, TH, TD, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Search, X, FileText, Clock, Trash, AlertCircle, CheckCircle } = Icons;

const SESSIONS = [
  { id: 'a7f3-2b91', messages: 6, created_at: '27 Oct 2026 13:58', last_active_at: '27 Oct 2026 14:05' },
  { id: '4c20-ee17', messages: 12, created_at: '27 Oct 2026 11:24', last_active_at: '27 Oct 2026 12:40' },
  { id: '9b81-05da', messages: 2, created_at: '27 Oct 2026 09:11', last_active_at: '27 Oct 2026 09:13' },
  { id: 'c4d9-77ae', messages: 24, created_at: '26 Oct 2026 16:47', last_active_at: '27 Oct 2026 08:02', hold: true },
  { id: '1e55-ab3c', messages: 0, created_at: '26 Oct 2026 15:30', last_active_at: '26 Oct 2026 15:30', clearedAt: '26 Oct 2026 15:52' },
  { id: 'f017-6d42', messages: 8, created_at: '25 Oct 2026 19:05', last_active_at: '25 Oct 2026 19:51' },
  { id: '7a2b-9c10', messages: 3, created_at: '24 Oct 2026 10:18', last_active_at: '24 Oct 2026 10:26' },
  { id: '2d6f-bb84', messages: 17, created_at: '23 Oct 2026 14:02', last_active_at: '23 Oct 2026 16:38' },
  { id: '8e44-31f7', messages: 1, created_at: '22 Oct 2026 08:55', last_active_at: '22 Oct 2026 08:55' },
  { id: 'b903-5caa', messages: 9, created_at: '21 Oct 2026 12:12', last_active_at: '21 Oct 2026 13:04' },
];

const TRANSCRIPTS = {
  'a7f3-2b91': [
    { role: 'You', time: '14:02', content: 'What is the refund window for hardware orders?' },
    { role: 'Assistant', time: '14:02', content: 'Hardware orders can be returned within 30 days.', citations: ['returns-policy-2026.pdf · p.3'] },
    { role: 'You', time: '14:04', content: 'Does that cover a dock bought on a finance plan?' },
    { role: 'Assistant', time: '14:04', content: 'The documents describe standard hardware returns only. Financed accessories are not mentioned, so I don’t know.', citations: [] },
    { role: 'You', time: '14:05', content: 'Who do I email to start the return?' },
    { role: 'Assistant', time: '14:05', content: 'Returns are started by emailing support@northwind-labs.io with the order reference and a photo of the packaging.', citations: ['returns-policy-2026.pdf · p.4', 'support-handbook.docx · §2'] },
  ],
  '4c20-ee17': [
    { role: 'You', time: '12:36', content: 'How long does laptop provisioning take for a new starter?' },
    { role: 'Assistant', time: '12:37', content: 'IT ships a provisioned laptop within three working days of the start-date confirmation reaching the people team.', citations: ['onboarding-runbook.md · §1.2'] },
    { role: 'You', time: '12:40', content: 'And if the starter is remote in Ireland?' },
    { role: 'Assistant', time: '12:40', content: 'Remote EU starters are shipped from the Dublin depot, which the runbook lists as five working days.', citations: ['onboarding-runbook.md · §1.4'] },
  ],
  '9b81-05da': [
    { role: 'You', time: '09:11', content: 'Do contractors get VPN access on day one?' },
    { role: 'Assistant', time: '09:13', content: 'Contractors receive VPN credentials once the security induction is signed, which is scheduled in the first week rather than on day one.', citations: ['security-policy-v7.pdf · p.11'] },
  ],
  'c4d9-77ae': [
    { role: 'You', time: '07:58', content: 'Summarise the root cause of the 14 Oct indexing outage.' },
    { role: 'Assistant', time: '07:59', content: 'The postmortem records a pgvector index rebuild that held a table lock for 42 minutes, blocking ingestion writes.', citations: ['postmortem-2026-10-14.md · §3'] },
    { role: 'You', time: '08:02', content: 'What remediation was agreed?' },
    { role: 'Assistant', time: '08:02', content: 'Two actions: build indexes concurrently, and alert when ingestion queue depth exceeds 50 documents.', citations: ['postmortem-2026-10-14.md · §6'] },
  ],
  '1e55-ab3c': [],
  'f017-6d42': [
    { role: 'You', time: '19:44', content: 'How much parental leave is paid in full?' },
    { role: 'Assistant', time: '19:45', content: 'The handbook sets 26 weeks at full pay for the primary carer and 8 weeks at full pay for the secondary carer.', citations: ['people-handbook-2026.docx · §9.1'] },
    { role: 'You', time: '19:51', content: 'Can it be taken in blocks?' },
    { role: 'Assistant', time: '19:51', content: 'Yes — leave may be split into a maximum of three blocks within the first 18 months.', citations: ['people-handbook-2026.docx · §9.3'] },
  ],
  '7a2b-9c10': [
    { role: 'You', time: '10:18', content: 'What is the per-night hotel limit for travel to Berlin?' },
    { role: 'Assistant', time: '10:19', content: 'The expense policy caps European city stays at €180 per night excluding breakfast.', citations: ['expense-policy-2026.pdf · p.6'] },
    { role: 'You', time: '10:26', content: 'Does that include airport transfers?' },
    { role: 'Assistant', time: '10:26', content: 'Transfers are claimed separately under ground travel, with no stated cap.', citations: ['expense-policy-2026.pdf · p.7'] },
  ],
  '2d6f-bb84': [
    { role: 'You', time: '16:31', content: 'What are the API rate limits on the Growth plan?' },
    { role: 'Assistant', time: '16:32', content: 'Growth allows 600 requests per minute per key, bursting to 1,200 for 30 seconds.', citations: ['api-reference-v4.md · §Limits'] },
    { role: 'You', time: '16:38', content: 'What status code is returned when I exceed it?' },
    { role: 'Assistant', time: '16:38', content: 'A 429 with a Retry-After header in seconds.', citations: ['api-reference-v4.md · §Errors'] },
  ],
  '8e44-31f7': [
    { role: 'You', time: '08:55', content: 'What is the share-option vesting cliff for the 2024 grant?' },
    { role: 'Assistant', time: '08:55', content: 'I don’t know — the uploaded documents do not cover share-option grants.', citations: [] },
  ],
  'b903-5caa': [
    { role: 'You', time: '12:58', content: 'How long is the warranty on the Meridian dock?' },
    { role: 'Assistant', time: '12:59', content: 'Two years from the delivery date, covering manufacturing defects only.', citations: ['warranty-terms.pdf · p.2'] },
    { role: 'You', time: '13:04', content: 'Is accidental damage covered?' },
    { role: 'Assistant', time: '13:04', content: 'No — accidental damage is explicitly excluded from the warranty terms.', citations: ['warranty-terms.pdf · p.3'] },
  ],
};

const TOTAL_SESSIONS = 138;
const TOTAL_TURNS = '1,942';

const hexToRgb = (hex) => {
  const h = String(hex).replace('#', '');
  const v = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)];
};
const mix = (a, b, t) => {
  const A = hexToRgb(a);
  const B = hexToRgb(b);
  return `rgb(${Math.round(A[0] * (1 - t) + B[0] * t)}, ${Math.round(A[1] * (1 - t) + B[1] * t)}, ${Math.round(A[2] * (1 - t) + B[2] * t)})`;
};
const withAlpha = (hex, a) => {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const CSS = `
@keyframes phBlink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
@keyframes phIn { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:none} }
@keyframes phFade { from{opacity:0} to{opacity:1} }
.ph-cursor{ animation: phBlink 1.05s steps(1,end) infinite; }
.ph-in{ animation: phIn .24s cubic-bezier(.2,.7,.3,1) both; }
.ph-fade{ animation: phFade .18s ease-out both; }
.ph-focus:focus-visible{ outline: 2px solid var(--ph-ring); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce){ .ph-cursor,.ph-in,.ph-fade{ animation: none !important; } }
`;

export default function Screen() {
  const ink = brand.primaryColor;
  const paper = brand.backgroundColor;
  const neutral = brand.neutralColor;
  const accent = brand.accentColor;

  const accentDeep = mix(accent, ink, 0.28);
  const accentLit = mix(accent, paper, 0.3);
  const hair = withAlpha(ink, 0.14);
  const hairSoft = withAlpha(ink, 0.08);
  const hairDark = withAlpha(paper, 0.16);
  const cardSurface = mix(paper, ink, 0.02);
  const stripSurface = mix(paper, ink, 0.05);

  const mono = { fontFamily: brand.fontHeading };
  const nums = { fontVariantNumeric: 'tabular-nums' };

  const [query, setQuery] = React.useState('');
  const [selectedId, setSelectedId] = React.useState('a7f3-2b91');
  const [panelState, setPanelState] = React.useState('ready'); // loading | ready | error
  const [cleared, setCleared] = React.useState({});
  const [modalOpen, setModalOpen] = React.useState(false);
  const [clearing, setClearing] = React.useState(false);
  const [holdError, setHoldError] = React.useState(null);

  const loadTimer = React.useRef(null);
  const clearTimer = React.useRef(null);
  const confirmRef = React.useRef(null);
  const triggerRef = React.useRef(null);
  const searchRef = React.useRef(null);

  React.useEffect(() => () => {
    if (loadTimer.current) clearTimeout(loadTimer.current);
    if (clearTimer.current) clearTimeout(clearTimer.current);
  }, []);

  React.useEffect(() => {
    if (modalOpen && confirmRef.current) confirmRef.current.focus();
  }, [modalOpen]);

  const selectSession = (id) => {
    setSelectedId(id);
    setPanelState('loading');
    if (loadTimer.current) clearTimeout(loadTimer.current);
    loadTimer.current = setTimeout(() => setPanelState('ready'), 420);
  };

  const sessions = SESSIONS.map((s) => {
    const c = cleared[s.id];
    return c ? { ...s, messages: 0, clearedAt: c.at, clearedTurns: c.turns } : s;
  });

  const q = query.trim().toLowerCase();
  const filtered = q ? sessions.filter((s) => s.id.toLowerCase().includes(q)) : sessions;
  const selected = sessions.find((s) => s.id === selectedId) || sessions[0];
  const isCleared = Boolean(selected.clearedAt);
  const turns = isCleared ? [] : (TRANSCRIPTS[selected.id] || []);

  const closeModal = () => {
    if (clearing) return;
    setModalOpen(false);
    setHoldError(null);
    if (triggerRef.current) triggerRef.current.focus();
  };

  const confirmClear = () => {
    setClearing(true);
    setHoldError(null);
    if (clearTimer.current) clearTimeout(clearTimer.current);
    clearTimer.current = setTimeout(() => {
      setClearing(false);
      if (selected.hold) {
        setHoldError({
          code: '423 Locked',
          id: selected.id,
        });
        return;
      }
      setCleared((prev) => ({
        ...prev,
        [selected.id]: { at: '27 Oct 2026 14:12', turns: selected.messages },
      }));
      setModalOpen(false);
      if (triggerRef.current) triggerRef.current.focus();
    }, 760);
  };

  const headLabel = `Session ${selected.id} · ${selected.messages} message${selected.messages === 1 ? '' : 's'} · last active ${selected.last_active_at}`;

  return (
    <div
      className="min-h-full w-full"
      style={{
        backgroundColor: paper,
        color: ink,
        fontFamily: brand.fontBody,
        '--ph-ring': accentDeep,
      }}
    >
      <style>{CSS}</style>

      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 py-6 sm:py-8">

        {/* Row 1 — page title */}
        <header data-wf="b-0-0" className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1
              className="text-[30px] sm:text-[34px] leading-[1.15] font-medium tracking-tight"
              style={mono}
            >
              Conversation History
            </h1>
            <p className="mt-2 text-sm leading-6 max-w-[68ch]" style={{ color: neutral }}>
              Stored chat threads, grouped by anonymous session ID. Clearing a session deletes its turns
              and drops them from follow-up context on the public chat page.
            </p>
          </div>
          <dl
            className="flex items-center gap-5 text-xs shrink-0"
            style={{ ...mono, ...nums, color: neutral }}
          >
            <div className="flex flex-col">
              <dt className="uppercase tracking-[0.12em] opacity-70">Sessions</dt>
              <dd className="text-base mt-0.5" style={{ color: ink }}>{TOTAL_SESSIONS}</dd>
            </div>
            <div aria-hidden="true" style={{ width: 1, height: 28, backgroundColor: hair }} />
            <div className="flex flex-col">
              <dt className="uppercase tracking-[0.12em] opacity-70">Stored turns</dt>
              <dd className="text-base mt-0.5" style={{ color: ink }}>{TOTAL_TURNS}</dd>
            </div>
            <div aria-hidden="true" style={{ width: 1, height: 28, backgroundColor: hair }} />
            <div className="flex flex-col">
              <dt className="uppercase tracking-[0.12em] opacity-70">Retention</dt>
              <dd className="text-base mt-0.5" style={{ color: ink }}>Indefinite</dd>
            </div>
          </dl>
        </header>

        <div className="my-6" style={{ height: 1, backgroundColor: hair }} aria-hidden="true" />

        {/* Row 2 — search */}
        <form
          data-wf="b-1-0"
          onSubmit={(e) => e.preventDefault()}
          role="search"
          className="w-full"
        >
          <Label
            htmlFor="session-search"
            className="block text-[11px] uppercase tracking-[0.14em]"
            style={{ ...mono, color: neutral }}
          >
            Search by session ID
          </Label>
          <div className="relative mt-2">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4"
              style={{ color: neutral }}
              aria-hidden="true"
            />
            <Input
              id="session-search"
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="a7f3-2b91"
              autoComplete="off"
              className="ph-focus w-full h-11 pl-9 pr-10 text-sm"
              style={{
                ...mono,
                ...nums,
                backgroundColor: cardSurface,
                border: `1px solid ${hair}`,
                borderRadius: brand.radius,
                color: ink,
              }}
            />
            {query ? (
              <button
                type="button"
                aria-label="Clear the session ID search"
                onClick={() => { setQuery(''); if (searchRef.current) searchRef.current.focus(); }}
                className="ph-focus absolute right-1.5 top-1/2 -translate-y-1/2 h-8 w-8 inline-flex items-center justify-center transition-colors"
                style={{ borderRadius: brand.radius, color: neutral }}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : null}
          </div>
          <p className="mt-2 text-xs" style={{ ...nums, color: neutral }}>
            {q
              ? `${filtered.length} of ${TOTAL_SESSIONS} sessions match “${query.trim()}”.`
              : `Prefix match on chat_sessions.id — try “a7f” or “2d6f”.`}
          </p>
        </form>

        {/* Row 3 — table + transcript */}
        <div className="mt-6 grid grid-cols-12 gap-4 lg:gap-6 items-start">

          <section data-wf="b-2-0" className="col-span-12 lg:col-span-7">
            <Card
              style={{
                backgroundColor: cardSurface,
                border: `1px solid ${hair}`,
                borderRadius: brand.radius,
                boxShadow: 'none',
              }}
            >
              <CardHeader
                className="flex flex-row flex-wrap items-center justify-between gap-3 py-3"
                style={{ backgroundColor: stripSurface, borderBottom: `1px solid ${hair}` }}
              >
                <CardTitle className="text-sm font-medium" style={{ ...mono, ...nums, color: ink }}>
                  Chat sessions ({TOTAL_SESSIONS})
                </CardTitle>
                <Badge
                  className="inline-flex items-center gap-1.5 text-[11px] font-normal px-2 py-1"
                  style={{
                    ...mono,
                    ...nums,
                    backgroundColor: 'transparent',
                    border: `1px solid ${hair}`,
                    borderRadius: brand.radius,
                    color: neutral,
                  }}
                >
                  <Clock className="h-3 w-3" aria-hidden="true" />
                  Counts synced 14:07 · live sync paused
                </Badge>
              </CardHeader>

              <CardContent className="p-0">
                {filtered.length === 0 ? (
                  <div className="px-4 py-10">
                    <Empty
                      title="No session matches that ID"
                      description={`Nothing in chat_sessions starts with “${query.trim()}”. Session IDs are four hex characters, a hyphen, then four more — for example 4c20-ee17.`}
                      action={
                        <Button
                          type="button"
                          onClick={() => { setQuery(''); if (searchRef.current) searchRef.current.focus(); }}
                          className="ph-focus h-9 px-3 text-xs"
                          style={{
                            ...mono,
                            backgroundColor: 'transparent',
                            border: `1px solid ${hair}`,
                            borderRadius: brand.radius,
                            color: ink,
                          }}
                        >
                          Show all 138 sessions
                        </Button>
                      }
                    />
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table className="w-full text-sm" style={nums}>
                      <THead>
                        <TR style={{ borderBottom: `1px solid ${hair}` }}>
                          <TH
                            data-wf="i-2-0-0"
                            scope="col"
                            className="text-left text-[11px] uppercase tracking-[0.12em] font-medium py-2.5"
                            style={{ ...mono, color: neutral }}
                          >
                            Session ID
                          </TH>
                          <TH
                            data-wf="i-2-0-1"
                            scope="col"
                            className="text-right text-[11px] uppercase tracking-[0.12em] font-medium py-2.5"
                            style={{ ...mono, color: neutral }}
                          >
                            Messages
                          </TH>
                          <TH
                            data-wf="i-2-0-2"
                            scope="col"
                            className="text-left text-[11px] uppercase tracking-[0.12em] font-medium py-2.5 whitespace-nowrap"
                            style={{ ...mono, color: neutral }}
                          >
                            Created at
                          </TH>
                          <TH
                            data-wf="i-2-0-3"
                            scope="col"
                            className="text-left text-[11px] uppercase tracking-[0.12em] font-medium py-2.5 whitespace-nowrap"
                            style={{ ...mono, color: neutral }}
                          >
                            Last active at
                          </TH>
                        </TR>
                      </THead>
                      <TBody>
                        {filtered.map((s) => {
                          const active = s.id === selected.id;
                          const rowCleared = Boolean(s.clearedAt);
                          return (
                            <TR
                              key={s.id}
                              style={{
                                borderBottom: `1px solid ${hairSoft}`,
                                backgroundColor: active ? withAlpha(accent, 0.07) : 'transparent',
                              }}
                            >
                              <TD className="py-0 pl-0">
                                <button
                                  type="button"
                                  onClick={() => selectSession(s.id)}
                                  aria-current={active ? 'true' : undefined}
                                  className="ph-focus flex w-full items-center gap-2 py-3 pl-3 pr-2 text-left transition-colors"
                                  style={{ ...mono, color: ink, borderRadius: brand.radius }}
                                >
                                  <span
                                    aria-hidden="true"
                                    style={{ color: active ? accentDeep : withAlpha(ink, 0.25), width: 10 }}
                                  >
                                    {active ? '▸' : '·'}
                                  </span>
                                  <span className={active ? 'font-medium' : ''}>{s.id}</span>
                                  {s.hold ? (
                                    <span
                                      className="text-[10px] uppercase tracking-[0.1em] px-1.5 py-0.5"
                                      style={{ border: `1px solid ${hair}`, color: neutral }}
                                    >
                                      Hold
                                    </span>
                                  ) : null}
                                  <span className="sr-only">View transcript</span>
                                </button>
                              </TD>
                              <TD className="py-3 text-right whitespace-nowrap" style={{ ...mono, color: ink }}>
                                <span>{s.messages}</span>
                                {rowCleared ? (
                                  <span
                                    className="ml-2 text-[10px] uppercase tracking-[0.1em] px-1.5 py-0.5"
                                    style={{ border: `1px solid ${hair}`, color: neutral }}
                                  >
                                    Cleared
                                  </span>
                                ) : null}
                              </TD>
                              <TD className="py-3 whitespace-nowrap text-[13px]" style={{ color: neutral }}>
                                {s.created_at}
                              </TD>
                              <TD className="py-3 whitespace-nowrap text-[13px]" style={{ color: neutral }}>
                                {s.last_active_at}
                              </TD>
                            </TR>
                          );
                        })}
                      </TBody>
                    </Table>
                  </div>
                )}
              </CardContent>

              {filtered.length > 0 ? (
                <CardFooter
                  className="py-2.5 text-xs flex items-center justify-between"
                  style={{ ...mono, ...nums, color: neutral, borderTop: `1px solid ${hair}` }}
                >
                  <span>Showing {filtered.length} of {TOTAL_SESSIONS} · ordered by last_active_at desc</span>
                  <span className="hidden sm:inline opacity-80">page 1</span>
                </CardFooter>
              ) : null}
            </Card>
          </section>

          {/* Transcript console */}
          <section
            data-wf="b-2-1"
            className="col-span-12 lg:col-span-5"
            aria-labelledby="transcript-heading"
          >
            <div
              style={{
                backgroundColor: ink,
                border: `1px solid ${ink}`,
                borderRadius: brand.radius,
                color: paper,
              }}
            >
              <div className="px-4 py-3" style={{ borderBottom: `1px solid ${hairDark}` }}>
                <h2
                  id="transcript-heading"
                  className="text-[13px] leading-5 font-medium break-words"
                  style={{ ...mono, ...nums, color: paper }}
                >
                  {headLabel}
                </h2>
                <p className="mt-1 text-[11px]" style={{ ...mono, ...nums, color: withAlpha(paper, 0.6) }}>
                  created {selected.created_at}
                  {isCleared ? ' · history cleared' : ` · showing latest ${turns.length} of ${selected.messages} turns`}
                </p>
              </div>

              <div className="px-4 py-4 min-h-[280px]">
                {panelState === 'loading' ? (
                  <div className="ph-fade text-[12px] leading-6" style={{ ...mono, color: withAlpha(paper, 0.72) }}>
                    <p>GET /api/sessions/{selected.id}/messages</p>
                    <p style={{ color: accentLit }}>reading stored turns…</p>
                    <p aria-hidden="true">
                      <span className="ph-cursor" style={{ backgroundColor: accentLit, display: 'inline-block', width: 8, height: 15, verticalAlign: '-2px' }} />
                    </p>
                    <span className="sr-only">Loading transcript</span>
                  </div>
                ) : panelState === 'error' ? (
                  <div className="ph-fade" style={{ ...mono }}>
                    <p className="flex items-start gap-2 text-[12px] leading-6" style={{ color: accentLit }}>
                      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>Transcript did not load — the messages service returned 503.</span>
                    </p>
                    <p className="mt-2 text-[12px] leading-6" style={{ color: withAlpha(paper, 0.7) }}>
                      Nothing was deleted. The thread is still stored against {selected.id}.
                    </p>
                    <Button
                      type="button"
                      onClick={() => selectSession(selected.id)}
                      className="ph-focus mt-4 h-9 px-3 text-xs"
                      style={{
                        ...mono,
                        backgroundColor: 'transparent',
                        border: `1px solid ${hairDark}`,
                        borderRadius: brand.radius,
                        color: paper,
                      }}
                    >
                      Load transcript again
                    </Button>
                  </div>
                ) : isCleared ? (
                  <div className="ph-fade" role="status" style={{ ...mono }}>
                    <p className="flex items-start gap-2 text-[12px] leading-6" style={{ color: paper }}>
                      <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                      <span>
                        History cleared — {selected.clearedTurns != null ? selected.clearedTurns : 'all'} turns deleted {selected.clearedAt}.
                      </span>
                    </p>
                    <p className="mt-3 text-[12px] leading-6" style={{ color: withAlpha(paper, 0.65) }}>
                      This session ID still exists, so a returning visitor can keep chatting — but the cleared
                      turns are no longer displayed or used as follow-up context.
                    </p>
                  </div>
                ) : (
                  <ol className="space-y-4">
                    {turns.map((t, i) => (
                      <li
                        key={`${selected.id}-${i}`}
                        data-wf={i === 0 ? 'i-2-1-0' : i === 1 ? 'i-2-1-1' : undefined}
                        className="ph-in"
                        style={{ animationDelay: `${i * 45}ms` }}
                      >
                        <p className="text-[13px] leading-6" style={{ color: paper }}>
                          <span
                            className="text-[12px]"
                            style={{ ...mono, ...nums, color: t.role === 'Assistant' ? accentLit : withAlpha(paper, 0.62) }}
                          >
                            {t.role} · {t.time}
                          </span>
                          <span className="px-2" aria-hidden="true" style={{ color: withAlpha(paper, 0.35) }}>—</span>
                          {t.content}
                        </p>
                        {t.citations && t.citations.length > 0 ? (
                          <p
                            className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px]"
                            style={{ ...mono, color: withAlpha(paper, 0.55) }}
                          >
                            <FileText className="h-3 w-3" aria-hidden="true" />
                            <span>cited:</span>
                            {t.citations.map((c) => (
                              <span key={c} style={{ borderBottom: `1px solid ${hairDark}` }}>{c}</span>
                            ))}
                          </p>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* Row 4 — retention note + primary action */}
        <div className="mt-4 grid grid-cols-12 gap-4 lg:gap-6 items-start">
          <div
            data-wf="b-3-0"
            className="col-span-12 lg:col-span-7"
            style={{ border: `1px solid ${hair}`, borderRadius: brand.radius, backgroundColor: cardSurface }}
          >
            <p className="flex items-start gap-2.5 px-4 py-3 text-sm leading-6" style={{ color: ink }}>
              <Clock className="h-4 w-4 mt-1 shrink-0" style={{ color: neutral }} aria-hidden="true" />
              <span>
                History is kept indefinitely until an admin clears it.
                <span className="block text-[13px] mt-0.5" style={{ color: neutral }}>
                  No expiry job runs against chat_sessions. Clearing works one session at a time and cannot be undone.
                </span>
              </span>
            </p>
          </div>

          <div data-wf="b-3-1" className="col-span-12 lg:col-span-5">
            <Button
              ref={triggerRef}
              type="button"
              onClick={() => { setHoldError(null); setModalOpen(true); }}
              disabled={isCleared || panelState === 'loading'}
              className="ph-focus w-full h-12 inline-flex items-center justify-center gap-2 text-sm font-medium transition-opacity"
              style={{
                ...mono,
                backgroundColor: isCleared ? withAlpha(ink, 0.08) : accentDeep,
                color: isCleared ? neutral : paper,
                border: `1px solid ${isCleared ? hair : accentDeep}`,
                borderRadius: brand.radius,
                cursor: isCleared ? 'not-allowed' : 'pointer',
                opacity: panelState === 'loading' && !isCleared ? 0.6 : 1,
              }}
            >
              <Trash className="h-4 w-4" aria-hidden="true" />
              Clear this session&rsquo;s history
            </Button>
            <p className="mt-2 text-xs leading-5" style={{ ...mono, ...nums, color: neutral }}>
              {isCleared
                ? `Session ${selected.id} has no stored turns left to clear.`
                : `Target: ${selected.id} · ${selected.messages} turns · DELETE /api/admin/sessions/${selected.id}/history`}
            </p>
          </div>
        </div>
      </div>

      {/* Row 5 — confirm modal */}
      {modalOpen ? (
        <div
          data-wf="b-4-0"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          onKeyDown={(e) => { if (e.key === 'Escape') closeModal(); }}
        >
          <div
            className="absolute inset-0 ph-fade"
            style={{ backgroundColor: withAlpha(ink, 0.62) }}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="clear-dialog-title"
            aria-describedby="clear-dialog-desc"
            className="ph-in relative w-full max-w-lg"
            style={{
              backgroundColor: paper,
              border: `1px solid ${ink}`,
              borderRadius: brand.radius,
              boxShadow: `0 18px 40px ${withAlpha(ink, 0.3)}`,
            }}
          >
            <div className="px-5 py-4" style={{ borderBottom: `1px solid ${hair}` }}>
              <h2 id="clear-dialog-title" className="text-base font-medium leading-6" style={{ ...mono, color: ink }}>
                Clear history for session {selected.id}?
              </h2>
            </div>

            <div className="px-5 py-4">
              <p id="clear-dialog-desc" className="text-sm leading-6" style={{ color: ink }}>
                The stored turns are deleted and will no longer be shown or used as follow-up context.
              </p>
              <p className="mt-3 text-[12px] leading-6" style={{ ...mono, ...nums, color: neutral }}>
                {selected.messages} turns · created {selected.created_at} · last active {selected.last_active_at}
                <br />
                DELETE /api/admin/sessions/{selected.id}/history
              </p>

              {holdError ? (
                <div
                  className="ph-in mt-4 px-3 py-3"
                  role="alert"
                  style={{ border: `1px solid ${accentDeep}`, backgroundColor: withAlpha(accent, 0.07) }}
                >
                  <p className="flex items-start gap-2 text-[13px] leading-6" style={{ color: accentDeep, ...mono }}>
                    <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{holdError.code} — session {holdError.id} is under a compliance hold.</span>
                  </p>
                  <p className="mt-1.5 text-[13px] leading-6" style={{ color: ink }}>
                    This thread is attached to the 14 Oct incident review and is held until 14 Nov 2026.
                    Only the workspace owner (ops@northwind-labs.io) can lift the hold — ask them, then clear it again.
                    Nothing was deleted.
                  </p>
                </div>
              ) : null}
            </div>

            <div
              className="px-5 py-3 flex flex-col-reverse sm:flex-row sm:justify-end gap-2"
              style={{ borderTop: `1px solid ${hair}`, backgroundColor: stripSurface }}
            >
              <Button
                data-wf="i-4-0-1"
                type="button"
                onClick={closeModal}
                disabled={clearing}
                className="ph-focus h-10 px-4 text-sm"
                style={{
                  ...mono,
                  backgroundColor: 'transparent',
                  border: `1px solid ${hair}`,
                  borderRadius: brand.radius,
                  color: ink,
                  opacity: clearing ? 0.5 : 1,
                }}
              >
                Cancel
              </Button>
              <Button
                data-wf="i-4-0-0"
                ref={confirmRef}
                type="button"
                onClick={confirmClear}
                disabled={clearing}
                className="ph-focus h-10 px-4 text-sm font-medium inline-flex items-center justify-center gap-2"
                style={{
                  ...mono,
                  backgroundColor: accentDeep,
                  border: `1px solid ${accentDeep}`,
                  borderRadius: brand.radius,
                  color: paper,
                  opacity: clearing ? 0.8 : 1,
                }}
              >
                {clearing ? (
                  <>
                    <span>Clearing…</span>
                    <span
                      className="ph-cursor"
                      aria-hidden="true"
                      style={{ backgroundColor: paper, display: 'inline-block', width: 7, height: 14, verticalAlign: '-2px' }}
                    />
                  </>
                ) : (
                  <>
                    <Trash className="h-4 w-4" aria-hidden="true" />
                    Clear history
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
