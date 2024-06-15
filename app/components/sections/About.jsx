import Image from "next/image";
import Link from "next/link";
import { memojiComputer, memojiJpg } from "../../assets/";


export default function About() {
    return (
        <main>
            <div className="md:pl-[600px] md:py-[200px] bg-background">
                <div className="md:flex md:flex-row md:gap-10">
                    <div className="md:flex md:flex-col">
                        <h1 className="font-worksansbold md:text-[40px] text-header">WHO AM I?</h1>
                        {/* <h1 className="font-worksansbold text-[40px] text-header opacity-60 mt-[-20px]">WHO AM I?</h1>
                        <h1 className="font-worksansbold text-[40px] text-header opacity-40 mt-[-20px]">WHO AM I?</h1> */}
                    </div>
                    <div className="md:flex md:justify-evenly md:gap-40">
                        <div className="md:w-[500px] md:pt-2">
                            <h3 className="font-worksansbold md:text-[26px] mb-4">I'm a Front-End Developer driven by curiosity and passion, always looking to learn</h3>
                            <p className="font-worksansmedium md:text-[18px] text-paragraph">My number 1 passion is building things. Whether that be dabbling in app development in my spare time or working on my next project, I'm a builder at heart.</p>
                            <p className="font-worksansmedium md:text-[18px] text-paragraph pt-5">My name stack currently is React/Next.js combined with Tailwind CSS and MongoDB for the backend! However, I'm always open to learning new technologies.</p>
                            <p className="font-worksansmedium md:text-[18px] text-paragraph pt-5">I've got a lot more to share and am always down to chat about new opportunities!</p>
                        </div>
                        {/* <div className="pr-[500px]">
                            <Image className="w-60" src={memojiJpg}/>
                        </div> */}
                    </div>
                </div>
            </div>
        </main>
    )
}