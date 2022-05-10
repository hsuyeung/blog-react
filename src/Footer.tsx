import React from 'react';
import { StyledDotDivider } from './customStyledComponent';

export default function Footer() {
  return (
    <footer>
      <div className='copyright'>
        © 2019 ~ 2022
        <StyledDotDivider>·</StyledDotDivider>
        <a href='/'>HsuYeung</a>
        <StyledDotDivider>·</StyledDotDivider>
        <a href='/about'>关于本站</a>
      </div>
    </footer>
  );
}
