import localFont from "next/font/local";
import { Inter, Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  title: "PushStartupHub - Innovative Web Solutions for Forward-Thinking Businesses",
  description: "PushStartupHub delivers cutting-edge web development, app creation, and data-driven marketing strategies to propel your business into the future.",
  keywords: "web development, mobile app creation, digital marketing, startup, innovation",
  authors: [{ name: "PushStartupHub", url: "https://pushstartuphub.com" }],
  openGraph: {
    title: "PushStartupHub - Innovative Web Solutions",
    description: "Cutting-edge web development, app creation, and data-driven marketing strategies for forward-thinking businesses.",
    url: "https://pushstartuphub.com",
    siteName: "PushStartupHub",
    images: [
      {
        url: "https://pushstartuphub.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "PushStartupHub - Innovative Web Solutions",
    description: "Cutting-edge web development, app creation, and data-driven marketing strategies for forward-thinking businesses.",
    images: ['https://pushstartuphub.com/twitter-image.jpg'],
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
  canonical: 'https://pushstartuphub.com',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
