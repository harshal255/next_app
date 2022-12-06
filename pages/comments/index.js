/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState } from 'react'

//api get request

const index = () => {
    const [comments, setComments] = useState([])

    //for api post request

    const [comment, setComment] = useState('');

    //for get request

    const fetchComments = async () => {
        const response = await fetch('/api/comments');
        const data = await response.json()
        setComments(data)

    }
    //for post request
    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        const data = await response.json();
        console.log(data);



    }

    //for delete request
    const deletecomment = async (commentid) => {
        const response = await fetch(`/api/comments/${commentid}`, {
            method: 'DELETE',
        });
        const data = response.json()
        console.log(data);
        fetchComments()

    }


    return (
        <>
            <div>Comments page with api</div>
            <button onClick={fetchComments}>Load Comments</button>
            {comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        {comment.id} {comment.text}

                        <button onClick={() => deletecomment(comment.id)}>Delete</button>

                    </div>
                )
            })
            }
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />

            <button onClick={submitComment}>Submit comment</button>
        </>

    )
}

export default index