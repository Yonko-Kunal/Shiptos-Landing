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
                    scale: 0.92,
                    y: 180,
                    z: -500,        // reduced (700 was too much)
                    opacity: 0,
                },
                {
                    rotateX: 0,
                    scale: 1,
                    y: 0,
                    z: 0,
                    opacity: 1,
                    ease: 'expo.out', // smoother than power3
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',   // starts a bit earlier
                        end: 'center top',
                        scrub: 0.6,         // smoother scroll sync
                    }
                }
            )

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={containerRef}
            className='w-[94%] 2xl:w-[84%] mx-auto min-h-screen flex items-center justify-center py-24 overflow-hidden'
            style={{ perspective: '1600px' }}  // slightly deeper perspective
        >
            <div
                ref={imageRef}
                className='w-full max-w-full px-5 md:px-10 will-change-transform'
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className="relative w-full overflow-hidden shadow-2xl border border-white/10 rounded-2xl">
                    <Image
                        src={TestingScreen}
                        alt="TestingScreen"
                        className='w-full h-auto object-cover'
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default Testting