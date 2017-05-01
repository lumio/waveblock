import React from 'react';
import PropTypes from 'prop-types';
import Microphone from './Microphone';

class AudioData extends React.Component {

  constructor( props ) {
    super( props );
    this.source = new Microphone( ( data ) => {
      props.updateData( data );
    } );
  }

  source: null

  render() {
    return ( this.source && this.source.render ? this.source.render() : null );
  }
}

AudioData.propTypes = {
  updateData: PropTypes.func.isRequired,
};

export default AudioData;
