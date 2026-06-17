"use client";

import { useState } from "react";

interface MarketChartProps {
  dataPoints: number[];
  timestamps: string[];
  isPositive: boolean;
  stockSymbol: string;
  currencySymbol: string;
}

export default function MarketChart({ dataPoints, timestamps, isPositive, stockSymbol, currencySymbol }: MarketChartProps) {
  const width = 500;
  const height = 240;
  const padding = 25;

  // Track active index crosshair tracking states
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const minVal = Math.min(...dataPoints);
  const maxVal = Math.max(...dataPoints);
  const valueRange = maxVal - minVal === 0 ? 1 : maxVal - minVal;

  const coordinates = dataPoints.map((val, index) => {
    const x = padding + (index / (dataPoints.length - 1)) * (width - padding * 2);
    const y = height - padding - ((val - minVal) / valueRange) * (height - padding * 2);
    return { x, y, value: val, index };
  });

  const pointsString = coordinates.map(c => `${c.x},${c.y}`).join(" ");
  const closedPathPoints = `${padding},${height - padding} ${pointsString} ${width - padding},${height - padding}`;
  const themeColor = isPositive ? "#34D399" : "#F87171";

  const activePoint = hoverIndex !== null ? coordinates[hoverIndex] : null;
  const stepWidth = (width - padding * 2) / (dataPoints.length - 1 || 1);

  return (
    <div className="w-full bg-[#0D0E12] rounded-xl border border-[#242838] p-4 relative font-sans select-none">
      
      {/* FIXED: High-Contrast Premium Dark Frosted Tooltip Mapping */}
      {activePoint && (
        <div 
          className="absolute bg-[#161820]/95 backdrop-blur-md border border-[#242838] rounded-xl p-3 shadow-2xl z-30 pointer-events-none smooth-transition animate-in fade-in zoom-in-95 duration-100 min-w-[140px] space-y-1"
          style={{ 
            left: `${Math.min(Math.max(activePoint.x - 70, 10), width - 165)}px`, 
            top: `${Math.min(Math.max(activePoint.y - 85, 10), height - 100)}px` 
          }}
        >
          {/* Symbol Segment Indicator - Highlighted in Crisp Azure */}
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#38BDF8] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColor }} />
            {stockSymbol} Index
          </div>
          
          {/* Spot Value - Highlighted in Symmetrical Bright White */}
          <p className="text-sm font-bold font-mono tracking-tight text-[#E4E4E7]">
            {currencySymbol}{activePoint.value.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </p>
          
          {/* Temporal Timestamp - Muted Symmetrical Subtitle */}
          <p className="text-[10px] font-medium text-[#A1A1AA] font-mono tracking-normal">
            {timestamps[activePoint.index] || "Live Session"}
          </p>
        </div>
      )}

      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full h-auto overflow-visible"
        onMouseLeave={() => setHoverIndex(null)}
      >
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={themeColor} stopOpacity="0.15" />
            <stop offset="100%" stopColor={themeColor} stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Dynamic Reference Layout Lines */}
        <line x1={padding} y1={padding} x2={width - padding} y2={padding} stroke="#161820" strokeWidth="1" />
        <line x1={padding} y1={height / 2} x2={width - padding} y2={height / 2} stroke="#161820" strokeWidth="1" />
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#242838" strokeWidth="1" />

        <polygon points={closedPathPoints} fill="url(#chartGradient)" />

        <polyline
          fill="none"
          stroke={themeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={pointsString}
        />

        {/* Interactive Intersect Crosshairs */}
        {activePoint && (
          <g>
            <line 
              x1={activePoint.x} y1={padding} 
              x2={activePoint.x} y2={height - padding} 
              stroke="#242838" strokeWidth="1.5" strokeDasharray="3" 
            />
            <line 
              x1={padding} y1={activePoint.y} 
              x2={width - padding} y2={activePoint.y} 
              stroke="#242838" strokeWidth="1" strokeDasharray="3" 
            />
            <circle cx={activePoint.x} cy={activePoint.y} r="5" fill={themeColor} />
            <circle cx={activePoint.x} cy={activePoint.y} r="2" fill="#0D0E12" />
          </g>
        )}

        {/* Hitbox Trigger Coordinates Overlay */}
        {coordinates.map((c) => (
          <rect
            key={c.index}
            x={c.x - stepWidth / 2}
            y={padding}
            width={stepWidth}
            height={height - padding * 2}
            fill="transparent"
            className="cursor-crosshair pointer-events-auto"
            onMouseEnter={() => setHoverIndex(c.index)}
            onMouseMove={() => setHoverIndex(c.index)}
          />
        ))}
      </svg>
    </div>
  );
}