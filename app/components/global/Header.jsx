import Image from "next/image";
import Link from "next/link";



export default function Header() {
    return (
        <header className="bg-background border-b">
            <div className="flex justify-between p-6 items-center">
                <Link className="font-worksansbold text-[25px] text-text ml-5" href={'#'}>dave.dev</Link>
                <nav className="">
                    <ul className="flex flex-row gap-5 mr-5">
                        <li>
                            <Link className="font-worksanssemibold hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 text-text text-[17px]" href={'#'}>Home</Link>
                        </li>
                        <li>
                            <Link className="font-worksanssemibold hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 text-text text-[17px]" href={'#'}>Projects</Link>
                        </li>
                        <li>
                            <Link className="font-worksanssemibold hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 text-text text-[17px]" href={'#'}>About</Link>
                        </li>
                        <li>
                            <Link className="font-worksanssemibold hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 text-text text-[17px]" href={'#'}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}