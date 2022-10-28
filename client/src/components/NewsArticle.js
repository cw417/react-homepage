import React from 'react'

export default function NewsArticle({ article }) {

  function formatTitle(title) {
    return title.slice(0, title.indexOf('-') - 1)
  }
  return (
  <a href={article.url} target='blank'>
    <div className='news-article shadow'>
      <div>
        <img className='news-article-image' src={article.urlToImage} alt='Article'/>
      </div>
      <div className='news-article-title'>{formatTitle(article.title)}</div>
      <div className='news-article-source'>{article.source.name}</div>
    </div>
  </a>
  )
}
