import React from 'react'


const ArticlebyCategory = ({ article, category }) => {
    return (
        <>
            <h4>List of Articles for {category}</h4>

            {article.map((arti) => {
                return <div key={arti.id}>
                    <div>
                        <h3>{arti.id} {arti.title}</h3>
                        <p>{arti.desc}</p>
                    </div>

                </div>
            })}
        </>
    )
}

export default ArticlebyCategory

export async function getServerSideProps(context) {


    const { params, req, res, query } = context;
    console.log(req.headers.cookie);
    console.log(query);
    res.setHeader('Set-Cookie', ['name=Harshal'])
    const { category } = params;

    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();

    return {

        props: {
            article: data,
            category,
        }
    }
}