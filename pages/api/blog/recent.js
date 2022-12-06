import React from 'react'

const recent = (req, res) => {

    res.status(200).json({ recent: "recent" });
    return (
        <div>recent</div>
    )
}

export default recent