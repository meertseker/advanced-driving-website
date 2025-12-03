import { SITE_URL, SITE_CONFIG } from './config';

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  "name": SITE_CONFIG.name,
  "description": SITE_CONFIG.description,
  "url": SITE_URL,
  "telephone": SITE_CONFIG.phone,
  "email": SITE_CONFIG.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": SITE_CONFIG.address.street,
    "addressLocality": SITE_CONFIG.address.city,
    "addressRegion": SITE_CONFIG.address.city,
    "postalCode": SITE_CONFIG.address.postalCode,
    "addressCountry": SITE_CONFIG.address.country
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "₺₺",
  "areaServed": {
    "@type": "City",
    "name": SITE_CONFIG.address.city
  }
};

export const serviceSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": name,
  "description": description,
  "url": url,
  "provider": {
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "url": SITE_URL
  },
  "areaServed": {
    "@type": "Country",
    "name": "Turkey"
  },
  "serviceType": "Driving School",
  "offers": {
    "@type": "Offer",
    "price": "18000",
    "priceCurrency": "TRY"
  }
});

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "İleri ve Güvenli Sürüş Eğitimi",
  "description": "Teorik Eğitim + Kapalı Alan Hakimiyet Eğitimi + Yol Eğitimi ile profesyonel sürüş teknikleri öğrenin.",
  "provider": {
    "@type": "Organization",
    "name": SITE_CONFIG.name,
    "url": SITE_URL
  },
  "courseCode": "ADV-MOTO-001",
  "educationalLevel": "Professional",
  "teaches": [
    "Motosiklet sürüş teknikleri",
    "Güvenli sürüş",
    "Defansif sürüş",
    "Kapalı alan hakimiyeti",
    "Yol eğitimi"
  ],
  "offers": {
    "@type": "Offer",
    "price": "18000",
    "priceCurrency": "TRY",
    "availability": "https://schema.org/InStock",
    "validFrom": new Date().toISOString()
  },
  "timeRequired": "PT10H",
  "coursePrerequisites": {
    "@type": "Course",
    "name": "Motosiklet Ehliyeti"
  }
};


