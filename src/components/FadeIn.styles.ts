import styled from 'styled-components';

export const FadeInWrap = styled.div<{
  animateProperty: string;
  animationDuration: string;
}>`
  transition: ${(props) =>
    `${props.animateProperty} ${props.animationDuration}ms ease`};
`;
