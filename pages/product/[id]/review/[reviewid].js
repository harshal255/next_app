import React from 'react'
import { useRouter } from 'next/router'

const Review = () => {

    const router = useRouter();
    const { id, reviewid } = router.query;
    return (
        <div>Review Id is : {reviewid} for Product Id Is : {id}</div>
    )
}

export default Review