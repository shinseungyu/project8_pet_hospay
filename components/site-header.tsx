import Link from "next/link"
import { PawPrint } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <PawPrint className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-foreground">반려동물 병원비</span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            비용 조회
          </Link>
          <Link
            href="/guide"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            절약 가이드
          </Link>
          <Link
            href="/pet-tips"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            건강 정보
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  )
}
