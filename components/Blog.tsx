import React from 'react'
import BlogCard from './blogCard/BlogCard'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'

const Blog = () => {
    const blogPosts = [
        {
            imageSrc: "/BlogImages/Blog1_img.png",
            date: "May 20, 2025",
            readTime: "5 min read",
            title: "5 Ways Smart Routing Reduces Delivery Costs",
            description: "Discover how intelligent route optimization can cut fuel costs, reduce delays, and improve customer satisfaction."
        },
        {
            imageSrc: "/BlogImages/Blog2_img.png",
            date: "May 15, 2025",
            readTime: "4 min read",
            title: "The Hidden Costs of Inefficient Logistics",
            description: "Uncover the unseen expenses hurting your supply chain—and how to eliminate them with the right technology."
        },
        {
            imageSrc: "/BlogImages/Blog3_img.png",
            date: "May 10, 2025",
            readTime: "6 min read",
            title: "Real-Time Visibility: A Game Changer",
            description: "Learn how real-time tracking and visibility empower faster decisions and stronger customer trust."
        }
    ]

    return (
        <section className='w-full bg-background py-20 2xl:py-28 px-8 2xl:px-24 flex flex-col items-center gap-12 2xl:gap-16'>
            {/* Header section matching Working.tsx style */}
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col items-center justify-center mb-4'>
                    <p className='text-[12px] text-primary font-bold tracking-widest uppercase mb-3'>
                        FROM OUR BLOG
                    </p>
                    <h2 className='text-center font-HelveticaNeue font-bold 2xl:text-[48px] md:text-[36px] text-text-color leading-tight'>
                        Latest Insights
                    </h2>
                </div>
                <p className='2xl:text-[16px] md:text-[14px] text-text-color/70 max-w-xl text-center leading-relaxed'>
                    Explore expert perspectives, industry trends, and practical tips to<br className="hidden md:block" /> streamline your logistics operations.
                </p>
            </div>

            {/* Grid of cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-8 w-full max-w-[1400px]'>
                {blogPosts.map((post, index) => (
                    <BlogCard key={index} {...post} />
                ))}
            </div>

            {/* View All Button */}
            <Button variant={"outline"} className='px-[24px] py-[10px]'>Learn more <ArrowRight className="w-4 h-4" /></Button>
        </section>
    )
}

export default Blog