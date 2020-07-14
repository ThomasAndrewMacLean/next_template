import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { T } from '.';
import { prefix } from '../utils';

type LayoutProps = {
  children: ReactNode;
  page: string;
};
const Layout = ({ children, page }: LayoutProps) => {
  console.log('prefix', prefix);
  return (
    <Main>
      <Header>
        <T translationKey="title"></T>
        <nav>
          <ul>
            <li>
              <NavLink active={page === prefix + 'home'} href="/">
                <T translationKey="homeTitle"></T>
              </NavLink>
            </li>
            <li>
              <NavLink active={page === prefix + 'contact'} href="/contact">
                <T translationKey="contactTitle"></T>
              </NavLink>
            </li>
            <li>
              <NavLink active={page === 'contact'} href="/contact">
                <T translationKey="contactTitle"></T>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      {children}
      <Footer>
        <div>facebook</div>
        <address>contact</address>
      </Footer>
    </Main>
  );
};

const Main = styled.main`
  margin: auto;
  width: 90%;
  max-width: 900px;
`;
const Header = styled.header`
  h1 {
    font-weight: 100;
  }
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
  nav {
  }
  ul {
    flex-direction: row;
    display: flex;
    list-style: none;

    li {
      margin: 0 1rem;
    }
  }
`;

const NavLink = styled.a<{ active: boolean }>`
  text-decoration: none;
  color: unset;
  position: relative;
  &:after {
    content: '';
    display: ${(props) => (props.active ? 'block' : 'none')};
    width: 100%;
    height: 3px;
    background: black;
  }
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  page: PropTypes.string.isRequired,
};

export default Layout;
