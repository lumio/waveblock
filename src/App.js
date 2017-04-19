import React from 'react';
import styled from 'styled-components';
import WaveBlock from './components/WaveBlock';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const App = () => (
  <AppWrapper>
    <WaveBlock
      data={ [
        .05, .1, .2,
        .3, .4, .5,
        .2, .1, 0,
      ] }
    />
  </AppWrapper>
);
export default App;