import React from 'react'
import NewsArticle from './NewsArticle'
import Input from './Input'
import { FiSearch } from 'react-icons/fi'

export default function NewsFeed({ newsData, searchNews }) {

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
    <div className='mt-2'>
      <Input 
        updateFunction={searchNews}
        buttonText={<FiSearch />}
        placeholder={"Search news"}
      />
      <div className='newsfeed center'>{articles()}</div>
    </div>
  )
}
