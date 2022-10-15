import React from 'react'

export default function NewsArticle({ article }) {
  return (
    <div className='news-article'>
      <a href={article.url}><div>{article.title}</div></a>
        <div>{article.source.name}
          <span
            style={{display:(article.author !== null) ? 'inline' : 'none' }}
          >{` (${article.author})`}</span>
        </div>
    </div>
  )
}
