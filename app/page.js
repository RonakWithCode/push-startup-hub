import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Static imports for critical above-the-fold content
import Hero from './components/Hero';
import WhatWeAre from './components/WhatWeAre';

// Dynamic imports for components that can be lazy-loaded
const Services = dynamic(() => import('./components/Services'));
const WhyChooseUs = dynamic(() => import('./components/WhyChooseUs'));
const Portfolio = dynamic(() => import('./components/Portfolio'));
const Contact = dynamic(() => import('./components/Contact'));
const CTA = dynamic(() => import('./components/CTA'));
const ExploreGuides = dynamic(() => import('./components/ExploreGuides.js'));

// Placeholder components for lazy-loaded sections
const PlaceholderComponent = () => <div className="h-96 bg-gray-100 animate-pulse"></div>;

export const metadata = {
  title: 'PushStartupHub - Web Solutions for Local Businesses',
  description: 'PushStartupHub delivers cutting-edge web development, app creation, and digital marketing strategies to boost your local business\'s online success.',
  keywords: 'web development, app creation, digital marketing, local business, online presence',
  openGraph: {
    title: 'PushStartupHub - Web Solutions for Local Businesses',
    description: 'Boost your local business\'s online success with PushStartupHub\'s web development, app creation, and digital marketing strategies.',
    images: [
      {
        url: 'https://pushstartuphub.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PushStartupHub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PushStartupHub - Web Solutions for Local Businesses',
    description: 'Boost your local business\'s online success with PushStartupHub\'s web development, app creation, and digital marketing strategies.',
    images: ['https://pushstartuphub.com/twitter-image.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://pushstartuphub.com" />
      </Head>
      <div className="bg-black text-custom-white font-sans">
        <Hero />
        <WhatWeAre />
        <Suspense fallback={<PlaceholderComponent />}>
          <Services />
        </Suspense>
        <Suspense fallback={<PlaceholderComponent />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<PlaceholderComponent />}>
          <Portfolio />
        </Suspense>
        <Suspense fallback={<PlaceholderComponent />}>
          <ExploreGuides />
        </Suspense>
        <Suspense fallback={<PlaceholderComponent />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<PlaceholderComponent />}>
          <CTA />
        </Suspense>
      </div>
    </>
  );
}
