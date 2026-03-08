"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { 
  petData, 
  CATEGORY_INFO, 
  WEIGHT_MULTIPLIER, 
  AGE_MULTIPLIER, 
  REGION_MULTIPLIER,
  type AnimalType, 
  type Treatment, 
  type TreatmentCategory,
  type CostRange,
  type TreatmentCost
} from "@/lib/pet-data"
import { CostDisplay } from "./cost-display"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dog, Cat, Shield, MapPin, Bone, Info, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PetCostCalculator() {
  // Step 1
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalType | null>(null)
  
  // Step 2
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null)
  const [selectedWeight, setSelectedWeight] = useState<keyof typeof WEIGHT_MULTIPLIER | null>(null)
  const [selectedAge, setSelectedAge] = useState<keyof typeof AGE_MULTIPLIER | null>(null)

  // Step 3
  const [selectedRegion, setSelectedRegion] = useState<keyof typeof REGION_MULTIPLIER | null>(null)

  // Step 4
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Scroll Ref
  const resultRef = useRef<HTMLDivElement>(null)

  // Handlers
  const handleAnimalSelect = (animal: AnimalType) => {
    setSelectedAnimal(animal)
    // 리셋
    setSelectedBreed(null)
    setSelectedWeight(null)
    setSelectedAge(null)
    setSelectedRegion(null)
    setSelectedTreatment(null)
    setSearchQuery("")
  }

  const handleTreatmentSelect = (treatment: Treatment) => {
    setSelectedTreatment(treatment)
  }

  // 자동 스크롤 로직
  useEffect(() => {
    if (selectedTreatment && resultRef.current) {
      const timer = setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100) // 렌더링 완료 후 스크롤을 위해 약간의 지연
      return () => clearTimeout(timer)
    }
  }, [selectedTreatment])

  const currentData = selectedAnimal ? petData[selectedAnimal] : null

  // 카테고리별 분류
  const treatmentsByCategory = currentData?.treatments.reduce((acc, treatment) => {
    if (!acc[treatment.category]) acc[treatment.category] = []
    acc[treatment.category].push(treatment)
    return acc
  }, {} as Record<TreatmentCategory, Treatment[]>)

  // 최종 계산 로직
  const getComputedCost = (baseCost: TreatmentCost): TreatmentCost => {
    const wM = selectedWeight ? WEIGHT_MULTIPLIER[selectedWeight] : 1.0
    const aM = selectedAge ? AGE_MULTIPLIER[selectedAge] : 1.0
    const rM = selectedRegion ? REGION_MULTIPLIER[selectedRegion] : 1.0
    const totalMultiplier = wM * aM * rM

    const applyMultiplier = (cost: CostRange): CostRange => ({
      min: cost.min * totalMultiplier,
      max: cost.max * totalMultiplier,
      average: cost.average * totalMultiplier,
    })

    return {
      primary: applyMultiplier(baseCost.primary),
      secondary: applyMultiplier(baseCost.secondary),
    }
  }

  return (
    <div className="space-y-8">
      {/* Step 1: 동물 선택 */}
      <div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-6 shadow-md">
        <div className="mb-5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">STEP 1</p>
          <h3 className="text-xl font-bold text-foreground">우리 아이는 어떤 동물인가요?</h3>
          <p className="mt-1 text-sm text-muted-foreground">반려동물을 선택하면 맞춤 비용 조회가 시작됩니다 👇</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleAnimalSelect("dog")}
            className={`group relative flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition-all duration-300 ${
              selectedAnimal === "dog"
                ? "border-primary bg-primary/10 text-primary shadow-lg shadow-primary/20 scale-[1.02]"
                : "border-border bg-card text-foreground hover:border-primary/60 hover:bg-primary/5 hover:shadow-md hover:scale-[1.01]"
            }`}
          >
            {selectedAnimal === "dog" && (
              <span className="absolute top-2.5 right-2.5 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                선택됨 ✓
              </span>
            )}
            <div className={`flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 ${
              selectedAnimal === "dog" ? "bg-primary/20" : "bg-muted group-hover:bg-primary/10"
            }`}>
              <Dog className={`h-12 w-12 transition-transform duration-300 group-hover:scale-110 ${selectedAnimal === "dog" ? "scale-110" : ""}`} />
            </div>
            <div className="text-center">
              <span className="text-xl font-bold block">강아지</span>
              <span className="text-xs text-muted-foreground mt-0.5 block">Dog</span>
            </div>
          </button>
          <button
            onClick={() => handleAnimalSelect("cat")}
            className={`group relative flex flex-col items-center gap-3 rounded-2xl border-2 p-6 transition-all duration-300 ${
              selectedAnimal === "cat"
                ? "border-primary bg-primary/10 text-primary shadow-lg shadow-primary/20 scale-[1.02]"
                : "border-border bg-card text-foreground hover:border-primary/60 hover:bg-primary/5 hover:shadow-md hover:scale-[1.01]"
            }`}
          >
            {selectedAnimal === "cat" && (
              <span className="absolute top-2.5 right-2.5 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                선택됨 ✓
              </span>
            )}
            <div className={`flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300 ${
              selectedAnimal === "cat" ? "bg-primary/20" : "bg-muted group-hover:bg-primary/10"
            }`}>
              <Cat className={`h-12 w-12 transition-transform duration-300 group-hover:scale-110 ${selectedAnimal === "cat" ? "scale-110" : ""}`} />
            </div>
            <div className="text-center">
              <span className="text-xl font-bold block">고양이</span>
              <span className="text-xs text-muted-foreground mt-0.5 block">Cat</span>
            </div>
          </button>
        </div>
        {!selectedAnimal && (
          <p className="mt-4 text-center text-xs text-muted-foreground animate-pulse">
            ↑ 위에서 반려동물을 선택해주세요
          </p>
        )}
      </div>

      {/* Step 2: 품종 및 기본 정보 */}
      {selectedAnimal && (
        <Card className="border-border bg-card shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <CardContent className="p-6 space-y-6">
            <h3 className="text-sm font-medium text-muted-foreground">
              STEP 2. 품종 및 기본 정보 <span className="text-primary font-bold">(데이터 가중치 변수)</span>
            </h3>

            {/* 품종 */}
            <div>
              <label className="text-sm font-semibold mb-2 block">품종 선택: <span className="text-muted-foreground font-normal">(선택 사항)</span></label>
              <Select value={selectedBreed || ""} onValueChange={setSelectedBreed}>
                <SelectTrigger className="w-full md:w-1/2">
                  <SelectValue placeholder={`${currentData?.name} 품종을 선택하세요`} />
                </SelectTrigger>
                <SelectContent>
                  {currentData?.breeds.map((b) => (
                    <SelectItem key={b.id} value={b.id}>{b.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* 체중 */}
            <div>
              <label className="text-sm font-semibold mb-2 block flex items-center gap-1">
                <Bone className="w-4 h-4 text-primary" /> 체중 선택 <span className="text-destructive text-xs ml-1">(필수 - 비용 결정 핵심)</span>
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { id: "small", label: "5kg 미만 (소형)" },
                  { id: "medium", label: "5kg ~ 10kg 미만 (중형)" },
                  { id: "large", label: "10kg ~ 20kg 미만 (대형)" },
                  { id: "xlarge", label: "20kg 이상 (초대형)" },
                ].map((w) => (
                  <button
                    key={w.id}
                    onClick={() => {
                      setSelectedWeight(w.id as any)
                      setSelectedTreatment(null) // 결과 리셋
                    }}
                    className={`rounded-lg border p-3 text-sm transition-all text-left flex items-center gap-2 ${
                      selectedWeight === w.id
                        ? "border-primary bg-primary/10 text-primary font-bold"
                        : "border-border hover:border-primary/50 text-foreground"
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedWeight === w.id ? 'border-primary' : 'border-muted-foreground'}`}>
                      {selectedWeight === w.id && <div className="w-2 h-2 rounded-full bg-primary" />}
                    </div>
                    {w.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 나이 */}
            <div>
              <label className="text-sm font-semibold mb-2 block">나이 선택: <span className="text-muted-foreground font-normal">(필수)</span></label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { id: "puppy", label: "1세 미만 (자견/자묘)" },
                  { id: "adult", label: "1세 ~ 7세 (성견/성묘)" },
                  { id: "senior", label: "7세 이상 (노령기 - 검사 항목 추가 권장)", highlight: true },
                ].map((a) => (
                  <button
                    key={a.id}
                    onClick={() => {
                      setSelectedAge(a.id as any)
                      setSelectedTreatment(null) // 결과 리셋
                    }}
                    className={`rounded-lg border p-3 text-sm transition-all text-left flex items-center gap-2 ${
                      selectedAge === a.id
                        ? "border-primary bg-primary/10 text-primary font-bold"
                        : "border-border hover:border-primary/50 text-foreground"
                    }`}
                  >
                    <div className={`w-4 h-4 shrink-0 rounded-full border flex items-center justify-center ${selectedAge === a.id ? 'border-primary' : 'border-muted-foreground'}`}>
                      {selectedAge === a.id && <div className="w-2 h-2 shrink-0 rounded-full bg-primary" />}
                    </div>
                    <span className={a.highlight && selectedAge === a.id ? "text-destructive" : ""}>{a.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: 지역 선택 */}
      {selectedWeight && selectedAge && (
        <Card className="border-border bg-card shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">
              STEP 3. 지역 선택 <span className="text-primary font-bold">(지역별 편차 반영)</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: "national", label: "전국 평균 기준" },
                { id: "seoul", label: "서울특별시" },
                { id: "gyeonggi", label: "경기 / 인천" },
                { id: "others", label: "기타 시/도 (부산, 대구 등)" },
              ].map((r) => (
                <button
                  key={r.id}
                  onClick={() => {
                    setSelectedRegion(r.id as any)
                    setSelectedTreatment(null) // 결과 리셋
                  }}
                  className={`rounded-lg border p-3 text-sm transition-all text-left flex items-center gap-2 ${
                    selectedRegion === r.id
                      ? "border-primary bg-primary/10 text-primary font-bold"
                      : "border-border hover:border-primary/50 text-foreground"
                  }`}
                >
                  <MapPin className={`w-4 h-4 shrink-0 ${selectedRegion === r.id ? 'text-primary' : 'text-muted-foreground'}`} />
                  {r.label}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 4: 진료 항목 선택 */}
      {selectedRegion && selectedWeight && selectedAge && (
        <Card className="border-border bg-card shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <CardContent className="p-6">
            <h3 className="mb-6 text-sm font-medium text-muted-foreground">
              STEP 4. 진료 및 치료 항목 선택 <span className="text-primary font-bold">(카테고리화)</span>
            </h3>

            {/* 실시간 검색창 */}
            <div className="mb-6 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="어떤 진료를 찾으시나요? (예: 슬개골, 스케일링 등 이름명 검색)"
                className="pl-9 bg-background h-12 text-base shadow-sm border-primary/20 focus-visible:ring-primary/30 transition-all rounded-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="space-y-8">
              {(["1", "2", "3", "4", "5", "6"] as TreatmentCategory[]).map((catKey) => {
                let trItems = treatmentsByCategory?.[catKey]

                // 검색어 필터링 로직
                if (searchQuery.trim()) {
                  const query = searchQuery.toLowerCase()
                  trItems = trItems?.filter(t => 
                    t.name.toLowerCase().includes(query) || 
                    t.description.toLowerCase().includes(query)
                  )
                }

                if (!trItems || trItems.length === 0) return null

                return (
                  <div key={catKey} className="space-y-3">
                    <div className="border-b pb-2 flex items-center justify-between">
                      <h4 className="font-bold text-foreground">
                        [카테고리 {catKey}: {CATEGORY_INFO[catKey].title}]
                      </h4>
                      <span className="text-xs text-muted-foreground hidden sm:inline-block">
                        {CATEGORY_INFO[catKey].desc}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {trItems.map((treatment) => (
                        <button
                          key={treatment.id}
                          onClick={() => handleTreatmentSelect(treatment)}
                          className={`rounded-lg border p-3 text-left transition-all flex flex-col justify-between min-h-[5rem] ${
                            selectedTreatment?.id === treatment.id
                              ? "border-primary bg-primary text-primary-foreground shadow-md"
                              : "border-border bg-background text-foreground hover:border-primary hover:bg-primary/5"
                          }`}
                        >
                          <span className="text-sm font-semibold">{treatment.name}</span>
                          <span className={`text-xs mt-2 line-clamp-2 ${selectedTreatment?.id === treatment.id ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                            {treatment.description}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* 결과 표시 */}
      {selectedTreatment && selectedWeight && selectedAge && selectedRegion && (
        <div 
          ref={resultRef}
          className="scroll-mt-10 animate-in fade-in slide-in-from-bottom-8 duration-700"
        >
          <Card className="border-primary/30 bg-card shadow-xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
            <CardContent className="p-6 pt-8">
              <CostDisplay
                treatmentName={selectedTreatment.name}
                cost={getComputedCost(selectedTreatment.cost)}
              />

              <div className="mt-6 flex items-start gap-2 text-xs text-muted-foreground bg-muted p-3 rounded-md">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <p>
                  <strong>가중치 적용 안내:</strong> 현재 선택하신 정보(
                  체중: <span className="font-semibold text-foreground">{{ small: "5kg 미만", medium: "5kg~10kg", large: "10kg~20kg", xlarge: "20kg 이상" }[selectedWeight as string]}</span>, 
                  연령: <span className="font-semibold text-foreground">{{ puppy: "1세 미만", adult: "1~7세", senior: "7세 이상" }[selectedAge as string]}</span>, 
                  지역: <span className="font-semibold text-foreground">{{ national: "전국 기준", seoul: "서울", gyeonggi: "경기/인천", others: "기타 지역" }[selectedRegion as string]}</span>
                  )를 바탕으로 기본 비용에서 가중치 요율이 계산되었습니다. 
                  대상이 대형견이거나 노령일 경우 마취 비용 상승 및 추가 모니터링 비용이 반영되어 평균보다 높게 산출됩니다.
                </p>
              </div>

              {/* 펫보험 CTA */}
              <div className="mt-8 rounded-xl bg-primary/5 p-6 text-center border border-primary/10 transition-all hover:bg-primary/10 hidden">
                <Shield className="mx-auto mb-3 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  수술 / 검사비용 제로에 도전하세요
                </h3>
                <p className="mb-5 text-sm text-muted-foreground">
                  지금 바로 내 맞춤 펫보험을 비교하고 최대 80%~90% 보장을 설계받으세요.
                </p>
                <Button size="lg" className="w-full sm:w-auto font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                  펫보험 무료 비교 계산기 열기
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
