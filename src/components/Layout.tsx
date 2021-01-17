import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Layout.styles';
import { Header, Footer } from '.';
import { PageNameType } from '../types';
import { stickyHeader } from '../constants/settings';

type LayoutProps = {
  children: ReactNode;
  page: PageNameType;
};
const Layout = ({ children, page }: LayoutProps) => {
  return (
    <Styled.Wrap>
      <Header page={page}></Header>
      {stickyHeader && <Styled.Pusher />}
      {children}
      <Footer />
    </Styled.Wrap>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  page: PropTypes.string.isRequired,
};

export default Layout;
