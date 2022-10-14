import React from 'react'

export default function Article({ article }) {
  return (
    <div className='m-bt-05'>
        <div>{article.source.name} {`(${article.author})`}</div>
        <a href={article.url}>
        <div>{article.title}</div>
      </a>
    </div>
  )
}
