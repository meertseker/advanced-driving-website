'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { GA_TRACKING_ID, pageview } from '../lib/analytics';

export default function AnalyticsRouteTracker() {
  const pathname = usePathname();

  // Track route changes
  useEffect(() => {
    if (!pathname || !GA_TRACKING_ID) return;
    pageview(pathname);
  }, [pathname]);

  return null;
}

