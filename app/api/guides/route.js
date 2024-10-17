import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
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

  return new Response(JSON.stringify(guides), {
    headers: { 'Content-Type': 'application/json' },
  });
}