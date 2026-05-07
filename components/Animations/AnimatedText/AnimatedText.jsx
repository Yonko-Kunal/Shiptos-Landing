'use client'

import React, { useRef } from 'react'

import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(SplitText, ScrollTrigger)


export default function TextAnimation({ children, animateOnscroll = true, delay = 0, className = "" }) {
    const containerRef = useRef(null)
    const elementRef = useRef([])
    const splitRef = useRef([])
    const lines = useRef([])

    useGSAP(() => {
        if (!containerRef.current) return

        splitRef.current = [],
            elementRef.current = [],
            lines.current = []

        let element = []
        if (containerRef.current.hasAttribute("data-copy-wrapper")) {
            element = Array.from(containerRef.current.children)
        } else {
            element = [containerRef.current]
        }

        element.forEach((element) => {
            elementRef.current.push(element)

            const split = SplitText.create(element, {
                type: "lines",
                mask: "lines",
                linesClass: "line++",
            })

            splitRef.current.push(split)

            const computedStyles = window.getComputedStyle(element)
            const textIndent = computedStyles.textIndent

            if (textIndent && textIndent === "0px") {
                if (split.lines.length > 0) {
                    split.lines[0].style.paddingLeft = textIndent
                }
                element.style.textIndent = "0"
            }
            lines.current.push(...split.lines)
        })

        gsap.set(lines.current, {
            y: '100%',
        })

        const animationProps = {
            y: '0%',
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
            delay: delay,
        }

        if (animateOnscroll) {
            gsap.to(lines.current, {
                ...animationProps,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    once: true,
                }
            })
        } else {
            gsap.to(lines.current, animationProps)
        }

        return () => {
            splitRef.current.forEach((split) => {
                if (split) {
                    split.revert()
                }
            })
        }

    }, {
        scope: containerRef,
        dependencies: [animateOnscroll, delay],

    })

    if (React.Children.count(children) === 1) {
        return React.cloneElement(children, { ref: containerRef })
    }

    return (
        <div ref={containerRef} data-copy-wrapper="true">
            {children}
        </div>
    )
}