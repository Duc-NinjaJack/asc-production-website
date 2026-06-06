import React, { useState } from "react";
import Mail from "lucide-react/dist/esm/icons/mail";
import Loader2 from "lucide-react/dist/esm/icons/loader-2";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";

export default function ContactPage({ t, lang }) {
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const form = e.target;
        const data = {
            access_key: "03fdcd58-65b8-468c-a6a2-68f54c7b0da0",
            subject: "New Inquiry from ASC Website",
            from_name: "ASC Website Contact Form",
            name: form.name.value,
            email: form.email.value,
            organization: form.organization.value,
            message: form.message.value,
            website_boundary_confirmation: form.website_boundary_confirmation.checked
                ? "Confirmed - website boundary understood"
                : "Not confirmed",
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
            } else {
                setStatus("error");
                setErrorMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Network error. Please check your connection and try again.");
        }
    };

    return (
        <div className="bg-white">
            <SEO
                title={t.contact.title}
                description={t.contact.desc}
                url="/contact"
                lang={lang}
            />
            <PageHeader
                title={t.contact.title}
                subtitle={t.contact.desc}
                image="/assets/others/hcmc_skyline_1.png"
                parentSection={t.pageLabels?.websiteBoundary || "ASC Role"}
            />
            <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[minmax(0,1fr)_minmax(300px,0.85fr)] md:px-6 md:py-20">
                <div>
                    {status === "success" ? (
                        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 md:p-6 md:text-base">
                            {lang === "en"
                                ? "Thank you for your inquiry. We will review your message and respond via email."
                                : "Cảm ơn bạn. Chúng tôi sẽ phản hồi sớm."}
                        </div>
                    ) : (
                        <form
                            className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:p-6"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex items-center gap-2 text-slate-800">
                                <Mail className="h-5 w-5 shrink-0" />
                                <span className="text-sm font-semibold">{t.contact.title}</span>
                            </div>

                            {status === "error" && (
                                <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                                    {errorMessage}
                                </div>
                            )}

                            <input
                                name="name"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                                placeholder={lang === "en" ? "Name" : "Họ và tên"}
                                required
                                disabled={status === "loading"}
                            />
                            <input
                                name="email"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                                placeholder="Email"
                                type="email"
                                required
                                disabled={status === "loading"}
                            />
                            <input
                                name="organization"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                                placeholder={lang === "en" ? "Organization" : "Tổ chức"}
                                required
                                disabled={status === "loading"}
                            />
                            <textarea
                                name="message"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                                rows={5}
                                placeholder={lang === "en" ? "Message" : "Nội dung"}
                                disabled={status === "loading"}
                            />
                            <label className="flex gap-3 text-sm text-slate-700">
                                <input
                                    type="checkbox"
                                    name="website_boundary_confirmation"
                                    value="I understand ASC does not offer products, accept assets, or provide personalized investment advice through this website."
                                    required
                                    className="mt-0.5 h-5 w-5 shrink-0"
                                    disabled={status === "loading"}
                                />
                                <span className="leading-relaxed">
                                    {lang === "en"
                                        ? "I understand ASC does not offer products, accept assets, or provide personalized investment advice through this website."
                                        : "Tôi hiểu ASC không chào bán sản phẩm, không nhận tài sản và không cung cấp tư vấn đầu tư cá nhân thông qua website này."}
                                </span>
                            </label>
                            <button
                                type="submit"
                                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        {lang === "en" ? "Sending..." : "Đang gửi..."}
                                    </>
                                ) : (
                                    t.contact.primaryCta
                                )}
                            </button>
                        </form>
                    )}
                </div>
                <aside className="space-y-6 rounded-lg border border-slate-200 bg-slate-50 p-5 md:p-6">
                    <div>
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">{t.contact.emailLabel}</p>
                        <a href={t.contact.emailHref} className="break-all text-lg font-medium text-slate-900 transition-colors hover:text-[#D4AF37]">
                            {t.contact.email}
                        </a>
                    </div>
                    <div>
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">{t.contact.addressLabel}</p>
                        <div className="space-y-2">
                            {t.contact.addresses.map((addr, idx) => (
                                <p key={idx} className="text-base font-medium leading-snug text-slate-900">{addr}</p>
                            ))}
                        </div>
                    </div>
                    <p className="border-t border-slate-200 pt-5 text-sm italic leading-relaxed text-slate-500">{t.contact.note}</p>
                </aside>
            </div>
        </div>
    );
}
