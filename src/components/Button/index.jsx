import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { name, dataTestId, value, textLabel, disabled, onClick } = this.props;
    return (
      <label htmlFor={ name }>
        { textLabel }
        <button
          name={ name }
          type="button"
          id={ name }
          data-testid={ dataTestId }
          value={ value }
          disabled={ disabled }
          onClick={ onClick }
        >
          { value }
        </button>
      </label>
    );
  }
}

Button.defaultProps = {
  name: '',
  dataTestId: '',
  value: '',
  textLabel: '',
  disabled: true,
  onClick: () => {},
};

Button.propTypes = {
  name: PropTypes.string,
  dataTestId: PropTypes.string,
  value: PropTypes.string,
  textLabel: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
