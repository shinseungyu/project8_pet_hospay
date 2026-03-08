import { FAQSection, FAQSchema } from "@/components/faq-section"

export const metadata = {
  title: "자주 묻는 질문(FAQ) | 반려동물 병원비 조회",
  description: "반려동물(강아지, 고양이) 병원비와 관련된 수술, 진료, 보험 등 보호자님들이 자주 묻는 질문들을 모았습니다.",
}

export default function FAQPage() {
  return (
    <>
      <FAQSchema />
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16 min-h-[70vh]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            자주 묻는 질문 (FAQ)
          </h1>
          <p className="mt-4 text-muted-foreground">
            보호자님들이 가장 궁금해하시는 병원비 관련 질문들을 모아 답변해 드립니다.
          </p>
        </div>
        <div className="mx-auto">
          <FAQSection />
        </div>
      </div>
    </>
  )
}
