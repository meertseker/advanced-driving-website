import { buildAbsoluteUrl } from './config';

interface PageMetadataProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  lang?: string;
  keywords?: string[];
}

export function getPageMetadata({
  title,
  description,
  url,
  image,
  lang = 'tr',
  keywords = []
}: PageMetadataProps) {
  const siteName = "İleri ve Güvenli Sürüş Eğitimi";
  const defaultDescription = "Teorik eğitim, kapalı alan hakimiyet eğitimi ve yol eğitimi ile profesyonel ileri sürüş eğitimi. Güvenli ve deneyimli sürüş için başvurun.";
  const defaultImage = buildAbsoluteUrl('/og-image.jpg');
  const canonicalUrl = url ? buildAbsoluteUrl(url) : undefined;

  return {
    title: title ? `${title} | ${siteName}` : siteName,
    description: description || defaultDescription,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl,
        }
      : undefined,
    openGraph: {
      title: title || siteName,
      description: description || defaultDescription,
      url: canonicalUrl,
      siteName: siteName,
      images: [
        {
          url: image ? buildAbsoluteUrl(image) : defaultImage,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
      locale: lang === 'tr' ? 'tr_TR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: "summary_large_image",
      title: title || siteName,
      description: description || defaultDescription,
      images: [image ? buildAbsoluteUrl(image) : defaultImage],
    },
  };
}


