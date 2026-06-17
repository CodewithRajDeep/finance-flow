"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// Expanded universal language registry support array
export const availableLanguages = [
  { code: "EN", name: "English", native: "English" },
  { code: "HI", name: "Hindi", native: "हिन्दी" },
  { code: "DE", name: "German", native: "Deutsch" },
  { code: "ES", name: "Spanish", native: "Español" },
  { code: "FR", name: "French", native: "Français" },
  { code: "JA", name: "Japanese", native: "日本語" },
];

export type LanguageCode = string;
export type Timezone = "UTC" | "IST" | "EST";

interface ConfigContextType {
  lang: LanguageCode;
  setLang: (l: LanguageCode) => void;
  tz: Timezone;
  setTz: (t: Timezone) => void;
  t: (key: string) => string; // Dynamic Translation function token lookup
}

const ConfigContext = createContext<ConfigContextType | undefined>(undefined);

// Master Dynamic Translation Dictionary Matrix
const globalDictionary: Record<string, Record<string, string>> = {
  navigation: {
    EN: "INSIGHTS|PAYMENTS|REPORTS|STOCKS|SETTINGS",
    HI: "इनसाइट्स|भुगतान|रिपोर्ट|स्टॉक|सेटिंग्स",
    DE: "INSIGHTS|ZAHLUNGEN|BERICHTE|AKTIEN|EINSTELLUNGEN",
    ES: "INSIGHTS|PAGOS|INFORMES|ACCIONES|AJUSTES",
    FR: "INSIGHTS|PAIEMENTS|RAPPORTS|ACTIONS|REGLAGES",
    JA: "インサイト|支払い|レポート|株式|設定",
  },
  title: {
    EN: "System Insights Engine",
    HI: "सिस्टम इनसाइट्स इंजन",
    DE: "System-Insights-Engine",
    ES: "Motor de Información des Sistema",
    FR: "Moteur d'Analyse du Système",
    JA: "システム・インサイト・エンジン",
  },
  desc: {
    EN: "Aggregated analytics and systemic overview across synchronized liquidity networks.",
    HI: "सिंक्रनाइज़ेड लिक्विडिटी नेटवर्क में एकत्रित एनालिटिक्स और सिस्टेमिक अवलोकन।",
    DE: "Aggregierte Analysen und systemischer Überblick über synchronisierte Liquiditätsnetzwerke.",
    ES: "Análisis agregados y visión general sistémica a través de redes de liquidez sincronizadas.",
    FR: "Analyses agrégées et vue d'ensemble systémique à travers des réseaux de liquidité synchronisés.",
    JA: "同期された流動性ネットワーク全体の集約された分析とシステム概要。",
  },
  balance: {
    EN: "Total Aggregated Balance",
    HI: "कुल संचित शेष",
    DE: "Gesamtsaldo Aggregiert",
    ES: "Saldo Total Agregado",
    FR: "Solde Total Agrégé",
    JA: "総集計残高",
  },
  txRate: {
    EN: "Transaction Flow Rate",
    HI: "लेन-देन प्रवाह दर",
    DE: "Transaktionsflussrate",
    ES: "Tasa de Flujo de Transacciones",
    FR: "Taux de Flux de Transactions",
    JA: "取引フローレート",
  },
  health: {
    EN: "Gateway Health Status",
    HI: "गेटवे स्वास्थ्य स्थिति",
    DE: "Gateway-Integritätsstatus",
    ES: "Estado de Salud de la Pasarela",
    FR: "État de Santé de la Passerelle",
    JA: "ゲートウェイの健康状態",
  },
  active: {
    EN: "Active", HI: "सक्रिय", DE: "Aktiv", ES: "Activo", FR: "Actif", JA: "アクティブ"
  },
  buildInfo: {
    EN: "Build Target: Project Phoenix",
    HI: "बिल्ड वर्शन: प्रोजेक्ट फीनिक्स",
    DE: "Build-Ziel: Projekt Phoenix",
    ES: "Objetivo de Compilación: Proyecto Phoenix",
    FR: "Cible de Build: Projet Phoenix",
    JA: "ビルドターゲット: プロジェクト・フェニックス",
  },
  paymentsTitle: {
    EN: "Unified Payments Router",
    HI: "एकीकृत भुगतान राउटर",
    DE: "Einheitlicher Zahlungs-Router",
    ES: "Enrutador de Pagos Unificado",
    FR: "Routeur de Paiements Unifié",
    JA: "統合決済ルーター",
  },
  paymentsDesc: {
    EN: "Select an aggregated liability and route execution through authorized payment channels.",
    HI: "एक एकत्रित देयता का चयन करें और अधिकृत भुगतान चैनलों के माध्यम से निष्पादन को रूट करें।",
    DE: "Wählen Sie eine aggregierte Verbindlichkeit aus und leiten Sie die Ausführung über autorisierte Zahlungskanäle.",
    ES: "Seleccione un pasivo agregado y rutee la ejecución a través de canales de pago autorizados.",
    FR: "Sélectionnez un passif agrégé et routed l'exécution via des canaux de paiement autorisés.",
    JA: "集計された負債を選択し、承認された決済チャネルを通じて実行をルーティングします。",
  }
};

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>("EN");
  const [tz, setTz] = useState<Timezone>("IST");

  // Dynamic Lookup Translation Function Token parser
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