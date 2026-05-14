'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ShiptosLogo from '@/public/assets/Shiptos-Logo.svg'
import Image from 'next/image'

export default function MouseFollower() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const mousePos = useRef({ x: 0, y: 0 })

    useEffect(() => {
        if (!cursorRef.current) return

        // 1. Set initial centered position & force GPU layer
        gsap.set(cursorRef.current, { x: -6, y: -6, force3D: true })

        const xTo = gsap.quickTo(cursorRef.current, 'x', {
            duration: 0.3,
            ease: 'power3.out',
        })
        const yTo = gsap.quickTo(cursorRef.current, 'y', {
            duration: 0.3,
            ease: 'power3.out',
        })

        // 2. Only track mouse position, don't animate yet
        const onMouseMove = (e: MouseEvent) => {
            mousePos.current.x = e.clientX
            mousePos.current.y = e.clientY
        }

        // 3. Sync updates to the display refresh rate (60/120/144hz)
        const onTick = () => {
            // Offset by half the image size (12px / 2 = 6px)
            xTo(mousePos.current.x - -20)
            yTo(mousePos.current.y - 30)
        }

        gsap.ticker.add(onTick)
        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            gsap.ticker.remove(onTick)
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            // 4. Clean CSS: no conflicting transforms, GPU hint added
            className="fixed top-0 left-0 z-9999 pointer-events-none will-change-transform"
        >
            <Image
                src={ShiptosLogo}
                alt="custom cursor"
                width={18}
                height={18}
                className="block" // Prevents inline-image baseline spacing
            />
        </div>
    )
}