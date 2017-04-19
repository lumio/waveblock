import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Dot = styled.div`
  width: 33.33%;
  height: 33.33%;
  background: #000;

  border-radius: 100%;
  transform: scale( .1 );
  transition: transform .25s ease;
`;

const WaveDot = ( props ) => (
  <Dot
    style={ { transform: `scale( ${ props.scale } )` } }
  />
);

WaveDot.propTypes = {
  scale: PropTypes.number.isRequired,
};

export default WaveDot;