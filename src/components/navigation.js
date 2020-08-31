import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
];

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 1.25em;
`;

const Item = styled.li`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
`;

const ItemLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 100;
  color: #777;

  &:hover {
    color: #000;
  }
`;

const Navigation = props => (
  <Wrapper {...props}>
    {links.map(({ label, to }, i) => (
      <Item key={i}>
        <ItemLink to={to}>{label}</ItemLink>
      </Item>
    ))}
  </Wrapper>
);

export default Navigation;
