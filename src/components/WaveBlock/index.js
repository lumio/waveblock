import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WaveDot from '../WaveDot';

const BlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 20vmin;
  height: 20vmin;
`;

const WaveBlock = ( props ) => (
  <BlockWrapper>
    { props.data.map( ( scale, key ) => (
      <WaveDot scale={ scale } key={ key } />
    ) ) }
  </BlockWrapper>
);

WaveBlock.propTypes = {
  data: PropTypes.arrayOf( PropTypes.number ).isRequired,
}

export default WaveBlock;
