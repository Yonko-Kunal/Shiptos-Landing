'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
}

// ── Stat data ─────────────────────────────────────────────────────
const stats = [
    { value: '30%', label: 'Faster dispatch\nplanning' },
    { value: '25%', label: 'Lower fuel &\nrouting costs' },
    { value: '50%', label: 'Reduction in\ncoordination' },
    { value: '90%', label: 'Dispatch accuracy\nat scale' },
]

// Positions as percentages — symmetrically centered
const positions = [
    { x: 15, y: 25 },
    { x: 38, y: 62 },
    { x: 62, y: 18 },
    { x: 85, y: 60 },
]

// Generate a smooth cubic bezier curve for the entire path
const getContinuousPath = () => {
    return positions.reduce((acc, pos, i) => {
        if (i === 0) return `M ${pos.x * 10} ${pos.y * 4}`
        const prev = positions[i - 1]
        const dx = (pos.x * 10 - prev.x * 10) * 0.4
        const cp1x = prev.x * 10 + dx
        const cp1y = prev.y * 4
        const cp2x = pos.x * 10 - dx
        const cp2y = pos.y * 4
        return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${pos.x * 10} ${pos.y * 4}`
    }, "")
}

const Stats = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const pathRef = useRef<SVGPathElement>(null)
    const bubblesRef = useRef<(HTMLDivElement | null)[]>([])

    // Initialize refs array
    if (bubblesRef.current.length !== stats.length) {
        bubblesRef.current = Array(stats.length).fill(null)
    }

    useEffect(() => {
        if (!containerRef.current || !pathRef.current) return

        const ctx = gsap.context(() => {
            const totalPoints = positions.length;

            bubblesRef.current.forEach((bubble, i) => {
                if (!bubble) return;

                // Center the element on the path coordinates
                gsap.set(bubble, { 
                    xPercent: -50, 
                    yPercent: -50,
                    left: 0,
                    top: 0
                });

                const targetProgress = i / (totalPoints - 1);

                // Animate from the start of the path (progress 0) to their respective target positions
                gsap.fromTo(bubble, 
                    {
                        motionPath: {
                            path: pathRef.current!,
                            align: pathRef.current!,
                            alignOrigin: [0.5, 0.5],
                            start: 0,
                            end: 0
                        },
                        opacity: 0,
                        scale: 0.5
                    },
                    {
                        motionPath: {
                            path: pathRef.current!,
                            align: pathRef.current!,
                            alignOrigin: [0.5, 0.5],
                            start: 0,
                            end: targetProgress
                        },
                        opacity: 1,
                        scale: 1,
                        ease: "power1.inOut",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 85%", 
                            end: "center center", 
                            scrub: 1,
                        }
                    }
                )
            });
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={containerRef} className='w-full bg-background 2xl:py-24 md:py-16 overflow-hidden'>
            <div className='relative 2xl:h-[400px] md:h-[300px] max-w-6xl mx-auto'>

                {/* Curved dashed connecting lines */}
                <svg className='absolute inset-0 w-full h-full pointer-events-none' viewBox='0 0 1000 400' preserveAspectRatio='none'>
                    <path
                        ref={pathRef}
                        d={getContinuousPath()}
                        stroke='#EB3B2F'
                        strokeOpacity='0.25'
                        strokeWidth='2'
                        strokeDasharray='8 8'
                        fill='none'
                    />
                </svg>

                {/* Stat circles */}
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        ref={(el) => { bubblesRef.current[i] = el }}
                        className='absolute'
                    >
                        <div className='2xl:w-48 2xl:h-48 md:w-32 md:h-32 rounded-full bg-white border border-primary/20 flex flex-col items-center justify-center shadow-[6px_10px_25px_rgba(235,59,47,0.2)]'>
                            <span className='2xl:text-[32px] md:text-[22px] font-black text-primary leading-none'>
                                {stat.value}
                            </span>
                            <p className='2xl:text-[13px] md:text-[10px] text-text-color/70 text-center mt-1.5 leading-tight whitespace-pre-line px-2'>
                                {stat.label}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Stats