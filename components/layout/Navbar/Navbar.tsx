'use client'

import React, { useState, useRef, useCallback, useEffect } from 'react'
import Images from 'next/image'
import Link from 'next/link'
import shiptosTextLogo from '@/public/assets/Shiptos-Logo-Text.svg'
import { Button } from '@/components/ui/button'
import { ChevronRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { navItems } from './navData'
import NavDropdown from '@/components/layout/Navbar/NavDropdown'

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)

    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

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
        }, 150)
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
            {/* Main Navbar Bar */}
            <div className="bg-background flex justify-between w-full items-center px-6 md:px-20 2xl:px-48 py-4 2xl:py-6 border-b border-text-color/20 relative z-50">
                <div>
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <Images
                            src={shiptosTextLogo}
                            alt="Logo"
                            priority
                            className="h-6 w-auto md:h-auto"
                        />
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:block w-full">
                    <ul className="flex text-[13px] 2xl:text-[15px] justify-center tracking-[1.6%] ">
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => {
                                    setHoveredItem(item.name)
                                    if (item.nested) {
                                        handleOpen(item.name)
                                    } else {
                                        handleClose()
                                    }
                                }}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`relative py-3 px-5 flex items-center gap-1 font-plexMono cursor-pointer transition-colors duration-200 ${activeDropdown === item.name
                                        ? 'text-primary'
                                        : 'hover:text-primary'
                                        }`}
                                    onClick={() => setActiveDropdown(null)}
                                >
                                    {hoveredItem === item.name && (
                                        <motion.span
                                            layoutId="navbar-hover-indicator"
                                            transition={{
                                                type: 'spring',
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                            className="absolute top-0 left-0 h-full w-full bg-primary/5 rounded-[8px]"
                                        />
                                    )}

                                    {item.name}

                                    {item.nested && (
                                        <ChevronRight
                                            className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name
                                                ? 'rotate-90'
                                                : ''
                                                }`}
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Button */}
                <div className="hidden lg:block">
                    <Button
                        variant="primary"
                        className="text-[16px] px-6 py-[10px]"
                    >
                        See demos
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-text-color focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Desktop Dropdown Panel */}
            <AnimatePresence mode="wait">
                {activeItem?.dropdown && !isMobileMenuOpen && (
                    <div
                        key={activeItem.name}
                        onMouseEnter={handleDropdownEnter}
                        onMouseLeave={handleClose}
                    >
                        <NavDropdown content={activeItem.dropdown} />
                    </div>
                )}
            </AnimatePresence>

            {/* Desktop Overlay Backdrop */}
            <AnimatePresence>
                {activeDropdown && activeItem?.dropdown && !isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/10 -z-10"
                        onClick={() => setActiveDropdown(null)}
                    />
                )}
            </AnimatePresence>

            {/* Full-screen Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.35, ease: 'anticipate' }}
                        className="fixed inset-0 top-[60px] bg-background z-40 flex flex-col lg:hidden"
                    >
                        {/* nav items */}
                        <div className="flex-1 overflow-y-auto px-6 pt-8 pb-6">
                            <ul className="flex flex-col gap-6">
                                {navItems.map((item) => (
                                    <li key={item.name} className="flex flex-col border-b border-text-color/10 pb-4">
                                        <div
                                            className="flex items-center justify-between text-[16px] font-plexMono font-medium cursor-pointer"
                                            onClick={() => {
                                                if (item.nested) {
                                                    setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name)
                                                } else {
                                                    setIsMobileMenuOpen(false)
                                                }
                                            }}
                                        >
                                            <Link href={item.href} onClick={(e) => {
                                                if (item.nested) e.preventDefault()
                                                else setIsMobileMenuOpen(false)
                                            }}>
                                                {item.name}
                                            </Link>
                                            {item.nested && (
                                                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${expandedMobileItem === item.name ? 'rotate-90 text-primary' : ''}`} />
                                            )}
                                        </div>

                                        {/* Mobile Accordion — links only, no subtitle */}
                                        <AnimatePresence>
                                            {item.nested && expandedMobileItem === item.name && item.dropdown && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25, ease: 'anticipate' }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-4 flex flex-col gap-3">
                                                        {item.dropdown.links.map((link) => (
                                                            <Link
                                                                key={link.label}
                                                                href={link.href}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="flex items-center gap-3 text-[15px] hover:text-primary transition-colors"
                                                            >
                                                                <div className="p-2 bg-text-color/5 rounded-md">
                                                                    <link.icon className="w-4 h-4" />
                                                                </div>
                                                                {link.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Fixed bottom button */}
                        <div className="shrink-0 px-6 py-4 bg-background border-t border-text-color/10">
                            <Button
                                variant="primary"
                                className="w-full text-[16px] py-[12px]"
                            >
                                See demos
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar