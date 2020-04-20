import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { T } from '../components';
import { useStore } from '../store';
import { HELLOWORLD } from '../constants';
import { add } from '../utils';

const IndexPage = () => {
  const { count, countPlusOne } = useStore();
  return (
    <Main>
      <Head>
        <title>BMS Rent</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <h1>{HELLOWORLD}</h1>
      <T id="test"></T>
      <button onClick={countPlusOne}>+</button>
      {count}+ 1 = {add(count, 1)}
    </Main>
  );
};

const Main = styled.main`
  background: var(--background-dark);
`;

export default IndexPage;
