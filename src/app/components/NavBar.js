import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center p-5">
            <h1>Michelle Ndiangui</h1>
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