import type { Metadata } from "next"
import { PetTipsContent } from "./pet-tips-content"

export const metadata: Metadata = {
  title: "강아지·고양이 다빈도 질환 & 건강 체크 가이드 | 반려동물 건강 정보",
  description: "강아지 슬개골 탈구·심장병, 고양이 신부전·요로기계 질환 등 5대 다빈도 질환 증상과 예상 비용을 확인하세요. 집에서 할 수 있는 건강 체크법도 안내합니다.",
  keywords: ["강아지 다빈도 질환", "고양이 다빈도 질환", "슬개골 탈구 증상", "고양이 신부전 증상", "반려동물 건강 체크", "강아지 심장병 증상", "고양이 구내염 비용"],
  openGraph: {
    title: "강아지·고양이 다빈도 질환 & 건강 체크 가이드 | 반려동물 건강 정보",
    description: "강아지 슬개골 탈구·심장병, 고양이 신부전·요로기계 질환 등 5대 다빈도 질환 정보와 집에서 할 수 있는 건강 체크법.",
  },
}

export default function PetTipsPage() {
  return <PetTipsContent />
}
