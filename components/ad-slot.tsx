"use client"

interface AdSlotProps {
  position: "top" | "middle" | "sidebar"
  className?: string
}

export function AdSlot({ position, className = "" }: AdSlotProps) {
  const sizes: Record<string, { width: string; height: string; label: string }> = {
    top: { width: "w-full", height: "h-32", label: "상단 광고" },
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
