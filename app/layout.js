import localFont from "next/font/local";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from 'next/script';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap',
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://push-startup-hub.vercel.app'),
  title: {
    default: "Push Startup Hub | Expert Web, App & SEO Solutions for Businesses",
    template: "%s | Push Startup Hub"
  },
  description: "Push Startup Hub delivers cutting-edge web development, app creation, and guaranteed SEO services to propel your business to the top of search results.",
  keywords: ["web development", "mobile app development", "SEO services", "digital marketing", "startup solutions", "online business growth"],
  authors: [{ name: "Push Startup Hub", url: "https://push-startup-hub.vercel.app" }],
  creator: "Push Startup Hub",
  publisher: "Push Startup Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Push Startup Hub - Innovative Digital Solutions for Business Growth",
    description: "Expert web development, app creation, and 100% effective SEO strategies to skyrocket your online presence.",
    url: "https://push-startup-hub.vercel.app",
    siteName: "Push Startup Hub",
    images: [
      {
        url: "https://push-startup-hub.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Push Startup Hub - Digital Solutions",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@push_startup',
    title: "Push Startup Hub - Innovative Digital Solutions",
    description: "Expert web development, app creation, and 100% effective SEO strategies to skyrocket your online presence.",
    images: ['https://push-startup-hub.vercel.app/twitter-image.jpg'],
  },
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
  alternates: {
    canonical: 'https://push-startup-hub.vercel.app',
    types: {
      'application/rss+xml': 'https://push-startup-hub.vercel.app/feed.xml',
    },
  },
  verification: {
    google: 'google720f8aece68151fd',
    yandex: 'yandex_verification_code',
    bing: 'msvalidate.01_verification_code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Push Startup Hub",
              "url": "https://push-startup-hub.vercel.app",
              "logo": "https://push-startup-hub.vercel.app/logo.png",
              "sameAs": [
                "https://www.instagram.com/push.startup/",
                "https://x.com/push_startup"
              ],
              "description": "Expert web development, app creation, and SEO services with guaranteed results for businesses.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Innovation Street",
                "addressLocality": "Tech City",
                "addressRegion": "TC",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service"
              }
            }
          `}
        </Script>
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
