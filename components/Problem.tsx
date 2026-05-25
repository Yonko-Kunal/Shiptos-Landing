import React from 'react'
import Image from 'next/image'
import AnimatedText from '@/components/Animations/AnimatedText/AnimatedText'

const Problem = () => {
    return (
        <div className='flex flex-col md:items-center items-start md:justify-center justify-center w-full h-[50%] gap-4'>
            <div className="w-12 h-12 md:w-[72px] md:h-[72px] mx-4">
                <Image
                    src="/assets/Shiptos-Logo.svg"
                    alt=""
                    width={72}
                    height={72}
                    className="w-full h-full"
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
            <AnimatedText animateOnscroll>
                <h2 className='font-medium md:text-[26px] text-[30px] 2xl:text-[30px] text-text-color 2xl:max-w-[40%] md:max-w-[55%] max-w-full md:text-center text-start tracking-[1.6%] leading-[130%] px-4'>Managing high-volume deliveries leads to inefficient routes, rising costs, limited visibility, and operational chaos—making it difficult to scale logistics while maintaining speed, control, and reliability.</h2>
            </AnimatedText>
        </div>
    )
}

export default Problem