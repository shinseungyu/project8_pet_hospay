import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '이용약관 | 반려동물 병원비',
  description: '반려동물 병원비 서비스의 이용약관입니다.',
  alternates: { canonical: '/terms-of-service' },
}

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 text-foreground">
      <h1 className="mb-2 text-2xl font-bold md:text-3xl tracking-tight">이용약관</h1>
      <p className="mb-12 text-sm text-muted-foreground">최종 업데이트: 2026년 3월 8일</p>

      <div className="space-y-10 leading-relaxed text-[15px]">
        <section>
          <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-foreground">제1조 (목적)</h2>
          <p className="text-muted-foreground">본 약관은 <strong>반려동물 병원비</strong> (이하 &quot;사이트&quot;)이 제공하는 반려동물 병원비 평균 비용 정보 서비스의 이용 조건 및 절차, 이용자와 사이트 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
        </section>

        <section>
          <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-foreground">제2조 (서비스의 내용)</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            <li>강아지, 고양이 질환별 평균 병원비 정보 제공</li>
            <li>1차 / 2차 병원별 대략적인 비용 비교</li>
            <li>반려동물 건강 관리 가이드 제공 (게시판)</li>
            <li>관련 광고 서비스 (Google AdSense)</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-foreground">제3조 (면책 조항)</h2>
          <p className="text-muted-foreground">본 사이트에서 제공하는 병원비 정보는 각종 리서치와 공개된 통계 데이터를 바탕으로 작성된 <strong>대략적인 평균값이며, 실제 각 동물병원의 청구 비용과는 다를 수 있습니다.</strong> 지역, 환자의 상태, 병원의 규모 및 장비 수준에 따라 병원비는 큰 차이가 발생할 수 있습니다. 계산 결과에 따른 어떠한 의료적, 재무적 결정에 대해서도 사이트는 책임을 지지 않습니다.</p>
        </section>

        <section>
          <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-foreground">제4조 (이용자의 의무)</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            <li>서비스를 불법적인 목적으로 이용하는 행위 금지</li>
            <li>본 사이트의 콘텐츠(비용 정보 로직, 데이터)를 무단 복제하여 영리 목적으로 사용하는 행위 금지</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 border-b border-border pb-2 text-lg font-bold text-foreground">제5조 (문의)</h2>
          <p className="text-muted-foreground">이메일: <a href="mailto:tlsfkaus0711@gmail.com" className="text-primary font-medium hover:underline">tlsfkaus0711@gmail.com</a></p>
        </section>
      </div>
    </main>
  )
}
