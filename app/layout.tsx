"use client";

import { ConfigProvider, useConfig, availableLanguages } from "@/components/layout/ConfigContext";
import Sidebar from "@/components/layout/Sidebar";
import { Settings, Info, Globe, Clock } from "lucide-react";
import { useState } from "react";
import "./global.css";

function AppShellCanvas({ children }: { children: React.ReactNode }) {
  const { lang, setLang, tz, setTz, t } = useConfig();
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="flex min-h-screen w-full select-none">
      <Sidebar />
      
      <main className="flex-1 min-h-screen bg-[#0D0E12] overflow-y-auto relative">
        {/* Top Operational Ribbon Grid */}
        <div className="h-16 border-b border-[#242838] bg-[#161820]/40 backdrop-blur flex items-center px-8 justify-between relative z-50">
          <h1 className="text-xs font-medium tracking-wide text-[#A1A1AA]">
            {t("pipelineStatus")}: <span className="text-[#34D399] font-bold">{t("operational")}</span>
          </h1>

          <div className="relative">
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-lg bg-[#161820] border border-[#242838] text-[#E4E4E7] hover:text-[#38BDF8] hover:border-[#38BDF8]/30 smooth-transition"
            >
              <Settings className="h-4 w-4" />
            </button>

            {showSettings && (
              <div className="absolute right-0 mt-2 w-72 bg-[#161820] border border-[#242838] rounded-xl shadow-2xl p-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center gap-2 border-b border-[#242838] pb-2">
                  <Settings className="h-4 w-4 text-[#38BDF8]" />
                  <span className="text-xs font-bold uppercase text-[#E4E4E7]">
                    {t("settingsTitle")}
                  </span>
                </div>

                <div className="p-2.5 bg-[#0D0E12] border border-[#242838] rounded-lg space-y-1">
                  <div className="flex items-center gap-1.5 text-[#A1A1AA]">
                    <Info className="h-3.5 w-3.5 text-[#38BDF8]" />
                    <span className="text-[10px] tracking-wider uppercase font-bold text-[#E4E4E7]">{t("nodeInfo")}</span>
                  </div>
                  <p className="text-[11px] text-[#38BDF8] ml-5 font-medium">{t("buildTarget")}</p>
                  <p className="text-[10px] text-[#A1A1AA] ml-5 font-mono">{t("coreHash")}: v2.0.4-STABLE</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-[#A1A1AA] flex items-center gap-1 font-semibold">
                    <Clock className="h-3 w-3" /> {t("timezoneIntegration")}
                  </label>
                  <div className="grid grid-cols-3 gap-1 bg-[#0D0E12] p-1 rounded-lg border border-[#242838]">
                    {(["IST", "UTC", "EST"] as const).map((tOption) => (
                      <button
                        key={tOption}
                        onClick={() => setTz(tOption)}
                        className={`py-1 text-[10px] font-mono font-bold rounded smooth-transition ${
                          tz === tOption ? "bg-[#38BDF8] text-[#0D0E12]" : "text-[#A1A1AA] hover:text-[#E4E4E7]"
                        }`}
                      >
                        {tOption}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-wider text-[#A1A1AA] flex items-center gap-1 font-semibold">
                    <Globe className="h-3 w-3" /> {t("systemLocalization")}
                  </label>
                  <select
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                    className="w-full bg-[#0D0E12] border border-[#242838] rounded-lg p-2 text-xs font-medium text-[#E4E4E7] focus:outline-none focus:border-[#38BDF8] smooth-transition cursor-pointer"
                  >
                    {availableLanguages.map((language) => (
                      <option key={language.code} value={language.code} className="bg-[#161820]">
                        {language.native} ({language.name})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-[#0D0E12] text-[#E4E4E7] min-h-screen tracking-tight">
        <ConfigProvider>
          <AppShellCanvas>{children}</AppShellCanvas>
        </ConfigProvider>
      </body>
    </html>
  );
}