"use client"

import { type TreatmentCost, formatPrice } from "@/lib/pet-data"
import { Building2, Hospital } from "lucide-react"

interface CostDisplayProps {
  treatmentName: string
  cost: TreatmentCost
}

export function CostDisplay({ treatmentName, cost }: CostDisplayProps) {
  return (
    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
      <h2 className="text-center text-lg font-bold text-foreground bg-primary/5 py-3 rounded-lg border border-primary/10 mb-4">
        <span className="text-primary">[{treatmentName}]</span> 예상 진료비 결과
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {/* 1차 병원 */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-muted-foreground">
            <Building2 className="h-5 w-5" />
            <span className="text-sm font-medium">1차 병원 (동물병원)</span>
          </div>

          <div className="mb-6 text-center">
            <span className="text-4xl font-bold text-foreground">
              {formatPrice(cost.primary.average)}
            </span>
            <span className="ml-1 text-lg text-muted-foreground">원</span>
            <div className="mt-1 text-xs font-medium text-primary bg-primary/10 inline-block px-2 py-0.5 rounded-full">
              평균 예상 금액
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium text-muted-foreground">
              <span>최저 {formatPrice(cost.primary.min)}원</span>
              <span>최대 {formatPrice(cost.primary.max)}원</span>
            </div>
            <div className="relative h-2.5 w-full rounded-full bg-muted overflow-hidden">
              <div 
                className="absolute h-full rounded-full bg-primary/30"
                style={{ left: '0%', width: '100%' }}
              />
              <div 
                className="absolute h-full w-2 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)] transform -translate-x-1/2"
                style={{ 
                  left: `${Math.min(100, Math.max(0, ((cost.primary.average - cost.primary.min) / (cost.primary.max - cost.primary.min)) * 100))}%` 
                }}
              />
            </div>
          </div>
        </div>

        {/* 2차 병원 */}
        <div className="flex flex-col justify-between rounded-xl border-2 border-primary bg-card p-6 shadow-sm">
          <div>
            <div className="mb-4 flex items-center gap-2 text-primary">
              <Hospital className="h-5 w-5" />
              <span className="text-sm font-medium">2차 병원 (동물의료센터)</span>
            </div>

            <div className="mb-6 text-center">
              <span className="text-4xl font-bold text-foreground">
                {formatPrice(cost.secondary.average)}
              </span>
              <span className="ml-1 text-lg text-muted-foreground">원</span>
              <div className="mt-1 text-xs font-medium text-primary bg-primary/10 inline-block px-2 py-0.5 rounded-full">
                전문 의료센터 기준
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-medium text-muted-foreground">
                <span>최저 {formatPrice(cost.secondary.min)}원</span>
                <span>최대 {formatPrice(cost.secondary.max)}원</span>
              </div>
              <div className="relative h-2.5 w-full rounded-full bg-muted overflow-hidden">
                <div 
                  className="absolute h-full rounded-full bg-primary/30"
                  style={{ left: '0%', width: '100%' }}
                />
                <div 
                  className="absolute h-full w-2 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)] transform -translate-x-1/2"
                  style={{ 
                    left: `${Math.min(100, Math.max(0, ((cost.secondary.average - cost.secondary.min) / (cost.secondary.max - cost.secondary.min)) * 100))}%` 
                  }}
                />
              </div>
            </div>
          </div>

          <p className="mt-3 text-center text-[11px] text-muted-foreground leading-tight">
            * 2차 병원 예상 비용은 1차 병원 통계의 약 1.5배로 산출된 추정치입니다.
          </p>
        </div>
      </div>

      {/* 안내 문구 */}
      <div className="rounded-lg bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
        <span>* 지역/병원마다 차이가 있을 수 있어요. 정확한 비용은 병원에 문의해주세요.</span>
      </div>
    </div>
  )
}
