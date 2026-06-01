"use client";

import Link from "next/link";

type Props = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export default function CategoryCard({ id, title, description, icon }: Props) {
  return (
    <Link href={`/flow/${id}`}>
      <div className="bg-bg-card border border-teal/20 rounded-xl p-4 transition-all duration-200 hover:bg-bg-card-hover hover:border-teal/40 active:scale-[0.98]">
        <div className="flex items-start gap-3">
          <span className="text-2xl mt-0.5">{icon}</span>
          <div className="min-w-0">
            <h3 className="font-bold text-[15px] text-text-primary">
              {title}
            </h3>
            <p className="text-text-secondary text-xs mt-1 leading-relaxed">
              {description}
            </p>
          </div>
          <span className="text-teal/50 ml-auto mt-1 shrink-0">›</span>
        </div>
      </div>
    </Link>
  );
}
