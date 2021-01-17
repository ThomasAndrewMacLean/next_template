import React, { useContext } from 'react';
import Head from 'next/head';

import { getStructuredDataString } from '../utils';
import * as Styles from './Faq.styles';
import { FaqContext } from '../utils/contexts';

type PropsType = {};
const Faq = ({}: PropsType) => {
  const faqs = useContext(FaqContext) || [];

  return (
    <Styles.FaqWrapper className="content">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getStructuredDataString(faqs) }}
        />
      </Head>
      <div >faq</div>
    </Styles.FaqWrapper>
  );
};

export default Faq;
