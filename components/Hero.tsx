import React from 'react'
import { Button } from './ui/button'
import AnimatedHeader from '@/components/Animations/AnimatedHeader/Animatedheader'
import TextAnimation from '@/components/Animations/AnimatedText/AnimatedText'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex md:flex-row flex-col md:px-20 px-6 2xl:px-48 2xl:pt-36 pt-24 pb-20 gap-4'>
            {/* Left Side */}
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <AnimatedHeader animateOnScroll>
                            <h1 className='font-HelveticaNeue font-bold 2xl:text-[96px] md:text-[80px] text-[48px] 2xl:w-2xl md:w-lg w-full 2xl:leading-25 md:leading-20 leading-12'>Modern Logistics Starts Here </h1>
                        </AnimatedHeader>
                    </div>
                    <div>
                        <TextAnimation delay={0.3}>
                            <p className='2xl:text-[16px] md:text-[12px] text-[12px] text-muted-text-color 2xl:w-sm md:w-[16rem] w-full'>Drive operational efficiency and cost savings with AI-powered logistics built for high-volume delivery networks.</p>
                        </TextAnimation>
                    </div>
                </div>
                <div className='flex gap-2 md:flex-row flex-col'>
                    <Button variant="primary" className='md:px-6 md:py-0 py-5'>Get Started</Button>
                    <Button variant="outline" className='md:px-6 md:py-0 py-5'>See demo</Button>
                </div>


            </div>
            <div className='relative w-full'>
                    <div className='relative aspect-16/10 w-full overflow-hidden'>
                        <Image
                            src="/assets/video-placeholder.png"
                            alt="Logistics optimization"
                            fill
                            priority
                            className='object-contain'
                        />
                    </div>
                </div>
        </div>
    )
}

export default Hero