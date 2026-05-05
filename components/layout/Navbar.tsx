import React from 'react'
import Images from 'next/image'
import Link from 'next/link'
import shiptosTextLogo from '@/public/assets/Shiptos-Logo-Text.svg'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react';

const Navbar = () => {

    const navItems = [
        {
            name: 'Platform',
            href: '/platform',
            nested: true
        },
        {
            name: 'Product',
            href: '/product',
            nested: true
        },
        {
            name: 'Industries',
            href: '/industries',
            nested: true
        },
        {
            name: 'Resources',
            href: '/resources',
            nested: true
        },
        {
            name: 'Company',
            href: '/company',
            nested: true
        },
        {
            name: 'Customers',
            href: '/customers',
            nested: false
        }
    ]
    return (

        <div className='fixed top-0 z-50 bg-background flex justify-between w-full items-center px-8 2xl:px-24 py-4 2xl:py-6 border-b border-text-color/20'>
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
                        <li key={item.name} className="hover:text-primary font-plexMono cursor-pointer flex items-center gap-1 group">
                            <Link href={item.href} className="flex items-center gap-1">
                                {item.name}
                                {item.nested && (
                                    <ChevronRight className='w-4 h-4 transition-transform group-hover:rotate-90' />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
            <div>
                <Button variant="primary" className='text-[16px] px-6 py-[10px]'>See demos</Button>
            </div>
        </div>
    )
}

export default Navbar