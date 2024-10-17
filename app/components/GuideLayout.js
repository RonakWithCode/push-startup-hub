// components/GuideLayout.js
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendar, FaUser, FaClock } from 'react-icons/fa';
import TableOfContents from './TableOfContents';
import SEOMetadata from './SEOMetadata';

const GuideLayout = ({ frontMatter, content, slug, tableOfContents }) => {
  const { title, description, date, author, readTime, image } = frontMatter;

  return (
    <>
      <SEOMetadata frontMatter={frontMatter} slug={slug} />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <FaCalendar className="mr-2" />
            <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span className="mx-2">|</span>
            <FaUser className="mr-2" />
            <span>{author}</span>
            <span className="mx-2">|</span>
            <FaClock className="mr-2" />
            <span>{readTime}</span>
          </div>
          <Image
            src={image}
            alt={title}
            width={1200}
            height={630}
            className="rounded-lg shadow-lg"
          />
        </header>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/4">
            <TableOfContents toc={tableOfContents} />
          </aside>
          <div className="md:w-3/4">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>

        <div className="mt-12">
          <Link href="/guides" className="text-blue-600 hover:text-blue-800">
            ← Back to Guides
          </Link>
        </div>
      </article>
    </>
  );
};

export default GuideLayout;
