"use client"

import { useState } from "react"
import Link from "next/link"
import { PawPrint, Heart } from "lucide-react"

export function PetTipsContent() {
  const [activeTab, setActiveTab] = useState("tab1")

  const tabs = [
    { id: "tab1", label: "🐶 강아지 다빈도 질환" },
    { id: "tab2", label: "🐱 고양이 다빈도 질환" },
    { id: "tab3", label: "🏡 집에서 건강 체크하는 법" },
  ]

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-12 min-h-[70vh]">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <Heart className="h-7 w-7 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">반려동물 건강 정보 &amp; 다빈도 질환 가이드</h1>
        <p className="mt-3 text-muted-foreground">
          강아지·고양이에게 가장 흔한 질환과 집에서 할 수 있는 건강 체크법을 알아보세요.
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
      <div>
        {/* Tab 1: 강아지 다빈도 질환 */}
        {activeTab === "tab1" && (
          <article className="space-y-6">
            <section>
              <h2 className="mb-3 text-2xl font-bold text-foreground">강아지 보호자가 꼭 알아야 할 5대 다빈도 질환</h2>
              <p className="text-muted-foreground leading-relaxed">
                수의학 통계에 따르면 강아지가 동물병원에 내원하는 이유의 70% 이상이 아래 5가지 질환과 관련이 있습니다. 증상을 미리 알아두면 조기 발견이 가능합니다.
              </p>
            </section>
            <div className="space-y-5">
              {[
                { rank: "01", name: "슬개골 탈구 (Patellar Luxation)", breed: "포메라니안, 말티즈, 푸들, 치와와 등 소형견", symptom: "한쪽 다리를 들고 걷거나, 갑자기 '깩' 소리를 내며 절름거림, 계단 오르기를 꺼림", tip: "1~2기는 운동 조절과 관절 보조식품으로 관리 가능하나 3~4기는 수술 필요. 비만하면 악화 속도 빨라짐.", costRange: "30만원 ~ 150만원 (1차 병원 기준, 심한 경우 250만원 이상)", color: "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20", rankColor: "bg-red-500" },
                { rank: "02", name: "치주염 및 치아 질환", breed: "전 견종 (소형견에서 더 흔함)", symptom: "입 냄새 심함, 밥 먹다 멈추거나 한쪽으로만 씹음, 잇몸이 빨갛거나 붓거나 피남", tip: "3세 이상 강아지의 80%에서 치주질환 발견. 연 1~2회 스케일링과 평소 양치질로 예방 가능.", costRange: "스케일링 8만원~30만원 (마취비 포함), 발치 추가 시 +10만원~", color: "border-orange-200 bg-orange-50 dark:border-orange-900 dark:bg-orange-950/20", rankColor: "bg-orange-500" },
                { rank: "03", name: "피부염 및 아토피", breed: "시츄, 불독, 골든 리트리버, 래브라도 리트리버", symptom: "귀/발바닥/겨드랑이/배를 긁고 핥음, 털이 빠지거나 피부가 붉어지고 냄새가 심해짐", tip: "식이 알레르기·환경 알레르기 원인이 다르므로 알레르기 검사로 정확한 원인 파악 후 맞춤 치료 필요.", costRange: "진료비 8천원~2만원 / 장기 치료 시 월 5만원~20만원 내외", color: "border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950/20", rankColor: "bg-yellow-500" },
                { rank: "04", name: "십자인대 단열 (CrCL)", breed: "대형견 (래브라도, 골든, 로트와일러), 비만 소형견", symptom: "체중을 실을 수 없어 뒷다리를 들고 있음, 갑작스러운 절뚝임, 무릎 부위 부종", tip: "자연 치유가 되지 않으므로 대부분 수술이 필수입니다. 비만이 가장 큰 위험 요인이므로 체중 관리가 중요합니다.", costRange: "TPLO 수술 기준 80만원 ~ 250만원 (2차 병원 기준)", color: "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/20", rankColor: "bg-blue-500" },
                { rank: "05", name: "심장 질환 (MMVD)", breed: "카발리에 킹 찰스 스패니얼, 포메라니안, 말티즈 등 소형 장수견", symptom: "기침이 잦아짐 (특히 눕거나 잘 때), 빠른 호흡, 운동 후 쉽게 지치고 쓰러질 것 같은 모습", tip: "초기 발견 시 약물로 수명 연장 가능. 6개월마다 심장 청진 및 X-ray 검사 권장.", costRange: "진료비·약제비 월 5만원~20만원 / 심장내과 검사 5만원~30만원", color: "border-pink-200 bg-pink-50 dark:border-pink-900 dark:bg-pink-950/20", rankColor: "bg-pink-500" },
              ].map((d) => (
                <div key={d.rank} className={`rounded-xl border p-5 ${d.color}`}>
                  <div className="mb-3 flex items-start gap-3">
                    <span className={`shrink-0 rounded-lg px-3 py-1 text-sm font-black text-white ${d.rankColor}`}>#{d.rank}</span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{d.name}</h3>
                      <p className="text-xs text-muted-foreground">주요 발생 견종: {d.breed}</p>
                    </div>
                  </div>
                  <dl className="space-y-1.5 text-sm">
                    <div className="flex gap-2"><dt className="shrink-0 font-semibold text-foreground w-14">증상</dt><dd className="text-muted-foreground">{d.symptom}</dd></div>
                    <div className="flex gap-2"><dt className="shrink-0 font-semibold text-foreground w-14">대처법</dt><dd className="text-muted-foreground">{d.tip}</dd></div>
                    <div className="flex gap-2"><dt className="shrink-0 font-semibold text-primary w-14">비용</dt><dd className="text-primary font-medium">{d.costRange}</dd></div>
                  </dl>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90">
                <PawPrint className="h-4 w-4" /> 질환별 치료비 계산하기
              </Link>
            </div>
          </article>
        )}

        {/* Tab 2: 고양이 다빈도 질환 */}
        {activeTab === "tab2" && (
          <article className="space-y-6">
            <section>
              <h2 className="mb-3 text-2xl font-bold text-foreground">고양이 보호자가 꼭 알아야 할 5대 다빈도 질환</h2>
              <p className="text-muted-foreground leading-relaxed">
                고양이는 아픔을 숨기는 습성이 있어 증상을 늦게 발견하는 경우가 많습니다. 미세한 행동 변화를 놓치지 않는 것이 중요합니다.
              </p>
            </section>
            <div className="space-y-5">
              {[
                { rank: "01", name: "만성 신부전 (CKD)", note: "고양이 사망 원인 1위", symptom: "물을 자주 마시고 소변량 증가, 식욕 저하 및 체중 감소, 구토, 털이 윤기 없어짐", tip: "완치 불가능 질환으로 조기 발견이 생명입니다. 7세 이상은 6개월마다 신장 수치 검사를 권장합니다.", costRange: "정기 혈액검사 5만원~15만원 / 수액 치료 입원 시 하루 5만원~15만원", color: "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/20", rankColor: "bg-blue-500" },
                { rank: "02", name: "하부요로기계 질환 (FLUTD)", note: "수컷 고양이에게 특히 위험", symptom: "화장실을 자주 들락거리나 소변을 못 봄, 소변에 피가 섞임, 화장실 밖에서 소변을 봄", tip: "수컷은 요도폐색으로 24시간 내 사망 가능한 응급 상황입니다. 소변을 못 보는 증상 발견 즉시 응급 내원이 필요합니다.", costRange: "요도폐색 응급처치 20만원~60만원 / 장기 관리 월 2만원~8만원", color: "border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20", rankColor: "bg-red-500" },
                { rank: "03", name: "치주염 및 구내염", note: "고양이 3마리 중 1마리 경험", symptom: "밥을 먹다 멈추거나 사료를 흘림, 침을 많이 흘림, 입 냄새가 심함, 앞발로 입을 문지름", tip: "심한 경우 전체 발치(이를 다 빼는 수술)를 해야 통증이 해결되는 경우도 있습니다.", costRange: "스케일링 10만원~30만원 / 전체 발치 수술 40만원~100만원 이상", color: "border-orange-200 bg-orange-50 dark:border-orange-900 dark:bg-orange-950/20", rankColor: "bg-orange-500" },
                { rank: "04", name: "갑상선 기능 항진증", note: "노령묘에서 주로 발생", symptom: "밥을 엄청 먹는데 오히려 살이 빠짐, 물을 많이 마심, 항상 불안해하고 활발해 보임", tip: "7세 이상에서 많이 발생합니다. 방사성 요오드 요법, 약물, 수술 등 다양한 치료법이 있습니다.", costRange: "진단 검사 5만원~20만원 / 약물 치료 시 월 3만원~10만원", color: "border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950/20", rankColor: "bg-yellow-500" },
                { rank: "05", name: "비만 및 당뇨병", note: "중성화 후 실내 고양이에서 흔함", symptom: "체중이 급격히 늘거나 줄어듦, 물을 많이 마심, 소변량 증가, 기력 저하", tip: "중성화 후 약 25% 열량을 줄여야 합니다. 비만은 당뇨, 관절, 심장 문제를 동반합니다.", costRange: "진단 검사 5만원~15만원 / 인슐린 치료 시 월 5만원~20만원", color: "border-purple-200 bg-purple-50 dark:border-purple-900 dark:bg-purple-950/20", rankColor: "bg-purple-500" },
              ].map((d) => (
                <div key={d.rank} className={`rounded-xl border p-5 ${d.color}`}>
                  <div className="mb-3 flex items-start gap-3">
                    <span className={`shrink-0 rounded-lg px-3 py-1 text-sm font-black text-white ${d.rankColor}`}>#{d.rank}</span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{d.name}</h3>
                      <p className="text-xs font-medium text-muted-foreground">{d.note}</p>
                    </div>
                  </div>
                  <dl className="space-y-1.5 text-sm">
                    <div className="flex gap-2"><dt className="shrink-0 font-semibold text-foreground w-14">증상</dt><dd className="text-muted-foreground">{d.symptom}</dd></div>
                    <div className="flex gap-2"><dt className="shrink-0 font-semibold text-foreground w-14">대처법</dt><dd className="text-muted-foreground">{d.tip}</dd></div>
                    <div className="flex gap-2"><dt className="shrink-0 font-semibold text-primary w-14">비용</dt><dd className="text-primary font-medium">{d.costRange}</dd></div>
                  </dl>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90">
                <PawPrint className="h-4 w-4" /> 고양이 진료비 조회하기
              </Link>
            </div>
          </article>
        )}

        {/* Tab 3: 집에서 건강 체크하는 법 */}
        {activeTab === "tab3" && (
          <article className="space-y-8">
            <section>
              <h2 className="mb-3 text-2xl font-bold text-foreground">집에서 할 수 있는 반려동물 건강 체크법</h2>
              <p className="text-muted-foreground leading-relaxed">
                매주 5분, 집에서 간단하게 할 수 있는 건강 체크로 우리 아이의 이상 신호를 조기에 발견하세요.
              </p>
            </section>
            {[
              { emoji: "👁️", title: "눈 체크", items: [{ label: "정상", desc: "맑고 생기 있으며 눈곱이 없거나 소량의 갈색 눈곱" }, { label: "주의", desc: "눈곱이 노란색·녹색이거나 양이 많음, 눈을 자주 비빔", warn: true }, { label: "위험", desc: "눈이 빨갛게 충혈·눈꺼풀이 부음·눈이 잘 떠지지 않음", danger: true }] },
              { emoji: "👃", title: "코 체크", items: [{ label: "정상", desc: "촉촉하고 차가운 편, 소량의 투명한 콧물은 정상" }, { label: "주의", desc: "코가 건조하고 거칠거칠하거나 미열이 느껴짐", warn: true }, { label: "위험", desc: "노란색·초록색 콧물, 코피, 코를 계속 핥거나 문지름", danger: true }] },
              { emoji: "👄", title: "구강 체크", items: [{ label: "정상", desc: "잇몸이 연분홍색, 이빨이 하얗고, 입냄새가 심하지 않음" }, { label: "주의", desc: "입 냄새가 갑자기 심해짐, 밥 먹다가 멈추거나 한쪽으로 씹음", warn: true }, { label: "위험", desc: "잇몸이 새하얗거나 파란색(순환 이상), 잇몸에서 피가 남", danger: true }] },
              { emoji: "🫀", title: "호흡 체크", items: [{ label: "정상", desc: "안정 시 분당 10~30회(강아지), 20~30회(고양이)" }, { label: "주의", desc: "안정적인 상태에서도 숨이 빠르거나 코를 골기 시작함", warn: true }, { label: "위험", desc: "입 벌려 숨쉬기(고양이), 배로 거칠게 숨쉬기, 파란 잇몸", danger: true }] },
              { emoji: "⚖️", title: "체중 체크", items: [{ label: "정상", desc: "갈비뼈가 살짝 만져지고, 허리에서 잘록하게 들어가는 선이 보임" }, { label: "주의", desc: "갈비뼈가 전혀 안 만져지거나, 반대로 너무 돌출됨", warn: true }, { label: "위험", desc: "한 달 내 체중 10% 이상 급격한 증가 또는 감소", danger: true }] },
            ].map((check) => (
              <div key={check.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
                  <span className="text-2xl">{check.emoji}</span> {check.title}
                </h3>
                <div className="space-y-2.5">
                  {check.items.map((item) => (
                    <div key={item.label} className={`flex items-start gap-3 rounded-lg p-3 text-sm ${'danger' in item && item.danger ? "bg-red-50 dark:bg-red-950/20" : 'warn' in item && item.warn ? "bg-amber-50 dark:bg-amber-950/20" : "bg-green-50 dark:bg-green-950/20"}`}>
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-bold ${'danger' in item && item.danger ? "bg-red-500 text-white" : 'warn' in item && item.warn ? "bg-amber-500 text-white" : "bg-green-500 text-white"}`}>{item.label}</span>
                      <span className="text-muted-foreground leading-relaxed">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-center">
              <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90">
                <PawPrint className="h-4 w-4" /> 병원비 조회하기
              </Link>
            </div>
          </article>
        )}
      </div>
    </div>
  )
}
