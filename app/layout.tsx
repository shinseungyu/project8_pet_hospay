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
  keywords: [
    '반려동물 병원비', '강아지 병원비', '고양이 병원비',
    '슬개골 수술 비용', '중성화 수술 비용', '스케일링 비용',
    '동물병원 진료비 조회', '동물병원 비용', '동물병원 수술비',
    '애완동물 병원비', '펫보험 환급금', '펫보험 추천',
    '강아지 수술비', '고양이 수술비', '강아지 치료비',
    '고양이 치료비', '반려동물 수술비', '동물병원 예약',
    '강아지 슬개골 수술', '고양이 중성화 수술',
    '1차 동물병원', '2차 동물병원', '동물병원 비교',
    '반려동물 진료비', '강아지 진료비', '고양이 진료비',
    '반려동물 건강보험', '강아지 건강보험', '고양이 건강보험',
  ],
  authors: [{ name: '호스펫페이(Hospetpay)' }],
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
    title: '2026 강아지·고양이 병원비 계산기 | 동물병원 수술비·진료비 평균 비용 조회',
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
    title: '2026 강아지·고양이 병원비 계산기 | 동물병원 수술비·진료비 평균 비용 조회',
    description: '강아지, 고양이 병원비 평균 비용을 쉽게 확인하세요.',
    images: ['/thumb.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "naver-site-verification": "34bacd4a16ee198ea505a587c65dd0e2e6b08576",
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
  // ✅ 기존 WebApplication 스키마 (보강)
  const webAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '2026 강아지·고양이 병원비 계산기',
    description: '강아지, 고양이 병원비 평균 비용을 쉽게 확인하세요. 슬개골 수술, 중성화 수술, 스케일링 등 치료 항목별 비용 조회 서비스입니다.',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'All',
    url: 'https://hospetpay.com',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
    },
    featureList: '강아지 병원비 계산, 고양이 병원비 계산, 1차 2차 병원 비용 비교, 펫보험 가입 참고',
  };

  return (
    <html lang="ko">
      <head>
        {/* WebApplication 스키마 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
        />
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
