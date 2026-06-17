"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, CreditCard, FileText, TrendingUp, ShieldCheck, Menu } from "lucide-react";
import { useState } from "react";
import { useConfig } from "@/components/layout/ConfigContext";

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { t } = useConfig();

  // Parsing dynamic nav translation string array tokens separating by '|'
  const navTokens = t("navigation").split("|");

  const navigationItems = [
    { name: navTokens[0] || "Insights", href: "/insights", icon: LayoutDashboard },
    { name: navTokens[1] || "Payments", href: "/payments", icon: CreditCard },
    { name: navTokens[2] || "Reports", href: "/reports", icon: FileText },
    { name: navTokens[3] || "Stocks", href: "/stocks", icon: TrendingUp },
  ];

  return (
    <div className={`relative flex flex-col min-h-screen bg-[#161820] border-r border-[#242838] smooth-transition ${isCollapsed ? "w-20" : "w-64"}`}>
      <div className="flex h-16 items-center justify-between px-4 border-b border-[#242838]">
        {!isCollapsed && (
          <span className="font-sans text-sm tracking-wider font-bold text-[#38BDF8] uppercase bg-sky-500/10 px-3 py-1.5 rounded border border-sky-500/20">
            Finance Flow
          </span>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded bg-[#0D0E12] border border-[#242838] text-[#E4E4E7] hover:text-[#38BDF8] smooth-transition mx-auto"
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href || (pathname === "/" && item.href === "/insights");
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center px-3 py-3 rounded-lg text-xs font-mono font-medium tracking-wider smooth-transition ${
                isActive ? "bg-sky-500/10 text-[#38BDF8] border border-sky-500/20" : "text-[#A1A1AA] hover:bg-[#0D0E12] hover:text-[#E4E4E7]"
              }`}
            >
              <Icon className={`h-4 w-4 shrink-0 smooth-transition ${isActive ? "text-[#38BDF8]" : "text-[#A1A1AA]"}`} />
              {!isCollapsed && <span className="ml-3 uppercase">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[#242838] bg-[#0D0E12]/50">
        <div className="flex items-center gap-2 justify-center">
          <ShieldCheck className="h-4 w-4 text-[#34D399]" />
          {!isCollapsed && <span className="text-[10px] font-mono tracking-wider text-[#34D399] uppercase font-bold">Secure Core</span>}
        </div>
      </div>
    </div>
  );
}