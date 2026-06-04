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
                url="/solutions"
                lang={lang}
            />
            <PageHeader
                title={t.solutions?.title || "Partnerships and boundaries"}
                subtitle={t.solutions?.intro || "How ASC separates own-capital trading, partner collaboration and regulated client-facing obligations."}
                image="/assets/others/investment_office_modern_2.png"
                parentSection={t.pageLabels?.websiteBoundary || "Website Boundary"}
            />
            <div className="mx-auto max-w-6xl px-6 pb-24">
                {t.boundaries && <BoundarySection data={t.boundaries} />}
            </div>
        </div>
    );
}
