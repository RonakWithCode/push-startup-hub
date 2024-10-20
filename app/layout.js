import localFont from "next/font/local";
import { Montserrat, Inter, Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Local fonts
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

// Google fonts
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

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Metadata
export const metadata = {
  title: {
    default: "Ronosoft | Expert Web, App & SEO Solutions for Businesses",
    template: "%s | Ronosoft"
  },
  description: "Ronosoft delivers cutting-edge web development, app creation, and guaranteed SEO services to propel your business to the top of search results.",
  keywords: ["web development", "mobile app development", "SEO services", "digital marketing", "startup solutions", "online business growth"],
  authors: [{ name: "Ronosoft", url: "https://push-startup-hub.vercel.app" }],
  creator: "Ronosoft",
  publisher: "Ronosoft",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ronosoft - Innovative Digital Solutions for Business Growth",
    description: "Expert web development, app creation, and 100% effective SEO strategies to skyrocket your online presence.",
    url: "https://push-startup-hub.vercel.app",
    siteName: "Ronosoft",
    images: [
      {
        url: "https://push-startup-hub.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ronosoft - Digital Solutions",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@push_startup',
    title: "Ronosoft - Innovative Digital Solutions",
    description: "Expert web development, app creation, and 100% effective SEO strategies to skyrocket your online presence.",
    images: ['https://push-startup-hub.vercel.app/twitter-image.png'],
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${montserrat.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className={`antialiased ${inter.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
