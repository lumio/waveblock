import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ControlsOptions from './ControlsOptions';

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

    <ControlsOptions
      updateOption={ props.updateOption }
      optionName='source'
      options={ [ 'Microphone', 'File' ] }
      selected={ props.options.source }
    />

    <ControlsOptions
      updateOption={ props.updateOption }
      optionName='mode'
      options={ [ 'square', 'line' ] }
      selected={ props.options.mode }
    />

    <ControlsOptions
      updateOption={ props.updateOption }
      optionName='color'
      options={ [
        [ '#fff', 'white' ],
        [ '#00e0ff', 'blue' ],
        [ '#fe1d1d', 'red' ],
      ] }
      selected={ props.options.color }
    >
      <label htmlFor='colorInput'>
        color{ ' ' }
        <input
          id='colorInput'
          type='text'
          onChange={ e => props.updateOption( 'color', e.target.value ) }
          value={ props.options.color }
        />
      </label>
    </ControlsOptions>

    <div>
      { props.children }
    </div>
  </Wrapper>
);

Controls.propTypes = {
  updateOption: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
  hideControls: PropTypes.bool,
  children: PropTypes.node,
};

Controls.defaultProps = {
  hideControls: false,
  children: null,
};

export default Controls;
