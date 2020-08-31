import { createGlobalStyle } from 'styled-components';

import { generateMedia } from 'styled-media-query';

export const breakpoints = {
  large: '1200px',
  medium: '992px',
  small: '768px',
};

export const media = generateMedia(breakpoints);

export const GlobalStyle = createGlobalStyle`
  * {
	box-sizing: border-box;
	}

	body {
		font-family: "Raleway", sans-serif;
		font-size: 14px;
		line-height: 1.42857;
		color: #323232;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: inherit;
		font-weight: 500;
		line-height: 1.1;
		color: inherit;
	}

 	h1, h2, h3 {
		margin-top: 20px;
		margin-bottom: 10px;
	}

	a:hover, a:focus {
		color: #db1f2f;
		text-decoration: none;
	}
	ul {
		padding: 0;
		margin: 0;
	}
`;
