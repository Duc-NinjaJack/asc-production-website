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
            solutions: "Solutions",
            partnerships: "Partnerships",
            insights: "Insights",
            about: "About",
            contact: "Contact",
        },
        hero: {
            whyAsc: "Why ASC",
            title: "Systematic investment systems for Vietnam’s capital markets.",
            subtitle:
                "Aureus Sigma Capital builds empirical research, portfolio construction, trading, execution, and risk-control infrastructure designed to turn market evidence into disciplined capital allocation.",
            ctas: [
                { label: "Explore our investment framework", to: "/what-we-do" },
                { label: "Institutional enquiries", to: "/contact" },
            ],
            stats: [
                { label: "Founded", value: "2025", icon: "clock" },
                { label: "Market", value: "Vietnam capital markets", icon: "map" },
                { label: "Role", value: "Research and model infrastructure", icon: "shield-check" },
            ],
            highlights: [
                { label: "Research engines", body: "Rules-based models designed to turn evidence into repeatable investment decisions.", icon: "rules" },
                { label: "Portfolio systems", body: "Sizing, rebalancing, exposure control, and implementation-aware portfolio design.", icon: "sliders" },
                { label: "Risk governance", body: "Drawdown, liquidity, model-drift, and mandate-boundary controls built into the process.", icon: "shield" },
            ],
        },
        whatWeDo: {
            sectionTitle: "Investment framework",
            intro:
                "ASC builds disciplined investment systems for Vietnam’s capital markets. The work connects data, research, portfolio design, trading logic, execution realism, and risk governance into one repeatable decision process.",
            capabilitiesTitle: "What ASC builds",
            capabilitiesIntro:
                "ASC is not a stock-tip platform or a marketing-led fund shop. We build the infrastructure behind governed investment decisions.",
            capabilities: [
                {
                    title: "Research engines",
                    body: "Factor, fundamental, futures, and market-structure models tested against real implementation constraints.",
                    icon: "rules",
                },
                {
                    title: "Portfolio systems",
                    body: "Position sizing, rebalancing, exposure control, liquidity, concentration, and drawdown-aware portfolio design.",
                    icon: "sliders",
                },
                {
                    title: "Trading and execution logic",
                    body: "Frameworks that connect model decisions to timing, costs, liquidity limits, broker workflow, and reconciliation.",
                    icon: "activity",
                },
                {
                    title: "Risk governance",
                    body: "Model validation, degradation monitoring, kill rules, and boundaries between research output and discretionary implementation.",
                    icon: "shield-check",
                },
                {
                    title: "Data infrastructure",
                    body: "Clean market, fundamental, intraday, and operational data used to support research, monitoring, and review.",
                    icon: "database",
                },
            ],
            strategyFamiliesTitle: "Strategy families",
            strategyFamiliesIntro:
                "The ASC platform is broader than one factor model or one asset class. Each strategy family must earn its place through evidence, implementation realism, and ongoing monitoring.",
            strategyFamilies: [
                {
                    title: "VN30F / Systematic trading systems",
                    body: "Rules-based futures systems designed around official model decisions, execution windows, broker controls, and post-trade reconciliation.",
                    icon: "activity",
                },
                {
                    title: "Systematic equity models",
                    body: "Vietnam equity models using valuation, quality, momentum, liquidity, and portfolio-construction discipline.",
                    icon: "skyline",
                },
                {
                    title: "Fundamental / STCV frameworks",
                    body: "Data-driven fundamental ranking and valuation frameworks for listed Vietnamese companies.",
                    icon: "building",
                },
                {
                    title: "Macro and risk overlays",
                    body: "Portfolio-level regime, liquidity, correlation, and drawdown frameworks designed to guide risk exposure.",
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
                "The objective is clear: turn market evidence into disciplined capital-allocation decisions that institutional allocators can understand, monitor, and challenge.",
            processTitle: "Investment architecture",
            processIntro: "We implement the framework as a research and engineering process behind every ASC strategy family.",
            process: [
                { label: "Data foundation", body: "Collect, clean, and monitor market, company, intraday, and operational data with clear lineage and quality checks." },
                { label: "Research engines", body: "Build models across factors, fundamentals, futures, and market structure, then test them against real implementation constraints." },
                { label: "Portfolio and execution systems", body: "Translate model outputs into sizing, rebalancing, exposure, liquidity, cost, and execution rules." },
                { label: "Risk governance", body: "Monitor drawdowns, concentration, liquidity, model drift, degradation, and boundaries with licensed partners." },
            ],
            methodsTitle: "How the system works",
            methodsIntro: "ASC’s work turns market evidence into governed investment decisions that can be reviewed before and after implementation.",
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
                        "Portfolio rules cover sizing, turnover, concentration, exposure, rebalancing, and when a model output should be reduced, paused, or reviewed.",
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
                        "Research, advisory output, and discretionary implementation remain clearly separated.",
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
                { label: "Exposure controls", desc: "Monitor market sensitivity and adjust when risk moves outside mandate ranges.", color: "#94A3B8" },
                { label: "Drawdown ranges and responses", desc: "Track distance from peaks; reduce risk gradually when losses breach agreed thresholds.", color: "#D97706" },
            ],
            edge: {
                title: "Our edge in Vietnam",
                bullets: [
                    "Vietnam-focused systems calibrated to local data, liquidity, market structure, and regulation.",
                    "Research engines that include factor, fundamental, futures, and market-structure work.",
                    "Execution realism built into strategy design instead of treated as an afterthought.",
                    "Implementation through licensed partners with clear role boundaries and reporting responsibilities.",
                ],
            },
            expectations: {
                title: "What investors can expect – and what they should not",
                goals: [
                    "A documented, rules-based investment system rather than narrative-led decision making.",
                    "Explicit risk rules for drawdown, liquidity, concentration, execution, and model review.",
                    "A process that investors and licensed partners can understand, monitor, and challenge.",
                ],
                disclaimer:
                    "We do not promise outperformance in every period or protection from all market declines. Vietnam is a volatile market and equity investing involves the risk of capital loss. Our commitment is to a disciplined, transparent framework that treats risk management and drawdowns as central design problems, not marketing language.",
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
                    "Backtests are tools, not promises—they help us and our investors understand sensitivity to different environments but are not forecasts. All results are accompanied by disclosures on methodology, assumptions, and limitations.",
                reportingTitle: "Access to detailed reporting",
                reportingBody:
                    "Institutional and professional investors can request detailed performance, risk, and attribution packs via ASC’s licensed partners, subject to product-level terms and governance requirements.",
            },
        },
        solutions: {
            title: "Client Solutions",
            intro: "Investment-system design and partner support for institutional allocators.",
        },
        partnerships: {
            intro:
                "ASC works with licensed investment partners by providing research, portfolio-design support, and non-discretionary model outputs within the applicable regulatory framework.",
            paragraphs: [
                "ASC works with licensed investment managers that provide regulated products and bespoke mandates, handle client onboarding and ongoing relationships, and implement portfolios with full regulatory reporting.",
                "Clients contract directly with the relevant licensed partner. That entity is responsible for ensuring suitability and compliance for each product or mandate.",
                "Aureus Sigma Capital is a founder-led systematic investment systems company focused on Vietnam’s capital markets. We design and maintain research engines, portfolio-construction rules, execution-aware models, and risk analytics for strategies accessed through licensed partners.",
                "ASC does not manage client accounts or distribute products. Implementation is carried out exclusively by licensed partners.",
                "Under each partnership arrangement, responsibilities are clearly defined: ASC develops and maintains research and model infrastructure, while licensed partners decide how and where to deploy strategies, manage day-to-day portfolios under their licences, and deliver regulated reporting and client service. This separation supports institutional governance standards.",
                "As Vietnam’s markets deepen, ASC and its licensed partners plan to broaden the range of mandates and products that can incorporate ASC’s systems, while keeping research quality, risk control, and regulatory robustness at the centre.",
                "For investors interested in accessing ASC-supported strategies, please contact an ASC licensed partner directly, or reach out to ASC for an introduction and more detail on how the framework is applied.",
            ],
            roles: [
                {
                    roleLabel: "The Capital",
                    title: "Investors",
                    bullets: ["Eligible local or cross-border investors", "Access regulated products via ASC’s licensed partners"],
                },
                {
                    roleLabel: "The Manager",
                    title: "Licensed partners",
                    bullets: ["Licensed managers under local regulation", "Client onboarding and servicing", "Portfolio implementation & reporting"],
                },
                {
                    roleLabel: "The Architect",
                    title: "Aureus Sigma Capital",
                    bullets: ["Builds investment-system infrastructure", "Provides research and model outputs", "Monitors discipline against documented guardrails"],
                },
            ],
            cta: "View licensed partners",
            mechanicsTitle: "How the partnership works",
            investorNoticeTitle: "Important for Investors",
        },
        clientSolutions: {
            title: "Client Solutions",
            intro:
                "ASC’s framework supports mandates run by ASC’s licensed partners. We help structure solutions around specific objectives rather than leading with products.",
            objectivesTitle: "Solutions by client objective",
            objectives: [
                {
                    title: "Corporate treasuries",
                    body:
                        "For balance sheets evaluating Vietnam market exposure, ASC supports licensed partners with rules-based portfolio design, liquidity review, and risk-control infrastructure.",
                },
                {
                    title: "Pension funds and insurance portfolios",
                    body:
                        "For long-horizon capital, ASC’s systems help licensed partners explain portfolio behaviour through exposure, drawdown, liquidity, and model-monitoring metrics.",
                },
                {
                    title: "Family offices and HNW investors",
                    body:
                        "For sophisticated private capital, ASC’s rules-based research can support disciplined Vietnam allocation discussions through licensed partners, with clear documentation of process and risk controls.",
                },
            ],
            mandateTitle: "Mandate design parameters",
            mandateIntro:
                "Within the constraints of local regulation and each manager’s licences, strategies built on ASC’s framework can be tailored along dimensions such as:",
            mandateBullets: [
                "Target volatility and tracking-error ranges.",
                "Permissible sector and concentration limits.",
                "The role of cash and index futures in managing overall market exposure.",
                "Environmental, social, or governance screens where requested and feasible under local data availability.",
            ],
            mandateNote:
                "Minimum investment sizes, fee structures, and liquidity terms are set at the product or mandate level by licensed managers. ASC works with those partners to keep portfolio construction and reporting aligned with agreed mandate objectives.",
            reportingTitle: "Reporting and transparency",
            reportingBody:
                "Institutional clients receive reporting from the licensed manager. ASC supports this by supplying analytics, diagnostics, and commentary on system behaviour, especially during stressed markets.",
        },
        insights: {
            sectionTitle: "Insights",
            intro:
                "We publish concise notes for investors and partners who want to understand Vietnam market structure, investment systems, risk governance, and systematic strategy development.",
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
                        "FIDES Vietnam and ASC signed an MOU at the FIDES office in HCMC on December 19, 2025 to cooperate on investment mandate execution, product development, and research within applicable regulations.",
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
            intro: "Founder-led. Systematic. Built for Vietnam’s capital markets.",
            details: [
                "Aureus Sigma Capital (ASC) is a founder-led systematic investment systems company for Vietnam’s capital markets. We build research, data, portfolio-construction, execution-aware, and risk-control infrastructure for disciplined capital allocation.",
                "ASC’s role is to turn market evidence into governed investment decision systems. We collect, clean, and organize data; build research engines across factors, fundamentals, futures, and market structure; and translate model outputs into portfolio and risk rules that can be reviewed.",
                "ASC does not directly manage client accounts or distribute investment products. Licensed partners handle onboarding, suitability, execution, reporting, and regulated client-facing work where applicable. ASC focuses on research, model design, risk oversight, and partner coordination.",
            ],
            factSheet: {
                title: "Fact Sheet",
                items: [
                    { label: "Founded", value: "2025" },
                    { label: "Focus", value: "Systematic investment systems for Vietnam" },
                    { label: "Implementation", value: "Via ASC’s licensed partners" },
                ]
            },
            highlights: [
                { label: "Systematic discipline", body: "Rules-based research and governance tailored to Vietnam’s capital markets.", icon: "rules" },
                { label: "Investment systems", body: "Research, portfolio, execution, data, and risk-control infrastructure.", icon: "network" },
                { label: "Licensed partners", body: "Implemented via ASC’s licensed partners.", icon: "shield-check" },
            ],
            bioDetails: [
                {
                    name: "Duc (Huy) Nguyen",
                    title: "Founder & CEO",
                    body: [
                        "Duc is the founding architect of Aureus Sigma Capital’s systematic investment systems. He leads ASC’s research, model design, risk oversight, and partner coordination.",
                        "His career has been anchored in Vietnam’s capital markets for more than two decades, including leadership roles as CEO of Techcom Capital, Managing Director of Techcom Securities and Chief Financial Officer of Orient Commercial Bank (OCB). Earlier, he led corporate finance and financial advisory at Deloitte Vietnam and later served as group CFO and investment head for Vietnamese and regional investment and real-estate platforms, applying quantitative models, scenario analysis and disciplined capital-allocation frameworks through multiple cycles.",
                        "ASC is founder-led. Duc keeps the firm focused on documented rules, local data quality, and clear risk controls while licensed partners handle regulated client-facing work where applicable.",
                    ],
                },
            ],
            teamTitle: "Leadership",
        },
        team: {
            founder: "Duc (Huy) Nguyen — Founder & CEO",
            founderBio:
                "Founder and CEO of ASC. Former CEO of Techcom Capital and Managing Director of Techcom Securities, with earlier leadership roles at Deloitte Vietnam and regional investment groups. Brings 20+ years in Vietnam’s capital markets, now focused on systematic investment systems and risk-aware process design.",
        },
        contact: {
            title: "Contact",
            desc:
                "For institutional or professional inquiries about ASC’s investment-system research, portfolio-design support, or licensed-partner collaboration, please use the form below.",
            primaryCta: "Submit inquiry",
            emailLabel: "Email",
            email: "contact@ascap.vn",
            addressLabel: "Offices",
            addresses: [
                "15 Le Thanh Ton, Saigon Ward, HCMC",
                "21 Vo Truong Toan, An Khanh Ward, HCMC"
            ],
            note:
                "ASC does not offer retail investment advice through this website.",
        },
        legal: {
            body:
                "This website is for informational purposes only. It does not constitute an offer, solicitation, recommendation, or investment advice. ASC provides research, portfolio-design support, and non-discretionary model outputs to licensed partners. ASC does not offer retail investment advice, custody assets, or promise returns through this website.",
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
            solutions: "Giải pháp",
            partnerships: "Đối tác",
            insights: "Góc nhìn",
            about: "Giới thiệu",
            contact: "Liên hệ",
        },
        hero: {
            whyAsc: "Tại sao chọn ASC",
            title: "Hệ thống đầu tư cho thị trường vốn Việt Nam.",
            subtitle:
                "Aureus Sigma Capital xây dựng hạ tầng nghiên cứu, xây dựng danh mục, giao dịch, thực thi và kiểm soát rủi ro dựa trên bằng chứng thị trường để hỗ trợ phân bổ vốn có kỷ luật.",
            ctas: [
                { label: "Khám phá khung đầu tư", to: "/what-we-do" },
                { label: "Liên hệ tổ chức", to: "/contact" },
            ],
            stats: [
                { label: "Thành lập", value: "2025", icon: "clock" },
                { label: "Thị trường", value: "Thị trường vốn Việt Nam", icon: "map" },
                { label: "Vai trò", value: "Hạ tầng nghiên cứu và mô hình", icon: "shield-check" },
            ],
            highlights: [
                { label: "Động cơ nghiên cứu", body: "Mô hình dựa trên quy tắc để chuyển bằng chứng thành quyết định đầu tư có thể lặp lại.", icon: "rules" },
                { label: "Hệ thống danh mục", body: "Quy tắc tỷ trọng, tái cân bằng, kiểm soát phơi nhiễm và thiết kế phù hợp thực thi.", icon: "sliders" },
                { label: "Quản trị rủi ro", body: "Kiểm soát sụt giảm, thanh khoản, suy giảm mô hình và ranh giới vai trò trong quy trình.", icon: "shield" },
            ],
        },
        whatWeDo: {
            sectionTitle: "Khung đầu tư",
            intro:
                "ASC xây dựng các hệ thống đầu tư có kỷ luật cho thị trường vốn Việt Nam. Công việc này kết nối dữ liệu, nghiên cứu, thiết kế danh mục, logic giao dịch, thực thi thực tế và quản trị rủi ro thành một quy trình ra quyết định có thể lặp lại.",
            capabilitiesTitle: "ASC xây dựng gì",
            capabilitiesIntro:
                "ASC không phải nền tảng gợi ý cổ phiếu hay quỹ bán hàng bằng câu chuyện. Chúng tôi xây dựng hạ tầng đứng sau các quyết định đầu tư có quản trị.",
            capabilities: [
                {
                    title: "Động cơ nghiên cứu",
                    body: "Mô hình nhân tố, cơ bản, hợp đồng tương lai và cấu trúc thị trường được kiểm thử với các ràng buộc thực thi thực tế.",
                    icon: "rules",
                },
                {
                    title: "Hệ thống danh mục",
                    body: "Quy tắc tỷ trọng, tái cân bằng, phơi nhiễm, thanh khoản, tập trung và thiết kế danh mục có ý thức về sụt giảm.",
                    icon: "sliders",
                },
                {
                    title: "Logic giao dịch và thực thi",
                    body: "Khung kết nối quyết định mô hình với thời điểm giao dịch, chi phí, thanh khoản, quy trình môi giới và đối soát.",
                    icon: "activity",
                },
                {
                    title: "Quản trị rủi ro",
                    body: "Thẩm định mô hình, giám sát suy giảm, quy tắc dừng và ranh giới giữa đầu ra nghiên cứu và triển khai có thẩm quyền.",
                    icon: "shield-check",
                },
                {
                    title: "Hạ tầng dữ liệu",
                    body: "Dữ liệu thị trường, cơ bản, trong ngày và vận hành được làm sạch để hỗ trợ nghiên cứu, giám sát và rà soát.",
                    icon: "database",
                },
            ],
            strategyFamiliesTitle: "Nhóm chiến lược",
            strategyFamiliesIntro:
                "Nền tảng ASC rộng hơn một mô hình nhân tố hoặc một loại tài sản. Mỗi nhóm chiến lược phải chứng minh giá trị qua bằng chứng, tính khả thi khi thực thi và giám sát liên tục.",
            strategyFamilies: [
                {
                    title: "VN30F / Hệ thống giao dịch có quy tắc",
                    body: "Hệ thống hợp đồng tương lai dựa trên quy tắc, xoay quanh quyết định mô hình chính thức, khung giờ thực thi, kiểm soát môi giới và đối soát sau giao dịch.",
                    icon: "activity",
                },
                {
                    title: "Mô hình cổ phiếu hệ thống",
                    body: "Mô hình cổ phiếu Việt Nam dùng định giá, chất lượng, động lượng, thanh khoản và kỷ luật xây dựng danh mục.",
                    icon: "skyline",
                },
                {
                    title: "Khung cơ bản / STCV",
                    body: "Khung xếp hạng cơ bản và định giá dựa trên dữ liệu cho doanh nghiệp niêm yết Việt Nam.",
                    icon: "building",
                },
                {
                    title: "Lớp phủ vĩ mô và rủi ro",
                    body: "Khung cấp danh mục về chế độ thị trường, thanh khoản, tương quan và sụt giảm để định hướng mức độ rủi ro.",
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
                "Mục tiêu rõ ràng: chuyển bằng chứng thị trường thành các quyết định phân bổ vốn có kỷ luật mà nhà đầu tư tổ chức có thể hiểu, giám sát và đặt câu hỏi.",
            processTitle: "Kiến trúc đầu tư",
            processIntro: "Chúng tôi triển khai khung này như một quy trình nghiên cứu và kỹ thuật đứng sau từng nhóm chiến lược của ASC.",
            process: [
                { label: "Nền tảng dữ liệu", body: "Thu thập, làm sạch và giám sát dữ liệu thị trường, doanh nghiệp, trong ngày và vận hành với nguồn gốc và kiểm tra chất lượng rõ ràng." },
                { label: "Động cơ nghiên cứu", body: "Xây dựng mô hình về nhân tố, cơ bản, hợp đồng tương lai và cấu trúc thị trường, sau đó kiểm thử với các ràng buộc thực thi thực tế." },
                { label: "Hệ thống danh mục và thực thi", body: "Chuyển đầu ra mô hình thành quy tắc tỷ trọng, tái cân bằng, phơi nhiễm, thanh khoản, chi phí và thực thi." },
                { label: "Quản trị rủi ro", body: "Giám sát sụt giảm, tập trung, thanh khoản, suy giảm mô hình và ranh giới với đối tác được cấp phép." },
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
                        "Nghiên cứu, đầu ra tư vấn và triển khai có thẩm quyền được tách bạch rõ ràng.",
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
                    "Triển khai qua đối tác được cấp phép với ranh giới vai trò và trách nhiệm báo cáo rõ ràng.",
                ],
            },
            expectations: {
                title: "Nhà đầu tư có thể kỳ vọng gì – và không nên kỳ vọng gì",
                goals: [
                    "Một hệ thống đầu tư được văn bản hóa và dựa trên quy tắc, không phải quyết định theo câu chuyện thị trường.",
                    "Quy tắc rủi ro rõ ràng cho sụt giảm, thanh khoản, tập trung, thực thi và rà soát mô hình.",
                    "Một quy trình mà nhà đầu tư và đối tác được cấp phép có thể hiểu, giám sát và đặt câu hỏi.",
                ],
                disclaimer:
                    "Chúng tôi không cam kết vượt trội trong mọi giai đoạn hay tránh hoàn toàn các đợt giảm của thị trường. Việt Nam là thị trường có biến động cao và đầu tư cổ phiếu luôn tiềm ẩn rủi ro mất vốn. Điều chúng tôi cam kết là một khung đầu tư có kỷ luật, rõ ràng — nơi quản trị rủi ro và kiểm soát mức sụt giảm được đặt làm nguyên tắc cốt lõi ngay từ đầu, chứ không chỉ là lời nói suông.",
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
                    "Tỷ số Sharpe (lợi nhuận trên mỗi đơn vị rủi ro) và Information ratio (hiệu quả vượt trội so với benchmark).",
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
                    "Backtest là công cụ, không phải lời hứa—chúng giúp chúng tôi và nhà đầu tư hiểu được độ nhạy đối với các môi trường khác nhau nhưng không phải là dự báo. Tất cả kết quả đều đi kèm với các công bổ về phương pháp luận, giả định và hạn chế.",
                reportingTitle: "Tiếp cận báo cáo chi tiết",
                reportingBody:
                    "Các nhà đầu tư tổ chức và chuyên nghiệp có thể yêu cầu các bộ báo cáo chi tiết về hiệu suất, rủi ro và phân bổ thông qua các đối tác được cấp phép của ASC, tùy thuộc vào các điều khoản cấp sản phẩm và yêu cầu quản trị.",
            },
        },
        solutions: {
            title: "Giải pháp cho Khách hàng",
            intro: "Thiết kế hệ thống đầu tư và hỗ trợ đối tác cho nhà đầu tư tổ chức.",
        },
        partnerships: {
            intro:
                "ASC làm việc với các đối tác đầu tư được cấp phép bằng cách cung cấp nghiên cứu, hỗ trợ thiết kế danh mục và đầu ra mô hình không mang tính tùy nghi trong khuôn khổ pháp luật hiện hành.",
            paragraphs: [
                "ASC hợp tác với các nhà quản lý đầu tư được cấp phép. Các đối tác này cung cấp sản phẩm được quản lý và ủy thác riêng biệt, tiếp nhận và duy trì quan hệ khách hàng, đồng thời triển khai danh mục với báo cáo tuân thủ đầy đủ.",
                "Khách hàng ký kết hợp đồng trực tiếp với đối tác được cấp phép phù hợp. Đơn vị đó chịu trách nhiệm đảm bảo sự phù hợp và tuân thủ cho từng sản phẩm hoặc ủy thác.",
                "Aureus Sigma Capital là công ty hệ thống đầu tư do nhà sáng lập dẫn dắt, tập trung vào thị trường vốn Việt Nam. Chúng tôi thiết kế động cơ nghiên cứu, quy tắc xây dựng danh mục, mô hình có ý thức thực thi và phân tích rủi ro cho các chiến lược được tiếp cận qua đối tác được cấp phép.",
                "ASC không quản lý tài khoản khách hàng hoặc phân phối sản phẩm. Việc triển khai được thực hiện độc quyền bởi các đối tác được cấp phép của ASC.",
                "Trong mỗi thỏa thuận hợp tác, trách nhiệm được phân định rõ ràng. ASC phát triển và duy trì hạ tầng nghiên cứu và mô hình. Các đối tác được cấp phép quyết định cách triển khai chiến lược, quản lý danh mục theo giấy phép của mình, và cung cấp dịch vụ khách hàng cùng báo cáo pháp lý.",
                "Khi thị trường Việt Nam phát triển sâu rộng hơn, ASC và các đối tác được cấp phép dự kiến mở rộng phạm vi các ủy thác và sản phẩm có thể tích hợp hệ thống của ASC, đồng thời giữ chất lượng nghiên cứu, kiểm soát rủi ro và sự vững chắc về pháp lý làm trọng tâm.",
                "Đối với nhà đầu tư quan tâm đến chiến lược có hỗ trợ bởi ASC, vui lòng liên hệ trực tiếp với đối tác được cấp phép của ASC, hoặc liên hệ với ASC để được giới thiệu và biết thêm chi tiết về cách khung đầu tư được áp dụng.",
            ],
            roles: [
                {
                    roleLabel: "Vốn",
                    title: "Nhà đầu tư",
                    bullets: ["Nhà đầu tư đủ điều kiện trong hoặc ngoài nước", "Tiếp cận sản phẩm do các đối tác được cấp phép của ASC quản lý"],
                },
                {
                    roleLabel: "Quản Lý",
                    title: "Đối tác được cấp phép",
                    bullets: ["Nhà quản lý được cấp phép", "Tiếp nhận và phục vụ khách hàng", "Triển khai & Báo cáo danh mục"],
                },
                {
                    roleLabel: "Kiến Trúc",
                    title: "Aureus Sigma Capital",
                    bullets: ["Xây dựng hạ tầng hệ thống đầu tư", "Cung cấp nghiên cứu và đầu ra mô hình", "Giám sát kỷ luật theo ranh giới đã văn bản hóa"],
                },
            ],
            cta: "Xem đối tác được cấp phép",
            mechanicsTitle: "Về đối tác được cấp phép",
            investorNoticeTitle: "Cho nhà đầu tư",
        },
        clientSolutions: {
            title: "Giải pháp cho Khách hàng",
            intro:
                "Khung đầu tư của ASC hỗ trợ các ủy thác do đối tác được cấp phép của ASC quản lý. Chúng tôi giúp cấu trúc giải pháp xoay quanh mục tiêu cụ thể thay vì dẫn dắt bằng sản phẩm.",
            objectivesTitle: "Giải pháp theo mục tiêu khách hàng",
            objectives: [
                {
                    title: "Khối Ngân quỹ Doanh nghiệp",
                    body:
                        "Dành cho các doanh nghiệp đang đánh giá phân bổ vào thị trường Việt Nam, ASC hỗ trợ đối tác được cấp phép bằng thiết kế danh mục dựa trên quy tắc, rà soát thanh khoản và hạ tầng kiểm soát rủi ro.",
                },
                {
                    title: "Quỹ Hưu trí & Danh mục Bảo hiểm",
                    body:
                        "Dành cho nguồn vốn dài hạn, hệ thống của ASC giúp đối tác được cấp phép giải thích hành vi danh mục qua phơi nhiễm, sụt giảm, thanh khoản và chỉ số giám sát mô hình.",
                },
                {
                    title: "Quản lý Gia sản",
                    body:
                        "Dành cho vốn tư nhân chuyên nghiệp, nghiên cứu dựa trên quy tắc của ASC có thể hỗ trợ trao đổi về phân bổ Việt Nam thông qua đối tác được cấp phép, với quy trình và kiểm soát rủi ro được văn bản hóa.",
                },
            ],
            mandateTitle: "Các tham số thiết kế ủy thác",
            mandateIntro:
                "Trong khuôn khổ quy định pháp luật và giấy phép của từng nhà quản lý, các chiến lược xây dựng trên nền tảng ASC có thể được tùy chỉnh theo các yếu tố như:",
            mandateBullets: [
                "Mức biến động mục tiêu và phạm vi sai lệch theo dõi (tracking error).",
                "Giới hạn ngành và mức độ tập trung cho phép.",
                "Vai trò của tiền mặt và hợp đồng tương lai chỉ số trong quản lý mức độ tiếp xúc thị trường tổng thể.",
                "Bộ lọc môi trường, xã hội hoặc quản trị (ESG) khi có yêu cầu và khả thi theo nguồn dữ liệu sẵn có tại địa phương.",
            ],
            mandateNote:
                "Quy mô đầu tư tối thiểu, cơ cấu phí và điều khoản thanh khoản được xác định ở cấp sản phẩm hoặc ủy thác bởi các nhà quản lý được cấp phép. ASC phối hợp với các đối tác để việc xây dựng danh mục và báo cáo phù hợp với mục tiêu ủy thác đã thống nhất.",
            reportingTitle: "Báo cáo và rõ ràng",
            reportingBody:
                "Khách hàng tổ chức nhận báo cáo từ nhà quản lý được cấp phép. ASC hỗ trợ quá trình này bằng cách cung cấp phân tích, chẩn đoán và bình luận về hành vi hệ thống, đặc biệt trong các giai đoạn thị trường biến động mạnh.",
        },
        insights: {
            sectionTitle: "Góc nhìn",
            intro: "Chúng tôi xuất bản các ghi chú ngắn gọn cho nhà đầu tư và đối tác muốn hiểu cấu trúc thị trường Việt Nam, hệ thống đầu tư, quản trị rủi ro và phát triển chiến lược hệ thống.",
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
                        "FIDES Việt Nam và ASC ký MOU tại văn phòng FIDES ở TP. HCM ngày 19/12/2025 nhằm hợp tác trong thực hiện ủy thác đầu tư, phát triển sản phẩm và nghiên cứu phân tích trong khuôn khổ pháp luật hiện hành.",
                    icon: "handshake",
                    image: "/assets/others/fides-asc-mou-document-exchange-16x9.jpg",
                },
                {
                    category: "Góc nhìn",
                    title: "Cơ sở cho Đầu tư theo Tiêu chí Hệ thống tại Việt Nam",
                    slug: "why-we-use-rules-instead-of-gut-feeling",
                    summary:
                        "Thị trường cổ phiếu Việt Nam có những đặc thù riêng về cấu trúc vi mô. Chúng tôi thảo luận lý do tại sao phương pháp đầu tư hệ thống, dựa trên tiêu chí cụ thể có thể hỗ trợ ra quyết định nhất quán hơn so với giao dịch theo cảm tính.",
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
                "Do nhà sáng lập dẫn dắt. Có hệ thống. Xây dựng cho thị trường vốn Việt Nam.",
            details: [
                "Aureus Sigma Capital (ASC) là công ty hệ thống đầu tư do nhà sáng lập dẫn dắt cho thị trường vốn Việt Nam. Chúng tôi xây dựng hạ tầng nghiên cứu, dữ liệu, xây dựng danh mục, thực thi có ý thức và kiểm soát rủi ro để hỗ trợ phân bổ vốn có kỷ luật.",
                "Vai trò của ASC là chuyển bằng chứng thị trường thành các hệ thống ra quyết định đầu tư có quản trị. Chúng tôi thu thập, làm sạch và tổ chức dữ liệu; xây dựng động cơ nghiên cứu về nhân tố, cơ bản, hợp đồng tương lai và cấu trúc thị trường; rồi chuyển đầu ra mô hình thành quy tắc danh mục và rủi ro có thể rà soát.",
                "ASC không trực tiếp quản lý tài khoản khách hàng hay phân phối sản phẩm đầu tư. Đối tác được cấp phép xử lý việc tiếp nhận khách hàng, đánh giá phù hợp, thực thi giao dịch, báo cáo và các công việc tiếp xúc khách hàng thuộc phạm vi được quản lý khi áp dụng. ASC tập trung vào nghiên cứu, thiết kế mô hình, giám sát rủi ro và phối hợp với đối tác.",
            ],
            factSheet: {
                title: "Thông tin tổng quan",
                items: [
                    { label: "Năm thành lập", value: "2025" },
                    { label: "Trọng tâm", value: "Hệ thống đầu tư cho Việt Nam" },
                    { label: "Triển khai", value: "Thông qua đối tác được cấp phép của ASC" },
                ]
            },
            highlights: [
                { label: "Kỷ luật hệ thống", body: "Nghiên cứu và quản trị dựa trên quy tắc, được tinh chỉnh cho thị trường vốn Việt Nam.", icon: "rules" },
                { label: "Hệ thống đầu tư", body: "Hạ tầng nghiên cứu, danh mục, thực thi, dữ liệu và kiểm soát rủi ro.", icon: "network" },
                { label: "Đối tác được cấp phép", body: "Triển khai thông qua các đối tác được cấp phép của ASC.", icon: "shield-check" },
            ],
            bioDetails: [
                {
                    name: "Nguyễn Huy Đức",
                    title: "Nhà sáng lập kiêm Tổng Giám đốc",
                    body: [
                        "Ông Đức là người sáng lập và xây dựng các hệ thống đầu tư của Aureus Sigma Capital. Ông dẫn dắt nghiên cứu, thiết kế mô hình, giám sát rủi ro và phối hợp với các đối tác của ASC.",
                        "Sự nghiệp của ông gắn bó với thị trường vốn Việt Nam hơn hai mươi năm, trải qua các vị trí lãnh đạo cấp cao như Tổng Giám đốc Techcom Capital, Tổng Giám đốc Techcom Securities và Giám đốc Tài chính Ngân hàng Phương Đông (OCB). Trước đó, ông phụ trách mảng tài chính doanh nghiệp và tư vấn tài chính tại Deloitte Việt Nam, sau đó đảm nhiệm vị trí Giám đốc Tài chính tập đoàn kiêm Trưởng bộ phận Đầu tư cho các nền tảng đầu tư và bất động sản tại Việt Nam và khu vực, ứng dụng các mô hình định lượng, phân tích kịch bản và khung phân bổ vốn kỷ luật qua nhiều chu kỳ thị trường.",
                        "ASC là công ty do nhà sáng lập dẫn dắt. Ông Đức giữ trọng tâm của công ty vào quy tắc được văn bản hóa, chất lượng dữ liệu nội địa và kiểm soát rủi ro rõ ràng, trong khi đối tác được cấp phép xử lý các công việc tiếp xúc khách hàng thuộc phạm vi được quản lý khi áp dụng.",
                    ],
                },
            ],
            teamTitle: "Ban Lãnh đạo",
        },
        team: {
            founder: "Nguyễn Huy Đức — Nhà sáng lập kiêm Tổng Giám đốc",
            founderBio:
                "Nhà sáng lập kiêm Tổng Giám đốc ASC. Cựu CEO Techcom Capital và Giám đốc Khối Ngân hàng Đầu tư tại Techcom Securities; nguyên CFO Ngân hàng Phương Đông (OCB). Với hơn 20 năm kinh nghiệm tại thị trường vốn Việt Nam, ông tập trung vào hệ thống đầu tư và thiết kế quy trình có ý thức rủi ro.",
        },
        contact: {
            title: "Liên hệ",
            desc:
                "Nếu quý khách là tổ chức hoặc nhà đầu tư chuyên nghiệp muốn trao đổi về nghiên cứu hệ thống đầu tư, hỗ trợ thiết kế danh mục hoặc hợp tác với đối tác được cấp phép, vui lòng liên hệ qua biểu mẫu bên dưới.",
            primaryCta: "Gửi yêu cầu",
            emailLabel: "Email",
            email: "contact@ascap.vn",
            addressLabel: "Địa chỉ",
            addresses: [
                "15 Lê Thánh Tôn, Phường Sài Gòn, TP. HCM",
                "21 Võ Trường Toản, Phường An Khánh, TP. HCM"
            ],
            note: "ASC không cung cấp tư vấn đầu tư bán lẻ thông qua trang web này.",
        },
        legal: {
            body:
                "Trang web này chỉ nhằm mục đích cung cấp thông tin. Đây không phải là lời chào bán, mời gọi, khuyến nghị hoặc tư vấn đầu tư. ASC cung cấp nghiên cứu, hỗ trợ thiết kế danh mục và đầu ra mô hình không mang tính tùy nghi cho các đối tác được cấp phép. ASC không cung cấp tư vấn đầu tư bán lẻ, không lưu ký tài sản và không cam kết lợi nhuận thông qua trang web này.",
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
