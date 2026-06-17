// api/mockLedger.ts

export interface MockLogItem {
  eventKey: string;
  baseTime: string;
  value: string;
  statusType: "info" | "success" | "neutral";
}

export interface MockInvoiceItem {
  id: string;
  recipientKey: string;
  amount: string;
  dueDateKey: string;
  categoryKey: string;
  status: "urgent" | "pending";
}

export interface PaymentGatewayItem {
  id: string;
  name: string;
  typeKey: string;
  region: "Global" | "India" | "Europe" | "APAC" | "LATAM" | "ME";
}

export const fetchSystemLogs = (): MockLogItem[] => [
  { eventKey: "log1", baseTime: "2026-06-17T02:15:00Z", value: "+₹14,500", statusType: "info" },
  { eventKey: "log2", baseTime: "2026-06-17T01:45:00Z", value: "verified", statusType: "neutral" },
  { eventKey: "log3", baseTime: "2026-06-17T00:30:00Z", value: "success", statusType: "success" },
];

export const fetchPendingInvoices = (): MockInvoiceItem[] => [
  { id: "INV-2026-001", recipientKey: "invTargetAws", amount: "₹42,500.00", dueDateKey: "dueUrgent", categoryKey: "catInfra", status: "urgent" },
  { id: "INV-2026-002", recipientKey: "invTargetRazorpay", amount: "₹1,18,000.00", dueDateKey: "dueNormal5", categoryKey: "catSettlements", status: "pending" },
  { id: "INV-2026-003", recipientKey: "invTargetVercel", amount: "₹24,900.00", dueDateKey: "dueNormal9", categoryKey: "catHosting", status: "pending" },
];

// Master Register for Project Phoenix Global Payment Rails
export const paymentGateways: PaymentGatewayItem[] = [
  // India Rails & Gateways
  { id: "razorpay", name: "Razorpay Payment Gateway", typeKey: "railAggregator", region: "India" },
  { id: "payu", name: "PayU India", typeKey: "railAggregator", region: "India" },
  { id: "ccavenue", name: "CCAvenue", typeKey: "railAggregator", region: "India" },
  { id: "easebuzz", name: "Easebuzz", typeKey: "railAggregator", region: "India" },
  { id: "phonepe", name: "PhonePe", typeKey: "railUpi", region: "India" },
  { id: "googlepay", name: "GooglePay", typeKey: "railUpi", region: "India" },
  { id: "paytm", name: "Paytm", typeKey: "railUpi", region: "India" },
  { id: "bhimupi", name: "BhimUPI", typeKey: "railUpi", region: "India" },
  { id: "fampay", name: "FamPay", typeKey: "railUpi", region: "India" },
  { id: "mobikwik", name: "Mobikwik Wallet", typeKey: "railWallet", region: "India" },
  { id: "rupay", name: "RuPay Cards", typeKey: "railCard", region: "India" },

  // Global Aggregators & Card Networks
  { id: "stripe", name: "Stripe Unified Engine", typeKey: "railAggregator", region: "Global" },
  { id: "paypal-flow", name: "Payflow by PayPal", typeKey: "railAggregator", region: "Global" },
  { id: "paypal-wallet", name: "PayPal Express Checkout", typeKey: "railWallet", region: "Global" },
  { id: "visa-mc", name: "Visa & Mastercard Processing", typeKey: "railCard", region: "Global" },
  { id: "amex", name: "American Express (Amex)", typeKey: "railCard", region: "Global" },
  { id: "credit-card", name: "Generic Credit Card Vault", typeKey: "railCard", region: "Global" },
  { id: "debit-card", name: "Generic Debit Card Processing", typeKey: "railCard", region: "Global" },
  { id: "applepay", name: "ApplePay", typeKey: "railWallet", region: "Global" },
  { id: "cashapp", name: "Cash App Pay", typeKey: "railWallet", region: "Global" },
  { id: "discover", name: "Discover Network", typeKey: "railCard", region: "Global" },
  { id: "bank-wire", name: "Bank Transfers (Wire/SWIFT)", typeKey: "railBank", region: "Global" },

  // APAC & International Alternatives
  { id: "alipay", name: "Alipay", typeKey: "railWallet", region: "APAC" },
  { id: "unionpay", name: "UnionPay International", typeKey: "railCard", region: "APAC" },
  { id: "grabpay", name: "GrabPay", typeKey: "railWallet", region: "APAC" },

  // European Rails & Alternative Payment Methods (APMs)
  { id: "klarna", name: "Klarna BNPL Core", typeKey: "railBnpl", region: "Europe" },
  { id: "blik", name: "Blik Mobile Code System", typeKey: "railUpi", region: "Europe" },
  { id: "bancontact", name: "Bancontact Scheme", typeKey: "railBank", region: "Europe" },
  { id: "trustly", name: "Trustly Instant Bank", typeKey: "railBank", region: "Europe" },

  // LATAM & Middle East Rails
  { id: "oxxo", name: "Oxxo Cash Voucher", typeKey: "railBank", region: "LATAM" },
  { id: "elo", name: "Elo Card Scheme", typeKey: "railCard", region: "LATAM" },
  { id: "knet", name: "KNET National Gateway", typeKey: "railBank", region: "ME" },
  
  { id: "nextgen-router", name: "Next-Gen Payment Gateway (Smart Routing)", typeKey: "railSmart", region: "Global" },
];

export interface MockTransactionHistoryItem {
  id: string;
  gatewayName: string;
  timestamp: string;
  amount: string;
  status: "success" | "pending" | "failed";
  currency: "INR" | "USD" | "EUR";
}

export const fetchTransactionHistory = (): MockTransactionHistoryItem[] => [
  { id: "TXN-902184", gatewayName: "Razorpay Payment Gateway", timestamp: "2026-06-17T08:12:00Z", amount: "₹45,200.00", status: "success", currency: "INR" },
  { id: "TXN-902185", gatewayName: "Stripe Unified Engine", timestamp: "2026-06-16T21:44:00Z", amount: "$1,450.00", status: "success", currency: "USD" },
  { id: "TXN-902186", gatewayName: "BhimUPI", timestamp: "2026-06-16T14:22:00Z", amount: "₹12,000.00", status: "success", currency: "INR" },
  { id: "TXN-902187", gatewayName: "Klarna BNPL Core", timestamp: "2026-06-15T11:05:00Z", amount: "€320.00", status: "pending", currency: "EUR" },
  { id: "TXN-902188", gatewayName: "Bank Transfers (Wire/SWIFT)", timestamp: "2026-06-14T09:30:00Z", amount: "$24,500.00", status: "failed", currency: "USD" },
  { id: "TXN-902189", gatewayName: "PhonePe", timestamp: "2026-06-14T04:15:00Z", amount: "₹8,900.00", status: "success", currency: "INR" },
];

export const fetchReportingMetrics = () => [
  { key: "infraSummary", type: "Ledger Summary", itemsCount: 142, volume: "₹42,89,100.00", coverage: "Q2 Audited" },
  { key: "gatewayCompliance", type: "Gateway Performance", itemsCount: 34, volume: "99.94% Uptime", coverage: "Real-time" },
  { key: "taxFilingAsset", type: "Tax & Regulation", itemsCount: 12, volume: "Form 16 / GSTR-1", coverage: "FY 2026-27" },
];

export interface StockItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
  marketCap: string;
  open: string;
  high: string;
  low: string;
  exchange: "NSE" | "NASDAQ";
  history1D: number[];
  history1W: number[]; // Added for 1-Week layout support
  history1M: number[];
  history2M: number[]; // Added for 2-Month layout support
  history3M: number[]; // Added for 3-Month layout support
  timestamps1D: string[]; // Crosshair temporal sync labels
}

export interface MockIndexItem {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export const fetchLiveMarketIndices = (): MockIndexItem[] => [
  { name: "NIFTY 50", value: "24,085.70", change: "+0.40%", isPositive: true },
  { name: "SENSEX", value: "79,215.40", change: "+0.38%", isPositive: true },
  { name: "NASDAQ 100", value: "19,782.10", change: "+0.65%", isPositive: true },
];

export const fetchLiveEquities = (): StockItem[] => [
  // --- NATIONAL EXCHANGE SEGMENT (NSE / INDIA) ---
  { 
    symbol: "RELIANCE", name: "Reliance Industries Ltd.", price: "₹2,942.50", change: "+1.45%", isPositive: true, 
    marketCap: "₹19.8T", open: "₹2,910.00", high: "₹2,960.00", low: "₹2,905.00", exchange: "NSE",
    history1D: [2910, 2915, 2912, 2930, 2925, 2945, 2938, 2955, 2942],
    history1W: [2890, 2902, 2915, 2910, 2928, 2935, 2942],
    history1M: [2800, 2820, 2850, 2830, 2890, 2910, 2942],
    history2M: [2760, 2795, 2820, 2850, 2840, 2895, 2942],
    history3M: [2690, 2740, 2780, 2815, 2860, 2900, 2942],
    timestamps1D: ["09:15", "10:00", "10:45", "11:30", "12:15", "13:00", "13:45", "14:30", "15:30"]
  },
  { 
    symbol: "TCS", name: "Tata Consultancy Services", price: "₹3,812.00", change: "-0.42%", isPositive: false, 
    marketCap: "₹13.9T", open: "₹3,845.00", high: "₹3,850.00", low: "₹3,795.00", exchange: "NSE",
    history1D: [3845, 3840, 3830, 3810, 3825, 3805, 3815, 3798, 3812],
    history1W: [3870, 3855, 3840, 3820, 3835, 3800, 3812],
    history1M: [3950, 3920, 3900, 3870, 3840, 3820, 3812],
    history2M: [3990, 3960, 3930, 3890, 3860, 3840, 3812],
    history3M: [4080, 4040, 3990, 3950, 3890, 3850, 3812],
    timestamps1D: ["09:15", "10:00", "10:45", "11:30", "12:15", "13:00", "13:45", "14:30", "15:30"]
  },
  { 
    symbol: "HDFCBANK", name: "HDFC Bank Limited", price: "₹1,602.10", change: "+0.88%", isPositive: true, 
    marketCap: "₹12.1T", open: "₹1,588.00", high: "₹1,615.00", low: "₹1,585.00", exchange: "NSE",
    history1D: [1588, 1592, 1590, 1605, 1598, 1612, 1600, 1608, 1602],
    history1W: [1580, 1585, 1592, 1588, 1600, 1595, 1602],
    history1M: [1520, 1540, 1555, 1570, 1565, 1590, 1602],
    history2M: [1490, 1515, 1530, 1550, 1540, 1575, 1602],
    history3M: [1440, 1470, 1505, 1525, 1545, 1580, 1602],
    timestamps1D: ["09:15", "10:00", "10:45", "11:30", "12:15", "13:00", "13:45", "14:30", "15:30"]
  },
  { 
    symbol: "INFY", name: "Infosys Technologies Ltd.", price: "₹1,488.40", change: "+1.22%", isPositive: true, 
    marketCap: "₹6.1T", open: "₹1,470.00", high: "₹1,495.00", low: "₹1,468.00", exchange: "NSE",
    history1D: [1470, 1475, 1472, 1480, 1478, 1492, 1485, 1490, 1488.4],
    history1W: [1465, 1472, 1468, 1482, 1475, 1484, 1488.4],
    history1M: [1410, 1430, 1422, 1450, 1460, 1475, 1488.4],
    history2M: [1380, 1405, 1420, 1445, 1435, 1465, 1488.4],
    history3M: [1340, 1370, 1395, 1420, 1440, 1460, 1488.4],
    timestamps1D: ["09:15", "10:00", "10:45", "11:30", "12:15", "13:00", "13:45", "14:30", "15:30"]
  },
  { 
    symbol: "BHARTIARTL", name: "Bharti Airtel Limited", price: "₹1,372.15", change: "-0.15%", isPositive: false, 
    marketCap: "₹8.2T", open: "₹1,380.00", high: "₹1,388.00", low: "₹1,365.00", exchange: "NSE",
    history1D: [1380, 1385, 1382, 1375, 1378, 1368, 1374, 1370, 1372.15],
    history1W: [1385, 1380, 1374, 1378, 1365, 1369, 1372.15],
    history1M: [1310, 1330, 1350, 1342, 1365, 1378, 1372.15],
    history2M: [1280, 1310, 1325, 1340, 1355, 1380, 1372.15],
    history3M: [1240, 1270, 1300, 1320, 1345, 1365, 1372.15],
    timestamps1D: ["09:15", "10:00", "10:45", "11:30", "12:15", "13:00", "13:45", "14:30", "15:30"]
  },
  { 
    symbol: "ICICIBANK", name: "ICICI Bank Limited", price: "₹1,118.90", change: "+0.95%", isPositive: true, 
    marketCap: "₹7.8T", open: "₹1,105.00", high: "₹1,124.00", low: "₹1,102.00", exchange: "NSE",
    history1D: [1105, 1110, 1108, 1115, 1112, 1120, 1116, 1122, 1118.9],
    history1W: [1102, 1108, 1112, 1105, 1114, 1110, 1118.9],
    history1M: [1050, 1070, 1085, 1078, 1095, 1110, 1118.9],
    history2M: [1010, 1035, 1060, 1055, 1080, 1100, 1118.9],
    history3M: [960, 990, 1020, 1045, 1070, 1105, 1118.9],
    timestamps1D: ["09:15", "10:00", "10:45", "11:30", "12:15", "13:00", "13:45", "14:30", "15:30"]
  },
  { 
    symbol: "STATEBANK", name: "State Bank of India", price: "₹832.40", change: "+2.14%", isPositive: true, 
    marketCap: "₹7.4T", open: "₹815.00", high: "₹838.00", low: "₹812.00", exchange: "NSE",
    history1D: [815, 820, 818, 826, 822, 834, 828, 836, 832.4],
    history1W: [810, 814, 822, 818, 828, 830, 832.4],
    history1M: [760, 780, 795, 788, 810, 822, 832.4],
    history2M: [720, 745, 760, 775, 790, 815, 832.4],
    history3M: [680, 710, 735, 760, 780, 810, 832.4],
    timestamps1D: ["09:15", "10:00", "10:45", "11:30", "12:15", "13:00", "13:45", "14:30", "15:30"]
  },
  { 
    symbol: "ITC", name: "ITC Limited Tobacco & FMCG", price: "₹428.50", change: "-0.55%", isPositive: false, 
    marketCap: "₹5.3T", open: "₹431.00", high: "₹433.00", low: "₹426.50", exchange: "NSE",
    history1D: [431, 430, 432, 429, 430, 427, 428.5, 426.8, 428.5],
    history1W: [433, 432, 430, 431, 429, 427, 428.5],
    history1M: [445, 440, 438, 435, 432, 430, 428.5],
    history2M: [455, 450, 442, 446, 438, 434, 428.5],
    history3M: [465, 458, 452, 448, 441, 435, 428.5],
    timestamps1D: ["09:15", "10:00", "10:45", "11:30", "12:15", "13:00", "13:45", "14:30", "15:30"]
  },
  { 
    symbol: "LTIM", name: "LTIMindtree Limited", price: "₹4,720.00", change: "+1.65%", isPositive: true, 
    marketCap: "₹1.4T", open: "₹4,640.00", high: "₹4,745.00", low: "₹4,635.00", exchange: "NSE",
    history1D: [4640, 4660, 4650, 4690, 4680, 4725, 4710, 4735, 4720],
    history1W: [4620, 4650, 4640, 4680, 4695, 4710, 4720],
    history1M: [4500, 4550, 4580, 4540, 4620, 4670, 4720],
    history2M: [4420, 4480, 4520, 4490, 4560, 4640, 4720],
    history3M: [4300, 4380, 4450, 4490, 4530, 4610, 4720],
    timestamps1D: ["09:15", "10:00", "10:45", "11:30", "12:15", "13:00", "13:45", "14:30", "15:30"]
  },
  { 
    symbol: "MARUTI", name: "Maruti Suzuki India Ltd.", price: "₹12,240.00", change: "+0.32%", isPositive: true, 
    marketCap: "₹3.8T", open: "₹12,180.00", high: "₹12,310.00", low: "₹12,150.00", exchange: "NSE",
    history1D: [12180, 12210, 12195, 12250, 12230, 12280, 12220, 12260, 12240],
    history1W: [12150, 12190, 12220, 12200, 12250, 12230, 12240],
    history1M: [11800, 11950, 12050, 12000, 12120, 12190, 12240],
    history2M: [11500, 11700, 11850, 11900, 12020, 12150, 12240],
    history3M: [11200, 11450, 11680, 11800, 11950, 12100, 12240],
    timestamps1D: ["09:15", "10:00", "10:45", "11:30", "12:15", "13:00", "13:45", "14:30", "15:30"]
  },

  // --- INTERNATIONAL EXCHANGE SEGMENT (NASDAQ / US) ---
  { 
    symbol: "AAPL", name: "Apple Inc.", price: "$182.40", change: "+2.15%", isPositive: true, 
    marketCap: "$2.85T", open: "$179.50", high: "$183.10", low: "$179.20", exchange: "NASDAQ",
    history1D: [179.5, 180.2, 179.8, 181.4, 181.0, 182.5, 181.9, 182.9, 182.4],
    history1W: [178.0, 179.2, 178.9, 180.5, 181.2, 181.8, 182.4],
    history1M: [170, 172, 175, 174, 178, 180, 182.4],
    history2M: [166, 169, 173, 171, 175, 179, 182.4],
    history3M: [161, 165, 170, 173, 176, 179, 182.4],
    timestamps1D: ["09:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "16:00"]
  },
  { 
    symbol: "NVDA", name: "NVIDIA Corporation", price: "$875.12", change: "+4.82%", isPositive: true, 
    marketCap: "$2.19T", open: "$840.00", high: "$882.00", low: "$838.00", exchange: "NASDAQ",
    history1D: [840, 848, 842, 860, 855, 872, 864, 880, 875.12],
    history1W: [835, 842, 846, 858, 852, 869, 875.12],
    history1M: [720, 750, 790, 810, 830, 850, 875.12],
    history2M: [660, 700, 740, 780, 815, 845, 875.12],
    history3M: [590, 640, 700, 750, 800, 840, 875.12],
    timestamps1D: ["09:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "16:00"]
  },
  { 
    symbol: "TSLA", name: "Tesla Inc.", price: "$171.05", change: "-3.40%", isPositive: false, 
    marketCap: "$545B", open: "$176.20", high: "$177.00", low: "$169.40", exchange: "NASDAQ",
    history1D: [176.2, 175.0, 175.5, 172.1, 173.0, 170.5, 171.8, 169.8, 171.05],
    history1W: [175.0, 176.2, 174.0, 174.8, 172.5, 169.5, 171.05],
    history1M: [195, 190, 184, 188, 180, 175, 171.05],
    history2M: [208, 200, 196, 190, 185, 179, 171.05],
    history3M: [225, 215, 206, 196, 189, 180, 171.05],
    timestamps1D: ["09:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "16:00"]
  },
  { 
    symbol: "MSFT", name: "Microsoft Corporation", price: "$415.60", change: "+0.74%", isPositive: true, 
    marketCap: "$3.09T", open: "$412.00", high: "$418.20", low: "$411.50", exchange: "NASDAQ",
    history1D: [412, 414, 413, 416, 415, 417, 414.5, 416.2, 415.6],
    history1W: [410, 412, 415, 413, 416, 414, 415.6],
    history1M: [398, 402, 408, 405, 411, 413, 415.6],
    history2M: [385, 392, 399, 402, 408, 412, 415.6],
    history3M: [370, 380, 392, 398, 405, 410, 415.6],
    timestamps1D: ["09:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "16:00"]
  },
  { 
    symbol: "AMZN", name: "Amazon.com, Inc.", price: "$174.42", change: "+1.10%", isPositive: true, 
    marketCap: "$1.81T", open: "$172.10", high: "$175.60", low: "$171.80", exchange: "NASDAQ",
    history1D: [172.1, 173.0, 172.8, 174.2, 173.9, 175.0, 174.1, 174.8, 174.42],
    history1W: [171.5, 173.2, 172.5, 173.8, 174.0, 173.5, 174.42],
    history1M: [165, 168, 170, 169, 172, 173, 174.42],
    history2M: [158, 162, 166, 164, 169, 171, 174.42],
    history3M: [150, 155, 162, 165, 168, 172, 174.42],
    timestamps1D: ["09:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "16:00"]
  },
  { 
    symbol: "GOOGL", name: "Alphabet Inc. (Google)", price: "$148.48", change: "-1.24%", isPositive: false, 
    marketCap: "$1.86T", open: "$150.20", high: "$151.10", low: "$147.80", exchange: "NASDAQ",
    history1D: [150.2, 149.8, 150.5, 149.0, 149.4, 148.2, 148.8, 148.0, 148.48],
    history1W: [150.0, 149.5, 149.9, 148.8, 149.1, 147.9, 148.48],
    history1M: [155, 153, 151, 152, 149, 150, 148.48],
    history2M: [158, 156, 154, 155, 152, 151, 148.48],
    history3M: [162, 159, 156, 154, 151, 149, 148.48],
    timestamps1D: ["09:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "16:00"]
  },
  { 
    symbol: "META", name: "Meta Platforms (Facebook)", price: "$496.24", change: "+2.40%", isPositive: true, 
    marketCap: "$1.26T", open: "$484.10", high: "$501.00", low: "$483.50", exchange: "NASDAQ",
    history1D: [484.1, 488, 486, 492, 490, 498, 494, 500, 496.24],
    history1W: [482.0, 485.5, 489.0, 487.5, 493.0, 495.0, 496.24],
    history1M: [460, 472, 480, 475, 488, 492, 496.24],
    history2M: [440, 455, 468, 462, 478, 485, 496.24],
    history3M: [420, 438, 452, 460, 472, 488, 496.24],
    timestamps1D: ["09:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "16:00"]
  },
  { 
    symbol: "AMD", name: "Advanced Micro Devices Inc.", price: "$181.20", change: "-2.85%", isPositive: false, 
    marketCap: "$292B", open: "$186.40", high: "$187.50", low: "$179.60", exchange: "NASDAQ",
    history1D: [186.4, 185.0, 184.2, 182.0, 183.1, 180.5, 181.8, 179.9, 181.2],
    history1W: [185.5, 184.0, 183.5, 181.8, 182.4, 180.2, 181.2],
    history1M: [198, 194, 190, 192, 186, 184, 181.2],
    history2M: [206, 201, 196, 194, 189, 185, 181.2],
    history3M: [214, 208, 202, 196, 191, 186, 181.2],
    timestamps1D: ["09:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "16:00"]
  },
  { 
    symbol: "NFLX", name: "Netflix, Inc.", price: "$610.30", change: "+0.92%", isPositive: true, 
    marketCap: "$264B", open: "$604.00", high: "$614.50", low: "$602.10", exchange: "NASDAQ",
    history1D: [604, 608, 606, 611, 609, 613, 608.5, 612.0, 610.3],
    history1W: [602, 605, 608, 607, 612, 609, 610.3],
    history1M: [580, 588, 595, 592, 601, 606, 610.3],
    history2M: [560, 572, 580, 588, 594, 602, 610.3],
    history3M: [530, 550, 568, 580, 590, 600, 610.3],
    timestamps1D: ["09:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "16:00"]
  },
  { 
    symbol: "COST", name: "Costco Wholesale Corp.", price: "$725.10", change: "+0.18%", isPositive: true, 
    marketCap: "$321B", open: "$723.00", high: "$729.80", low: "$721.00", exchange: "NASDAQ",
    history1D: [723, 725, 724, 727, 725.5, 728.4, 723.8, 726.5, 725.1],
    history1W: [721, 724, 723, 726, 728, 724, 725.1],
    history1M: [695, 705, 712, 708, 718, 722, 725.1],
    history2M: [675, 688, 698, 702, 710, 718, 725.1],
    history3M: [650, 668, 682, 695, 708, 718, 725.1],
    timestamps1D: ["09:30", "10:15", "11:00", "11:45", "12:30", "13:15", "14:00", "14:45", "16:00"]
  }
];