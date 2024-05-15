import Image from "next/image";
import Link from "next/link";
import { githubLineBlack, linkedinLineBlack } from "../../assets/";


export default function Footer() {
    return (
        <main>
            <div className="bg-background md:py-20 md:flex md:flex-row md:pl-[390px]">
                <div className="md:flex md:flex-row md:gap-[500px] flex flex-col-reverse">
                    <div className="flex flex-col">
                        <h3 className="text-[26px] font-worksanssemibold">My Links</h3>
                        <div className="flex flex-row gap-6 pt-4 pb-24">
                            <Link href={'https://www.linkedin.com/in/dave-koo/'} target="_blank">
                                <Image className="font-worksans text-[17px] underline decoration-2 underline-offset-4 decoration-primary hover:-translate-y-1 hover:text-primary w-6" src={linkedinLineBlack}/>
                            </Link>
                            <Link href={'https://github.com/davekoo1106'} target="_blank">
                                <Image className="font-worksans text-[17px] underline decoration-2 underline-offset-4 decoration-primary hover:-translate-y-1 hover:text-primary w-6" src={githubLineBlack}/>
                            </Link>
                        </div>
                        <p className="text-[16px]">&copy; 2024. All right reserved</p>
                    </div>
                
                    <div className="flex flex-col gap-4">
                        <h3 className="text-[26px] font-worksanssemibold">Built using</h3>
                        <div className="flex gap-2">
                            <Link className="font-worksans underline" target="_blank" href={'https://react.dev/'} >React.js</Link>
                                <p>+</p>
                            <Link className="font-worksans underline" target="_blank" href={'https://nextjs.org/'} >Next.js</Link>
                                <p>+</p>
                            <Link className="font-worksans underline" target="_blank" href={'https://tailwindcss.com/'} >Tailwind CSS</Link>
                        </div>
                        <Link className="font-worksans underline" target="_blank" href={'https://www.framer.com/motion/'}>Framer Motion Animation Library</Link>
                        <Link className="font-worksans underline" target="_blank" href={'https://vercel.com'}>Deployed on Vercel</Link>
                        <Link className="font-worksans underline" target="_blank" href={'https://github.com/davekoo1106/dave.dev'}>Github Respository</Link>
                    </div>
                </div>
            </div>
        
        </main>
    )
}