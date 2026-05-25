'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import TestingScreen from "@/public/Testing.png"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Testting = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageRef.current,
                {
                    rotateX: 70,
                    scale: 0.9,
                    y: 180,
                    z: -500,
                    opacity: 0,
                },
                {
                    rotateX: 0,
                    scale: 1,
                    y: 0,
                    z: 0,
                    opacity: 1,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                        end: 'center top',
                        scrub: 0.6,
                    }
                }
            )
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={containerRef}
            className='w-full min-h-screen flex items-center justify-center py-16 md:py-24 px-4 overflow-hidden'
            style={{ perspective: '1600px' }}
        >
            <div
                ref={imageRef}
                className='w-full max-w-[380px] md:max-w-6xl will-change-transform'
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className='relative overflow-hidden shadow-2xl border border-white/10 rounded-2xl'>
                    <Image
                        src={TestingScreen}
                        alt='TestingScreen'
                        priority
                        className='w-full h-[75vh] md:h-auto object-cover md:object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default Testting