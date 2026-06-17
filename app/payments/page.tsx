"use client";

import { useState } from "react";
import { useConfig } from "@/components/layout/ConfigContext";
import { fetchPendingInvoices, paymentGateways, fetchTransactionHistory } from "@/api/mockLedger";
import { formatToTargetTimezone } from "@/services/timezone";
import SectionHeader from "@/core/SectionHeader";
import { CreditCard, ArrowUpRight, Clock, AlertTriangle, SlidersHorizontal, Search, ShieldCheck, Activity, CheckCircle2 } from "lucide-react";

export default function PaymentsPage() {
  const { t, tz, lang } = useConfig();
  const invoices = fetchPendingInvoices();
  const history = fetchTransactionHistory();
  
  // Interface Configuration States
  const [selectedInvoice, setSelectedInvoice] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isRouting, setIsRouting] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  
  // Timeline Temporal Filter States
  const [showTimelineFilter, setShowTimelineFilter] = useState(false);
  const [startDate, setStartDate] = useState("2026-06-01");
  const [endDate, setEndDate] = useState("2026-06-30");

  const filteredGateways = paymentGateways.filter(gateway => 
    gateway.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    gateway.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

const handleExecutionRouting = async (invoiceId: string) => {
  if (!selectedService) return;
  setIsRouting(true);
  setShowSuccessNotification(false);
  
  try {
    const response = await fetch("http://localhost:8080/api/v2/payments/initialize-route", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${userJwtToken}` -> Handled once Auth layer is live
      },
      body: JSON.stringify({
        invoiceId: invoiceId,
        gatewayId: selectedService,
        callbackUrl: window.location.origin + "/payments/verify-status"
      })
    });

    if (!response.ok) throw new Error("Backend handshake rejection.");

    const transactionData = await response.json();
    
    
    setShowSuccessNotification(true);

   
    setTimeout(() => {
      setIsRouting(false);
      setShowSuccessNotification(false);
      if (transactionData.secureCheckoutUrl) {
        window.location.href = transactionData.secureCheckoutUrl; 
      }
    }, 1000);

  } catch (error) {
    console.error("Phoenix Routing Engine Fault:", error);
    setIsRouting(false);
    alert("Transaction pipeline initialization failed. Gateway unreachable.");
  }
};

  return (
    <div className="space-y-6 max-w-7xl animate-in fade-in duration-300 relative">
      
      {/* Premium Async Notification Banner */}
      {showSuccessNotification && (
        <div className="fixed top-20 right-8 bg-[#161820] border border-[#34D399]/30 text-[#E4E4E7] p-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-md animate-in slide-in-from-right-4 duration-300 z-50">
          <CheckCircle2 className="h-5 w-5 text-[#34D399] shrink-0" />
          <div className="text-xs space-y-0.5">
            <p className="font-bold text-[#34D399]">Handshake Initialized</p>
            <p className="text-[#A1A1AA]">Tokenized session compiled. Gateway tunnel routing secure.</p>
          </div>
        </div>
      )}

      <SectionHeader title={t("paymentsTitle")} description={t("paymentsDesc")} />

      <div className="grid gap-6 lg:grid-cols-12 items-start">
        
        {/* Pending Liabilities Component Block */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#161820] border border-[#242838] rounded-xl overflow-hidden shadow-xl">
            <div className="p-4 border-b border-[#242838] flex items-center justify-between bg-[#0D0E12]/30">
              <span className="text-xs font-bold tracking-wider text-[#38BDF8] uppercase">{t("pendingLiabilities")}</span>
              <button 
                onClick={() => setShowTimelineFilter(!showTimelineFilter)}
                className="p-1 rounded hover:bg-[#0D0E12] text-[#A1A1AA] hover:text-[#38BDF8] smooth-transition"
              >
                <SlidersHorizontal className="h-4 w-4" />
              </button>
            </div>

            {showTimelineFilter && (
              <div className="p-4 bg-[#0D0E12]/90 border-b border-[#242838] space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                <p className="text-[10px] uppercase tracking-wider text-[#A1A1AA] font-bold">{t("filterTimeline")}</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-[10px] text-[#A1A1AA] uppercase font-medium">Start</label>
                    <input 
                      type="date" 
                      value={startDate} 
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-[#161820] border border-[#242838] rounded-lg p-1.5 text-xs text-[#E4E4E7] focus:outline-none focus:border-[#38BDF8]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-[#A1A1AA] uppercase font-medium">End</label>
                    <input 
                      type="date" 
                      value={endDate} 
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full bg-[#161820] border border-[#242838] rounded-lg p-1.5 text-xs text-[#E4E4E7] focus:outline-none focus:border-[#38BDF8]"
                    />
                  </div>
                </div>
                <button 
                  onClick={() => setShowTimelineFilter(false)}
                  className="w-full py-2 text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-[#38BDF8] border border-sky-500/20 rounded-lg hover:bg-sky-500/20 smooth-transition"
                >
                  {t("applyFilterBtn")}
                </button>
              </div>
            )}

            <div className="divide-y divide-[#242838]">
              {invoices.map((inv) => (
                <div 
                  key={inv.id}
                  onClick={() => { setSelectedInvoice(inv.id); setSelectedService(""); }}
                  className={`p-4 flex flex-col gap-2.5 cursor-pointer smooth-transition ${
                    selectedInvoice === inv.id ? "bg-sky-500/5 border-l-2 border-[#38BDF8]" : "hover:bg-[#0D0E12]/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg border border-[#242838] bg-[#0D0E12]">
                        <CreditCard className="h-3.5 w-3.5 text-[#38BDF8]" />
                      </div>
                      <h4 className="text-xs font-semibold text-[#E4E4E7] tracking-tight">{t(inv.recipientKey)}</h4>
                    </div>
                    {/* Currency digits kept clean and uniform */}
                    <span className="text-xs font-semibold text-[#E4E4E7]">{inv.amount}</span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#A1A1AA]">
                    <span className="font-mono">{inv.id} <span className="font-sans text-[#A1A1AA]/60">•</span> {t(inv.categoryKey)}</span>
                    <div className="flex items-center gap-1">
                      {inv.status === "urgent" ? <AlertTriangle className="h-3 w-3 text-amber-500" /> : <Clock className="h-3 w-3 text-[#A1A1AA]" />}
                      <span className={inv.status === "urgent" ? "text-amber-500 font-bold" : ""}>{t(inv.dueDateKey)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unified Routing Window Board */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-[#161820] border border-[#242838] rounded-xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#242838] pb-3">
              <h3 className="text-xs font-bold tracking-wider text-[#A1A1AA] uppercase">{t("routingOrchestration")}</h3>
              {selectedInvoice && (
                <div className="flex items-center gap-1.5 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-md">
                  {/* Monospace kept strictly locked just for the tracking identifier string */}
                  <span className="text-[10px] font-mono text-[#38BDF8] font-bold">{selectedInvoice}</span>
                </div>
              )}
            </div>

            {selectedInvoice ? (
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#A1A1AA]" />
                  <input 
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t("searchPlaceholder")}
                    className="w-full bg-[#0D0E12] border border-[#242838] rounded-xl pl-9 pr-4 py-2 text-xs text-[#E4E4E7] focus:outline-none focus:border-[#38BDF8] placeholder-[#A1A1AA]/40 smooth-transition"
                  />
                </div>

                <div className="grid gap-2 sm:grid-cols-2 max-h-[220px] overflow-y-auto pr-1">
                  {filteredGateways.map((gateway) => {
                    const isChosen = selectedService === gateway.id;
                    return (
                      <div
                        key={gateway.id}
                        onClick={() => setSelectedService(gateway.id)}
                        className={`p-3 rounded-xl border cursor-pointer smooth-transition flex flex-col justify-between h-20 overflow-hidden relative ${
                          isChosen ? "bg-sky-500/10 border-[#38BDF8] shadow-lg shadow-sky-500/5" : "bg-[#0D0E12] border-[#242838] hover:border-stone-700"
                        }`}
                      >
                        <div className="flex items-start justify-between z-10">
                          <p className="text-xs font-bold text-[#E4E4E7]">{gateway.name}</p>
                          <span className="text-[9px] bg-[#161820] text-[#A1A1AA] px-1.5 py-0.5 rounded border border-[#242838] font-medium">{gateway.region}</span>
                        </div>
                        <p className="text-[11px] text-[#A1A1AA] font-medium z-10">{t(gateway.typeKey)}</p>
                        {isChosen && (
                          <div className="absolute right-0 bottom-0 w-8 h-8 bg-[#38BDF8]/10 rounded-tl-full flex items-center justify-center">
                            <ShieldCheck className="h-3.5 w-3.5 text-[#38BDF8] mt-2 ml-2" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-[#242838] pt-4">
                  <button 
                    disabled={!selectedService || isRouting} 
                    onClick={() => handleExecutionRouting(selectedInvoice)} 
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider smooth-transition ${
                      !selectedService ? "bg-[#242838] text-[#A1A1AA] cursor-not-allowed" : "bg-[#38BDF8] text-[#0D0E12] hover:opacity-90 active:scale-[0.99]"
                    }`}
                  >
                    {isRouting ? t("securingPipeline") : <>{t("executeBtn")} <ArrowUpRight className="h-4 w-4" /></>}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 text-xs text-[#A1A1AA] border border-dashed border-[#242838] rounded-xl p-4">
                {t("noSelectionPlaceholder")}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Transaction History Ledger */}
      <div className="bg-[#161820] border border-[#242838] rounded-xl overflow-hidden shadow-xl">
        <div className="p-4 border-b border-[#242838] bg-[#0D0E12]/30 flex items-center justify-between">
          <div className="space-y-0.5">
            <h3 className="text-xs font-bold tracking-wider text-[#38BDF8] uppercase">{t("transactionHistoryTitle")}</h3>
            <p className="text-[11px] text-[#A1A1AA]">{t("transactionHistoryDesc")}</p>
          </div>
          <Activity className="h-4 w-4 text-[#38BDF8]" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#242838] bg-[#0D0E12]/20 text-[10px] font-semibold uppercase text-[#A1A1AA] tracking-wider">
                <th className="p-4 font-mono">{t("txId")}</th>
                <th className="p-4">{t("gateway")}</th>
                <th className="p-4 font-mono">{t("date")}</th>
                <th className="p-4 text-right">{t("amount")}</th>
                <th className="p-4 text-center">{t("status")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#242838] text-xs font-medium">
              {history.map((tx) => (
                <tr key={tx.id} className="hover:bg-[#0D0E12]/20 smooth-transition">
                  <td className="p-4 font-mono font-bold text-[#E4E4E7]">{tx.id}</td>
                  <td className="p-4 text-[#E4E4E7]">{tx.gatewayName}</td>
                  <td className="p-4 font-mono text-[#A1A1AA]">
                    {formatToTargetTimezone(tx.timestamp, tz, lang.toLowerCase())}
                  </td>
                  <td className="p-4 font-semibold text-right text-[#E4E4E7]">{tx.amount}</td>
                  <td className="p-4 text-center">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase ${
                      tx.status === "success" ? "bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/20" :
                      tx.status === "pending" ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" :
                      "bg-rose-500/10 text-rose-500 border border-rose-500/20"
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}