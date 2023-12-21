import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skill({ text, icon }) {
    return (
        <li className="border-2 border-stone-700 px-4 py-4 w-fit max-h-20 text-center transition-all hover:bg-fuchsia-600 hover:text-white hover:shadow hover:border-0">
            <FontAwesomeIcon icon={icon} className="h-6 w-12 mx-auto" />
            <p className="my-2 text-xs">{text}</p>
        </li>
    )
}