"use client";

import { useConfig } from "@/components/layout/ConfigContext";
import { fetchSystemLogs } from "@/api/mockLedger";
import SectionHeader from "@/core/SectionHeader";
import StatCard from "@/core/StatCard";
import { TrendingUp, Activity, Layers } from "lucide-react";

export default function InsightsPage() {
  const { t, tz } = useConfig();
  const activeLogs = fetchSystemLogs();

  const convertTimestamp = (isoString: string) => {
    const d = new Date(isoString);
    if (tz === "UTC") return d.toUTCString().replace("GMT", "UTC");
    if (tz === "EST") return d.toLocaleTimeString("en-US", { timeZone: "America/New_York" }) + " EST";
    return d.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST";
  };

  return (
    <div className="space-y-6 max-w-6xl animate-in fade-in duration-300">
      <SectionHeader title={t("insightsTitle")} description={t("insightsDesc")} />

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label={t("balance")} value="₹18,42,900.00" icon={TrendingUp} />
        <StatCard label={t("txRate")} value="42.8 tx/s" icon={Activity} />
        <StatCard label={t("health")} value={t("active")} icon={Layers} variant="accent" />
      </div>

      <div className="bg-[#161820] border border-[#242838] rounded-xl overflow-hidden">
        <div className="p-4 border-b border-[#242838] bg-[#0D0E12]/30">
          <span className="text-xs font-bold tracking-wider text-[#38BDF8] uppercase">{t("auditTrailTitle")}</span>
        </div>
        <div className="divide-y divide-[#242838]">
          {activeLogs.map((log, index) => (
            <div key={index} className="p-4 flex items-center justify-between hover:bg-[#0D0E12]/30 smooth-transition">
              <div className="space-y-1">
                <p className="text-xs font-medium text-[#E4E4E7]">{t(log.eventKey)}</p>
                <p className="text-[11px] text-[#A1A1AA] font-mono">{convertTimestamp(log.baseTime)}</p>
              </div>
              <span className="text-[11px] font-mono font-bold text-[#38BDF8] bg-sky-500/5 px-2.5 py-1 rounded border border-sky-500/10 uppercase">
                {t(log.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}