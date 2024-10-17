"use client"
import { useState, useEffect } from 'react';
import Contact from '../components/Contact';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const WaveSVG = () => (
  <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
    <path fill="#0099ff" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
  </svg>
);

const ContactIcon = ({ name }) => {
  const iconClass = "w-8 h-8 text-blue-400";
  return name === 'email' ? <FaEnvelope className={iconClass} /> : <FaPhone className={iconClass} />;
};

const FloatingBubble = ({ size, delay, duration }) => (
  <div 
    className="absolute rounded-full bg-blue-500 opacity-10 animate-float"
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

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('contact');
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
          Get in Touch with Push Start-Up Hub
        </h1>

        <div className="mb-16">
          <div className="flex justify-center space-x-4 mb-12">
            {['contact', 'info'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-transparent text-blue-300 hover:bg-blue-900/30'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'contact' ? 'Contact Form' : 'Contact Info'}
              </button>
            ))}
          </div>

          <div className="mt-12 transition-all duration-500 ease-in-out">
            {activeTab === 'contact' ? (
              <div className="backdrop-blur-md bg-white/5 p-8 rounded-3xl shadow-2xl animate-fadeIn">
                <Contact />
              </div>
            ) : (
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto animate-fadeIn">
                {[
                  { name: 'email', title: 'Email Us', content: 'contact@pushstartup.com' },
                  { name: 'phone', title: 'Call Us', content: '+91 1234567890' }
                ].map((item) => (
                  <div key={item.name} className="flex items-center space-x-4 backdrop-blur-md bg-white/5 p-6 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    <ContactIcon name={item.name} />
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-blue-300">{item.title}</h3>
                      <p className="text-lg">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <section className="text-center mt-20 relative">
          <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10" width="300" height="300" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#4299e1" strokeWidth="2">
              <animate attributeName="r" from="0" to="45" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">Ready to Launch Your Startup?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-300">
            Whether you&apos;re brainstorming ideas or ready to scale, we&apos;re here to fuel your startup journey. Let&apos;s turn your vision into reality!
          </p>
          <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <span className="relative z-10">Schedule Your Free Consultation</span>
            <span className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white opacity-10 transition-all duration-300 group-hover:scale-100"></span>
          </button>
        </section>
      </div>
    </div>
  );
}
