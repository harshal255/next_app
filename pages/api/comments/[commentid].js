import React from 'react'
import { comments } from '../../data/comments'
const commentid = (req, res) => {

    const { commentid } = req.query

    if (req.method === 'GET') {
        const comment = comments.find((comment) => comment.id === parseInt(commentid))
        res.status(200).json(comment)

    }
    else if (req.method === 'DELETE') {
        const deltedComment = comments.find(
            (comment) => comment.id === parseInt(commentid)
        )
        const index = comments.findIndex(
            (comment) => comment.id === parseInt(commentid)

        )
        comments.splice(index, 1);
        res.status(200).json(deltedComment);

    }





    return (
        <div>commentid</div>
    )
}

export default commentid


