import React from 'react'

const params = (req, res) => {
    const params = req.query.params;
    console.log(params);
    res.status(200).json(params)
    return (
        <div>params</div>
    )
}

export default params