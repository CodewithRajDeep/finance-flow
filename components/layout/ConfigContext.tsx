"use client";

import React, { createContext, useContext, useState } from "react";
import { globalDictionary } from "@/services/dictionary";
import { enterpriseTimezones } from "@/services/timezone";

interface ConfigContextType {
  lang: string;
  setLang: (l: string) => void;
  tz: string;
  setTz: (t: string) => void;
  t: (key: string) => string;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<string>("EN");
  const [tz, setTz] = useState<string>("Asia/Kolkata"); // Defaulting strictly to our baseline local hub

  const t = (key: string): string => {
    if (!globalDictionary[key]) return key;
    return globalDictionary[key][lang] || globalDictionary[key]["EN"];
  };

  return (
    <ConfigContext.Provider value={{ lang, setLang, tz, setTz, t }}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) throw new Error("useConfig must be used within a ConfigProvider");
  return context;
}