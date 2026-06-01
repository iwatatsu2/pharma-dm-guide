import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import { flows } from "@/data/flows";
import { flowGroups } from "@/data/types";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pb-8">
      <Header />

      {/* Hero */}
      <div className="px-4 py-6 text-center">
        <div className="flex justify-center mb-3">
          <Image
            src="/app-icon.png"
            alt="PharmaDM Guide"
            width={80}
            height={80}
            className="rounded-2xl"
          />
        </div>
        <h2 className="text-xl font-black text-text-primary mb-1">
          病棟で迷ったら、
          <span className="text-cyan">ここで確認</span>
        </h2>
        <p className="text-text-secondary text-xs">
          糖尿病薬の判断フローチャート for 薬剤師
        </p>
        <p className="text-text-secondary text-[10px] mt-1">
          監修：Dr. いわたつ（糖尿病専門医・指導医）
        </p>
      </div>

      {/* Grouped Category Cards */}
      <div className="px-4 space-y-6">
        {flowGroups.map((group) => {
          const groupFlows = flows.filter((f) => f.group === group.id);
          if (groupFlows.length === 0) return null;
          return (
            <div key={group.id}>
              <h3 className={`text-xs font-bold mb-2 ml-1 ${group.color}`}>
                {group.label}
              </h3>
              <div className="flex flex-col gap-2.5">
                {groupFlows.map((flow) => (
                  <CategoryCard
                    key={flow.id}
                    id={flow.id}
                    title={flow.title}
                    description={flow.description}
                    icon={flow.icon}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats */}
      <div className="px-4 mt-6">
        <div className="bg-bg-card border border-teal/10 rounded-xl p-4 text-center">
          <div className="flex justify-around">
            <div>
              <p className="text-2xl font-black text-cyan">{flows.length}</p>
              <p className="text-text-secondary text-[10px]">フローチャート</p>
            </div>
            <div>
              <p className="text-2xl font-black text-cyan">
                {flows.reduce(
                  (sum, f) => sum + Object.keys(f.nodes).length,
                  0
                )}
              </p>
              <p className="text-text-secondary text-[10px]">判断ノード</p>
            </div>
            <div>
              <p className="text-2xl font-black text-cyan">4</p>
              <p className="text-text-secondary text-[10px]">カテゴリ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-text-secondary text-[10px] mt-6 px-4">
        <p>© Dr. いわたつ｜PharmaDM Guide</p>
        <p className="mt-1">
          本ツールは臨床判断の参考情報です。最終判断は主治医にご確認ください。
        </p>
      </footer>
    </div>
  );
}
