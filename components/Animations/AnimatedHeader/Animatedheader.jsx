'use client'

import React, { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import "./AnimatedHeader.css"

export default function AnimatedHeader({
    children,
    animateOnScroll = false,
    scrub = false,
    delay = 0,
    stagger = 0.05,
    duration = 0.65,
}) {
    const containerRef = useRef(null)
    const splitRef = useRef(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        gsap.registerPlugin(SplitText, ScrollTrigger)
        setMounted(true)
    }, [])

    useGSAP(() => {
        if (!mounted || !containerRef.current) return;

        const el = containerRef.current.querySelector('.animated-header-content') || containerRef.current;

        splitRef.current = new SplitText(el, {
            type: "lines, words, chars",
            linesClass: "line",
            wordsClass: "word",
            charsClass: "char",
        });

        const { chars, lines } = splitRef.current;

        gsap.set(chars, {
            x: 100,
            opacity: 0,
            skewX: 20,
        });

        const charMeta = lines.flatMap((line) => {
            const lineChars = chars.filter((c) => line.contains(c));
            return lineChars.map((char, charIndexInLine) => ({
                char,
                charIndexInLine,
            }))
        })

        const animate = (tl) => {
            charMeta.forEach(({ char, charIndexInLine }) => {
                tl.to(
                    char,
                    {
                        x: 0,
                        opacity: 1,
                        skewX: 0,
                        ease: "power3.out",
                        duration,
                    },
                    charIndexInLine * stagger
                );
            });
            return tl;
        };

        if (animateOnScroll) {
            const tl = gsap.timeline({ paused: true, delay })
            animate(tl)

            ScrollTrigger.create({
                trigger: el,
                start: "top 100%",
                onEnter: () => tl.restart(),
                onLeaveBack: () => tl.pause(0)
            })
        } else if (scrub) {
            const tl = gsap.timeline({ paused: true })
            animate(tl)

            ScrollTrigger.create({
                trigger: el,
                start: "top 90%",
                end: "top 45%",
                scrub: true,
                animation: tl
            })
        } else {
            const tl = gsap.timeline({ delay });
            animate(tl)
        }

        return () => {
            if (splitRef.current) {
                splitRef.current.revert()
            }
        }

    }, {
        scope: containerRef,
        dependencies: [mounted]
    })

    if (!React.isValidElement(children)) return null;

    // Wrapper div isolates SplitText DOM mutations from React's tree
    return (
        <div ref={containerRef} className="animated-header-wrapper">
            {React.cloneElement(children, {
                className: `${children.props?.className || ""} animated-header-content`.trim()
            })}
        </div>
    );
}