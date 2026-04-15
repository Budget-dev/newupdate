import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import BudgetDevChat from "@/components/chat/BudgetDevChat";
import Script from 'next/script';
import { FirebaseClientProvider } from '@/firebase';

const faviconSvg = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%2310b981%22/><text y=%2275%22 font-size=%2270%22 font-weight=%22900%22 fill=%22white%22 x=%2250%%22 text-anchor=%22middle%22 font-family=%22Inter, sans-serif%22>B</text></svg>`;

export const metadata: Metadata = {
  title: 'Budget Software Solutions | Custom Apps & Web Development India',
  description: 'Expert software solutions and budget website design. We offer affordable iOS/Android app development, high-performance web solutions, and SEO services across India.',
  keywords: 'budget software solutions, app development India, budget website designer, affordable web design, iOS android app development budget',
  metadataBase: new URL('https://budgetdev.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Budget Software Solutions | The BudgetDev',
    description: 'Expert software solutions and app development for small businesses in India.',
    url: 'https://budgetdev.in',
    siteName: 'The BudgetDev',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Software Solutions | The BudgetDev',
    description: 'Affordable, high-performance software and mobile app solutions.',
  },
  icons: {
    icon: [
      { url: faviconSvg, type: 'image/svg+xml' },
    ],
    shortcut: [faviconSvg],
    apple: [
      { url: faviconSvg, type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The BudgetDev - Software Solutions",
            "alternateName": "BudgetDev",
            "description": "Expert software solutions provider providing affordable app development, high-performance web design and SEO services for startups in India.",
            "url": "https://budgetdev.in",
            "logo": "https://budgetdev.in/favicon.svg",
            "telephone": "+918466006486",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Fort City",
              "addressLocality": "Vizianagaram",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "535003",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 18.1147,
              "longitude": 83.3956
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://linkedin.com/in/venkateshchoppa",
              "https://github.com/budgetdev"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Software Solutions & Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Development",
                    "description": "Affordable iOS and Android app development."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Software Solutions",
                    "description": "Tailor-made software for business automation."
                  }
                }
              ]
            }
          })}
        </Script>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D5D81KPGQT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D5D81KPGQT');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
          {children}
          <BudgetDevChat />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
