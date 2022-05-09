import React from 'react';
import NewestArticleList from './NewestArticleList';
import styled from '@emotion/styled';
import HeaderNav from './HeaderNav';

export default function Home() {
  return (
    <>
      <div>
        <h1>
          <StyledHeaderA href='/'>Hsu Yeung</StyledHeaderA>
        </h1>
        <HeaderNav />
      </div>
      <div className='body'>
        <div className='figure'>
          <img src='/bear.jpg' data-src='/bear.jpg' alt='北极熊' className='post-img lazyload medium-zoom-image' />
        </div>
        <div className='figcaption' />
        <NewestArticleList />
      </div>
    </>
  );
}

const StyledHeaderA = styled.a`
  &:link,
  &:visited {
    color: #4f321c;
  }
`;
