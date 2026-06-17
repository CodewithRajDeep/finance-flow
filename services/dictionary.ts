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
  // Global Header Status and Sidebar Elements
  pipelineStatus: { EN: "Network Pipeline", HI: "नेटवर्क पाइपलाइन", DE: "Netzwerk-Pipeline", ES: "Pipeline de Red", FR: "Pipeline Réseau", JA: "ネットワークパイプライン" },
  operational: { EN: "Operational", HI: "सक्रिय रूप से चालू", DE: "Betriebsbereit", ES: "Operativo", FR: "Opérationnel", JA: "稼働中" },
  navigation: {
    EN: "INSIGHTS|PAYMENTS|REPORTS|STOCKS|SETTINGS",
    HI: "इनसाइट्स|भुगतान|रिपोर्ट|स्टॉक|सेटिंग्स",
    DE: "INSIGHTS|ZAHLUNGEN|BERICHTE|AKTIEN|EINSTELLUNGEN",
    ES: "INFORMACIÓN|PAGOS|INFORMES|ACCIONES|AJUSTES",
    FR: "ANALYSES|PAIEMENTS|RAPPORTS|ACTIONS|REGLAGES",
    JA: "インサイト|支払い|レポート|株式|設定"
  },
  settingsTitle: { EN: "Settings", HI: "सेटिंग्स", DE: "Einstellungen", ES: "Ajustes", FR: "Réglages", JA: "設定" },
  nodeInfo: { EN: "System Node Info", HI: "सिस्टम नोड जानकारी", DE: "Systemknoten-Info", ES: "Info de Nodo", FR: "Info Nodo", JA: "システムノード情報" },
  buildTarget: { EN: "Build Target: Project Phoenix", HI: "बिल्ड वर्शन: प्रोजेक्ट फीनिक्स", DE: "Build-Ziel: Projekt Phoenix", ES: "Compilación: Proyecto Phoenix", FR: "Build: Projet Phoenix", JA: "ビルドターゲット: プロジェクト・フェニックス" },
  coreHash: { EN: "Core Hash", HI: "कोर हैश", DE: "Kern-Hash", ES: "Hash de Núcleo", FR: "Hash Noyau", JA: "コアハッシュ" },
  timezoneIntegration: { EN: "Timezone Integration", HI: "समय क्षेत्र एकीकरण", DE: "Zeitzonen-Integration", ES: "Integración Horaria", FR: "Intégration Fuseau", JA: "タイムゾーン統合" },
  systemLocalization: { EN: "System Localization", HI: "सिस्टम स्थानीयकरण", DE: "Systemlokalisierung", ES: "Localización del Sistema", FR: "Localisation Système", JA: "システムローカライズ" },
  secureCore: { EN: "Secure Core Active", HI: "सुरक्षित कोर सक्रिय", DE: "Sicherer Kern Aktiv", ES: "Núcleo Seguro Activo", FR: "Noyau Sécurisé Actif", JA: "セキュアコア有効" },

  // Page: Insights (Keys case matched perfectly to clear bugs)
  insightsTitle: { EN: "System Insights Engine", HI: "सिस्टम इनसाइट्स इंजन", DE: "System-Insights-Engine", ES: "Motor de Información", FR: "Moteur d'Analyse", JA: "システムインサイトエンジン" },
  insightsDesc: { 
    EN: "Aggregated analytics and systemic overview across synchronized liquidity networks.", 
    HI: "सिंक्रनाइज़ेड लिक्विडिटी नेटवर्क में एकत्रित एनालिटिक्स और सिस्टेमिक अवलोकन।",
    DE: "Aggregierte Analysen und systemischer Überblick über synchronisierte Liquiditätsnetzwerke.",
    ES: "Análisis agregados y visión general sistémica a través de redes de liquidez sincronizadas.",
    FR: "Analyses agrégées et vue d'ensemble systémique à travers des réseaux de liquidité synchronisés.",
    JA: "同期された流動性ネットワーク全体の集約された分析とシステム概要。"
  },
  balance: { EN: "Total Aggregated Balance", HI: "कुल संचित शेष", DE: "Gesamtsaldo Aggregiert", ES: "Saldo Total Agregado", FR: "Solde Total Agrégé", JA: "総集計残高" },
  txRate: { EN: "Transaction Flow Rate", HI: "लेन-देन प्रवाह दर", DE: "Transaktionsflussrate", ES: "Flujo de Transacciones", FR: "Flux de Transactions", JA: "取引フローレート" },
  health: { EN: "Gateway Health Status", HI: "गेटवे स्वास्थ्य स्थिति", DE: "Gateway-Integritätsstatus", ES: "Estado de Pasarela", FR: "État de la Passerelle", JA: "ゲートウェイの健康状態" },
  active: { EN: "Active", HI: "सक्रिय", DE: "Aktiv", ES: "Activo", FR: "Actif", JA: "アクティブ" },
  auditTrailTitle: { EN: "Autonomous Execution Trail", HI: "स्वायत्त निष्पादन ट्रेल", DE: "Autonomer Ausführungspfad", ES: "Rastro de Ejecución Autónoma", FR: "Trace d'Exécution Autonome", JA: "自律実行トレイル" },
  
  // Page: Payments Router
  paymentsTitle: { EN: "Unified Payments Router", HI: "एकीकृत भुगतान राउटर", DE: "Einheitlicher Zahlungs-Router", ES: "Enrutador de Pagos Unificado", FR: "Routeur de Paiements Unifié", JA: "統合決済ルーター" },
  paymentsDesc: { 
    EN: "Select an aggregated liability and route execution through authorized payment channels.", 
    HI: "एक एकत्रित देयता का चयन करें और अधिकृत भुगतान चैनलों के माध्यम से निष्पादन को रूट करें।",
    DE: "Wählen Sie eine Verbindlichkeit aus und leiten Sie die Ausführung über autorisierte Kanäle.",
    ES: "Seleccione un pasivo agregado y rutee la ejecución a través de canales autorizados.",
    FR: "Sélectionnez un passif agrégé et routez l'exécution via des canaux autorisés.",
    JA: "集計された負債を選択し、承認された決済チャネルを通じて実行をルーティングします。"
  },
  pendingLiabilities: { EN: "Pending Liabilities", HI: "लंबित देनदारियां", DE: "Offene Verbindlichkeiten", ES: "Pasivos Pendientes", FR: "Passifs en Attente", JA: "未払いの負債" },
  routingOrchestration: { EN: "Routing Orchestration", HI: "रूटिंग ऑर्केस्ट्रेशन", DE: "Routing-Orchestrierung", ES: "Orquestación de Rutas", FR: "Orchestration Routage", JA: "ルーティングオーケストレーション" },
  selectedTarget: { EN: "Selected Target", HI: "चयनित लक्ष्य", DE: "Ausgewähltes Ziel", ES: "Objetivo Seleccionado", FR: "Cible Sélectionnée", JA: "選択されたターゲット" },
  selectTransit: { EN: "Select Transit Service", HI: "पारगमन सेवा चुनें", DE: "Transitdienst Auswählen", ES: "Seleccionar Servicio", FR: "Sélectionner Service", JA: "トランジットサービス選択" },
  selectGatewayPlaceholder: { EN: "-- Select Gateway --", HI: "-- गेटवे चुनें --", DE: "-- Gateway Wählen --", ES: "-- Seleccionar Pasarela --", FR: "-- Sélectionner Passerelle --", JA: "-- ゲートウェイ選択 --" },
  executeBtn: { EN: "Execute Redirection", HI: "रीडायरेक्शन निष्पादित करें", DE: "Weiterleitung Ausführen", ES: "Ejecutar Redirección", FR: "Exécuter Redirection", JA: "リダイレクト実行" },
  securingPipeline: { EN: "Securing Pipeline...", HI: "पाइपलाइन सुरक्षित की जा रही है...", DE: "Pipeline Sichern...", ES: "Asegurando Pipeline...", FR: "Sécurisation Pipeline...", JA: "パイプライン保護中..." },
  noSelectionPlaceholder: { 
    EN: "Select an item from the tracking index to configure your gateway routing.", 
    HI: "अपने गेटवे रूटिंग को कॉन्फ़िगर करने के लिए ट्रैकिंग इंडेक्स से एक आइटम चुनें।",
    DE: "Wählen Sie ein Element aus dem Index aus, um das Gateway-Routing zu konfigurieren.",
    ES: "Seleccione un elemento del índice para configurar el enrutamiento de la pasarela.",
    FR: "Sélectionnez un élément de l'index pour configurer le routage de la passerelle.",
    JA: "ゲートウェイのルーティングを構成するには、追跡インデックスからアイテムを選択してください。"
  },
  
  railAggregator: { EN: "Merchant Aggregator", HI: "व्यापारी एग्रीगेटर", DE: "Händler-Aggregator" },
  railUpi: { EN: "Instant Real-time / UPI", HI: "तत्काल भुगतान / यूपीआई", DE: "Echtzeit-Überweisung / UPI" },
  railWallet: { EN: "Digital Wallet Node", HI: "डिजिटल वॉलेट नोड", DE: "Digitales Wallet" },
  railCard: { EN: "Card Settlement Scheme", HI: "कार्ड निपटान योजना", DE: "Karten-Abrechnungssystem" },
  railBank: { EN: "Bank Transfer / SWIFT", HI: "बैंक ट्रांसफर / स्विफ्ट", DE: "Banküberweisung / SWIFT" },
  railBnpl: { EN: "Buy Now Pay Later", HI: "अभी खरीदें बाद में भुगतान करें", DE: "Jetzt kaufen, später bezahlen" },
  railSmart: { EN: "Autonomous AI Smart Routing", HI: "स्वायत्त एआई स्मार्ट रूटिंग", DE: "Autonomes KI Smart Routing" },
  searchPlaceholder: { EN: "Search gateways by name or region...", HI: "नाम या क्षेत्र द्वारा गेटवे खोजें...", DE: "Gateways nach Name oder Region suchen..." },


  transactionHistoryTitle: { EN: "Cross-Gateway Transaction Ledger", HI: "क्रॉस-गेटवे लेनदेन बहीखाता", DE: "Zahlungsverlauf-Hauptbuch" },
  transactionHistoryDesc: { EN: "Real-time auditing trail across all active international payment gateways and card networks.", HI: "सभी सक्रिय अंतरराष्ट्रीय भुगतान गेटवे और कार्ड नेटवर्क पर वास्तविक समय ऑडिटिंग ट्रेल।", DE: "Echtzeit-Prüfpfad über alle aktiven internationalen Zahlungsgateways und Kartennetzwerke." },
  txId: { EN: "Transaction ID", HI: "लेनदेन आईडी", DE: "Transaktions-ID" },
  gateway: { EN: "Gateway Node", HI: "गेटवे नोड", DE: "Gateway-Knoten" },
  date: { EN: "Execution Timestamp", HI: "निष्पादन समय", DE: "Ausführungs-Zeitstempel" },
  amount: { EN: "Settlement Value", HI: "निपटान मूल्य", DE: "Abrechnungswert" },
  status: { EN: "Status Flag", HI: "स्थिति ध्वज", DE: "Statuskennzeichen" },
  filterTimeline: { EN: "Configure Timeline Range", HI: "समयरेखा सीमा कॉन्फ़िगर करें", DE: "Zeitbereich Konfigurieren" },
  applyFilterBtn: { EN: "Apply Temporal Filter", HI: "समय फ़िल्टर लागू करें", DE: "Zeitfilter Anwenden" },
  reportsTitle: { EN: "Enterprise Financial Reporting Hub", HI: "एंटरप्राइज वित्तीय रिपोर्टिंग हब", DE: "Unternehmens-Finanzberichts-Hub" },
  reportsDesc: { EN: "Generate bank-grade compiled summaries, ledger snapshots, and regulatory compliance assets.", HI: "बैंक-ग्रेड संकलित सारांश, बहीखाता स्नैपशॉट और नियामक अनुपालन परिसंपत्तियां उत्पन्न करें।", DE: "Generieren Sie bankgerechte zusammengefasste Berichte, Hauptbuch-Momentaufnahmen und Compliance-Assets." },
  exportFormat: { EN: "Target Export Format", HI: "लक्षित निर्यात प्रारूप", DE: "Ziel-Exportformat" },
  downloadReport: { EN: "Compile & Export Report", HI: "रिपोर्ट संकलित और निर्यात करें", DE: "Bericht Kompilieren & Exportieren" },

  // Log Items & Metadata Identifiers
  log1: { EN: "MCP Core Transaction Ledger Sync", HI: "एमसीपी कोर लेनदेन बहीखाता सिंक", DE: "MCP Kern-Transaktionshauptbuch-Sync" },
  log2: { EN: "Razorpay Pipeline Re-route Trigger", HI: "रेज़रपे पाइपライン री-रूट ट्रिगर", DE: "Razorpay Pipeline-Routen-Trigger" },
  log3: { EN: "HDFC API Context Buffer Flush", HI: "एचडीएफसी एपीआई संदर्भ बफर फ्लश", DE: "HDFC-API Kontextpuffer-Leerung" },
  verified: { EN: "Verified", HI: "सत्यापित", DE: "Verifiziert", ES: "Verificado", FR: "Vérifié", JA: "検証済み" },
  success: { EN: "Success", HI: "सफलता", DE: "Erfolgreich", ES: "Éxito", FR: "Succès", JA: "成功" },
  invTargetAws: { EN: "AWS Cloud Infrastructure", HI: "एडब्ल्यूएस क्लाउड इन्फ्रास्ट्रक्चर", DE: "AWS Cloud-Infrastruktur" },
  invTargetRazorpay: { EN: "Razorpay Corporate Line", HI: "रेज़रपे कॉर्पोरेट लाइन", DE: "Razorpay Corporate-Line" },
  invTargetVercel: { EN: "Vercel Enterprise Tier", HI: "वर्सेल एंटरप्राइज टियर", DE: "Vercel Enterprise-Tier" },
  catInfra: { EN: "Infrastructure", HI: "बुनियादी ढांचा", DE: "Infrastruktur" },
  catSettlements: { EN: "Settlements", HI: "समाशोधन", DE: "Abrechnungen" },
  catHosting: { EN: "Hosting", HI: "होस्टिंग", DE: "Hosting" },
  dueUrgent: { EN: "In 2 days", HI: "2 दिनों में", DE: "In 2 Tagen" },
  dueNormal5: { EN: "In 5 days", HI: "5 दिनों में", DE: "In 5 Tagen" },
  dueNormal9: { EN: "In 9 days", HI: "9 दिनों में", DE: "In 9 Tagen" },
};