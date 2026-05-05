import React from 'react'
import AnimatedHeader from './AnimatedHeader/Animatedheader'

const WhyShiptosQuestion = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen gap-4'>
            <AnimatedHeader animateOnScroll>
                <h1 className='text-center font-HelveticaNeue font-bold 2xl:text-[96px] md:text-[80px] 2xl:w-3xl md:w-2xl 2xl:leading-25 md:leading-20'>But, Why Shiptos ?</h1>
            </AnimatedHeader>
        </div>
    )
}

export default WhyShiptosQuestion