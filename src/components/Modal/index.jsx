import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import ModalHeader from '../ModalHeader';

import './index.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.renderSelects = this.renderSelects.bind(this);
  }

  renderSelects() {
    const { expense: { method, tag }, onChange } = this.props;
    return (
      <>
        <Select
          name="method"
          textLabel="Método de pagamento"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          value={ method }
          onChange={ onChange }
        />
        <Select
          name="tag"
          textLabel="Tag"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          value={ tag }
          onChange={ onChange }
        />
      </>);
  }

  render() {
    const { show, expense: { value, currency, description },
      onChange, currencies } = this.props;
    if (!show) return '';
    return (
      <div className="modal">
        <ModalHeader title="Editar despesa" />
        <form>
          <Input
            name="value"
            textLabel="Valor"
            type="number"
            value={ value.toString() }
            onChange={ onChange }
          />
          <Select
            name="currency"
            textLabel="Moeda"
            options={ [...currencies] }
            value={ currency }
            onChange={ onChange }
          />
          { this.renderSelects() }
          <Input
            name="description"
            textLabel="Descrição"
            type="text"
            value={ description }
            onChange={ onChange }
          />
          <footer className="form-footer">
            <Button
              name="Salvar"
              value="Salvar"
              textLabel=""
              disabled=""
              onClick={ () => {} }
            />
            <Button
              name="Cancelar"
              value="Cancelar"
              textLabel=""
              disabled=""
              onClick={ () => {} }
            />
          </footer>
        </form>
      </div>
    );
  }
}

Modal.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  expense: PropTypes.shape({
    description: PropTypes.string,
    currency: PropTypes.string,
    id: PropTypes.number,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Modal);
