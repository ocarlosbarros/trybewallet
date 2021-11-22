import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { children, name } = this.props;
    return (
      <form name={ name }>
        { children }
      </form>
    );
  }
}

Form.defaultProps = {
  name: '',
};

Form.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.node,
  ).isRequired,
  name: PropTypes.string,
};

export default Form;
