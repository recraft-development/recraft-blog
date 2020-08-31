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
		const [author] = get(this, 'props.data.allContentfulPerson.edges');

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
						fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
							...GatsbyContentfulFluid_tracedSVG
						}
					}
					description {
						childMarkdownRemark {
							html
						}
					}
				}
			}
		}
		allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
			edges {
				node {
					name
					shortBio {
						shortBio
					}
					title
					heroImage: image {
						fluid(maxWidth: 1180, maxHeight: 480, resizingBehavior: PAD, background: "rgb:000000") {
							...GatsbyContentfulFluid_tracedSVG
						}
					}
				}
			}
		}
	}
`;
