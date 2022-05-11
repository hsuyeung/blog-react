import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home, { StyledHeaderLink } from './Home';
import styled from '@emotion/styled';
import { ClearBoth, StyledDotDivider } from './customStyledComponent';

export default function HeaderNav() {
  return (
    <StyledHeaderNav>
      <h1>
        <StyledHeaderLink to='/'>Hsu Yeung</StyledHeaderLink>
      </h1>
      <div>
        <span>日常、技术、生活</span>
        <StyledNavMenu>
          <Routes>
            <Route path='about' element={<Home />} />
          </Routes>
          <Link to='/archive' className='nav-item'>
            归档
          </Link>
          <StyledDotDivider> | </StyledDotDivider>
          <Link to='/about' className='nav-item'>
            关于
          </Link>
        </StyledNavMenu>
      </div>
      <ClearBoth />
    </StyledHeaderNav>
  );
}

const StyledHeaderNav = styled.div`
  @media (min-device-width: 1281px) {
    margin-bottom: 30px;
  }
`;

const StyledNavMenu = styled.span`
  font-size: 15px;
  float: right;
  @media (max-device-width: 700px) {
    display: block;
    float: none;
    margin-top: 5px;
  }
`;
