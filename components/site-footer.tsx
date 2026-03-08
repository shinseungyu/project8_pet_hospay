import { PawPrint } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <PawPrint className="h-5 w-5 text-primary" />
              <span className="font-bold text-foreground">반려동물 병원비</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              반려동물 병원비 평균 비용을 쉽게 확인하세요. 
              투명한 정보로 합리적인 의료 선택을 도와드립니다.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-foreground">빠른 링크</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-primary transition-colors">
                  병원비 평균 비용 조회
                </a>
              </li>
              <li>
                <a href="/guide" className="hover:text-primary transition-colors">
                  병원비 절약 가이드
                </a>
              </li>
              <li>
                <a href="/pet-tips" className="hover:text-primary transition-colors">
                  반려동물 건강 정보
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-primary transition-colors">
                  자주 묻는 질문 (FAQ)
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-foreground">안내</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              본 사이트의 비용 정보는 참고용이며, 실제 비용은 
              병원, 지역, 환자 상태에 따라 달라질 수 있습니다.
              정확한 비용은 방문 예정인 병원에 직접 문의해주세요.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center">
          <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">개인정보 처리방침</a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">이용약관</a>
            <a href="/cookie-policy" className="hover:text-primary transition-colors">쿠키 정책</a>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} 반려동물 병원비. All rights reserved. | 문의: tlsfkaus0711@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}
