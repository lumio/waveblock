import React from 'react';

function shrinkData( data ) {
  const output = [];
  output.push( ( data[ 2 ] + data[ 1 ] ) / 512 );
  output.push( ( data[ 2 ] + data[ 3 ] ) / 512 );
  output.push( ( data[ 4 ] + data[ 5 ] ) / 512 );
  output.push( ( data[ 5 ] + data[ 6 ] + data[ 7 ] ) / 768 );
  output.push( ( data[ 7 ] + data[ 8 ] + data[ 9 ] ) / 768 );
  output.push( ( data[ 8 ] + data[ 9 ] + data[ 10 ] ) / 768 );
  output.push( ( data[ 10 ] + data[ 11 ] ) / 512 );
  output.push( ( data[ 12 ] + data[ 13 ] ) / 512 );
  output.push( ( data[ 14 ] + data[ 15 ] ) / 512 );

  return output;
}

class File {
  constructor( frameCallback = () => {} ) {
    this.frameCallback = frameCallback;
  }

  init( binary ) {
    const audioContext = new AudioContext();
    audioContext.decodeAudioData( binary ).then( ( decodedData ) => {
      const source = audioContext.createBufferSource();
      source.buffer = decodedData;

      const analyser = audioContext.createAnalyser();
      analyser.smoothingTimeConstant = 0.5;
      analyser.fftSize = 32;

      source.connect( analyser );
      source.connect( audioContext.destination );
      source.start();

      const frequencyData = new Uint8Array( analyser.frequencyBinCount );
      const renderFrame = () => {
        analyser.getByteFrequencyData( frequencyData );
        this.frameCallback( shrinkData( frequencyData ) );
        requestAnimationFrame( renderFrame );
      };
      requestAnimationFrame( renderFrame );
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

  render() {
    return (
      <input type='file' onChange={ this.readFile } />
    );
  }
}

export default File;
