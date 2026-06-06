import React from "react";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import TeamCard from "../components/TeamCard";
import { TEAM_PHOTOS, ICON_MAP } from "../data/content";

export default function AboutPage({ t, lang }) {
    return (
        <div className="bg-white">
            <SEO
                title={t.about.title}
                description={t.about.intro}
                url="/about"
                lang={lang}
            />
            <PageHeader
                title={t.about.title}
                subtitle={t.about.intro}
                image="/assets/about/office-background.jpg"
                parentSection={t.pageLabels?.whoWeAre || "Who We Are"}
            />
            <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
                <div className="space-y-6 md:space-y-10">
                    <div className="grid gap-6 md:gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
                        <div className="max-w-3xl space-y-3 text-slate-700 leading-relaxed md:space-y-4">
                            {Array.isArray(t.about.details) &&
                                t.about.details.map((paragraph, idx) => (
                                    <p key={idx} className={idx === 0 ? "text-base md:text-lg font-medium text-slate-900" : "text-sm md:text-base"}>
                                        {paragraph}
                                    </p>
                                ))}
                        </div>
                        {t.about.factSheet && (
                            <div className="rounded-lg border border-slate-100 border-t-4 border-t-[#D4AF37] bg-white p-4 shadow-sm md:p-6 lg:sticky lg:top-28">
                                <h3 className="text-xs md:text-sm font-semibold text-slate-900 uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6">
                                    {t.about.factSheet.title}
                                </h3>
                                <dl className="space-y-3 md:space-y-4 text-sm">
                                    {t.about.factSheet.items.map((item) => (
                                        <div key={item.label} className="flex justify-between gap-3 md:gap-4 border-b border-slate-100 pb-2 md:pb-3 last:border-0">
                                            <dt className="text-slate-500 uppercase tracking-wide text-[10px] md:text-xs font-medium">{item.label}</dt>
                                            <dd className="font-semibold text-slate-900 text-right text-sm">{item.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        )}
                    </div>

                    {Array.isArray(t.about.highlights) && (
                        <div className="grid gap-3 md:gap-4 sm:grid-cols-2 md:grid-cols-3">
                            {t.about.highlights.map((item, idx) => {
                                const Icon = ICON_MAP[item.icon] || BookOpen;
                                return (
                                    <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4 transition-colors duration-300 hover:border-[#D4AF37]/50 md:p-5">
                                        <div className="flex items-center justify-between mb-2 md:mb-3">
                                            <div className="text-[10px] md:text-xs uppercase tracking-wide text-[#b78b45] font-bold">0{idx + 1}</div>
                                            <Icon className="h-4 w-4 md:h-5 md:w-5 text-slate-400 group-hover:text-[#D4AF37] transition-colors" />
                                        </div>
                                        <div className="text-sm md:text-base font-serif font-semibold text-slate-900">{item.label}</div>
                                        <p className="mt-1 text-xs md:text-sm text-slate-600 leading-relaxed">{item.body}</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Leadership Section */}
                {Array.isArray(t.about.bioDetails) && t.about.bioDetails.length > 0 && (
                    <div className="mt-12 space-y-6 border-t border-slate-100 pt-10 md:mt-16 md:space-y-8 md:pt-12">
                        <h3 className="text-xl font-serif font-semibold text-slate-900 md:text-2xl">{t.about.teamTitle || "Leadership"}</h3>
                        <div className="space-y-4 md:space-y-6">
                            {t.about.bioDetails.map((bio, idx) => {
                                const photo = idx === 0 ? TEAM_PHOTOS.founder : TEAM_PHOTOS.founder;
                                return (
                                    <TeamCard
                                        key={bio.name}
                                        name={bio.name}
                                        title={bio.title}
                                        bio={bio.body}
                                        photo={photo}
                                    />
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
