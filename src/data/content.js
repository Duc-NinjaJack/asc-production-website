import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right";
import Users from "lucide-react/dist/esm/icons/users";
import Mail from "lucide-react/dist/esm/icons/mail";
import FileText from "lucide-react/dist/esm/icons/file-text";
import BookOpen from "lucide-react/dist/esm/icons/book-open";
import ExternalLink from "lucide-react/dist/esm/icons/external-link";
import Handshake from "lucide-react/dist/esm/icons/handshake";
import Compass from "lucide-react/dist/esm/icons/compass";
import Shield from "lucide-react/dist/esm/icons/shield";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import BarChart3 from "lucide-react/dist/esm/icons/bar-chart-3";
import Landmark from "lucide-react/dist/esm/icons/landmark";
import Clock from "lucide-react/dist/esm/icons/clock";
import Database from "lucide-react/dist/esm/icons/database";
import Sliders from "lucide-react/dist/esm/icons/sliders";
import Activity from "lucide-react/dist/esm/icons/activity";
import Network from "lucide-react/dist/esm/icons/network";
import Building2 from "lucide-react/dist/esm/icons/building-2";

import fidesEnMd from "../content/insights/fides-en.md?raw";
import fidesViMd from "../content/insights/fides-vi.md?raw";
import fidesPilotEnMd from "../content/insights/fides-pilot-en.md?raw";
import fidesPilotViMd from "../content/insights/fides-pilot-vi.md?raw";
import rulesEnMd from "../content/insights/rules-en.md?raw";
import rulesViMd from "../content/insights/rules-vi.md?raw";
import lossesEnMd from "../content/insights/losses-en.md?raw";
import lossesViMd from "../content/insights/losses-vi.md?raw";

const BASE = import.meta.env.BASE_URL;
export const LOGO_SRC = `${BASE}asc-logo-transparent.png`;
export const TEAM_PHOTOS = {
    founder: `${BASE}team-duc.jpg`,
};

export const BRAND = {
    navy: "#0F172A",
    gold: "#D4AF37",
    slate: "#334155",
};

export const ICON_MAP = {
    handshake: Handshake,
    compass: Compass,
    shield: Shield,
    "shield-check": ShieldCheck,
    clock: Clock,
    map: MapPin,
    rules: BookOpen,
    skyline: Landmark,
    process: BarChart3,
    database: Database,
    sliders: Sliders,
    activity: Activity,
    network: Network,
    building: Building2,
};

export const INSIGHT_ICONS = {
    handshake: Handshake,
    compass: Compass,
    shield: Shield,
};

const parseMarkdown = (md) =>
    (md || "")
        .trim()
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim());

export const i18n = {
    en: {
        nav: {
            home: "Home",
            whatWeDo: "What We Do",
            solutions: "Boundaries",
            partnerships: "Partnerships",
            insights: "Insights",
            about: "About",
            contact: "Contact",
        },
        hero: {
            whyAsc: "Why ASC",
            title: "Proprietary systematic trading for Vietnam’s capital markets.",
            subtitle:
                "Aureus Sigma Capital builds research, data, execution, portfolio-construction and risk-control infrastructure to trade and compound capital with discipline.",
            ctas: [
                { label: "Explore what ASC builds", to: "/what-we-do" },
                { label: "Partnerships and boundaries", to: "/partnerships" },
            ],
            stats: [
                { label: "Founded", value: "2025", icon: "clock" },
                { label: "Market", value: "Vietnam capital markets", icon: "map" },
                { label: "Role", value: "Proprietary trading", icon: "shield-check" },
            ],
            highlights: [
                { label: "Proprietary capital discipline", body: "ASC builds infrastructure to trade and compound capital with discipline, not to chase market narratives.", icon: "rules" },
                { label: "Research and data infrastructure", body: "Rules-based research across Vietnamese equities, VN30F futures, fundamentals, factors and market structure.", icon: "database" },
                { label: "Execution-aware design", body: "Models are designed around liquidity, costs, timing, broker workflow and real implementation constraints.", icon: "activity" },
                { label: "Risk governance", body: "Drawdown limits, model monitoring, post-trade review and kill rules are part of the system, not an afterthought.", icon: "shield" },
            ],
        },
        whatWeDo: {
            sectionTitle: "How ASC’s systems are designed",
            intro:
                "ASC designs proprietary research, trading, execution, portfolio-construction and risk-control systems for Vietnam’s capital markets. The work turns evidence into repeatable decisions, real execution workflows and reviewable risk controls.",
            capabilitiesTitle: "What ASC builds",
            capabilitiesIntro:
                "ASC is not a stock-tip platform, signal seller or product distributor. We build the systems behind disciplined proprietary trading and investment decisions.",
            capabilities: [
                {
                    title: "Research engines",
                    body: "Factor, fundamental, futures, and market-structure models tested against real implementation constraints.",
                    icon: "rules",
                },
                {
                    title: "Trading systems",
                    body: "Rules that connect model decisions to timing, execution windows, market liquidity, broker workflow and post-trade review.",
                    icon: "sliders",
                },
                {
                    title: "Portfolio construction",
                    body: "Position sizing, rebalancing, exposure control, liquidity, concentration and drawdown-aware portfolio design.",
                    icon: "activity",
                },
                {
                    title: "Execution infrastructure",
                    body: "Implementation logic designed around costs, timing, reconciliation, real trading constraints and operational review.",
                    icon: "process",
                },
                {
                    title: "Risk governance",
                    body: "Model validation, degradation monitoring, kill rules and boundaries between ASC systems and regulated partner obligations.",
                    icon: "shield-check",
                },
                {
                    title: "Evidence and model lifecycle",
                    body: "Clean market, fundamental, intraday and operating data used to support research, monitoring, post-trade review and model updates.",
                    icon: "database",
                },
            ],
            strategyFamiliesTitle: "Strategy families",
            strategyFamiliesIntro:
                "The ASC platform is broader than one factor model or one asset class. Each strategy family must earn its place through evidence, execution realism, risk control and ongoing monitoring.",
            strategyFamilies: [
                {
                    title: "VN30F / Systematic trading systems",
                    body: "Rules-based futures systems designed around official model decisions, execution windows, broker controls, and post-trade reconciliation.",
                    icon: "activity",
                },
                {
                    title: "Systematic equity research",
                    body: "Vietnam equity research using valuation, quality, momentum, liquidity and portfolio-construction discipline.",
                    icon: "skyline",
                },
                {
                    title: "Fundamental / STCV frameworks",
                    body: "Data-driven fundamental ranking and valuation frameworks for listed Vietnamese companies.",
                    icon: "building",
                },
                {
                    title: "Market structure and risk overlays",
                    body: "Regime, liquidity, correlation and drawdown frameworks designed to guide risk exposure.",
                    icon: "network",
                },
            ],
            principles: [
                { label: "Systematic", body: "Decisions are based on written rules, not ad hoc opinions or market stories." },
                { label: "Evidence-driven", body: "Research must be reproducible, tradable, risk-aware, and monitored after use." },
                { label: "Local by design", body: "Built on Vietnamese liquidity, regulation, and disclosure realities." },
                { label: "Risk-aware", body: "Drawdowns, liquidity, and behaviour are design inputs—not afterthoughts." },
            ],
            objective:
                "The objective is clear: turn market evidence into disciplined proprietary trading and capital-allocation decisions that can be reviewed before and after implementation.",
            processTitle: "System architecture",
            processIntro: "We implement the framework as a research and engineering process behind every ASC strategy family.",
            process: [
                { label: "Data foundation", body: "Collect, clean, and monitor market, company, intraday, and operational data with clear lineage and quality checks." },
                { label: "Research engines", body: "Build models across factors, fundamentals, futures, and market structure, then test them against real implementation constraints." },
                { label: "Trading and portfolio systems", body: "Translate model outputs into sizing, rebalancing, exposure, liquidity, cost and execution rules." },
                { label: "Risk governance", body: "Monitor drawdowns, concentration, liquidity, model drift, degradation and regulated partner boundaries where relevant." },
            ],
            methodsTitle: "How the system works",
            methodsIntro: "ASC’s work turns market evidence into governed trading and investment decisions that can be reviewed before and after implementation.",
            blocks: [
                {
                    title: "Define the market universe",
                    body:
                        "We define the instruments, liquidity rules, disclosure quality, timing constraints, and data requirements that make a strategy realistic in Vietnam.",
                    icon: "database",
                },
                {
                    title: "Build model evidence",
                    body:
                        "Models are tested on market evidence, but they are not accepted unless the signal can survive costs, liquidity, execution windows, and monitoring rules.",
                    icon: "sliders",
                },
                {
                    title: "Construct the portfolio system",
                    body:
                        "Portfolio rules cover sizing, turnover, concentration, exposure, rebalancing and when a model output should be reduced, paused or reviewed.",
                    icon: "compass",
                },
                {
                    title: "Risk controls and review",
                    intro:
                        "Risk management is built into the system. We use multiple layers of review before a strategy is trusted:",
                    points: [
                        "Drawdown and concentration limits are defined before implementation.",
                        "Liquidity, costs, and execution timing are treated as design constraints.",
                        "Model drift and degradation are monitored after use.",
                        "ASC system design, proprietary implementation and regulated partner obligations remain clearly separated.",
                    ],
                    icon: "shield",
                },
            ],
            humanJudgement: {
                title: "Human judgement and data working together",
                intro: "Our process is quantitative, but not automation for its own sake. Judgement enters where it adds the most value:",
                steps: [
                    "Selecting and cleaning the underlying market and company data.",
                    "Choosing which factors to emphasise and how to combine them.",
                    "Setting portfolio and risk limits that reflect Vietnamese market structure.",
                    "Reviewing how the portfolio behaves across different environments.",
                ],
                note: "Day-to-day implementation follows written rules so responses are consistent and auditable while research evolves in the background.",
            },
            flow: [
                { label: "Evidence", desc: "Market, company, intraday, and operating data.", icon: "database" },
                { label: "Models", desc: "Research engines and rules for decision support.", icon: "rules" },
                { label: "Portfolio", desc: "Sizing, exposure, rebalancing, and execution-aware design.", icon: "sliders" },
                { label: "Governance", desc: "Monitoring, risk limits, review, and role boundaries.", icon: "shield-check" },
            ],
            comparison: {
                gutTitle: "Discretionary",
                gutDesc: "Subjective decisions often influenced by market noise.",
                rulesTitle: "Systematic",
                rulesDesc: "Disciplined execution grounded in statistical validation.",
            },
            riskBands: [
                { label: "Diversification with limits", desc: "Meaningful number of names across sectors, with caps to avoid concentrated bets.", color: "#CBD5E1" },
                { label: "Exposure controls", desc: "Monitor market sensitivity and adjust when risk moves outside written risk ranges.", color: "#94A3B8" },
                { label: "Drawdown ranges and responses", desc: "Track distance from peaks; reduce risk gradually when losses breach agreed thresholds.", color: "#D97706" },
            ],
            edge: {
                title: "Our edge in Vietnam",
                bullets: [
                    "Vietnam-focused systems calibrated to local data, liquidity, market structure, and regulation.",
                    "Research engines that include factor, fundamental, futures, and market-structure work.",
                    "Execution realism built into strategy design instead of treated as an afterthought.",
                    "Licensed partner collaboration remains available where regulated product or client-facing work is involved.",
                ],
            },
            expectations: {
                title: "What the system is designed to do — and not do",
                goals: [
                    "A documented, rules-based trading and investment system rather than narrative-led decision making.",
                    "Explicit risk rules for drawdown, liquidity, concentration, execution, and model review.",
                    "A process that ASC and its regulated partners, where relevant, can monitor and challenge.",
                ],
                disclaimer:
                    "ASC does not promise profit, protection from market losses or model success in every period. Vietnam is a volatile market and all trading and investment activity involves risk, including possible loss of capital.",
            },
            performance: {
                title: "Model & Risk Analytics",
                presentationTitle: "Documentation",
                intro: "How model results are documented",
                presentation: [
                    "Model outputs are reviewed with assumptions, costs, data limits, and implementation constraints clearly stated.",
                    "Strategy behaviour is compared against relevant market context where appropriate.",
                    "Review packs can include multiple horizons and stress periods, subject to product-level governance.",
                ],
                metricsTitle: "Risk and capital behaviour metrics",
                metrics: [
                    "Annualised volatility and tracking error.",
                    "Sharpe ratio and information ratio.",
                    "Maximum drawdown and time to recovery.",
                    "Exposure and concentration statistics by sector, factor, instrument, and single name.",
                ],
                historyTitle: "Observed and simulated history",
                historyIntro:
                    "Vietnam remains a developing market, so review work must separate historical simulation, paper observation, and implemented results:",
                history: [
                    "Historical simulations built from point-in-time Vietnamese data to show how a framework may behave through different cycles and stress periods.",
                    "Observed or implemented results, where available and approved for sharing, reviewed with actual costs and implementation constraints.",
                ],
                historyNote:
                    "Backtests are tools, not promises. They help ASC understand sensitivity to different environments but are not forecasts. All results are reviewed with methodology, assumptions and limitations.",
                reportingTitle: "Access to detailed reporting",
                reportingBody:
                    "Where regulated products or client-facing work are involved, reporting and documentation are handled by the relevant licensed partner under applicable law.",
            },
        },
        solutions: {
            title: "Partnerships and boundaries",
            intro: "How ASC separates proprietary systems, partner collaboration and regulated client-facing obligations.",
        },
        partnerships: {
            intro:
                "ASC may collaborate with licensed investment partners where appropriate. ASC’s core identity remains proprietary systematic research, trading systems, execution discipline and risk governance.",
            paragraphs: [
                "In those arrangements, ASC provides research frameworks, model rules, diagnostics and risk oversight.",
                "Licensed partners are responsible for regulated products, onboarding, suitability, portfolio implementation, execution, reporting and client-facing obligations.",
                "Aureus Sigma Capital is a proprietary systematic trading and investment firm focused on Vietnam’s capital markets.",
                "ASC does not offer investment products directly to the public through this website and does not accept client assets through this website.",
                "ASC builds research, data, execution, portfolio-construction and risk-control systems to trade and compound capital with discipline.",
                "Partnerships are used only where regulated product, implementation or client-facing obligations require a licensed entity.",
                "For regulated products, account opening, suitability, execution, reporting or documentation, please contact the relevant licensed partner. ASC may provide an introduction where appropriate.",
            ],
            roles: [
                {
                    roleLabel: "The Capital",
                    title: "Investors",
                    bullets: ["Regulated access handled by licensed partners", "No ASC public product offering through this website"],
                },
                {
                    roleLabel: "The Manager",
                    title: "Licensed partners",
                    bullets: ["Regulated products and onboarding", "Suitability, execution, reporting and client-facing obligations"],
                },
                {
                    roleLabel: "The Architect",
                    title: "Aureus Sigma Capital",
                    bullets: ["Builds proprietary systems", "Provides research frameworks and model rules where relevant", "Monitors diagnostics and risk guardrails"],
                },
            ],
            cta: "FIDES partnership note",
            mechanicsTitle: "How the partnership works",
            investorNoticeTitle: "Important information",
        },
        boundaries: {
            title: "Partnerships and boundaries",
            intro:
                "ASC’s website does not offer products, account opening or personalized advice. This page records how responsibilities are separated when ASC collaborates with licensed partners.",
            objectivesTitle: "Responsibility boundaries",
            objectives: [
                {
                    title: "ASC proprietary systems",
                    body:
                        "ASC builds and maintains research, data, execution, portfolio-construction and risk-control systems for Vietnam’s capital markets.",
                },
                {
                    title: "Licensed partner obligations",
                    body:
                        "Licensed partners handle regulated products, onboarding, suitability, portfolio implementation, execution, reporting and client-facing obligations.",
                },
                {
                    title: "Website boundary",
                    body:
                        "ASC does not offer investment products directly to the public, accept client assets or provide personalized investment advice through this website.",
                },
            ],
            discussionTitle: "Partnership discussion areas",
            discussionIntro:
                "Where a licensed partner relationship is relevant, discussions may cover:",
            discussionBullets: [
                "Research frameworks and model rules.",
                "Execution workflow and reconciliation requirements.",
                "Risk diagnostics, monitoring and review cadence.",
                "Reporting inputs that the licensed partner may use under its own obligations.",
            ],
            discussionNote:
                "ASC does not set public product terms through this website. Regulated product, account, suitability, execution and documentation questions belong with the relevant licensed partner.",
            reportingTitle: "Reporting and transparency",
            reportingBody:
                "ASC may provide analytics and diagnostics to a licensed partner. The licensed partner remains responsible for regulated reporting and client-facing communication.",
        },
        insights: {
            sectionTitle: "Insights",
            intro:
                "We publish concise notes for readers and partners who want to understand Vietnam market structure, trading infrastructure, risk governance, and systematic strategy development.",
            readMore: "Read article",
            backToInsights: "Back to insights",
            comingSoonLabel: "Coming soon",
            modalClose: "Close",
            items: [
                {
                    category: "News",
                    // PILOT (Dec 2025)
                    title: "FIDES and Aureus Sigma Capital Sign Memorandum of Understanding (MOU)",
                    slug: "fides-aureus-sigma-capital-strategic-partnership",
                    summary:
                        "FIDES Vietnam and ASC signed an MOU at the FIDES office in HCMC on December 19, 2025 covering regulated partner cooperation, research frameworks and risk oversight within applicable law.",
                    icon: "handshake",
                    image: "/assets/others/fides-asc-mou-document-exchange-16x9.jpg",
                },
                {
                    category: "Perspectives",
                    title: "The Case for Systematic Factors in Vietnamese Equities",
                    slug: "why-we-use-rules-instead-of-gut-feeling",
                    summary:
                        "Vietnam’s equity market exhibits distinct microstructural inefficiencies. We discuss why a systematic, factor-based approach can support more consistent decision-making than discretionary trading.",
                    comingSoon: true,
                    icon: "compass",
                    image: "/assets/others/quant_office_dark_2.png",
                },
                {
                    category: "Perspectives",
                    title: "Drawdown Management Framework: A Systematic Approach",
                    slug: "how-we-try-to-limit-big-losses",
                    summary:
                        "Preserving capital during tail events is critical to long-term compounding. We outline our multi-layered defense mechanism, incorporating volatility targeting and regime-based allocation adjustments.",
                    comingSoon: true,
                    icon: "shield",
                    image: "/assets/others/abstract_equity_curve_2.png",
                },
            ],
        },
        about: {
            title: "About Aureus Sigma Capital",
            intro: "Proprietary. Systematic. Built for Vietnam’s capital markets.",
            details: [
                "Aureus Sigma Capital (ASC) is a proprietary systematic trading and investment firm focused on Vietnam’s capital markets.",
                "ASC builds research, data, execution, portfolio-construction and risk-control systems to trade and compound capital with discipline. Our work spans Vietnam equities, VN30F futures, factor and fundamental research, market-structure analysis and implementation-aware portfolio design.",
                "ASC may collaborate with licensed partners where appropriate. In those cases, licensed partners are responsible for regulated products, onboarding, suitability, execution, reporting and client-facing obligations. ASC does not offer investment products directly to the public through this website and does not accept client assets through this website.",
            ],
            factSheet: {
                title: "Fact Sheet",
                items: [
                    { label: "Founded", value: "2025" },
                    { label: "Focus", value: "Proprietary systematic trading for Vietnam" },
                    { label: "Website boundary", value: "No direct public product offering" },
                ]
            },
            highlights: [
                { label: "Systematic discipline", body: "Rules-based research and governance tailored to Vietnam’s capital markets.", icon: "rules" },
                { label: "Trading infrastructure", body: "Research, portfolio, execution, data and risk-control infrastructure.", icon: "network" },
                { label: "Clear boundaries", body: "Licensed partners remain responsible for regulated client-facing work where relevant.", icon: "shield-check" },
            ],
            bioDetails: [
                {
                    name: "Duc (Huy) Nguyen",
                    title: "Founder & CEO",
                    body: [
                        "Duc is the founding architect of Aureus Sigma Capital’s proprietary trading infrastructure. He leads ASC’s research, model design, risk oversight, and partner coordination.",
                        "His career has been anchored in Vietnam’s capital markets for more than two decades, including leadership roles as CEO of Techcom Capital, Managing Director of Techcom Securities and Chief Financial Officer of Orient Commercial Bank (OCB). Earlier, he led corporate finance and financial advisory at Deloitte Vietnam and later served as group CFO and investment head for Vietnamese and regional investment and real-estate platforms, applying quantitative models, scenario analysis and disciplined capital-allocation frameworks through multiple cycles.",
                        "Duc keeps ASC focused on documented rules, local data quality, execution discipline and clear risk controls while licensed partners handle regulated client-facing work where applicable.",
                    ],
                },
            ],
            teamTitle: "Leadership",
        },
        team: {
            founder: "Duc (Huy) Nguyen — Founder & CEO",
            founderBio:
                "Founder and CEO of ASC. Former CEO of Techcom Capital and Managing Director of Techcom Securities, with earlier leadership roles at Deloitte Vietnam and regional investment groups. Brings 20+ years in Vietnam’s capital markets, now focused on proprietary systematic trading and risk-aware process design.",
        },
        contact: {
            title: "Contact",
            desc:
                "For inquiries about ASC’s research, trading systems, risk framework or partnership discussions, please contact ASC. For regulated products, account opening, suitability, execution, reporting or documentation, please contact the relevant licensed partner. ASC may provide an introduction where appropriate.",
            primaryCta: "Submit inquiry",
            emailLabel: "Email",
            email: "contact@ascap.vn",
            addressLabel: "Offices",
            addresses: [
                "15 Le Thanh Ton, Saigon Ward, HCMC",
                "21 Vo Truong Toan, An Khanh Ward, HCMC"
            ],
            note:
                "Email remains contact@ascap.vn. ASC does not offer investment products directly to the public, accept client assets or provide personalized investment advice through this website.",
        },
        legal: {
            body:
                "Important information. This website is for informational purposes only. It does not constitute an offer to sell, or a solicitation of an offer to buy, any security, fund interest, investment product or financial instrument in any jurisdiction. Aureus Sigma Capital (ASC) is a proprietary systematic trading and investment firm focused on Vietnam’s capital markets. ASC develops research, data, execution, portfolio-construction and risk-control systems. ASC does not offer investment products directly to the public through this website, does not accept client assets through this website, and does not provide personalized investment advice through this website. Where ASC collaborates with licensed partners, those licensed partners are responsible for regulated products, onboarding, suitability, implementation, execution, reporting and client-facing obligations under applicable law. Any discussion of research, models, simulations, backtests, frameworks or strategy behaviour is illustrative and subject to limitations. Past performance, simulated performance or modelled results do not promise future results. All investment and trading activity involves risk, including possible loss of capital.",
            rights: "© " + new Date().getFullYear() + " Aureus Sigma Capital. All rights reserved.",
        },
        cookie: {
            text: "We use minimal cookies for site functionality and to process institutional inquiries.",
            accept: "Accept",
        },
    },
    vi: {
        nav: {
            home: "Trang chủ",
            whatWeDo: "Phương pháp",
            solutions: "Ranh giới",
            partnerships: "Đối tác",
            insights: "Góc nhìn",
            about: "Giới thiệu",
            contact: "Liên hệ",
        },
        hero: {
            whyAsc: "Tại sao chọn ASC",
            title: "Giao dịch hệ thống cho thị trường vốn Việt Nam.",
            subtitle:
                "Aureus Sigma Capital xây dựng hạ tầng nghiên cứu, dữ liệu, thực thi, xây dựng danh mục và kiểm soát rủi ro để giao dịch và phát triển vốn một cách có kỷ luật.",
            ctas: [
                { label: "Khám phá ASC xây dựng gì", to: "/what-we-do" },
                { label: "Đối tác và ranh giới", to: "/partnerships" },
            ],
            stats: [
                { label: "Thành lập", value: "2025", icon: "clock" },
                { label: "Thị trường", value: "Thị trường vốn Việt Nam", icon: "map" },
                { label: "Vai trò", value: "Hệ thống độc quyền", icon: "shield-check" },
            ],
            highlights: [
                { label: "Kỷ luật vốn độc quyền", body: "ASC xây dựng hệ thống để giao dịch và phát triển vốn có kỷ luật, không chạy theo câu chuyện thị trường.", icon: "rules" },
                { label: "Hệ thống nghiên cứu và dữ liệu", body: "Nghiên cứu dựa trên quy tắc cho cổ phiếu Việt Nam, VN30F, cơ bản, nhân tố và cấu trúc thị trường.", icon: "database" },
                { label: "Thiết kế có ý thức thực thi", body: "Mô hình được thiết kế quanh thanh khoản, chi phí, thời điểm, quy trình môi giới và ràng buộc thực tế.", icon: "activity" },
                { label: "Quản trị rủi ro", body: "Giới hạn sụt giảm, giám sát mô hình, rà soát sau giao dịch và quy tắc dừng là một phần của hệ thống.", icon: "shield" },
            ],
        },
        whatWeDo: {
            sectionTitle: "Cách hệ thống của ASC được thiết kế",
            intro:
                "ASC thiết kế hệ thống nghiên cứu, giao dịch, thực thi, xây dựng danh mục và kiểm soát rủi ro độc quyền cho thị trường vốn Việt Nam. Công việc này chuyển bằng chứng thành quyết định có thể lặp lại, quy trình thực thi thật và kiểm soát rủi ro có thể rà soát.",
            capabilitiesTitle: "ASC xây dựng gì",
            capabilitiesIntro:
                "ASC không phải nền tảng gợi ý cổ phiếu, bên bán tín hiệu hay đơn vị phân phối sản phẩm. Chúng tôi xây dựng hệ thống đứng sau các quyết định giao dịch và đầu tư độc quyền có kỷ luật.",
            capabilities: [
                {
                    title: "Động cơ nghiên cứu",
                    body: "Mô hình nhân tố, cơ bản, hợp đồng tương lai và cấu trúc thị trường được kiểm thử với các ràng buộc thực thi thực tế.",
                    icon: "rules",
                },
                {
                    title: "Hệ thống giao dịch",
                    body: "Quy tắc kết nối quyết định mô hình với thời điểm, khung giờ thực thi, thanh khoản thị trường, quy trình môi giới và rà soát sau giao dịch.",
                    icon: "sliders",
                },
                {
                    title: "Xây dựng danh mục",
                    body: "Quy tắc tỷ trọng, tái cân bằng, phơi nhiễm, thanh khoản, tập trung và thiết kế danh mục có ý thức về sụt giảm.",
                    icon: "activity",
                },
                {
                    title: "Hạ tầng thực thi",
                    body: "Logic triển khai được thiết kế quanh chi phí, thời điểm, đối soát, ràng buộc giao dịch thật và rà soát vận hành.",
                    icon: "process",
                },
                {
                    title: "Quản trị rủi ro",
                    body: "Thẩm định mô hình, giám sát suy giảm, quy tắc dừng và ranh giới giữa hệ thống ASC với nghĩa vụ của đối tác được cấp phép.",
                    icon: "shield-check",
                },
                {
                    title: "Bằng chứng và vòng đời mô hình",
                    body: "Dữ liệu thị trường, cơ bản, trong ngày và vận hành được làm sạch để hỗ trợ nghiên cứu, giám sát, rà soát sau giao dịch và cập nhật mô hình.",
                    icon: "database",
                },
            ],
            strategyFamiliesTitle: "Nhóm chiến lược",
            strategyFamiliesIntro:
                "Nền tảng ASC rộng hơn một mô hình nhân tố hoặc một loại tài sản. Mỗi nhóm chiến lược phải chứng minh giá trị qua bằng chứng, tính khả thi khi thực thi, kiểm soát rủi ro và giám sát liên tục.",
            strategyFamilies: [
                {
                    title: "VN30F / Hệ thống giao dịch có quy tắc",
                    body: "Hệ thống hợp đồng tương lai dựa trên quy tắc, xoay quanh quyết định mô hình chính thức, khung giờ thực thi, kiểm soát môi giới và đối soát sau giao dịch.",
                    icon: "activity",
                },
                {
                    title: "Nghiên cứu cổ phiếu hệ thống",
                    body: "Nghiên cứu cổ phiếu Việt Nam dùng định giá, chất lượng, động lượng, thanh khoản và kỷ luật xây dựng danh mục.",
                    icon: "skyline",
                },
                {
                    title: "Khung cơ bản / STCV",
                    body: "Khung xếp hạng cơ bản và định giá dựa trên dữ liệu cho doanh nghiệp niêm yết Việt Nam.",
                    icon: "building",
                },
                {
                    title: "Cấu trúc thị trường và lớp phủ rủi ro",
                    body: "Khung về chế độ thị trường, thanh khoản, tương quan và sụt giảm để định hướng mức độ rủi ro.",
                    icon: "network",
                },
            ],
            principles: [
                { label: "Có hệ thống", body: "Mọi quyết định đều dựa trên quy tắc được văn bản hóa, không phải ý kiến tùy hứng hay những câu chuyện thị trường." },
                { label: "Dựa trên bằng chứng", body: "Nghiên cứu chỉ được chấp nhận khi có thể lặp lại, có thể thực thi, có ý thức rủi ro và được giám sát sau khi sử dụng." },
                { label: "Thiết kế cho thị trường nội địa", body: "Xây dựng dựa trên thực tế về thanh khoản, quy định và công bố thông tin tại Việt Nam." },
                { label: "Ý thức về rủi ro", body: "Mức sụt giảm, thanh khoản và hành vi thị trường là đầu vào trong thiết kế—không phải những yếu tố xem xét sau cùng." },
            ],
            objective:
                "Mục tiêu rõ ràng: chuyển bằng chứng thị trường thành các quyết định giao dịch và phân bổ vốn độc quyền có kỷ luật, có thể rà soát trước và sau khi triển khai.",
            processTitle: "Kiến trúc hệ thống",
            processIntro: "Chúng tôi triển khai khung này như một quy trình nghiên cứu và kỹ thuật đứng sau từng nhóm chiến lược của ASC.",
            process: [
                { label: "Nền tảng dữ liệu", body: "Thu thập, làm sạch và giám sát dữ liệu thị trường, doanh nghiệp, trong ngày và vận hành với nguồn gốc và kiểm tra chất lượng rõ ràng." },
                { label: "Động cơ nghiên cứu", body: "Xây dựng mô hình về nhân tố, cơ bản, hợp đồng tương lai và cấu trúc thị trường, sau đó kiểm thử với các ràng buộc thực thi thực tế." },
                { label: "Hệ thống giao dịch và danh mục", body: "Chuyển đầu ra mô hình thành quy tắc tỷ trọng, tái cân bằng, phơi nhiễm, thanh khoản, chi phí và thực thi." },
                { label: "Quản trị rủi ro", body: "Giám sát sụt giảm, tập trung, thanh khoản, suy giảm mô hình và ranh giới với đối tác được cấp phép khi phù hợp." },
            ],
            blocks: [
                {
                    title: "Xác định phạm vi thị trường",
                    body:
                        "Chúng tôi xác định công cụ, quy tắc thanh khoản, chất lượng dữ liệu, khung thời gian giao dịch và yêu cầu dữ liệu để chiến lược có tính thực tế tại Việt Nam.",
                    icon: "database",
                },
                {
                    title: "Xây dựng bằng chứng mô hình",
                    body:
                        "Mô hình được kiểm thử trên bằng chứng thị trường, nhưng chỉ được chấp nhận khi tín hiệu có thể chịu được chi phí, thanh khoản, khung giờ thực thi và quy tắc giám sát.",
                    icon: "sliders",
                },
                {
                    title: "Xây dựng hệ thống danh mục",
                    body:
                        "Quy tắc danh mục bao gồm tỷ trọng, vòng quay, tập trung, phơi nhiễm, tái cân bằng và thời điểm cần giảm, tạm dừng hoặc rà soát đầu ra mô hình.",
                    icon: "compass",
                },
                {
                    title: "Kiểm soát rủi ro và rà soát",
                    intro:
                        "Quản trị rủi ro được tích hợp trong hệ thống. Chúng tôi sử dụng nhiều lớp rà soát trước khi một chiến lược được tin cậy:",
                    points: [
                        "Giới hạn sụt giảm và tập trung được xác định trước khi triển khai.",
                        "Thanh khoản, chi phí và thời điểm thực thi được xem là ràng buộc thiết kế.",
                        "Suy giảm mô hình được giám sát sau khi sử dụng.",
                        "Thiết kế hệ thống ASC, triển khai độc quyền và nghĩa vụ của đối tác được cấp phép được tách bạch rõ ràng.",
                    ],
                    icon: "shield",
                },
            ],
            humanJudgement: {
                title: "Phán đoán con người và dữ liệu cùng phối hợp",
                intro: "Quy trình của chúng tôi mang tính định lượng, nhưng không phải tự động hóa chỉ vì tự động hóa. Phán đoán con người được đưa vào ở những khâu mang lại giá trị cao nhất:",
                steps: [
                    "Lựa chọn và làm sạch dữ liệu thị trường và doanh nghiệp.",
                    "Quyết định nhấn mạnh nhân tố nào và kết hợp chúng ra sao.",
                    "Thiết lập giới hạn danh mục và rủi ro phản ánh cấu trúc thị trường Việt Nam.",
                    "Đánh giá cách danh mục vận hành trong các môi trường khác nhau.",
                ],
                note: "Việc triển khai hàng ngày tuân theo các quy tắc đã được văn bản hóa để đảm bảo phản ứng nhất quán và có thể xác minh, trong khi hoạt động nghiên cứu tiếp tục phát triển ở hậu trường.",
            },
            flow: [
                { label: "Bằng chứng", desc: "Dữ liệu thị trường, doanh nghiệp, trong ngày và vận hành.", icon: "database" },
                { label: "Mô hình", desc: "Động cơ nghiên cứu và quy tắc hỗ trợ quyết định.", icon: "rules" },
                { label: "Danh mục", desc: "Tỷ trọng, phơi nhiễm, tái cân bằng và thiết kế có ý thức thực thi.", icon: "sliders" },
                { label: "Quản trị", desc: "Giám sát, giới hạn rủi ro, rà soát và ranh giới vai trò.", icon: "shield-check" },
            ],
            comparison: {
                gutTitle: "Phán đoán Chủ quan",
                gutDesc: "Quyết định chủ quan thường bị ảnh hưởng bởi nhiễu loạn thị trường.",
                rulesTitle: "Hệ thống hóa",
                rulesDesc: "Thực thi kỷ luật dựa trên kiểm chứng thống kê.",
            },
            riskBands: [
                { label: "Phân tán danh mục", desc: "Số lượng cổ phiếu đủ lớn trải rộng các ngành, với giới hạn tỷ trọng để tránh tập trung quá mức.", color: "#CBD5E1" },
                { label: "Kiểm soát mức độ rủi ro", desc: "Giám sát độ nhạy thị trường và điều chỉnh khi rủi ro vượt ra ngoài giới hạn đã cam kết.", color: "#94A3B8" },
                { label: "Ngưỡng lỗ và phản ứng", desc: "Theo dõi khoảng cách từ đỉnh; giảm rủi ro dần dần khi mức lỗ vượt quá các ngưỡng đã thống nhất.", color: "#D97706" },
            ],
            edge: {
                title: "Lợi thế của chúng tôi tại Việt Nam",
                bullets: [
                    "Hệ thống tập trung vào Việt Nam, được tinh chỉnh theo dữ liệu, thanh khoản, cấu trúc thị trường và quy định trong nước.",
                    "Động cơ nghiên cứu bao gồm nhân tố, cơ bản, hợp đồng tương lai và cấu trúc thị trường.",
                    "Tính thực tế khi thực thi được đưa vào thiết kế chiến lược ngay từ đầu.",
                    "Hợp tác với đối tác được cấp phép vẫn phù hợp khi có sản phẩm được quản lý hoặc công việc tiếp xúc khách hàng.",
                ],
            },
            expectations: {
                title: "Hệ thống được thiết kế để làm gì — và không làm gì",
                goals: [
                    "Một quy trình giao dịch được văn bản hóa và dựa trên quy tắc, không phải quyết định theo câu chuyện thị trường.",
                    "Quy tắc rủi ro rõ ràng cho sụt giảm, thanh khoản, tập trung, thực thi và rà soát mô hình.",
                    "Một quy trình mà ASC và đối tác được cấp phép, khi phù hợp, có thể giám sát và đặt câu hỏi.",
                ],
                disclaimer:
                    "ASC không cam kết lợi nhuận, không bảo vệ khỏi thua lỗ thị trường và không hứa hẹn mô hình thành công trong mọi giai đoạn. Việt Nam là thị trường có biến động cao và mọi hoạt động giao dịch, đầu tư đều có rủi ro, bao gồm khả năng mất vốn.",
            },
            performance: {
                title: "Phân tích Mô hình & Rủi ro",
                presentationTitle: "Tài liệu hóa",
                intro: "Cách kết quả mô hình được tài liệu hóa",
                presentation: [
                    "Đầu ra mô hình được rà soát cùng giả định, chi phí, giới hạn dữ liệu và ràng buộc thực thi.",
                    "Hành vi chiến lược được đặt trong bối cảnh thị trường phù hợp khi cần.",
                    "Bộ rà soát có thể bao gồm nhiều giai đoạn và thời kỳ căng thẳng, tùy thuộc yêu cầu quản trị từng sản phẩm.",
                ],
                metricsTitle: "Các chỉ số rủi ro và hành vi vốn",
                metrics: [
                    "Biến động hàng năm và mức chênh lệch so với chỉ số (tracking error).",
                    "Tỷ số Sharpe (quan hệ giữa kết quả và rủi ro) và Information ratio (hành vi tương đối của mô hình).",
                    "Mức sụt giảm tối đa từ đỉnh (drawdown) và thời gian phục hồi.",
                    "Phân bổ và mức độ tập trung theo ngành, tiêu chí đầu tư, công cụ và từng mã.",
                ],
                historyTitle: "Lịch sử quan sát và mô phỏng",
                historyIntro:
                    "Việt Nam vẫn là thị trường đang phát triển, do đó công việc rà soát phải tách bạch mô phỏng lịch sử, quan sát trên giấy và kết quả đã triển khai:",
                history: [
                    "Mô phỏng lịch sử được xây dựng từ dữ liệu theo từng thời điểm của Việt Nam để xem khung có thể vận hành thế nào qua các chu kỳ và giai đoạn căng thẳng.",
                    "Kết quả quan sát hoặc đã triển khai, khi có và được phép chia sẻ, được rà soát cùng chi phí thực tế và ràng buộc thực thi.",
                ],
                historyNote:
                    "Backtest là công cụ, không phải lời hứa. Chúng giúp ASC hiểu độ nhạy trong các môi trường khác nhau nhưng không phải là dự báo. Tất cả kết quả được rà soát cùng phương pháp, giả định và giới hạn.",
                reportingTitle: "Tiếp cận báo cáo chi tiết",
                reportingBody:
                    "Khi có sản phẩm được quản lý hoặc công việc tiếp xúc khách hàng, báo cáo và tài liệu thuộc trách nhiệm của đối tác được cấp phép theo pháp luật hiện hành.",
            },
        },
        solutions: {
            title: "Đối tác và ranh giới",
            intro: "Cách ASC tách biệt hệ thống độc quyền, hợp tác với đối tác và nghĩa vụ tiếp xúc khách hàng được quản lý.",
        },
        partnerships: {
            intro:
                "ASC có thể hợp tác với đối tác đầu tư được cấp phép khi phù hợp. Bản sắc cốt lõi của ASC vẫn là nghiên cứu hệ thống độc quyền, hệ thống giao dịch, kỷ luật thực thi và quản trị rủi ro.",
            paragraphs: [
                "Trong các trường hợp đó, ASC cung cấp khung nghiên cứu, quy tắc mô hình, chẩn đoán và giám sát rủi ro.",
                "Đối tác được cấp phép chịu trách nhiệm đối với sản phẩm được quản lý, tiếp nhận khách hàng, đánh giá sự phù hợp, triển khai danh mục, thực thi giao dịch, báo cáo và nghĩa vụ tiếp xúc khách hàng.",
                "Aureus Sigma Capital là công ty giao dịch hệ thống độc quyền tập trung vào thị trường vốn Việt Nam.",
                "ASC không chào bán sản phẩm đầu tư trực tiếp cho công chúng thông qua website này và không nhận tài sản của khách hàng thông qua website này.",
                "ASC xây dựng hệ thống nghiên cứu, dữ liệu, thực thi, xây dựng danh mục và kiểm soát rủi ro để giao dịch và phát triển vốn một cách có kỷ luật.",
                "Hợp tác chỉ được dùng khi sản phẩm được quản lý, triển khai hoặc nghĩa vụ tiếp xúc khách hàng cần một tổ chức được cấp phép.",
                "Đối với sản phẩm được quản lý, mở tài khoản, đánh giá sự phù hợp, thực thi, báo cáo hoặc tài liệu pháp lý, vui lòng liên hệ đối tác được cấp phép liên quan. ASC có thể hỗ trợ giới thiệu khi phù hợp.",
            ],
            roles: [
                {
                    roleLabel: "Vốn",
                    title: "Nhà đầu tư",
                    bullets: ["Tiếp cận được quản lý bởi đối tác được cấp phép", "Không có chào bán sản phẩm trực tiếp qua website ASC"],
                },
                {
                    roleLabel: "Quản Lý",
                    title: "Đối tác được cấp phép",
                    bullets: ["Sản phẩm được quản lý và tiếp nhận khách hàng", "Đánh giá phù hợp, thực thi, báo cáo và nghĩa vụ tiếp xúc khách hàng"],
                },
                {
                    roleLabel: "Kiến Trúc",
                    title: "Aureus Sigma Capital",
                    bullets: ["Xây dựng hệ thống độc quyền", "Cung cấp khung nghiên cứu và quy tắc mô hình khi phù hợp", "Giám sát chẩn đoán và ranh giới rủi ro"],
                },
            ],
            cta: "Ghi chú hợp tác FIDES",
            mechanicsTitle: "Về đối tác được cấp phép",
            investorNoticeTitle: "Thông tin quan trọng",
        },
        boundaries: {
            title: "Đối tác và ranh giới",
            intro:
                "Website ASC không chào bán sản phẩm, không mở tài khoản và không cung cấp tư vấn cá nhân. Trang này ghi nhận cách phân định trách nhiệm khi ASC hợp tác với đối tác được cấp phép.",
            objectivesTitle: "Ranh giới trách nhiệm",
            objectives: [
                {
                    title: "Hệ thống độc quyền của ASC",
                    body:
                        "ASC xây dựng và duy trì hệ thống nghiên cứu, dữ liệu, thực thi, xây dựng danh mục và kiểm soát rủi ro cho thị trường vốn Việt Nam.",
                },
                {
                    title: "Nghĩa vụ của đối tác được cấp phép",
                    body:
                        "Đối tác được cấp phép xử lý sản phẩm được quản lý, tiếp nhận khách hàng, đánh giá sự phù hợp, triển khai danh mục, thực thi, báo cáo và nghĩa vụ tiếp xúc khách hàng.",
                },
                {
                    title: "Ranh giới website",
                    body:
                        "ASC không chào bán sản phẩm đầu tư trực tiếp cho công chúng, không nhận tài sản của khách hàng và không cung cấp tư vấn đầu tư cá nhân thông qua website này.",
                },
            ],
            discussionTitle: "Nội dung thảo luận hợp tác",
            discussionIntro:
                "Khi một quan hệ đối tác được cấp phép là phù hợp, thảo luận có thể bao gồm:",
            discussionBullets: [
                "Khung nghiên cứu và quy tắc mô hình.",
                "Quy trình thực thi và yêu cầu đối soát.",
                "Chẩn đoán rủi ro, giám sát và nhịp rà soát.",
                "Dữ liệu đầu vào cho báo cáo mà đối tác được cấp phép có thể sử dụng theo nghĩa vụ của mình.",
            ],
            discussionNote:
                "ASC không đặt điều khoản sản phẩm công khai thông qua website này. Câu hỏi về sản phẩm được quản lý, tài khoản, sự phù hợp, thực thi và tài liệu thuộc về đối tác được cấp phép liên quan.",
            reportingTitle: "Báo cáo và rõ ràng",
            reportingBody:
                "ASC có thể cung cấp phân tích và chẩn đoán cho đối tác được cấp phép. Đối tác được cấp phép vẫn chịu trách nhiệm về báo cáo được quản lý và truyền thông tiếp xúc khách hàng.",
        },
        insights: {
            sectionTitle: "Góc nhìn",
            intro: "Chúng tôi xuất bản các ghi chú ngắn gọn cho người đọc và đối tác muốn hiểu cấu trúc thị trường Việt Nam, hạ tầng giao dịch, quản trị rủi ro và phát triển chiến lược hệ thống.",
            readMore: "Đọc bài viết",
            backToInsights: "Xem thêm bài viết",
            comingSoonLabel: "Sắp ra mắt",
            modalClose: "Đóng",
            items: [
                {
                    category: "Tin tức",
                    // PILOT (T12/2025)
                    title: "FIDES và Aureus Sigma Capital ký Biên bản ghi nhớ (MOU)",
                    slug: "fides-aureus-sigma-capital-strategic-partnership",
                    summary:
                        "FIDES Việt Nam và ASC ký MOU tại văn phòng FIDES ở TP. HCM ngày 19/12/2025 về hợp tác đối tác được cấp phép, khung nghiên cứu và giám sát rủi ro trong khuôn khổ pháp luật hiện hành.",
                    icon: "handshake",
                    image: "/assets/others/fides-asc-mou-document-exchange-16x9.jpg",
                },
                {
                    category: "Góc nhìn",
                    title: "Cơ sở cho Đầu tư theo Tiêu chí Hệ thống tại Việt Nam",
                    slug: "why-we-use-rules-instead-of-gut-feeling",
                    summary:
                        "Thị trường cổ phiếu Việt Nam có những đặc thù riêng về cấu trúc vi mô. Chúng tôi thảo luận lý do tại sao phương pháp đầu tư theo tiêu chí cụ thể có thể hỗ trợ ra quyết định nhất quán hơn so với giao dịch theo cảm tính.",
                    comingSoon: true,
                    icon: "compass",
                    image: "/assets/others/quant_office_dark_2.png",
                },
                {
                    category: "Góc nhìn",
                    title: "Khung Quản trị Sụt giảm: Tiếp cận Hệ thống",
                    slug: "how-we-try-to-limit-big-losses",
                    summary:
                        "Bảo toàn vốn trong các giai đoạn thị trường biến động mạnh là yếu tố then chốt để tích lũy dài hạn. Chúng tôi trình bày cơ chế phòng vệ đa lớp, kiểm soát mức biến động mục tiêu và điều chỉnh phân bổ theo tình hình thị trường.",
                    comingSoon: true,
                    icon: "shield",
                    image: "/assets/others/abstract_equity_curve_2.png",
                },
            ],
        },
        about: {
            title: "Về Aureus Sigma Capital",
            intro:
                "Độc quyền. Có hệ thống. Xây dựng cho thị trường vốn Việt Nam.",
            details: [
                "Aureus Sigma Capital (ASC) là công ty giao dịch hệ thống độc quyền tập trung vào thị trường vốn Việt Nam.",
                "ASC xây dựng hệ thống nghiên cứu, dữ liệu, thực thi, xây dựng danh mục và kiểm soát rủi ro để giao dịch và phát triển vốn một cách có kỷ luật. Công việc của ASC bao gồm cổ phiếu Việt Nam, hợp đồng tương lai VN30F, nghiên cứu nhân tố và cơ bản, phân tích cấu trúc thị trường và thiết kế danh mục có ý thức thực thi.",
                "ASC có thể hợp tác với các đối tác được cấp phép khi phù hợp. Trong các trường hợp đó, đối tác được cấp phép chịu trách nhiệm đối với sản phẩm được quản lý, tiếp nhận khách hàng, đánh giá sự phù hợp, triển khai danh mục, thực thi giao dịch, báo cáo và các nghĩa vụ tiếp xúc khách hàng theo quy định pháp luật. ASC không chào bán sản phẩm đầu tư trực tiếp cho công chúng thông qua website này và không nhận tài sản của khách hàng thông qua website này.",
            ],
            factSheet: {
                title: "Thông tin tổng quan",
                items: [
                    { label: "Năm thành lập", value: "2025" },
                    { label: "Trọng tâm", value: "Hệ thống độc quyền cho Việt Nam" },
                    { label: "Ranh giới website", value: "Không chào bán sản phẩm trực tiếp" },
                ]
            },
            highlights: [
                { label: "Kỷ luật hệ thống", body: "Nghiên cứu và quản trị dựa trên quy tắc, được tinh chỉnh cho thị trường vốn Việt Nam.", icon: "rules" },
                { label: "Hạ tầng giao dịch", body: "Hạ tầng nghiên cứu, danh mục, thực thi, dữ liệu và kiểm soát rủi ro.", icon: "network" },
                { label: "Ranh giới rõ ràng", body: "Đối tác được cấp phép chịu trách nhiệm công việc tiếp xúc khách hàng khi phù hợp.", icon: "shield-check" },
            ],
            bioDetails: [
                {
                    name: "Nguyễn Huy Đức",
                    title: "Nhà sáng lập kiêm Tổng Giám đốc",
                    body: [
                        "Ông Đức là người sáng lập và xây dựng hạ tầng giao dịch độc quyền của Aureus Sigma Capital. Ông dẫn dắt nghiên cứu, thiết kế mô hình, giám sát rủi ro và phối hợp với các đối tác của ASC.",
                        "Sự nghiệp của ông gắn bó với thị trường vốn Việt Nam hơn hai mươi năm, trải qua các vị trí lãnh đạo cấp cao như Tổng Giám đốc Techcom Capital, Tổng Giám đốc Techcom Securities và Giám đốc Tài chính Ngân hàng Phương Đông (OCB). Trước đó, ông phụ trách mảng tài chính doanh nghiệp và tư vấn tài chính tại Deloitte Việt Nam, sau đó đảm nhiệm vị trí Giám đốc Tài chính tập đoàn kiêm Trưởng bộ phận Đầu tư cho các nền tảng đầu tư và bất động sản tại Việt Nam và khu vực, ứng dụng các mô hình định lượng, phân tích kịch bản và khung phân bổ vốn kỷ luật qua nhiều chu kỳ thị trường.",
                        "Ông Đức giữ trọng tâm của ASC vào quy tắc được văn bản hóa, chất lượng dữ liệu nội địa, kỷ luật thực thi và kiểm soát rủi ro rõ ràng, trong khi đối tác được cấp phép xử lý các công việc tiếp xúc khách hàng thuộc phạm vi được quản lý khi áp dụng.",
                    ],
                },
            ],
            teamTitle: "Ban Lãnh đạo",
        },
        team: {
            founder: "Nguyễn Huy Đức — Nhà sáng lập kiêm Tổng Giám đốc",
            founderBio:
                "Nhà sáng lập kiêm Tổng Giám đốc ASC. Cựu CEO Techcom Capital và Giám đốc Khối Ngân hàng Đầu tư tại Techcom Securities; nguyên CFO Ngân hàng Phương Đông (OCB). Với hơn 20 năm kinh nghiệm tại thị trường vốn Việt Nam, ông tập trung vào hệ thống độc quyền và thiết kế quy trình có ý thức rủi ro.",
        },
        contact: {
            title: "Liên hệ",
            desc:
                "Đối với các yêu cầu về nghiên cứu, hệ thống giao dịch, khung quản trị rủi ro hoặc thảo luận hợp tác với ASC, vui lòng liên hệ ASC. Đối với thông tin về sản phẩm được quản lý, mở tài khoản, đánh giá sự phù hợp, thực thi, báo cáo hoặc tài liệu pháp lý, vui lòng liên hệ đối tác được cấp phép liên quan. ASC có thể hỗ trợ giới thiệu khi phù hợp.",
            primaryCta: "Gửi yêu cầu",
            emailLabel: "Email",
            email: "contact@ascap.vn",
            addressLabel: "Địa chỉ",
            addresses: [
                "15 Lê Thánh Tôn, Phường Sài Gòn, TP. HCM",
                "21 Võ Trường Toản, Phường An Khánh, TP. HCM"
            ],
            note: "Email vẫn là contact@ascap.vn. ASC không chào bán sản phẩm đầu tư trực tiếp cho công chúng, không nhận tài sản của khách hàng và không cung cấp tư vấn đầu tư cá nhân thông qua website này.",
        },
        legal: {
            body:
                "Thông tin quan trọng. Website này chỉ nhằm mục đích cung cấp thông tin. Nội dung trên website không cấu thành lời chào bán, lời mời chào mua, khuyến nghị đầu tư hay tư vấn đầu tư cá nhân đối với bất kỳ chứng khoán, sản phẩm đầu tư hoặc công cụ tài chính nào tại bất kỳ khu vực pháp lý nào. Aureus Sigma Capital (ASC) là công ty giao dịch hệ thống độc quyền tập trung vào thị trường vốn Việt Nam. ASC phát triển hạ tầng nghiên cứu, dữ liệu, thực thi, xây dựng danh mục và kiểm soát rủi ro. ASC không chào bán sản phẩm đầu tư trực tiếp cho công chúng thông qua website này, không nhận tài sản của khách hàng thông qua website này và không cung cấp tư vấn đầu tư cá nhân thông qua website này. Khi ASC hợp tác với đối tác được cấp phép, đối tác đó chịu trách nhiệm đối với sản phẩm được quản lý, tiếp nhận khách hàng, đánh giá sự phù hợp, triển khai, thực thi, báo cáo và các nghĩa vụ tiếp xúc khách hàng theo quy định pháp luật hiện hành. Mọi nội dung liên quan đến nghiên cứu, mô hình, mô phỏng, backtest, khung đầu tư hoặc hành vi chiến lược chỉ mang tính minh họa và có các giới hạn nhất định. Hiệu quả trong quá khứ, kết quả mô phỏng hoặc kết quả mô hình không phải là cam kết cho kết quả trong tương lai. Mọi hoạt động đầu tư và giao dịch đều có rủi ro, bao gồm khả năng mất vốn.",
            rights: "© " + new Date().getFullYear() + " Aureus Sigma Capital. All rights reserved.",
        },
        cookie: {
            text: "Chúng tôi sử dụng cookie tối thiểu cho chức năng trang web và để xử lý các yêu cầu từ tổ chức.",
            accept: "Đồng ý",
        },
    },
};

export const INSIGHTS_CONTENT = {
    // PILOT VERSION (December 2025) - Switch to full version (fidesEnMd/fidesViMd) for Q1 2026 launch
    "fides-aureus-sigma-capital-strategic-partnership": {
        en: {
            title: "FIDES and Aureus Sigma Capital Sign Memorandum of Understanding (MOU)",
            dateLine: "HCMC (FIDES Office), Vietnam – December 19, 2025",
            body: parseMarkdown(fidesPilotEnMd),
        },
        vi: {
            title: "FIDES và Aureus Sigma Capital ký Biên bản ghi nhớ (MOU)",
            dateLine: "TP. HCM (văn phòng FIDES) – Ngày 19 tháng 12 năm 2025",
            body: parseMarkdown(fidesPilotViMd),
        },
    },
    // FULL VERSION (Q1 2026) - Uncomment and replace above when launching products
    // "fides-aureus-sigma-capital-strategic-partnership": {
    //     en: {
    //         title: "FIDES and Aureus Sigma Capital Sign Partnership to Develop Systematic Strategies for Vietnam",
    //         dateLine: "HCMC, Vietnam – [Q1 2026 Date]",
    //         body: parseMarkdown(fidesEnMd),
    //     },
    //     vi: {
    //         title: "FIDES và Aureus Sigma Capital ký kết hợp tác phát triển chiến lược hệ thống cho Việt Nam",
    //         dateLine: "TP. HCM – [Ngày Q1 2026]",
    //         body: parseMarkdown(fidesViMd),
    //     },
    // },
    "why-we-use-rules-instead-of-gut-feeling": {
        en: {
            title: "The Case for Systematic Factors in Vietnamese Equities",
            body: parseMarkdown(rulesEnMd),
        },
        vi: {
            title: "Cơ sở cho Đầu tư theo Tiêu chí Hệ thống tại Việt Nam",
            body: parseMarkdown(rulesViMd),
        },
    },
    "how-we-try-to-limit-big-losses": {
        en: {
            title: "Drawdown Management Framework: A Systematic Approach",
            body: parseMarkdown(lossesEnMd),
        },
        vi: {
            title: "Khung Quản trị Sụt giảm: Tiếp cận Hệ thống",
            body: parseMarkdown(lossesViMd),
        },
    },
};

export const NAV_LINKS = [
    { labelKey: "home", path: "/" },
    { labelKey: "whatWeDo", path: "/what-we-do" },
    { labelKey: "solutions", path: "/solutions" },
    { labelKey: "partnerships", path: "/partnerships" },
    { labelKey: "insights", path: "/insights" },
    { labelKey: "about", path: "/about" },
    { labelKey: "contact", path: "/contact" },
];
