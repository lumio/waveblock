import React from 'react';
import styled from 'styled-components';
import WaveBlock from './components/WaveBlock';
import AudioData from './components/AudioData';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        .05, .05, .05,
        .05, .05, .05,
        .05, .05, .05,
      ],
    };
  }

  updateData = ( data ) => {
    this.setState( {
      ...this.state,
      data,
    } );
  }

  render() {
    return (
      <AppWrapper>
        <AudioData updateData={ this.updateData } />
        <WaveBlock data={ this.state.data } />
      </AppWrapper>
    );
  }
}
