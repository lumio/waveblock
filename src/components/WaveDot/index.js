import React from 'react';
import styled from 'styled-components';

const DotWrapper = styled.div`
  width: 33.33%;
  height: 33.33%;
  background: #000;

  border-radius: 100%;
  transform: scale( .1 );
  transition: transform .25s ease;
`;

const WaveDot = ( props ) => (
  <DotWrapper
    style={ { transform: `scale( ${ props.scale ? props.scale : '.1' } )` } }
  />
);

WaveDot.propTypes = {
  scale: React.PropTypes.number.isRequired,
};

export default WaveDot;