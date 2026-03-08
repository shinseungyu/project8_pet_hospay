import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '쿠키 정책 | 반려동물 병원비',
  description: '반려동물 병원비 서비스의 쿠키 정책입니다.',
  alternates: { canonical: '/cookie-policy' },
}

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 text-foreground">
      <h1 className="mb-2 text-2xl font-bold md:text-3xl tracking-tight">쿠키 정책</h1>
      <p className="mb-12 text-sm text-muted-foreground">최종 업데이트: 2026년 3월 8일</p>

      <div className="space-y-10 leading-relaxed text-[15px]">
        <section>
          <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-foreground">1. 쿠키란 무엇인가요?</h2>
          <p className="text-muted-foreground">쿠키(Cookie)는 웹사이트가 이용자의 브라우저에 저장하는 아주 작은 텍스트 파일입니다. 재방문 유저를 식별하거나 서비스 분석, 맞춤형 광고 등을 제공하기 위한 목적으로 사용됩니다.</p>
        </section>

        <section>
          <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-foreground">2. 사용하는 쿠키의 목적</h2>
          <h3 className="mt-6 mb-2 text-base font-bold text-foreground">분석 및 통계 쿠키 (Google Analytics)</h3>
          <p className="text-muted-foreground">이용자들이 어떤 병원비 정보를 많이 검색하는지 서비스 트래픽을 분석하여 개선하는 데 활용합니다.</p>
          <h3 className="mt-6 mb-2 text-base font-bold text-foreground">광고 쿠키 (Google AdSense)</h3>
          <p className="text-muted-foreground">Google과 그 협력업체가 이용자의 이전 방문 기록 등에 따라 적절한 맞춤형 광고를 제공합니다. 자세한 내용은 <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">개인정보처리방침</a>을 따릅니다.</p>
        </section>

        <section>
          <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-foreground">3. 쿠키 관리 및 거부</h2>
          <p className="text-muted-foreground">이용자는 브라우저 설정에서 쿠키를 차단하거나 관리할 수 있습니다.</p>
          <p className="mt-4 text-muted-foreground">
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Google 광고 설정</a>에서 맞춤 광고용 쿠키를 직접 끄실 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-foreground">4. 문의</h2>
          <p className="text-muted-foreground">이메일: <a href="mailto:tlsfkaus0711@gmail.com" className="text-primary font-medium hover:underline">tlsfkaus0711@gmail.com</a></p>
        </section>
      </div>
    </main>
  )
}
