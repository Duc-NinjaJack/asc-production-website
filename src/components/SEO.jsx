import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, lang = 'en', image = '/banner.png', url, noindex = false }) {
    const siteUrl = 'https://www.aureussigmacapital.com';
    const normalizedPath = url ? `/${url.replace(/^\/+/, '').replace(/\/?$/, '/')}` : '/';
    const fullUrl = `${siteUrl}${normalizedPath}`;
    const imageUrl = image?.startsWith('/') ? `${siteUrl}${image}` : image;
    const pageTitle = title.includes('Aureus Sigma Capital') ? title : `${title} | Aureus Sigma Capital`;

    useEffect(() => {
        const selectors = [
            'link[rel="canonical"]',
            'meta[name="description"]',
            'meta[property="og:url"]',
            'meta[property="og:title"]',
            'meta[property="og:description"]',
            'meta[property="og:image"]',
            'meta[name="twitter:title"]',
            'meta[name="twitter:description"]',
            'meta[name="twitter:image"]',
        ];

        const removeStaleHeadTags = () => {
            selectors.forEach((selector) => {
                const nodes = Array.from(document.head.querySelectorAll(selector));
                nodes.slice(0, -1).forEach((node) => node.remove());
            });
        };

        removeStaleHeadTags();
        const immediate = window.setTimeout(removeStaleHeadTags, 0);
        const late = window.setTimeout(removeStaleHeadTags, 150);

        return () => {
            window.clearTimeout(immediate);
            window.clearTimeout(late);
        };
    }, [pageTitle, description, fullUrl, imageUrl]);

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
            <meta property="og:site_name" content="Aureus Sigma Capital" />
            <meta property="og:locale" content={lang === 'vi' ? 'vi_VN' : 'en_US'} />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
        </Helmet>
    );
}
