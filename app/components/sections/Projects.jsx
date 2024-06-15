'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
// import { FiArrowRight } from "react-icons/fi";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { ReactLenis, useLenis } from 'lenis/react';
import { rxpressThumb, previewArrow, githubIcon } from "../../assets";

export const Projects = () => {
    const lenis = useLenis(({ scroll }) => {
    })
        return (
            <ReactLenis root>
                
                <main className="flex items-center justify-center">
                    <div className="flex flex-col">

                        <div className="text-center my-10">
                            <h1 className="font-worksansbold md:text-[40px] text-header">PROJECTS</h1>
                        </div>

                        <section>
                            <div>
                                <Link
                                    heading="Nova Financial"
                                    subheading="All in one financial Management Platform"
                                    image={rxpressThumb}
                                    href="#"
                                />
                                <Link
                                    heading="Nova Financial"
                                    subheading="All in one financial Management Platform"
                                    image={rxpressThumb}
                                    href="#"
                                />
                            </div>
                        </section>

                      

                        <div className="flex gap-10 mb-20">
                            <div className="flex flex-col h-full w-full bg-white rounded-lg dark:bg-gray-800">
                                <Image className="border border-gray-200 rounded-md w-[600px]" src={ rxpressThumb }/>
                                <div className="">
                                    <div className="flex justify-between mt-2 mb-2">
                                        <p className="flex cursor-pointer underline underline-offset-4 gap-2 font-worksans"><Link className="flex items-center gap-2 hover:-translate-y-1 hover:ease-in-out hover:duration-500" href={'https://rxpress-web.vercel.app/'} target="blank_"><Image className="w-6" src={previewArrow}/>View Site</Link></p> 
                                        <p className="flex cursor-pointer underline underline-offset-4 gap-2 font-worksans"><Link className="flex items-center gap-2 hover:-translate-y-1 hover:ease-in-out hover:duration-500" href={'https://github.com/rikkilanz/rxpress-web'} target="blank_"><Image className="w-6" src={githubIcon}/>View Code</Link></p>
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

                            <div className="flex flex-col h-full w-full bg-white rounded-lg dark:bg-gray-800">
                                <Image className="border border-gray-200 rounded-md w-[600px]" src={ rxpressThumb }/>
                                <div className="">
                                    <div className="flex justify-between mt-2 mb-2">
                                        <p className="flex cursor-pointer underline underline-offset-4 gap-2 font-worksans"><Link className="flex items-center gap-2 hover:-translate-y-1 hover:ease-in-out hover:duration-500" href={'https://opus-space.vercel.app/'} target="blank_"><Image className="w-6" src={previewArrow}/>View Site</Link></p> 
                                        <p className="flex cursor-pointer underline underline-offset-4 gap-2 font-worksans"><Link className="flex items-center gap-2 hover:-translate-y-1 hover:ease-in-out hover:duration-500" href={'https://github.com/rikkilanz/opus-space'} target="blank_"><Image className="w-6" src={githubIcon}/>View Code</Link></p>
                                    </div>
                                    <h1 className="text-[28px] font-worksanssemibold text-secondary">Opus Space</h1>
                                    <p className="text-[18px] font-worksans text-secondary">Creative Web Design Agency</p>
                                    <div className="flex gap-4 mt-2">
                                        <p className="bg-slate-500 font-worksans text-white py-1 px-4 rounded-xl text-[13px]">NextJs</p>
                                        <p className="bg-slate-500 font-worksans text-white py-1 px-4 rounded-xl text-[13px]">Tailwind CSS</p>
                                    </div>
                                    
                                </div>
                            </div>
        
                        </div>
                        
                        
                       
        
                    </div>
                </main>
            </ReactLenis>
        );
};

export default Projects;