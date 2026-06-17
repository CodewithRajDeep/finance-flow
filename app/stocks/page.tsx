"use client";

import { useState } from "react";
import { useConfig } from "@/components/layout/ConfigContext";
import { fetchLiveMarketIndices, fetchLiveEquities, StockItem } from "@/api/mockLedger";
import SectionHeader from "@/core/SectionHeader";
import MarketChart from "@/core/MarketChart";
import { Search, TrendingUp, TrendingDown } from "lucide-react";

export default function StocksPage() {
  const { t } = useConfig();
  const indices = fetchLiveMarketIndices();
  const equities = fetchLiveEquities();

  // Primary Workspace Interactive Configurations
  const [selectedStock, setSelectedStock] = useState<StockItem>(equities[0]);
  const [timeframe, setTimeframe] = useState<"1D" | "1W" | "1M" | "2M" | "3M">("1D");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEquities = equities.filter(stock => 
    stock.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Dynamic Array Pipeline Router
  const getActiveDataPoints = () => {
    switch (timeframe) {
      case "1W": return selectedStock.history1W;
      case "1M": return selectedStock.history1M;
      case "2M": return selectedStock.history2M;
      case "3M": return selectedStock.history3M;
      default: return selectedStock.history1D;
    }
  };

  // Generate uniform timeline display labels based on active array tracks length
  const generateTimestamps = (dataLength: number) => {
    if (timeframe === "1D" && selectedStock.timestamps1D) {
      return selectedStock.timestamps1D;
    }
    return Array.from({ length: dataLength }, (_, i) => `Day - ${dataLength - i - 1}`);
  };

  const activePoints = getActiveDataPoints();
  const activeTimestamps = generateTimestamps(activePoints.length);
  const currencySymbol = selectedStock.exchange === "NSE" ? "₹" : "$";

  return (
    <div className="space-y-6 max-w-7xl animate-in fade-in duration-500 font-sans text-[#E4E4E7]">
      <SectionHeader title={t("stocksTitle")} description={t("stocksDesc")} />

      {/* Symmetrical Market Index Cards Ribbon Row */}
      <div className="grid gap-4 sm:grid-cols-3">
        {indices.map((idx, index) => (
          <div key={index} className="p-4 bg-[#161820] border border-[#242838] rounded-xl flex items-center justify-between shadow-lg">
            <div className="space-y-1">
              <p className="text-[11px] text-[#A1A1AA] uppercase font-medium tracking-wider">{idx.name}</p>
              <p className="text-base font-bold text-[#E4E4E7] font-mono">{idx.value}</p>
            </div>
            <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
              idx.isPositive ? "bg-[#34D399]/10 text-[#34D399]" : "bg-rose-500/10 text-rose-500"
            }`}>
              {idx.isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {idx.change}
            </span>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-12 items-start">
        
        {/* Left Hand: Search and Index Directory List Board (5/12 Block) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#161820] border border-[#242838] rounded-xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-[#242838] bg-[#0D0E12]/30">
              <div className="relative w-full">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#A1A1AA]" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search assets by symbol or exchange..."
                  className="w-full bg-[#0D0E12] border border-[#242838] rounded-xl pl-9 pr-4 py-2 text-xs text-[#E4E4E7] focus:outline-none focus:border-[#38BDF8] placeholder-[#A1A1AA]/40 smooth-transition"
                />
              </div>
            </div>

            <div className="divide-y divide-[#242838] max-h-[460px] overflow-y-auto">
              {filteredEquities.map((stock) => {
                const isSelected = selectedStock.symbol === stock.symbol;
                return (
                  <div
                    key={stock.symbol}
                    onClick={() => { 
                      setSelectedStock(stock); 
                      setTimeframe("1D"); // Reset temporal window on asset shift
                    }}
                    className={`p-4 flex items-center justify-between cursor-pointer smooth-transition ${
                      isSelected ? "bg-sky-500/5 border-l-2 border-[#38BDF8]" : "hover:bg-[#0D0E12]/40"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#38BDF8] bg-sky-500/5 px-2 py-0.5 rounded border border-sky-500/10">
                          {stock.symbol}
                        </span>
                        <span className="text-[10px] text-[#A1A1AA] uppercase font-semibold bg-[#0D0E12] px-1.5 py-0.5 rounded border border-[#242838]">
                          {stock.exchange}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-[#A1A1AA] max-w-[180px] truncate">{stock.name}</p>
                    </div>

                    <div className="text-right space-y-1">
                      <p className="text-xs font-bold font-mono text-[#E4E4E7]">{stock.price}</p>
                      <span className={`inline-block text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        stock.isPositive ? "bg-[#34D399]/10 text-[#34D399]" : "bg-rose-500/10 text-rose-500"
                      }`}>
                        {stock.change}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Hand: Graphical Terminal Workspace Frame Panel (7/12 Block) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#161820] border border-[#242838] rounded-xl p-5 shadow-2xl space-y-5">
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#242838] pb-4 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold tracking-tight text-[#E4E4E7]">{selectedStock.name}</h3>
                  <span className="text-[10px] font-mono font-bold text-[#38BDF8] uppercase bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/10">
                    {selectedStock.symbol}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="font-mono font-bold text-lg text-[#E4E4E7]">{selectedStock.price}</span>
                  <span className={`text-xs font-mono font-bold ${selectedStock.isPositive ? "text-[#34D399]" : "text-rose-400"}`}>
                    {selectedStock.change}
                  </span>
                </div>
              </div>

              {/* Symmetrical Timeframe Option Switch Ribbon */}
              <div className="flex bg-[#0D0E12] p-1 rounded-lg border border-[#242838] self-start sm:self-auto overflow-x-auto">
                {(["1D", "1W", "1M", "2M", "3M"] as const).map((tFrame) => (
                  <button
                    key={tFrame}
                    onClick={() => setTimeframe(tFrame)}
                    className={`px-3 py-1.5 text-[10px] font-bold rounded-md smooth-transition shrink-0 ${
                      timeframe === tFrame ? "bg-[#38BDF8] text-[#0D0E12]" : "text-[#A1A1AA] hover:text-[#E4E4E7]"
                    }`}
                  >
                    {tFrame}
                  </button>
                ))}
              </div>
            </div>

            {/* Precision Interactive SVG Chart Canvas */}
            <MarketChart 
              dataPoints={activePoints} 
              timestamps={activeTimestamps}
              isPositive={selectedStock.isPositive} 
              stockSymbol={selectedStock.symbol}
              currencySymbol={currencySymbol}
            />

            {/* Symmetrical Operational Summary Metrics Grid */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-bold text-[#A1A1AA] uppercase tracking-wider">{t("statsHeader")}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0D0E12] p-4 rounded-xl border border-[#242838]">
                <div className="space-y-0.5">
                  <p className="text-[10px] text-[#A1A1AA] font-medium uppercase">{t("openPrice")}</p>
                  <p className="text-xs font-mono font-bold text-[#E4E4E7]">
                    {currencySymbol}{selectedStock.open.replace(/[₹$]/g, "")}
                  </p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] text-[#A1A1AA] font-medium uppercase">24h High</p>
                  <p className="text-xs font-mono font-bold text-[#34D399]">
                    {currencySymbol}{selectedStock.high.replace(/[₹$]/g, "")}
                  </p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] text-[#A1A1AA] font-medium uppercase">24h Low</p>
                  <p className="text-xs font-mono font-bold text-rose-400">
                    {currencySymbol}{selectedStock.low.replace(/[₹$]/g, "")}
                  </p>
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] text-[#A1A1AA] font-medium uppercase">{t("marketCap")}</p>
                  <p className="text-xs font-semibold text-[#E4E4E7]">{selectedStock.marketCap}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}