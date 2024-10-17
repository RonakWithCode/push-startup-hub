"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileNavOpen(false);
        setServicesOpen(false);
        setDesktopServicesOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleDesktopServices = () => setDesktopServicesOpen(!desktopServicesOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/services', label: 'Sservice' },
  ];

  const serviceLinks = [
    { href: '/mobile-app', label: 'Mobile App Development' },
    { href: '/website', label: 'Website Development' },
    { href: '/web-design', label: 'Web Design Services' },
    { href: '/seo', label: 'SEO Optimization' },
  ];

  const isActive = (href) => pathname === href;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav ref={navRef} className="container mx-auto px-4 py-4 lg:py-6" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition duration-300">
            Push<span className="text-blue-400">StartUpHub</span>
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-white hover:text-blue-400 transition duration-300 ${
                  isActive(link.href) ? 'text-blue-400 border-b-2 border-blue-400' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="relative group">
              <button
                onClick={toggleDesktopServices}
                className={`text-white hover:text-blue-400 transition duration-300 ${
                  serviceLinks.some(link => isActive(link.href)) ? 'text-blue-400' : ''
                }`}
                aria-expanded={desktopServicesOpen}
              >
                Services
              </button>
              <ul className="absolute left-0 mt-2 w-56 bg-gray-900 rounded-md shadow-lg transition-all duration-300 ease-in-out opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                {serviceLinks.map((service) => (
                  <li key={service.href}>
                    <Link 
                      href={service.href} 
                      className={`block px-4 py-2 text-sm ${
                        isActive(service.href) ? 'text-blue-400 bg-gray-800' : 'text-white hover:bg-gray-800 hover:text-blue-400'
                      } transition duration-300`}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link href="#contact" className="hidden lg:block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full text-sm transition duration-300 transform hover:scale-105">
            Get Started
          </Link>
          <button 
            onClick={toggleMobileNav} 
            className="lg:hidden text-white hover:text-blue-400 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d={mobileNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div 
          className={`lg:hidden mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
            mobileNavOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="bg-gray-900 rounded-md p-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={`block text-white hover:text-blue-400 transition duration-300 py-2 ${
                    isActive(link.href) ? 'text-blue-400' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button 
                onClick={toggleServices}
                className={`w-full text-left flex justify-between items-center text-white hover:text-blue-400 transition duration-300 py-2 ${
                  serviceLinks.some(link => isActive(link.href)) ? 'text-blue-400' : ''
                }`}
                aria-expanded={servicesOpen}
              >
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                servicesOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {serviceLinks.map((service) => (
                  <li key={service.href}>
                    <Link 
                      href={service.href} 
                      className={`block text-white hover:text-blue-400 transition duration-300 py-1 ${
                        isActive(service.href) ? 'text-blue-400' : ''
                      }`}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <Link href="#contact" className="mt-4 block w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full text-center transition duration-300 transform hover:scale-105">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
