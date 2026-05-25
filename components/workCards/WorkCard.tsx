import React from 'react'
import { type LucideIcon } from 'lucide-react'

interface Tag {
    label: string
    icon: LucideIcon
}

interface WorkCardProps {
    stepNumber: string
    icon: LucideIcon
    title: string
    description: string
    tagsLabel: string
    tags: Tag[]
}

const WorkCard = ({ stepNumber, icon: Icon, title, description, tagsLabel, tags }: WorkCardProps) => {
    return (
        <div className='bg-background border border-text-color/20 px-4 md:px-6 2xl:px-8 pb-6 md:pb-8 pt-6 md:pt-8 flex flex-col items-center w-full md:h-[80vh] h-auto 2xl:mt-40 md:mt-20 mt-2 rounded-xl'>
            <div className='w-full text-left'>
                <p className='text-primary/40 tracking-widest font-bold text-2xl md:text-3xl 2xl:text-5xl mb-4 md:mb-6 font-HelveticaNeue'>{stepNumber}</p>
            </div>

            <div className='w-16 h-16 md:w-20 md:h-20 2xl:w-24 2xl:h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6 shrink-0'>
                <Icon className='w-6 h-6 md:w-8 md:h-8 2xl:w-12 2xl:h-12 text-primary stroke-[2.5px]' />
            </div>

            <h3 className='text-[18px] md:text-[20px] 2xl:text-[24px] font-bold text-text-color mb-3 md:mb-4 text-center'>{title}</h3>

            <p className='text-text-color/80 text-center mb-6 md:mb-10 text-[13px] md:text-[14px] 2xl:text-[16px] leading-relaxed'>{description}</p>

            <div className='w-full flex flex-col mt-auto'>
                <p className='text-[10px] md:text-[11px] font-bold tracking-widest text-[#666] uppercase mb-3 md:mb-4'>{tagsLabel}</p>
                <div className='flex flex-wrap gap-1.5 md:gap-2 h-auto md:h-[90px] content-start'>
                    {tags.map((tag, i) => (
                        <div key={i} className='flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-md px-2 py-1 md:px-2.5 md:py-1.5'>
                            <tag.icon className='w-3 h-3 md:w-3.5 md:h-3.5 2xl:w-4 2xl:h-4 text-primary stroke-[1.5px]' />
                            <span className='text-[10px] md:text-[11px] 2xl:text-[13px] text-text-color font-medium whitespace-nowrap'>{tag.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkCard