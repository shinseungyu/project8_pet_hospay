import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import Script from 'next/script'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: '2026 강아지·고양이 병원비 계산기 | 동물병원 수술비·진료비 평균 비용 조회',
    template: '%s | 강아지·고양이 병원비 계산기',
  },
  description: '강아지, 고양이 병원비 평균 비용을 쉽게 확인하세요. 슬개골 수술, 중성화 수술, 스케일링 등 치료 항목별 1차/2차 병원 비용 비교.',
  // 수정 1: 아까 발굴한 돈 되는 키워드 추가
  keywords: ['반려동물 병원비', '강아지 병원비', '고양이 병원비', '슬개골 수술 비용', '중성화 수술 비용', '동물병원 진료비 조회', '애완동물 병원비', '펫보험 환급금'],
  authors: [{ name: '호스펫페이(Hospetpay)' }], // 브랜드명으로 살짝 변경
  creator: '호스펫페이(Hospetpay)',
  metadataBase: new URL('https://hospetpay.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.ico',
    shortcut: '/logo.ico',
    apple: '/logo.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://hospetpay.com',
    siteName: '호스펫페이 - 반려동물 병원비 진단',
    title: '2026 강아지·고양이 병원비 계산기 | 동물병원 수술비·진료비 평균 비용 조회', // 메인과 통일
    description: '강아지, 고양이 병원비 평균 비용을 쉽게 확인하세요. 슬개골 수술, 중성화 수술, 스케일링 등 치료 항목별 1차/2차 병원 비용 비교.',
    images: [
      {
        url: '/thumb.webp',
        width: 1200,
        height: 630,
        alt: '강아지·고양이 병원비 계산기 썸네일',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 강아지·고양이 병원비 계산기 | 동물병원 수술비·진료비 평균 비용 조회', // 메인과 통일
    description: '강아지, 고양이 병원비 평균 비용을 쉽게 확인하세요.',
    images: ['/thumb.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // google: '여기에_구글_인증코드_입력', // 나중에 서치콘솔 등록 후 주석 풀고 넣으세요!
    other: {
      "naver-site-verification": "89526f8a6ecae4298dcb29200f67dbc70c6c1b48", // 수정 2: 네이버 태그를 여기로 이사!
    }
  },
  other: {
    "google-adsense-account": "ca-pub-5378247298190063"
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4f6fce',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '2026 강아지·고양이 병원비 계산기 | 동물병원 수술비·진료비 평균 비용 조회',
    description: '강아지, 고양이 병원비 평균 비용을 쉽게 확인하세요. 슬개골 수술, 중성화 수술, 스케일링 등 치료 항목별 비용 조회 서비스입니다.',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'All',
    url: 'https://hospetpay.com',
  };

  return (
    <html lang="ko">
      <head>
        {/* 수정 3: JSON-LD는 일반 script 태그가 권장됩니다 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* 네이버 메타 태그는 metadata 객체로 올려서 여기서 삭제했습니다 */}

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5378247298190063"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}