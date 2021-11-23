import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { options, dataTestId, name } = this.props;
    return (
      <label htmlFor={ name }>
        <select
          name={ name }
          data-testid={ dataTestId }
          id={ name }
        >
          { options.map((option, index) => (
            <option value={ option } key={ option.value + index }>{ option }</option>
          ))}
        </select>
      </label>
    );
  }
}

Select.defaultProps = {
  dataTestId: '',
  name: '',
};

Select.propTypes = {
  dataTestId: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Select;
