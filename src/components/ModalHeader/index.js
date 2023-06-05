import React, { Component } from 'react';

import { FaTimes } from 'react-icons/fa';
import { PropTypes } from 'prop-types';

import './index.css';

class ModalHeader extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="modal-header">
        <h3>{ title }</h3>
        <FaTimes className="icon-close" />
      </div>
    );
  }
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ModalHeader;
