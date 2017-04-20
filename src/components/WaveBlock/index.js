import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WaveDot from '../WaveDot';

const BlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: ${ props => props.mode === 'square' ? '20vmin' : '20vmin' };
  height: 20vmin;
`;

const WaveBlock = ( props ) => (
  <BlockWrapper mode={ props.mode }>
    { props.data.map( ( scale, key ) => (
      <WaveDot scale={ scale } mode={ props.mode } key={ key } />
    ) ) }
  </BlockWrapper>
);

WaveBlock.propTypes = {
  data: PropTypes.arrayOf( PropTypes.number ).isRequired,
  mode: PropTypes.string,
}

WaveBlock.defaultProps = {
  mode: 'square',
}

export default WaveBlock;
