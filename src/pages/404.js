import React from 'react';
import styled from 'styled-components';
import notFoundImage from './404.jpg';

const Image = styled.img`
	width: 100%;
	max-width: 600px;
	height: auto;
`;

const NotFound = () => (
	<>
		<Image src={notFoundImage} alt="not found" />
		<h3>Page was not found</h3>
	</>
);

export default NotFound;
