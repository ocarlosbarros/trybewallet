import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Button extends Component {
  render() {
    const {
      name,
      dataTestId,
      value,
      textLabel,
      disabled,
      onClick,
      className } = this.props;
    return (
      <label htmlFor={ name }>
        { textLabel }
        <button
          className={ className }
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
  className: '',
  dataTestId: '',
  value: '',
  textLabel: '',
  disabled: true,
  onClick: () => {},
};

Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  dataTestId: PropTypes.string,
  value: PropTypes.string,
  textLabel: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
