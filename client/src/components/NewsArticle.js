import React from 'react'

export default function NewsArticle({ article }) {

  function formatTitle(title) {
    return title.slice(0, title.indexOf('-') - 1)
  }
  return (
  <a href={article.url} target='blank'>
    <div className='news-article'>
      <div className='news-article-title'>{formatTitle(article.title)}</div>
        <div>{article.source.name}</div>
    </div>
  </a>
  )
}
