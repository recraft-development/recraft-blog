import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 100;
`;

const Copyright = styled.div``;
const LegalLink = styled.a`
  color: #969696;
  text-decoration: none;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Copyright>© 2012-{new Date().getFullYear()} ReCraft</Copyright>
      <LegalLink href="#">Terms of Use</LegalLink>
      <LegalLink href="#">Privacy Policy</LegalLink>
    </Wrapper>
  );
};
