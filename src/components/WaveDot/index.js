import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function stretchScale( scale, min, max ) {
  return ( max - min ) * scale + min
}

const Dot = styled.div`
  width: 33.33%;
  height: 33.33%;
  background: #000;

  border-radius: 100%;
  transform: scale( .1 );
  transition: transform .1s ease;
`;

const WaveDot = ( props ) => (
  <Dot
    style={ { transform: `scale( ${
      stretchScale( props.scale, props.min, props.max )
    } )` } }
  />
);

WaveDot.propTypes = {
  scale: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

WaveDot.defaultProps = {
  min: .08,
  max: 3,
}

export default WaveDot;