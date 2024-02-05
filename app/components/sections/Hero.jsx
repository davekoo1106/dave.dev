import Image from "next/image";
import Link from "next/link";
import { githubIcon } from "../../assets/";
import { linkedIcon } from "../../assets/";

export default function Hero() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col p-4">

                <div>
                    <h1 className="mb-[20px] text-[55px] font-bold">Front End React<br/>Developer</h1>
                    <h2 className="mb-[20px]">Hi, I'm Dave. A passionate Front-End React <br/>Developer based in Vancouver, BC.</h2>
                    <div className="flex gap-2">
                        <Link href={'#'}>
                            <Image className="w-[30px]" src={ linkedIcon }/>
                        </Link>
                        <Link href={'#'}>
                            <Image className="w-[30px]" src={ githubIcon }/>
                        </Link>
                    </div>
                </div>
            
                <div className="flex flex-row mt-[20px] gap-2">
                    <h2 className="font-bold">Tech Stack |</h2>
                    <Link href={'#'}> HTML
                        <Image/>
                    </Link>
                    <Link href={'#'}> CSS
                        <Image/>
                    </Link>
                        <Image/>
                    <Link href={'#'}> JavaScript
                        <Image/>
                    </Link>
                    <Link href={'#'}> TypeScript
                        <Image/>
                    </Link>
                    <Link href={'#'}> React
                        <Image/>
                    </Link>
                    <Link href={'#'}> NextJs
                        <Image/>
                    </Link>
                    <Link href={'#'}> Tailwind CSS
                        <Image/>
                    </Link>
                </div>
            </div>
        </div>
    )
}