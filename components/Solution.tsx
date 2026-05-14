import React from 'react'
import Image from 'next/image'
import AnimatedText from '@/components/Animations/AnimatedText/AnimatedText'


const Solution = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen gap-4'>
            <div>
                <Image style={{ width: 'auto', height: 'auto' }} src="/assets/Shiptos-Logo.svg" alt="" width={72} height={72} />
            </div>
            <AnimatedText animateOnscroll>
                <h2 className='font-medium text-[26px] 2xl:text-[30px] text-text-color 2xl:max-w-[40%] max-w-[55%] text-center tracking-[1.6%] leading-[130%]'>Shiptos brings routing, dispatch, and real-time tracking into one intelligent platform—helping you reduce costs, improve efficiency, and scale delivery operations with complete control.</h2>
            </AnimatedText>
        </div>
    )
}

export default Solution