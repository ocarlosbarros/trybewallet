import { Button } from 'bootstrap';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { splitString, roundDecimal, converToInt } from '../../handlers';
import './index.css';

class Table extends Component {
  renderButton() {
    return (
      <td>
        <Button
          dataTestId="delete-btn"
          name="Excluir despesa"
          value="Excluir despesa"
        />
        <Button
          dataTestId="edit-btn"
          name="Editar despesa"
          value="Editar despesa"
        />
      </td>
    );
  }

  render() {
    const { expenses } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map((expense, index) => (
              <tr key={ `${expense.id}-${index}` }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ roundDecimal(converToInt(expense.value), 2) }</td>
                <td>{ splitString(expense.exchangeRates[expense.currency].name)[0] }</td>
                <td>{ expense.currency }</td>
                <td>
                  {
                    roundDecimal(
                      converToInt(expense.exchangeRates[expense.currency].ask), 2,
                    )
                  }
                </td>
                <td>{ splitString(expense.exchangeRates[expense.currency].name)[1] }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

Table.defaultPros = {
  expenses: [],
};

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object),
};
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
