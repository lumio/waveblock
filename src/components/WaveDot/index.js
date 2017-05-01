import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function stretchValue( scale, min, max ) {
  return ( ( max - min ) * scale ) + min;
}

function styleByMode( value, mode ) {
  if ( mode === 'square' ) {
    return `scale( ${ value } )`;
  }

  return `scaleX( .2 ) scaleY( ${ value } )`;
}

const Dot = styled.div`
  width: ${ props => ( props.mode === 'square' ? '33.33%' : '5%' ) };
  height: 33.33%;
  transition: background-color .5s, transform .05s ease;

  border-radius: ${ props => ( props.mode === 'square' ? '100%' : '0' ) };
`;

const WaveDot = props => (
  <Dot
    mode={ props.mode }
    style={ {
      transform: styleByMode(
        stretchValue( props.scale, props.min, props.max ),
        props.mode,
      ),
      opacity: stretchValue( props.scale, .25, 1 ),
      backgroundColor: props.color,
    } }
  />
);

WaveDot.propTypes = {
  scale: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  mode: PropTypes.string,
  color: PropTypes.string,
};

WaveDot.defaultProps = {
  min: .08,
  max: 1,
  mode: 'square',
  color: '#fff',
};

export default WaveDot;
