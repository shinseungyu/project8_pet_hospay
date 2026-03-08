import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개인정보 처리방침 | 반려동물 병원비',
  description: '반려동물 병원비 서비스의 개인정보 처리방침입니다.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 text-foreground">
      <h1 className="mb-2 text-2xl font-bold md:text-3xl tracking-tight">개인정보 처리방침</h1>
      <p className="mb-12 text-sm text-muted-foreground">최종 업데이트: 2026년 3월 8일</p>

      <div className="space-y-10 leading-relaxed text-[15px]">
        <section>
          <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-foreground">1. 개요</h2>
          <p className="text-muted-foreground">본 개인정보 처리방침은 <strong>반려동물 병원비</strong> (이하 &quot;사이트&quot;) 서비스와 관련하여, 이용자의 개인정보를 어떻게 수집·이용·보호하는지를 설명합니다. 본 사이트를 이용함으로써 이 방침에 동의하는 것으로 간주합니다.</p>
        </section>

        <section>
          <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-foreground">2. 수집하는 정보</h2>
          <p className="text-muted-foreground">본 사이트는 다음과 같은 정보를 자동으로 수집할 수 있습니다:</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            <li>단말기 식별 번호 (Device ID 및 IP 주소)</li>
            <li>브라우저 유형 및 운영체제 정보</li>
            <li>사이트 내 검색 및 방문 기록</li>
          </ul>
          <p className="mt-4 text-muted-foreground">본 사이트는 별도의 회원가입 절차가 없으므로 직접적인 인증 정보(이름, 연락처 등)를 수집하지 않습니다.</p>
        </section>

        <section>
          <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-foreground">3. Google Analytics 및 AdSense</h2>
          <p className="text-muted-foreground">본 사이트는 서비스 개선과 광고 게재를 위해 구글의 서비스를 이용합니다.</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            <li>Google은 식별되지 않은 쿠키 데이터를 기반으로 정보를 처리합니다.</li>
            <li>상세한 내용은 구글의 <a href="https://policies.google.com/privacy" className="text-primary hover:underline">개인정보처리방침</a>을 통해 확인 가능합니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-foreground">4. 문의</h2>
          <p className="text-muted-foreground">이메일: <a href="mailto:tlsfkaus0711@gmail.com" className="text-primary font-medium hover:underline">tlsfkaus0711@gmail.com</a></p>
        </section>
      </div>
    </main>
  )
}
