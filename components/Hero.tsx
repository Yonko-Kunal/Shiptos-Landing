import React from 'react'
import { Button } from './ui/button'
import AnimatedHeader from '@/components/Animations/AnimatedHeader/Animatedheader'
import TextAnimation from '@/components/Animations/AnimatedText/AnimatedText'

const Hero = () => {
    return (
        <div className='px-20 2xl:px-48 2xl:pt-36 pt-24'>
            {/* Left Side */}
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <AnimatedHeader animateOnScroll>
                            <h1 className='font-HelveticaNeue font-bold 2xl:text-[96px] md:text-[80px] 2xl:w-2xl md:w-lg 2xl:leading-25 md:leading-20'>Modern Logistics Starts Here </h1>
                        </AnimatedHeader>
                    </div>
                    <div>
                        <TextAnimation delay={0.3}>
                            <p className='2xl:text-[16px] md:text-[12px] text-muted-text-color 2xl:w-sm w-[16rem]'>Drive operational efficiency and cost savings with AI-powered logistics built for high-volume delivery networks.</p>
                        </TextAnimation>
                    </div>
                </div>
                <div className='flex  gap-2'>
                    <Button variant="primary" className='px-[24px]'>Get Started</Button>
                    <Button variant="outline" className='px-[24px]'>See demo</Button>
                </div>
            </div>
            {/* Right Side */}
            <div>

            </div>
        </div>
    )
}

export default Hero