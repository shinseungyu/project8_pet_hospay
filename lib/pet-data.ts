// 반려동물 병원비 더미 데이터 및 가중치 상수 v2
// 사용자 요청에 따른 6단계 카테고리 지원 데이터 구조

export type AnimalType = "dog" | "cat"
export type TreatmentCategory = "1" | "2" | "3" | "4" | "5" | "6"

export interface CostRange {
  min: number
  max: number
  average: number
}

export interface TreatmentCost {
  primary: CostRange // 1차 병원
  secondary: CostRange // 2차 병원
}

export interface Treatment {
  id: string
  name: string
  slug: string
  description: string
  category: TreatmentCategory
  cost: TreatmentCost
}

export interface Breed {
  id: string
  name: string
}

export interface AnimalData {
  type: AnimalType
  name: string
  breeds: Breed[]
  treatments: Treatment[]
}

// 카테고리 정보 메타데이터 V2 (6개 분류)
export const CATEGORY_INFO: Record<TreatmentCategory, { title: string; desc: string }> = {
  "1": { title: "진찰 및 상담", desc: "초진, 재진, 일반 심층 상담" },
  "2": { title: "입원", desc: "집중 관리 및 치료를 위한 입원" },
  "3": { title: "백신 접종", desc: "각종 전염성 감염병 예방 백신" },
  "4": { title: "혈액 검사", desc: "전혈구, 화학, 전해질 등 혈액 정밀 검사" },
  "5": { title: "영상 검사", desc: "엑스레이, 초음파, CT, MRI" },
  "6": { title: "투약 및 조제", desc: "기생충 예방 및 내복약 처방" },
}

// 가중치 기본값 상수 (체중/나이/지역)
export const WEIGHT_MULTIPLIER = {
  small: 1.0,    // 5kg 미만 (소형)
  medium: 1.2,   // 5~10kg (중형)
  large: 1.5,    // 10~20kg (대형)
  xlarge: 2.0,   // 20kg 이상 (초대형)
}

export const AGE_MULTIPLIER = {
  puppy: 1.0,    // 1세 미만
  adult: 1.0,    // 1~7세
  senior: 1.2,   // 7세 이상 (노령 리스크)
}

export const REGION_MULTIPLIER = {
  national: 1.0, // 전국 평균
  seoul: 1.2,    // 서울
  gyeonggi: 1.1, // 경기/인천
  others: 1.0,   // 기타 시도
}

// --- 품종 목록 ---
export const dogBreeds: Breed[] = [
  { id: "maltese", name: "말티즈" },
  { id: "poodle", name: "푸들" },
  { id: "pomeranian", name: "포메라니안" },
  { id: "shih-tzu", name: "시츄" },
  { id: "chihuahua", name: "치와와" },
  { id: "bichon-frise", name: "비숑 프리제" },
  { id: "yorkshire-terrier", name: "요크셔 테리어" },
  { id: "golden-retriever", name: "골든 리트리버" },
  { id: "welsh-corgi", name: "웰시 코기" },
  { id: "dachshund", name: "닥스훈트" },
  { id: "jindo-dog", name: "진돗개" },
  { id: "mixed-other", name: "믹스견 / 기타 품종" },
]

export const catBreeds: Breed[] = [
  { id: "persian", name: "페르시안" },
  { id: "russian-blue", name: "러시안 블루" },
  { id: "siamese", name: "샴" },
  { id: "british-shorthair", name: "브리티시 숏헤어" },
  { id: "scottish-fold", name: "스코티시 폴드" },
  { id: "ragdoll", name: "랙돌" },
  { id: "munchkin", name: "먼치킨" },
  { id: "norwegian-forest", name: "노르웨이 숲" },
  { id: "abyssinian", name: "아비시니안" },
  { id: "korean-shorthair-mixed", name: "코리안 숏헤어 / 믹스묘 / 기타 품종" },
]

// --- 비용 생성 헬퍼 ---
const makeCost = (avg: number, min: number, max: number): TreatmentCost => ({
  primary: { average: Math.round(avg), min: Math.round(min), max: Math.round(max) },
  secondary: { average: Math.round(avg * 1.5), min: Math.round(min * 1.5), max: Math.round(max * 1.5) }
})

// --- 공통 항목 더미 ---
const commonTreatments: Treatment[] = [
  // 카테고리 1: 진찰 및 상담
  {
    id: "initial-visit", name: "초진 진찰료", slug: "초진료", description: "(5/10/20kg 체중 변수 반영됨)", category: "1",
    cost: makeCost(10520, 1000, 61000)
  },
  {
    id: "re-visit", name: "재진 진찰료", slug: "재진료", description: "(5/10/20kg 체중 변수 반영됨)", category: "1",
    cost: makeCost(8457, 1000, 61000)
  },
  {
    id: "consultation", name: "상담료", slug: "상담료", description: "심층 상담", category: "1",
    cost: makeCost(10283, 1000, 110000)
  },
  // 카테고리 3: 백신 접종 (광견병)
  {
    id: "rabies-vaccine", name: "광견병 백신", slug: "광견병", description: "연 1회 필수 접종", category: "3",
    cost: makeCost(24803, 5000, 70000)
  },
  // 카테고리 4: 혈액 검사
  {
    id: "blood-cbc", name: "전혈구 검사비", slug: "전혈구", description: "기본 혈액검사", category: "4",
    cost: makeCost(35973, 10000, 150000)
  },
  {
    id: "blood-chemistry", name: "혈액화학 검사비", slug: "혈액화학", description: "간, 신장 등 장기 수치 정밀화학 검사", category: "4",
    cost: makeCost(86502, 30000, 250000)
  },
  {
    id: "blood-electrolytes", name: "전해질 검사비", slug: "전해질", description: "Na, K, Cl 등 전해질 불균형 평가", category: "4",
    cost: makeCost(33506, 10000, 120000)
  },
  // 카테고리 5: 영상 검사
  {
    id: "xray", name: "방사선 촬영비 (X-ray)", slug: "엑스레이", description: "(5/10/20kg 체중 변수 반영됨)", category: "5",
    cost: makeCost(46917, 10000, 250000)
  },
  {
    id: "ultrasound", name: "초음파 촬영비", slug: "초음파", description: "(5/10/20kg 체중 변수 반영됨)", category: "5",
    cost: makeCost(65610, 10000, 325000)
  },
  {
    id: "ct-scan", name: "CT 촬영비", slug: "ct", description: "(5/10/20kg 체중 변수 반영됨 - 마취비 별도 확인)", category: "5",
    cost: makeCost(601333, 257000, 1500000)
  },
  {
    id: "mri-scan", name: "MRI 촬영비", slug: "mri", description: "(5/10/20kg 체중 변수 반영됨 - 정밀 뇌신경계/관절)", category: "5",
    cost: makeCost(722789, 400000, 1600000)
  },
  // 카테고리 6: 투약 및 조제
  {
    id: "heartworm", name: "심장사상충 예방비", slug: "심장사상충", description: "월 1회 내복약 또는 도포제", category: "6",
    cost: makeCost(16542, 1000, 90000)
  },
  {
    id: "external-parasite", name: "외부기생충 예방비", slug: "외부기생충", description: "진드기, 벼룩 등 피부 구충", category: "6",
    cost: makeCost(18927, 5000, 50000)
  },
  {
    id: "broad-parasite", name: "광범위구충 예방비", slug: "광범위구충", description: "사상충+외부기생충 올인원 제품", category: "6",
    cost: makeCost(3960, 400, 42000)
  },
]

export const dogTreatments: Treatment[] = [
  ...commonTreatments,
  // 카테고리 2: 입원
  {
    id: "hospitalization-dog", name: "입원비 (개)", slug: "입원비", description: "(1일 기준, 5/10/20kg 체중 선택 반영)", category: "2",
    cost: makeCost(65040, 10000, 330000)
  },
  // 카테고리 3: 백신
  {
    id: "vaccine-dog", name: "종합백신 (개)", slug: "종합백신", description: "강아지용 5종 혼합 백신(DHPPL)", category: "3",
    cost: makeCost(26337, 7500, 60000)
  },
  {
    id: "kennel-cough", name: "켄넬코프 백신", slug: "켄넬코프", description: "전염성 기관지염 예방", category: "3",
    cost: makeCost(22666, 5000, 55000)
  },
  {
    id: "corona-virus", name: "코로나바이러스 백신 (개)", slug: "코로나", description: "강아지 코로나 장염 예방", category: "3",
    cost: makeCost(22266, 5000, 45000)
  },
  {
    id: "canine-influenza", name: "인플루엔자 백신", slug: "인플루엔자", description: "신종 플루 예방 호흡기 백신", category: "3",
    cost: makeCost(34931, 8000, 60000)
  },
]

export const catTreatments: Treatment[] = [
  ...commonTreatments,
  // 카테고리 2: 입원
  {
    id: "hospitalization-cat", name: "입원비 (고양이)", slug: "입원비", description: "(1일 기준, 스트레스 완화 묘구역)", category: "2",
    cost: makeCost(56417, 10000, 200000)
  },
  // 카테고리 3: 백신
  {
    id: "vaccine-cat", name: "종합백신 (고양이)", slug: "종합백신", description: "고양이용 3/4종 혼합 기본 백신", category: "3",
    cost: makeCost(39478, 8000, 75000)
  },
]

export const petData: Record<AnimalType, AnimalData> = {
  dog: {
    type: "dog",
    name: "강아지",
    breeds: dogBreeds,
    treatments: dogTreatments,
  },
  cat: {
    type: "cat",
    name: "고양이",
    breeds: catBreeds,
    treatments: catTreatments,
  },
}

// 기타 유지용 함수
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ko-KR").format(Math.round(price))
}

export function getAllTreatments(): { animal: AnimalType; treatment: Treatment }[] {
  const allTreatments: { animal: AnimalType; treatment: Treatment }[] = []
  for (const animal of ["dog", "cat"] as AnimalType[]) {
    for (const treatment of petData[animal].treatments) {
      allTreatments.push({ animal, treatment })
    }
  }
  return allTreatments
}

export interface FAQ {
  question: string
  answer: string
}
export const faqData: FAQ[] = [
  {
    question: "슬개골 수술은 펫보험으로 보장되나요?",
    answer: "대부분의 펫보험에서 슬개골 탈구 수술은 보장 항목에 포함됩니다. 다만, 가입 전 이미 진단받은 경우나 선천적 질환으로 분류되는 경우 보장에서 지난 질병으로 간주되어 제외될 수 있습니다.",
  },
  {
    question: "1차 병원과 2차 병원의 비용 차이는 왜 발생하나요?",
    answer: "1차 병원은 일반 진료 및 간단한 치과/외과 수술 위주이며, 2차 병원은 전문 장비(MRI, CT 등)와 마취 전문의를 포함한 세분화된 의료진이 상주하는 중환자/응급 케어 센터이기 때문에 장비 유지비와 인건비 등의 이유로 통상 1.5배~2배 가량의 비용 차이가 발생합니다.",
  },
  {
    question: "강아지/고양이 중성화 수술 적정 시기는 언제인가요?",
    answer: "일반적으로 첫 발정이 오기 전인 생후 6개월~1년 사이로 권장되나, 최근 대형견의 경우 골격 성장을 위해 1년 이후로 미루는 등 품종과 수의사의 판단에 따라 다를 수 있습니다.",
  },
  {
    question: "강아지 스케일링은 꼭 전신마취를 해야 하나요?",
    answer: "네, 반려동물은 스케일링 기계의 소음과 진동에 크게 놀랄 수 있고, 치아 안쪽까지 꼼꼼히 청소하기 위해 움직임 통제가 필수적이므로 안전을 위해 전신(호흡)마취를 진행하는 것이 원칙입니다.",
  },
  {
    question: "노령견/노령묘 수술 전 왜 추가 검사가 필요한가요?",
    answer: "7세 이상의 노령 동물은 간, 신장, 심장 기능이 저하되어 있을 수 있어 마취 위험도가 높습니다. 따라서 수술 전 흉부 X-ray, 정밀 혈액검사 등을 통해 마취를 견딜 수 있는지 평가하는 과정이 반드시 필요하여 초기 검사 비용이 상승합니다.",
  },
  {
    question: "고양이 예방접종(종합백신)은 매년 맞아야 하나요?",
    answer: "필수 백신의 경우 초기 접종 완료 후 매년 1회 보강 접종을 권장합니다. 최근에는 항체가 검사를 통해 항체가 충분하다면 접종 일정을 미룰 수도 있으니 담당 수의사와 상담해 보시는 것을 추천합니다.",
  },
]
