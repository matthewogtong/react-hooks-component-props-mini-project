import React from 'react'
import Article from './Article'

const ArticleList = ({ posts}) => {
    
    const articleList = posts.map(post => (
        <Article 
        title={post.title} 
        date={post.date} 
        preview={post.preview}
        minutes={post.minutes}
        />
    ))

    return (
        <main>
            {articleList}
        </main>
    )
}


export default ArticleList