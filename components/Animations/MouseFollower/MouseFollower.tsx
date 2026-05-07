'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ShiptosLogo from '@/public/assets/Shiptos-Logo.svg'
import Image from 'next/image'

export default function MouseFollower() {
    const cursorRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!cursorRef.current) return

        const xTo = gsap.quickTo(cursorRef.current, 'x', {
            duration: 0.4,
            ease: 'power3.out',
        })

        const yTo = gsap.quickTo(cursorRef.current, 'y', {
            duration: 0.4,
            ease: 'power3.out',
        })

        const moveCursor = (e: MouseEvent) => {
            xTo(e.clientX)
            yTo(e.clientY)
        }

        window.addEventListener('mousemove', moveCursor)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            className="
                fixed
                top-0
                left-0
                z-9999
                pointer-events-none
                translate-x-[-220%]
                translate-y-[-220%]
            "
        >
            <Image
                src={ShiptosLogo}
                alt="logo"
                width={12}
                height={12}
            />
        </div>
    )
}