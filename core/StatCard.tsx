"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  variant?: "default" | "accent";
}

export default function StatCard({ label, value, icon: Icon, variant = "default" }: StatCardProps) {
  return (
    <div className="p-5 bg-[#161820] border border-[#242838] rounded-xl space-y-2 smooth-transition hover:border-stone-700">
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#A1A1AA] uppercase tracking-wider font-medium">{label}</span>
        <Icon className={`h-4 w-4 ${variant === "accent" ? "text-[#34D399]" : "text-[#38BDF8]"}`} />
      </div>
      <p className={`text-xl font-bold tracking-tight ${variant === "accent" ? "text-[#34D399]" : "text-[#E4E4E7]"}`}>
        {value}
      </p>
    </div>
  );
}