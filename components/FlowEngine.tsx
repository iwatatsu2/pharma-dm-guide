"use client";

import { useState, useCallback } from "react";
import type { FlowChart, FlowNode } from "@/data/types";

function severityColor(severity?: string) {
  switch (severity) {
    case "danger":
      return "border-dm-red bg-dm-red/10";
    case "caution":
      return "border-dm-amber bg-dm-amber/10";
    case "safe":
      return "border-cyan-light bg-cyan-light/10";
    default:
      return "border-teal bg-teal/10";
  }
}

function severityBadge(severity?: string) {
  switch (severity) {
    case "danger":
      return (
        <span className="bg-dm-red/20 text-dm-red text-xs font-bold px-2 py-0.5 rounded-full">
          ⚠ 要注意
        </span>
      );
    case "caution":
      return (
        <span className="bg-dm-amber/20 text-dm-amber text-xs font-bold px-2 py-0.5 rounded-full">
          △ 注意
        </span>
      );
    case "safe":
      return (
        <span className="bg-cyan-light/20 text-cyan-light text-xs font-bold px-2 py-0.5 rounded-full">
          ○ 安全
        </span>
      );
    default:
      return null;
  }
}

export default function FlowEngine({ flow }: { flow: FlowChart }) {
  const [history, setHistory] = useState<string[]>([flow.startNodeId]);
  const currentNodeId = history[history.length - 1];
  const currentNode: FlowNode = flow.nodes[currentNodeId];

  const selectOption = useCallback(
    (nextId: string) => {
      setHistory((prev) => [...prev, nextId]);
    },
    []
  );

  const goBack = useCallback(() => {
    setHistory((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  }, []);

  const restart = useCallback(() => {
    setHistory([flow.startNodeId]);
  }, [flow.startNodeId]);

  if (!currentNode) return null;

  const stepNum = history.length;

  return (
    <div className="px-4 pb-8">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-text-secondary text-xs">
          ステップ {stepNum}
        </span>
        <div className="flex-1 h-1 bg-teal/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal rounded-full transition-all duration-300"
            style={{ width: `${Math.min(stepNum * 20, 100)}%` }}
          />
        </div>
      </div>

      {/* Question Node */}
      {currentNode.type === "question" && (
        <div>
          <h2 className="text-lg font-bold mb-5 leading-relaxed">
            {currentNode.text}
          </h2>
          <div className="flex flex-col gap-3">
            {currentNode.options?.map((opt) => (
              <button
                key={opt.nextId}
                onClick={() => selectOption(opt.nextId)}
                className="w-full text-left bg-bg-card border border-teal/20 rounded-xl px-4 py-3.5 font-semibold text-[15px] transition-all duration-150 hover:bg-bg-card-hover hover:border-teal/40 active:scale-[0.98]"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Result Node */}
      {currentNode.type === "result" && (
        <div
          className={`border-l-4 rounded-xl p-5 ${severityColor(currentNode.severity)}`}
        >
          <div className="flex items-center gap-2 mb-3">
            {severityBadge(currentNode.severity)}
          </div>
          <h2 className="text-lg font-bold mb-2">{currentNode.text}</h2>

          {currentNode.recommendation && (
            <div className="mt-3">
              <p className="text-xs text-text-secondary font-bold mb-1">
                推奨アクション
              </p>
              <p className="text-[15px] leading-relaxed font-semibold">
                {currentNode.recommendation}
              </p>
            </div>
          )}

          {currentNode.details && currentNode.details.length > 0 && (
            <ul className="mt-3 space-y-1">
              {currentNode.details.map((d, i) => (
                <li key={i} className="text-sm text-text-secondary flex gap-2">
                  <span className="text-teal shrink-0">•</span>
                  {d}
                </li>
              ))}
            </ul>
          )}

          {currentNode.rationale && (
            <div className="mt-4 pt-3 border-t border-white/10">
              <p className="text-xs text-text-secondary font-bold mb-1">
                根拠
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {currentNode.rationale}
              </p>
            </div>
          )}

          {currentNode.caution && (
            <div className="mt-3 bg-dm-red/5 border border-dm-red/20 rounded-lg px-3 py-2">
              <p className="text-sm text-dm-red font-semibold">
                ⚠ {currentNode.caution}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3 mt-6">
        {history.length > 1 && (
          <button
            onClick={goBack}
            className="flex-1 border border-teal/30 text-teal rounded-xl py-3 font-bold text-sm transition-all hover:bg-teal/10"
          >
            ← 戻る
          </button>
        )}
        {currentNode.type === "result" && (
          <button
            onClick={restart}
            className="flex-1 bg-teal text-bg-dark rounded-xl py-3 font-bold text-sm transition-all hover:bg-cyan"
          >
            最初からやり直す
          </button>
        )}
      </div>
    </div>
  );
}
