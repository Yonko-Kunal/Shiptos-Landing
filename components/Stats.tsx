import React from 'react'

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

// Generate a smooth cubic bezier curve between two points
function curvedPath(x1: number, y1: number, x2: number, y2: number): string {
    // Control points: offset horizontally to create a smooth S-like curve
    const dx = (x2 - x1) * 0.4
    const cp1x = x1 + dx
    const cp1y = y1
    const cp2x = x2 - dx
    const cp2y = y2
    return `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`
}

const Stats = () => {
    return (
        <section className='w-full bg-background 2xl:py-24 md:py-16'>
            <div className='relative 2xl:h-[400px] md:h-[300px] max-w-6xl mx-auto'>

                {/* Curved dashed connecting lines */}
                <svg className='absolute inset-0 w-full h-full pointer-events-none' viewBox='0 0 1000 400' preserveAspectRatio='none'>
                    {positions.slice(0, -1).map((pos, i) => {
                        const next = positions[i + 1]
                        // Map percentage positions to the 1000x400 viewBox
                        const x1 = pos.x * 10
                        const y1 = pos.y * 4
                        const x2 = next.x * 10
                        const y2 = next.y * 4
                        return (
                            <path
                                key={i}
                                d={curvedPath(x1, y1, x2, y2)}
                                stroke='#EB3B2F'
                                strokeOpacity='0.25'
                                strokeWidth='2'
                                strokeDasharray='8 8'
                                fill='none'
                            />
                        )
                    })}
                </svg>

                {/* Stat circles */}
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className='absolute -translate-x-1/2 -translate-y-1/2'
                        style={{ left: `${positions[i].x}%`, top: `${positions[i].y}%` }}
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