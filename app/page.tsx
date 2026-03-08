import { PetCostCalculator } from "@/components/pet-cost-calculator"
import { FAQSection, FAQSchema } from "@/components/faq-section"
import { AdSlot } from "@/components/ad-slot"
import { PawPrint, TrendingUp, Shield, Clock } from "lucide-react"
import Link from "next/link"
import postsData from "@/data/posts.json"

export default function HomePage() {
  return (
    <>
      <FAQSchema />

      {/* Hero Section */}
      <section className="bg-card border-b border-border">
        <div className="mx-auto max-w-[1200px] px-4 py-12 text-center md:py-16">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <PawPrint className="h-8 w-8 text-primary" />
          </div>
          
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            ✨ 최신 농림축산식품부 진료비 현황조사 데이터 반영
          </div>
          
          <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance tracking-tight">
            강아지·고양이 병원비 계산기
            <span className="mt-2 block text-xl font-semibold text-primary md:text-2xl">
              | 동물병원 수술비·진료비 평균 비용 조회 (2026)
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed text-pretty">
            강아지, 고양이 치료 항목별 예상 비용을 확인하세요.
            <br className="hidden sm:block" />
            1차 병원과 2차 병원 비용을 한눈에 비교할 수 있어요.
          </p>
        </div>
      </section>

      {/* Ad Slot - Top */}
      <div className="mx-auto max-w-[1200px] px-4 py-4 hidden">
        <AdSlot position="top" />
      </div>

      {/* Main Content */}
      <section className="mx-auto max-w-[1200px] px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          {/* Calculator */}
          <div>
            <PetCostCalculator />

            {/* Ad Slot - After Results */}
            <div className="mt-8 hidden">
              <AdSlot position="middle" />
            </div>


            {/* Board Preview Section */}
            <div className="mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">펫케어 팁 & 최신 소식</h2>
                <Link href="/board" className="text-sm font-medium text-primary hover:underline">
                  전체 보기 →
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                {(postsData as any[]).slice(0, 3).map((post: any) => (
                  <Link
                    key={post.id}
                    href={`/board?id=${post.id}`}
                    className="group rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/50 hover:bg-muted/30"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="inline-flex rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="mb-1 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {post.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="hidden">
                <AdSlot position="sidebar" />
              </div>

              {/* Info Cards */}
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="mb-4 font-semibold text-foreground">왜 비용을 확인해야 할까요?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">합리적인 선택</p>
                      <p className="text-xs text-muted-foreground">
                        평균 비용을 알면 과다 청구를 예방할 수 있어요
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <Shield className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">보험 가입 참고</p>
                      <p className="text-xs text-muted-foreground">
                        예상 비용으로 적절한 보험 상품을 선택하세요
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-chart-3/10">
                      <Clock className="h-4 w-4 text-chart-3" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">사전 준비</p>
                      <p className="text-xs text-muted-foreground">
                        예상 비용을 알고 미리 준비할 수 있어요
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="mb-3 font-semibold text-foreground">최신 펫케어 소식</h3>
                <ul className="space-y-3 text-sm">
                  {(postsData as any[]).slice(0, 5).map((post: any) => (
                    <li key={`sidebar-${post.id}`}>
                      <Link
                        href={`/board?id=${post.id}`}
                        className="text-muted-foreground hover:text-primary transition-colors line-clamp-2"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SEO Guide Section */}
      <article className="mx-auto max-w-[1200px] px-4 py-16 border-t border-border mt-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
          동물병원 비용 완벽 가이드: 우리 아이 건강관리, 미리 알고 준비하세요
        </h2>
        <div className="prose prose-gray max-w-none text-muted-foreground leading-relaxed text-sm md:text-base">
          <p className="mb-6">
            모든 반려동물 보호자님들의 공통된 고민 중 하나는 바로 <strong>'동물병원 진료비 및 수술 비용'</strong>입니다. 
            강아지나 고양이가 아플 때 비용 걱정 없이 최선의 치료를 해주고 싶지만, 
            병원마다 비용 차이가 크기 때문에 평균적인 시세나 기준을 파악하는 것이 중요합니다. 
            특히 슬개골 탈구 수술, 중성화 수술, 스케일링과 같은 다빈도 치료 항목은 미리 예상 비용을 알아두면 
            <strong> 과다 청구를 피하고 합리적인 선택</strong>을 내릴 수 있습니다.
          </p>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-3">1. 1차 병원과 2차 병원, 비용이 다른 이유는 무엇일까요?</h3>
            <p className="mb-4">
              기본적인 예방접종이나 가벼운 질환을 치료하는 동네 동물병원(1차 병원)과 달리, 
              <strong> 2차 병원은 24시간 응급 진료, 중환자 관리, 심화 수술</strong>을 위한 
              고가의 전문 장비(MRI, CT 등)와 석박사급 전문 인력을 갖추고 있습니다. 
              따라서 같은 슬개골 탈구 수술이라 하더라도 2차 병원은 마취 전문의 상주 여부, 수술 후 24시간 입원 케어 등 
              안정성이 강화된 만큼 비용이 1.5배에서 2.5배 가량 높게 책정되는 경우가 일반적입니다.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-3">2. 수술비에 가려진 숨은 비용들: 입원비, 마취비, 검사비</h3>
            <p className="mb-4">
              검색을 통해 알게 된 <strong>'수술비' 단일 항목만 고려하시면 청구서에서 당황</strong>하실 수 있습니다. 
              수술 전 혈액검사 및 방사선(X-ray) 검사, 전신 마취 비용, 진통제 및 수액 처치비, 그리고 수술 후 
              단기 혹은 장기 입원 비용이 모두 합산되어 총액이 결정되기 때문입니다. 
              저희 반려동물 병원비 조회기능에서는 이러한 부대 비용들이 합산된 '추정 총액'을 기준으로 
              보호자님들께 보다 현실적인 비용 가이드라인을 제공합니다.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-3">3. 강아지 슬개골 탈구 수술 (Patellar Luxation)</h3>
            <p className="mb-4">
              소형견(포메라니안, 말티즈, 푸들 등)의 70% 이상이 겪는 <strong>슬개골 탈구</strong>는 조기 발견이 중요합니다. 
              1~2기는 보존적 치료가 가능할 수 있으나, 3~4기는 외과적 수술이 불가피합니다. 
              한쪽 다리 수술인지 양측 동시 수술인지에 따라 비용 차이가 상당히 크며, 
              십자인대 단열이 동반되었을 경우 비용이 크게 뛰어오를 수 있습니다.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-foreground mb-3">4. 고양이 중성화 수술과 강아지 스케일링</h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>고양이 중성화:</strong> 수컷과 암컷의 수술 난이도 차이(개복 여부)로 인해 암컷 비용이 평균 2배가량 비쌉니다. 수컷은 당일 퇴원이 가능하나 암컷은 회복 입원이 필요할 수 있습니다.</li>
              <li><strong>스케일링:</strong> 반려동물 스케일링은 필수적으로 전신 마취가 요구되므로, 수술 전 마취 가능 여부를 판단하는 사전 혈액 검사 비용이 크게 작용합니다. 노령견일수록 호흡 마취 등 더 안전하고 비싼 마취 방식을 선택하게 됩니다.</li>
            </ul>
          </section>

          <div className="rounded-xl bg-primary/5 p-6 border border-primary/20">
            <h4 className="flex items-center gap-2 text-primary font-bold mb-2">
              <PawPrint className="w-5 h-5" /> 반려동물 병원비 활용 팁
            </h4>
            <p className="m-0 text-sm">
              저희 사이트의 <strong>병원비 계산기</strong>를 통해 내 아이에게 필요한 치료의 1차, 2차 병원별 평균 예상 금액과
              최대/최소 범위를 미리 확인하세요. 사전에 비용을 가늠함으로써 과잉 진료를 예방하고, 
              펫 파이낸스(보조금, 보험 가입 적정선, 자체 적금 등)를 효율적으로 설계할 수 있습니다.
            </p>
          </div>
        </div>
      </article>
    </>
  )
}
