import React from "react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import BoundarySection from "../components/BoundarySection";

export default function SolutionsPage({ t, lang }) {
    return (
        <div className="bg-white">
            <SEO
                title={t.solutions?.title}
                description={t.solutions?.intro}
                url="/our-role"
                lang={lang}
            />
            <PageHeader
                title={t.solutions?.title || "Our Role"}
                subtitle={t.solutions?.intro || "How ASC works, collaborates and communicates through this website."}
                image="/assets/others/investment_office_modern_2.png"
                parentSection={t.pageLabels?.websiteBoundary || "ASC Role"}
            />
            <div className="mx-auto max-w-6xl px-6 pb-24">
                {t.boundaries && <BoundarySection data={t.boundaries} />}
            </div>
        </div>
    );
}
