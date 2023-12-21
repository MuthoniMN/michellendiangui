export default function Contact() {
    return (
        <section className="px-8  py-16 md:w-1/3 sm:w-full mx-auto">
            <h2 className="text-3xl font-bold text-center my-4">Contact Me</h2>
            <p>Feel free to reach out to me for your web development needs.</p>
            <form className="my-8">
                <div className="mb-6">
                    <label htmlFor="name">Name: </label>
                    <input id="name" placeholder="Your name" className="block py-2 px-4 w-full bg-fuchsia-100 focus:border-2 focus:border-fuchsia-700 focus:outline-none" />
                </div>
                <div className="mb-6">
                    <label htmlFor="email">Email: </label>
                    <input id="email" placeholder="Your email" className="block py-2 px-4 w-full bg-fuchsia-100 focus:border-2 focus:border-fuchsia-700 focus:outline-none" />
                </div>
                <div className="mb-6">
                    <label htmlFor="name">Project Details: </label>
                    <textarea placeholder="What does your project entail?" rows={4} cols={12} className="block py-2 px-4 w-full bg-fuchsia-100 focus:border-2 focus:border-fuchsia-700 focus:outline-none"></textarea>
                </div>
                <div className="mb-6">
                    <label htmlFor="budget">Budget: </label>
                    <input id="budget" placeholder="Your budget" className="block py-2 px-4 w-full bg-fuchsia-100 focus:border-2 focus:border-fuchsia-700 focus:outline-none" />
                </div>
                <input type="submit" value={"Send Message"} className="bg-fuchsia-600 px-6 py-2 text-white hover:bg-fuchsia-800 block w-fit mx-auto" />
            </form>
        </section>
    )
}