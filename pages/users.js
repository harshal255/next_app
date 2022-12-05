import React from 'react'
import User from '../components/user'

//Static Site Generations

const users = ({ users }) => {
    return (
        <>
            <h1>List of users</h1>
            {users.map((user) => {
                return (
                    <div key={user.id}>

                        <p>{user.id}{`)`} Name : {user.name} & email is : {user.email}
                        </p>
                        {/* <User user={user} key={user.id}></User> */}


                    </div>
                )
            })}
        </>
    )
}

export default users

// eslint-disable-next-line @next/next/no-typos
export async function getStaticProps() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

    return {
        props: {
            users: data
        }
    }
}