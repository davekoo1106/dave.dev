import Image from "next/image";
import Link from "next/link";
import { memojiComputer, memojiJpg } from "../../assets/";


export default function About() {
    return (
        <main>
            <div className="pl-[600px] py-[150px]">
                <div className="flex flex-row gap-10">
                    <div className="flex flex-col">
                        <h1 className="font-worksansbold text-[40px] text-header">WHO AM I?</h1>
                        <h1 className="font-worksansbold text-[40px] text-header opacity-60 mt-[-20px]">WHO AM I?</h1>
                        <h1 className="font-worksansbold text-[40px] text-header opacity-40 mt-[-20px]">WHO AM I?</h1>
                    </div>
                    <div className="flex justify-evenl gap-40">
                        <div className="w-[500px] pt-2">
                            <h3 className="font-worksansbold text-[24px] mb-4">I'm a Front-End Developer driven by curiosity and passion, always looking to learn</h3>
                            <p className="font-worksansmedium text-paragraph text-[16px]">My number 1 passion is building things. Whether that be dabbling in app development in my spare time or working on my next project, I'm a builder at heart.</p>
                            <p className="font-worksansmedium text-[16px] text-paragraph pt-5">My name stack currently is React/Next.js combined with Tailwind CSS and SQL for the backend! However, I'm always open to learning new technologies.</p>
                            <p className="font-worksansmedium text-[16px] text-paragraph pt-5">I've got a lot more to share and am always down to chat about new opportunities!</p>
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