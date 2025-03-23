import React from 'react';
import { Helmet } from 'react-helmet';

function About() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Business Name",
    "url": "https://www.yourbusinesswebsite.com",
    "logo": "https://www.yourbusinesswebsite.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/yourbusiness",
      "https://www.instagram.com/yourbusiness"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-5555",
      "contactType": "Customer Service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business St.",
      "addressLocality": "Your City",
      "addressRegion": "Your State",
      "postalCode": "12345",
      "addressCountry": "US"
    }
  };

  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>
      <h1>About Us</h1>
      <p>Learn more about Business Name and our services.</p>
    </div>
  );
}

export default About;
