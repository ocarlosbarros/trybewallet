import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionDeleteExpenses } from '../../actions';
import { splitString, roundDecimal, converToFloat, updateValue } from '../../handlers';
import Modal from '../Modal';
import TableButtons from '../TableButtons';
import './index.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
      show: false,
    };
    this.iddleModal = this.iddleModal.bind(this);
  }

  iddleModal() {
    this.setState((prevState) => ({ show: !prevState.show }));
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
    const { isDisabled, show } = this.state;
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
                    <TableButtons
                      disabled={ isDisabled }
                      expense={ expense }
                      onClick={ this.iddleModal }
                    />
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
  expenses: PropTypes.arrayOf(PropTypes.object),
};
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(actionDeleteExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
