import React from 'react';
import styled from 'styled-components';
import CleanButton from './CleanButton';

const Wrapper = styled(CleanButton)`
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: 22px;
`;

const Row = styled.span`
	display: block;
	width: 22px;
	height: 2px;
	border-radius: 0;
	border-top: 1px solid #b4b4b4;
	border-bottom: 1px solid #949494;
	background-color: #7f7f7f;

	&:not(:first-child) {
		margin-top: 4px;
	}
`;

const Hamburger = props => {
	return (
		<Wrapper {...props}>
			<Row />
			<Row />
			<Row />
		</Wrapper>
	);
};

export default Hamburger;
