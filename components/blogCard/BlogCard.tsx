import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
    imageSrc: string;
    date: string;
    readTime: string;
    title: string;
    description: string;
    link?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imageSrc, date, readTime, title, description, link = "#" }) => {
    return (
        <div className='bg-white border border-primary/20 p-5 2xl:p-6 flex flex-col gap-5 2xl:gap-6 group md:h-[80vh]'>
            {/* Image Container with Red Duotone Effect */}
            <div className='relative w-full aspect-[1.6] bg-primary overflow-hidden'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={imageSrc}
                    alt={title}
                    className='w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out'
                />

            </div>

            {/* Content */}
            <div className='flex flex-col flex-1'>
                <p className='text-[11px] 2xl:text-[12px] text-text-color/60 font-medium mb-2.5'>
                    {date} <span className="mx-1">•</span> {readTime}
                </p>
                <h3 className='text-[16px] 2xl:text-[18px] font-bold text-text-color mb-3 leading-[1.3] line-clamp-2'>
                    {title}
                </h3>
                <p className='text-[13px] 2xl:text-[14px] text-text-color/70 leading-relaxed mb-6 line-clamp-3'>
                    {description}
                </p>

                {/* Footer link pushed to bottom */}
                <div className='mt-auto'>
                    <Link href={link} className='inline-flex items-center gap-2 text-primary font-bold text-[13px] 2xl:text-[14px] hover:gap-3 transition-all'>
                        Read More <ArrowRight className='w-4 h-4' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard