import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Row extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="row">
        { children }
      </div>
    );
  }
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
