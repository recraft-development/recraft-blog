import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Navigation from './navigation';
import { media } from '../styled';
import Hamburger from './Hamburger';

const Wrapper = styled.div`
	padding: 32px;
`;

const Head = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const DesktopNavigation = styled(Navigation)`
	display: none;

	${media.greaterThan('small')`
		display: flex;
	`}
`;

const Logo = styled.img`
	display: block;
	width: 240px;
	height: 58px;
`;

const MobileHamburger = styled(Hamburger)`
	display: flex;

	${media.greaterThan('small')`
		display: none;
	`}
`;

const MobileNaviagationWrapper = styled.div`
	position: relative;
	overflow: hidden;
	transition: height 0.35s ease;

	${props =>
		props.collapsed
			? `
	height: 1px;
	`
			: `height: 58px;`}

	${media.greaterThan('small')`
		display: none;
	`}
`;

const MobileNavigation = styled(Navigation)`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	margin-top: 8.5px;
`;

export const Header = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const handleIsCollapsed = () => {
		setIsCollapsed(prevIsCollapsed => !prevIsCollapsed);
	};

	return (
		<Wrapper>
			<Head>
				<Link to="/">
					<Logo src={'https://2ch.hk/ololo/d_3.png'} alt="Recraft" />
				</Link>
				<DesktopNavigation />
				<MobileHamburger onClick={handleIsCollapsed} />
			</Head>
			<MobileNaviagationWrapper collapsed={isCollapsed}>
				<MobileNavigation />
			</MobileNaviagationWrapper>
		</Wrapper>
	);
};
