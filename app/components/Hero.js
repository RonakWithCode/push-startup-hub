"use client"
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden relative font-inter py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 leading-tight tracking-tight">
          Ignite Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Digital Transformation</span>
        </h1>
        <h2 className="font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-gray-300 tracking-wide">
          Innovative Web Solutions for Forward-Thinking Businesses
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto text-gray-400 leading-relaxed">
          At PushStartupHub, we craft bespoke digital experiences that propel your business into the future. Our expert team delivers cutting-edge web development, intuitive app creation, and data-driven marketing strategies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href="#contact" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Start Your Journey
          </Link>
          <Link href="#services" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
