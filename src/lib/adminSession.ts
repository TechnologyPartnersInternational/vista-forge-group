// Client-side holder for the admin bearer token issued by /api/auth/login.
// The token is only a convenience for the UI — every write is re-verified
// server-side, so tampering with sessionStorage grants nothing.

const STORAGE_KEY = "tpi_admin_session";

interface AdminSession {
  token: string;
  expiresAt: number;
}

function read(): AdminSession | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as AdminSession;
    if (!session.token || typeof session.expiresAt !== "number") return null;
    if (session.expiresAt <= Date.now()) {
      sessionStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export const adminSession = {
  getToken: (): string | null => read()?.token ?? null,
  isActive: (): boolean => read() !== null,
  save: (session: AdminSession) => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session));
    } catch {
      /* storage unavailable — session lasts only for this page */
    }
  },
  clear: () => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
      // Remove the legacy flag from the old client-side-only login.
      sessionStorage.removeItem("tpi_admin_auth");
    } catch {
      /* ignore */
    }
  },
};
