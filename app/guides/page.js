import '../styles/guide.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { FaClock, FaTags } from 'react-icons/fa';
import { getGuideIcon } from '../components/GuideIcon';

export const metadata = {
  title: "Startup Guides & Resources | Push Start-Up Hub",
  description: "Access our collection of comprehensive guides and resources designed to help startups and small businesses thrive.",
  openGraph: {
    url: 'https://pushstartup.com/guides',
    title: 'Startup Guides & Resources',
    description: 'Comprehensive guides and resources for startups and small businesses.',
    images: [
      {
        url: 'https://pushstartup.com/images/guides-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Startup Guides & Resources',
      },
    ],
  },
};

export default function GuidesPage() {
  const guideFiles = fs.readdirSync(path.join(process.cwd(), 'app/guides/content'));
  const guides = guideFiles.map(filename => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'app/guides/content', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      slug,
      frontMatter,
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl font-bold mb-12 text-center text-blue-400">Startup Guides & Resources</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {guides.map(guide => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`}>
              <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 hover:shadow-lg transition duration-300 h-full flex flex-col justify-between transform hover:scale-105">
                <div>
                  <div className="flex items-center mb-4">
                    {getGuideIcon(guide.frontMatter.category)}
                    <h2 className="text-xl font-semibold ml-4 text-blue-300">{guide.frontMatter.title}</h2>
                  </div>
                  <p className="text-gray-300 mb-4">{guide.frontMatter.description}</p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span className="flex items-center">
                      <FaClock className="mr-1" />
                      {guide.frontMatter.readTime}
                    </span>
                    <span>{new Date(guide.frontMatter.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex flex-wrap">
                    {guide.frontMatter.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-blue-700 text-white text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
