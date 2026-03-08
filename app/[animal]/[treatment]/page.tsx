import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { PetCostCalculator } from "@/components/pet-cost-calculator"
import { CostDisplay } from "@/components/cost-display"
import { FAQSection, FAQSchema } from "@/components/faq-section"
import { AdSlot } from "@/components/ad-slot"
import { petData, getAllTreatments, type AnimalType, formatPrice } from "@/lib/pet-data"
import { ArrowLeft, Dog, Cat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// URL 매핑
const animalSlugMap: Record<string, AnimalType> = {
  강아지: "dog",
  고양이: "cat",
}

const animalNameMap: Record<AnimalType, string> = {
  dog: "강아지",
  cat: "고양이",
}

// SSG를 위한 정적 경로 생성
export async function generateStaticParams() {
  const allTreatments = getAllTreatments()

  return allTreatments.map(({ animal, treatment }) => ({
    animal: animalNameMap[animal],
    treatment: treatment.slug,
  }))
}

// 메타데이터 생성
export async function generateMetadata({
  params,
}: {
  params: Promise<{ animal: string; treatment: string }>
}): Promise<Metadata> {
  const { animal: animalSlug, treatment: treatmentSlug } = await params
  const animalType = animalSlugMap[animalSlug]

  if (!animalType) {
    return { title: "페이지를 찾을 수 없습니다" }
  }

  const treatment = petData[animalType].treatments.find((t) => t.slug === treatmentSlug)

  if (!treatment) {
    return { title: "페이지를 찾을 수 없습니다" }
  }

  const title = `${animalSlug} ${treatment.name} 비용 - 1차/2차 병원 평균 가격`
  const description = `${animalSlug} ${treatment.name} 평균 비용을 확인하세요. 1차 병원 ${formatPrice(treatment.cost.primary.average)}원, 2차 병원 ${formatPrice(treatment.cost.secondary.average)}원. 지역별 병원비 비교.`

  return {
    title,
    description,
    keywords: [
      `${animalSlug} ${treatment.name}`,
      `${animalSlug} ${treatment.name} 비용`,
      `${treatment.name} 가격`,
      "동물병원 비용",
      "펫보험",
    ],
    openGraph: {
      title,
      description,
      type: "article",
    },
  }
}

export default async function TreatmentPage({
  params,
}: {
  params: Promise<{ animal: string; treatment: string }>
}) {
  const { animal: animalSlug, treatment: treatmentSlug } = await params
  const animalType = animalSlugMap[animalSlug]

  if (!animalType) {
    notFound()
  }

  const animalData = petData[animalType]
  const treatment = animalData.treatments.find((t) => t.slug === treatmentSlug)

  if (!treatment) {
    notFound()
  }

  // Schema.org 구조화 데이터
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${animalSlug} ${treatment.name}`,
    description: treatment.description,
    offers: {
      "@type": "AggregateOffer",
      lowPrice: treatment.cost.primary.min,
      highPrice: treatment.cost.secondary.max,
      priceCurrency: "KRW",
      offerCount: 2,
    },
  }

  const AnimalIcon = animalType === "dog" ? Dog : Cat

  return (
    <>
      <FAQSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Breadcrumb & Title */}
      <section className="bg-card border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4 -ml-2 text-muted-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              전체 항목 보기
            </Button>
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <AnimalIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{animalSlug}</p>
              <h1 className="text-2xl font-bold text-foreground md:text-3xl">
                {treatment.name} 비용
              </h1>
            </div>
          </div>

          <p className="mt-4 text-muted-foreground leading-relaxed">{treatment.description}</p>
        </div>
      </section>

      {/* Ad Slot - Top */}
      <div className="mx-auto max-w-6xl px-4 py-4">
        <AdSlot position="top" />
      </div>

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            {/* Cost Display */}
            <Card className="mb-8 border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <CostDisplay treatmentName={treatment.name} cost={treatment.cost} />
              </CardContent>
            </Card>

            {/* Related Treatments */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="mb-4 text-lg font-semibold text-foreground">
                  다른 {animalSlug} 치료 항목
                </h2>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {animalData.treatments
                    .filter((t) => t.id !== treatment.id)
                    .slice(0, 6)
                    .map((t) => (
                      <Link
                        key={t.id}
                        href={`/${animalSlug}/${t.slug}`}
                        className="rounded-lg border border-border p-3 text-center text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5"
                      >
                        {t.name}
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Ad Slot - Middle */}
            <div className="mb-8">
              <AdSlot position="middle" />
            </div>

            {/* Full Calculator */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="mb-4 text-lg font-semibold text-foreground">
                  다른 항목 비용 조회하기
                </h2>
                <PetCostCalculator
                  initialAnimal={animalType}
                  initialTreatmentId={treatment.id}
                />
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div id="faq">
              <FAQSection />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <AdSlot position="sidebar" />

              <Card>
                <CardContent className="p-5">
                  <h3 className="mb-3 font-semibold text-foreground">비용 요약</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">1차 병원 평균</span>
                      <span className="font-semibold text-foreground">
                        {formatPrice(treatment.cost.primary.average)}원
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">2차 병원 평균</span>
                      <span className="font-semibold text-foreground">
                        {formatPrice(treatment.cost.secondary.average)}원
                      </span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">최저가</span>
                      <span className="text-foreground">
                        {formatPrice(treatment.cost.primary.min)}원
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">최고가</span>
                      <span className="text-foreground">
                        {formatPrice(treatment.cost.secondary.max)}원
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <h3 className="mb-3 font-semibold text-foreground">인기 검색</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        href="/강아지/슬개골수술"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        강아지 슬개골 수술
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/강아지/중성화수술"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        강아지 중성화 수술
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/고양이/중성화수술"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        고양이 중성화 수술
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
