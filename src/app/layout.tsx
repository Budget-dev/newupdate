import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import BudgetDevChat from "@/components/chat/BudgetDevChat";
import Script from 'next/script';

const faviconSvg = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%2310b981%22/><text y=%2275%22 font-size=%2270%22 font-weight=%22900%22 fill=%22white%22 x=%2250%%22 text-anchor=%22middle%22 font-family=%22Inter, sans-serif%22>B</text></svg>`;

export const metadata: Metadata = {
  title: 'Budget Website Designer | The BudgetDev | High-Quality Digital Solutions',
  description: 'Looking for a budget website designer? The BudgetDev offers affordable, high-performance web design, Next.js development, and SEO services for small businesses in Andhra Pradesh and across India.',
  keywords: 'budget website designer, affordable web design India, budget web development Andhra Pradesh, budgetwebsitedesigner, small business website designer',
  metadataBase: new URL('https://budgetdev.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Budget Website Designer | The BudgetDev',
    description: 'Expert budget website design and digital solutions for small businesses in India.',
    url: 'https://budgetdev.in',
    siteName: 'The BudgetDev',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Budget Website Designer | The BudgetDev',
    description: 'Affordable, high-performance web design and custom software solutions.',
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        
        {/* Mobile Performance Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Structured Data for SEO: Budget Website Designer Focus */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The BudgetDev - Budget Website Designer",
            "alternateName": "BudgetDev",
            "description": "Expert budget website designer providing affordable, high-performance web design and SEO services for startups and small businesses in Andhra Pradesh and all of India.",
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
              "name": "Budget Website Design & Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Budget Website Design",
                    "description": "Custom, high-performance website design for businesses on a budget."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Affordable SEO Optimization",
                    "description": "Data-driven SEO to rank your budget website on Google."
                  }
                }
              ]
            }
          })}
        </Script>

        {/* Google Tag (gtag.js) */}
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
        {children}
        <BudgetDevChat />
        <Toaster />
      </body>
    </html>
  );
}
