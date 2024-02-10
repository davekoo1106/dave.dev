import Image from "next/image";
import Link from "next/link";
import { rxpressThumb } from "../../assets/";

export default function About(){
    return(
        <main>
            <div className="flex flex-co p-5 justify-center items-center">
                <div className="flex">
                    <Image className="w-[300px] rounded-lg" src={rxpressThumb}/>
                    <div className="flex flex-col p-5 mt-5">
                        <h3 className="font-worksansbold text-[17px] text-primary">ABOUT ME</h3>
                        <h4 className="font-worksans text-[25px] text-secondary">Front End Developer based in Vancouver, BC</h4>
                        <p className="font-worksans text-[17px] text-secondary">Hey! My Name is Dave Koo and I'm a Frontend Developer. My passion is to create and develop clean UI/UX for users <br/>My main stack currently is React/Next.js/TailwindCSS for the Frontend and MongoDB/SQL for the Backend</p>
                    </div>
                </div>
            </div>
        </main>
    )
}