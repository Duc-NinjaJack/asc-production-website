import React from "react";
import SEO from "../components/SEO";
import FileText from "lucide-react/dist/esm/icons/file-text";
import PageHeader from "../components/PageHeader";
import InsightCard from "../components/InsightCard";

export default function InsightsPage({ t, lang }) {
    const [featured, ...otherItems] = t.insights.items;
    return (
        <div className="bg-white">
            <SEO
                title={t.insights.sectionTitle}
                description={t.insights.intro}
                url="/insights"
                lang={lang}
            />
            <PageHeader
                title={t.insights.sectionTitle}
                subtitle={t.insights.intro}
                image="/assets/others/office_minimal_modern_1.png"
                parentSection={t.pageLabels?.research || "Research"}
            />
            <div className="mx-auto max-w-6xl space-y-6 px-4 py-14 md:space-y-8 md:px-6 md:py-20">
                {featured && (
                    <div className="md:max-w-3xl">
                        <InsightCard
                            item={featured}
                            readMoreLabel={t.insights.readMore}
                            comingSoonLabel={t.insights.comingSoonLabel}
                        />
                    </div>
                )}
                <div className="grid gap-4 md:gap-6 md:grid-cols-2">
                    {otherItems.map((item) => (
                        <InsightCard
                            key={item.slug}
                            item={item}
                            readMoreLabel={t.insights.readMore}
                            comingSoonLabel={t.insights.comingSoonLabel}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
