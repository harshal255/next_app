import React from 'react'
import Link from 'next/link'

const Product = ({ id = 389 }) => {
    return (
        <>
            <Link href='/'>Home</Link>
            <br />


            <ul>
                <li> <Link href="product/1" legacyBehavior={true}><a > Product 1</a></Link></li>
                <li> <Link href="product/2"> Product 2</Link></li>
                <li> <Link href="product/3" replace> Product 3</Link></li>
                <li> <Link href={`product/${id}`}> Product {id}</Link></li>
            </ul>
        </>
    )
}

export default Product