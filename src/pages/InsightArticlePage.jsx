import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import SEO from "../components/SEO";
import { INSIGHTS_CONTENT } from "../data/content";

const prefixBase = (src) => {
    if (!src) return src;
    const BASE = import.meta.env.BASE_URL;
    return src.startsWith("/") ? `${BASE}${src.slice(1)}` : src;
};

export default function InsightArticlePage({ lang, t }) {
    const { slug } = useParams();
    const article = INSIGHTS_CONTENT[slug]?.[lang];
    if (!article) {
        return <Navigate to="/insights" replace />;
    }
    const meta = t.insights.items.find((item) => item.slug === slug);
    if (meta?.comingSoon) {
        return <Navigate to="/insights" replace />;
    }
    const breadcrumb = meta ? `${t.insights.sectionTitle} • ${meta.category}` : t.insights.sectionTitle;
    const heroImage = article.heroImage;
    const gallery = article.gallery || [];
    return (
        <div className="bg-white py-14 md:py-20">
            <SEO
                title={article.title}
                description={article.body?.[0] || article.title}
                url={`/insights/${slug}`}
                image={heroImage ? article.heroImage.src : undefined}
                lang={lang}
            />
            <article className="mx-auto max-w-4xl space-y-5 px-4 md:px-6">
                <span className="text-xs uppercase tracking-wide text-slate-500">{breadcrumb}</span>
                <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">{article.title}</h1>
                {article.dateLine && <p className="text-sm text-slate-500">{article.dateLine}</p>}
                {heroImage && (
                    <figure className="space-y-2 pt-3">
                        <img
                            src={prefixBase(heroImage.src)}
                            alt={heroImage.alt || article.title}
                            className="w-full rounded-lg border border-slate-200 shadow-sm"
                            loading="lazy"
                        />
                        {heroImage.caption && <figcaption className="text-xs text-slate-500">{heroImage.caption}</figcaption>}
                    </figure>
                )}
                <div className="max-w-3xl space-y-4 text-base leading-relaxed text-slate-700">
                    {article.body.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
                {gallery.length > 0 && (
                    <div className="grid gap-6 pt-2 md:grid-cols-2">
                        {gallery.map((image, idx) => (
                            <figure key={`${image.src}-${idx}`} className="space-y-2">
                                <img
                                    src={prefixBase(image.src)}
                                    alt={image.alt || article.title}
                                    className="w-full rounded-lg border border-slate-200 shadow-sm"
                                    loading="lazy"
                                />
                                {image.caption && <figcaption className="text-xs text-slate-500">{image.caption}</figcaption>}
                            </figure>
                        ))}
                    </div>
                )}
                <Link to="/insights" className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:border-[#D4AF37]">
                    ← {t.insights.backToInsights}
                </Link>
            </article>
        </div>
    );
}
