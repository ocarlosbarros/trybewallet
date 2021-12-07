import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionDeleteExpenses, actionEditExpenses } from '../../actions';

class TableButtons extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    const { deleteExpense } = this.props;
    deleteExpense(id);
  }

  handleEdit(expense) {
    const { editExpense, onClick } = this.props;
    editExpense(expense.id);
    onClick();
  }

  render() {
    const { disabled, expense } = this.props;
    return (
      <>
        <button
          onClick={ () => this.handleEdit(expense.id) }
          data-testid="edit-btn"
          type="button"
          value="Editar despesa"
          disabled={ disabled }
        >
          Editar despesa
        </button>
        <button
          onClick={ () => this.handleDelete(expense.id) }
          data-testid="delete-btn"
          type="button"
          disabled={ disabled }
          value="Excluir despesa"
        >
          Excluir despesa
        </button>
      </>
    );
  }
}

TableButtons.propTypes = {
  deleteExpense: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  editExpense: PropTypes.func.isRequired,
  expense: PropTypes.shape({
    currency: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    method: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(actionDeleteExpenses(id)),
  editExpense: (id) => dispatch(actionEditExpenses(id)),
});

export default connect(null, mapDispatchToProps)(TableButtons);
