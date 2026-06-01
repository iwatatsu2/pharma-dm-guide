export type FlowNode = {
  id: string;
  type: "question" | "result";
  text: string;
  options?: { label: string; nextId: string }[];
  recommendation?: string;
  rationale?: string;
  caution?: string;
  severity?: "safe" | "caution" | "danger";
  details?: string[];
};

export type FlowChart = {
  id: string;
  title: string;
  description: string;
  icon: string;
  group: "acute" | "knowledge" | "special" | "patient";
  nodes: Record<string, FlowNode>;
  startNodeId: string;
};

export type FlowGroup = {
  id: string;
  label: string;
  color: string;
};

export const flowGroups: FlowGroup[] = [
  { id: "acute", label: "急性期対応", color: "text-dm-red" },
  { id: "knowledge", label: "薬剤知識", color: "text-cyan" },
  { id: "special", label: "特殊状況", color: "text-dm-amber" },
  { id: "patient", label: "患者対応", color: "text-cyan-light" },
];
