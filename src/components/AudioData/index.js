import React from 'react';
import PropTypes from 'prop-types';

import File from './inputSources/File';
import Microphone from './inputSources/Microphone';

const inputSources = {
  File,
  Microphone,
};

class AudioData extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      source: props.source,
    };
    this.useSource( props.source );
  }

  componentWillReceiveProps( newProps ) {
    if ( this.props.source !== newProps.source ) {
      this.useSource( newProps.source );
    }
  }

  source: null

  useSource( source ) {
    if ( !inputSources[ source ] ) {
      return alert( 'Whoups, something went wrong' );
    }
    if ( this.source && this.source.destroy ) {
      this.source.destroy();
    }
    delete this.source;
    this.source = new inputSources[ source ]( ( data ) => {
      this.props.updateData( data );
    } );
    return true;
  }

  render() {
    return ( this.source && this.source.render ? this.source.render() : null );
  }
}

AudioData.propTypes = {
  updateData: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired,
};

export default AudioData;
