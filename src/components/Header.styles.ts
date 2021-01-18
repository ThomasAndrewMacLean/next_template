import styled from 'styled-components';

export const HeaderWrapper = styled.header<{ stickyHeader: boolean }>`
  left: inherit !important;
  box-shadow: var(--shadow);
  height: var(--headerHeight);
  background-color: white;
  z-index: 999;
  position: ${(props) => props.stickyHeader && 'fixed'};
  h1 {
    font-weight: 100;
  }

  .content {
    display: flex;
    padding: 0;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

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

export const NavLink = styled.a<{ active: boolean }>`
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
