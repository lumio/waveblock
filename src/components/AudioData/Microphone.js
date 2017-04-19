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

export default function Microphone( frameCallback = () => {} ) {
  const audioContext = new AudioContext();
  navigator.getUserMedia( { audio: true }, processSound, ( err ) => {} );
  function processSound( stream ) {
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaStreamSource( stream );
    source.connect( analyser );
    analyser.smoothingTimeConstant = 0.1;
    analyser.fftSize = 32;

    let frequencyData = new Uint8Array(analyser.frequencyBinCount);
    function renderFrame() {
      analyser.getByteFrequencyData( frequencyData );
      frameCallback( shrinkData( frequencyData ) );
      requestAnimationFrame( renderFrame );
    }
    requestAnimationFrame( renderFrame );
  }
}