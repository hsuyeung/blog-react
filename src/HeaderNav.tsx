import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import styled from '@emotion/styled';

export default function HeaderNav() {
  return (
    <div>
      <span>XXX的个人博客</span>
      <StyledNavMenu>
        <Routes>
          <Route path='about' element={<Home />} />
        </Routes>
        <a href='/posts' className='nav-item'>
          所有文章
        </a>
        <span className='dot-divider'> | </span>
        <a href='/about' className='nav-item'>
          关于
        </a>
      </StyledNavMenu>
    </div>
  );
}

const StyledNavMenu = styled.span`
  font-size: 15px;
  float: right;
  @media (max-device-width: 700px) {
    display: block;
    float: none;
    margin-top: 5px;
  }
`;
