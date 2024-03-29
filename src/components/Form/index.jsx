import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../Input';
import Select from '../Select';

class Form extends Component {
  renderSelects() {
    const { expense: { method, tag }, onChange } = this.props;
    return (
      <>
        <Select
          className="select-wallet"
          name="method"
          textLabel="Método de pagamento"
          dataTestId="method-input"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          value={ method }
          onChange={ onChange }
        />
        <Select
          className="select-wallet"
          name="tag"
          dataTestId="tag-input"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          value={ tag }
          onChange={ onChange }
        />
      </>);
  }

  render() {
    const { currencies,
      expense: { value, description, currency }, onChange } = this.props;
    return (
      <form>
        <Input
          className="input-wallet input-medium"
          name="value"
          textLabel="Valor"
          type="number"
          dataTestId="value-input"
          value={ value.toString() }
          onChange={ onChange }
        />
        <Select
          className="select-wallet"
          name="currency"
          textLabel="Moeda"
          dataTestId="currency-input"
          options={ [...currencies] }
          value={ currency }
          onChange={ onChange }
        />
        { this.renderSelects() }
        <Input
          className="input-wallet input-lg"
          name="description"
          textLabel="Descrição"
          type="text"
          dataTestId="description-input"
          value={ description }
          onChange={ onChange }
        />
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  expense: PropTypes.shape({
    currency: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);
