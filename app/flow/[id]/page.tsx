import { notFound } from "next/navigation";
import Header from "@/components/Header";
import FlowEngine from "@/components/FlowEngine";
import { flows, getFlowById } from "@/data/flows";

export function generateStaticParams() {
  return flows.map((f) => ({ id: f.id }));
}

export default async function FlowPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const flow = getFlowById(id);
  if (!flow) notFound();

  return (
    <div>
      <Header showBack />
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl">{flow.icon}</span>
          <h1 className="text-xl font-black text-text-primary">{flow.title}</h1>
        </div>
        <p className="text-text-secondary text-xs">{flow.description}</p>
      </div>
      <FlowEngine flow={flow} />
    </div>
  );
}
