import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../components/Button';
import Header from '../components/Header';
import Row from '../components/Row';
import Form from '../components/Form';
import Input from '../components/Input';
import Select from '../components/Select';
import { expensesAction } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: {
        currency: 0,
        description: '',
        paymentMethod: '',
        tag: '',
        value: 0,
      },
    };
  }

  renderSelects() {
    const { paymentMethod, tag } = this.state;
    return (
      <>
        <Select
          name="paymentMethod"
          dataTestId="method-input"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          value={ paymentMethod }
        />
        <Select
          name="tag"
          dataTestId="tag-input"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          value={ tag }
        />
      </>);
  }

  render() {
    const { expense: { currency, description, value } } = this.state;
    const { addExpenses } = this.props;
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
              value={ value }
            />
            <Input
              name="currency"
              textLabel="Moeda"
              type="number"
              dataTestId="currency-input"
              value={ currency }
            />
            { this.renderSelects() }

            <Input
              name="description"
              textLabel="Descricao"
              type="text"
              dataTestId="description-input"
              value={ description }
            />
            <Button
              name="adiciona-despesa"
              dataTestId="add-expense"
              value="Adicionar despesa"
              disabled={ false }
              onClick={ (state) => addExpenses(state) }
            />
          </Form>
        </Row>
      </section>
    );
  }
}

Wallet.propTypes = {
  addExpenses: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispetch) => ({
  expenses: (expense) => dispetch(expensesAction(expense)),
});

export default connect(null, mapDispatchToProps)(Wallet);
