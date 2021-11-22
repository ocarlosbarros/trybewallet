import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, dataTestId, value, textLabel, onChange } = this.props;
    const labelFor = `${name}-label`;
    return (
      <label htmlFor={ labelFor }>
        { textLabel }
        <input
          type={ type }
          name={ name }
          data-testid={ dataTestId }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  name: '',
  dataTestId: '',
  value: '',
  textLabel: '',
  onChange: () => {},
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  dataTestId: PropTypes.string,
  value: PropTypes.string,
  textLabel: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
