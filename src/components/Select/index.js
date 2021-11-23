import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { options, dataTestId, name, onChange } = this.props;
    return (
      <label htmlFor={ name }>
        <select
          name={ name }
          data-testid={ dataTestId }
          id={ name }
          onChange={ onChange }
        >
          { options.map((option, index) => (
            <option key={ option + index }>{ option }</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  dataTestId: '',
  name: '',
  onChange: () => {},
};

Select.propTypes = {
  dataTestId: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  onChange: PropTypes.func,
};

export default Select;
