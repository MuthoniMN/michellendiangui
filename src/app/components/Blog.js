"use client"
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

async function gql(query) {
    const data = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query
        })
    });

    return data.json();
}

export default function Blogs() {
    const [posts, setPosts] = useState(null);

    const myLatestArticles = `
    query User {
        user(username: "mithoni") {
            publication {
                title
                posts {
                    _id
                    title
                    dateAdded
                    brief
                    slug
                }
            }
        }
    }
    `
    gql(myLatestArticles).then(result => {
        const articles = result.data.user.publication.posts;
        setPosts(articles);
    })
        .catch(err => {
            console.error(err)
        })
    return (
        <section id="about" className="px-8  py-12 md:w-1/3 sm:w-full sm:border-0 md:border-e-2 md:border-e-zinc-700">
            <h2 className="text-center text-3xl font-bold mb-4">My Latest Blogs</h2>
            {posts ?
                posts.map((post, index) => {
                    if (index < 3) {
                        const link = "https://mitchcodes.hashnode.dev/" + post.slug
                        const date = new Date(post.dateAdded).toDateString()
                        return (
                            <div className="border-2 border-zinc-700 p-8 my-8 relative" key={post._id}>
                                <h3 className="font-bold mb-2">{post.title}</h3>
                                <span className="block me-0 text-right italic">{date}</span>
                                <p>{post.brief.slice(0, 72) + "..."}</p>
                                <a href={link} className="text-fuchsia-600 bg-fuchsia-100 hover:text-fuchsia-900 transition-all absolute -right-4 -top-6"><FontAwesomeIcon icon={faSquareArrowUpRight} className="w-12 h-12" /></a>
                            </div>
                        )
                    }
                })
                : "No Blogs Yet"}
        </section >
    )
}