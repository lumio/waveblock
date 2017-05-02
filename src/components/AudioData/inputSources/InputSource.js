class InputSource {
  static shrinkData( data ) {
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

  constructor( frameCallback = () => {} ) {
    this.audioContext = new AudioContext();
    this.frameCallback = frameCallback;
  }

  recorder = false;

  initRendering( analyser ) {
    const frequencyData = new Uint8Array( analyser.frequencyBinCount );
    const renderFrame = () => {
      if ( this.destroyed ) {
        return;
      }

      analyser.getByteFrequencyData( frequencyData );
      this.frameCallback( InputSource.shrinkData( frequencyData ) );

      requestAnimationFrame( renderFrame );
    };
    requestAnimationFrame( renderFrame );
  }
}

export default InputSource;
