import React from 'react';
import * as Styles from './Header.styles';
import { T, FadeIn } from '.';
import { prefix } from '../utils';
import { pages } from '../constants/pages';
import { PageNameType } from '../types';
import { stickyHeader } from '../constants/settings';

type PropsType = { page: PageNameType };
const Header = ({ page }: PropsType) => {
  return (
    <Styles.HeaderWrapper stickyHeader={stickyHeader} className="fullwidth">
      <div className="content">
        <FadeIn
          // waitTime="10"
          animationDuration="600"
          beginStyle={{ opacity: 0, transform: 'translateY(10px)' }}
        >
          <T translationKey="title" className="text-gradient"></T>
        </FadeIn>
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
