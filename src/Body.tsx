import styled from '@emotion/styled';
import React from 'react';
import BodyFooter from './BodyFooter';
import Router from './routes';

export default function Body() {
  return (
    <StyledBody>
      <Router />
      <BodyFooter />
    </StyledBody>
  );
}

const StyledBody = styled.div`
  display: block;
  background-color: #faf5e3;
  margin: 0 auto;
  padding: 5rem 5.5rem;
  @media (max-device-width: 700px) {
    max-width: 100%;
    padding: 1.5rem;
  }
  @media (min-device-width: 1281px) {
    max-width: 76.8rem;
    box-shadow: 0 0.5rem 1rem 0.4rem rgba(0, 0, 0, 0.13);
    margin: 2.2rem auto 0 auto;
  }
  @media print {
    width: 100%;
    box-shadow: none;
    margin: 0;
    background: #fef9e7;
  }
`;
