import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import { ICON_MAP } from "../data/content";

export default function Hero({ t }) {
    const BASE = import.meta.env.BASE_URL;
    return (
        <section className="relative overflow-hidden text-white bg-[#050c20]">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(120deg, rgba(5,10,25,0.92), rgba(5,10,25,0.75)), url(${BASE}assets/hero/hero-hcmc-dusk.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
                    backgroundSize: "140px 140px",
                }}
            />
            <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-24">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
                    <div className="space-y-7 md:space-y-9">
                        <div className="space-y-5">
                            <div className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1 backdrop-blur-sm">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
                                <span className="text-[10px] font-bold uppercase text-[#D4AF37]">Proprietary Systematic Trading</span>
                            </div>
                            <h1 className="max-w-4xl text-4xl font-serif font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
                                {t.hero.title}
                            </h1>
                            <p className="max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg lg:text-xl">
                                {t.hero.subtitle}
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
                            {t.hero.ctas.map((cta, idx) => (
                                <Link
                                    key={cta.to}
                                    to={cta.to}
                                    className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold transition-all duration-300 ${idx === 0
                                        ? "bg-[#D4AF37] text-slate-900 hover:bg-[#e5c57f]"
                                        : "border border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                                        }`}
                                >
                                    {cta.label} <ArrowRight className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                        {t.hero.stats && (
                            <div className="grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3 md:gap-5 md:pt-8">
                                {t.hero.stats.map((stat) => {
                                    const Icon = ICON_MAP[stat.icon] || ShieldCheck;
                                    return (
                                        <div key={stat.label} className="flex items-center gap-3 md:gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 md:h-12 md:w-12">
                                                <Icon className="h-4 w-4 md:h-5 md:w-5 text-[#D4AF37]" />
                                            </div>
                                            <div>
                                                <div className="mb-0.5 text-[10px] uppercase text-slate-400 md:mb-1">{stat.label}</div>
                                                <div className="text-base md:text-lg font-serif text-white">{stat.value}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-md md:p-7">
                        <h3 className="mb-4 text-xs font-bold uppercase text-[#D4AF37] md:mb-5">{t.hero.whyAsc}</h3>
                        <p className="mb-6 text-base leading-relaxed text-slate-100 md:mb-7 md:text-lg">
                            {t.hero.brief || t.hero.subtitle.split('.')[0] || "Proprietary trading for Vietnam."}
                        </p>
                        <div className="space-y-4">
                            {t.hero.highlights.map((item) => {
                                const Icon = ICON_MAP[item.icon] || BookOpen;
                                return (
                                    <div key={item.label} className="flex gap-3 md:gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 md:h-11 md:w-11">
                                            <Icon className="h-4 w-4 md:h-5 md:w-5 text-slate-200" />
                                        </div>
                                        <div>
                                            <div className="mb-0.5 font-serif text-base text-white md:mb-1 md:text-lg">{item.label}</div>
                                            <p className="text-sm text-slate-300 leading-relaxed">{item.body}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
