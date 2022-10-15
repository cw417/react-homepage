import React from 'react'
import NewsArticle from './NewsArticle'

export default function NewsFeed({ newsData }) {

  function articles() {
    return (
      newsData.articles.map((article, index) => {
        return (
          <NewsArticle key={index} article={article} />
        )
      })
    )
  }

  return (
    <div>
      <div className='newsfeed'>{articles()}</div>
    </div>
  )
}
