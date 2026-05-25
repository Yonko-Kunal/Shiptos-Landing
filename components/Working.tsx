'use client'

import React, { useRef } from 'react'
import { ShoppingCart, Settings, FileText, MapPin, ShieldCheck, Route, Clock, Truck, BarChart3, RefreshCcw, Brain, Zap, Eye, MessageSquare, Package, Database, Smartphone, FileUp, Blocks, TrendingDown, TrendingUp, Star, PieChart } from 'lucide-react'
import WorkCard from './workCards/WorkCard'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Woking = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const section = sectionRef.current
        const track = trackRef.current

        if (!section || !track) return

        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const totalScroll = track.scrollWidth - window.innerWidth;
            gsap.to(track, {
                x: -totalScroll,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'bottom 100%',
                    end: () => `+=${totalScroll}`,
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                },
            });
        }, section);

        return () => mm.revert();
    }, [])
    return (
        <>
            <div className='flex flex-col md:items-center items-start  w-full px-8 2xl:px-24 2xl:pt-36 pt-24 gap-8'>
                <div className='flex flex-col md:justify-center justify-start md:items-center items-start'>
                    <div className='flex flex-col md:items-center items-start md:justify-center justify-start w-full'>
                        <p className='text-[12px] text-primary font-semibold tracking-widest'>SHIPTOS WORKFLOW</p>
                        <h1 className='md:text-center font-HelveticaNeue font-semibold 2xl:text-[48px] md:text-[32px] text-[20px]  2xl:w-4xl md:w-2xl 2xl:leading-25 md:leading-20'>How Shiptos Work Under the Hood</h1>
                    </div>
                    <p className='2xl:text-[16px] md:text-[12px] text-muted-text-color 2xl:w-xl w-[24rem] text-center md:block hidden'>From order intake to delivery optimization—every step is intelligently automated and continuously improved.</p>
                </div>
                <div className='md:flex bg-primary/5 2xl:px-12 md:px-5 py-8 2xl:py-10 items-center justify-center w-full overflow-hidden hidden flex-col'>

                    {/* Section Title */}
                    <p className='text-primary font-bold text-[11px] 2xl:text-[13px] tracking-[0.2em] uppercase mb-6 2xl:mb-8'>The Shiptos Intelligence Engine</p>

                    <div className='flex items-center justify-center w-full'>

                        {/* --- INPUTS Column --- */}
                        <div className='flex flex-col shrink-0'>
                            {/* <p className='text-primary font-bold text-[13px] 2xl:text-[15px] mb-3 tracking-wider uppercase'>Inputs</p> */}
                            <div className='bg-white 2xl:px-6 md:px-4 py-3 2xl:py-4 flex flex-col 2xl:gap-6 gap-3'>
                                <div className='flex items-center gap-3 2xl:gap-4'>
                                    <ShoppingCart className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] text-black stroke-[2px] shrink-0' />
                                    <p className='2xl:text-[14px] md:text-[11px] text-[#222] font-medium tracking-wide whitespace-nowrap'>E-commerce Platforms</p>
                                </div>
                                <div className='flex items-center gap-3 2xl:gap-4'>
                                    <Database className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] text-black stroke-[2px] shrink-0' />
                                    <p className='2xl:text-[14px] md:text-[11px] text-[#222] font-medium tracking-wide whitespace-nowrap'>OMS / WMS / ERP</p>
                                </div>
                                <div className='flex items-center gap-3 2xl:gap-4'>
                                    <Smartphone className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] text-black stroke-[2px] shrink-0' />
                                    <p className='2xl:text-[14px] md:text-[11px] text-[#222] font-medium tracking-wide whitespace-nowrap'>Customer Apps</p>
                                </div>
                                <div className='flex items-center gap-3 2xl:gap-4'>
                                    <FileUp className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] text-black stroke-[2px] shrink-0' />
                                    <p className='2xl:text-[14px] md:text-[11px] text-[#222] font-medium tracking-wide whitespace-nowrap'>Manual Upload / CSV</p>
                                </div>
                                <div className='flex items-center gap-3 2xl:gap-4'>
                                    <Blocks className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] text-black stroke-[2px] shrink-0' />
                                    <p className='2xl:text-[14px] md:text-[11px] text-[#222] font-medium tracking-wide whitespace-nowrap'>Third-party Integrations</p>
                                </div>
                            </div>
                        </div>

                        {/* --- Connector: Inputs → Processing (5→trunk→3 tree) --- */}
                        <svg className='shrink-0 md:w-[50px] 2xl:w-[70px] self-stretch' viewBox="0 0 70 200" fill="none" preserveAspectRatio="none">
                            {/* 5 horizontal branches from left items (shifted down for title offset) */}
                            <line x1="0" y1="42" x2="25" y2="42" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="0" y1="72" x2="25" y2="72" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="0" y1="100" x2="25" y2="100" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="0" y1="130" x2="25" y2="130" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="0" y1="160" x2="25" y2="160" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            {/* Vertical trunk */}
                            <line x1="25" y1="42" x2="25" y2="160" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            {/* 3 horizontal branches to right processing cards */}
                            <line x1="25" y1="45" x2="70" y2="45" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="25" y1="100" x2="70" y2="100" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="25" y1="155" x2="70" y2="155" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                        </svg>

                        {/* --- Processing Left Column --- */}
                        <div className='flex flex-col gap-2 shrink-0'>
                            <div className='bg-white border border-primary/20 px-3 2xl:py-4 py-2'>
                                <h2 className='2xl:text-[15px] md:text-[13px] font-bold text-[#111] mb-1'>Data Processing</h2>
                                <p className='2xl:text-[13px] md:text-[11px] text-[#555] leading-[1.4]'>Validation, normalization,<br />and enrichment</p>
                            </div>
                            <div className='bg-white border border-primary/20 px-3 2xl:py-4 py-2'>
                                <h2 className='2xl:text-[15px] md:text-[13px] font-bold text-[#111] mb-1'>Constraints Modeling</h2>
                                <p className='2xl:text-[13px] md:text-[11px] text-[#555] leading-[1.4]'>Time windows, capacity,<br />skills, SLAs, & more</p>
                            </div>
                            <div className='bg-white border border-primary/20 px-3 2xl:py-4 py-2'>
                                <h2 className='2xl:text-[15px] md:text-[13px] font-bold text-[#111] mb-1'>Optimization Algorithms</h2>
                                <p className='2xl:text-[13px] md:text-[11px] text-[#555] leading-[1.4]'>AI/ML + Heuristics solve<br />millions of possibilities</p>
                            </div>
                        </div>

                        {/* --- Connector: Processing → Center (3→trunk→1 converge) --- */}
                        <svg className='shrink-0 md:w-[40px] 2xl:w-[55px] self-stretch' viewBox="0 0 55 200" fill="none" preserveAspectRatio="none">
                            {/* 3 horizontal branches from processing cards */}
                            <line x1="0" y1="45" x2="28" y2="45" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="0" y1="100" x2="28" y2="100" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="0" y1="155" x2="28" y2="155" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            {/* Vertical trunk */}
                            <line x1="28" y1="45" x2="28" y2="155" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            {/* Single branch to center */}
                            <line x1="28" y1="100" x2="55" y2="100" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                        </svg>

                        {/* --- Center Logo --- */}
                        <div className='shrink-0 mx-1 2xl:mx-2'>
                            <div className='relative 2xl:w-44 w-32 2xl:h-44 h-32 rounded-full flex items-center justify-center border-2 border-dashed border-primary/20'>
                                <div className='2xl:w-32 w-24 bg-white 2xl:h-32 h-24 rounded-full relative flex items-center justify-center shadow-[6px_10px_25px_rgba(235,59,47,0.2)]'>
                                    <Image src="/assets/Shiptos-Logo.svg" alt="Shiptos" width={48} height={48} />
                                </div>
                            </div>
                        </div>

                        {/* --- Connector: Center → Processing Right (1→trunk→3 branch) --- */}
                        <svg className='shrink-0 md:w-[40px] 2xl:w-[55px] self-stretch' viewBox="0 0 55 200" fill="none" preserveAspectRatio="none">
                            {/* Single branch from center */}
                            <line x1="0" y1="100" x2="27" y2="100" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            {/* Vertical trunk */}
                            <line x1="27" y1="45" x2="27" y2="155" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            {/* 3 horizontal branches to right processing cards */}
                            <line x1="27" y1="45" x2="55" y2="45" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="27" y1="100" x2="55" y2="100" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="27" y1="155" x2="55" y2="155" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                        </svg>

                        {/* --- Processing Right Column --- */}
                        <div className='flex flex-col gap-2 shrink-0'>
                            <div className='bg-white border border-primary/20 px-3 2xl:py-4 py-2'>
                                <h2 className='2xl:text-[15px] md:text-[13px] font-bold text-text-color mb-1'>Dispatch Orchestration</h2>
                                <p className='2xl:text-[13px] md:text-[11px] text-[#555] leading-[1.4]'>Real-time assignment<br />and notifications</p>
                            </div>
                            <div className='bg-white border border-primary/20 px-3 2xl:py-4 py-2'>
                                <h2 className='2xl:text-[15px] md:text-[13px] font-bold text-text-color mb-1'>Real-time Visibility</h2>
                                <p className='2xl:text-[13px] md:text-[11px] text-[#555] leading-[1.4]'>Live tracking, alerts,<br />and exceptions</p>
                            </div>
                            <div className='bg-white border border-primary/20 px-3 2xl:py-4 py-2'>
                                <h2 className='2xl:text-[15px] md:text-[13px] font-bold text-text-color mb-1'>Feedback Loop</h2>
                                <p className='2xl:text-[13px] md:text-[11px] text-[#555] leading-[1.4]'>Learn from every delivery<br />to improve continuously</p>
                            </div>
                        </div>

                        {/* --- Connector: Processing Right → Outcomes (3→trunk→5 tree) --- */}
                        <svg className='shrink-0 md:w-[50px] 2xl:w-[70px] self-stretch' viewBox="0 0 70 200" fill="none" preserveAspectRatio="none">
                            {/* 3 horizontal branches from right processing cards */}
                            <line x1="0" y1="45" x2="45" y2="45" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="0" y1="100" x2="45" y2="100" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="0" y1="155" x2="45" y2="155" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            {/* Vertical trunk */}
                            <line x1="45" y1="42" x2="45" y2="160" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            {/* 5 horizontal branches to outcome items (shifted down for title offset) */}
                            <line x1="45" y1="42" x2="70" y2="42" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="45" y1="72" x2="70" y2="72" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="45" y1="100" x2="70" y2="100" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="45" y1="130" x2="70" y2="130" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                            <line x1="45" y1="160" x2="70" y2="160" stroke="#EB3B2F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.45" />
                        </svg>

                        {/* --- OUTCOMES Column --- */}
                        <div className='flex flex-col shrink-0'>
                            <p className='text-primary font-bold text-[13px] 2xl:text-[15px] mb-3 tracking-wider uppercase'>Outcomes</p>
                            <div className='bg-white 2xl:px-6 md:px-4 py-3 2xl:py-4 flex flex-col 2xl:gap-6 gap-3'>
                                <div className='flex items-center gap-3 2xl:gap-4'>
                                    <Zap className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] text-black stroke-[2px] shrink-0' />
                                    <p className='2xl:text-[14px] md:text-[11px] text-text-color font-medium tracking-wide whitespace-nowrap'>Faster Deliveries</p>
                                </div>
                                <div className='flex items-center gap-3 2xl:gap-4'>
                                    <TrendingDown className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] text-black stroke-[2px] shrink-0' />
                                    <p className='2xl:text-[14px] md:text-[11px] text-text-color font-medium tracking-wide whitespace-nowrap'>Lower Operational Costs</p>
                                </div>
                                <div className='flex items-center gap-3 2xl:gap-4'>
                                    <TrendingUp className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] text-black stroke-[2px] shrink-0' />
                                    <p className='2xl:text-[14px] md:text-[11px] text-text-color font-medium tracking-wide whitespace-nowrap'>Higher Fleet Productivity</p>
                                </div>
                                <div className='flex items-center gap-3 2xl:gap-4'>
                                    <Star className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] text-black stroke-[2px] shrink-0' />
                                    <p className='2xl:text-[14px] md:text-[11px] text-text-color font-medium tracking-wide whitespace-nowrap'>Better Customer Experience</p>
                                </div>
                                <div className='flex items-center gap-3 2xl:gap-4'>
                                    <PieChart className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px] text-black stroke-[2px] shrink-0' />
                                    <p className='2xl:text-[14px] md:text-[11px] text-text-color font-medium tracking-wide whitespace-nowrap'>Data-driven Decisions</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ----- Pinned horizontal scroll cards (outside flex parent) ----- */}
            <section
                ref={sectionRef}
                className='relative w-full 2xl:h-[80vh] md:h-screen h-auto overflow-hidden bg-background flex items-center py-10 md:py-0'
            >
                <div
                    ref={trackRef}
                    className='flex flex-col md:flex-row gap-4 w-full md:w-max px-8 2xl:px-24 will-change-transform'
                >
                    <div className='w-full md:w-[calc((100vw-4rem-2rem)/3)] 2xl:w-[calc((100vw-12rem-3rem)/4)] shrink-0'>
                        <WorkCard stepNumber='01.' icon={Package} title='Order Intake' description='Orders, locations, and constraints come in via APIs, integrations, or manual upload.' tagsLabel='Supported Sources' tags={[{ label: 'APIs', icon: Settings }, { label: 'CSV Upload', icon: FileText }, { label: 'OMS/WMS', icon: ShoppingCart }, { label: 'Data Validation', icon: ShieldCheck }, { label: 'Geocoding', icon: MapPin }]} />
                    </div>
                    <div className='w-full md:w-[calc((100vw-4rem-2rem)/3)] 2xl:w-[calc((100vw-12rem-3rem)/4)] shrink-0'>
                        <WorkCard stepNumber='02.' icon={Brain} title='Smart Planning' description='AI engine optimizes routes, assigns drivers, and respects all constraints in real time.' tagsLabel='Core Capabilities' tags={[{ label: 'Route Optimization', icon: Route }, { label: 'Time Windows', icon: Clock }, { label: 'Load Balancing', icon: BarChart3 }, { label: 'Auto-Assign', icon: Zap }]} />
                    </div>
                    <div className='w-full md:w-[calc((100vw-4rem-2rem)/3)] 2xl:w-[calc((100vw-12rem-3rem)/4)] shrink-0'>
                        <WorkCard stepNumber='03.' icon={Truck} title='Dispatch & Track' description='Drivers receive optimized plans. Live tracking and alerts keep operations on course.' tagsLabel='Dispatch Features' tags={[{ label: 'Live Tracking', icon: Eye }, { label: 'Notifications', icon: MessageSquare }, { label: 'ETA Updates', icon: Clock }, { label: 'Driver App', icon: Truck }]} />
                    </div>
                    <div className='w-full md:w-[calc((100vw-4rem-2rem)/3)] 2xl:w-[calc((100vw-12rem-3rem)/4)] shrink-0'>
                        <WorkCard stepNumber='04.' icon={RefreshCcw} title='Learn & Improve' description='Every delivery feeds back into the engine, making future plans smarter and faster.' tagsLabel='Feedback Loop' tags={[{ label: 'Analytics', icon: BarChart3 }, { label: 'Performance', icon: Zap }, { label: 'Continuous AI', icon: Brain }, { label: 'Benchmarks', icon: ShieldCheck }]} />
                    </div>
                    <div className='w-full md:w-[calc((100vw-4rem-2rem)/3)] 2xl:w-[calc((100vw-12rem-3rem)/4)] shrink-0'>
                        <WorkCard stepNumber='05.' icon={RefreshCcw} title='Learn & Improve' description='Every delivery feeds back into the engine, making future plans smarter and faster.' tagsLabel='Feedback Loop' tags={[{ label: 'Analytics', icon: BarChart3 }, { label: 'Performance', icon: Zap }, { label: 'Continuous AI', icon: Brain }, { label: 'Benchmarks', icon: ShieldCheck }]} />
                    </div>
                    <div className='w-full md:w-[calc((100vw-4rem-2rem)/3)] 2xl:w-[calc((100vw-12rem-3rem)/4)] shrink-0'>
                        <WorkCard stepNumber='06.' icon={RefreshCcw} title='Learn & Improve' description='Every delivery feeds back into the engine, making future plans smarter and faster.' tagsLabel='Feedback Loop' tags={[{ label: 'Analytics', icon: BarChart3 }, { label: 'Performance', icon: Zap }, { label: 'Continuous AI', icon: Brain }, { label: 'Benchmarks', icon: ShieldCheck }]} />
                    </div>
                    <div className='w-full md:w-[calc((100vw-4rem-2rem)/3)] 2xl:w-[calc((100vw-12rem-3rem)/4)] shrink-0'>
                        <WorkCard stepNumber='07.' icon={RefreshCcw} title='Learn & Improve' description='Every delivery feeds back into the engine, making future plans smarter and faster.' tagsLabel='Feedback Loop' tags={[{ label: 'Analytics', icon: BarChart3 }, { label: 'Performance', icon: Zap }, { label: 'Continuous AI', icon: Brain }, { label: 'Benchmarks', icon: ShieldCheck }]} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Woking
