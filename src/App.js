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
    <WaveBlock />
  </AppWrapper>
);
export default App;