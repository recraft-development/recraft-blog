import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import get from 'lodash/get';

const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
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
          <Image alt={post.title} src={post.heroImage.file.url} />
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
  fragment imageSrc on ContentfulAsset {
    file {
      url
    }
  }
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        ...imageSrc
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
