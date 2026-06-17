"use client";

interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-xl font-bold tracking-tight text-[#E4E4E7]">{title}</h2>
      <p className="text-xs text-[#A1A1AA] leading-relaxed">{description}</p>
    </div>
  );
}