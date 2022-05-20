import { Link } from 'react-router-dom';
import React from 'react';
import styled from '@emotion/styled';
import { ClearBoth, StyledDotDivider } from './components';

export default function HeaderNav() {
  return (
    <StyledHeaderNav>
      <h1>
        <StyledHeaderLink to='/'>Hsu Yeung</StyledHeaderLink>
      </h1>
      <div>
        <span>日常、技术、生活</span>
        <StyledNavMenu>
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
    margin-bottom: 3rem;
  }
`;

const StyledNavMenu = styled.span`
  font-size: 1.5rem;
  float: right;
  @media (max-device-width: 700px) {
    display: block;
    float: none;
    margin-top: 0.5rem;
  }
`;

const StyledHeaderLink = styled(Link)`
  &:link,
  &:visited {
    color: #4f321c;
  }
`;
