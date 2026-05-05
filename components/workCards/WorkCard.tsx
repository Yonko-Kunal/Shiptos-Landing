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
        <div className='bg-background border border-text-color/20 rounded-sm px-3 pb-8 pt-4 flex flex-col items-center w-full 2xl:h-[95%] md:h-[90%]'>
            <div className='w-full text-left'>
                <p className='text-primary/40 tracking-widest font-bold 2xl:text-5xl md:text-3xl mb-6 font-HelveticaNeue '>{stepNumber}</p>
            </div>

            <div className='w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6'>
                <Icon className='2xl:w-12  2xl:h-12 w-8 h-8 text-primary stroke-[2.5px]' />
            </div>

            <h3 className='2xl:text-[18px] md:text-[16px] font-bold text-text-color mb-4 text-center '>{title}</h3>

            <p className='text-text-color/80 text-center mb-10 2xl:text-[16px] md:text-[12px] leading-relaxed'>{description}</p>

            <div className='w-full flex flex-col mt-auto'>
                <p className='text-[11px] font-bold tracking-widest text-[#666] uppercase mb-4'>{tagsLabel}</p>
                <div className='flex flex-wrap gap-1.5 h-[90px] content-start'>
                    {tags.map((tag, i) => (
                        <div key={i} className='flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-md px-2 py-1'>
                            <tag.icon className='w-3.5 h-3.5 text-primary stroke-[1.5px]' />
                            <span className='2xl:text-[13px] md:text-[11px] text-text-color font-medium whitespace-nowrap'>{tag.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkCard