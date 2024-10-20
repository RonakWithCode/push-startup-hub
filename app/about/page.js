"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGlobe, FaMobileAlt, FaSearch, FaCheckCircle } from 'react-icons/fa';

const ServiceIcon = ({ name }) => {
  const iconClass = "w-16 h-16 text-blue-400";
  switch (name) {
    case 'web': return <FaGlobe className={iconClass} />;
    case 'app': return <FaMobileAlt className={iconClass} />;
    case 'seo': return <FaSearch className={iconClass} />;
    default: return null;
  }
};

const UnicornIcon = () => (
  <svg className="w-24 h-24 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const WaveSVG = () => (
  <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
    <path fill="#0099ff" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
  </svg>
);

const FloatingBubble = ({ size, delay, duration }) => (
  <div 
    className={`absolute rounded-full bg-blue-500 opacity-10 animate-float`}
    style={{
      width: size,
      height: size,
      animationDelay: delay,
      animationDuration: duration,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  ></div>
);

const AnimatedNumber = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

const GrowthIllustration = () => (
  <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-64 h-64 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
    </div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <svg className="w-24 h-24 mb-4 text-blue-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
      <h3 className="text-3xl font-bold mb-2">Ronosoft</h3>
      <p className="text-xl text-blue-300">Empowering Growth</p>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900 to-transparent"></div>
  </div>
);

const FounderAvatar = () => (
  <div className="relative w-48 h-48">
    <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4299e1" />
          <stop offset="100%" stopColor="#667eea" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="98" fill="url(#avatarGradient)" opacity="0.1" />
      <circle cx="100" cy="85" r="40" fill="url(#avatarGradient)" />
      <path d="M100 135 Q100 180 140 190 A98 98 0 0 1 60 190 Q100 180 100 135" fill="url(#avatarGradient)" />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-4xl font-bold text-white">RJ</span>
    </div>
  </div>
);

const Hexagon = ({ children }) => (
  <div className="relative w-full pt-[115%]">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 115" preserveAspectRatio="none">
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4299e1" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#667eea" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path d="M50 0 L100 28.75 L100 86.25 L50 115 L0 86.25 L0 28.75 Z" fill="url(#hexGradient)" />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center p-6">
      {children}
    </div>
  </div>
);

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden relative">
      <WaveSVG />
      {mounted && [...Array(10)].map((_, i) => (
        <FloatingBubble 
          key={i}
          size={`${Math.random() * 100 + 50}px`}
          delay={`${Math.random() * 5}s`}
          duration={`${Math.random() * 10 + 10}s`}
        />
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse">
          About Ronosoft
        </h1>
        
        <section className="mb-24 relative">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <GrowthIllustration />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-blue-400">Our Story</h2>
              <p className="text-lg sm:text-xl mb-4 animate-fade-in">
                Ronosoft was born from a vision to revolutionize the Indian startup ecosystem. We recognized a critical gap: many new startups in India struggle to establish their online presence due to limited budgets and technical expertise. Our mission is to empower these startups with high-quality digital services at competitive prices, supported by 24/7 assistance.
              </p>
              <p className="text-lg sm:text-xl mb-4 animate-fade-in">
                Since our establishment, we&apos;ve successfully supported over 250 small businesses and early-stage startups, paving their way to become India&apos;s next unicorns.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center text-blue-400">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'web', title: 'Web Development', description: 'Custom-built, responsive websites tailored to your brand and objectives.' },
              { name: 'app', title: 'App Development', description: 'Innovative, user-friendly mobile applications for iOS and Android.' },
              { name: 'seo', title: 'SEO Optimization', description: 'Data-driven strategies to boost your online visibility and traffic.' },
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                <ServiceIcon name={service.name} />
                <h3 className="text-xl sm:text-2xl font-semibold mt-4 mb-2 text-blue-300">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-24 relative">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-1/3 mb-6 lg:mb-0 lg:mr-8">
              <FounderAvatar />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-blue-400">Our Founder&apos;s Vision</h2>
              <p className="text-lg sm:text-xl mb-4 animate-fade-in">
                Our founder saw the challenges that new entrepreneurs face in a rapidly evolving digital landscape. With a mission to empower startup founders, Ronosoft aims to offer accessible solutions that meet their unique needs. We prioritize client satisfaction and strive to deliver exceptional service, ensuring that every startup can thrive online.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-blue-400">Our Unicorn Vision</h2>
          <div className="flex justify-center mb-8 animate-bounce">
            <UnicornIcon />
          </div>
          <p className="text-lg sm:text-xl mb-4 max-w-3xl mx-auto animate-fade-in">
            At Ronosoft, we&apos;re not just dreaming of unicorns – we&apos;re actively working to create them. Our goal is to foster an environment where Indian startups can flourish and reach billion-dollar valuations. We envision a future where India leads the world in innovation, nurturing multiple unicorns with our end-to-end solutions.
          </p>
        </section>
        
        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center text-blue-400">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Startups Supported', value: 250 },
              { label: 'Jobs Created', value: 1000 },
              { label: 'Client Satisfaction', value: 98, suffix: '%' },
              { label: 'Unicorns in Making', value: 10 }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg text-center transform transition duration-500 hover:scale-105">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
                  <AnimatedNumber end={stat.value} duration={2000} />{stat.suffix}
                </div>
                <div className="text-lg sm:text-xl text-blue-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center text-blue-400">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: 'Integrity', description: 'We believe in transparent communication and honest practices.' },
              { title: 'Client-Centric Approach', description: 'We prioritize understanding our clients&apos; needs through thorough meetings, ensuring satisfaction before committing to a project.' },
              { title: 'Accountability', description: 'We promise timely delivery, and if we fail to meet deadlines, we return 50% of the payment.' },
              { title: 'Affordability with Quality', description: 'We provide the best services at competitive prices, proving that lower prices don&apos;t mean lower quality.' }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-500 hover:border-purple-500 transition-colors duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-300">{value.title}</h3>
                <p className="text-base sm:text-lg text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="mb-24">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-center text-blue-400">Future Goals</h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-blue-500">
            <ul className="list-none text-lg sm:text-xl space-y-4">
              {[
                'Build a community of developers connecting clients with skilled professionals',
                'Create more job opportunities in India',
                'Launch our own SaaS products',
                'Develop an AI-powered mobile app for content creators and startup founders'
              ].map((goal, index) => (
                <li key={index} className="flex items-center">
                  <FaCheckCircle className="w-6 h-6 mr-2 text-blue-400 flex-shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        
        <section className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-blue-400">Ready to Start Your Unicorn Journey?</h2>
          <p className="text-lg sm:text-xl mb-8">Visit us at Katti Katti, near Yadav Petrol Pump, Alwar, India</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg sm:text-xl font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse">
            Get in Touch
          </Link>
        </section>
      </div>
    </div>
  );
}
