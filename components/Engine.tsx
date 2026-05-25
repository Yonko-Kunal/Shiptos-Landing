'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const cardsLeft = [
    "Schedule Deliveries",
    "Order Tracking",
    "Orchestration",
    "Capacity Management"
]

const cardsRight = [
    "Offer Flexibility",
    "Programmatic Alerts",
    "Improve FADR",
    "Capture Feedback"
]

// ── All layout in ONE SVG coordinate space ──────────────────────────
const ENGINE_W = 450
const ENGINE_H = 325

const CARD_W = 200
const CARD_H = 46
const GAP = 30
const CANVAS_W = CARD_W + GAP + ENGINE_W + GAP + CARD_W // 910
const CANVAS_H = ENGINE_H // 325

const ENGINE_X = CARD_W + GAP // 230
const ENGINE_Y = 0

// ── Node positions from Engine.svg source ───────────────────────────
const LEFT_NODE_X = 6.5
const RIGHT_NODE_X = 443.5
const NODE_YS = [159.5, 178.5, 197.5, 216.5]

const engineNodes = {
    left: NODE_YS.map(y => ({ x: ENGINE_X + LEFT_NODE_X, y: ENGINE_Y + y })),
    right: NODE_YS.map(y => ({ x: ENGINE_X + RIGHT_NODE_X, y: ENGINE_Y + y })),
}

// ── Card positions ──────────────────────────────────────────────────
const CARD_COUNT = 4
const cardSpacing = (CANVAS_H - CARD_COUNT * CARD_H) / (CARD_COUNT - 1)

const leftCards = cardsLeft.map((_, i) => {
    const y = i * (CARD_H + cardSpacing)
    return { x: 0, y, centerY: y + CARD_H / 2 }
})

const rightCards = cardsRight.map((_, i) => {
    const y = i * (CARD_H + cardSpacing)
    return { x: CANVAS_W - CARD_W, y, centerY: y + CARD_H / 2 }
})

// ── Step-curve path generator ───────────────────────────────────────
function stepPath(x1: number, y1: number, x2: number, y2: number): string {
    const mx = (x1 + x2) / 2
    const dx = Math.sign(x2 - x1)
    const dy = Math.sign(y2 - y1)
    const r = Math.min(12, Math.abs(x1 - mx), Math.abs(y1 - y2) / 2)

    if (r < 1) return `M${x1},${y1}L${x2},${y2}`

    return [
        `M${x1},${y1}`,
        `H${mx - dx * r}`,
        `Q${mx},${y1},${mx},${y1 + dy * r}`,
        `V${y2 - dy * r}`,
        `Q${mx},${y2},${mx + dx * r},${y2}`,
        `H${x2}`,
    ].join(' ')
}

const DOT_R = 5
const BEAM_LENGTH = 40 // length of the traveling beam segment

const Engine = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const beamRefs = useRef<(SVGPathElement | null)[]>([])

    // Pre-compute all 8 path strings
    const leftPaths = leftCards.map((card, i) =>
        stepPath(card.x + CARD_W, card.centerY, engineNodes.left[i].x, engineNodes.left[i].y)
    )
    const rightPaths = rightCards.map((card, i) =>
        stepPath(card.x, card.centerY, engineNodes.right[i].x, engineNodes.right[i].y)
    )

    const allPaths = [...leftPaths, ...rightPaths]

    useGSAP(() => {
        const beams = beamRefs.current.filter(Boolean) as SVGPathElement[]
        if (beams.length === 0) return

        beams.forEach((beam, i) => {
            const totalLength = beam.getTotalLength()
            const gap = totalLength - BEAM_LENGTH

            gsap.set(beam, {
                strokeDasharray: `${BEAM_LENGTH} ${gap}`,
                strokeDashoffset: -totalLength,
            })

            // Animate: beam flows outward (engine → cards)
            gsap.to(beam, {
                strokeDashoffset: totalLength,
                duration: 2.2,
                ease: 'none',
                repeat: -1,
                delay: i * 0.3,
            })
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className='md:flex hidden justify-center items-center w-full py-20 bg-background px-6'>
            <svg
                viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
                className='w-full max-w-[910px]'
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Central Nervous System Engine diagram"
            >
                {/* ── Base connection paths (static, faint) ── */}
                {allPaths.map((d, i) => (
                    <path key={`base-${i}`} d={d}
                        stroke="#EB3B2F" strokeOpacity="0.15" strokeWidth="1.5"
                    />
                ))}

                {/* ── Beam overlay paths (animated by GSAP) ── */}
                {allPaths.map((d, i) => (
                    <path
                        key={`beam-${i}`}
                        ref={el => { beamRefs.current[i] = el }}
                        d={d}
                        stroke="#EB3B2F"
                        strokeOpacity="0.8"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                ))}

                {/* ── Left cards ── */}
                {leftCards.map((card, i) => (
                    <g key={`left-${i}`}>
                        <rect
                            x={card.x} y={card.y}
                            width={CARD_W} height={CARD_H}
                            rx={4} fill="white"
                            stroke="#EB3B2F" strokeOpacity="0.2" strokeWidth="1"
                        />
                        <text
                            x={card.x + CARD_W / 2} y={card.centerY}
                            textAnchor="middle" dominantBaseline="central"
                            fontSize="13" fontWeight="700" fill="#1a1a1a"
                            style={{ fontFamily: 'var(--font-mulish), sans-serif' }}
                        >
                            {cardsLeft[i]}
                        </text>
                        <circle cx={card.x + CARD_W} cy={card.centerY} r={DOT_R} fill="#EB3B2F" />
                    </g>
                ))}

                {/* ── Right cards ── */}
                {rightCards.map((card, i) => (
                    <g key={`right-${i}`}>
                        <rect
                            x={card.x} y={card.y}
                            width={CARD_W} height={CARD_H}
                            rx={4} fill="white"
                            stroke="#EB3B2F" strokeOpacity="0.2" strokeWidth="1"
                        />
                        <text
                            x={card.x + CARD_W / 2} y={card.centerY}
                            textAnchor="middle" dominantBaseline="central"
                            fontSize="13" fontWeight="700" fill="#1a1a1a"
                            style={{ fontFamily: 'var(--font-mulish), sans-serif' }}
                        >
                            {cardsRight[i]}
                        </text>
                        <circle cx={card.x} cy={card.centerY} r={DOT_R} fill="#EB3B2F" />
                    </g>
                ))}

                {/* ── Engine graphic ── */}
                <image
                    href="/assets/Engine.svg"
                    x={ENGINE_X} y={ENGINE_Y}
                    width={ENGINE_W} height={ENGINE_H}
                />
            </svg>
        </div>
    )
}

export default Engine