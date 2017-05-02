import React from 'react';
import PropTypes from 'prop-types';

const ControlsOptions = ( props ) => {
  const { updateOption, optionName, options, selected } = props;
  return (
    <div>

      { props.children }

      { options.map( ( option ) => {
        const key = `${ optionName }${ option }`;
        let value = option;
        let label = option;

        if ( option.constructor === Array ) {
          value = option[ 0 ];
          label = option[ 1 ];
        }

        return (

          <label
            htmlFor={ key }
            key={ key }
          >

            <input
              id={ key }
              type='radio'
              onClick={ () => updateOption( optionName, value ) }
              checked={ selected === value }
              readOnly
            />
            { ` ${ label }` }

          </label>

        );
      } ) }

    </div>
  );
};

ControlsOptions.propTypes = {
  updateOption: PropTypes.func.isRequired,
  optionName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.string,
  children: PropTypes.node,
};

ControlsOptions.defaultProps = {
  selected: '',
  children: null,
};

export default ControlsOptions;
