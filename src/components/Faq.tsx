import React, { useContext } from 'react';
import Head from 'next/head';

import { convertToHtml, getStructuredDataString } from '../utils';
import * as Styles from './Faq.styles';
import { FaqContext } from '../utils/contexts';
import { Slider } from '.';

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
      <div>
        {faqs.map((faq, index) => {
          return (
            <details key={index}>
              <summary>{faq.Vraag}</summary>
              <div
                dangerouslySetInnerHTML={{
                  __html: convertToHtml(faq.Antwoord),
                }}
              ></div>
            </details>
          );
        })}

        <Slider
          className="fullwidth"
          sliderItems={[
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
            {
              title: 'test',
              text: 'hellooo',
              image: 'demo-image',
            },
          ]}
        />
      </div>
    </Styles.FaqWrapper>
  );
};

export default Faq;
