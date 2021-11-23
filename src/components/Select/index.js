import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { options } = this.props;
    return (
      <select name="" id="">
        { options.map((option, index) => (
          <option key={ option.value + index }>{ option.value }</option>
        ))}
      </select>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Select;
