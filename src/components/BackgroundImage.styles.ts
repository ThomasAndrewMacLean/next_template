import styled from 'styled-components';

export const BackgroundImageWrapper = styled.div<{
  imageUrl: string;
  fixed: boolean;
}>`
  background: ${(props) =>
    `url(${props.imageUrl}) no-repeat center center ${
      props.fixed ? 'fixed' : ''
    }`};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;
