import React from 'react'
import Link from 'next/link'

const Product = ({ id = 389, products }) => {
    return (
        <>
            <Link href='/'>Home</Link>
            <br />


            {/* <ul>
                <li> <Link href="product/1" legacyBehavior={true}><a > Product 1</a></Link></li>
                <li> <Link href="product/2"> Product 2</Link></li>
                <li> <Link href="product/3" replace> Product 3</Link></li>
                <li> <Link href={`product/${id}`}> Product {id}</Link></li>
            </ul> */}


            <h3> List of Products</h3>
            {products.map((prod) => {
                return (
                    <Link key={prod.id} href={`product/${prod.id}`} passHref>
                        <div> {prod.id} & {prod.title}</div>
                        <hr />

                    </Link>

                )
            })

            }
        </>
    )
}

export default Product


export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/products');
    const data = await response.json();

    return {
        props: {
            products: data

        }
    }
}