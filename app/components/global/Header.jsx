import Image from "next/image";
import Link from "next/link";



export default function Header() {
    return (
        <header>
            <div className="flex justify-between p-4 bg-blue-300">
                <Link className="" href={'#'}>dave.dev</Link>
                <nav className="">
                    <ul className="flex flex-row gap-5">
                        <li>
                            <Link href={'#'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Projects</Link>
                        </li>
                        <li>
                            <Link href={'#'}>About</Link>
                        </li>
                        <li>
                            <Link href={'#'}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>




        </header>

    )
}