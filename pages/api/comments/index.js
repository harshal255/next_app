import React from 'react'
import { comments } from '../../data/comments'

const index = (req, res) => {

    if (req.method == 'GET') { //never forget here = = = triple =
        res.status(200).json(comments);

    }
    else if (req.method == 'POST') { //never forget here = = = triple =
        const comment = req.body.comment;
        const newComment = {
            id: Date.now(),
            text: comment
        }
        comments.push(newComment)
        res.status(201).json(newComment);

    }


    return (
        <div>index</div>
    )
}

export default index