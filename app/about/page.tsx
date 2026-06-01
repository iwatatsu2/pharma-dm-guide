import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pb-8">
      <Header showBack />

      <div className="px-4 pt-4">
        {/* Profile Card */}
        <div className="bg-bg-card border border-teal/20 rounded-2xl p-6 text-center">
          <Image
            src="/dr-iwatatsu.png"
            alt="Dr.いわたつ"
            width={100}
            height={100}
            className="rounded-full border-2 border-teal/30 mx-auto mb-4"
          />
          <h2 className="text-xl font-black text-text-primary">
            Dr. いわたつ
          </h2>
          <p className="text-text-secondary text-sm mt-1">岩本 達也</p>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            <span className="bg-teal/15 text-teal text-[11px] font-bold px-2.5 py-1 rounded-full">
              糖尿病専門医・指導医
            </span>
            <span className="bg-teal/15 text-teal text-[11px] font-bold px-2.5 py-1 rounded-full">
              内分泌専門医・指導医
            </span>
          </div>
        </div>

        {/* About */}
        <div className="mt-5 space-y-4">
          <div className="bg-bg-card border border-teal/10 rounded-xl p-4">
            <h3 className="text-sm font-bold text-cyan mb-2">経歴・受賞</h3>
            <ul className="text-sm text-text-secondary space-y-1.5">
              <li className="flex gap-2">
                <span className="text-teal shrink-0">•</span>
                ベストレジデント賞
              </li>
              <li className="flex gap-2">
                <span className="text-teal shrink-0">•</span>
                ベストチューター賞
              </li>
              <li className="flex gap-2">
                <span className="text-teal shrink-0">•</span>
                順天堂大学医学部附属病院
              </li>
            </ul>
          </div>

          <div className="bg-bg-card border border-teal/10 rounded-xl p-4">
            <h3 className="text-sm font-bold text-cyan mb-2">開発アプリ</h3>
            <ul className="text-sm text-text-secondary space-y-2">
              <li>
                <a href="https://iwatatsu2.github.io/dm-compass/" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-cyan transition-colors">
                  <span className="text-teal shrink-0">•</span>
                  <span><span className="font-bold text-text-primary">DM Compass</span> — 糖尿病病棟の5つの計算</span>
                </a>
              </li>
              <li>
                <a href="https://insulin-calculator-gamma.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-cyan transition-colors">
                  <span className="text-teal shrink-0">•</span>
                  <span><span className="font-bold text-text-primary">InsuCalc</span> — インスリン・カーボ計算機</span>
                </a>
              </li>
              <li>
                <a href="https://iwatatsu2.github.io/electrolyte-compass/" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-cyan transition-colors">
                  <span className="text-teal shrink-0">•</span>
                  <span><span className="font-bold text-text-primary">Electrolyte Compass</span> — 電解質異常の鑑別・対応</span>
                </a>
              </li>
              <li>
                <a href="https://endoguide.vercel.app/endocrine" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-cyan transition-colors">
                  <span className="text-teal shrink-0">•</span>
                  <span><span className="font-bold text-text-primary">Endo Compass</span> — 内分泌負荷試験リファレンス</span>
                </a>
              </li>
              <li>
                <a href="https://iwatatsu2.github.io/dr-iwatatsu-dm-renal-tool/" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-cyan transition-colors">
                  <span className="text-teal shrink-0">•</span>
                  <span><span className="font-bold text-text-primary">DM腎機能Doseツール</span> — 腎機能別の用量サポート</span>
                </a>
              </li>
              <li>
                <a href="https://glucose-diary.vercel.app/record" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-cyan transition-colors">
                  <span className="text-teal shrink-0">•</span>
                  <span><span className="font-bold text-text-primary">Glucose Diary</span> — 血糖・体重・血圧記録アプリ</span>
                </a>
              </li>
              <li>
                <a href="https://medapp-market.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-cyan transition-colors">
                  <span className="text-teal shrink-0">•</span>
                  <span><span className="font-bold text-text-primary">MedApp Market</span> — 医療Webアプリマーケット</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-bg-card border border-teal/10 rounded-xl p-4">
            <h3 className="text-sm font-bold text-cyan mb-2">
              PharmaDM Guide について
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              病棟薬剤師が糖尿病薬について迷った時に、フローチャート形式で判断をサポートするツールです。術前休薬・シックデイ・腎機能別の用量調整など、12のテーマを網羅しています。
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mt-2">
              すべて無料・登録不要・オフライン対応。スマートフォンからいつでもアクセスできます。
            </p>
          </div>

          {/* SNS Links */}
          <div className="bg-bg-card border border-teal/10 rounded-xl p-4">
            <h3 className="text-sm font-bold text-cyan mb-2">SNS</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://x.com/DrIwatatsu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-cyan transition-colors"
              >
                <span className="text-teal">𝕏</span> @DrIwatatsu
              </a>
              <a
                href="https://www.instagram.com/dr.iwatatsu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-cyan transition-colors"
              >
                <span className="text-teal">📷</span> @dr.iwatatsu
              </a>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-block bg-teal text-bg-dark font-bold text-sm px-6 py-3 rounded-xl hover:bg-cyan transition-colors"
          >
            フローチャートを使う
          </Link>
        </div>
      </div>
    </div>
  );
}
