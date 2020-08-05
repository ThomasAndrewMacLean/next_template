const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const reactComp = `import React from 'react'
  import * as Styles from './XXXXX.styles'

  type PropsType = {}
  const XXXXX = ({}:PropsType) => {
  return <Styles.XXXXXWrapper></Styles.XXXXXWrapper>
}

export default XXXXX
`;

const styles = `import styled from 'styled-components'

export const XXXXXWrapper = styled.div\`\`
`;

rl.question('What will be the new component? ', function (componentName) {
  console.log(componentName);
  componentName = capitalize(componentName);
  fs.writeFileSync(
    'src/components/' + componentName + '.tsx',
    reactComp.split('XXXXX').join(componentName)
  );

  fs.writeFileSync(
    'src/components/' + componentName + '.styles.ts',
    styles.split('XXXXX').join(componentName)
  );

  let indexPage = fs.readFileSync('src/components/index.ts', 'utf8');
  indexPage =
    indexPage +
    `export { default as ${componentName} } from './${componentName}'\n`;

  fs.writeFileSync('src/components/index.ts', indexPage);
  rl.close();
});
