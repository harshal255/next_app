import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ProductDetails = () => {

    const router = useRouter() //use Router hooks for dynamic routing
    const { id } = router.query
    return (
        <div>Details about Product  {id}</div>
    )
}

export default ProductDetails
