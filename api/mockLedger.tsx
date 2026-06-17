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

export const paymentGateways = [
  { id: "hdfc-corp", name: "HDFC Corporate Bank API", type: "NetBanking" },
  { id: "icici-biz", name: "ICICI Corporate Connect", type: "IMPS / NEFT" },
  { id: "razorpay-x", name: "RazorpayX Smart Router", type: "UPI / Credit Line" },
];