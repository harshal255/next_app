import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


const ProductDetails = ({ product }) => {


    const router = useRouter() //use Router hooks for dynamic routing


    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <>
            <div>Details about Product id is {product.id}</div>
            <div>{product.title} {product.price}</div>
            <hr />
        </>



    )
}

export default ProductDetails

export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(`http://localhost:4000/products/${params.id}`);
    const data = await response.json();

    //for custom 404 page if id not found

    if (!data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            product: data
        }
    }
}


export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { id: '1' }
            }

        ],
        fallback: true
    }
}
