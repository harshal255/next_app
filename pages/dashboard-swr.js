import React from 'react';
import useSWR from 'swr';

// swr hook library

const fetcher = async () => {
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    return data

}

const dashboard = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data, error } = useSWR('dashboard', fetcher)
    if (error) return <>An Error Occured</>
    if (!data) return <>Loading...</>
    return (
        <>
            <div>dashboard</div>
            <ul>
                <li> Posts : {data.posts}</li>
                <li> Likes : {data.likes}</li>
                <li> Followers : {data.followes}</li>
                <li> Following : {data.following}</li>
            </ul>
        </>
    )


}

export default dashboard