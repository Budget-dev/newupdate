
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import BudgetDevChat from "@/components/chat/BudgetDevChat";

export const metadata: Metadata = {
  title: {
    default: 'BudgetDev | Affordable Web Design & SEO in Andhra Pradesh, India',
    template: '%s | BudgetDev Agency'
  },
  description: 'Expert web design and digital marketing for small businesses in India. Budget-friendly Next.js development, SEO, and Meta Ads in Andhra Pradesh (Vizianagaram, Visakhapatnam).',
  keywords: [
    'Affordable web design Andhra Pradesh',
    'Budget website designer India',
    'Small business digital marketing AP',
    'Best SEO services Vizianagaram',
    'Next.js developer India',
    'Telugu market digital agency',
    'Cheap website development Hyderabad'
  ],
  metadataBase: new URL('https://budgetdev.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'BudgetDev | High-Quality Digital Solutions for Small Businesses',
    description: 'Scaling Indian startups with high-performance websites and strategic SEO.',
    url: 'https://budgetdev.in',
    siteName: 'BudgetDev',
    images: [
      {
        url: 'https://yasodha.in/assets/venkatesh-profile.png',
        width: 1200,
        height: 630,
        alt: 'BudgetDev Agency - Venkatesh Choppa',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BudgetDev | Affordable Web Design in India',
    description: 'High-performance digital solutions for small businesses in Andhra Pradesh.',
    images: ['https://yasodha.in/assets/venkatesh-profile.png'],
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%2310b981%22/><text y=%2275%22 font-size=%2270%22 font-weight=%22900%22 fill=%22white%22 x=%2250%%22 text-anchor=%22middle%22 font-family=%22Inter, sans-serif%22>B</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BudgetDev",
    "image": "https://yasodha.in/assets/venkatesh-profile.png",
    "@id": "https://budgetdev.in",
    "url": "https://budgetdev.in",
    "telephone": "+91 8466006486",
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
      "latitude": 18.1124,
      "longitude": 83.3956
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://linkedin.com/in/venkateshchoppa",
      "https://github.com/budgetdev"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <BudgetDevChat />
        <Toaster />
      </body>
    </html>
  );
}
