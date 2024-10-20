'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/navigation'; // Import useRouter

const aiTools = [
  {
    slug:"ai-name-generator",
    title: "Business name generation",
    description: "AI-driven insights to create Business name.",
    icon: "✨",
    color: "#bdd907",
    action: "Generating your business plan..."
  },
  {
    slug:"ai-business-planner",
    title: "Smart Business Planning",
    description: "AI-driven insights to create robust business plans.",
    icon: "💡",
    color: "#4FD1C5",
    action: "Generating your business plan..."
  },
  {
    slug:"ai-market-analysis",
    title: "Market Analysis",
    description: "Real-time market trends and competitor analysis.",
    icon: "📊",
    color: "#F6AD55",
    action: "Analyzing market trends..."
  },
  {
    slug:"ai-seo-optimization",
    title: "Automated SEO Optimization",
    description: "AI-powered SEO tools to boost your online presence.",
    icon: "🚀",
    color: "#63B3ED",
    action: "Optimizing your SEO..."
  },
  {
    slug:"ai-content-generation",
    title: "AI Content Generation",
    description: "Create engaging content with AI assistance.",
    icon: "✍️",
    color: "#9F7AEA",
    action: "Generating content..."
  },
  {
    slug:"ai-predictive-analytics",
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions.",
    icon: "🔮",
    color: "#F687B3",
    action: "Forecasting trends..."
  },
  {
    slug:"ai-customer-insights",
    title: "Customer Insights",
    description: "Understand your audience with AI-powered analytics.",
    icon: "👥",
    color: "#48BB78",
    action: "Analyzing customer data..."
  }
];

// SEO keywords
const keywords = [
  "AI tools for startups",
  "artificial intelligence business solutions",
  "smart business planning",
  "AI market analysis",
  "automated SEO optimization",
  "AI content generation",
  "predictive analytics for startups",
  "customer insights AI",
  "startup technology",
  "business intelligence tools",
  "AI-driven decision making",
  "startup growth strategies",
];

export default function AIToolsPage() {
  const [activeToolIndex, setActiveToolIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleToolClick = (index) => {
    // if (user) {
      // <div id="otpless-login-page"></div> 
      setActiveToolIndex(index);
      // alert(`${aiTools[index].title} process completed!`);
      router.push(`/ai-tools/${aiTools[index].slug}`);
    // } else {
      // alert("Please login to use this service.");
    // }
  };

  const handleAuthSuccess = (otplessUser) => {
    const userData = {
      phone: otplessUser.phone,
      email: otplessUser.email,
      name: otplessUser.name,
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const pageTitle = "AI-Powered Tools for Startups | Ronosoft";
  const pageDescription = "Boost your startup's growth with our suite of AI-powered tools. From business planning to customer insights, leverage artificial intelligence for smarter decision-making.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://Ronosoft.com/ai-tools" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://Ronosoft.com/images/ai-tools-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://Ronosoft.com/ai-tools" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="https://Ronosoft.com/images/ai-tools-twitter.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://Ronosoft.com/ai-tools" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Structured Data / JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": pageTitle,
            "description": pageDescription,
            "publisher": {
              "@type": "Organization",
              "name": "Ronosoft",
              "logo": {
                "@type": "ImageObject",
                "url": "https://Ronosoft.com/logo.png"
              }
            }
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
     
       
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-8 sm:mb-12 text-center"
          >
            AI-Powered Tools for Startups
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {aiTools.map((tool, index) => (
              <AIFeatureCard 
                key={index} 
                {...tool} 
                onClick={() => handleToolClick(index)}
                isActive={activeToolIndex === index}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function AIFeatureCard({ title, description, icon, color, action, onClick, isActive, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer relative overflow-hidden ${isActive ? 'pointer-events-none' : ''}`} 
      style={{borderTop: `4px solid ${color}`}}
      onClick={onClick}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
      {isActive && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        >
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
            <p>{action}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
