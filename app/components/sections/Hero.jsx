import Image from "next/image";
import Link from "next/link";
import { githubIcon } from "../../assets/";
import { linkedIcon } from "../../assets/";

export default function Hero() {
    return (
        <div className="pt-20">
            <div className="">
                <div>
                    <h1>Front End React Developer</h1>
                    <h2>Hi, I'm Dave. A passionate Front-End React <br/>Developer based in Vancouver, BC</h2>
                </div>
                <div className="flex gap-2">
                    <Link href={'#'}>
                        <Image className="w-[30px]" src={ linkedIcon }/>
                    </Link>
                    <Link href={'#'}>
                        <Image className="w-[30px]" src={ githubIcon }/>
                    </Link>
                </div>
            </div>
        </div>
    )
}