"use client"

import Image from "next/image"

interface AdSlotProps {
  position: "top" | "middle" | "sidebar"
  className?: string
}

export function AdSlot({ position, className = "" }: AdSlotProps) {
  if (position === "top") {
    return (
      <a 
        href="https://link.coupang.com/a/d07cum" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`group relative flex flex-col md:flex-row items-center gap-4 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 via-background to-accent/5 p-4 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${className}`}
      >
        <div className="absolute top-0 right-0 p-1 bg-primary/10 rounded-bl-lg text-[10px] font-bold text-primary tracking-tight">AD</div>
        
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-border bg-white p-1">
          <Image
            src="/smart_feeder.png"
            alt="페블펫 스마트 자동급식기"
            fill
            className="object-contain p-1 transition-transform group-hover:scale-105"
          />
        </div>

        <div className="flex-1 space-y-1">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">스마트 펫케어 추천</div>
          <h4 className="text-sm font-bold text-foreground line-clamp-1">
            페블펫 와이파이 앱연동 스마트 자동급식기 IPF-W100 (3.5L)
          </h4>
          <p className="text-xs text-muted-foreground line-clamp-2">
            강아지 고양이 대용량 자동 배식으로 걱정 없이 외출하세요. 앱 설정으로 정교한 식단 관리가 가능합니다.
          </p>
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-bold text-primary">쿠팡 최저가 확인하기 →</span>
            <span className="text-[10px] text-muted-foreground italic text-right flex-1">이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.</span>
          </div>
        </div>
      </a>
    )
  }

  if (position === "middle") {
    return (
      <a 
        href="https://link.coupang.com/a/d06JDW" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`group relative flex flex-col md:flex-row items-center gap-4 rounded-2xl border border-primary/20 bg-gradient-to-r from-accent/5 via-background to-primary/5 p-4 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${className}`}
      >
        <div className="absolute top-0 right-0 p-1 bg-primary/10 rounded-bl-lg text-[10px] font-bold text-primary tracking-tight">AD</div>
        
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-border bg-white p-1">
          <Image
            src="/cat_fountain.png"
            alt="퓨어워터 고양이 정수기"
            fill
            className="object-contain p-1 transition-transform group-hover:scale-105"
          />
        </div>

        <div className="flex-1 space-y-1">
          <div className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent-foreground">깨끗한 음수량 관리</div>
          <h4 className="text-sm font-bold text-foreground line-clamp-1">
            퓨어워터 고양이 정수기 2L (저소음/순환식)
          </h4>
          <p className="text-xs text-muted-foreground line-clamp-2">
            반려묘의 건강을 위한 깨끗한 물! 2L 대용량과 저소음 설계로 스트레스 없는 음수 환경을 제공합니다.
          </p>
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-bold text-primary">쿠팡 최저가 확인하기 →</span>
            <span className="text-[10px] text-muted-foreground italic text-right flex-1">이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.</span>
          </div>
        </div>
      </a>
    )
  }

  const sizes: Record<string, { width: string; height: string; label: string }> = {
    middle: { width: "w-full", height: "h-32", label: "중간 광고" },
    sidebar: { width: "w-full", height: "h-64", label: "사이드바 광고" },
  }

  const { width, height, label } = sizes[position]

  return (
    <div
      className={`${width} ${height} ${className} flex items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20 bg-muted/50 text-sm text-muted-foreground`}
    >
      <span className="select-none">{label} (Google AdSense)</span>
    </div>
  )
}
