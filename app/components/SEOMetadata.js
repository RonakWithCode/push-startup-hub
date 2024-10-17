// components/SEOMetadata.js
import { NextSeo, ArticleJsonLd } from 'next-seo';

const SEOMetadata = ({ frontMatter, slug }) => {
  const { title, description, date, author, image, tags } = frontMatter;
  const url = `https://pushstartup.com/guides/${slug}`;

  return (
    <>
      <NextSeo
        title={`${title} | Push Start-Up Hub`}
        description={description}
        canonical={url}
        openGraph={{
          type: 'article',
          url,
          title,
          description,
          images: [{ url: image, width: 1200, height: 630, alt: title }],
          article: {
            publishedTime: date,
            modifiedTime: date,
            authors: [author],
            tags,
          },
        }}
      />
      
      <ArticleJsonLd
        type="BlogPosting"
        url={url}
        title={title}
        images={[image]}
        datePublished={date}
        dateModified={date}
        authorName={author}
        description={description}
      />
    </>
  );
};

export default SEOMetadata;
