import React from 'react';
import { useLocation } from 'react-router-dom';

function VulnerableComponent() {
  const search = useLocation().search;
  const redirectUrl = new URLSearchParams(search).get('redirect') || '/home';

  // Vulnerability: Direct untrusted input used as an href
  return (
    <div>
      <a href={redirectUrl}>Return Home</a>
    </div>
  );
}
