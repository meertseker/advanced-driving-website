export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ileri-surus-egitimi.example.com';
export const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '';

export const buildAbsoluteUrl = (path: string = '/') => {
  if (!path) return SITE_URL;
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

export const SITE_CONFIG = {
  name: 'İleri ve Güvenli Sürüş Eğitimi',
  description: 'Teorik eğitim, kapalı alan hakimiyet eğitimi ve yol eğitimi ile profesyonel ileri sürüş eğitimi. Güvenli ve deneyimli sürüş için başvurun.',
  phone: '+90 XXX XXX XX XX',
  whatsapp: '+90 5XX XXX XX XX', // WhatsApp numarası (5 ile başlamalı, boşluk olmadan)
  email: 'info@ileri-surus-egitimi.com',
  address: {
    street: 'Adres Bilgisi',
    city: 'İstanbul',
    country: 'TR',
    postalCode: 'XXXXX'
  },
  social: {
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: ''
  }
};


