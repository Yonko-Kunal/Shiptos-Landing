'use client'

import React, { useRef } from 'react'
import AnimatedHeader from '@/components/Animations/AnimatedHeader/Animatedheader'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const WhyShiptosQuestion = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const titleRef = useRef<HTMLHeadingElement | null>(null)

    useGSAP(() => {
        if (!sectionRef.current || !titleRef.current) return

        gsap.to(titleRef.current, {
            scale: 200,
            x: '800%',
            y: '800%',
            force3D: false,
            ease: 'power2.inOut',
            transformOrigin: 'center center',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=2500',
                scrub: 1.2,
                pin: true,
                pinSpacing: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        })
    }, [])

    return (
        <section
            ref={sectionRef}
            className='relative h-screen w-full flex items-center justify-center overflow-hidden'
        >
            {/* <AnimatedHeader animateOnScroll> */}
            <h1
                ref={titleRef}
                className='whyTitle text-center text-text-color font-HelveticaNeue font-bold 2xl:text-[96px] md:text-[80px] 2xl:w-3xl md:w-2xl 2xl:leading-25 md:leading-20'
            >
                But, Why Shiptos ?
            </h1>
            {/* </AnimatedHeader> */}
        </section>
    )
}

export default WhyShiptosQuestion