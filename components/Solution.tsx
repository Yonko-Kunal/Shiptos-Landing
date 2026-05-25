import React from 'react'
import Image from 'next/image'
import AnimatedText from '@/components/Animations/AnimatedText/AnimatedText'
import AnimatedHeader from '@/components/Animations/AnimatedHeader/Animatedheader'
import { CheckCircle2, GitBranch, Package, MapPin, BarChart3 } from 'lucide-react'

const features = [
    {
        title: "Intelligent\nRouting",
        icon: GitBranch,
    },
    {
        title: "Smart\nDispatch",
        icon: Package,
    },
    {
        title: "Real-time\nTracking",
        icon: MapPin,
    },
    {
        title: "Actionable\nInsights",
        icon: BarChart3,
    }
]

const Solution = () => {
    return (
        <section className='w-full py-10 md:py-20 px-0 md:px-8 bg-background flex justify-center items-center'>
            <div className='w-full max-w-[90%] bg-background border border-text-color/15 p-2 md:p-4 2xl:p-20 flex flex-col gap-4'>

                {/* Top Section */}
                <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
                    {/* Left Content */}
                    <div className='flex-1 flex flex-col items-start gap-6 2xl:gap-8 top-0'>


                        <AnimatedHeader animateOnScroll>
                            <h2 className='text-[40px] top-0 md:text-[40px] 2xl:text-[72px] font-bold text-text-color leading-[1.1] tracking-tight font-HelveticaNeue'>
                                Smart delivery.<br />
                                Complete <span className='text-primary'>control.</span>
                            </h2>
                        </AnimatedHeader>

                        <AnimatedText animateOnscroll>
                            <p className='text-[24px] md:text-[16px] 2xl:text-[18px] text-text-color/80 max-w-137.5 2xl:max-w-162.5 leading-[1.6] font-medium'>
                                Shiptos brings routing, dispatch, and real-time tracking into one intelligent platform—helping you reduce costs, improve efficiency, and scale delivery operations with complete control.
                            </p>
                        </AnimatedText>
                    </div>

                    {/* Right Image/Graphic */}
                    <div className='flex-1 w-full relative  flex items-center justify-center'>
                        <div className='relative w-full min-h-75 bg-white/40 rounded-3xl border border-white/60 shadow-sm overflow-hidden flex items-center justify-center'>
                            <Image
    src="/assets/DeliveryService.svg"
    alt="Delivery Service"
    width={320}
    height={140}
    className="object-contain w-[320px] h-auto"
/>
                        </div>
                    </div>
                </div>

                {/* Bottom Features Row */}
                <div className='w-full flex justify-center'>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl w-full'>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className='flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-4 lg:bg-transparent rounded-2xl p-4 lg:p-0'
                            >
                                <div className='w-14 h-14 2xl:w-18 2xl:h-18 shrink-0 rounded-[1.25rem] flex items-center justify-center bg-background text-[#949494] border border-text-color/15'>
                                    <feature.icon className='w-6 h-6 2xl:w-8 2xl:h-8' strokeWidth={2} />
                                </div>

                                <h3 className='font-semibold text-text-color text-[15px] 2xl:text-[20px] whitespace-pre-line leading-[1.2]'>
                                    {feature.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Solution