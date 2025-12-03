export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';

// Page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    if (w.gtag) {
      w.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    }
  }
};

// Generic event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    const w = window as Window & { gtag?: (...args: unknown[]) => void };
    if (w.gtag) {
      w.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  }
};

// Business-specific tracking functions
export const trackContactForm = () => {
  event({
    action: 'contact_form_submit',
    category: 'engagement',
    label: 'contact_form',
  });
};

export const trackPhoneCall = () => {
  event({
    action: 'phone_call_click',
    category: 'engagement',
    label: 'phone_number',
  });
};

export const trackFormStart = (formName: string) => {
  event({
    action: 'form_start',
    category: 'contact',
    label: formName,
  });
};

export const trackFormComplete = (formName: string) => {
  event({
    action: 'form_complete',
    category: 'contact',
    label: formName,
  });
};

export const trackFormError = (formName: string, errorType: string) => {
  event({
    action: 'form_error',
    category: 'contact',
    label: `${formName} - ${errorType}`,
  });
};


