import React from 'react'

const index = (req, res) => {

    res.status(200).json({ blog: "blog" })
    return (
        <div>index</div>
    )
}

export default index