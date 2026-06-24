"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { globalDictionary } from "@/services/dictionary";
import { enterpriseTimezones } from "@/services/timezone";

type ThemeMode = "light" | "dark";

interface ConfigContextType {
  lang: string;
  setLang: (l: string) => void;
  tz: string;
  setTz: (t: string) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<string>("EN");
  const [tz, setTz] = useState<string>("Asia/Kolkata"); // Defaulting strictly to our baseline local hub
  const [theme, setTheme] = useState<ThemeMode>("light");

  // Synchronize the HTML document's data-theme layer whenever the state changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const t = (key: string): string => {
    if (!globalDictionary[key]) return key;
    return globalDictionary[key][lang] || globalDictionary[key]["EN"];
  };

  return (
    <ConfigContext.Provider value={{ lang, setLang, tz, setTz, theme, toggleTheme, t }}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) throw new Error("useConfig must be used within a ConfigProvider");
  return context;
}