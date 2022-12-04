import React from 'react'

const user = ({ user}) => {
    return (
        <div>
            <p>{user.id}{`)`} Name : {user.name} & email is : {user.email}
            </p>
        </div>
    )
}

export default user