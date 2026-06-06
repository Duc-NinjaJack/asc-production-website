import React from "react";

export default function BoundarySection({ data }) {
    return (
        <div className="space-y-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:p-7">
            <div>
                <h3 className="text-xl font-semibold text-slate-900">{data.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{data.intro}</p>
            </div>
            <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">{data.objectivesTitle}</h4>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    {data.objectives.map((item) => (
                        <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                            <div className="text-sm font-semibold text-slate-900">{item.title}</div>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">{data.discussionTitle}</h4>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{data.discussionIntro}</p>
                <ul className="mt-3 grid gap-2 text-sm text-slate-600 md:grid-cols-2">
                    {data.discussionBullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 rounded-lg bg-slate-50 p-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">{data.discussionNote}</p>
            </div>
            <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">{data.reportingTitle}</h4>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">{data.reportingBody}</p>
            </div>
        </div>
    );
}
