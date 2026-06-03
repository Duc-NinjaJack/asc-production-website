import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, lang = 'en', image = '/banner.png', url, noindex = false }) {
    const siteUrl = 'https://www.aureussigmacapital.com';
    const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
    const pageTitle = title.includes('Aureus Sigma Capital') ? title : `${title} | Aureus Sigma Capital`;

    return (
        <Helmet>
            <html lang={lang} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
}
