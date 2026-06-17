"use client";

import { useState } from "react";
import { useConfig } from "@/components/layout/ConfigContext";
import { fetchPendingInvoices, paymentGateways } from "@/api/mockLedger";
import SectionHeader from "@/core/SectionHeader";
import { CreditCard, ArrowUpRight, Clock, AlertTriangle, SlidersHorizontal } from "lucide-react";

export default function PaymentsPage() {
  const { t } = useConfig();
  const invoices = fetchPendingInvoices();
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>("");
  const [isRouting, setIsRouting] = useState(false);

  return (
    <div className="space-y-6 max-w-6xl animate-in fade-in duration-300">
      <SectionHeader title={t("paymentsTitle")} description={t("paymentsDesc")} />

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-[#161820] border border-[#242838] rounded-xl overflow-hidden">
            <div className="p-4 border-b border-[#242838] flex items-center justify-between bg-[#0D0E12]/30">
              <span className="text-xs font-bold tracking-wider text-[#38BDF8] uppercase">{t("pendingLiabilities")}</span>
              <SlidersHorizontal className="h-4 w-4 text-[#A1A1AA]" />
            </div>

            <div className="divide-y divide-[#242838]">
              {invoices.map((inv) => (
                <div 
                  key={inv.id}
                  onClick={() => setSelectedInvoice(inv.id)}
                  className={`p-4 flex items-center justify-between cursor-pointer smooth-transition ${
                    selectedInvoice === inv.id ? "bg-sky-500/5" : "hover:bg-[#0D0E12]/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg border ${selectedInvoice === inv.id ? "border-sky-500/30 bg-sky-500/10" : "border-[#242838] bg-[#0D0E12]"}`}>
                      <CreditCard className="h-4 w-4 text-[#38BDF8]" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-semibold text-[#E4E4E7]">{t(inv.recipientKey)}</h4>
                      <p className="text-[11px] text-[#A1A1AA] font-mono">{inv.id} • {t(inv.categoryKey)}</p>
                    </div>
                  </div>

                  <div className="text-right flex items-center gap-4">
                    <div className="space-y-0.5">
                      <p className="text-xs font-mono font-bold text-[#E4E4E7]">{inv.amount}</p>
                      <div className="flex items-center justify-end gap-1">
                        {inv.status === "urgent" ? <AlertTriangle className="h-3 w-3 text-amber-500" /> : <Clock className="h-3 w-3 text-[#A1A1AA]" />}
                        <span className={`text-[10px] font-mono ${inv.status === "urgent" ? "text-amber-500 font-bold" : "text-[#A1A1AA]"}`}>
                          {t(inv.dueDateKey)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[#161820] border border-[#242838] rounded-xl p-5 space-y-5">
            <h3 className="text-xs font-bold tracking-wider text-[#A1A1AA] uppercase border-b border-[#242838] pb-2">{t("routingOrchestration")}</h3>
            {selectedInvoice ? (
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#A1A1AA] font-semibold">{t("selectedTarget")}</label>
                  <p className="text-xs font-mono text-[#E4E4E7] font-bold mt-1 bg-[#0D0E12] p-2 rounded border border-[#242838]">{selectedInvoice}</p>
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#A1A1AA] font-semibold">{t("selectTransit")}</label>
                  <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="w-full mt-1 bg-[#0D0E12] border border-[#242838] rounded-lg p-2 text-xs text-[#E4E4E7] focus:outline-none focus:border-[#38BDF8] cursor-pointer">
                    <option value="">{t("selectGatewayPlaceholder")}</option>
                    {paymentGateways.map((g) => <option key={g.id} value={g.id}>{g.name}</option>)}
                  </select>
                </div>
                <button disabled={!selectedService || isRouting} onClick={() => { setIsRouting(true); setTimeout(() => setIsRouting(false), 1000); }} className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider smooth-transition ${!selectedService ? "bg-[#242838] text-[#A1A1AA] cursor-not-allowed" : "bg-[#38BDF8] text-[#0D0E12] hover:opacity-90"}`}>
                  {isRouting ? t("securingPipeline") : <>{t("executeBtn")} <ArrowUpRight className="h-3.5 w-3.5" /></>}
                </button>
              </div>
            ) : (
              <div className="text-center py-8 text-xs text-[#A1A1AA] border border-dashed border-[#242838] rounded-lg p-4">{t("noSelectionPlaceholder")}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}