// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Clock, ArrowLeft, AlertCircle, CheckCircle } = Icons;

const SEEDED = { username: "admin", password: "phosphor-0725" };
const BUILD = "2026.10.24 · b417e9c";

const BOOT_LOG = [
  { time: "09:41:02", tag: "INDEX", text: "12,842 chunks · 1,536-dim · gemini-embedding-001", tone: "dim" },
  { time: "09:41:02", tag: "STORE", text: "s3://ragbase-kb/prod · 184.2 MB · 37 documents", tone: "dim" },
  { time: "09:41:03", tag: "MODEL", text: "gemini-2.5-flash ready · GEMINI_API_KEY ok", tone: "dim" },
  { time: "09:41:03", tag: "PGSQL", text: "pgvector 0.7.4 · pool 4/12 · 11 ms", tone: "dim" },
  { time: "09:41:04", tag: "AUTH ", text: "waiting for operator…", tone: "ok" },
];

const hexToRgba = (hex, alpha) => {
  const raw = String(hex || "#000000").replace("#", "");
  const full = raw.length === 3 ? raw.split("").map((c) => c + c).join("") : raw;
  const n = parseInt(full, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
};

const shade = (hex, factor) => {
  const raw = String(hex || "#000000").replace("#", "");
  const full = raw.length === 3 ? raw.split("").map((c) => c + c).join("") : raw;
  const n = parseInt(full, 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) =>
    Math.max(0, Math.min(255, Math.round(v * factor)))
  );
  return `rgb(${ch[0]}, ${ch[1]}, ${ch[2]})`;
};

const stamp = () => {
  const d = new Date();
  const p = (v) => String(v).padStart(2, "0");
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
};

export default function Screen() {
  const navigate = useNavigate();
  const { Button, Input, Label } = UI;
  const { ArrowLeft, AlertCircle, CheckCircle, Clock } = Icons;

  const ink = brand.primaryColor;
  const paper = brand.backgroundColor;
  const neutral = brand.neutralColor;
  const accent = brand.accentColor;
  const accentDeep = shade(accent, 0.72);
  const accentText = shade(accent, 0.62);
  const hair = hexToRgba(ink, 0.14);
  const hairStrong = hexToRgba(ink, 0.28);
  const hairDark = hexToRgba(paper, 0.16);
  const headFont = `${brand.fontHeading}, "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`;
  const bodyFont = `${brand.fontBody}, "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif`;

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("idle"); // idle | checking | denied | locked | granted
  const [fieldErr, setFieldErr] = React.useState({ username: null, password: null });
  const [caps, setCaps] = React.useState(false);
  const [attempts, setAttempts] = React.useState(0);
  const [cooldown, setCooldown] = React.useState(0);
  const [log, setLog] = React.useState(BOOT_LOG);

  const timers = React.useRef([]);
  const track = (id) => {
    timers.current.push(id);
    return id;
  };
  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const pushLog = (entry) => setLog((prev) => [...prev, { time: stamp(), ...entry }].slice(-9));

  // Cooldown countdown after three failures
  React.useEffect(() => {
    if (status !== "locked") return undefined;
    if (cooldown <= 0) {
      setStatus("idle");
      setAttempts(0);
      pushLog({ tag: "AUTH ", text: "cooldown cleared · accepting credentials", tone: "ok" });
      return undefined;
    }
    const id = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [status, cooldown]);

  // Navigate once the console reports a granted session
  React.useEffect(() => {
    if (status !== "granted") return undefined;
    const id = setTimeout(() => navigate("admin-documents"), 900);
    return () => clearTimeout(id);
  }, [status]);

  const busy = status === "checking" || status === "granted";
  const locked = status === "locked";

  const focusField = (id) => {
    const el = typeof document !== "undefined" ? document.getElementById(id) : null;
    if (el) el.focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (busy || locked) return;

    const nextErrors = {
      username: username.trim() ? null : "Enter the admin username.",
      password: password ? null : "Enter the admin password.",
    };
    setFieldErr(nextErrors);
    if (nextErrors.username || nextErrors.password) {
      setStatus("idle");
      focusField(nextErrors.username ? "admin-username" : "admin-password");
      return;
    }

    const bytes = JSON.stringify({ username: username.trim(), password }).length;
    setStatus("checking");
    pushLog({ tag: "POST ", text: `/api/admin/login · ${bytes} B`, tone: "dim" });

    track(
      setTimeout(() => {
        const ok =
          username.trim().toLowerCase() === SEEDED.username && password === SEEDED.password;
        if (ok) {
          setStatus("granted");
          pushLog({ tag: "AUTH ", text: "200 OK · scope=documents,sessions", tone: "ok" });
          pushLog({ tag: "ROUTE", text: "→ /admin/documents", tone: "dim" });
          return;
        }
        const nextAttempts = attempts + 1;
        setAttempts(nextAttempts);
        setPassword("");
        if (nextAttempts >= 3) {
          setStatus("locked");
          setCooldown(30);
          pushLog({ tag: "AUTH ", text: "429 · 3 failures · cooldown 30 s", tone: "err" });
        } else {
          setStatus("denied");
          pushLog({ tag: "AUTH ", text: "401 · invalid username or password", tone: "err" });
          focusField("admin-password");
        }
      }, 900)
    );
  };

  const toneColor = (tone) => {
    if (tone === "err") return accent;
    if (tone === "ok") return paper;
    return hexToRgba(paper, 0.62);
  };

  const primaryLabel =
    status === "checking"
      ? "Checking credentials"
      : status === "granted"
      ? "Signed in"
      : locked
      ? `Locked · ${cooldown}s`
      : "Log in";

  const inputStyle = {
    backgroundColor: "rgba(255,255,255,0.62)",
    borderColor: hairStrong,
    color: ink,
    fontFamily: bodyFont,
  };

  const renderStatusBlock = () => {
    if (status === "granted") {
      return (
        <p className="flex items-start gap-2 text-[14px]" style={{ color: ink }}>
          <CheckCircle className="mt-[2px] h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            <strong className="font-semibold">Signed in.</strong> Opening the knowledge base…
          </span>
        </p>
      );
    }
    if (status === "denied") {
      return (
        <div className="flex items-start gap-2">
          <AlertCircle className="mt-[2px] h-4 w-4 shrink-0" style={{ color: accentText }} aria-hidden="true" />
          <div>
            <p className="text-[14px] font-semibold" style={{ color: accentText }}>
              Invalid username or password.
            </p>
            <p className="mt-1 text-[13px]" style={{ color: neutral, fontVariantNumeric: "tabular-nums" }}>
              {3 - attempts} attempt{3 - attempts === 1 ? "" : "s"} left before a 30-second cooldown. Your
              username was kept — re-enter the password.
            </p>
          </div>
        </div>
      );
    }
    if (locked) {
      return (
        <div className="flex items-start gap-2">
          <Clock className="mt-[2px] h-4 w-4 shrink-0" style={{ color: accentText }} aria-hidden="true" />
          <div>
            <p className="text-[14px] font-semibold" style={{ color: accentText }}>
              Three failed attempts — sign-in paused.
            </p>
            <p className="mt-1 text-[13px]" style={{ color: neutral, fontVariantNumeric: "tabular-nums" }}>
              Try again in {cooldown}s. If you have lost the password, an existing admin can issue new
              credentials.
            </p>
          </div>
        </div>
      );
    }
    if (status === "checking") {
      return (
        <p
          className="text-[13px]"
          style={{ color: neutral, fontFamily: headFont, fontVariantNumeric: "tabular-nums" }}
        >
          POST /api/admin/login — verifying against the admin table
          <span className="rb-cursor ml-1 inline-block h-[11px] w-[6px] align-[-1px]" aria-hidden="true" />
        </p>
      );
    }
    return (
      <p className="text-[13px] leading-relaxed" style={{ color: neutral }}>
        No credentials? Only an existing admin can issue them — ask whoever owns this workspace. Three
        failed attempts start a 30-second cooldown.
      </p>
    );
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: paper,
        color: ink,
        fontFamily: bodyFont,
        "--rb-ink": ink,
        "--rb-paper": paper,
        "--rb-accent": accent,
        "--rb-accent-deep": accentDeep,
      }}
    >
      <style>{`
        .rb-focus:focus-visible { outline: 2px solid var(--rb-accent); outline-offset: 2px; }
        .rb-primary { background: var(--rb-ink); color: var(--rb-paper); transition: background-color .15s ease; }
        .rb-primary:hover:not(:disabled) { background: var(--rb-accent-deep); }
        .rb-primary:active:not(:disabled) { background: var(--rb-accent); }
        .rb-primary:disabled { opacity: .55; cursor: not-allowed; }
        .rb-ghost { transition: background-color .15s ease, border-color .15s ease; }
        .rb-ghost:hover { background: rgba(0,0,0,.05); }
        .rb-cursor { background: var(--rb-accent); animation: rbBlink 1.05s steps(1, end) infinite; }
        .rb-cursor-dark { background: var(--rb-accent); animation: rbBlink 1.05s steps(1, end) infinite; }
        .rb-line { animation: rbLine .22s ease-out both; }
        .rb-dot { animation: rbPulse 1.8s ease-in-out infinite; }
        @keyframes rbBlink { 0%,49% { opacity: 1 } 50%,100% { opacity: 0 } }
        @keyframes rbLine { from { opacity: 0; transform: translateY(3px) } to { opacity: 1; transform: none } }
        @keyframes rbPulse { 0%,100% { opacity: 1 } 50% { opacity: .25 } }
        @media (prefers-reduced-motion: reduce) {
          .rb-cursor, .rb-cursor-dark, .rb-line, .rb-dot, .rb-primary, .rb-ghost {
            animation: none !important; transition: none !important;
          }
        }
      `}</style>

      <div className="border-b" style={{ borderColor: hair }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <p
            className="text-[11px] uppercase tracking-[0.22em]"
            style={{ fontFamily: headFont, color: ink }}
          >
            Ragbase<span style={{ color: accent }}> /</span> admin
          </p>
          <p
            className="text-[11px]"
            style={{ fontFamily: headFont, color: neutral, fontVariantNumeric: "tabular-nums" }}
          >
            build {BUILD}
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form column */}
          <section className="lg:col-span-7">
            <h1
              data-wf="b-0-0"
              className="text-[32px] font-medium leading-tight lg:text-[40px]"
              style={{ fontFamily: headFont, color: ink, letterSpacing: "-0.01em" }}
            >
              Admin login
              <span
                className="rb-cursor ml-2 inline-block h-[22px] w-[11px] align-[-2px] lg:h-[28px] lg:w-[13px]"
                aria-hidden="true"
              />
            </h1>

            <p
              data-wf="b-1-0"
              className="mt-4 max-w-[62ch] text-[15px] leading-relaxed"
              style={{ color: neutral }}
            >
              This area is restricted to staff. Sign in to manage knowledge-base documents and
              conversation history.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-10 max-w-[460px]">
              <div data-wf="b-2-0" className="space-y-6">
                <div>
                  <Label
                    htmlFor="admin-username"
                    className="mb-2 block text-[12px] uppercase tracking-[0.14em]"
                    style={{ fontFamily: headFont, color: ink }}
                  >
                    Username
                  </Label>
                  <Input
                    data-wf="i-2-0-0"
                    id="admin-username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    autoCapitalize="none"
                    spellCheck={false}
                    value={username}
                    disabled={busy || locked}
                    aria-invalid={fieldErr.username ? "true" : undefined}
                    aria-describedby={fieldErr.username ? "username-error" : undefined}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      if (fieldErr.username) setFieldErr((f) => ({ ...f, username: null }));
                    }}
                    className="rb-focus h-11 w-full rounded-none border px-3 text-[15px] disabled:opacity-60"
                    style={{
                      ...inputStyle,
                      borderColor: fieldErr.username ? accentText : hairStrong,
                    }}
                  />
                  {fieldErr.username ? (
                    <p id="username-error" className="mt-2 text-[13px]" style={{ color: accentText }}>
                      {fieldErr.username}
                    </p>
                  ) : null}
                </div>

                <div>
                  <Label
                    htmlFor="admin-password"
                    className="mb-2 block text-[12px] uppercase tracking-[0.14em]"
                    style={{ fontFamily: headFont, color: ink }}
                  >
                    Password
                  </Label>
                  <Input
                    data-wf="i-2-0-1"
                    id="admin-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    disabled={busy || locked}
                    aria-invalid={fieldErr.password || status === "denied" ? "true" : undefined}
                    aria-describedby={
                      [fieldErr.password ? "password-error" : null, caps ? "caps-hint" : null]
                        .filter(Boolean)
                        .join(" ") || undefined
                    }
                    onKeyDown={(e) => {
                      if (e.getModifierState) setCaps(e.getModifierState("CapsLock"));
                    }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (fieldErr.password) setFieldErr((f) => ({ ...f, password: null }));
                    }}
                    className="rb-focus h-11 w-full rounded-none border px-3 text-[15px] disabled:opacity-60"
                    style={{
                      ...inputStyle,
                      borderColor:
                        fieldErr.password || status === "denied" ? accentText : hairStrong,
                    }}
                  />
                  {fieldErr.password ? (
                    <p id="password-error" className="mt-2 text-[13px]" style={{ color: accentText }}>
                      {fieldErr.password}
                    </p>
                  ) : null}
                  {caps ? (
                    <p
                      id="caps-hint"
                      className="mt-2 flex items-center gap-2 text-[13px]"
                      style={{ color: neutral }}
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      Caps Lock is on.
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Button
                  data-wf="b-3-0"
                  type="submit"
                  disabled={busy || locked}
                  aria-busy={status === "checking" ? "true" : undefined}
                  className="rb-primary rb-focus flex h-12 w-full items-center justify-center gap-2 rounded-none border-0 px-5 text-[14px] font-semibold tracking-wide"
                  style={{ fontFamily: headFont, fontVariantNumeric: "tabular-nums" }}
                >
                  <span>{primaryLabel}</span>
                  {status === "checking" ? (
                    <span
                      className="rb-cursor-dark inline-block h-[12px] w-[7px]"
                      aria-hidden="true"
                    />
                  ) : null}
                  {status === "granted" ? <CheckCircle className="h-4 w-4" aria-hidden="true" /> : null}
                </Button>

                <Button
                  data-wf="b-3-1"
                  type="button"
                  onClick={() => navigate("chat")}
                  className="rb-ghost rb-focus flex h-12 w-full items-center justify-center gap-2 rounded-none border bg-transparent px-5 text-[14px] font-medium"
                  style={{ borderColor: hairStrong, color: ink, fontFamily: headFont }}
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  <span>Back to chat</span>
                </Button>
              </div>

              <div
                data-wf="b-4-0"
                role="alert"
                aria-live="assertive"
                className="mt-6 min-h-[56px] border-l-2 py-1 pl-4"
                style={{
                  borderColor:
                    status === "denied" || locked ? accent : hexToRgba(ink, 0.18),
                }}
              >
                {renderStatusBlock()}
              </div>
            </form>
          </section>

          {/* Signature: live auth console */}
          <aside className="lg:col-span-5">
            <div className="border" style={{ borderColor: ink, backgroundColor: ink }}>
              <div
                className="flex items-center justify-between gap-3 border-b px-4 py-3"
                style={{ borderColor: hairDark }}
              >
                <h2
                  className="text-[11px] uppercase tracking-[0.2em]"
                  style={{ fontFamily: headFont, color: paper }}
                >
                  auth.console
                </h2>
                <span
                  className="flex items-center gap-2 text-[11px]"
                  style={{ fontFamily: headFont, color: hexToRgba(paper, 0.72) }}
                >
                  <span
                    className="rb-dot inline-block h-[6px] w-[6px]"
                    style={{ backgroundColor: accent }}
                    aria-hidden="true"
                  />
                  live
                </span>
              </div>

              <ol
                role="log"
                className="max-h-[340px] overflow-y-auto px-4 py-3"
                style={{ fontFamily: headFont, fontVariantNumeric: "tabular-nums" }}
              >
                {log.map((entry, i) => (
                  <li
                    key={`${entry.time}-${entry.tag}-${i}`}
                    className="rb-line grid grid-cols-[62px_46px_1fr] gap-2 py-[5px] text-[12px] leading-[1.5]"
                  >
                    <span style={{ color: hexToRgba(paper, 0.45) }}>{entry.time}</span>
                    <span style={{ color: entry.tone === "err" ? accent : hexToRgba(paper, 0.8) }}>
                      {entry.tag}
                    </span>
                    <span className="break-words" style={{ color: toneColor(entry.tone) }}>
                      {entry.text}
                    </span>
                  </li>
                ))}
                <li className="grid grid-cols-[62px_46px_1fr] gap-2 py-[5px] text-[12px]">
                  <span style={{ color: hexToRgba(paper, 0.45) }} aria-hidden="true">
                    {stamp()}
                  </span>
                  <span style={{ color: hexToRgba(paper, 0.8) }} aria-hidden="true">
                    {">"}
                  </span>
                  <span aria-hidden="true">
                    <span className="rb-cursor-dark inline-block h-[12px] w-[7px] align-[-1px]" />
                  </span>
                  <span className="sr-only">Console idle, awaiting sign-in.</span>
                </li>
              </ol>

              <div
                className="border-t px-4 py-3"
                style={{ borderColor: hairDark }}
              >
                <p
                  className="text-[11px] leading-relaxed"
                  style={{ fontFamily: headFont, color: hexToRgba(paper, 0.62) }}
                >
                  preview build · seeded operator
                  <br />
                  <span style={{ color: paper }}>admin</span> /{" "}
                  <span style={{ color: paper }}>phosphor-0725</span>
                </p>
              </div>
            </div>

            <p className="mt-4 text-[12px] leading-relaxed" style={{ color: neutral }}>
              Visitors never sign in — the chat page is public. Only admin pages ask for a password.
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}
