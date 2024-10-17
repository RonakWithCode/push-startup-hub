import '../../styles/guide.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import GuideContent from '../../components/GuideContent';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'app/guides/content', `${slug}.md`), 'utf-8');
  const { data: frontMatter } = matter(markdownWithMeta);

  return {
    title: `${frontMatter.title} | Push Start-Up Hub`,
    description: frontMatter.description,
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.description,
      type: 'article',
      publishedTime: frontMatter.date,
      authors: [frontMatter.author],
      tags: frontMatter.tags,
    },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = params;
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'app/guides/content', `${slug}.md`), 'utf-8');
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return <GuideContent frontMatter={frontMatter} contentHtml={contentHtml} slug={slug} />;
}
