import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import { GA_TRACKING_ID } from "@/lib/analytics";
import AnalyticsRouteTracker from "@/components/AnalyticsRouteTracker";
import { getPageMetadata } from "@/lib/seo";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { localBusinessSchema, courseSchema } from "@/lib/advanced-schema";
import { SITE_URL, GOOGLE_VERIFICATION } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  ...getPageMetadata({
    title: "İleri ve Güvenli Sürüş Eğitimi",
    description: "Teorik eğitim, kapalı alan hakimiyet eğitimi ve yol eğitimi ile profesyonel ileri sürüş eğitimi. Güvenli ve deneyimli sürüş için başvurun. Özel fiyat: 18.000 TL",
    url: "/",
    keywords: [
      "ileri sürüş eğitimi",
      "güvenli sürüş",
      "motosiklet eğitimi",
      "sürüş teknikleri",
      "defansif sürüş",
      "motosiklet kursu",
      "ileri motosiklet eğitimi",
      "güvenli motosiklet sürüşü",
    ],
  }),
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: GOOGLE_VERIFICATION,
  },
  authors: [{ name: "İleri ve Güvenli Sürüş Eğitimi" }],
  creator: "İleri ve Güvenli Sürüş Eğitimi",
  publisher: "İleri ve Güvenli Sürüş Eğitimi",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0a3a66",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Google Verification */}
        {GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={GOOGLE_VERIFICATION} />
        )}

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Preconnect for faster loading */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics */}
        {GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXX' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Structured Data Schema */}
        <Script id="jsonld-organization" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="jsonld-website" type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </Script>
        <Script id="jsonld-localbusiness" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        <Script id="jsonld-course" type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </Script>
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        {/* Skip to Content Link for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only"
        >
          Ana içeriğe atla
        </a>

        {/* Analytics Route Tracker */}
        <Suspense fallback={null}>
          <AnalyticsRouteTracker />
        </Suspense>

        {/* Main Content */}
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}

