import React from 'react'

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
// Engine SVG intrinsic size
const ENGINE_W = 450
const ENGINE_H = 325

// Canvas = cards + gaps + engine
const CARD_W = 200
const CARD_H = 46
const GAP = 30 // horizontal gap between cards and engine
const CANVAS_W = CARD_W + GAP + ENGINE_W + GAP + CARD_W // 910
const CANVAS_H = ENGINE_H // 325

// Engine position within canvas (centered vertically, horizontally between cards)
const ENGINE_X = CARD_W + GAP // 230
const ENGINE_Y = 0

// ── Node positions ── taken directly from Engine.svg source ─────────
// Left nodes: circles at cx=6.5 in the SVG
const LEFT_NODE_X = 6.5
// Right nodes: circles at cx=443.5 in the SVG
const RIGHT_NODE_X = 443.5
// Y positions for all 4 nodes (both sides identical)
const NODE_YS = [159.5, 178.5, 197.5, 216.5]

// Convert engine-local coords → canvas coords (just add the offset)
const engineNodes = {
    left: NODE_YS.map(y => ({ x: ENGINE_X + LEFT_NODE_X, y: ENGINE_Y + y })),
    right: NODE_YS.map(y => ({ x: ENGINE_X + RIGHT_NODE_X, y: ENGINE_Y + y })),
}

// Card layout — evenly distributed across the full canvas height
const CARD_COUNT = 4
const cardSpacing = (CANVAS_H - CARD_COUNT * CARD_H) / (CARD_COUNT - 1) // ≈41.67

const leftCards = cardsLeft.map((_, i) => {
    const y = i * (CARD_H + cardSpacing)
    return { x: 0, y, centerY: y + CARD_H / 2 }
})

const rightCards = cardsRight.map((_, i) => {
    const y = i * (CARD_H + cardSpacing)
    return { x: CANVAS_W - CARD_W, y, centerY: y + CARD_H / 2 }
})

// ── Step-curve path with rounded corners ────────────────────────────
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

// Dot radius for card connection indicators
const DOT_R = 5

const Engine = () => {
    return (
        <div className='flex justify-center items-center w-full py-20 bg-background px-6'>
            <svg
                viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
                className='w-full max-w-[910px]'
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Central Nervous System Engine diagram"
            >
                {/* ── Connection paths (behind everything) ── */}
                {leftCards.map((card, i) => (
                    <path
                        key={`lc-${i}`}
                        d={stepPath(card.x + CARD_W, card.centerY, engineNodes.left[i].x, engineNodes.left[i].y)}
                        stroke="#EB3B2F"
                        strokeOpacity="0.4"
                        strokeWidth="1.5"
                    />
                ))}
                {rightCards.map((card, i) => (
                    <path
                        key={`rc-${i}`}
                        d={stepPath(card.x, card.centerY, engineNodes.right[i].x, engineNodes.right[i].y)}
                        stroke="#EB3B2F"
                        strokeOpacity="0.4"
                        strokeWidth="1.5"
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
                        {/* Connection dot on right edge */}
                        <circle
                            cx={card.x + CARD_W} cy={card.centerY}
                            r={DOT_R} fill="#EB3B2F"
                        />
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
                        {/* Connection dot on left edge */}
                        <circle
                            cx={card.x} cy={card.centerY}
                            r={DOT_R} fill="#EB3B2F"
                        />
                    </g>
                ))}

                {/* ── Engine graphic (positioned exactly in SVG space) ── */}
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