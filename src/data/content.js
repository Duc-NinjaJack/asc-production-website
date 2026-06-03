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
            title: "Proprietary systematic trading in Vietnam’s capital markets.",
            subtitle:
                "Aureus Sigma Capital is a proprietary systematic trading firm — disciplined research, execution, and risk control in Vietnam's capital markets.",
            brief:
                "Aureus Sigma Capital is a proprietary trading firm — disciplined research, execution, and risk control in Vietnam's capital markets.",
            ctas: [
                { label: "How we work", to: "/what-we-do" },
                { label: "Partnerships", to: "/partnerships" },
            ],
            stats: [
                { label: "Founded", value: "2025", icon: "clock" },
                { label: "Market", value: "Vietnam capital markets", icon: "map" },
                { label: "Role", value: "Own-capital trading", icon: "shield-check" },
            ],
            highlights: [
                { label: "Proprietary discipline", body: "ASC trades under its own research, execution, and risk process. This website does not offer products.", icon: "rules" },
                { label: "Research discipline", body: "Ideas earn their place through data, testing, and review.", icon: "database" },
                { label: "Execution discipline", body: "Trading decisions are built around liquidity, timing, and cost.", icon: "activity" },
                { label: "Risk control", body: "Limits are set before risk is increased.", icon: "shield" },
            ],
        },
        whatWeDo: {
            sectionTitle: "How ASC works",
            intro:
                "ASC trades proprietary capital in Vietnam's markets. This page explains our principles; strategy details and trading signals stay private.",
            howAscWorksTitle: "How ASC works",
            howAscWorksIntro:
                "ASC trades proprietary capital in Vietnam's markets. This page explains our principles; strategy details and trading signals stay private.",
            howAscWorksItems: [
                {
                    title: "Research",
                    body: "We study Vietnam's markets through data, market structure, and repeatable evidence. Ideas earn their place through testing, not conviction.",
                    icon: "rules",
                },
                {
                    title: "Execution",
                    body: "We trade our own book with defined rules built around liquidity, timing, and cost. Discipline matters more than any single trade.",
                    icon: "process",
                },
                {
                    title: "Risk",
                    body: "We monitor drawdown, exposure, and concentration, with limits set in advance and enforced before risk is increased.",
                    icon: "shield",
                },
                {
                    title: "Review",
                    body: "Every strategy must survive live evidence, reconciliation, and ongoing monitoring. We measure ourselves on adherence, not outcomes.",
                    icon: "activity",
                },
            ],
            principles: [
                { label: "Rules-based", body: "Decisions are based on written rules, not ad hoc opinions or market stories." },
                { label: "Evidence-driven", body: "Research must be repeatable, tradable, risk-aware, and monitored after use." },
                { label: "Local by design", body: "The work reflects Vietnamese liquidity, regulation, and disclosure realities." },
                { label: "Risk-aware", body: "Drawdowns, liquidity, and behaviour are design inputs, not afterthoughts." },
            ],
            objective:
                "The objective is simple: turn market evidence into disciplined proprietary trading decisions that can be reviewed before and after implementation.",
            processTitle: "How the work is organized",
            processIntro: "ASC keeps the work in a clear sequence behind its own trading book.",
            process: [
                { label: "Research", body: "Collect, clean, and monitor market, company, intraday, and operating data with clear lineage and quality checks." },
                { label: "Testing", body: "Test ideas against costs, liquidity, timing, and implementation limits before they are trusted." },
                { label: "Trading", body: "Translate approved decisions into sizing, exposure, rebalancing, cost, and execution rules." },
                { label: "Risk review", body: "Monitor drawdowns, concentration, liquidity, model drift, and licensed-partner boundaries where relevant." },
            ],
            methodsTitle: "How the work is reviewed",
            methodsIntro: "ASC turns market evidence into trading decisions that can be reviewed before and after implementation.",
            blocks: [
                {
                    title: "Define the market",
                    body:
                        "We define liquidity, disclosure quality, timing constraints, and data requirements before an idea is considered realistic in Vietnam.",
                    icon: "database",
                },
                {
                    title: "Test the evidence",
                    body:
                        "Ideas are tested on market evidence, but they are not accepted unless they can survive costs, liquidity, timing, and monitoring rules.",
                    icon: "sliders",
                },
                {
                    title: "Set portfolio limits",
                    body:
                        "Portfolio rules cover sizing, turnover, concentration, exposure, rebalancing, and when a decision should be reduced, paused, or reviewed.",
                    icon: "compass",
                },
                {
                    title: "Risk control and review",
                    intro:
                        "Risk management is built into the work. We use several layers of review before a strategy is trusted:",
                    points: [
                        "Drawdown and concentration limits are defined before implementation.",
                        "Liquidity, costs, and execution timing are treated as design constraints.",
                        "Model drift and degradation are monitored after use.",
                        "ASC proprietary trading and regulated partner obligations remain clearly separated.",
                    ],
                    icon: "shield",
                },
            ],
            humanJudgement: {
                title: "Human judgement and data working together",
                intro: "Our process is quantitative, but not automation for its own sake. Judgement enters where it adds the most value:",
                steps: [
                    "Selecting and cleaning the underlying market and company data.",
                    "Choosing which evidence to use and how to combine it.",
                    "Setting portfolio and risk limits that reflect Vietnamese market structure.",
                    "Reviewing how the portfolio behaves across different environments.",
                ],
                note: "Day-to-day implementation follows written rules so responses are consistent and auditable while research evolves in the background.",
            },
            flow: [
                { label: "Evidence", desc: "Market, company, intraday, and operating data.", icon: "database" },
                { label: "Rules", desc: "Research rules for decision support.", icon: "rules" },
                { label: "Portfolio", desc: "Sizing, exposure, rebalancing, and execution-aware design.", icon: "sliders" },
                { label: "Governance", desc: "Monitoring, risk limits, review, and role boundaries.", icon: "shield-check" },
            ],
            comparison: {
                gutTitle: "Discretionary",
                gutDesc: "Subjective decisions often influenced by market noise.",
                rulesTitle: "Rules-based",
                rulesDesc: "Disciplined execution grounded in statistical validation.",
            },
            riskBands: [
                { label: "Diversification with limits", desc: "Meaningful number of names across sectors, with caps to avoid concentrated bets.", color: "#CBD5E1" },
                { label: "Exposure controls", desc: "Monitor market sensitivity and adjust when risk moves outside written risk ranges.", color: "#94A3B8" },
                { label: "Drawdown ranges and responses", desc: "Track distance from peaks; reduce risk gradually when losses breach agreed thresholds.", color: "#D97706" },
            ],
            edge: {
                title: "Vietnam focus",
                bullets: [
                    "Research calibrated to local data, liquidity, market structure, and regulation.",
                    "Market evidence tested against execution and risk constraints.",
                    "Execution realism treated as part of strategy design from the start.",
                    "Licensed partner collaboration remains available where regulated product or client-facing work is involved.",
                ],
            },
            expectations: {
                title: "What the process is designed to do — and not do",
                goals: [
                    "A documented, rules-based trading process rather than narrative-led decision making.",
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
                    "Exposure and concentration statistics across relevant risk dimensions.",
                ],
                historyTitle: "Observed and simulated history",
                historyIntro:
                    "Vietnam remains a developing market, so review work must separate historical simulation, paper observation, and implemented results:",
                history: [
                    "Historical simulations built from point-in-time Vietnamese data to show how rules may behave through different cycles and stress periods.",
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
            intro: "How ASC separates own-capital trading, partner collaboration and regulated client-facing obligations.",
        },
        partnerships: {
            intro:
                "ASC may collaborate with licensed investment partners where appropriate. In those arrangements, ASC's role stays limited to its own research and risk perspective; ASC does not run client portfolios.",
            paragraphs: [
                "ASC may collaborate with licensed investment partners where appropriate.",
                "In those arrangements, ASC's role stays limited to its own research and risk perspective; ASC does not run client portfolios.",
                "Licensed partners are responsible for regulated products and client-facing obligations under applicable law.",
                "ASC does not offer investment products directly to the public through this website, does not accept client assets through this website, and does not provide personalized investment advice through this website.",
                "ASC decides how to respond to professional inquiries and keeps its own research, execution, and risk role separate from regulated client-facing obligations.",
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
                    bullets: ["Regulated products where applicable", "Client-facing obligations under applicable law"],
                },
                {
                    roleLabel: "The Architect",
                    title: "Aureus Sigma Capital",
                    bullets: ["Trades its own capital", "Keeps research and risk perspective separate", "Does not run client portfolios"],
                },
            ],
            cta: "FIDES partnership note",
            mechanicsTitle: "How the partnership works",
            investorNoticeTitle: "Important information",
        },
        boundaries: {
            title: "Partnerships and boundaries",
            intro:
                "ASC’s website does not offer products or personalized advice. This page records how responsibilities are separated when ASC collaborates with licensed partners.",
            objectivesTitle: "Responsibility boundaries",
            objectives: [
                {
                    title: "ASC proprietary work",
                    body:
                        "ASC trades its own capital and keeps its research, execution, and risk process separate from client-facing work.",
                },
                {
                    title: "Licensed partner obligations",
                    body:
                        "Licensed partners handle regulated products and client-facing obligations under applicable law.",
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
                "Research perspective and risk context.",
                "Execution and review requirements.",
                "Monitoring cadence.",
                "Reporting inputs that the licensed partner may use under its own obligations.",
            ],
            discussionNote:
                "ASC does not set public product terms through this website. Regulated client-facing questions are handled under the relevant licensed partner's obligations.",
            reportingTitle: "Reporting and transparency",
            reportingBody:
                "ASC may provide analytics and diagnostics to a licensed partner. The licensed partner remains responsible for regulated reporting and client-facing communication.",
        },
        insights: {
            sectionTitle: "Insights",
            intro:
                "We publish concise notes for readers and partners who want to understand Vietnam market structure, disciplined trading, and risk governance.",
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
                        "FIDES Vietnam and ASC signed an MOU at the FIDES office in HCMC on December 19, 2025 covering partner cooperation within applicable law.",
                    icon: "handshake",
                    image: "/assets/others/fides-asc-mou-document-exchange-16x9.jpg",
                },
                {
                    category: "Perspectives",
                    title: "Why ASC Uses Rules Instead of Market Stories",
                    slug: "why-we-use-rules-instead-of-gut-feeling",
                    summary:
                        "Vietnam’s markets can move quickly. We discuss why written rules and evidence can support more consistent decision-making than discretionary trading.",
                    comingSoon: true,
                    icon: "compass",
                    image: "/assets/others/quant_office_dark_2.png",
                },
                {
                    category: "Perspectives",
                    title: "How ASC Handles Large Losses",
                    slug: "how-we-try-to-limit-big-losses",
                    summary:
                        "Preserving capital during tail events is critical to long-term compounding. We outline how written limits support more disciplined risk decisions.",
                    comingSoon: true,
                    icon: "shield",
                    image: "/assets/others/abstract_equity_curve_2.png",
                },
            ],
        },
        about: {
            title: "About Aureus Sigma Capital",
            intro: "Proprietary trading. Vietnam focus. Clear boundaries.",
            details: [
                "Aureus Sigma Capital (ASC) is a proprietary trading firm focused on Vietnam's capital markets.",
                "We trade our own capital and build the research, execution, and risk discipline behind every decision. We do not manage outside money and do not offer investment products through this website.",
                "Where regulated products are involved, ASC may collaborate with licensed partners, who are responsible for regulated client-facing obligations.",
            ],
            factSheet: {
                title: "Fact Sheet",
                items: [
                    { label: "Founded", value: "2025" },
                    { label: "Focus", value: "Proprietary trading in Vietnam" },
                    { label: "Website boundary", value: "No direct public product offering" },
                ]
            },
            highlights: [
                { label: "Research discipline", body: "Rules-based research tailored to Vietnam's capital markets.", icon: "rules" },
                { label: "Execution discipline", body: "Trading decisions are reviewed against liquidity, timing, and cost.", icon: "network" },
                { label: "Clear boundaries", body: "Licensed partners remain responsible for regulated client-facing work where relevant.", icon: "shield-check" },
            ],
            bioDetails: [
                {
                    name: "Duc (Huy) Nguyen",
                    title: "Founder & CEO",
                    body: [
                        "Duc leads ASC's research, model design, risk oversight, and partner coordination, with more than 20 years in Vietnam's capital markets.",
                        "His career has been anchored in Vietnam’s capital markets for more than two decades, including leadership roles as CEO of Techcom Capital, Managing Director of Techcom Securities and Chief Financial Officer of Orient Commercial Bank (OCB). Earlier, he led corporate finance and financial advisory at Deloitte Vietnam and later served as group CFO and investment head for Vietnamese and regional investment and real-estate platforms, applying quantitative models, scenario analysis and disciplined capital-allocation processes through multiple cycles.",
                        "He keeps the firm focused on documented rules, local data quality, execution discipline, and clear risk control, while licensed partners handle regulated, client-facing work where applicable.",
                    ],
                },
            ],
            teamTitle: "Leadership",
        },
        team: {
            founder: "Duc (Huy) Nguyen — Founder & CEO",
            founderBio:
                "Founder and CEO of ASC. Former CEO of Techcom Capital and Managing Director of Techcom Securities, with earlier leadership roles at Deloitte Vietnam and regional investment groups. Brings 20+ years in Vietnam’s capital markets, now focused on proprietary trading and risk-aware process design.",
        },
        contact: {
            title: "Contact",
            desc:
                "For professional inquiries, contact ASC at contact@ascap.vn.",
            primaryCta: "Submit inquiry",
            emailLabel: "Email",
            email: "contact@ascap.vn",
            addressLabel: "Offices",
            addresses: [
                "15 Le Thanh Ton, Saigon Ward, HCMC",
                "21 Vo Truong Toan, An Khanh Ward, HCMC"
            ],
            note:
                "ASC does not offer investment products directly to the public, accept client assets or provide personalized investment advice through this website.",
        },
        legal: {
            body:
                "Important information. This website is for informational purposes only. It does not constitute an offer to sell, or a solicitation of an offer to buy, any security, fund interest, investment product, or financial instrument in any jurisdiction. Aureus Sigma Capital (ASC) is a proprietary trading firm focused on Vietnam's capital markets, with proprietary research, execution, and risk processes. ASC does not offer investment products directly to the public through this website, does not accept client assets through this website, and does not provide personalized investment advice through this website. Where ASC collaborates with licensed partners, those partners are responsible for regulated products and client-facing obligations under applicable law. Any discussion of research, models, simulations, backtests, or strategy behaviour is illustrative and subject to limitations. Past, simulated, or modelled performance does not promise future results. All investment and trading activity involves risk, including possible loss of capital.",
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
            title: "Trade và đầu tư định lượng tại thị trường vốn Việt Nam.",
            subtitle:
                "Aureus Sigma Capital kết hợp dữ liệu, thuật toán, mô hình định lượng, thống kê, thực thi và quản trị rủi ro để ra quyết định có kỷ luật.",
            ctas: [
                { label: "Cách ASC vận hành", to: "/what-we-do" },
                { label: "Liên hệ", to: "/contact" },
            ],
            stats: [
                { label: "Thành lập", value: "2025", icon: "clock" },
                { label: "Thị trường", value: "Thị trường vốn Việt Nam", icon: "map" },
                { label: "Vai trò", value: "Trade và đầu tư định lượng", icon: "shield-check" },
            ],
            highlights: [
                { label: "Thuật toán và dữ liệu", body: "ASC kết hợp dữ liệu, thuật toán và thống kê để hỗ trợ quyết định có kỷ luật.", icon: "rules" },
                { label: "Kỷ luật nghiên cứu", body: "Ý tưởng phải được kiểm chứng bằng dữ liệu, thử nghiệm và rà soát.", icon: "database" },
                { label: "Kỷ luật thực thi", body: "Quyết định giao dịch được xây dựng quanh thanh khoản, thời điểm và chi phí.", icon: "activity" },
                { label: "Kiểm soát rủi ro", body: "Giới hạn được đặt ra trước khi tăng rủi ro.", icon: "shield" },
            ],
        },
        whatWeDo: {
            sectionTitle: "Cách ASC vận hành",
            intro:
                "ASC trade và đầu tư trên thị trường Việt Nam. Trang này trình bày các nguyên tắc của chúng tôi; chi tiết chiến lược, quy tắc mô hình và tín hiệu giao dịch được giữ kín.",
            howAscWorksTitle: "Cách ASC vận hành",
            howAscWorksIntro:
                "ASC trade và đầu tư trên thị trường Việt Nam. Trang này trình bày các nguyên tắc của chúng tôi; chi tiết chiến lược, quy tắc mô hình và tín hiệu giao dịch được giữ kín.",
            howAscWorksItems: [
                {
                    title: "Nghiên cứu",
                    body: "Chúng tôi nghiên cứu thị trường Việt Nam qua dữ liệu, cấu trúc thị trường và bằng chứng có thể kiểm chứng. Mỗi ý tưởng phải được thử nghiệm, không dựa vào cảm tính.",
                    icon: "rules",
                },
                {
                    title: "Thực thi",
                    body: "Chúng tôi vận hành theo các quy tắc rõ ràng, xoay quanh thanh khoản, thời điểm và chi phí. Kỷ luật quan trọng hơn bất kỳ giao dịch đơn lẻ nào.",
                    icon: "process",
                },
                {
                    title: "Rủi ro",
                    body: "Chúng tôi giám sát mức sụt giảm, mức độ tiếp xúc và độ tập trung, với các giới hạn được đặt trước và thực thi trước khi tăng rủi ro.",
                    icon: "shield",
                },
                {
                    title: "Rà soát",
                    body: "Mỗi chiến lược phải vượt qua bằng chứng thực tế, đối soát và giám sát liên tục. Chúng tôi đánh giá hệ thống qua kỷ luật thực thi, không qua một kết quả đơn lẻ.",
                    icon: "activity",
                },
            ],
            principles: [
                { label: "Dựa trên quy tắc", body: "Mọi quyết định đều dựa trên quy tắc được văn bản hóa, không phải ý kiến tùy hứng hay câu chuyện thị trường." },
                { label: "Dựa trên bằng chứng", body: "Nghiên cứu chỉ được chấp nhận khi có thể lặp lại, có thể thực thi, có ý thức rủi ro và được giám sát sau khi sử dụng." },
                { label: "Thiết kế cho Việt Nam", body: "Công việc phản ánh thực tế thanh khoản, quy định và công bố thông tin tại Việt Nam." },
                { label: "Ý thức về rủi ro", body: "Mức sụt giảm, thanh khoản và hành vi thị trường là đầu vào trong thiết kế, không phải yếu tố xem xét sau cùng." },
            ],
            objective:
                "Mục tiêu rất rõ: chuyển bằng chứng thị trường thành quyết định trade và đầu tư có kỷ luật, có thể rà soát trước và sau khi triển khai.",
            processTitle: "Cách công việc được tổ chức",
            processIntro: "ASC giữ công việc theo một trình tự rõ ràng trước khi đưa quyết định vào thực thi.",
            process: [
                { label: "Nghiên cứu", body: "Thu thập, làm sạch và giám sát dữ liệu thị trường, doanh nghiệp, trong ngày và vận hành với nguồn gốc và kiểm tra chất lượng rõ ràng." },
                { label: "Kiểm thử", body: "Kiểm thử ý tưởng với chi phí, thanh khoản, thời điểm và giới hạn triển khai trước khi được tin dùng." },
                { label: "Giao dịch", body: "Chuyển quyết định đã được chấp thuận thành quy tắc tỷ trọng, mức tiếp xúc, tái cân bằng, chi phí và thực thi." },
                { label: "Rà soát rủi ro", body: "Giám sát mức sụt giảm, độ tập trung, thanh khoản, suy giảm mô hình và ranh giới với đối tác được cấp phép khi phù hợp." },
            ],
            blocks: [
                {
                    title: "Xác định phạm vi thị trường",
                    body:
                        "Chúng tôi xác định thanh khoản, chất lượng dữ liệu, thời điểm và yêu cầu dữ liệu trước khi xem một ý tưởng là thực tế tại Việt Nam.",
                    icon: "database",
                },
                {
                    title: "Kiểm thử bằng chứng",
                    body:
                        "Ý tưởng được kiểm thử trên bằng chứng thị trường, nhưng chỉ được chấp nhận khi có thể chịu được chi phí, thanh khoản, thời điểm và quy tắc giám sát.",
                    icon: "sliders",
                },
                {
                    title: "Đặt giới hạn danh mục",
                    body:
                        "Quy tắc danh mục bao gồm tỷ trọng, vòng quay, tập trung, mức tiếp xúc, tái cân bằng và thời điểm cần giảm, tạm dừng hoặc rà soát một quyết định.",
                    icon: "compass",
                },
                {
                    title: "Kiểm soát rủi ro và rà soát",
                    intro:
                        "Quản trị rủi ro được đặt trong từng bước công việc. Chúng tôi sử dụng nhiều lớp rà soát trước khi một chiến lược được tin cậy:",
                    points: [
                        "Giới hạn sụt giảm và tập trung được xác định trước khi triển khai.",
                        "Thanh khoản, chi phí và thời điểm thực thi được xem là ràng buộc thiết kế.",
                        "Suy giảm mô hình được giám sát sau khi sử dụng.",
                        "Nghiên cứu, thực thi và quản trị rủi ro của ASC được tách bạch rõ ràng với nghĩa vụ của đối tác được cấp phép.",
                    ],
                    icon: "shield",
                },
            ],
            humanJudgement: {
                title: "Phán đoán con người và dữ liệu cùng phối hợp",
                intro: "Quy trình của chúng tôi mang tính định lượng, nhưng không phải tự động hóa chỉ vì tự động hóa. Phán đoán con người được đưa vào ở những khâu mang lại giá trị cao nhất:",
                steps: [
                    "Lựa chọn và làm sạch dữ liệu thị trường và doanh nghiệp.",
                    "Quyết định dùng bằng chứng nào và kết hợp chúng ra sao.",
                    "Thiết lập giới hạn danh mục và rủi ro phản ánh cấu trúc thị trường Việt Nam.",
                    "Đánh giá cách danh mục vận hành trong các môi trường khác nhau.",
                ],
                note: "Việc triển khai hàng ngày tuân theo các quy tắc đã được văn bản hóa để đảm bảo phản ứng nhất quán và có thể xác minh, trong khi hoạt động nghiên cứu tiếp tục phát triển ở hậu trường.",
            },
            flow: [
                { label: "Bằng chứng", desc: "Dữ liệu thị trường, doanh nghiệp, trong ngày và vận hành.", icon: "database" },
                { label: "Quy tắc", desc: "Quy tắc nghiên cứu hỗ trợ quyết định.", icon: "rules" },
                { label: "Danh mục", desc: "Tỷ trọng, mức tiếp xúc, tái cân bằng và thiết kế có ý thức thực thi.", icon: "sliders" },
                { label: "Quản trị", desc: "Giám sát, giới hạn rủi ro, rà soát và ranh giới vai trò.", icon: "shield-check" },
            ],
            comparison: {
                gutTitle: "Phán đoán Chủ quan",
                gutDesc: "Quyết định chủ quan thường bị ảnh hưởng bởi nhiễu loạn thị trường.",
                rulesTitle: "Dựa trên quy tắc",
                rulesDesc: "Thực thi kỷ luật dựa trên kiểm chứng thống kê.",
            },
            riskBands: [
                { label: "Phân tán danh mục", desc: "Số lượng cổ phiếu đủ lớn trải rộng các ngành, với giới hạn tỷ trọng để tránh tập trung quá mức.", color: "#CBD5E1" },
                { label: "Kiểm soát mức độ rủi ro", desc: "Giám sát độ nhạy thị trường và điều chỉnh khi rủi ro vượt ra ngoài giới hạn đã cam kết.", color: "#94A3B8" },
                { label: "Ngưỡng lỗ và phản ứng", desc: "Theo dõi khoảng cách từ đỉnh; giảm rủi ro dần dần khi mức lỗ vượt quá các ngưỡng đã thống nhất.", color: "#D97706" },
            ],
            edge: {
                title: "Trọng tâm Việt Nam",
                bullets: [
                    "Nghiên cứu được tinh chỉnh theo dữ liệu, thanh khoản, cấu trúc thị trường và quy định trong nước.",
                    "Bằng chứng thị trường được kiểm thử với các ràng buộc về thực thi và rủi ro.",
                    "Tính thực tế khi thực thi được đưa vào thiết kế chiến lược ngay từ đầu.",
                    "Hợp tác với đối tác được cấp phép vẫn phù hợp khi có sản phẩm được quản lý hoặc công việc tiếp xúc khách hàng.",
                ],
            },
            expectations: {
                title: "Quy trình được thiết kế để làm gì — và không làm gì",
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
                    "Mô phỏng lịch sử được xây dựng từ dữ liệu theo từng thời điểm của Việt Nam để xem quy tắc có thể vận hành thế nào qua các chu kỳ và giai đoạn căng thẳng.",
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
            intro: "Cách ASC phân định trade, đầu tư, hợp tác với đối tác và các nghĩa vụ được quản lý.",
        },
        partnerships: {
            intro:
                "ASC có thể hợp tác với các đối tác được cấp phép khi phù hợp. Trong các trường hợp đó, vai trò của ASC giới hạn ở nghiên cứu, quy trình, mô hình và góc nhìn rủi ro; đối tác được cấp phép chịu trách nhiệm đối với các nghĩa vụ thuộc phạm vi được quản lý theo quy định pháp luật. ASC không chào bán sản phẩm đầu tư trực tiếp cho công chúng qua website này, không nhận tài sản khách hàng qua website này và không cung cấp tư vấn đầu tư cá nhân hóa qua website này.",
            paragraphs: [
                "ASC có thể hợp tác với các đối tác được cấp phép khi phù hợp. Trong các trường hợp đó, vai trò của ASC giới hạn ở nghiên cứu, quy trình, mô hình và góc nhìn rủi ro; đối tác được cấp phép chịu trách nhiệm đối với các nghĩa vụ thuộc phạm vi được quản lý theo quy định pháp luật. ASC không chào bán sản phẩm đầu tư trực tiếp cho công chúng qua website này, không nhận tài sản khách hàng qua website này và không cung cấp tư vấn đầu tư cá nhân hóa qua website này.",
            ],
            roles: [
                {
                    roleLabel: "Kỷ luật",
                    title: "Nhà đầu tư",
                    bullets: ["Tiếp cận được quản lý bởi đối tác được cấp phép", "Không có chào bán sản phẩm trực tiếp qua website ASC"],
                },
                {
                    roleLabel: "Quản Lý",
                    title: "Đối tác được cấp phép",
                    bullets: ["Sản phẩm được quản lý khi phù hợp", "Nghĩa vụ được quản lý theo pháp luật"],
                },
                {
                    roleLabel: "Kiến Trúc",
                    title: "Aureus Sigma Capital",
                    bullets: ["Nghiên cứu, quy trình và mô hình", "Góc nhìn rủi ro riêng", "Không vận hành danh mục cho khách hàng"],
                },
            ],
            cta: "Ghi chú hợp tác FIDES",
            mechanicsTitle: "Về đối tác được cấp phép",
            investorNoticeTitle: "Thông tin quan trọng",
        },
        boundaries: {
            title: "Đối tác và ranh giới",
            intro:
                "Website ASC không chào bán sản phẩm và không cung cấp tư vấn cá nhân. Trang này ghi nhận cách phân định trách nhiệm khi ASC hợp tác với đối tác được cấp phép.",
            objectivesTitle: "Ranh giới trách nhiệm",
            objectives: [
                {
                    title: "Công việc riêng của ASC",
                    body:
                        "ASC giữ quy trình nghiên cứu, mô hình, thực thi và rủi ro tách biệt với công việc tiếp xúc khách hàng.",
                },
                {
                    title: "Nghĩa vụ của đối tác được cấp phép",
                    body:
                        "Đối tác được cấp phép chịu trách nhiệm đối với các nghĩa vụ thuộc phạm vi được quản lý theo quy định pháp luật.",
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
                "Góc nhìn nghiên cứu và bối cảnh rủi ro.",
                "Yêu cầu thực thi và rà soát.",
                "Nhịp giám sát.",
                "Dữ liệu đầu vào cho báo cáo mà đối tác được cấp phép có thể sử dụng theo nghĩa vụ của mình.",
            ],
            discussionNote:
                "ASC không đặt điều khoản sản phẩm công khai thông qua website này. Các nghĩa vụ được quản lý thuộc trách nhiệm của đối tác được cấp phép.",
            reportingTitle: "Báo cáo và rõ ràng",
            reportingBody:
                "ASC có thể chia sẻ phân tích với đối tác được cấp phép. Đối tác được cấp phép vẫn chịu trách nhiệm về báo cáo được quản lý và truyền thông tiếp xúc khách hàng.",
        },
        insights: {
            sectionTitle: "Góc nhìn",
            intro: "Chúng tôi xuất bản các ghi chú ngắn gọn cho người đọc và đối tác muốn hiểu cấu trúc thị trường Việt Nam, giao dịch có kỷ luật và quản trị rủi ro.",
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
                        "FIDES Việt Nam và ASC ký MOU tại văn phòng FIDES ở TP. HCM ngày 19/12/2025 về hợp tác đối tác trong khuôn khổ pháp luật hiện hành.",
                    icon: "handshake",
                    image: "/assets/others/fides-asc-mou-document-exchange-16x9.jpg",
                },
                {
                    category: "Góc nhìn",
                    title: "Vì sao ASC dùng quy tắc thay vì câu chuyện thị trường",
                    slug: "why-we-use-rules-instead-of-gut-feeling",
                    summary:
                        "Thị trường Việt Nam có thể thay đổi nhanh. Chúng tôi thảo luận lý do vì sao quy tắc được văn bản hóa và bằng chứng có thể hỗ trợ quyết định nhất quán hơn so với giao dịch theo cảm tính.",
                    comingSoon: true,
                    icon: "compass",
                    image: "/assets/others/quant_office_dark_2.png",
                },
                {
                    category: "Góc nhìn",
                    title: "Cách ASC xử lý rủi ro thua lỗ lớn",
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
                "Trade và đầu tư. Trọng tâm Việt Nam. Ranh giới rõ ràng.",
            details: [
                "Aureus Sigma Capital (ASC) là công ty trade và đầu tư định lượng tập trung vào thị trường vốn Việt Nam. ASC xây dựng quy trình nghiên cứu, thực thi và quản trị rủi ro cho từng quyết định. Website này không phải là lời chào bán sản phẩm đầu tư, không nhận tài sản khách hàng và không cung cấp tư vấn đầu tư cá nhân hóa.",
            ],
            factSheet: {
                title: "Thông tin tổng quan",
                items: [
                    { label: "Năm thành lập", value: "2025" },
                    { label: "Trọng tâm", value: "Trade và đầu tư định lượng tại Việt Nam" },
                    { label: "Ranh giới website", value: "Không chào bán sản phẩm trực tiếp" },
                ]
            },
            highlights: [
                { label: "Kỷ luật nghiên cứu", body: "Nghiên cứu dựa trên quy tắc, được tinh chỉnh cho thị trường vốn Việt Nam.", icon: "rules" },
                { label: "Kỷ luật thực thi", body: "Quyết định giao dịch được rà soát theo thanh khoản, thời điểm và chi phí.", icon: "network" },
                { label: "Ranh giới rõ ràng", body: "Đối tác được cấp phép chịu trách nhiệm công việc tiếp xúc khách hàng khi phù hợp.", icon: "shield-check" },
            ],
            bioDetails: [
                {
                    name: "Nguyễn Huy Đức",
                    title: "Nhà sáng lập kiêm Tổng Giám đốc",
                    body: [
                        "Ông Đức dẫn dắt hoạt động nghiên cứu, thiết kế mô hình, giám sát rủi ro và phối hợp đối tác của ASC, với hơn 20 năm kinh nghiệm tại thị trường vốn Việt Nam.",
                        "Ông giữ cho công ty tập trung vào quy tắc được văn bản hóa, chất lượng dữ liệu nội địa, kỷ luật thực thi và kiểm soát rủi ro rõ ràng.",
                    ],
                },
            ],
            teamTitle: "Ban Lãnh đạo",
        },
        team: {
            founder: "Nguyễn Huy Đức - Nhà sáng lập kiêm Tổng Giám đốc",
            founderBio:
                "Ông Đức dẫn dắt hoạt động nghiên cứu, thiết kế mô hình, giám sát rủi ro và phối hợp đối tác của ASC, với hơn 20 năm kinh nghiệm tại thị trường vốn Việt Nam. Ông giữ cho công ty tập trung vào quy tắc được văn bản hóa, chất lượng dữ liệu nội địa, kỷ luật thực thi và kiểm soát rủi ro rõ ràng.",
        },
        contact: {
            title: "Liên hệ",
            desc:
                "Đối với các yêu cầu chuyên nghiệp, vui lòng liên hệ ASC qua contact@ascap.vn.",
            primaryCta: "Gửi yêu cầu",
            emailLabel: "Email",
            email: "contact@ascap.vn",
            addressLabel: "Địa chỉ",
            addresses: [
                "15 Lê Thánh Tôn, Phường Sài Gòn, TP. HCM",
                "21 Võ Trường Toản, Phường An Khánh, TP. HCM"
            ],
            note: "ASC không chào bán sản phẩm đầu tư trực tiếp cho công chúng, không nhận tài sản của khách hàng và không cung cấp tư vấn đầu tư cá nhân thông qua website này.",
        },
        legal: {
            body:
                "Thông tin quan trọng. Website này chỉ nhằm mục đích cung cấp thông tin. Nội dung trên website không cấu thành lời chào bán, lời mời chào mua, khuyến nghị đầu tư hay tư vấn đầu tư cá nhân hóa đối với bất kỳ chứng khoán, sản phẩm đầu tư hoặc công cụ tài chính nào tại bất kỳ khu vực pháp lý nào. Aureus Sigma Capital (ASC) là công ty trade và đầu tư định lượng tập trung vào thị trường vốn Việt Nam, với quy trình nghiên cứu, thực thi và quản trị rủi ro của riêng mình. ASC không chào bán sản phẩm đầu tư trực tiếp cho công chúng qua website này, không nhận tài sản khách hàng qua website này và không cung cấp tư vấn đầu tư cá nhân hóa qua website này. Mọi nội dung liên quan đến nghiên cứu, mô hình, mô phỏng, backtest hoặc hành vi chiến lược chỉ mang tính minh họa và có những giới hạn nhất định. Hiệu quả trong quá khứ, kết quả mô phỏng hoặc kết quả mô hình không bảo đảm kết quả trong tương lai. Mọi hoạt động đầu tư và trading đều có rủi ro, bao gồm khả năng mất vốn.",
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
    // FULL VERSION (Q1 2026) - Uncomment and replace above only after founder and counsel review
    // "fides-aureus-sigma-capital-strategic-partnership": {
    //     en: {
    //         title: "FIDES and Aureus Sigma Capital Sign Partnership MOU",
    //         dateLine: "HCMC, Vietnam – [Q1 2026 Date]",
    //         body: parseMarkdown(fidesEnMd),
    //     },
    //     vi: {
    //         title: "FIDES và Aureus Sigma Capital ký kết hợp tác tại Việt Nam",
    //         dateLine: "TP. HCM – [Ngày Q1 2026]",
    //         body: parseMarkdown(fidesViMd),
    //     },
    // },
    "why-we-use-rules-instead-of-gut-feeling": {
        en: {
            title: "Why ASC Uses Rules Instead of Market Stories",
            body: parseMarkdown(rulesEnMd),
        },
        vi: {
            title: "Vì sao ASC dùng quy tắc thay vì câu chuyện thị trường",
            body: parseMarkdown(rulesViMd),
        },
    },
    "how-we-try-to-limit-big-losses": {
        en: {
            title: "How ASC Handles Large Losses",
            body: parseMarkdown(lossesEnMd),
        },
        vi: {
            title: "Cách ASC xử lý rủi ro thua lỗ lớn",
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
