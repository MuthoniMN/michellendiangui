import Image from "next/image";
import Link from "next/link";
import { faBootstrap, faCss3, faCss3Alt, faGit, faGithub, faHtml5, faJsSquare, faNode, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Skill from "./Skill";
import profileImage from "../assets/Michelle-Ndiangui.jpg"

export default function About() {
    return (
        <section id="about" className="px-8  py-16 md:w-1/3 sm:w-full sm:border-0 md:border-e-2 md:border-e-zinc-700">
            <section className="flex gap-8 items-center mb-8 border-b-2 border-b-zinc-700 pb-4">
                <Image
                    src={profileImage}
                    alt="Michelle Ndiangui"
                    width={100}
                    height={100}
                    className="rounded-full"
                />
                <section>
                    <p>I am a full-stack JavaScript software engineer and technical writer.</p>
                    <Link href="/#contact" className="text-fuchsia-600 my-2 w-fit block underline transitonal-all hover:bg-fuchsia-600 hover:text-white">Contact Me</Link>
                </section>
            </section>

            <h3 className="text-xl font-bold">Technologies I Use:</h3>
            <ul className="flex flex-wrap gap-4 my-8 justify-center">
                <Skill text={"HTML5"} icon={faHtml5} />
                <Skill text={"CSS3"} icon={faCss3Alt} />
                <Skill text={"JavaScript"} icon={faJsSquare} />
                <Skill text={"PHP"} icon={faPhp} />
                <Skill text={"Node"} icon={faNode} />
                <Skill text={"MongoDB"} icon={faDatabase} />
                <Skill text={"MySQL"} icon={faDatabase} />
                <Skill text={"Git"} icon={faGit} />
                <Skill text={"React.js"} icon={faReact} />
                <Skill text={"Next.js"} icon={faReact} />
                <Skill text={"Tailwind CSS"} icon={faCss3} />
                <Skill text={"Bootstrap"} icon={faBootstrap} />
            </ul>
        </section>
    )
}