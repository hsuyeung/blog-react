import React from 'react';

export default function NewestArticleList() {
  return (
    <>
      <p>最新文章</p>
      <div className='posts-list'>
        <ul>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2022/02</span>
              <a href='/post/1' className='posts-list-post-title'>
                第一篇文章
              </a>
            </span>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2022/03</span>
              <a href='/post/1' className='posts-list-post-title'>
                第二篇文章
              </a>
            </span>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2022/04</span>
              <a href='/post/1' className='posts-list-post-title'>
                第三篇文章
              </a>
            </span>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2022/05</span>
              <a href='/post/1' className='posts-list-post-title'>
                第四篇文章
              </a>
            </span>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2022/06</span>
              <a href='/post/1' className='posts-list-post-title'>
                第五篇文章
              </a>
            </span>
          </li>
          <li>
            <span className='post-date-container'>
              <span className='posts-list-post-date'>2022/07</span>
              <a href='/post/1' className='posts-list-post-title'>
                第六篇文章
              </a>
            </span>
          </li>
          <li>
            <a href='/posts' className='posts-list-more'>
              更多文章......
            </a>
          </li>
          <div className='clear' />
        </ul>
      </div>
    </>
  );
}
