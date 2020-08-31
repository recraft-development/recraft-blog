import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Wrapper = styled.div`
	background-color: #fff;
	border-bottom: 1px solid #dfdfdf;
	padding-bottom: 64px;
	margin-bottom: 64px;
`;

const ImageWrapper = styled(Link)`
	width: 100%;
	margin-bottom: 32px;
`;

const UnderImage = styled.div`
	padding: 0 32px;
	font-weight: 100;
`;

const Title = styled(Link)`
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

const ArticlePreview = ({ article }) => {
	const articlePath = `/blog/${article.slug}`;

	return (
		<Wrapper>
			<ImageWrapper to={articlePath}>
				<Img alt="" fluid={article.heroImage.fluid} />
			</ImageWrapper>
			<UnderImage>
				<h1>
					<Title to={articlePath}>{article.title}</Title>
				</h1>
				<Meta>{article.publishDate}</Meta>
				<article
					dangerouslySetInnerHTML={{
						__html: article.description.childMarkdownRemark.html,
					}}
				/>
			</UnderImage>
		</Wrapper>
	);
};

export default ArticlePreview;
