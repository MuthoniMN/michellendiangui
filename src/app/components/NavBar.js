import { faGithub, faHashnode, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-5 border-b-2 border-b-zinc-700">
            <ul className="w-1/2 flex gap-3">
                <li>
                    <a href="https://www.github.com/MuthoniMN">
                        <FontAwesomeIcon icon={faGithub} className="w-6 mx-auto hover:text-fuchsia-600 transition-all" />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/codebymitch">
                        <FontAwesomeIcon icon={faTwitter} className="w-6 mx-auto hover:text-fuchsia-600 transition-all" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/michelle-ndiangui/">
                        <FontAwesomeIcon icon={faLinkedin} className="w-6 mx-auto hover:text-fuchsia-600 transition-all" />
                    </a>
                </li>
                <li>
                    <a href="https://mitchcodes.hashnode.dev/" >
                        <FontAwesomeIcon icon={faHashnode} className="w-6 mx-auto hover:text-fuchsia-600 transition-all" />
                    </a>
                </li>
            </ul>
            <ul className="flex gap-5">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/projects"}>Projects</Link>
                </li>
                <li>
                    <Link href={"/#about"}>About</Link>
                </li>
                <li>
                    <Link href={"/#contact"} className="bg-fuchsia-600 px-6 py-2 text-white">Get In Touch</Link>
                </li>
            </ul>

        </nav>
    )
}