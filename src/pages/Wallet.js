import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../components/Button';
import Header from '../components/Header';
import Row from '../components/Row';
import Form from '../components/Form';
import Input from '../components/Input';
import Select from '../components/Select';
import { addExpenses, fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: {
        id: 0,
        currency: 'BRL',
        description: '',
        paymentMethod: '',
        tag: '',
        value: 0,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      expense: {
        ...prevState.expense,
        [name]: value,
      },
    }));
  }

  handleClick() {
    const { expense } = this.state;
    const { addExpense } = this.props;
    addExpense(expense);
  }

  renderSelects() {
    const { expense: { paymentMethod, tag } } = this.state;
    return (
      <>
        <Select
          name="paymentMethod"
          dataTestId="method-input"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          value={ paymentMethod }
          onChange={ this.handleChange }
        />
        <Select
          name="tag"
          dataTestId="tag-input"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          value={ tag }
          onChange={ this.handleChange }
        />
      </>);
  }

  render() {
    const { expense: { value, currency, description } } = this.state;
    return (
      <section>
        <Header />
        <Row>
          <Form>
            <Input
              name="value"
              textLabel="Valor:"
              type="number"
              dataTestId="value-input"
              value={ value.toString() }
              onChange={ this.handleChange }
            />
            <Input
              name="currency"
              textLabel="Moeda"
              type="text"
              dataTestId="currency-input"
              value={ currency }
              onChange={ this.handleChange }
            />
            { this.renderSelects() }
            <Input
              name="description"
              textLabel="Descricao"
              type="text"
              dataTestId="description-input"
              value={ description }
              onChange={ this.handleChange }
            />
            <Button
              name="adiciona-despesa"
              dataTestId="add-expense"
              value="Adicionar despesa"
              disabled={ false }
              onClick={ this.handleClick }
            />
          </Form>
        </Row>
      </section>
    );
  }
}

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenses(expense)),
  getCurrencies: () => dispatch(fetchCurrencies()),
});

export default connect(null, mapDispatchToProps)(Wallet);
