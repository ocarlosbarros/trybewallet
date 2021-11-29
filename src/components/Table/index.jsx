import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionDeleteExpenses } from '../../actions';
import Button from '../Button';
import { splitString, roundDecimal, converToFloat, updateValue } from '../../handlers';
import './index.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
    };
  }

  handleDelete(id) {
    const { deleteExpense } = this.props;
    deleteExpense(id);
  }

  renderButtons() {
    const { isDisabled } = this.state;
    return (
      <td>
        <Button
          onClick={ this.handleEdit }
          dataTestId="edit-btn"
          value="Editar despesa"
          disabled={ isDisabled }
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
                <td>{ expense.value }</td>
                <td>{ splitString(expense.exchangeRates[expense.currency].name)[0] }</td>
                <td>
                  { roundDecimal(
                    converToFloat(expense.exchangeRates[expense.currency].ask), 2,
                  )}
                </td>
                <td>{ roundDecimal((updateValue(expense)), 2) }</td>
                <td>Real</td>
                <td>
                  <button
                    onClick={ () => this.handleDelete(expense.id) }
                    data-testid="delete-btn"
                    type="button"
                  >
                    Excluir despesa
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

Table.defaultProps = {
  expenses: [],
};

Table.propTypes = {
  deleteExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(actionDeleteExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
