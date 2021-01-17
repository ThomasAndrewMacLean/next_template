import styled from 'styled-components';

export const FaqWrapper = styled.section`
  display: flex;
  position: relative;
  justify-content: space-between;
  details {
    max-width: 550px;
    margin-bottom: 1rem;
    font-weight: 200;
  }
  summary {
    font-weight: 400;
    cursor: pointer;
    margin-bottom: 1rem;
    outline: none;
    &:focus {
      font-weight: 800;
    }
  }

  details[open] summary ~ * {
    animation: sweep 0.5s ease-in-out;
  }

  @keyframes sweep {
    0% {
      opacity: 0;
      transform: translateX(-10px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
