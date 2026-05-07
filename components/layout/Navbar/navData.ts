import {
    Truck,
    MapPin,
    Link2,
    Zap,
    MonitorDot,
    Crosshair,
    BarChart3,
    ShoppingCart,
    Package,
    Warehouse,
    Box,
    Factory,
    BookOpen,
    PlayCircle,
    FileText,
    Download,
    Award,
    BookMarked,
    PenTool,
    LineChart,
    Calendar,
    Video,
    Code2,
    BookA,
    Building2,
    Cpu,
    Globe,
    Trophy,
    Briefcase,
    Newspaper,
    Shield,
    Phone,
    type LucideIcon,
} from 'lucide-react'

// ── Types ─────────────────────────────────────────────────────────

export interface NavLink {
    label: string
    href: string
    icon: LucideIcon
}

export interface NavDropdownContent {
    title: string
    subtitle: string
    buttonLabel: string
    buttonHref: string
    links: NavLink[]
}

export interface NavItem {
    name: string
    href: string
    nested: boolean
    dropdown?: NavDropdownContent
}

// ── Data ──────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
    {
        name: 'Platform',
        href: '/platform',
        nested: true,
        dropdown: {
            title: 'Move Faster,\nDeliver Better',
            subtitle:
                'Optimize transport operations, streamline last-mile delivery, and manage logistics from one unified platform.',
            buttonLabel: 'Explore Platform',
            buttonHref: '/platform',
            links: [
                { label: 'Transport Management System', href: '/platform/tms', icon: Truck },
                { label: 'Last Mile Delivery Solutions', href: '/platform/last-mile', icon: MapPin },
            ],
        },
    },
    {
        name: 'Product',
        href: '/product',
        nested: true,
        dropdown: {
            title: 'Built for High-\nVolume Logistics',
            subtitle:
                'Manage fulfilment, orchestration, dispatch, and tracking with tools designed to keep operations moving efficiently.',
            buttonLabel: 'Explore Products',
            buttonHref: '/product',
            links: [
                { label: 'Fulfilment Automation', href: '/product/fulfilment', icon: Link2 },
                { label: 'Dispatch Planning', href: '/product/dispatch', icon: Zap },
                { label: 'Delivery Orchestration', href: '/product/orchestration', icon: MonitorDot },
                { label: 'Track & Trace', href: '/product/track-trace', icon: Crosshair },
                { label: 'Analytics & Insights', href: '/product/analytics', icon: BarChart3 },
            ],
        },
    },
    {
        name: 'Industries',
        href: '/industries',
        nested: true,
        dropdown: {
            title: 'Industry-Ready\nLogistics',
            subtitle:
                'Purpose-built solutions tailored to the unique delivery challenges of your industry vertical.',
            buttonLabel: 'Explore Industries',
            buttonHref: '/industries',
            links: [
                { label: 'Retail', href: '/industries/retail', icon: ShoppingCart },
                { label: 'FMCG/CPG', href: '/industries/fmcg', icon: Package },
                { label: '3PL & CEP', href: '/industries/3pl', icon: Warehouse },
                { label: 'Big & Bulky', href: '/industries/big-bulky', icon: Box },
                { label: 'Other Industries', href: '/industries/other', icon: Factory },
            ],
        },
    },
    {
        name: 'Resources',
        href: '/resources',
        nested: true,
        dropdown: {
            title: 'Learn &\nExplore',
            subtitle:
                'Deep-dive into guides, case studies, and thought leadership to get the most out of modern logistics.',
            buttonLabel: 'Explore Resources',
            buttonHref: '/resources',
            links: [
                { label: 'Guides', href: '/resources/guides', icon: BookOpen },
                { label: 'Product Demos', href: '/resources/demos', icon: PlayCircle },
                { label: 'Use Cases', href: '/resources/use-cases', icon: FileText },
                { label: 'Whitepapers', href: '/resources/whitepapers', icon: Download },
                { label: 'Case Studies', href: '/resources/case-studies', icon: Award },
                { label: 'E-books', href: '/resources/ebooks', icon: BookMarked },
                { label: 'Blogs', href: '/resources/blogs', icon: PenTool },
                { label: 'Reports', href: '/resources/reports', icon: LineChart },
                { label: 'Events & Webinars', href: '/resources/events', icon: Calendar },
                { label: 'Videos', href: '/resources/videos', icon: Video },
                { label: 'API Reference Docs', href: '/resources/api-docs', icon: Code2 },
                { label: 'Glossary', href: '/resources/glossary', icon: BookA },
            ],
        },
    },
    {
        name: 'Company',
        href: '/company',
        nested: true,
        dropdown: {
            title: 'About\nShiptos',
            subtitle:
                'Learn about our mission, team, global reach, and the recognition driving our innovation.',
            buttonLabel: 'Explore Company',
            buttonHref: '/company',
            links: [
                { label: 'About Us', href: '/company/about', icon: Building2 },
                { label: "World's first agentic TMS", href: '/company/agentic-tms', icon: Cpu },
                { label: 'Global Presence', href: '/company/global', icon: Globe },
                { label: 'Analyst Recognition', href: '/company/recognition', icon: Trophy },
                { label: 'Careers', href: '/company/careers', icon: Briefcase },
                { label: 'News & Press', href: '/company/news', icon: Newspaper },
                { label: 'Trust & Security', href: '/company/trust', icon: Shield },
                { label: 'Contact Us', href: '/company/contact', icon: Phone },
            ],
        },
    },
    {
        name: 'Customers',
        href: '/customers',
        nested: false,
    },
]
