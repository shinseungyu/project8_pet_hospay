"use client"

import { useState } from "react"
import Link from "next/link"
import { PawPrint, Lightbulb, ShieldCheck, DollarSign } from "lucide-react"

export function GuideContent() {
  const [activeTab, setActiveTab] = useState("tab1")

  const tabs = [
    { id: "tab1", label: "💰 병원비 절약 팁" },
    { id: "tab2", label: "🏥 1차 vs 2차 병원" },
    { id: "tab3", label: "📋 예방 진료 체크리스트" },
  ]

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-12 min-h-[70vh]">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <DollarSign className="h-7 w-7 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">동물병원 병원비 절약 가이드</h1>
        <p className="mt-3 text-muted-foreground">
          슬기로운 보호자라면 꼭 알아야 할 병원비 절약 노하우를 모았습니다.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8 flex flex-wrap gap-2 border-b border-border pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-in fade-in duration-300">

        {/* Tab 1: 병원비 절약 팁 */}
        {activeTab === "tab1" && (
          <article className="space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-bold text-foreground">반려동물 병원비, 이렇게 하면 줄일 수 있어요</h2>
              <p className="text-muted-foreground leading-relaxed">
                아이가 아플 때 비용 걱정 없이 최선의 치료를 해주고 싶은 마음은 모든 보호자님의 공통된 바람입니다. 사전 지식만 있어도 불필요한 지출을 크게 줄일 수 있습니다.
              </p>
            </section>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                { icon: "🔍", title: "1. 정기 건강검진으로 조기 발견", desc: "가장 효과적인 절약법은 예방입니다. 1년에 한 번 정기 검진을 통해 질환을 초기에 발견하면, 수술까지 이어지는 고비용 치료를 막을 수 있습니다. 초기 치료비의 5~10배를 아낄 수 있습니다." },
                { icon: "📞", title: "2. 진료비 사전 문의는 필수", desc: "동일한 수술이라도 병원마다 비용이 크게 다릅니다. 적어도 2~3군데 병원에 진료비를 사전 문의하고 비교하는 것만으로도 20~30% 이상 절약할 수 있습니다." },
                { icon: "💊", title: "3. 처방약은 온라인 약국 활용", desc: "수의사 처방전을 받은 후, 심장사상충·관절 영양제 등 일부 약물은 온라인 동물 의약품 쇼핑몰에서 더 저렴하게 구입 가능합니다. 단, 처방전 없이 임의 투약은 절대 금물입니다." },
                { icon: "🐾", title: "4. 펫보험은 건강할 때 가입", desc: "기존에 진단받은 질환은 보험 가입 후에도 보장 제외될 수 있습니다. 강아지·고양이가 어리고 건강할 때 미리 가입해야 슬개골, 관절 등 다빈도 질환도 폭넓게 보장받습니다." },
                { icon: "🏥", title: "5. 1차 병원에서 충분히 치료하기", desc: "모든 치료가 2차 전문 병원을 필요로 하지는 않습니다. 간단한 외상, 피부질환, 소화 문제 등은 동네 1차 병원에서도 충분히 잘 치료됩니다. 불필요한 상급 병원 진료를 줄이세요." },
                { icon: "📝", title: "6. 진료 영수증 꼭 챙기기", desc: "반려동물 의료비는 연말정산 공제 대상이 아니지만, 향후 보험 청구 시 영수증이 필요합니다. 모든 진료 영수증과 진단서를 디지털로 보관해 두세요." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-primary">
                <Lightbulb className="h-5 w-5" /> 핵심 요약
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                병원비 절약의 핵심은 <strong className="text-foreground">예방 → 비교 → 보험</strong> 3단계입니다. 정기 검진으로 예방하고, 진료비를 비교하고, 건강할 때 보험을 들어두세요.
              </p>
            </div>

            <div className="text-center">
              <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90">
                <PawPrint className="h-4 w-4" /> 병원비 계산기 바로가기
              </Link>
            </div>
          </article>
        )}

        {/* Tab 2: 1차 vs 2차 */}
        {activeTab === "tab2" && (
          <article className="space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-bold text-foreground">1차 병원 vs 2차 병원, 어디로 가야 할까요?</h2>
              <p className="text-muted-foreground leading-relaxed">
                어떤 병원을 선택하느냐에 따라 치료 수준과 비용이 크게 달라집니다. 상황에 맞는 병원을 선택하는 것이 현명한 보호자의 첫 번째 조건입니다.
              </p>
            </section>

            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">구분</th>
                    <th className="px-4 py-3 text-left font-semibold text-primary">1차 병원 (동네)</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">2차 병원 (전문센터)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["비용 수준", "상대적으로 낮음", "1차 대비 1.5배~2.5배"],
                    ["장비", "기본 X-ray, 초음파", "MRI, CT, 내시경 등 첨단 장비"],
                    ["의료진", "일반 수의사", "전문과 수의사, 마취 전문의"],
                    ["진료 시간", "평일/주말 낮 위주", "24시간 응급 가능"],
                    ["적합한 경우", "일반 진료, 백신, 경증 질환", "고난이도 수술, 중환자, 응급"],
                  ].map(([label, primary, secondary], i) => (
                    <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                      <td className="px-4 py-3 font-medium text-muted-foreground">{label}</td>
                      <td className="px-4 py-3 text-primary font-medium">{primary}</td>
                      <td className="px-4 py-3 text-foreground">{secondary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <section className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">🟢 1차 병원이 적합한 경우</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["일반 건강검진 및 정기 예방접종", "가벼운 외상, 상처 소독 및 봉합", "소화불량, 가벼운 구토/설사", "기생충 예방약 처방", "간단한 피부 질환 및 외이염 치료"].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="mt-0.5 text-green-500">✓</span> {item}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">🔴 2차 병원(전문센터)이 적합한 경우</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["슬개골 탈구 3~4기 수술, 십자인대 파열", "심장, 신장, 간 등 내부 장기 정밀 검사", "신경계 이상 (발작, 하반신 마비 등)", "CT/MRI 촬영이 필요한 종양 진단", "24시간 응급 처치 및 중환자 관리"].map(item => (
                  <li key={item} className="flex items-start gap-2"><span className="mt-0.5 text-red-500">!</span> {item}</li>
                ))}
              </ul>
            </section>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900 dark:bg-amber-950/30">
              <h3 className="mb-2 font-bold text-amber-800 dark:text-amber-400">💡 스마트한 병원 이용법</h3>
              <p className="text-sm text-amber-700 leading-relaxed dark:text-amber-300">
                1차 병원에서 진단을 먼저 받고, 수의사가 2차 병원 의뢰서(진료의뢰서)를 써줄 경우 해당 서류를 지참하면 2차 병원에서도 빠른 진료가 가능합니다.
              </p>
            </div>

            <div className="text-center">
              <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90">
                <PawPrint className="h-4 w-4" /> 1차·2차 병원비 비교하기
              </Link>
            </div>
          </article>
        )}

        {/* Tab 3: 예방 진료 체크리스트 */}
        {activeTab === "tab3" && (
          <article className="space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-bold text-foreground">연령별 반려동물 예방 진료 체크리스트</h2>
              <p className="text-muted-foreground leading-relaxed">
                적절한 시기에 예방 접종과 정기 검진을 완료하면 향후 큰 질환으로 이어지는 것을 막을 수 있습니다. 우리 아이의 연령에 맞는 예방 일정을 확인하세요.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="rounded-lg bg-primary/10 px-3 py-1 text-primary">🐶 강아지</span> 연령별 체크리스트
              </h3>
              {[
                { period: "생후 6주 ~ 16주", label: "필수 접종 집중 기간", items: ["종합백신(DHPPL) 3~4회 접종 (3~4주 간격)", "코로나바이러스 백신", "켄넬코프 백신", "광견병 백신 (생후 3개월 이후, 법적 의무)"], color: "border-primary/30 bg-primary/5", badge: "bg-primary/10 text-primary" },
                { period: "생후 6개월", label: "중성화 수술 권장", items: ["중성화 수술 전 마취 전 혈액검사 필수", "소형견: 6개월 전후 권장", "대형견: 1년 이후 권장 (골격 성장 고려)", "수술 후 회복 케어 및 E-칼라 착용"], color: "border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/30", badge: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
                { period: "매년 (성견)", label: "정기 관리 항목", items: ["종합백신 및 광견병 보강 접종 (연 1회)", "심장사상충·외부기생충 예방약 (월 1회)", "치아 스케일링 (1~2년에 1회 권장)", "건강검진 (혈액, 영상 검사)"], color: "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30", badge: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200" },
                { period: "7세 이상 (노령견)", label: "노령 집중 관리", items: ["6개월마다 건강검진 강화 권장", "관절 및 이상 증상 정기 점검", "수술 시 마취 전 심폐 및 신장 검사 의무화", "치매·인지 기능 장애 조기 관찰"], color: "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30", badge: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
              ].map((s) => (
                <div key={s.period} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${s.badge}`}>{s.period}</span>
                    <span className="font-semibold text-foreground">{s.label}</span>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {s.items.map(item => (
                      <li key={item} className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="rounded-lg bg-accent/10 px-3 py-1 text-accent">🐱 고양이</span> 연령별 체크리스트
              </h3>
              {[
                { period: "생후 8주 ~ 16주", label: "기초 접종 기간", items: ["종합백신(FVRCP) 2~3회 접종", "백혈병 및 전염성 복막염(FIP) 예방 상담", "기생충 구제제 투여"], color: "border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-950/30", badge: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
                { period: "매년 (성묘)", label: "연간 기본 관리", items: ["종합백신 보강 접종 (연 1회)", "내·외부기생충 예방약 (월 1회 / 계절 고려)", "치아 스케일링 (연 1~2회 권장)", "중성화 후 비만 관리 및 체중 체크"], color: "border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/30", badge: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200" },
                { period: "7세 이상 (노령묘)", label: "신장·심장 집중 관리", items: ["6개월 단위 신장 수치(BUN, Creatinine) 검사", "갑상선 기능 항진증 정기 검사", "구내염 및 치주질환 집중 관리", "수분 섭취량 확인 (신부전 예방)"], color: "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/30", badge: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" },
              ].map((s) => (
                <div key={s.period} className={`rounded-xl border p-5 ${s.color}`}>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${s.badge}`}>{s.period}</span>
                    <span className="font-semibold text-foreground">{s.label}</span>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {s.items.map(item => (
                      <li key={item} className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <div className="text-center">
              <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90">
                <PawPrint className="h-4 w-4" /> 예방접종 비용 조회하기
              </Link>
            </div>
          </article>
        )}
      </div>
    </div>
  )
}
