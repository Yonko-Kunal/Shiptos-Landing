'use client'

import React, { useRef } from 'react'
import AnimatedText from '@/components/Animations/AnimatedText/AnimatedText'
import LogesticScene from '@/components/logistics/LogisticsScene'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const WhyShiptosAnswer = () => {

    const sectionRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (!sectionRef.current) return

        const truck = sectionRef.current.querySelector('#scrub-truck')

        if (truck) {
            gsap.fromTo(truck,
                { x: '20vw' },
                {
                    x: '90vw',
                    ease: 'anticipate',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top top',
                        end: '+=1500',
                        scrub: 1,
                        pin: true,
                        pinSpacing: true,
                    }
                }
            )
        }
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className='relative overflow-hidden bg-text-color h-screen w-full top-0'>
            <LogesticScene />

            {/* CONTENT */}
            <div className='relative z-10 flex items-center justify-center w-full h-full'>

                <div className='2xl:w-[96%] w-[87%] mx-auto'>

                    <AnimatedText animateOnscroll>
                        <h2 className='
                            font-medium
                            text-[20px]
                            md:text-[26px]
                            2xl:text-[30px]
                            text-background
                            2xl:max-w-[45%]
                            md:max-w-[62%]
                            max-w-full
                            text-center
                            mx-auto
                            tracking-[1.6%]
                            leading-[130%]
                        '>
                            Because Shiptos turns operational complexity
                            into measurable gains across cost, speed,
                            and efficiency.
                        </h2>
                    </AnimatedText>

                </div>

            </div>

        </section>
    )
}

export default WhyShiptosAnswer