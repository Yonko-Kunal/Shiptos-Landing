'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import shiptosTextLogo from '@/public/assets/Shiptos-Logo-Text.svg'
import { Globe, ChevronDown } from 'lucide-react'
import AnimatedText from '@/components/Animations/AnimatedText/AnimatedText'
import AnimatedHeader from '@/components/Animations/AnimatedHeader/Animatedheader'

// ── Footer link data ──────────────────────────────────────────────
interface FooterColumn {
    title: string
    links: { label: string; href: string }[]
}

const footerColumns: FooterColumn[] = [
    {
        title: 'Platform',
        links: [
            { label: 'Transportation Management System', href: '#' },
            { label: 'Last Mile Delivery Solution', href: '#' },
            { label: 'Fulfillment Automation', href: '#' },
            { label: 'Dispatch Planning', href: '#' },
            { label: 'Delivery Orchestration', href: '#' },
            { label: 'Track and Trace', href: '#' },
            { label: 'Analytics and Insights', href: '#' },
        ],
    },
    {
        title: 'Industries',
        links: [
            { label: 'Retail', href: '#' },
            { label: 'FMCG/CPG', href: '#' },
            { label: '3PL & CEP', href: '#' },
            { label: 'Big & Bulky', href: '#' },
            { label: 'E-commerce', href: '#' },
            { label: 'E-grocery', href: '#' },
            { label: 'Industrial Services', href: '#' },
            { label: 'Manufacturing', href: '#' },
            { label: 'Home Services', href: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Use Cases', href: '#' },
            { label: 'Whitepapers', href: '#' },
            { label: 'Case Studies', href: '#' },
            { label: 'E-books', href: '#' },
            { label: 'Blogs', href: '#' },
            { label: 'Reports', href: '#' },
            { label: 'Events & Webinars', href: '#' },
            { label: 'Videos', href: '#' },
            { label: 'API Reference Docs', href: '#' },
            { label: 'Glossary', href: '#' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', href: '#' },
            { label: 'Customers', href: '#' },
            { label: 'Analyst Recognition', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'News & Press', href: '#' },
            { label: 'Trust & Security', href: '#' },
            { label: 'Contact Us', href: '#' },
            { label: 'Hey AI', href: '#' },
            { label: 'Learn About Us', href: '#' },
            { label: 'LLM Text', href: '#' },
        ],
    },
]

// ── Component ─────────────────────────────────────────────────────
const Footer = () => {
    return (
        <footer className='w-full bg-background'>
            {/* ── Top Banner ──────────────────────────────────── */}
            <div className='flex items-center justify-between w-full px-8 2xl:px-24 py-6 border-b border-t border-text-color/10 '>
                <Image
                    src={shiptosTextLogo}
                    alt='Shiptos Logo'
                    className='h-6 w-auto'
                    priority
                />
                <AnimatedText delay={0.2} >
                    <p className='text-text-color text-[16px] 2xl:text-[18px] font-medium tracking-wide'>
                        Built for high-volume logistics
                    </p>
                </AnimatedText>
            </div>

            {/* ── Link Grid ───────────────────────────────────── */}
            <div className='px-8 2xl:px-24 py-14 2xl:py-16'>
                <div className='flex justify-between'>
                    {/* Columns */}
                    <div className='grid grid-cols-4 gap-12 2xl:gap-16 flex-1'>
                        {footerColumns.map((column) => (
                            <div key={column.title}>
                                <AnimatedText delay={0.2}>
                                    <h4 className='text-[14px] 2xl:text-[15px] font-bold text-text-color mb-5'>
                                        {column.title}
                                    </h4>
                                </AnimatedText>
                                <ul className='flex flex-col gap-2.5'>
                                    {column.links.map((link) => (
                                        <AnimatedText delay={0.2} key={link.label}>
                                            <li>
                                                <Link
                                                    href={link.href}
                                                    className='text-[13px] 2xl:text-[14px] text-text-color/70 hover:text-primary transition-colors'
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        </AnimatedText>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Language Selector */}
                    <div className='ml-12'>
                        <button className='flex items-center gap-2 border border-text-color/20 rounded-md px-4 py-2.5 hover:border-text-color/40 transition-colors'>
                            <Globe className='w-4 h-4 text-text-color' />
                            <span className='text-[13px] 2xl:text-[14px] font-medium text-text-color'>English</span>
                            <ChevronDown className='w-3.5 h-3.5 text-text-color' />
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar ──────────────────────────────────── */}
            <div className='border-t border-text-color/10 px-8 2xl:px-24 py-5'>
                <div className='flex items-center justify-between'>
                    <p className='text-[12px] 2xl:text-[13px] text-text-color/60'>
                        {new Date().getFullYear()} Shiptos · All rights reserved.
                    </p>
                    <div className='flex items-center gap-6'>
                        <Link href='#' className='text-[12px] 2xl:text-[13px] text-text-color/60 hover:text-primary transition-colors'>
                            Privacy Policy
                        </Link>
                        <Link href='#' className='text-[12px] 2xl:text-[13px] text-text-color/60 hover:text-primary transition-colors'>
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer