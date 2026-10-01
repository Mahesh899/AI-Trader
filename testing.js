import React from 'react';
import { useLocation } from 'react-router-dom';

function SecureComponent() {
  const search = useLocation().search;
  const rawRedirect = new URLSearchParams(search).get('redirect') || '/home';

  // Fix: Validate protocol or enforce relative safe paths
  const getSafeUrl = (url) => {
    try {
      // Allow relative paths starting with a single slash
      if (url.startsWith('/') && !url.startsWith('//')) {
        return url;
      }
      const parsed = new URL(url);
      if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
        return parsed.toString();
      }
    } catch (e) {
      // Invalid URL format
    }
    return '/home'; // Safe fallback
  };

  const safeRedirectUrl = getSafeUrl(rawRedirect);

  return (
    <div>
      <a href={safeRedirectUrl}>Return Home</a>
    </div>
  );
}
