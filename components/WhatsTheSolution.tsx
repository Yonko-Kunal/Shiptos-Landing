import React from 'react'
import Image from 'next/image'
import AnimatedHeader from '@/components/Animations/AnimatedHeader/Animatedheader'

const Solution = () => {
    return (
        <div className='flex flex-col md:items-center items-start md:justify-center justify-center w-full h-[90vh] gap-4'>
            <AnimatedHeader animateOnScroll>
                <h1 className='md:text-center text-start font-HelveticaNeue font-bold 2xl:text-[96px] md:text-[80px] text-[64px] text-text-color  2xl:w-4xl md:w-2xl 2xl:leading-25 md:leading-20 leading-15 px-4 '>So, what’s the solution then ?</h1>
            </AnimatedHeader>
        </div>
    )
}

export default Solution