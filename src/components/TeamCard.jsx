import React from "react";

export default function TeamCard({ name, title, bio, photo }) {
    // If title is not provided, try to extract it from name (legacy support)
    let fullName = name;
    let role = title;

    if (!role && name.includes(" — ")) {
        const parts = name.split(" — ");
        fullName = parts[0];
        role = parts[1];
    }

    return (
        <div className="flex flex-col items-center gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-start md:gap-8 md:p-7">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#f4f6f8] shadow-inner md:h-36 md:w-36">
                <img src={photo} alt={fullName} className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
            <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-serif font-semibold text-slate-900 md:text-2xl">{fullName}</h3>
                {role && <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#b78b45] mt-1 md:mt-2 mb-3 md:mb-4">{role}</p>}
                <div className="space-y-2 md:space-y-3">
                    {Array.isArray(bio) ? (
                        bio.map((paragraph, idx) => (
                            <p key={idx} className="text-sm md:text-base text-slate-600 leading-relaxed">
                                {paragraph}
                            </p>
                        ))
                    ) : (
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed">{bio}</p>
                    )}
                </div>
            </div>
        </div>
    );
}
