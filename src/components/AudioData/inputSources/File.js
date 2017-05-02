import React from 'react';
import InputSource from './InputSource';

class File extends InputSource {
  init( binary ) {
    this.audioContext.decodeAudioData( binary ).then( ( decodedData ) => {
      const source = this.audioContext.createBufferSource();
      this.stream = source;
      source.buffer = decodedData;

      const analyser = this.audioContext.createAnalyser();
      analyser.smoothingTimeConstant = 0.5;
      analyser.fftSize = 32;

      source.connect( analyser );
      source.connect( this.audioContext.destination );
      source.start();

      this.initRendering( analyser );
    } );
  }

  readFile = ( e ) => {
    const file = e.target.files[ 0 ];
    if ( !file ) {
      return;
    }

    const reader = new FileReader();
    reader.onload = ( event ) => {
      const contents = event.target.result;
      this.init( contents );
    };
    reader.readAsArrayBuffer( file );
  }

  destroy() {
    this.destroyed = true;
    if ( this.stream ) {
      this.stream.stop();
    }
  }

  render() {
    return (
      <input type='file' onChange={ this.readFile } />
    );
  }
}

export default File;
