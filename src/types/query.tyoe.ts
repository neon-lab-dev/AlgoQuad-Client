
export const IssueTypeList = [
  "account",
  "payment",
  "product",
  "puja",
  "consultation",
  "astrology",
  "technical",
  "report",
  "refund",
  "cancellation",
  "delivery",
  "feedback",
  "other"
] as const;

export type TIssueType = typeof IssueTypeList[number];


export type TQuery = {
  _id: string;
  ticketId: string;
  userId: string;
  subject: string;
  issueType: TIssueType;
  description: string;
  attachments?: string[];
  status: "pending" | "inProgress" | "resolved";
  adminFeedback?: string;
  resolvedAt?: string;
  createdAt: string;
  updatedAt?: string;
};