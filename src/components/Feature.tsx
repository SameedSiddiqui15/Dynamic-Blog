import Link from 'next/link'
import React from 'react'

export default function Feature() {
    return (
        <div>
            <section className="container py-4 bg-neutral-50 mb-20">
                <h2 className="text-center text-3xl font-bold md:text-4xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600 lg:mx-2">Sameed Siddiqui : <br /><span className='lg:flex lg:justify-end'>Exploring the Depths of Technology Through Thoughtful Insights</span> </h2>
                <p className="text-center m-4 mt-4 text-sm text-slate-800 sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
                Sameed Siddiqui has always been captivated by the intricate and ever-evolving world of technology. Through his writing, he embarks on a journey to explore the depths of innovation, unraveling complex ideas and presenting them with clarity and thoughtfulness. His insights delve into the transformative impact of technology on our lives, bridging the gap between technical intricacies and everyday understanding. By weaving together analysis, creativity, and curiosity, Sameed&rsquo;s work offers readers a fresh perspective on how technology shapes the present and redefines the future.
                </p>
                <div className="mx-auto max-w-7xl px-5">
                    <h1 className="text-3xl font-bold text-center my-8 animate-color-change">Exploring Our Tech Categories</h1>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 animate-fade-in-up delay-100">
                        {[
                            "Artificial Intelligence",
                            "Cybersecurity Threats",
                            "Quantum Computing",
                            "5G Networks",
                            "Data Privacy",
                            "Crypto Currencies",
                            "Climate Change",
                            "Remote & Automation",
                            "AI Ethics",
                            "AR and VR",
                            "Edge Computing",
                            "Internet of Things (IoT)",
                        ].map((category, index) =>(
                            <Link href={'../../Blog'}>
                            <div className="relative group px-2 py-6 bg-white rounded-lg shadow-lg hover:bg-blue-700 hover:text-white hover:border-none transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600" key={index}>
                                <p className="text-center text-sm font-serif">{category}</p>
                                <div className="absolute inset-0 border-2 border-transparent rounded-lg transition duration-300 ease-in-out"></div>
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
                Explore our wide array of categories, offering a wealth of information and insights designed to match your interests. Each section includes thoughtfully crafted blogs that delve into the newest trends, groundbreaking technologies, and vital skills in web development and beyond. Whether you&rsquo;re an aspiring developer, a seasoned tech enthusiast, or just curious about the digital world, you&rsquo;ll find something valuable here. Browse through the categories below to deepen your knowledge and discover the ever-changing world of technology.
                </p>
            </section>
        </div>
    )
}
