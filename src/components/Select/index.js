import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { options, dataTestId, name, textLabel, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        { textLabel }
        <select
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
  onChange: () => {},
};

Select.propTypes = {
  dataTestId: PropTypes.string,
  name: PropTypes.string,
  textLabel: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  onChange: PropTypes.func,
};

export default Select;
