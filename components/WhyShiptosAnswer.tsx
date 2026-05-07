'use client'

import React, { useRef } from 'react'
import AnimatedText from '@/components/Animations/AnimatedText/AnimatedText'
import LogesticScene from '@/components/logistics/LogisticsScene'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const WhyShiptosAnswer = () => {

    const pathRef = useRef<SVGPathElement | null>(null)

    useGSAP(() => {
        gsap.to(pathRef.current, {
            strokeDashoffset: -200,
            duration: 6,
            repeat: -1,
            ease: 'none',
        })
    })

    return (
        <section className='relative overflow-hidden bg-text-color h-[70vh] 2xl:mx-[10%] md:mx-[6.7%]'>

            {/* GRID */}
            {/* <div
                className='
                    absolute inset-0 opacity-[0.04]
                    bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
                    bg-size-[80px_80px]
                '
            /> */}

            <LogesticScene />

            {/* <div
                className='absolute inset-0'
                style={{
                    background: `radial-gradient(circle at center, rgba(255,107,53,0.1), transparent 60%)`
                }}
            /> */}

            {/* SVG BACKGROUND
            <svg
                viewBox='0 0 1920 1080'
                className='absolute inset-0 h-full w-[80%]'
                preserveAspectRatio='xMidYMid slice'
            >

                ROUTE PATH
                <path
                    ref={pathRef}
                    d='M 200 700 C 500 200, 900 500, 1400 250'
                    stroke='#FF6B35'
                    strokeWidth='2'
                    fill='none'
                    strokeDasharray='10 10'
                />

                NODE 1
                <circle
                    cx='200'
                    cy='700'
                    r='6'
                    fill='#EB3B2F'
                />

                NODE 2
                <circle
                    cx='1400'
                    cy='250'
                    r='6'
                    fill='#FF6B35'
                />

            </svg> */}

            {/* CONTENT */}
            <div className='relative z-10 flex items-center justify-center h-full'>

                <div className='2xl:w-[96%] w-[87%] mx-auto'>

                    <AnimatedText animateOnscroll>
                        <h2 className='
                            font-medium
                            text-[26px]
                            2xl:text-[30px]
                            text-background
                            2xl:max-w-[45%]
                            max-w-[62%]
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