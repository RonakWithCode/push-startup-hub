'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaCalendar, FaUser, FaClock, FaTags, FaChevronLeft } from 'react-icons/fa';
import { getGuideIcon } from './GuideIcon';
import SEOMetadata from './SEOMetadata';

export default function GuideContent({ frontMatter, contentHtml, slug }) {
  const guideIcon = getGuideIcon(frontMatter.category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      <SEOMetadata frontMatter={frontMatter} slug={slug} />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link href="/guides" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition duration-300 mb-8">
          <FaChevronLeft className="mr-2" />
          Back to Guides
        </Link>
        <article>
          <header className="mb-12">
            <div className="flex items-center mb-4">
              {guideIcon}
              <h1 className="text-4xl sm:text-5xl font-bold ml-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                {frontMatter.title}
              </h1>
            </div>
            <div className="flex flex-wrap items-center text-gray-300 mb-6">
              <span className="flex items-center mr-6 mb-2">
                <FaCalendar className="mr-2 text-blue-400" />
                <time dateTime={frontMatter.date}>
                  {new Date(frontMatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </span>
              <span className="flex items-center mr-6 mb-2">
                <FaUser className="mr-2 text-blue-400" />
                <span>{frontMatter.author}</span>
              </span>
              <span className="flex items-center mb-2">
                <FaClock className="mr-2 text-blue-400" />
                <span>{frontMatter.readTime}</span>
              </span>
            </div>
            <div className="flex flex-wrap mb-8">
              <FaTags className="mr-2 text-blue-400" />
              {frontMatter.tags.map((tag, index) => (
                <span key={index} className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full mr-2 mb-2 text-sm">
                  {tag}
                </span>
              ))}
            </div>
            {frontMatter.image && (
              <Image
                src={frontMatter.image}
                alt={frontMatter.title}
                width={1200}
                height={630}
                className="rounded-lg shadow-lg mb-8"
              />
            )}
          </header>

          <div className="prose prose-lg prose-invert max-w-none bg-gray-800 bg-opacity-30 p-8 rounded-lg shadow-md">
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>

          <div className="mt-12 bg-blue-900 bg-opacity-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Share this guide</h2>
            <div className="flex space-x-4">
              {/* Add your social sharing buttons here */}
            </div>
          </div>

          <div className="mt-12">
            <Link href="/guides" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
              <FaChevronLeft className="mr-2" />
              Back to All Guides
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
