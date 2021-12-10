import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionDeleteExpenses, actionEditExpenses } from '../../actions';
import { splitString, roundDecimal, converToFloat, updateValue } from '../../handlers';
import Modal from '../Modal';
import './index.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
      show: false,
    };
    this.iddleModal = this.iddleModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  iddleModal() {
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  handleDelete(id) {
    const { deleteExpense } = this.props;
    deleteExpense(id);
  }

  handleEdit(expense) {
    const { editExpense } = this.props;
    editExpense(expense.id);
  }

  renderButtons(expense) {
    const { isDisabled } = this.state;
    return (
      <>
        <button
          onClick={ () => this.handleEdit(expense.id) }
          data-testid="edit-btn"
          type="button"
          value="Editar"
          disabled={ isDisabled }
        >
          Editar
        </button>
        <button
          onClick={ () => this.handleDelete(expense.id) }
          data-testid="delete-btn"
          type="button"
          disabled={ isDisabled }
          value="Excluir despesa"
        >
          Excluir despesa
        </button>
      </>
    );
  }

  renderTableHeader() {
    return (
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
    );
  }

  render() {
    const { expenses } = this.props;
    const { show } = this.state;
    return (
      <section>
        <table className="table">
          { this.renderTableHeader() }
          <tbody>
            {
              expenses.map((expense, index) => (
                <tr key={ `${expense.id}-${index}` }>
                  <td>{ expense.description }</td>
                  <td>{ expense.tag }</td>
                  <td>{ expense.method }</td>
                  <td>{ expense.value }</td>
                  <td>
                    { splitString(expense.exchangeRates[expense.currency].name)[0] }
                  </td>
                  <td>
                    { roundDecimal(
                      converToFloat(expense.exchangeRates[expense.currency].ask), 2,
                    )}
                  </td>
                  <td>{ roundDecimal((updateValue(expense)), 2) }</td>
                  <td>Real</td>
                  <td>
                    { this.renderButtons(expense) }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Modal show={ show } />
      </section>
    );
  }
}

Table.defaultProps = {
  expenses: [],
};

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.shape({
    currency: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
  })),
  deleteExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(actionDeleteExpenses(id)),
  editExpense: (id) => dispatch(actionEditExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
