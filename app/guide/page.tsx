import type { Metadata } from "next"
import { GuideContent } from "./guide-content"

export const metadata: Metadata = {
  title: "동물병원 병원비 절약 가이드 | 강아지·고양이 진료비 아끼는 법",
  description: "강아지·고양이 동물병원 진료비를 절약하는 6가지 방법, 1차 vs 2차 병원 비교, 연령별 예방 접종 체크리스트를 제공합니다.",
  keywords: ["동물병원 병원비 절약", "반려동물 진료비 절약", "1차 2차 동물병원 차이", "강아지 예방접종 일정", "고양이 예방접종 일정", "펫보험 가입 시기"],
  openGraph: {
    title: "동물병원 병원비 절약 가이드 | 강아지·고양이 진료비 아끼는 법",
    description: "강아지·고양이 동물병원 진료비를 절약하는 6가지 방법, 1차 vs 2차 병원 비교, 연령별 예방 접종 체크리스트.",
  },
}

export default function GuidePage() {
  return <GuideContent />
}
