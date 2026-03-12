import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import BudgetDevChat from "@/components/chat/BudgetDevChat";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'The BudgetDev | High-Quality Digital Solutions',
  description: 'Modern web design, web apps, and custom software solutions for your digital success.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%2310b981%22/><text y=%2275%22 font-size=%2270%22 font-weight=%22900%22 fill=%22white%22 x=%2250%%22 text-anchor=%22middle%22 font-family=%22Inter, sans-serif%22>B</text></svg>',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* Preload critical hero images if needed here */}
      </head>
      <body className="font-body antialiased">
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
        
        {children}
        <BudgetDevChat />
        <Toaster />
      </body>
    </html>
  );
}
