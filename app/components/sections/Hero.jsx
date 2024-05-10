"use client"
import Image from "next/image";
import Link from "next/link";
import { ReactLenis, useLenis } from 'lenis/react';
import { htmlIcon, cssIcon, javascriptIcon, typescriptIcon, reactIcon, nextIcon, tailwindIcon, sassIcon, headshot } from "../../assets/";


export default function Hero() {
        const lenis = useLenis(({ scroll }) => {

        })

        return (
            <ReactLenis root>
                <div className="flex items-center justify-center bg-background h-dvh ">
                    <div className="flex flex-col">
        
                            <div className="flex gap-10">
                                <div>
                                    <h1 className="mb-[20px] text-[75px] font-worksansbold text-transparent bg-clip-text  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 animate-text">Front-End React<br/>Developer</h1>
                                    <h2 className="font-worksans text-[20px] text-text">Hi, I'm Dave! A passionate Front-End React Developer combining <br/> code, business, and design to create lasting products and experiences.
                                    </h2>
                                </div>
                                <div>
                                    <Image 
                                        src={headshot}
                                        className="w-[380px] rounded-full border border-black"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="mb-4">
                                    <Link className="bg-header text-[15px] text-white font-worksanssemibold p-3 rounded-lg hover:underline hover:bg-blue-600" target="_blank" href={'mailto:dave.koo@outlook.com'}>Let's Chat!</Link>
                                </div>
                                <Link href={'https://www.linkedin.com/in/dave-koo/'} target="_blank">
                                    <p className="font-worksans text-text text-[17px] underline decoration-2 underline-offset-4 decoration-primary hover:-translate-y-1 hover:text-primary">LinkedIn</p>
                                </Link>
                                <Link href={'https://github.com/davekoo1106'} target="_blank">
                                    <p className="font-worksans text-text text-[17px] underline decoration-2 underline-offset-4 decoration-primary hover:-translate-y-1 hover:text-primary">Github</p>
                                </Link>
                            </div>
                        
                        <div className="flex flex-row mt-[50px] gap-[30px]">
                            <h2 className="flex items-center font-worksansmedium text-[18px] text-text">Tech Stack |</h2>
                            <div className="flex gap-[8px]">
                                <Link href={'#'}>
                                    <Image className="w-[40px]" src={htmlIcon} alt="HTML5 Logo"/>
                                </Link>
                                <Link href={'#'}>
                                    <Image className="w-[40px]" src={cssIcon} alt="CSS3 Logo"/>
                                </Link>
                            </div>
                            <div className="flex gap-[8px]">
                                <Link href={'#'}>
                                    <Image className="w-[40px]" src={javascriptIcon} alt="JavaScript Logo"/>
                                </Link>
                                <Link href={'#'}>
                                    <Image className="w-[40px]" src={typescriptIcon} alt="TypeScript Logo"/>
                                </Link>
                            </div>
                            <div className="flex gap-[8px]">
                                <Link href={'#'}>
                                    <Image className="w-[40px]" src={reactIcon} alt="React.js Logo"/>
                                </Link>
                                <Link href={'#'}>
                                    <Image className="w-[40px]" src={nextIcon} alt="Next.js Logo"/>
                                </Link>
                            </div>
                            <div className="flex gap-[8px]">
                                <Link href={'#'}>
                                    <Image className="w-[40px]" src={tailwindIcon} alt="Tailwind CSS Logo"/>
                                </Link>
                                <Link href={'#'}>
                                    <Image className="w-[40px]" src={sassIcon} alt="SCSS"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactLenis>
        )   
}