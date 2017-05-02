import InputSource from './InputSource';

class Microphone extends InputSource {
  constructor( callback ) {
    super( callback );
    const audioContext = new AudioContext();
    const processSound = ( stream ) => {
      if ( !this.recorder ) {
        this.recorder = new MediaRecorder( stream );
      }
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource( stream );
      source.connect( analyser );
      analyser.smoothingTimeConstant = 0.5;
      analyser.fftSize = 32;

      this.initRendering( analyser );
    };

    navigator.mediaDevices.getUserMedia( { audio: true, video: false } ).then( processSound );
  }

  destroy() {
    this.destroyed = true;
    if ( this.recorder ) {
      this.recorder.stream.getAudioTracks().forEach( track => track.stop() );
    }
  }

  render() {
    return null;
  }
}

export default Microphone;
