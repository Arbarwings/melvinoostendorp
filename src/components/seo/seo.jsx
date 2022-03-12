import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {
  url,
  defaultDescription,
  defaultTitle,
  socialLinks,
  author,
  foundingDate,
  logo,
  companyName,
} from 'data/config';

function SEO({ title = defaultTitle, description = defaultDescription, location = '' }) {
  const structuredDataOrganization = `{ 
          "@context": "http://schema.org",
          "@type": "Organization",
          "legalName": "${companyName}",
          "url": "${url}",
          "logo": "${logo}",
          "foundingDate": "${foundingDate}",
          "founders": [{
              "@type": "Person",
              "name": "${author}"
          }],
          "sameAs": [
              "${socialLinks.linkedin}",
              "${socialLinks.instagram}",
              "${socialLinks.github}"
          ]
        }`;

  return (
    <Helmet>
      <meta name="description" content={description} />
      {/* <meta name="image" content={Thumbnail} /> */}
      <meta property="og:url" content={`${url}${location}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={logo} />
      {/* <meta property="og:image" content={Thumbnail} /> */}
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{title}</title>
      <html lang="en" dir="ltr" />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
};

export default SEO;
