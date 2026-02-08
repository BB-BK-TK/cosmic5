"use client";

import { useState } from "react";
import { StarBackground } from "@/components/star-background";
import { BirthInfoForm, type BirthInfo } from "@/components/birth-info-form";
import { KeyMessageCard } from "@/components/key-message-card";
import { AstrologyCard } from "@/components/astrology-card";
import { SajuCard } from "@/components/saju-card";
import { FiveElementsChart } from "@/components/five-elements-chart";
import { IntegratedInsightCard } from "@/components/integrated-insight-card";
import { MicroActionCard } from "@/components/micro-action-card";
import { ResultTabs } from "@/components/result-tabs";
import { LoadingScreen } from "@/components/loading-screen";
import { SupabaseConnectionTest } from "@/components/supabase-connection-test";
import { cn } from "@/lib/utils";

// Sample fortune data
const sampleFortuneData = {
  keyMessage: "오늘은 작은 완성이 큰 흐름을 만드는 날",
  astrology: {
    sunSign: "염소",
    moonSign: "게",
    risingSign: "천칭",
    planets: [
      { name: "금성", symbol: "♀", sign: "물병자리", house: 5 },
      { name: "화성", symbol: "♂", sign: "사수자리", house: 3 },
      { name: "토성", symbol: "♄", sign: "물고기자리", house: 8 },
    ],
    insights: [
      "금성이 창의적 에너지를 활성화하고 있어요",
      "토성과 태양의 트라인이 안정감을 줍니다",
    ],
  },
  saju: {
    pillars: [
      { type: "년주", korean: "갑자", hanja: "甲子", animal: "🐀" },
      { type: "월주", korean: "정묘", hanja: "丁卯", animal: "🐇" },
      { type: "일주", korean: "경오", hanja: "庚午", animal: "🐴" },
      { type: "시주", korean: "을유", hanja: "乙酉", animal: "🐓" },
    ],
    dayMaster: {
      hanja: "庚金",
      korean: "경금",
      meaning: "강한 금의 기운",
    },
    strengths: [
      "결단력이 뛰어나고 추진력이 강합니다",
      "목표를 향한 집중력이 높은 시기예요",
    ],
    cautions: [
      "수(水) 기운 부족 - 유연성 보완 필요",
      "너무 앞서 나가기보다 주변을 살피세요",
    ],
  },
  fiveElements: {
    wood: 2,
    fire: 3,
    earth: 1,
    metal: 4,
    water: 0,
    analysis: {
      excess: { element: "금(金)", meaning: "날카로움, 결단력 강함" },
      deficient: { element: "수(水)", meaning: "유연성, 적응력 보완 필요" },
    },
  },
  integrated: {
    commonTheme:
      "점성술의 토성 트라인과 사주의 금 기운이 모두 '구조화된 실행'을 지지합니다",
    cautionSignal: "달-금성 스퀘어 + 수 부족 → 감정적 결정은 피하세요",
    dailyGuideline: "속도보다 방향, 즉흥보다 계획을 따르세요",
  },
  microActions: [
    { id: "1", text: "오전에 가장 중요한 업무 하나 완료하기", tag: "커리어" },
    { id: "2", text: "점심 후 5분 스트레칭", tag: "건강" },
    { id: "3", text: "퇴근 전 오늘 잘한 일 3가지 적기", tag: "멘탈" },
  ],
};

export default function CosmicFivePage() {
  const [view, setView] = useState<"input" | "loading" | "result">("input");
  const [activeTab, setActiveTab] = useState("today");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- BirthInfo will be used when API is connected
  const handleSubmit = (birthInfo: BirthInfo) => {
    setView("loading");

    // Simulate loading
    setTimeout(() => {
      setView("result");
    }, 3500);
  };

  const handleBack = () => {
    setView("input");
  };

  const handleRegenerate = () => {
    setView("loading");
    setTimeout(() => {
      setView("result");
    }, 2500);
  };

  const formatDate = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "long",
    };
    return today.toLocaleDateString("ko-KR", options);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <StarBackground />

      <div className="relative z-10 max-w-[480px] mx-auto px-5 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          {view === "result" && (
            <button
              onClick={handleBack}
              className="absolute left-5 top-8 text-text-muted hover:text-text-secondary transition-colors"
            >
              ← 뒤로
            </button>
          )}
          <h1
            className="text-3xl font-light tracking-tight text-text-primary mb-2"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Cosmic 五
          </h1>
          <p className="text-sm text-text-secondary">
            별과 오행이 읽어주는 오늘의 방향
          </p>
        </header>

        {/* Content */}
        {view === "input" && (
          <BirthInfoForm onSubmit={handleSubmit} isLoading={false} />
        )}

        {view === "loading" && <LoadingScreen />}

        {view === "result" && (
          <div className="space-y-6 animate-in fade-in duration-500">
            {/* Tabs */}
            <ResultTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Key Message */}
            <KeyMessageCard
              message={sampleFortuneData.keyMessage}
              date={formatDate()}
            />

            {/* Astrology Card */}
            <AstrologyCard data={sampleFortuneData.astrology} />

            {/* Saju Card */}
            <SajuCard data={sampleFortuneData.saju} />

            {/* Five Elements Chart */}
            <FiveElementsChart data={sampleFortuneData.fiveElements} />

            {/* Integrated Insight */}
            <IntegratedInsightCard data={sampleFortuneData.integrated} />

            {/* Micro Actions */}
            <MicroActionCard actions={sampleFortuneData.microActions} />

            {/* Regenerate Button */}
            <button
              onClick={handleRegenerate}
              className={cn(
                "w-full h-[52px] rounded-xl font-medium text-sm",
                "bg-transparent border border-glass-border",
                "text-text-secondary",
                "transition-all duration-200",
                "hover:bg-glass-bg flex items-center justify-center gap-2"
              )}
            >
              <span>↻</span> 다른 해석 보기
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center space-y-3">
          <SupabaseConnectionTest />
          <p className="text-xs text-text-muted">
            ✦ Cosmic 五 · 별과 오행의 조화
          </p>
        </footer>
      </div>
    </div>
  );
}
