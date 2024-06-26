'use client'
import Image from "next/image";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { ReactLenis, useLenis } from 'lenis/react';
import { rxpressThumb, previewArrow, githubIcon } from "../../assets";



export const HoverImageLinks = () => {
    const lenis = useLenis(({ scroll }) => {
    })
        return (
            <ReactLenis root>


                    <div className="md:flex md:flex-col md:pb-[150px] bg-background">
                        <div className="md:flex md:flex-row">
                            <div className="md:my-4 md:pl-[600px]">
                                <h1 className="font-worksansbold text-header md:text-[40px]">PROJECTS</h1>
                                {/* <h1 className="font-worksansbold text-header text-[40px] opacity-60 mt-[-20px]">PROJECTS</h1>
                                <h1 className="font-worksansbold text-header text-[40px] opacity-40 mt-[-20px]">PROJECTS</h1> */}
                            </div>

                            <section>
                                <div className="md:pl-[50px]">
                                    <Link
                                        heading="Nova"
                                        subheading="All-in-one financial Management Platform"
                                        // imgSrc={rxpressThumb}
                                        href="#"
                                    />
                                    <Link
                                        heading="RxPress"
                                        subheading="Prescription Delivery Service"
                                        // imgSrc=""
                                        href="https://rxpress-web.vercel.app/"
                                    />
                                    <Link
                                        heading="Opus-Space"
                                        subheading="Creative Web Design Agency"
                                        // imgSrc=""
                                        href="https://www.opusspace.ca/"

                                    />
                                </div>
                            </section>
                        </div>
                    </div>
                    
                </ReactLenis>
                );
        };

        const Link = ({ heading, imgSrc, subheading, href }) => {
            const ref = useRef(null);
            
            const x = useMotionValue(0);
            const y = useMotionValue(0);

            const mouseXspring = useSpring(x);
            const mouseYspring = useSpring(y);

            const top = useTransform(mouseYspring, [0.5, -0.5], ["40%", "60%"]);
            const left = useTransform(mouseXspring, [0.5, -0.5], ["60%", "70%"]);

            const handleMouseMove = (e) => {
                const rect = ref.current.getBoundingClientRect();
            
                const width = rect.width;
                const height = rect.height;
            
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
            
                const xPct = mouseX / width - 0.5;
                const yPct = mouseY / height - 0.5;
            
                x.set(xPct);
                y.set(yPct);
              };

        return (
            <motion.a
                href={href}
                ref={ref}
                onMouseMove={handleMouseMove}
                initial="initial"
                whileHover="whileHover"
                className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-black md:py-6"
            >
            <div>
                <motion.span
                    variants={{
                    initial: { x: 0 },
                    whileHover: { x: -16 },
                    }}
                    transition={{
                    type: "spring",
                    staggerChildren: 0.075,
                    delayChildren: 0.25,
                    }}
                    className="relative z-10 block text-4xl font-bold font-worksansbold text-text transition-colors duration-500 group-hover:text-black md:text-4xl"
                    target="_blank"
                >
                    {heading.split("").map((l, i) => (
                <motion.span
                    variants={{
                        initial: { x: 0 },
                        whileHover: { x: 16 },
                    }}
                    transition={{ type: "spring" }}
                    className="inline-block"
                    key={i}
                >
                    {l}
                </motion.span>
                ))}
            </motion.span>
            <span className="relative z-10 mt-2 block text-base text-worksans text-text transition-colors duration-500 group-hover:text-black">
            {subheading}
            </span>
            </div>
            <motion.img
                style={{
                top,
                left,
                translateX: "-50%",
                translateY: "-50%",
                }}
                variants={{
                initial: { scale: 0, rotate: "0" },
                whileHover: { scale: 1, rotate: "0" },
                }}
                transition={{ type: "spring", bounce: 0.10 }}
                // src={imgSrc}
                // className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
                // alt={`Image representing a link for ${heading}`}
            />
            <motion.div
                variants={{
                initial: {
                    x: "25%",
                    opacity: 0,
                },
                whileHover: {
                    x: "0%",
                    opacity: 1,
                },
                }}
                transition={{ type: "spring" }}
                className="relative z-10 p-4"
            >
            <FiArrowRight className="text-5xl group-hover:text-black" />
        </motion.div>
        </motion.a>
        )
    }

                        {/* <div className="flex gap-20">
                            <div className="flex flex-col h-full w-full bg-white rounded-lg dark:bg-gray-800 hover:-translate-y-2 hover:ease-in-out hover:duration-500">
                                <Image className="border border-gray-200 rounded-md" src={ rxpressThumb }/>
                                <div className="">
                                    <div className="flex justify-between mt-2 mb-2">
                                        <p className="flex cursor-pointer underline underline-offset-4 gap-2 font-worksans"><Image className="w-6" src={previewArrow}/>View Site</p> 
                                        <p className="flex cursor-pointer underline underline-offset-4 gap-2 font-worksans"><Image className="w-6" src={githubIcon}/>View Code</p>
                                    </div>
                                    <h1 className="text-[28px] font-worksanssemibold text-secondary">RxPress</h1>
                                    <p className="text-[18px] font-worksans text-secondary">Prescription Delivery Web Platform</p>
                                    <div className="flex gap-4 mt-2">
                                        <p className="bg-slate-500 font-worksans text-white py-1 px-4 rounded-xl text-[13px]">ReactJs</p>
                                        <p className="bg-slate-500 font-worksans text-white py-1 px-4 rounded-xl text-[13px]">Tailwind CSS</p>
                                        <p className="bg-slate-500 font-worksans text-white py-1 px-4 rounded-xl text-[13px]">Vite</p>
                                    </div>
                                    
                                </div>
                            </div>
        
                            <div className="flex flex-col h-full w-full bg-white rounded-lg dark:bg-gray-800 hover:-translate-y-2 hover:ease-in-out hover:duration-500">
                                <Image className="border border-gray-200 rounded-md" src={ rxpressThumb }/>
                                <div className="flex justify-between mt-2 mb-2">
                                        <p className="flex cursor-pointer underline underline-offset-4 gap-2 font-worksans"><Image className="w-6" src={previewArrow}/>View Site</p> 
                                        <p className="flex cursor-pointer underline underline-offset-4 gap-2 font-worksans"><Image className="w-6" src={githubIcon}/>View Code</p>
                                    </div>
                                <div className="">
                                    <h1 className="text-[28px] font-worksanssemibold text-secondary pt-2">Nova Financial</h1>
                                    <p className="text-[18px] font-worksans text-secondary">Prescription Delivery Web Platform</p>
                                </div>
                                <div className="flex gap-4 mt-2">
                                        <p className="bg-slate-500 font-worksans text-white py-1 px-4 rounded-xl text-[13px]">NextJs</p>
                                        <p className="bg-slate-500 font-worksans text-white py-1 px-4 rounded-xl text-[13px]">Tailwind CSS</p>
                                        <p className="bg-slate-500 font-worksans text-white py-1 px-4 rounded-xl text-[13px]">SQL</p>
                                    </div>
                            </div>
        
                        </div>
                        
                        <div className="flex gap-20">
        
                            <div className="flex flex-col h-full w-full bg-white rounded-lg dark:bg-gray-800 hover:-translate-y-2 hover:ease-in-out hover:duration-500">
                                <Image className="border border-gray-200 rounded-md" src={ rxpressThumb }/>
                                <div className="">
                                    <h1 className="text-[28px] font-worksanssemibold text-secondary pt-2">RxPress</h1>
                                    <p className="text-[18px] font-worksans text-secondary">Prescription Delivery Web Platform</p>
                                </div>
                            </div>
        
                            <div className="flex flex-col h-full w-full bg-white rounded-lg dark:bg-gray-800 hover:-translate-y-2 hover:ease-in-out hover:duration-500">
                                <Image className="border border-gray-200 rounded-md" src={ rxpressThumb }/>
                                <div className="">
                                    <h1 className="text-[28px] font-worksanssemibold text-secondary pt-2">RxPress</h1>
                                    <p className="text-[18px] font-worksans text-secondary">Prescription Delivery Web Platform</p>
                                </div>
                            </div>
                        </div> */}
                       
        
                    

export default HoverImageLinks;