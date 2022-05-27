import React from 'react';
import { StyledDotDivider } from './components';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className='copyright'>
        © 2019 ~ 2022
        <StyledDotDivider>·</StyledDotDivider>
        <Link to='/'>HsuYeung</Link>
        <StyledDotDivider>·</StyledDotDivider>
        <Link to='/about'>关于本站</Link>
      </div>
      <div>
        <a href='https://beian.miit.gov.cn/' target='_blank'>
          蜀ICP备2022013775号-1
        </a>
      </div>
    </footer>
  );
}
