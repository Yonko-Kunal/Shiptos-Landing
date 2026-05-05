import React from 'react'
import { ShoppingCart, Settings, FileText, MapPin, ShieldCheck, Route, Clock, Truck, BarChart3, RefreshCcw, Brain, Zap, Eye, MessageSquare, Package } from 'lucide-react'
import WorkCard from './workCards/WorkCard'
import Image from 'next/image'

const Woking = () => {
    return (
        <div className='flex flex-col items-center w-full min-h-screen px-8 2xl:px-24 2xl:pt-36 pt-24 gap-8'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-[12px] text-primary font-semibold tracking-widest'>SHIPTOS WORKFLOW</p>
                    <h1 className='text-center font-HelveticaNeue font-bold 2xl:text-[48px] md:text-[32px] 2xl:w-4xl md:w-2xl 2xl:leading-25 md:leading-20'>How Shiptos Work Under the Hood</h1>
                </div>
                <p className='2xl:text-[16px] md:text-[12px] text-muted-text-color 2xl:w-xl w-[24rem] text-center'>From order intake to delivery optimization—every step is intelligently automated and continuously improved.</p>
            </div>
            <div className='flex bg-primary/5 px-20 py-10 items-center justify-center w-full'>
                <div className='flex items-center justify-center gap-10'>
                    {/* left side  */}
                    <div className='flex gap-8 items-start w-full max-w-5xl mx-auto'>
                        {/* INPUTS Column */}
                        <div className='flex flex-col flex-1'>
                            <p className='text-primary font-bold text-[15px] mb-3 tracking-wider uppercase'>Inputs</p>
                            <div className='bg-white 2xl:px-8 md:px-4 py-4 flex flex-col 2xl:gap-8 gap-4'>
                                <div className='flex items-center gap-5'>
                                    <ShoppingCart className='2xl:w-[22px] 2xl:h-[22px] md:w-[18px] md:h-[18px] text-black stroke-[2px]' />
                                    <p className='2xl:text-[16px] md:text-[12px] text-[#222] font-medium tracking-wide'>E-commerce Platform</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <ShoppingCart className='2xl:w-[22px] 2xl:h-[22px] md:w-[18px] md:h-[18px] text-black stroke-[2px]' />
                                    <p className='2xl:text-[16px] md:text-[12px] text-[#222] font-medium tracking-wide'>OMS/ WMS/ ERP</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <ShoppingCart className='2xl:w-[22px] 2xl:h-[22px] md:w-[18px] md:h-[18px] text-black stroke-[2px]' />
                                    <p className='2xl:text-[16px] md:text-[12px] text-[#222] font-medium tracking-wide'>Customer Apps</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <ShoppingCart className='2xl:w-[22px] 2xl:h-[22px] md:w-[18px] md:h-[18px] text-black stroke-[2px]' />
                                    <p className='2xl:text-[16px] md:text-[12px] text-[#222] font-medium tracking-wide'>Manual Upload / CSV</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <ShoppingCart className='w-[22px] h-[22px] text-black stroke-[2px]' />
                                    <p className='2xl:text-[16px] md:text-[12px] text-[#222] font-medium tracking-wide'>Third-party Integrations</p>
                                </div>
                            </div>
                        </div>

                        {/* Processing Column */}
                        <div className='flex flex-col gap-2 mt-9 flex-1'>
                            <div className='bg-white border border-primary/20 px-6 2xl:py-5 py-4'>
                                <h2 className='2xl:text-[18px] md:text-[16px] font-bold text-[#111] mb-2'>Data Processing</h2>
                                <p className='2xl:text-[16px] md:text-[12px] text-[#555] leading-[1.4] pr-4'>Validation, normalization<br />and enrichment</p>
                            </div>
                            <div className='bg-white border border-primary/20 px-6 2xl:py-5 py-4'>
                                <h2 className='2xl:text-[18px] md:text-[16px] font-bold text-[#111] mb-2'>Constraints Modeling</h2>
                                <p className='2xl:text-[16px] md:text-[12px] text-[#555] leading-[1.4] pr-4'>Time windows, capacity,<br />skills, SLAs, & more</p>
                            </div>
                            <div className='bg-white border border-primary/20 px-6 2xl:py-5 py-4'>
                                <h2 className='2xl:text-[18px] md:text-[16px] font-bold text-[#111] mb-2'>Optimization Algorithms</h2>
                                <p className='2xl:text-[16px] md:text-[12px] text-[#555] leading-[1.4] pr-4'>AI/ML + Heuristics solve<br />millions of possibilities</p>
                            </div>
                        </div>
                    </div>

                    {/* center  */}

                    <div>
                        <div className='relative 2xl:w-50 w-40 2xl:h-50 h-40 rounded-full flex items-center justify-center border-2 border-dashed border-primary/20'>
                            <div className='2xl:w-40 w-32 bg-white 2xl:h-40 h-32 rounded-full relative flex items-center justify-center shadow-[6px_10px_25px_rgba(235,59,47,0.2)]'>
                                <Image src="/assets/Shiptos-Logo.svg" alt="Shiptos" width={96} height={96} />
                            </div>
                            <div></div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className='flex gap-8 items-start w-full max-w-5xl mx-auto'>
                        <div className='flex flex-col gap-2 mt-9 flex-1'>
                            <div className='bg-white border border-primary/20 px-6 2xl:py-5 py-4'>
                                <h2 className='2xl:text-[18px] md:text-[16px] font-bold text-[#111] mb-2'>Data Processing</h2>
                                <p className='2xl:text-[16px] md:text-[12px] text-[#555] leading-[1.4] pr-4'>Validation, normalization<br />and enrichment</p>
                            </div>
                            <div className='bg-white border border-primary/20 px-6 2xl:py-5 py-4'>
                                <h2 className='2xl:text-[18px] md:text-[16px] font-bold text-[#111] mb-2'>Constraints Modeling</h2>
                                <p className='2xl:text-[16px] md:text-[12px] text-[#555] leading-[1.4] pr-4'>Time windows, capacity,<br />skills, SLAs, & more</p>
                            </div>
                            <div className='bg-white border border-primary/20 px-6 2xl:py-5 py-4'>
                                <h2 className='2xl:text-[18px] md:text-[16px] font-bold text-[#111] mb-2'>Optimization Algorithms</h2>
                                <p className='2xl:text-[16px] md:text-[12px] text-[#555] leading-[1.4] pr-4'>AI/ML + Heuristics solve<br />millions of possibilities</p>
                            </div>
                        </div>

                        <div className='flex flex-col flex-1'>
                            <p className='text-primary font-bold text-[15px] mb-3 tracking-wider uppercase'>Outcomes</p>
                            <div className='bg-white 2xl:px-8 md:px-4 py-4 flex flex-col 2xl:gap-8 gap-4'>
                                <div className='flex items-center gap-5'>
                                    <ShoppingCart className='2xl:w-[22px] 2xl:h-[22px] md:w-[18px] md:h-[18px] text-black stroke-[2px]' />
                                    <p className='2xl:text-[16px] md:text-[12px] text-[#222] font-medium tracking-wide'>E-commerce Platform</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <ShoppingCart className='2xl:w-[22px] 2xl:h-[22px] md:w-[18px] md:h-[18px] text-black stroke-[2px]' />
                                    <p className='2xl:text-[16px] md:text-[12px] text-[#222] font-medium tracking-wide'>OMS/ WMS/ ERP</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <ShoppingCart className='2xl:w-[22px] 2xl:h-[22px] md:w-[18px] md:h-[18px] text-black stroke-[2px]' />
                                    <p className='2xl:text-[16px] md:text-[12px] text-[#222] font-medium tracking-wide'>Customer Apps</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <ShoppingCart className='2xl:w-[22px] 2xl:h-[22px] md:w-[18px] md:h-[18px] text-black stroke-[2px]' />
                                    <p className='2xl:text-[16px] md:text-[12px] text-[#222] font-medium tracking-wide'>Manual Upload / CSV</p>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <ShoppingCart className='w-[22px] h-[22px] text-black stroke-[2px]' />
                                    <p className='2xl:text-[16px] md:text-[12px] text-[#222] font-medium tracking-wide'>Third-party Integrations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------------------- work cards --------------------- */}

            <div className='flex gap-4'>
                <WorkCard
                    stepNumber='01.'
                    icon={Package}
                    title='Order Intake'
                    description='Orders, locations, and constraints come in via APIs, integrations, or manual upload.'
                    tagsLabel='Supported Sources'
                    tags={[
                        { label: 'APIs', icon: Settings },
                        { label: 'CSV Upload', icon: FileText },
                        { label: 'OMS/WMS', icon: ShoppingCart },
                        { label: 'Data Validation', icon: ShieldCheck },
                        { label: 'Geocoding', icon: MapPin },
                    ]}
                />
                <WorkCard
                    stepNumber='02.'
                    icon={Brain}
                    title='Smart Planning'
                    description='AI engine optimizes routes, assigns drivers, and respects all constraints in real time.'
                    tagsLabel='Core Capabilities'
                    tags={[
                        { label: 'Route Optimization', icon: Route },
                        { label: 'Time Windows', icon: Clock },
                        { label: 'Load Balancing', icon: BarChart3 },
                        { label: 'Auto-Assign', icon: Zap },
                    ]}
                />
                <WorkCard
                    stepNumber='03.'
                    icon={Truck}
                    title='Dispatch & Track'
                    description='Drivers receive optimized plans. Live tracking and alerts keep operations on course.'
                    tagsLabel='Dispatch Features'
                    tags={[
                        { label: 'Live Tracking', icon: Eye },
                        { label: 'Notifications', icon: MessageSquare },
                        { label: 'ETA Updates', icon: Clock },
                        { label: 'Driver App', icon: Truck },
                    ]}
                />
                <WorkCard
                    stepNumber='04.'
                    icon={RefreshCcw}
                    title='Learn & Improve'
                    description='Every delivery feeds back into the engine, making future plans smarter and faster.'
                    tagsLabel='Feedback Loop'
                    tags={[
                        { label: 'Analytics', icon: BarChart3 },
                        { label: 'Performance', icon: Zap },
                        { label: 'Continuous AI', icon: Brain },
                        { label: 'Benchmarks', icon: ShieldCheck },
                    ]}
                />
            </div>
        </div>
    )
}

export default Woking