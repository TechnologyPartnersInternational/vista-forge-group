import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageSEO from "@/seo/PageSEO";
import { PAGE_SEO } from "@/seo/seo.config";
import Breadcrumbs from "@/seo/Breadcrumbs";

// ── Types ────────────────────────────────────────────────────────────────────
interface CertificateData {
  certNumber: string;
  name: string;
  role: string;
  training: string;
  location: string;
  duration: string;
  dates: string;
}

// ── API lookup ───────────────────────────────────────────────────────────────
async function lookupCertificate(
  certNumber: string
): Promise<CertificateData | null> {
  const encoded = encodeURIComponent(certNumber.trim());
  const res = await fetch(`/api/certificates/verify?certNumber=${encoded}`);
  const data = await res.json();

  if (!res.ok || !data.found) return null;
  return data.certificate as CertificateData;
}

// ── Certificate badge tags shown in the hero ─────────────────────────────────
const certBadges = ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 17025"];

// ── Page Component ───────────────────────────────────────────────────────────
const Verify = () => {
  const [certInput, setCertInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CertificateData | null | undefined>(
    undefined
  );
  const [queriedId, setQueriedId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!certInput.trim()) return;
    setLoading(true);
    setResult(undefined);
    setError("");
    setQueriedId(certInput.trim().toUpperCase());

    try {
      const data = await lookupCertificate(certInput);
      setResult(data);
    } catch {
      setError("Unable to reach the verification server. Please try again later.");
      setResult(undefined);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <PageSEO
        title={PAGE_SEO.verify.title}
        description={PAGE_SEO.verify.description}
        keywords={PAGE_SEO.verify.keywords}
        canonicalPath={PAGE_SEO.verify.canonicalPath}
      />
      <Breadcrumbs
        items={[{ label: "Certificate Verification", path: "/verify" }]}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="px-4 md:px-10 pt-8 pb-6 bg-mist">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[2rem] overflow-hidden bg-navy-900 text-white"
          style={{ minHeight: "420px" }}
        >
          {/* Background gradient with grid overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#1e1b4b]" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 42px), repeating-linear-gradient(90deg, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0.12) 1px, transparent 1px, transparent 42px)",
            }}
          />
          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 md:px-14 py-16 md:py-20 text-center max-w-3xl mx-auto">
            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-[11px] font-semibold tracking-[0.16em] uppercase backdrop-blur-sm font-mono"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Verification Portal
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
            >
              Certificate Verification
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm md:text-base text-white/70 leading-relaxed max-w-lg mb-8"
            >
              Instantly verify the authenticity of any certificate issued by
              Technology Partners International. Enter the unique certificate ID
              below.
            </motion.p>

            {/* Certificate type badges */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap justify-center gap-2.5"
            >
              {certBadges.map((badge) => (
                <span
                  key={badge}
                  className="font-mono text-[11px] tracking-wide text-white/70 border border-white/15 px-3 py-1.5 rounded-md bg-white/[0.03]"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── Console / Lookup ──────────────────────────────────────────────── */}
      <section className="bg-white px-4 md:px-10 pb-16 md:pb-24">
        <div className="max-w-2xl mx-auto">
          {/* Console card — overlaps hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative -mt-8 z-10 bg-white border border-border rounded-2xl shadow-xl shadow-black/[0.08] p-5 md:p-6"
          >
            {/* Console header */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-muted-foreground font-bold">
                Lookup
              </span>
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-border" />
                <span className="w-1.5 h-1.5 rounded-full bg-border" />
                <span className="w-1.5 h-1.5 rounded-full bg-border" />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                id="certInput"
                type="text"
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
                placeholder="e.g. TPI-TRN-2026-A001"
                className="flex-1 px-4 py-3.5 border-2 border-border rounded-xl bg-mist font-mono text-[15px] text-foreground tracking-wide outline-none placeholder:text-muted-foreground/50 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all duration-300"
              />
              <button
                type="submit"
                disabled={loading || !certInput.trim()}
                className="px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-xs tracking-[0.03em] uppercase whitespace-nowrap hover:bg-primary/90 active:translate-y-[1px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Search className="w-4 h-4" />
                )}
                {loading ? "Verifying…" : "Verify"}
              </button>
            </form>

            {/* Hint */}
            <p className="font-mono text-[11px] text-muted-foreground mt-3 ml-0.5">
              Format: TPI-TRN-YYYY-XXXX (printed on your certificate)
            </p>
          </motion.div>

          {/* ── Results ───────────────────────────────────────────────────── */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {/* Loading state */}
              {loading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                  <p className="font-mono text-xs text-muted-foreground tracking-wide uppercase">
                    Querying records…
                  </p>
                </motion.div>
              )}

              {/* Network error */}
              {!loading && error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex gap-4 items-start bg-amber-50 border border-amber-200/80 rounded-2xl p-5 md:p-6">
                    <div className="shrink-0 w-10 h-10 rounded-full border-2 border-dashed border-amber-500 flex items-center justify-center mt-0.5">
                      <XCircle className="w-5 h-5 text-amber-500" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="text-base md:text-lg font-bold text-amber-700 mb-1.5">
                        Connection Error
                      </h2>
                      <p className="text-[13px] text-amber-800/70 leading-relaxed">
                        {error}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Found result */}
              {!loading && !error && result !== undefined && result !== null && (
                <motion.div
                  key="found"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <SpecSheet cert={result} />
                </motion.div>
              )}

              {/* Not found */}
              {!loading && !error && result === null && (
                <motion.div
                  key="notfound"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <NotFoundCard queriedId={queriedId} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// ── Spec Sheet (Found result) ────────────────────────────────────────────────
function SpecSheet({ cert }: { cert: CertificateData }) {
  const fields: { label: string; value: string }[] = [
    { label: "Participant", value: cert.name },
    { label: "Role", value: cert.role },
    { label: "Training Program", value: cert.training },
    { label: "Location", value: cert.location },
    { label: "Duration", value: cert.duration },
    { label: "Dates", value: cert.dates },
  ];

  return (
    <div className="relative border border-border rounded-2xl bg-white overflow-hidden">
      {/* Corner brackets */}
      <CornerBracket position="tl" />
      <CornerBracket position="tr" />
      <CornerBracket position="bl" />
      <CornerBracket position="br" />

      {/* Header */}
      <div className="flex items-center justify-between gap-4 px-5 md:px-6 py-5 border-b border-border bg-mist rounded-t-2xl">
        <div className="min-w-0">
          {/* Status chip */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full shrink-0 bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" />
            <span className="font-mono text-[11px] tracking-[0.1em] uppercase font-bold text-primary">
              Verified — Authentic
            </span>
          </div>
          {/* Ref */}
          <span className="font-mono text-[11px] text-muted-foreground">
            Ref: {cert.certNumber}
          </span>
        </div>

        {/* Checkmark badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            ease: [0.3, 1.6, 0.4, 1],
          }}
          className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-primary/30 flex items-center justify-center shrink-0"
        >
          {/* Dashed ring */}
          <span className="absolute -inset-1.5 rounded-full border border-dashed border-primary/25" />
          <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-primary" />
        </motion.div>
      </div>

      {/* Body */}
      <div className="px-5 md:px-6 py-5">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-5">
          {cert.name}
        </h2>

        {/* Fields table */}
        <table className="w-full">
          <tbody>
            {fields.map((field, idx) => (
              <tr
                key={field.label}
                className={idx > 0 ? "border-t border-border" : ""}
              >
                <td className="py-3 pr-4 align-top w-[42%] font-mono text-[10px] md:text-[11px] tracking-[0.07em] uppercase text-muted-foreground">
                  {field.label}
                </td>
                <td className="py-3 align-top text-sm font-medium text-foreground">
                  {field.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-5 md:px-6 py-3.5 border-t border-dashed border-border font-mono text-[11px] text-muted-foreground">
        Verified at {new Date().toLocaleString("en-GB")} — TPI Verification
        System v2.1
      </div>
    </div>
  );
}

// ── Corner Bracket Decoration ────────────────────────────────────────────────
function CornerBracket({
  position,
}: {
  position: "tl" | "tr" | "bl" | "br";
}) {
  const posMap = {
    tl: "-top-2 -left-2 border-r-0 border-b-0 rounded-tl-lg",
    tr: "-top-2 -right-2 border-l-0 border-b-0 rounded-tr-lg",
    bl: "-bottom-2 -left-2 border-r-0 border-t-0 rounded-bl-lg",
    br: "-bottom-2 -right-2 border-l-0 border-t-0 rounded-br-lg",
  };
  const delayMap = { tl: 0, tr: 0.06, bl: 0.06, br: 0 };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 1.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: delayMap[position] }}
      className={`absolute w-5 h-5 border-2 border-primary/40 ${posMap[position]} pointer-events-none z-10`}
    />
  );
}

// ── Not Found Card ───────────────────────────────────────────────────────────
function NotFoundCard({ queriedId }: { queriedId: string }) {
  return (
    <div className="flex gap-4 items-start bg-red-50 border border-red-200/80 rounded-2xl p-5 md:p-6">
      {/* X icon */}
      <div className="shrink-0 w-10 h-10 rounded-full border-2 border-dashed border-red-500 flex items-center justify-center mt-0.5">
        <XCircle className="w-5 h-5 text-red-500" />
      </div>

      <div className="min-w-0">
        <h2 className="text-base md:text-lg font-bold text-red-600 mb-1.5">
          Certificate Not Found
        </h2>
        <p className="text-[13px] text-red-800/70 leading-relaxed">
          No record matches{" "}
          <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-red-200 text-xs">
            {queriedId}
          </code>
          . Please double-check the certificate ID and try again. If this issue
          persists, contact us at{" "}
          <a
            href="mailto:info@tpinigeria.com"
            className="text-red-600 underline underline-offset-2 hover:text-red-700"
          >
            info@tpinigeria.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Verify;
