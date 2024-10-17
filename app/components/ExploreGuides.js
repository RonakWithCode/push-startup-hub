import React from 'react';
import Link from 'next/link';
import { getGuideIcon } from './GuideIcon';

const guides = [
    { title: 'Business Model Canvas', category: 'marketing', slug: 'business-model-canvas' },
    { title: 'The Art of Pivoting', category: 'startup strategy', slug: 'art-of-pivoting' },
    { title: 'AI-Powered Customer Service', category: 'customer service', slug: 'ai-powered-customer-service' },
  
    // Add more guides as needed
];

const ExploreGuides = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Explore Our Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link href={`/guides/${guide.slug}`} key={guide.slug}>
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300">
                {getGuideIcon(guide.category)}
                <h3 className="text-xl font-semibold mt-4">{guide.title}</h3>
                <p className="text-gray-400 mt-2">Category: {guide.category}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/guides" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            View All Guides
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreGuides;