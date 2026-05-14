'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import { NavDropdownContent } from './navData'


interface NavDropdownProps {
    content: NavDropdownContent
}

const NavDropdown: React.FC<NavDropdownProps> = ({ content }) => {
    return (
        <motion.div
            initial={{ y: -12 }}
            animate={{ y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{ willChange: 'transform, opacity' }}
            transition={{
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute top-full left-0 w-full bg-background border-b border-text-color/20 z-40"
        >
            <div className="px-20 2xl:px-48 py-10 2xl:py-12 flex gap-16 2xl:gap-24">
                {/* Left Column — Title, Subtitle, CTA */}
                <div className="flex flex-col  min-w-[220px] 2xl:min-w-[260px] max-w-[280px] 2xl:max-w-[300px] shrink-0">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-HelveticaNeue font-bold text-[24px] 2xl:text-[28px] text-text-color leading-[120%]">
                            {content.title}
                        </h3>
                        <p className="text-[14px] 2xl:text-[15px] text-text-color/60 leading-[160%]">
                            {content.subtitle}
                        </p>
                    </div>

                    <div className="mt-8">
                        <Link href={content.buttonHref}>
                            <Button variant="outline" className="text-[13px] 2xl:text-[14px] px-5 py-2">
                                {content.buttonLabel}
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right Column — Links */}
                <div className={`flex-1 ${content.links.length > 6 ? 'grid grid-cols-2 gap-x-12 2xl:gap-x-16 gap-y-1' : 'flex flex-col'}`}>
                    {content.links.map((link, index) => (
                        <div key={index}>
                            <Link
                                href={link.href}
                                className="group/link flex items-center gap-4 py-3 2xl:py-3.5 hover:text-primary"

                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-4">
                                        <link.icon className="w-5 h-5 2xl:w-[22px] 2xl:h-[22px] text-text-color/50 group-hover/link:text-primary transition-colors shrink-0" />
                                        <span className="text-[13px] 2xl:text-[14px] text-text-color group-hover/link:text-primary font-medium tracking-wide">
                                            {link.label}
                                        </span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-text-color/30 group-hover/link:text-primary group-hover/link:translate-x-1 transition-all ml-auto shrink-0" />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default NavDropdown
