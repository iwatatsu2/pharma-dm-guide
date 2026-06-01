"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header({ showBack = false }: { showBack?: boolean }) {
  return (
    <header className="flex items-center justify-between px-4 py-4">
      {showBack ? (
        <Link
          href="/"
          className="text-teal text-sm font-bold flex items-center gap-1"
        >
          ← トップへ
        </Link>
      ) : (
        <div />
      )}
      <div className="flex items-center gap-2">
        <div className="text-right">
          <h1 className="text-cyan font-black text-lg tracking-tight">
            PharmaDM Guide
          </h1>
          <p className="text-text-secondary text-[10px]">
            薬剤師のための糖尿病薬判断ツール
          </p>
        </div>
        <Link href="/about">
          <Image
            src="/dr-iwatatsu.png"
            alt="Dr.いわたつ"
            width={36}
            height={36}
            className="rounded-full border border-teal/30 hover:border-cyan transition-colors"
          />
        </Link>
      </div>
    </header>
  );
}
