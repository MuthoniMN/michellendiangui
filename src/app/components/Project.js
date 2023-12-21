import Image from "next/image";

export default function Project(title, desc, link) {
    <div className="border-2 border-zinc-700 p-8 my-8 relative">
        <Image
            src=""
            alt={title}
            width={300}
            height={300}
        />
        <section>
            <h3 className="font-bold mb-2">{title}</h3>
            <p>{desc}</p>
        </section>
        <a href={link} className="text-fuchsia-600 bg-fuchsia-100 hover:text-fuchsia-900 transition-all absolute -right-4 -top-6"><FontAwesomeIcon icon={faSquareArrowUpRight} className="w-12 h-12" /></a>
    </div>
}