import styled from 'styled-components';
import { hideScrollBar } from '../styles/snippets';

export const SliderWrapper = styled.div`
  ul {
    padding: 2rem;
    padding-left: 0;
    padding-left: calc(50vw - 450px);

    scroll-snap-type: x mandatory;
    scroll-padding-left: calc(50vw - 450px);
    li {
      scroll-snap-align: start;
    }

    @media only screen and (max-width: 1000px) {
      padding-left: 5vw;
      scroll-padding-left: 5vw;
    }

    margin-left: 0rem;
    gap: 3rem;
    overflow: scroll;
    list-style: none;
    flex: 1;
    display: flex;

    ${hideScrollBar}

    .wrap {
      min-width: 400px;
      box-shadow: var(--shadow);
      display: flex;
      border-radius: 20px;
      overflow: hidden;

      img {
        width: 40%;
        object-fit: cover;
      }
      .textWrap {
        background: white;
        padding: 1rem;
        padding-bottom: 2rem;
        width: 60%;

        h3 {
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .text {
          font-size: 0.9rem;
        }
      }
    }
  }

  .arrowWrap {
    padding: 0 !important;

    button {
      height: 35px;
      width: 35px;
      border: none;
      background: none;
      margin-right: 2rem;
      outline: none;
      cursor: pointer;
      transition: all 300ms ease;
      &:hover,
      &:focus {
        transform: scale(1.1);
      }
      img {
        opacity: 0.7;
      }
    }
  }
`;
