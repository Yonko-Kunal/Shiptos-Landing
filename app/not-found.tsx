import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NotFoundSVG from '@/public/assets/DottedSVGs/notFoundSVG'
import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
    return (
        <div className='relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden pt-16 md:pt-24 pb-20 md:pb-32 px-4 font-HelveticaNeue'>

            {/* 404 Graphic */}
            <div className='relative w-full flex justify-center items-center mt-8 md:mt-20 mb-12 md:mb-16'>

                {/* Background SVG */}
                <div className='absolute inset-0 flex items-center justify-center pointer-events-none -z-10'>
                    <div className='w-[320px] sm:w-[500px] md:w-[780px]'>
                        <NotFoundSVG />
                    </div>
                </div>

                {/* 404 */}
                <div className='relative z-20 flex items-center justify-center text-text-color font-black text-[72px] sm:text-[100px] md:text-[120px] 2xl:text-[140px] leading-none tracking-tighter'>
                    <span>4</span>

                    <div className='relative w-[72px] h-[72px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-full flex items-center justify-center'>
                        <Image
                            src="/assets/Shiptos-Logo.svg"
                            alt="Shiptos Logo"
                            width={40}
                            height={40}
                            className='w-[55%] h-[55%] object-contain'
                        />
                    </div>

                    <span>4</span>
                </div>
            </div>

            {/* Content */}
            <div className='relative z-10 flex flex-col items-center text-center max-w-lg'>
                <h1 className='text-[24px] sm:text-[28px] md:text-[32px] font-bold text-text-color leading-tight mb-4'>
                    Looks like we've
                    <br />
                    lost this route.
                </h1>

                <p className='text-[14px] sm:text-[15px] md:text-[16px] text-text-color/50 max-w-md mb-8 md:mb-10 px-2'>
                    The page you're looking for might have been moved, removed, or never existed.
                </p>

                {/* Buttons */}
                <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto'>
                    <Link href="/" className='w-full sm:w-auto'>
                        <Button variant="primary" className='w-full sm:w-auto'>
                            Return to Homepage
                        </Button>
                    </Link>

                    <Link href="/platform" className='w-full sm:w-auto'>
                        <Button variant="outline" className='w-full sm:w-auto'>
                            Explore Solutions
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage