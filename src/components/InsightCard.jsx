import React from "react";
import { Link } from "react-router-dom";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import FileText from "lucide-react/dist/esm/icons/file-text";
import { INSIGHT_ICONS } from "../data/content";

function getCategoryTheme(category = "") {
    const normalized = category.toLowerCase();
    if (normalized.includes("news") || normalized.includes("tin")) {
        return { tag: "bg-blue-600/90 text-white", accent: "text-blue-200" };
    }
    return { tag: "bg-amber-400/90 text-slate-900", accent: "text-amber-600" };
}

export default function InsightCard({ item, readMoreLabel, comingSoonLabel = "Coming soon" }) {
    const BASE = import.meta.env.BASE_URL;
    const Icon = INSIGHT_ICONS[item.icon] || FileText;
    const theme = getCategoryTheme(item.category);
    const isComingSoon = Boolean(item.comingSoon);
    const cardClasses =
        "group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-premium";
    const Wrapper = isComingSoon ? "div" : Link;
    const wrapperProps = isComingSoon
        ? { className: cardClasses, "aria-disabled": true }
        : { to: `/insights/${item.slug}`, className: cardClasses };
    const actionLabel = isComingSoon ? comingSoonLabel : readMoreLabel;
    const imageSrc = item.image?.startsWith("/") ? `${BASE}${item.image.slice(1)}` : item.image;
    return (
        <Wrapper {...wrapperProps}>
            <div className="relative h-44 overflow-hidden md:h-56">
                <img src={imageSrc} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500" />
                <span className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase shadow-sm md:left-4 md:top-4 md:px-3 md:py-1.5 ${theme.tag}`}>{item.category}</span>
                {isComingSoon && (
                    <span className="absolute right-3 top-3 rounded-md bg-slate-900/80 px-2.5 py-1 text-[10px] font-bold uppercase text-white shadow-sm md:right-4 md:top-4 md:px-3 md:py-1.5">
                        {comingSoonLabel}
                    </span>
                )}
            </div>
            <div className="flex flex-1 flex-col gap-3 p-4 md:gap-4 md:p-6">
                <div className={`flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest font-semibold ${theme.accent}`}>
                    <Icon className="h-3 w-3 md:h-3.5 md:w-3.5" />
                    <span>{item.category}</span>
                </div>
                <h3 className="text-lg md:text-xl font-serif font-semibold text-slate-900 group-hover:text-[#D4AF37] transition-colors leading-snug">{item.title}</h3>
                <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">{item.summary}</p>
                <div className="inline-flex items-center gap-2 pt-2 text-[10px] font-bold uppercase text-slate-900 transition-all group-hover:text-[#b78b45] md:pt-4 md:text-xs">
                    {actionLabel}
                    {!isComingSoon && <ArrowRight className="h-3 w-3 md:h-3.5 md:w-3.5" />}
                </div>
            </div>
        </Wrapper>
    );
}
