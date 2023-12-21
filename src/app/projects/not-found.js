import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center">
            <h1 className='text-3xl font-bold'>404</h1>
            <p className="my-8">Page Not Found</p>
            <Link href={"/projects"}>Back to All Projects</Link>
        </main>
    )
}