import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalExpenses: 100,
    };

    this.getTotalExpenses = this.getTotalExpenses.bind(this);
  }

  componentDidMount() {
    this.getTotalExpenses();
  }

  getTotalExpenses() {
    const { expenses } = this.props;
    if (Array.isArray(expenses)) {
      const totalExpenses = expenses
        .reduce((sumExpenses, expense) => (sumExpenses + expense.value), 0);
      this.setState({ totalExpenses });
    }
  }

  render() {
    const { totalExpenses } = this.state;
    const { email } = this.props;
    return (
      <header>
        <h2>
          <img src="/trybewallet-logo.jpeg" alt="logo trybe wallet" />
        </h2>
        <p data-testid="email-field">{`Email:  ${email}`}</p>
        <ul>
          <li data-testid="total-field">
            Despesa Total:
            {' '}
            { totalExpenses }
          </li>
          <li data-testid="header-currency-field">BRL</li>
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape({
    id: PropTypes.number,
    currency: PropTypes.string,
    description: PropTypes.string,
    paymentMethod: PropTypes.string,
    tag: PropTypes.string,
    value: PropTypes.string,
    reduce: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
