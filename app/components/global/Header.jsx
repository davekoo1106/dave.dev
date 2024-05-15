import Image from "next/image";
import Link from "next/link";



export default function Header() {
    return (
        <header className="border-b bg-background">
            <div className="md:flex md:justify-between md:p-6 md:items-center">
                <Link className="font-worksansbold md:text-[25px] text-text md:ml-5" href={'#'}>dave.dev</Link>
                <nav className="">
                    <ul className="md:flex md:flex-row md:gap-5 md:mr-5">
                        <li>
                            <Link className="font-worksanssemibold hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 text-text md:text-[17px]" href={'#'}>Home</Link>
                        </li>
                        <li>
                            <Link className="font-worksanssemibold hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 text-text md:text-[17px]" href={'#'}>Projects</Link>
                        </li>
                        <li>
                            <Link className="font-worksanssemibold hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 text-text md:text-[17px]" href={'#'}>About</Link>
                        </li>
                        <li>
                            <Link className="font-worksanssemibold hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 text-text md:text-[17px]" href={'#'}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}