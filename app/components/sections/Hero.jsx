import Image from "next/image";
import Link from "next/link";
import { githubIcon, linkedIcon, htmlIcon, cssIcon, javascriptIcon, typescriptIcon, reactIcon, nextIcon, tailwindIcon, sassIcon, pinIcon } from "../../assets/";


export default function Hero() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col p-4">

                <div>
                    <h1 className="mb-[20px] text-[55px] font-worksansbold">Front End React<br/>Developer</h1>
                    <h2 className="mb-[20px] font-worksansregular">Hi, I'm Dave. A passionate Front-End React<br/>Developer based in Vancouver, BC.<Image className="w-6" src={ pinIcon }/></h2>
                    <div className="flex gap-2">
                        <Link href={'#'} className="">
                            <Image className="w-[34px]" src={ linkedIcon }/>
                        </Link>
                        <Link href={'#'}>
                            <Image className="w-[34px]" src={ githubIcon }/>
                        </Link>
                    </div>
                </div>
            
                <div className="flex flex-row mt-[20px] gap-[30px]">
                    <h2 className="flex items-center font-worksansmedium text-[18px]">Tech Stack |</h2>
                    <div className="flex gap-[8px]">
                        <Link href={'#'}>
                            <Image className="w-[40px]" src={htmlIcon} alt="HTML5"/>
                        </Link>
                        <Link href={'#'}>
                            <Image className="w-[40px]" src={cssIcon} alt="CSS3"/>
                        </Link>
                    </div>
                    <div className="flex gap-[8px]">
                        <Link href={'#'}>
                            <Image className="w-[40px]" src={javascriptIcon} alt="JavaScript"/>
                        </Link>
                        <Link href={'#'}>
                            <Image className="w-[40px]" src={typescriptIcon} alt="TypeScript"/>
                        </Link>
                    </div>
                    <div className="flex gap-[8px]">
                        <Link href={'#'}>
                            <Image className="w-[40px]" src={reactIcon} alt="React.js"/>
                        </Link>
                        <Link href={'#'}>
                            <Image className="w-[40px]" src={nextIcon} alt="Next.js"/>
                        </Link>
                    </div>
                    <div className="flex gap-[8px]">
                        <Link href={'#'}>
                            <Image className="w-[40px]" src={tailwindIcon} alt="Tailwind CSS"/>
                        </Link>
                        <Link href={'#'}>
                            <Image className="w-[40px]" src={sassIcon} alt="SCSS"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}