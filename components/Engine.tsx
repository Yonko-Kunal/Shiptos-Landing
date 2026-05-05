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

// Generates an SVG path for a step curve with rounded corners
function generateStepCurve(x1: number, y1: number, x2: number, y2: number) {
    const midX = (x1 + x2) / 2;
    const dirX = x2 > x1 ? 1 : -1;
    const dirY = y2 > y1 ? 1 : -1;

    const maxRadiusX = Math.abs(x1 - midX);
    const maxRadiusY = Math.abs(y1 - y2) / 2;
    const radius = Math.min(12, maxRadiusX, maxRadiusY);

    if (radius < 1) {
        return `M ${x1} ${y1} L ${x2} ${y2}`;
    }

    return `M ${x1} ${y1} H ${midX - dirX * radius} Q ${midX} ${y1} ${midX} ${y1 + dirY * radius} V ${y2 - dirY * radius} Q ${midX} ${y2} ${midX + dirX * radius} ${y2} L ${x2} ${y2}`;
}

// --- Layout constants ---
// Engine SVG native size
const SVG_W = 450;
const SVG_H = 325;

// Desired render size for the engine graphic
const ENGINE_W = 450;
const ENGINE_H = (ENGINE_W / SVG_W) * SVG_H; // preserve exact aspect ratio = 252.78

// Overall canvas
const CANVAS_W = 1050;
const CANVAS_H = 325;
const CARD_W = 220;
const CARD_H = 50;

// Center the engine graphic in the canvas
const ENGINE_LEFT = (CANVAS_W - ENGINE_W) / 2; // 350
const ENGINE_TOP = (CANVAS_H - ENGINE_H) / 2;  // 36.11

// Scale factor from intrinsic SVG coords to rendered pixels
const SCALE = ENGINE_W / SVG_W; // 0.7778

// Intrinsic node positions from Engine.svg source
const LEFT_NODE_X_INTRINSIC = 6.5;
const RIGHT_NODE_X_INTRINSIC = 443.5;
const NODE_YS_INTRINSIC = [159.5, 178.5, 197.5, 216.5];

// Rendered node positions
const engineLeftX = ENGINE_LEFT + LEFT_NODE_X_INTRINSIC * SCALE;
const engineRightX = ENGINE_LEFT + RIGHT_NODE_X_INTRINSIC * SCALE;
const engineYs = NODE_YS_INTRINSIC.map(y => ENGINE_TOP + y * SCALE);

// Card Y centers (4 cards of CARD_H, distributed with justify-between in CANVAS_H)
// gap = (325 - 4*50) / 3 = 41.67
const cardGap = (CANVAS_H - 4 * CARD_H) / 3;
const cardYs = Array.from({ length: 4 }, (_, i) => i * (CARD_H + cardGap) + CARD_H / 2);

const Engine = () => {
    return (
        <div className='flex justify-start xl:justify-center items-center w-full py-20 bg-background overflow-x-auto px-6 h-[80vh]'>
            <div className='relative shrink-0' style={{ width: CANVAS_W, height: CANVAS_H }}>

                {/* SVG Overlay for Connections */}
                <svg className='absolute inset-0 pointer-events-none' width={CANVAS_W} height={CANVAS_H} viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`} fill="none">
                    {/* Left connections */}
                    {cardYs.map((y, i) => (
                        <path
                            key={`left-${i}`}
                            d={generateStepCurve(CARD_W, y, engineLeftX, engineYs[i])}
                            stroke="#EB3B2F"
                            strokeOpacity="0.4"
                            strokeWidth="1.5"
                            fill="none"
                        />
                    ))}
                    {/* Right connections */}
                    {cardYs.map((y, i) => (
                        <path
                            key={`right-${i}`}
                            d={generateStepCurve(CANVAS_W - CARD_W, y, engineRightX, engineYs[i])}
                            stroke="#EB3B2F"
                            strokeOpacity="0.4"
                            strokeWidth="1.5"
                            fill="none"
                        />
                    ))}
                </svg>

                {/* Left Cards */}
                <div className='absolute left-0 top-0 h-full flex flex-col justify-between' style={{ width: CARD_W }}>
                    {cardsLeft.map((text, i) => (
                        <div key={i} className='bg-white border border-primary/20 flex items-center justify-center relative' style={{ height: CARD_H }}>
                            <span className='text-[14px] font-bold text-text-color'>{text}</span>
                            <div className='absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full' />
                        </div>
                    ))}
                </div>

                {/* Center Engine Graphic — use raw img for exact pixel sizing */}
                <div className='absolute z-10' style={{ left: ENGINE_LEFT, top: ENGINE_TOP, width: ENGINE_W, height: ENGINE_H }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/Engine.svg" alt="Central Nervous System Engine" width={ENGINE_W} height={ENGINE_H} style={{ display: 'block', width: ENGINE_W, height: ENGINE_H }} />
                </div>

                {/* Right Cards */}
                <div className='absolute right-0 top-0 h-full flex flex-col justify-between' style={{ width: CARD_W }}>
                    {cardsRight.map((text, i) => (
                        <div key={i} className='bg-white border border-primary/20 flex items-center justify-center relative' style={{ height: CARD_H }}>
                            <span className='text-[14px] font-bold text-text-color'>{text}</span>
                            <div className='absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full' />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Engine