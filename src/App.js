import React from 'react';
import styled from 'styled-components';
import WaveBlock from './components/WaveBlock';
import AudioData from './components/AudioData';
import Controls from './components/Controls';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class App extends React.Component {
  static remapData( data, map ) {
    if ( !map || !map.length ) {
      return data;
    }

    return map.map( key => data[ key ] );
  }

  constructor() {
    super();

    this.state = {
      data: [
        .05, .05, .05,
        .05, .05, .05,
        .05, .05, .05,
      ],
      // map: false,
      map: [
        3, 4, 5,
        1, 0, 2,
        6, 7, 3,
      ],
      options: {
        source: 'mic',
        mode: 'line',
        color: '#fff',
      },
    };
  }

  updateData = ( data ) => {
    this.setState( {
      ...this.state,
      data: App.remapData( data, this.state.map ),
    } );
  }

  updateOption = ( key, value ) => {
    this.setState( {
      ...this.state,
      options: {
        ...this.state.options,
        [ key ]: value,
      },
    } );
  };

  render() {
    return (
      <AppWrapper>
        <Controls
          updateOption={ this.updateOption }
          hideControls={ this.state.options.hideControls }
          options={ this.state.options }
        />
        <AudioData updateData={ this.updateData } />
        <WaveBlock
          data={ this.state.data }
          mode={ this.state.options.mode }
          color={ this.state.options.color }
        />
      </AppWrapper>
    );
  }
}
