import { SITE_CONFIG, SITE_URL } from './config';

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE_CONFIG.name,
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "description": SITE_CONFIG.description,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": SITE_CONFIG.phone,
    "contactType": "Customer Service",
    "email": SITE_CONFIG.email,
    "areaServed": "TR",
    "availableLanguage": "Turkish"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": SITE_CONFIG.address.street,
    "addressLocality": SITE_CONFIG.address.city,
    "postalCode": SITE_CONFIG.address.postalCode,
    "addressCountry": SITE_CONFIG.address.country
  },
  "sameAs": [
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.twitter,
    SITE_CONFIG.social.linkedin,
    SITE_CONFIG.social.instagram
  ].filter(Boolean)
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SITE_CONFIG.name,
  "url": SITE_URL,
  "description": SITE_CONFIG.description,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

