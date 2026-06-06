import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
import { LOGO_SRC, NAV_LINKS } from "../data/content";

export default function Layout({ t, lang, setLang, children }) {
    const location = useLocation();
    const [cookieDismissed, setCookieDismissed] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('cookieDismissed') === 'true';
        }
        return false;
    });
    const [logoOk, setLogoOk] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    return (
        <div className="min-h-screen bg-[#f7f5f2] flex flex-col font-sans text-slate-900 overflow-x-hidden">
            {/* Top Bar */}
            <div className="w-full bg-slate-900 text-slate-100">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs">
                    <div className="flex min-w-0 items-center gap-2">
                        <ShieldCheck className="h-4 w-4 shrink-0" />
                        <span className="hidden opacity-90 sm:inline">{t.site.tagline}</span>
                        <span className="max-w-[68vw] text-[10px] leading-snug opacity-90 sm:hidden">{t.site.tagline}</span>
                    </div>
                    <div className="flex shrink-0 items-center gap-1 rounded-md bg-white/5 p-0.5">
                        <button
                            className={`cursor-pointer rounded px-2 py-1 text-xs ${lang === "en" ? "bg-white text-slate-900" : "hover:bg-slate-800"}`}
                            onClick={() => setLang("en")}
                        >
                            EN
                        </button>
                        <button
                            className={`cursor-pointer rounded px-2 py-1 text-xs ${lang === "vi" ? "bg-white text-slate-900" : "hover:bg-slate-800"}`}
                            onClick={() => setLang("vi")}
                        >
                            VI
                        </button>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur transition-all duration-300">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[72px] md:px-6">
                    <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
                        {logoOk ? (
                            <img
                                src={LOGO_SRC}
                                alt="Aureus Sigma Capital"
                                className="h-8 md:h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                                onError={() => setLogoOk(false)}
                            />
                        ) : (
                            <div className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B78B45] flex items-center justify-center font-bold text-slate-900 shadow-lg text-sm">
                                ASC
                            </div>
                        )}
                        <div className="hidden md:block">
                            <div className="font-serif font-semibold text-slate-900 text-lg tracking-tight">Aureus Sigma Capital</div>
                            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Proprietary Systematic Trading</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-1 text-sm font-medium text-slate-600 md:flex">
                        {NAV_LINKS.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`rounded-md px-3 py-2 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 whitespace-nowrap ${location.pathname === item.path
                                    ? "bg-slate-100 text-slate-900"
                                    : "text-slate-600"
                                    }`}
                            >
                                {t.nav[item.labelKey]}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6 text-slate-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-slate-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Button - Moved overlay and menu to root level */}
            </header>

            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300">
                <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm leading-relaxed md:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] md:gap-10 md:px-6 md:py-14">
                    <div className="space-y-4">
                        <p className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">Disclaimer</p>
                        <p className="max-w-3xl text-sm leading-relaxed text-slate-400">
                            {t.legal.body}
                        </p>
                    </div>
                    <div className="space-y-4 text-sm">
                        <div className="font-serif text-xl text-slate-100 tracking-tight">Aureus Sigma Capital</div>
                        <div className="flex flex-col gap-3 text-slate-400">
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">{t.contact.emailLabel}</p>
                                <a href={t.contact.emailHref} className="hover:text-[#D4AF37] transition-colors break-all">{t.contact.email}</a>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">{t.contact.addressLabel}</p>
                                <div className="space-y-1">
                                    {t.contact.addresses.map((addr, idx) => (
                                        <p key={idx}>{addr}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-slate-800 py-4 md:py-6 text-center text-xs text-slate-500 tracking-wide px-4">{t.legal.rights}</div>
            </footer>

            {/* Mobile Navigation Overlay - Moved to root for full page coverage */}
            <div
                className={`fixed inset-0 mobile-overlay transition-opacity duration-300 md:hidden ${mobileMenuOpen ? "opacity-100 z-[60]" : "opacity-0 pointer-events-none z-[-1]"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Navigation Menu - Moved to left side */}
            <div
                id="mobile-nav-menu"
                className={`fixed top-0 left-0 h-full w-72 max-w-[85vw] shadow-2xl transform transition-transform duration-300 ease-out z-[70] md:hidden ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                style={{
                    background: '#ffffff',
                    backgroundColor: '#ffffff',
                }}
            >
                <nav
                    className="h-full flex flex-col"
                    style={{
                        background: '#ffffff',
                        backgroundColor: '#ffffff',
                    }}
                >
                    <div
                        className="flex items-center justify-between p-4 border-b border-slate-100"
                        style={{ background: '#ffffff' }}
                    >
                        <span className="font-serif font-semibold text-slate-900">Menu</span>
                        <button
                            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="h-5 w-5 text-slate-700" />
                        </button>
                    </div>
                    <div
                        className="flex flex-col py-4 flex-1"
                        style={{ background: '#ffffff' }}
                    >
                        {NAV_LINKS.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`px-6 py-4 text-base font-medium transition-all duration-200 flex items-center gap-3 ${location.pathname === item.path
                                    ? "bg-slate-50 text-slate-900 border-l-4 border-[#D4AF37]"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent"
                                    }`}
                            >
                                {t.nav[item.labelKey]}
                            </Link>
                        ))}
                    </div>
                    <div className="p-4 border-t border-slate-100" style={{ background: '#f8fafc' }}>
                        <div className="text-xs text-slate-500 text-center">
                            © 2025 Aureus Sigma Capital
                        </div>
                    </div>
                </nav>
            </div>

            {/* Cookie Banner */}
            {!cookieDismissed && (
                <div className="fixed bottom-0 md:bottom-4 inset-x-0 px-0 md:px-4 z-40">
                    <div className="mx-auto max-w-3xl bg-white border-t md:border border-slate-200 md:rounded-xl shadow-lg flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 py-3">
                        <p className="text-xs text-slate-600 flex-1">{t.cookie.text}</p>
                        <button
                            className="px-4 py-2 text-xs rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors shrink-0 w-full sm:w-auto"
                            onClick={() => {
                                setCookieDismissed(true);
                                localStorage.setItem('cookieDismissed', 'true');
                            }}
                        >
                            {t.cookie.accept}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
