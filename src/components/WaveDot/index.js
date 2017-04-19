import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function stretchValue( scale, min, max ) {
  return ( max - min ) * scale + min
}

const Dot = styled.div`
  width: 33.33%;
  height: 33.33%;
  background: #000;

  border-radius: 100%;
  transform: scale( .1 );
  transition: all .2s ease;
`;

const WaveDot = ( props ) => (
  <Dot
    style={ {
      transform: `scale( ${
        stretchValue( props.scale, props.min, props.max )
      } )`,
      opacity: stretchValue( props.scale, .25, 1 )
    } }
  />
);

WaveDot.propTypes = {
  scale: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

WaveDot.defaultProps = {
  min: .08,
  max: 1,
}

export default WaveDot;