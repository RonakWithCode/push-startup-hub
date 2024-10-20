"use client"
import Link from 'next/link';
import { Montserrat, Poppins } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function Hero() {
  return (
    <section className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative py-12 sm:py-16 md:py-20 lg:py-24 ${montserrat.className}`}>
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className={`${poppins.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight`}>
          Ignite Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Digital Transformation</span>
        </h1>
        <h2 className={`${poppins.className} text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-gray-300 tracking-wide`}>
          Innovative Web Solutions and AI-Powered Startup Tools
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-3xl mx-auto text-gray-400 leading-relaxed">
          At Ronosoft, we craft bespoke digital experiences and provide AI-powered tools to propel your business into the future. From web development to startup assistance, we&apos;ve got you covered with name generation, business planning, branding, and more.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
          <Link href="#contact" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Start Your Journey
          </Link>
          <Link href="#services" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg transition duration-300 shadow-lg">
            Explore Services
          </Link>
          <Link href="/ai-tools" className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-base md:text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Try AI Tools
          </Link>
        </div>
      </div>
    </section>
  );
}
