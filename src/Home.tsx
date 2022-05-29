import React from 'react';
import NewestArticleList from './NewestArticleList';
import HeaderNav from './HeaderNav';

export default function Home() {
  return (
    <>
      <HeaderNav />
      <div className='body'>
        <div className='figure'>
          <img src='/bear.jpg' alt='北极熊' />
        </div>
        <div className='figcaption' />
        <NewestArticleList />
      </div>
    </>
  );
}
