import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ClearBoth, StyledDotDivider } from './components';

export default function BodyFooter() {
  return (
    <StyledBodyFooter>
      <LeftDiv>
        <Link to='/'>
          <img src='/avatar.jpg' alt='avatar' className='avatar' />
        </Link>
        <span className='about-saying'>团子大家族！！！！</span>
      </LeftDiv>
      <RightDiv>
        <Link to='about#contact'>
          <span className='icon-mail'> 联系</span>
        </Link>
        <StyledDotDivider> · </StyledDotDivider>
        <Link to='/about#Appreciate'>
          <span className='icon-rss1'> 赞赏</span>
        </Link>
      </RightDiv>
      <ClearBoth />
    </StyledBodyFooter>
  );
}

const StyledBodyFooter = styled.div`
  display: block;
  padding-top: 1.4rem;
  border-top: 0.1rem solid rgba(154, 128, 92, 0.2);
  margin-top: 1.6rem;
  max-width: 100%;
  margin-bottom: -3.2rem;
  font-size: 1.5rem;
  @media (max-device-width: 700px) {
    display: none;
  }
`;

const LeftDiv = styled.div`
  float: left;
`;

const RightDiv = styled.div`
  float: right;
`;
