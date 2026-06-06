import React from "react";
import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle, image, parentSection }) {
    const BASE = import.meta.env.BASE_URL;
    // Handle both absolute paths starting with / and already-processed paths
    const imageSrc = image?.startsWith('/') ? `${BASE}${image.slice(1)}` : image;
    return (
        <div className="relative w-full overflow-hidden bg-slate-900">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={imageSrc}
                    alt={title}
                    className="h-full w-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/65 to-slate-900/40" />
            </div>

            {/* Content */}
            <div className="relative mx-auto flex min-h-[300px] max-w-6xl flex-col justify-center px-4 py-14 md:min-h-[360px] md:px-6 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl space-y-4 md:space-y-5"
                >
                    {parentSection && (
                        <div className="inline-flex items-center gap-2 rounded-md border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-3 py-1 backdrop-blur-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
                            <span className="text-[10px] font-bold uppercase text-[#D4AF37]">
                                {parentSection}
                            </span>
                        </div>
                    )}

                    <h1 className="text-3xl font-serif font-medium leading-tight text-white sm:text-4xl md:text-5xl">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
