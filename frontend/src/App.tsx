import { NavLink, Navigate, Outlet, Route, Routes } from "react-router-dom";

import { Icons } from "@/lib/icons";
import Chat from "@/screens/Chat";
import AdminLogin from "@/screens/AdminLogin";
import AdminDocuments from "@/screens/AdminDocuments";
import AdminSessions from "@/screens/AdminSessions";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "flex items-center gap-2 rounded-[var(--brand-radius)] px-3 py-2 text-sm font-medium transition-colors",
    isActive ? "bg-[var(--brand-hover)] text-[var(--brand-fg)]" : "text-[var(--brand-fg-muted)]",
  ].join(" ");

// The app's menu, drawn around every screen except the ones routed outside it below.
function AppShellLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header
        className="border-b"
        style={{
          backgroundColor: "var(--brand-surface)",
          borderColor: "var(--brand-border)",
        }}
      >
        <div className="flex items-center gap-6 px-6 py-2">
          <p
            className="shrink-0 text-sm font-semibold"
            style={{ fontFamily: "var(--brand-font-heading)" }}
          >
            {"RAG-chatbot-gemini2"}
          </p>
          <nav aria-label="App menu" className="flex flex-wrap items-center gap-1">
            <NavLink to="/chat" className={navLinkClass}>
              {"Chat"}
            </NavLink>
            <NavLink to="/admin-documents" className={navLinkClass}>
              {"Knowledge Base"}
            </NavLink>
            <NavLink to="/admin-sessions" className={navLinkClass}>
              <Icons.Menu size={16} />
              {"Conversation History"}
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShellLayout />}>
        <Route path="/chat" element={<Chat />} />
        <Route path="/admin-documents" element={<AdminDocuments />} />
        <Route path="/admin-sessions" element={<AdminSessions />} />
      </Route>
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="*" element={<Navigate to="/chat" replace />} />
    </Routes>
  );
}
