import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  render() {
    const { chidren } = this.props;
    return (
      <div>
        { chidren }
      </div>
    );
  }
}

Row.propTypes = {
  chidren: PropTypes.arrayOf(
    PropTypes.node,
  ).isRequired,
};

export default Row;
