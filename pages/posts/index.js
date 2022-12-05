import React from 'react'
import Link from 'next/link'


const index = ({ posts }) => {
    return (
        <>
            <h2>List of posts</h2>
            <br />
            {
                posts.map((post) => {
                    return <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                            <h4>{post.id} {post.title}</h4>
                            <hr />
                            {/* <p>{post.body}</p> */}
                        </Link>
                    </div>
                })
            }
        </>
    )
}

export default index


export async function getStaticProps() {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();


    return {
        props: {
            posts: data
            // posts: data.slice(0, 15)
        }
    }

}