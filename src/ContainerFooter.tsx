import React from 'react';

export default function ContainerFooter() {
  return (
    <div className='about'>
      <div className='about-avatar'>
        <a href='/about'>
          <img src='/avatar.jpg' alt='avatar' className='avatar' />
        </a>
        <span className='about-saying'>团子大家族！！！！</span>
      </div>
      <div className='about-nav-links'>
        <a href='about#contact' className='about-nav-item'>
          <span className='icon-mail'> 联系</span>
        </a>
        <span className='dot-divider'> · </span>
        <a href='/about#rss-links' className='about-nav-item'>
          <span className='icon-rss1'> 赞赏</span>
        </a>
      </div>
      <div className='clear' />
    </div>
  );
}
