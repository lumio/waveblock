import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding: 1em;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  font: 1em/1.3 Helvetica, Arial, sans-serif;

  transition: opacity 1s;
  opacity: ${ props => ( props.hideControls ? 0 : 1 ) };

  input[ type=text ] {
    border: 1px solid #333;
    background: #010101;
    color: #ccc;
    padding: 4px;
  }

  button {
    border: none;
    background: #222;
    color: #ccc;
    padding: 8px 1em;
    min-width: 150px;
  }

  label {
    display: block;
  }
`;

const Controls = props => (
  <Wrapper hideControls={ props.hideControls }>
    <div>
      <button
        onClick={ () => props.updateOption( 'hideControls', !props.hideControls ) }
      >
        { props.hideControls ? 'show ' : 'hide ' } controls
      </button>
    </div>

    <div>
      <label htmlFor='sourceMic'>
        <input
          id='sourceMic'
          type='radio'
          onClick={ () => props.updateOption( 'source', 'mic' ) }
          checked={ props.options.source === 'mic' }
          readOnly
        />
        { ' ' }mic
      </label>

      <label htmlFor='sourceFile'>
        <input
          id='sourceFile'
          type='radio'
          onClick={ () => props.updateOption( 'source', 'file' ) }
          checked={ props.options.source === 'file' }
          readOnly
        />
        { ' ' }file
      </label>
    </div>

    <div>
      <label htmlFor='modeSquare'>
        <input
          id='modeSquare'
          type='radio'
          onClick={ () => props.updateOption( 'mode', 'square' ) }
          checked={ props.options.mode === 'square' }
          readOnly
        />
        { ' ' }square
      </label>

      <label htmlFor='modeLine'>
        <input
          id='modeLine'
          type='radio'
          onClick={ () => props.updateOption( 'mode', 'line' ) }
          checked={ props.options.mode === 'line' }
          readOnly
        />
        { ' ' }line
      </label>
    </div>

    <div>
      <label htmlFor='colorInput'>
        color{ ' ' }
        <input
          id='colorInput'
          type='text'
          onChange={ e => props.updateOption( 'color', e.target.value ) }
          value={ props.options.color }
        />
      </label>

      <label htmlFor='colorWhite'>
        <input
          id='colorWhite'
          type='radio'
          onClick={ () => props.updateOption( 'color', '#fff' ) }
          checked={ props.options.color === '#fff' }
          readOnly
        />
        { ' ' }white
      </label>

      <label htmlFor='colorBlue'>
        <input
          id='colorBlue'
          type='radio'
          onClick={ () => props.updateOption( 'color', '#00e0ff' ) }
          checked={ props.options.color === '#00e0ff' }
          readOnly
        />
        { ' ' }blue
      </label>

      <label htmlFor='colorRed'>
        <input
          id='colorRed'
          type='radio'
          onClick={ () => props.updateOption( 'color', '#fe1d1d' ) }
          checked={ props.options.color === '#fe1d1d' }
          readOnly
        />
        { ' ' }red
      </label>
    </div>
  </Wrapper>
);

Controls.propTypes = {
  updateOption: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  hideControls: PropTypes.bool,
};

Controls.defaultProps = {
  hideControls: false,
};

export default Controls;
