import HeaderNav from './HeaderNav';
import React from 'react';

export default function About() {
  return (
    <>
      <HeaderNav />
      <div className='body'>
        <div className='figure'>
          <img src='/bear.jpg' data-src='/bear.jpg' alt='北极熊' className='post-img lazyload medium-zoom-image' />
        </div>
        <div className='figcaption' />
        <h1>介绍信息</h1>
        <h1>留言组件</h1>
        <h1>留言列表</h1>
      </div>
    </>
  );
}
