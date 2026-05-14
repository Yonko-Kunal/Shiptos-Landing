import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Cloud from '@/public/assets/DottedSVGs/Cloud'
import NotFoundSVG from '@/public/assets/DottedSVGs/notFoundSVG'
import { Package, Box, BookOpen, Users, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
    return (
        <div className='relative flex flex-col items-center min-h-screen w-full overflow-x-hidden pt-24 pb-32 font-HelveticaNeue'>



            {/* 404 Graphic Section */}
            <div className='relative w-full max-w-[100px] flex justify-center items-center mt-12 md:mt-24 mb-16'>
                {/* Background Dashed Line SVG */}
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] min-w-[780px] pointer-events-none -z-10'>
                    <NotFoundSVG />
                </div>

                {/* 4 0 4 Text */}
                <div className='relative z-20 flex items-center justify-center text-text-color font-black 2xl:text-[140px] md:text-[90px] leading-none tracking-tighter'>
                    <span>4</span>
                    <div className='relative w-[140px] h-[140px] md:w-[120px] md:h-[120px] rounded-full  flex items-center justify-center '>
                        <Image style={{ width: 'auto', height: 'auto' }} src="/assets/Shiptos-Logo.svg" alt="Shiptos Logo" width={40} height={40} className='w-[55%] h-[55%] object-contain' />
                    </div>
                    <span>4</span>
                </div>
            </div>

            {/* Text Section */}
            <div className='relative z-10 flex flex-col items-center text-center px-4'>
                <h1 className=' 2xl:text-[32px] md:text-[24px] font-bold text-text-color leading-[1.2] mb-4'>
                    Looks like we've<br />lost this route.
                </h1>
                <p className='2xl:text-[16px] md:text-[15px] text-text-color/50 max-w-md mb-10'>
                    The page you're looking for might have been moved, removed, or never existed.
                </p>

                {/* Buttons */}
                <div className='flex flex-col sm:flex-row items-center gap-6'>
                    <Link href="/"><Button variant="primary">Return to Homepage</Button></Link>
                    <Link href="/platform"><Button variant="outline">Explore Solutions</Button></Link>
                </div>
            </div>

        </div>
    )
}

export default NotFoundPage