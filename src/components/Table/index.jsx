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
      expense: {
        id: 0,
        currency: 'USD',
        description: '',
        method: 'Dinheiro',
        tag: 'Alimentação',
        value: '',
      },
      isDisabled: false,
      show: false,
    };
    this.iddleModal = this.iddleModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  iddleModal(currentExpense) {
    this.setState((prevState) => ({ show: !prevState.show, expense: currentExpense }));
    const { editExpense } = this.props;
    const { show, expense } = this.state;
    if (show) {
      editExpense(expense);
    }
  }

  handleDelete(id) {
    const { deleteExpense } = this.props;
    deleteExpense(id);
  }

  handleEdit(expense) {
    this.iddleModal(expense);
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      expense: {
        ...prevState.expense,
        [name]: value,
      },
    }));
  }

  renderButtons(expense) {
    const { isDisabled } = this.state;
    return (
      <>
        <button
          onClick={ () => this.handleEdit(expense) }
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
    const { show, expense } = this.state;
    return (
      <section>
        <table className="table">
          { this.renderTableHeader() }
          <tbody>
            {
              expenses.map((currentExpense, index) => (
                <tr key={ `${currentExpense.id}-${index}` }>
                  <td>{ currentExpense.description }</td>
                  <td>{ currentExpense.tag }</td>
                  <td>{ currentExpense.method }</td>
                  <td>{ currentExpense.value }</td>
                  <td>
                    {
                      splitString(currentExpense
                        .exchangeRates[currentExpense.currency].name)[0]
                    }
                  </td>
                  <td>
                    { roundDecimal(
                      converToFloat(currentExpense
                        .exchangeRates[currentExpense.currency].ask), 2,
                    )}
                  </td>
                  <td>{ roundDecimal((updateValue(currentExpense)), 2) }</td>
                  <td>Real</td>
                  <td>
                    { this.renderButtons(currentExpense) }
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <Modal
          className="modal"
          show={ show }
          expense={ expense }
          onChange={ this.handleChange }
        />
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
