import styled from 'styled-components';

export const BackgroundImageWrapper = styled.div<{ imageUrl: string }>`
  background-image: ${(props) => `url(${props.imageUrl})`};
`;
