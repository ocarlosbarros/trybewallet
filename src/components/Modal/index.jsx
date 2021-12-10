import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Form from '../Form';
import './index.css';

class Modal extends Component {
  render() {
    const { show, expense, onChange } = this.props;
    if (!show) return '';
    return (
      <div className="modal">
        <h2>Editar despesa</h2>
        <Form expense={ expense } onChange={ onChange } />
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  expense: PropTypes.objectOf(PropTypes.shape({
    description: PropTypes.string,
    currency: PropTypes.string,
    id: PropTypes.number,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Modal;
