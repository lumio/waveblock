import React from 'react';
import styled from 'styled-components';
import WaveDot from '../WaveDot';

const BlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 30vmin;
  height: 30vmin;
`;

export default class WaveBlock extends React.Component {
  render() {
    const scales = [
      0, .1, .2,
      .1, .2, .3,
      .2, .3, .4,
    ];

    return (
      <BlockWrapper>
        { scales.map( ( scale, key ) => (
          <WaveDot scale={ scale } key={ key } />
        ) ) }
      </BlockWrapper>
    )
  }
};