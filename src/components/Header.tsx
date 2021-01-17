import React from 'react';
import * as Styles from './Header.styles';
import { T } from '.';
import { prefix } from '../utils';
import { pages } from '../constants/pages';
import { PageNameType } from '../types';
import { stickyHeader } from '../constants/settings';

type PropsType = { page: PageNameType };
const Header = ({ page }: PropsType) => {
  return (
    <Styles.HeaderWrapper stickyHeader={stickyHeader} className="fullwidth">
      <div className="content">
        <T translationKey="title"></T>
        <nav>
          <ul>
            {pages
              .filter((p) => p.showInNav)
              .map((pag, i) => {
                return (
                  <li key={i}>
                    <Styles.NavLink
                      active={page === pag.id}
                      href={prefix + pag.url}
                    >
                      <T translationKey={pag.id + 'Title'}></T>
                    </Styles.NavLink>
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
    </Styles.HeaderWrapper>
  );
};

export default Header;
