import React from 'react'

//server side props

const News = ({ articles }) => {
    return (
        <>
            <h3>List of news articles</h3>
            {
                articles.map((article) => {
                    return (

                        <div key={article.id}>{article.id} {article.title} | {article.category}</div>
                    )
                })
            }
        </>
    )
}

export default News


export async function getServerSideProps() {

    const response = await fetch('http://localhost:4000/news');
    const data = await response.json();

    return {
        props: {
            articles: data,
        }
    }
}