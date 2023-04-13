import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateValue, roundDecimal } from '../../handlers';
import './index.css';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <header>
        <h2 className="title">
          <img src="/trybewallet-logo.jpeg" alt="logo trybe wallet" />
        </h2>
        <p data-testid="email-field">{`Email:  ${email}`}</p>
        <p data-testid="total-field">
          { roundDecimal(expenses.reduce((totalExpenses, expense) => (
            totalExpenses + updateValue(expense)), 0), 2) }
        </p>
        <p data-testid="header-currency-field">BRL</p>

      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  totalExpenses: state.wallet.totalExpenses,
});

export default connect(mapStateToProps, null)(Header);
