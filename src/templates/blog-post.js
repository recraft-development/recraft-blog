import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import get from 'lodash/get';
import Img from 'gatsby-image';

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

const UnderImage = styled.div`
  padding: 0 32px;
  font-weight: 100;
`;

const Title = styled.h1`
  color: currentColor;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: 0;
  font-weight: 100;

  &:hover {
    text-decoration: underline;
  }
`;

const Meta = styled.small`
  color: #aaaaaa;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost');
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <ImageWrapper>
          <Img alt={post.title} fluid={post.heroImage.fluid} />
        </ImageWrapper>
        <UnderImage>
          <Title>{post.title}</Title>
          <Meta>{post.publishDate}</Meta>
          <article
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </UnderImage>
      </>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
