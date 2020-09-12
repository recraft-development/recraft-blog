import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import ArticlePreview from '../components/article-preview';

const PostsList = styled.ul`
  list-style-type: none;
`;

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allContentfulBlogPost.edges');

    return (
      <>
        <Helmet title={siteTitle} />
        <PostsList>
          {posts.map(({ node }) => {
            return (
              <li key={node.slug}>
                <ArticlePreview article={node} />
              </li>
            );
          })}
        </PostsList>
      </>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            ...imageSrc
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
