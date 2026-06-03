import React from "react";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import InsightsPreview from "../components/InsightsPreview";
import { ICON_MAP } from "../data/content";

function SystemGrid({ items = [] }) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
                const Icon = ICON_MAP[item.icon] || BookOpen;
                return (
                    <div key={item.title} className="border border-slate-200 rounded-lg bg-white p-5 md:p-6 shadow-sm hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-300">
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <h3 className="text-base md:text-lg font-serif font-semibold text-slate-900">{item.title}</h3>
                            <Icon className="h-5 w-5 text-[#D4AF37] shrink-0" />
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default function HomePage({ t, lang }) {
    return (
        <div>
            <SEO
                title="Aureus Sigma Capital | Proprietary Systematic Trading"
                description="Aureus Sigma Capital is a proprietary systematic trading firm focused on Vietnam’s capital markets."
                lang={lang}
            />
            <Hero t={t} />
            {Array.isArray(t.whatWeDo.howAscWorksItems) && (
                <section className="py-12 md:py-16 bg-slate-50 border-y border-slate-100">
                    <div className="mx-auto max-w-6xl px-4 space-y-8">
                        <SectionTitle icon={BookOpen} title={t.whatWeDo.howAscWorksTitle} subtitle={t.whatWeDo.howAscWorksIntro} />
                        <SystemGrid items={t.whatWeDo.howAscWorksItems} />
                    </div>
                </section>
            )}
            <InsightsPreview t={t} />
        </div>
    );
}
