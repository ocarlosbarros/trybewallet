import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Select extends Component {
  render() {
    const { options, dataTestId, name, textLabel, onChange, className } = this.props;
    return (
      <label htmlFor={ name }>
        { textLabel }
        <select
          className={ className }
          name={ name }
          data-testid={ dataTestId }
          id={ name }
          onChange={ onChange }
        >
          { options.map((option, index) => (
            <option value={ option } key={ option + index }>{ option }</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  dataTestId: '',
  name: '',
  textLabel: '',
  className: '',
  onChange: () => {},
};

Select.propTypes = {
  dataTestId: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  textLabel: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  onChange: PropTypes.func,
};

export default Select;
