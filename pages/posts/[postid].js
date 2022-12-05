import React from 'react'
import { useRouter } from 'next/router'


const Postid = ({ post }) => {

    const router = useRouter();

    //if fallback value is true

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <>
            <h4>
                {post.id} {post.title}
            </h4>

            <p>{post.body}</p>
        </>
    )
}

export default Postid


export async function getStaticPaths() {


    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await response.json();
    // const paths = data.map((post) => {
    //     return {
    //         params: {
    //             postid: `${post.id}`
    //         }
    //     }
    // })
    return {
        paths: [
            {
                params: { postid: `1` }
            },
            {
                params: { postid: `2` }
            },
            {
                params: { postid: `3` }
            },
            {
                params: { postid: `4` }
            },

            {
                params: { postid: '5' }
            },
            {
                params: { postid: `6` }
            },
            {
                params: { postid: `7` }
            },
            {
                params: { postid: `8` }
            },
            {
                params: { postid: `9` }
            },
            {
                params: { postid: `10` }
            },
            {
                params: { postid: `11` }
            },
            {
                params: { postid: `12` }
            },
            {
                params: { postid: `13` }
            },
            {
                params: { postid: `14` }
            },
            {
                params: { postid: `15` }
            }


        ],
        // paths,
        fallback: 'blocking',  //mendtory for small project is false
    }
}

export async function getStaticProps(context) {

    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`);
    const data = await response.json();

    //for custom 404 page if id not found

    if (!data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post: data
        }
    }
}


