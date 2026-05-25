'use client'

import Buildings from '@/public/assets/DottedSVGs/Buildings'
import Warehouse from '@/public/assets/DottedSVGs/Warehouse'
import Truck from '@/public/assets/DottedSVGs/Truck'
import Graph from '@/public/assets/DottedSVGs/graph'
import Path from '@/public/assets/DottedSVGs/Path'
import Equation from '@/public/assets/DottedSVGs/Equation'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function LogisticsScene() {
    const sceneRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sceneRef, { once: true, amount: 0.3 })

    return (
        <div ref={sceneRef} className='absolute inset-0 overflow-hidden'>



            {/* Equation — drifts in from the left with a subtle float */}
            <motion.div
                className='absolute md:top-[15%] top-[35%] left-[5%] 2xl:w-[200px] md:w-[120px] w-[160px] opacity-40'
                initial={{ opacity: 0, x: -40, y: 10 }}
                animate={isInView ? { opacity: 0.4, x: 0, y: [10, 0, 6, 0] } : {}}
                transition={{
                    opacity: { duration: 1.2, delay: 0.3, ease: 'easeOut' },
                    x: { duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] },
                    y: { duration: 6, delay: 0.3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
                }}
            >
                <Equation />
            </motion.div>

            {/* TOP GRAPH — slides down from off-screen with a crisp deceleration */}
            <motion.div
                className='absolute top-[10%] right-0 2xl:w-[580px] md:w-[340px] w-[340px] opacity-40'
                initial={{ opacity: 0, y: -60 }}
                animate={isInView ? { opacity: 0.4, y: 0 } : {}}
                transition={{
                    duration: 1.6,
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                <Graph />
            </motion.div>

            {/* LEFT WAREHOUSE — rises from the ground */}
            <motion.div
                className='absolute bottom-[7%] left-[5%] 2xl:w-[230px] md:w-[140px] w-[120px] opacity-30'
                initial={{ opacity: 0, y: 50, scale: 0.92 }}
                animate={isInView ? { opacity: 0.3, y: 0, scale: 1 } : {}}
                transition={{
                    duration: 1.4,
                    delay: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                <Warehouse />
            </motion.div>

            {/* RIGHT BUILDINGS — rises from the ground, staggered after warehouse */}
            <motion.div
                className='absolute md:bottom-[12%] bottom-[8%] right-[5%] 2xl:w-[250px]  md:w-[150px] w-[120px] opacity-20'
                initial={{ opacity: 0, y: 50, scale: 0.92 }}
                animate={isInView ? { opacity: 0.2, y: 0, scale: 1 } : {}}
                transition={{
                    duration: 1.4,
                    delay: 1.1,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                <Buildings />
            </motion.div>

            {/* ROAD — draws in from left to right via clip-path */}
            <motion.div
                className='absolute bottom-[6%] left-0 w-full opacity-30'
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
                transition={{
                    duration: 2,
                    delay: 1.3,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                <Path />
            </motion.div>

            {/* TRUCK — animated via GSAP in the parent component */}
            <div
                id='scrub-truck'
                className='absolute bottom-[6.3%] left-[-10%] 2xl:w-[180px] md:w-[100px] w-[100px] z-20'
            >
                <Truck />
            </div>

            {/* <motion.div
                className='absolute bottom-[6.3%] left-[20%] 2xl:w-[180px] md:w-[100px]'
                animate={{
                    x: [0, 800],
                }}
                transition={{
                    duration: 6,
                    delay: 1,
                    repeat: 0,
                    ease: 'easeInOut',
                }}
            >
                <Truck />
            </motion.div> */}

        </div>
    )
}