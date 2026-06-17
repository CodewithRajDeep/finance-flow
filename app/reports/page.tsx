"use client";

import { useState } from "react";
import { useConfig } from "@/components/layout/ConfigContext";
import { fetchReportingMetrics } from "@/api/mockLedger";
import SectionHeader from "@/core/SectionHeader";
import { FileText, Download, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ReportsPage() {
  const { t } = useConfig();
  const metrics = fetchReportingMetrics();
  const [exportFormat, setExportFormat] = useState("PDF");
  const [isCompiling, setIsCompiling] = useState<string | null>(null);

  const triggerExportGeneration = (key: string) => {
    setIsCompiling(key);
    setTimeout(() => {
      setIsCompiling(null);
      alert(`Finance Flow Statement Core: ${exportFormat} export layout compiled successfully. Downloading ledger package...`);
    }, 1500);
  };

  return (
    <div className="space-y-6 max-w-6xl animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <SectionHeader title={t("reportsTitle")} description={t("reportsDesc")} />

      {/* Global Configuration Controls Toolbar */}
      <div className="p-4 bg-[#161820] border border-[#242838] rounded-xl flex flex-wrap items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-[#38BDF8]" />
          <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">{t("exportFormat")}</span>
        </div>
        <div className="grid grid-cols-3 gap-1 bg-[#0D0E12] p-1 rounded-lg border border-[#242838]">
          {(["PDF", "CSV", "JSON"] as const).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setExportFormat(fmt)}
              className={`px-4 py-1.5 text-xs font-mono font-bold rounded-md smooth-transition ${
                exportFormat === fmt ? "bg-[#38BDF8] text-[#0D0E12]" : "text-[#A1A1AA] hover:text-[#E4E4E7]"
              }`}
            >
              {fmt}
            </button>
          ))}
        </div>
      </div>

      {/* Master Reports Asset Compilation Grid Board */}
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((report) => (
          <div 
            key={report.key}
            className="p-5 bg-[#161820] border border-[#242838] rounded-xl flex flex-col justify-between h-48 hover:border-stone-700 smooth-transition shadow-lg"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase bg-[#0D0E12] text-[#38BDF8] px-2 py-0.5 rounded border border-[#242838]">
                  {report.coverage}
                </span>
                <FileText className="h-4 w-4 text-[#A1A1AA]" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-[#E4E4E7] tracking-tight">{t(report.key)}</h4>
                <p className="text-xs text-[#A1A1AA]">{report.type}</p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#242838] pt-3 mt-4">
              <span className="text-xs font-mono font-semibold text-[#E4E4E7]">{report.volume}</span>
              <button
                onClick={() => triggerExportGeneration(report.key)}
                disabled={isCompiling !== null}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0D0E12] border border-[#242838] text-[#38BDF8] hover:border-[#38BDF8]/30 hover:bg-sky-500/5 smooth-transition disabled:opacity-50"
              >
                {isCompiling === report.key ? (
                  "Compiling..."
                ) : (
                  <>
                    {exportFormat} <Download className="h-3 w-3" />
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Secure Cryptographic Certification Indicator */}
      <div className="p-4 rounded-xl border border-dashed border-[#242838] bg-[#0D0E12]/30 flex items-center gap-3">
        <ShieldCheck className="h-5 w-5 text-[#34D399]" />
        <p className="text-xs text-[#A1A1AA] leading-relaxed">
          All compiled statements carry sha-256 cryptographic signatures verified against cold audit ledgers. Conformant to RBI gate specifications and international accounting principles.
        </p>
      </div>
    </div>
  );
}