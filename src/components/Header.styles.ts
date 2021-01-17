import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  left: inherit !important;
  h1 {
    font-weight: 100;
  }
  display: flex;
  justify-content: space-between;
  /* padding: 4rem 0; */

  background-color: white;
  z-index: 999;
  position: fixed;

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
