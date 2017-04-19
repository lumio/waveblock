import React from 'react';
import PropTypes from 'prop-types';
import Microphone from './Microphone';

class AudioData extends React.Component {
  constructor( props ) {
    super( props );
    Microphone( ( data ) => {
      props.updateData( data );
    } );
  }

  render() {
    return null;
  }
};

AudioData.propTypes = {
  updateData: PropTypes.func.isRequired,
};

export default AudioData;