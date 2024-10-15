'use client'; // This is a client-side component
import { useState } from 'react';
import Image from 'next/image';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    position: '',
    socialMedia: {
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: ''
    },
    interestedServices: [],
    budget: '',
    message: ''
  });

  const [selectedCountry, setSelectedCountry] = useState('in');

  
  const services = [
    'Web Development',
    'Mobile App Creation',
    'Digital Marketing',
    'SEO Optimization',
    'E-commerce Solutions',
    'UI/UX Design',
    'SaaS Development'
  ];

  const positions = [
    'CEO',
    'CTO',
    'Marketing Manager',
    'Product Manager',
    'Founder',
    'Individual',
    'Other'
  ];

  const socialMediaIcons = {
    facebook: { icon: FaFacebook, color: '#1877F2', name: 'Facebook' },
    twitter: { icon: FaTwitter, color: '#1DA1F2', name: 'Twitter' },
    linkedin: { icon: FaLinkedin, color: '#0A66C2', name: 'LinkedIn' },
    instagram: { icon: FaInstagram, color: '#E4405F', name: 'Instagram' }
  };

  const currencyMap = {
    us: { name: 'United States Dollar', code: 'USD', symbol: '$' },
    gb: { name: 'British Pound Sterling', code: 'GBP', symbol: '£' },
    eu: { name: 'Euro', code: 'EUR', symbol: '€' },
    jp: { name: 'Japanese Yen', code: 'JPY', symbol: '¥' },
    in: { name: 'Indian Rupee', code: 'INR', symbol: '₹' },
    ca: { name: 'Canadian Dollar', code: 'CAD', symbol: 'C$' },
    au: { name: 'Australian Dollar', code: 'AUD', symbol: 'A$' },
    ch: { name: 'Swiss Franc', code: 'CHF', symbol: 'Fr' },
    cn: { name: 'Chinese Yuan', code: 'CNY', symbol: '¥' },
    hk: { name: 'Hong Kong Dollar', code: 'HKD', symbol: 'HK$' },
    sg: { name: 'Singapore Dollar', code: 'SGD', symbol: 'S$' },
    se: { name: 'Swedish Krona', code: 'SEK', symbol: 'kr' },
    kr: { name: 'South Korean Won', code: 'KRW', symbol: '₩' },
    mx: { name: 'Mexican Peso', code: 'MXN', symbol: '$' },
    nz: { name: 'New Zealand Dollar', code: 'NZD', symbol: 'NZ$' },
  };

  const getCurrency = (countryCode) => {
    return currencyMap[countryCode] || currencyMap.us; // Default to USD
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox'
        ? (checked
          ? [...prevData.interestedServices, value]
          : prevData.interestedServices.filter(service => service !== value))
        : value
    }));
  };

  const handleSocialMediaChange = (platform) => (e) => {
    setFormData(prevData => ({
      ...prevData,
      socialMedia: {
        ...prevData.socialMedia,
        [platform]: e.target.value
      }
    }));
  };

  const handlePhoneChange = (value, country) => {
    setFormData(prevData => ({ ...prevData, phone: value }));
    setSelectedCountry(country.countryCode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Custom styles for PhoneInput
  const phoneInputStyle = {
    width: '100%',
    height: '42px',
    fontSize: '16px',
    paddingLeft: '48px',
    borderRadius: '0.375rem',
    backgroundColor: '#1f2937',
    color: 'white',
    border: '1px solid #374151',
    fontFamily: 'Inter, sans-serif',
  };

  const phoneButtonStyle = {
    backgroundColor: '#374151',
    borderRadius: '0.375rem 0 0 0.375rem',
    border: '1px solid #4B5563',
  };

  const phoneDropdownStyle = {
    backgroundColor: '#1f2937',
    color: '#60a5fa',
    border: '1px solid #4B5563',
  };

  const inputClasses = "w-full p-3 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition duration-200 hover:shadow-lg hover:shadow-blue-500/20 font-inter";

  const labelClasses = "block mb-2 text-blue-400 font-semibold font-poppins";

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-900 to-black text-white py-16 md:py-24 font-inter">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-poppins tracking-tight">Let&apos;s Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Extraordinary</span></h2>
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelClasses}>Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClasses} placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClasses} placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className={labelClasses}>Phone Number</label>
              <PhoneInput
                country={'in'}
                value={formData.phone}
                onChange={handlePhoneChange}
                inputStyle={{...phoneInputStyle, transition: 'all 0.2s', ':hover': { boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.2), 0 4px 6px -2px rgba(59, 130, 246, 0.1)' }}}
                buttonStyle={phoneButtonStyle}
                dropdownStyle={phoneDropdownStyle}
                containerClass="hover:shadow-lg hover:shadow-blue-500/2 transition-all duration-200"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessName" className={labelClasses}>Business Name</label>
                <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} className={inputClasses} placeholder="Awesome Inc." />
              </div>
              <div>
                <label htmlFor="position" className={labelClasses}>Your Role</label>
                <select id="position" name="position" value={formData.position} onChange={handleChange} className={inputClasses}>
                  <option value="">Select your role</option>
                  {positions.map(pos => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className={labelClasses}>Social Media (Optional)</label>
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(socialMediaIcons).map(([platform, { icon: Icon, color, name }]) => (
                  <div key={platform} className="flex items-center bg-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="p-3" style={{ backgroundColor: color }}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <input
                      type="text"
                      value={formData.socialMedia[platform]}
                      onChange={handleSocialMediaChange(platform)}
                      placeholder={`Your ${name} profile`}
                      className="flex-grow p-3 bg-transparent border-none focus:ring-0 focus:outline-none text-white placeholder-gray-400 font-inter"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className={labelClasses}>Services of Interest</label>
              <div className="grid md:grid-cols-3 gap-2">
                {services.map(service => (
                  <div key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service}
                      name="interestedServices"
                      value={service}
                      checked={formData.interestedServices.includes(service)}
                      onChange={handleChange}
                      className="mr-2 form-checkbox text-blue-500 h-5 w-5 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
                    />
                    <label htmlFor={service} className="text-sm font-inter">{service}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="budget" className={labelClasses}>Project Budget</label>
              <div className="relative flex items-center">
                <div className="absolute left-3 flex items-center space-x-2">
                  <span className="text-gray-400 font-bold">{getCurrency(selectedCountry).symbol}</span>
                </div>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`${inputClasses} pl-10`}
                  placeholder="5,000 - 10,000"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className={labelClasses}>Project Details</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className={inputClasses} placeholder="Tell us about your amazing project idea..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:shadow-lg hover:shadow-blue-500/20 font-poppins text-lg">
              Let&apos;s Make It Happen!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
