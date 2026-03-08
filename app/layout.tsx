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
  keywords: ['반려동물 병원비', '강아지 병원비', '고양이 병원비', '슬개골 수술 비용', '중성화 수술 비용', '동물병원 진료비 조회', '애완동물 병원비', '펫보험 환급금'],
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

  // ✅ 새로 추가: FAQPage 스키마 → 구글 FAQ 박스 노출
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '강아지 슬개골 탈구 수술비는 얼마인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '강아지 슬개골 탈구 수술비는 1차 병원 기준 30~80만원, 2차 전문 병원은 80~200만원 수준입니다. 양측 동시 수술이나 십자인대 손상이 동반된 경우 비용이 더 높아질 수 있습니다.',
        },
      },
      {
        '@type': 'Question',
        name: '고양이 중성화 수술 비용은 얼마인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '고양이 중성화 수술은 수컷 기준 5~15만원, 암컷 기준 15~35만원 수준입니다. 암컷은 개복 수술이 필요해 수컷보다 약 2배 비쌉니다.',
        },
      },
      {
        '@type': 'Question',
        name: '강아지 스케일링 비용은 얼마인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '강아지 스케일링은 전신마취가 필수로 필요하며, 사전 혈액검사 포함 10~30만원 수준입니다. 노령견일수록 마취 리스크가 높아 비용이 올라갈 수 있습니다.',
        },
      },
      {
        '@type': 'Question',
        name: '펫보험 가입하면 동물병원비가 얼마나 절약되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '펫보험 상품에 따라 다르지만 수술비의 50~80%까지 보장받을 수 있습니다. 슬개골 수술처럼 고액 치료의 경우 수십만 원을 절약할 수 있어 가입 검토를 권장합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '1차 병원과 2차 병원 비용 차이가 얼마나 되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '2차 병원은 MRI, CT 등 전문 장비와 석박사급 전문의를 갖추고 있어 같은 수술이라도 1차 병원 대비 1.5~2.5배 비용이 높습니다. 중증 질환이나 정밀 검사가 필요한 경우 2차 병원을 권장합니다.',
        },
      },
    ],
  };

  return (
    <html lang="ko">
      <head>
        {/* WebApplication 스키마 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
        />
        {/* ✅ FAQ 스키마 추가 → 구글 관련질문 박스 노출 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
