"use client"
import { useState } from 'react';
import { FaCode, FaMobileAlt, FaSearch, FaPalette, FaRocket, FaChartLine, FaLaptopCode, FaServer, FaShieldAlt, FaCloudUploadAlt, FaRobot, FaBullhorn, FaCheckCircle, FaRupeeSign } from 'react-icons/fa';

import Link from 'next/link';

const services = [
  {
    icon: <FaCode className="w-12 h-12 text-blue-500" />,
    title: "Custom Web Development",
    description: "Tailored websites that perfectly align with your brand and business objectives. Our expert developers create responsive, fast-loading, and user-friendly web solutions.",
    details: [
      "Responsive design for all devices",
      "Custom CMS integration",
      "E-commerce solutions",
      "Progressive Web Apps (PWAs)",
      "API development and integration"
    ],
    caseStudy: {
      title: "E-commerce Revenue Boost",
      description: "We helped a local retailer increase online sales by 200% with a custom e-commerce solution."
    }
  },
  {
    icon: <FaMobileAlt className="w-12 h-12 text-green-500" />,
    title: "Mobile App Development",
    description: "Innovative mobile applications for iOS and Android platforms. We build intuitive, high-performance apps that engage users and drive business growth.",
    details: [
      "Native iOS and Android development",
      "Cross-platform development with React Native",
      "UI/UX design for mobile",
      "App Store optimization",
      "Ongoing maintenance and support"
    ],
    caseStudy: {
      title: "Fitness App Success",
      description: "Our fitness tracking app reached 1 million downloads within 6 months of launch."
    }
  },
  {
    icon: <FaSearch className="w-12 h-12 text-purple-500" />,
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to boost your online visibility and organic traffic. We help your business rank higher in search engine results pages (SERPs).",
    details: [
      "Keyword research and optimization",
      "On-page and off-page SEO",
      "Technical SEO audits",
      "Content strategy for SEO",
      "Local SEO for businesses"
    ],
    caseStudy: {
      title: "Organic Traffic Surge",
      description: "We increased a client's organic search traffic by 500% in just 6 months."
    }
  },
  {
    icon: <FaPalette className="w-12 h-12 text-pink-500" />,
    title: "UI/UX Design",
    description: "Creating visually stunning and user-centric designs that enhance user engagement and satisfaction. Our designs are not just beautiful, but also functional and intuitive.",
    details: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Responsive design",
      "Usability testing",
      "Design system creation"
    ],
    caseStudy: {
      title: "Conversion Rate Optimization",
      description: "Our redesign increased a SaaS platform's conversion rate by 75%."
    }
  },
  {
    icon: <FaRocket className="w-12 h-12 text-red-500" />,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions to amplify your online presence and drive conversions. We create strategies that reach your target audience effectively.",
    details: [
      "Social media marketing",
      "Content marketing",
      "Email marketing campaigns",
      "PPC advertising",
      "Influencer marketing"
    ],
    caseStudy: {
      title: "ROI Maximization",
      description: "We achieved a 10x ROI on a client's digital marketing campaign."
    }
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-yellow-500" />,
    title: "Analytics and Reporting",
    description: "In-depth analytics and reporting to track your digital performance. We provide actionable insights to optimize your online strategies and ROI.",
    details: [
      "Google Analytics setup and tracking",
      "Custom dashboard creation",
      "Conversion rate optimization",
      "A/B testing",
      "Regular performance reports"
    ],
    caseStudy: {
      title: "Data-Driven Growth",
      description: "Our analytics insights helped a startup increase user retention by 40%."
    }
  },
  {
    icon: <FaLaptopCode className="w-12 h-12 text-indigo-500" />,
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored to your unique business needs. We develop scalable, efficient, and secure applications that streamline your operations.",
    details: [
      "Enterprise software development",
      "Cloud-based solutions",
      "Legacy system modernization",
      "Agile development methodology",
      "Continuous integration and deployment"
    ],
    caseStudy: {
      title: "Operational Efficiency Boost",
      description: "Our custom ERP system increased a manufacturing company's efficiency by 35%."
    }
  },
  {
    icon: <FaServer className="w-12 h-12 text-gray-500" />,
    title: "DevOps and Cloud Services",
    description: "Streamline your development and operations with our DevOps practices and cloud solutions. We help you build, deploy, and scale applications efficiently.",
    details: [
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "Cloud migration and optimization",
      "Containerization with Docker and Kubernetes",
      "24/7 monitoring and support"
    ],
    caseStudy: {
      title: "Scalability Achievement",
      description: "We helped a startup handle 10x traffic growth with zero downtime using our cloud architecture."
    }
  },
  {
    icon: <FaShieldAlt className="w-12 h-12 text-green-600" />,
    title: "Cybersecurity Services",
    description: "Protect your digital assets with our comprehensive cybersecurity solutions. We safeguard your business against evolving cyber threats.",
    details: [
      "Vulnerability assessments",
      "Penetration testing",
      "Security audits",
      "Incident response planning",
      "Employee security training"
    ],
    caseStudy: {
      title: "Threat Prevention",
      description: "Our security measures prevented a potential data breach, saving a client millions in potential losses."
    }
  },
  {
    icon: <FaRobot className="w-12 h-12 text-blue-600" />,
    title: "AI and Machine Learning Solutions",
    description: "Harness the power of AI and ML to gain competitive advantages. We develop intelligent systems that automate processes and provide valuable insights.",
    details: [
      "Predictive analytics",
      "Natural Language Processing (NLP)",
      "Computer Vision applications",
      "Chatbots and virtual assistants",
      "Recommendation systems"
    ],
    caseStudy: {
      title: "AI-Driven Efficiency",
      description: "Our ML model improved a client's inventory forecasting accuracy by 40%, reducing costs significantly."
    }
  }
];

const ServiceCard = ({ service, isExpanded, onToggle }) => (
  <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition duration-300 hover:shadow-2xl">
    <div className="flex items-center mb-4">
      {service.icon}
      <h2 className="text-2xl font-semibold ml-4">{service.title}</h2>
    </div>
    <p className="text-gray-300 mb-4">{service.description}</p>
    <button 
      onClick={onToggle}
      className="text-blue-400 hover:text-blue-300 transition duration-300"
    >
      {isExpanded ? 'Show Less' : 'Learn More'}
    </button>
    {isExpanded && (
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
        <ul className="list-disc list-inside text-gray-400 mb-4">
          {service.details.map((detail, idx) => (
            <li key={idx} className="mb-2">{detail}</li>
          ))}
        </ul>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Case Study: {service.caseStudy.title}</h3>
          <p className="text-gray-300">{service.caseStudy.description}</p>
        </div>
      </div>
    )}
  </div>
);

const ComparisonTable = () => (
  <div className="overflow-x-auto mt-16">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-blue-900">
          <th className="p-3">Feature</th>
          <th className="p-3">Push Start-Up Hub</th>
          <th className="p-3">Typical Agencies</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-800">
          <td className="p-3">Tailored Solutions</td>
          <td className="p-3"><FaCheckCircle className="text-green-500" /></td>
          <td className="p-3">Limited</td>
        </tr>
        <tr className="bg-gray-900">
          <td className="p-3">Cutting-edge Technologies</td>
          <td className="p-3"><FaCheckCircle className="text-green-500" /></td>
          <td className="p-3">Varies</td>
        </tr>
        <tr className="bg-gray-800">
          <td className="p-3">Dedicated Project Manager</td>
          <td className="p-3"><FaCheckCircle className="text-green-500" /></td>
          <td className="p-3">Not always</td>
        </tr>
        <tr className="bg-gray-900">
          <td className="p-3">24/7 Support</td>
          <td className="p-3"><FaCheckCircle className="text-green-500" /></td>
          <td className="p-3">Rarely</td>
        </tr>
        <tr className="bg-gray-800">
          <td className="p-3">Transparent Pricing</td>
          <td className="p-3"><FaCheckCircle className="text-green-500" /></td>
          <td className="p-3">Often unclear</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const KeyValues = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
    {[
      { title: "Innovation", description: "We stay ahead of the curve, constantly adopting new technologies to give you a competitive edge." },
      { title: "Reliability", description: "Our track record speaks for itself. We deliver on time, every time." },
      { title: "Value for Money", description: "We offer premium services at competitive rates, ensuring you get the best ROI." },
    ].map((value, index) => (
      <div key={index} className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
        <p>{value.description}</p>
      </div>
    ))}
  </div>
);

const PricingPlans = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
    {[
      { 
        name: "Startup Booster", 
        price: "₹19,999+", 
        features: [
          "Basic responsive website",
          "SEO optimization",
          "Social media setup",
          "3 months support",
          "Google Analytics integration",
          "Monthly performance report"
        ]
      },
      { 
        name: "Growth Accelerator", 
        price: "₹49,999+", 
        features: [
          "Custom web application",
          "Mobile app (iOS or Android)",
          "Advanced SEO package",
          "Social media management",
          "Email marketing campaign",
          "6 months priority support",
          "Conversion rate optimization",
          "Quarterly strategy review"
        ]
      },
      { 
        name: "Enterprise Innovator", 
        price: "Custom", 
        features: [
          "Full-scale digital solutions",
          "Web and mobile app development",
          "AI/ML integration",
          "Custom software development",
          "24/7 priority support",
          "Dedicated project manager",
          "Cybersecurity package",
          "Monthly executive reports"
        ]
      },
    ].map((plan, index) => (
      <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
        <p className="text-3xl font-bold mb-4">
          {plan.price === "Custom" ? (
            "Custom Pricing"
          ) : (
            <>
              <FaRupeeSign className="inline-block" /> {plan.price}
              <span className="text-sm"> estimated</span>
            </>
          )}
        </p>
        <ul className="text-left mb-6">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="mb-2 flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" /> {feature}
            </li>
          ))}
        </ul>
        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 inline-block">
          Get Detailed Quote
        </Link>
      </div>
    ))}
  </div>
);

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <>
     

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Our Services
          </h1>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
            Empowering Indian startups and businesses with cutting-edge digital solutions. Explore our comprehensive range of services designed to fuel your growth and success in the digital landscape.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                service={service}
                isExpanded={expandedService === index}
                onToggle={() => setExpandedService(expandedService === index ? null : index)}
              />
            ))}
          </div>

          <section className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Push Start-Up Hub?</h2>
            <ComparisonTable />
          </section>

          <section className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
            <KeyValues />
          </section>

          <section className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
            <p className="text-center mb-8">Transparent pricing tailored for the Indian market. Choose the plan that fits your needs and budget.</p>
            <PricingPlans />
          </section>

          {/* <section className="mt-24 bg-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Clients in India</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <Image 
                  key={num}
                  src={`/images/indian-client-logo-${num}.png`}
                  alt={`Indian Client ${num} logo`}
                  width={150}
                  height={75}
                  className="opacity-50 hover:opacity-100 transition duration-300"
                />
              ))}
            </div>
          </section> */}

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to Elevate Your Digital Presence in India?</h2>
            <p className="text-xl mb-8">Lets discuss how our services can be tailored to your unique needs and goals in the Indian market.</p>
            <a href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-block">
              Get a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
