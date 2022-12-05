/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useState, useEffect } from 'react'

const dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [dashboardData, setDashboardData] = useState(null);


    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch("http://localhost:4000/dashboard");
            const data = await response.json();

            //In Client side rendering we can any library uses like axios in we are confortable

            setDashboardData(data)
            setIsLoading(false)
            // console.log(dashboardData);
        }
        fetchDashboardData();
    }, [])

    if (isLoading) {
        return <>
            <h3>Loading...</h3>
        </>
    }
    return (
        <>
            <div>dashboard</div>
            <ul>
                <li> Posts : {dashboardData.posts}</li>
                <li> Likes : {dashboardData.likes}</li>
                <li> Followers : {dashboardData.followes}</li>
                <li> Following : {dashboardData.following}</li>
            </ul>
        </>
    )
}

export default dashboard