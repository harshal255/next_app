/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useRouter } from 'next/router'

const sweterid = () => {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>Sweter id is : {id}</div>
    )
}

export default sweterid