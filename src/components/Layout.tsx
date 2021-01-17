import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Header, Footer } from '.';
import { PageNameType } from '../types';

type LayoutProps = {
  children: ReactNode;
  page: PageNameType;
};
const Layout = ({ children, page }: LayoutProps) => {
  return (
    <Wrap>
      <Header page={page}></Header>
      {children}
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: auto;
  width: 90%;
  max-width: 900px;
`;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  page: PropTypes.string.isRequired,
};

export default Layout;
