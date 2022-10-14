import React from 'react'
import Article from './Article'

export default function NewsFeed({ newsData }) {

  function articles() {
    return (
      newsData.articles.map((article, index) => {
        return (
          <Article key={index} article={article} />
        )
      })
    )
  }
  return (
    <div>
      <div>{articles()}</div>
    </div>
  )
}
