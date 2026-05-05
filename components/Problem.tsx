import React from 'react'
import Image from 'next/image'

const Problem = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen gap-4'>
            <div>
                <Image src="/assets/Shiptos-Logo.svg" alt="" width={72} height={72} />
            </div>
            <h2 className='font-medium text-[26px] 2xl:text-[30px] text-text-color 2xl:max-w-[40%] max-w-[55%] text-center tracking-[1.6%] leading-[130%]'>Managing high-volume deliveries leads to inefficient routes, rising costs, limited visibility, and operational chaos—making it difficult to scale logistics while maintaining speed, control, and reliability.</h2>
        </div>
    )
}

export default Problem