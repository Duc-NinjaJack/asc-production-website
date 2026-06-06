import React from "react";

export default function SectionTitle({ icon: Icon, title, subtitle }) {
    return (
        <div className="mb-6 max-w-3xl md:mb-8">
            <div className="flex items-start gap-3">
                {Icon && (
                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 shadow-sm">
                        <Icon className="h-5 w-5" />
                    </span>
                )}
                <h2 className="text-2xl font-semibold leading-tight text-slate-900 heading-serif md:text-3xl">{title}</h2>
            </div>
            {subtitle && <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{subtitle}</p>}
        </div>
    );
}
