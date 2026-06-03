import React from "react";
import Printer from "lucide-react/dist/esm/icons/printer";
import Activity from "lucide-react/dist/esm/icons/activity";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import Database from "lucide-react/dist/esm/icons/database";
import GitBranch from "lucide-react/dist/esm/icons/git-branch";

const REVIEW_ITEMS = [
    {
        label: "Scope",
        value: "Research documentation sample",
        note: "No product terms or public offering.",
        icon: GitBranch,
    },
    {
        label: "Review",
        value: "Proprietary model review",
        note: "Rules, data and implementation limits.",
        icon: Activity,
    },
    {
        label: "Risk",
        value: "Boundary controls",
        note: "Loss, liquidity and model-drift checks.",
        icon: ShieldCheck,
    },
    {
        label: "Evidence",
        value: "Source-linked records",
        note: "Inputs, assumptions and review owner recorded.",
        icon: Database,
    },
];

const REVIEW_LOG = [
    ["Data inputs", "Market, company, intraday and operating data sources are listed."],
    ["Decision rules", "Entry, exit, sizing, pause and review rules are documented."],
    ["Execution limits", "Liquidity, timing, cost and reconciliation limits are recorded."],
    ["Risk checks", "Drawdown, concentration, exposure and model-drift checks are reviewed."],
    ["Partner boundary", "Licensed partner duties are separated when regulated work is involved."],
];

const MetricCard = ({ label, value, note, icon: Icon }) => (
    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</span>
            {Icon && <Icon className="h-4 w-4 text-[#D4AF37]" />}
        </div>
        <div className="text-lg font-serif font-medium text-slate-900">{value}</div>
        <div className="text-xs text-slate-500 mt-1">{note}</div>
    </div>
);

export default function TearsheetPage() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen bg-slate-100 py-12 font-sans">
            <div className="fixed top-4 right-4 z-50 flex gap-2 print:hidden">
                <button
                    onClick={handlePrint}
                    className="bg-slate-900 text-white px-4 py-2 rounded-md shadow-lg flex items-center gap-2 hover:bg-slate-800 transition-colors"
                >
                    <Printer className="h-4 w-4" /> Print PDF
                </button>
            </div>

            <div className="mx-auto bg-white shadow-2xl print:shadow-none w-[210mm] min-h-[297mm] p-[15mm] relative">
                <header className="border-b-2 border-[#D4AF37] pb-6 mb-8 flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-slate-900 mb-1">ASC Research Documentation Sample</h1>
                        <p className="text-slate-500 text-sm">Internal review format - no public product offer</p>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900 tracking-tight">AUREUS SIGMA</div>
                        <div className="text-xs text-[#D4AF37] font-medium tracking-widest uppercase">Capital</div>
                    </div>
                </header>

                <div className="grid grid-cols-3 gap-8">
                    <div className="col-span-2 space-y-8">
                        <section>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 border-b border-slate-200 pb-2">Review Note</h3>
                            <p className="text-sm text-slate-600 leading-relaxed text-justify">
                                This sample shows how ASC can document a proprietary research or trading review. It records the review scope,
                                data sources, decision rules, execution limits, risk controls and partner boundaries. It does not present public
                                product terms, accept assets, provide personal advice or promise investment results.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 border-b border-slate-200 pb-2">Review Checklist</h3>
                            <div className="overflow-hidden rounded-lg border border-slate-200">
                                <table className="w-full text-xs">
                                    <thead>
                                        <tr className="bg-slate-50 text-slate-500 border-b border-slate-200">
                                            <th className="py-2 px-3 text-left font-semibold">Area</th>
                                            <th className="py-2 px-3 text-left font-semibold">Evidence required</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {REVIEW_LOG.map(([area, evidence]) => (
                                            <tr key={area}>
                                                <td className="py-3 px-3 font-medium text-slate-900">{area}</td>
                                                <td className="py-3 px-3 text-slate-600">{evidence}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 border-b border-slate-200 pb-2">Decision Boundary</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                ASC may use this type of documentation to review proprietary research. Where regulated products or client-facing
                                work are involved, the relevant licensed partner remains responsible for onboarding, suitability, implementation,
                                execution, reporting and legal documents.
                            </p>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <section className="space-y-3">
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 border-b border-slate-200 pb-2">Control Summary</h3>
                            {REVIEW_ITEMS.map((item) => (
                                <MetricCard
                                    key={item.label}
                                    label={item.label}
                                    value={item.value}
                                    note={item.note}
                                    icon={item.icon}
                                />
                            ))}
                        </section>

                        <section>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 border-b border-slate-200 pb-2">Not Included</h3>
                            <ul className="text-xs space-y-2 text-slate-600 list-disc ml-4">
                                <li>No public product offer.</li>
                                <li>No asset acceptance through the website.</li>
                                <li>No personalized investment advice.</li>
                                <li>No promise of future results.</li>
                            </ul>
                        </section>
                    </div>
                </div>

                <footer className="absolute bottom-[15mm] left-[15mm] right-[15mm] border-t border-slate-200 pt-4">
                    <div className="flex justify-between items-center text-[10px] text-slate-400">
                        <p>© 2025 Aureus Sigma Capital. All rights reserved.</p>
                        <p>Informational sample only</p>
                    </div>
                    <p className="mt-2 text-[9px] text-slate-300 text-justify leading-tight">
                        Disclaimer: this sample is for informational purposes only and does not constitute an offer to sell or a solicitation
                        of an offer to buy any security, fund interest, investment product or financial instrument. ASC does not offer
                        investment products directly to the public through this website, does not accept client assets through this website,
                        and does not provide personalized investment advice through this website. All investment and trading activity involves
                        risk, including possible loss of capital.
                    </p>
                </footer>
            </div>
        </div>
    );
}
