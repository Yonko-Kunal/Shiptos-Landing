'use client'

import React, { useState, useRef, useCallback } from 'react'
import Images from 'next/image'
import Link from 'next/link'
import shiptosTextLogo from '@/public/assets/Shiptos-Logo-Text.svg'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { AnimatePresence } from 'motion/react'
import { navItems } from './navData'
import NavDropdown from '@/components/layout/Navbar/NavDropdown'

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleOpen = useCallback((name: string) => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current)
            closeTimeoutRef.current = null
        }
        setActiveDropdown(name)
    }, [])

    const handleClose = useCallback(() => {
        closeTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null)
        }, 150) // small delay so cursor can travel to dropdown
    }, [])

    const handleDropdownEnter = useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current)
            closeTimeoutRef.current = null
        }
    }, [])

    const activeItem = navItems.find((item) => item.name === activeDropdown)

    return (
        <div
            className="fixed top-0 z-50 w-full"
            onMouseLeave={handleClose}
        >
            {/* Navbar bar */}
            <div className="bg-background flex justify-between w-full items-center px-20 2xl:px-48 py-4 2xl:py-6 border-b border-text-color/20 relative z-10">
                <div>
                    <Link href="/">
                        <Images
                            src={shiptosTextLogo}
                            alt="Logo"
                            priority
                        />
                    </Link>
                </div>

                <div className="w-full">
                    <ul className="flex text-[13px] 2xl:text-[15px] 2xl:gap-10 gap-6 justify-center tracking-[1.6%]">
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                className={`font-plexMono cursor-pointer flex items-center gap-1 transition-colors ${activeDropdown === item.name ? 'text-primary' : 'hover:text-primary'}`}
                                onMouseEnter={() => item.nested ? handleOpen(item.name) : handleClose()}
                            >
                                <Link href={item.href} className="flex items-center gap-1" onClick={() => setActiveDropdown(null)}>
                                    {item.name}
                                    {item.nested && (
                                        <ChevronRight
                                            className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-90' : ''}`}
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <Button variant="primary" className="text-[16px] px-6 py-[10px]">
                        See demos
                    </Button>
                </div>
            </div>

            {/* Dropdown panel */}
            <AnimatePresence mode="wait">
                {activeItem?.dropdown && (
                    <div
                        key={activeItem.name}
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleClose}
                    >

                        <NavDropdown content={activeItem.dropdown} />

                    </div>
                )}
            </AnimatePresence>

            {/* Overlay backdrop */}
            <AnimatePresence>
                {activeDropdown && activeItem?.dropdown && (
                    <div
                        className="fixed inset-0 bg-black/10 -z-10"
                        onClick={() => setActiveDropdown(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar