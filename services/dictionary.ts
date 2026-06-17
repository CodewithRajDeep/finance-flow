// services/dictionary.ts

export const availableLanguages = [
  { code: "EN", name: "English", native: "English" },
  { code: "HI", name: "Hindi", native: "हिन्दी" },
  { code: "DE", name: "German", native: "Deutsch" },
  { code: "ES", name: "Spanish", native: "Español" },
  { code: "FR", name: "French", native: "Français" },
  { code: "JA", name: "Japanese", native: "日本語" },
];

export const globalDictionary: Record<string, Record<string, string>> = {
  // Navigation & Framework Elements
  pipelineStatus: { EN: "Network Pipeline", HI: "नेटवर्क पाइपलाइन", DE: "Netzwerk-Pipeline" },
  operational: { EN: "Operational", HI: "सक्रिय रूप से चालू", DE: "Betriebsbereit" },
  navigation: {
    EN: "INSIGHTS|PAYMENTS|REPORTS|STOCKS|SETTINGS",
    HI: "इनसाइट्स|भुगतान|रिपोर्ट|स्टॉक|सेटिंग्स",
    DE: "INSIGHTS|ZAHLUNGEN|BERICHTE|AKTIEN|EINSTELLUNGEN",
  },
  settingsTitle: { EN: "Settings", HI: "सेटिंग्स", DE: "Einstellungen" },
  nodeInfo: { EN: "System Node Info", HI: "सिस्टम नोड जानकारी", DE: "Systemknoten-Info" },
  buildTarget: { EN: "Build Target: Project Phoenix", HI: "बिल्ड वर्शन: प्रोजेक्ट फीनिक्स", DE: "Build-Ziel: Projekt Phoenix" },
  coreHash: { EN: "Core Hash", HI: "क्रीश हैश", DE: "Kern-Hash" },
  timezoneIntegration: { EN: "Timezone Integration", HI: "समय क्षेत्र एकीकरण", DE: "Zeitzonen-Integration" },
  systemLocalization: { EN: "System Localization", HI: "सिस्टम स्थानीयकरण", DE: "Systemlokalisierung" },
  secureCore: { EN: "Secure Core Active", HI: "सुरक्षित कोर सक्रिय", DE: "Sicherer Kern Aktiv" },

  // Page: Insights
  insightsTitle: { EN: "System Insights Engine", HI: "सिस्टम इनसाइट्स इंजन" },
  insightsDesc: { 
    EN: "Aggregated analytics and systemic overview across synchronized liquidity networks.", 
    HI: "सिंक्रनाइज़ेड लिक्विडिटी नेटवर्क में एकत्रित एनालिटिक्स और सिस्टेमिक अवलोकन।" 
  },
  balance: { EN: "Total Aggregated Balance", HI: "कुल संचित शेष" },
  txRate: { EN: "Transaction Flow Rate", HI: "लेन-देन प्रवाह दर" },
  health: { EN: "Gateway Health Status", HI: "गेटवे स्वास्थ्य स्थिति" },
  active: { EN: "Active", HI: "सक्रिय" },
  auditTrailTitle: { EN: "Autonomous Execution Trail", HI: "स्वायत्त निष्पादन ट्रेल" },
  
  // Page: Payments Router
  paymentsTitle: { EN: "Unified Payments Router", HI: "एकीकृत भुगतान राउター" },
  paymentsDesc: { 
    EN: "Select an aggregated liability and route execution through authorized payment channels.", 
    HI: "एक एकत्रित देयता का चयन करें और अधिकृत भुगतान चैनलों के माध्यम से निष्पादन को रूट करें।" 
  },
  pendingLiabilities: { EN: "Pending Liabilities", HI: "लंबित देनदारियां" },
  routingOrchestration: { EN: "Routing Orchestration", HI: "रूटिंग ऑर्केस्ट्रेशन" },
  selectedTarget: { EN: "Selected Target", HI: "चयनित लक्ष्य" },
  selectTransit: { EN: "Select Transit Service", HI: "पारगमन सेवा चुनें" },
  selectGatewayPlaceholder: { EN: "-- Select Gateway --", HI: "-- गेटवे चुनें --" },
  executeBtn: { EN: "Execute Redirection", HI: "रीडायरेक्शन निष्पादित करें" },
  securingPipeline: { EN: "Securing Pipeline...", HI: "पाइपलाइन सुरक्षित की जा रही है..." },
  noSelectionPlaceholder: { 
    EN: "Select an item from the tracking index to configure your gateway routing.", 
    HI: "अपने गेटवे रूटिंग को कॉन्फ़िगर करने के लिए ट्रैकिंग इंडेक्स से एक आइटम चुनें।" 
  },

  // API Log Items & Liabilities Data translations
  log1: { EN: "MCP Core Transaction Ledger Sync", HI: "एमसीपी कोर लेनदेन बहीखाता सिंक" },
  log2: { EN: "Razorpay Pipeline Re-route Trigger", HI: "रेज़रपे पाइपलाइन री-रूट ट्रिगर" },
  log3: { EN: "HDFC API Context Buffer Flush", HI: "एचडीएफसी एपीआई संदर्भ बफर फ्लश" },
  verified: { EN: "Verified", HI: "सत्यापित" },
  success: { EN: "Success", HI: "सफलता" },
  invTargetAws: { EN: "AWS Cloud Infrastructure", HI: "एडब्ल्यूएस क्लाउड इन्फ्रास्ट्रक्चर" },
  invTargetRazorpay: { EN: "Razorpay Corporate Line", HI: "रेज़रपे कॉर्पोरेट लाइन" },
  invTargetVercel: { EN: "Vercel Enterprise Tier", HI: "वर्सेल एंटरप्राइज टियर" },
  catInfra: { EN: "Infrastructure", HI: "बुनियादी ढांचा" },
  catSettlements: { EN: "Settlements", HI: "बस्तियों" },
  catHosting: { EN: "Hosting", HI: "होस्टिंग" },
  dueUrgent: { EN: "In 2 days", HI: "2 दिनों में" },
  dueNormal5: { EN: "In 5 days", HI: "5 दिनों में" },
  dueNormal9: { EN: "In 9 days", HI: "9 दिनों में" },
};