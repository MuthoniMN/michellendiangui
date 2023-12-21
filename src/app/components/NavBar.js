"use client"
import { faGithub, faHashnode, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-5 border-b-2 border-b-zinc-700 relative">
            <ul className="w-1/4 flex gap-3">
                <li>
                    <a href="https://www.github.com/MuthoniMN">
                        <FontAwesomeIcon icon={faGithub} className="w-8 h-6 mx-auto hover:text-fuchsia-600 transition-all" />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/codebymitch">
                        <FontAwesomeIcon icon={faTwitter} className="w-8 h-6 mx-auto hover:text-fuchsia-600 transition-all" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/michelle-ndiangui/">
                        <FontAwesomeIcon icon={faLinkedin} className="w-8 h-6 mx-auto hover:text-fuchsia-600 transition-all" />
                    </a>
                </li>
                <li>
                    <a href="https://mitchcodes.hashnode.dev/" >
                        <FontAwesomeIcon icon={faHashnode} className="w-8 h-6 mx-auto hover:text-fuchsia-600 transition-all" />
                    </a>
                </li>
            </ul>
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-fuchsia-600 lg:hidden md:block" onClick={() => {
                document.querySelector("#menu").classList.toggle("hidden")
                document.querySelector("#menu").classList.toggle(["block", "absolute", "top-0", "left-0", "right-0", "bottom-0"])
            }} type="button"
                data-te-collapse-init
                data-te-target="#menu"
                aria-controls="menu"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
            </button>

            <ul id="menu" className="gap-5 md:flex hidden">
                <li className="mb-6 md:mb-0">
                    <Link href={"/"} className="hover:bg-fuchsia-600 hover:text-white hover:underline">Home</Link>
                </li>
                <li className="mb-6 md:mb-0">
                    <a href="https://mitchcodes.hashnode.dev" className="hover:bg-fuchsia-600 hover:text-white hover:underline">Blog</a>
                </li>
                <li className="mb-6 md:mb-0">
                    <Link href={"/#about"} className="hover:bg-fuchsia-600 hover:text-white hover:underline">About</Link>
                </li>
                <li className="mb-6 md:mb-0">
                    <Link href={"/contact"} className="bg-fuchsia-600 px-6 py-2 text-white hover:bg-fuchsia-800">Get In Touch</Link>
                </li>
            </ul>

        </nav>
    )
}