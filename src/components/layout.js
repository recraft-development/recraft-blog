import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import 'normalize.css';

// import { Header } from './Header';
import { Footer } from './Footer';
import { GlobalStyle, media } from '../styled';

const Wrapper = styled.div``;

const Row = styled.div``;

// const HeaderRow = styled(Row)`
//   border-bottom: #f0f0f2 1px solid;
// `;

const ContentRow = styled(Row)`
  padding-top: 32px;

  ${media.greaterThan('small')`
		padding-top: 64px;
	`}
`;

const FooterRow = styled(Row)`
  background-color: #323232;
  color: #7f7f7f;
`;

const Section = styled.section`
  margin: 0 auto;
  width: 100%;

  ${media.greaterThan('small')`
		padding: 32px;
		width: 764px;
	`}
  ${media.greaterThan('medium')`
		width: 1004px;
	`}
`;

export class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        <GlobalStyle />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;1,300&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        {/*<HeaderRow>*/}
        {/*  <Section>*/}
        {/*    <Header />*/}
        {/*  </Section>*/}
        {/*</HeaderRow>*/}
        <ContentRow>
          <Section>{children}</Section>
        </ContentRow>
        <FooterRow>
          <Section>
            <Footer />
          </Section>
        </FooterRow>
      </Wrapper>
    );
  }
}

export default Template;
