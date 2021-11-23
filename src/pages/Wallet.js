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
      expense: { },
    };
  }

  render() {
    const { expense } = this.state;
    const { addExpenses } = this.props;
    return (
      <section>
        <Header />
        <Row>
          <Form>
            <Input
              textLabel="Valor:"
              type="number"
              dataTestId="value-input"
            />
            <Input
              textLabel="Moeda"
              type="number"
              dataTestId="currency-input"
            />
            <Select
              name="payment-method"
              dataTestId="method-input"
              options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
            />
            <Select
              name="tag"
              dataTestId="tag-input"
              options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
            />
            <Input
              textLabel="Descricao"
              type="text"
              dataTestId="description-input"
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
