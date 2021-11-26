import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

class Header extends Component {
  render() {
    const { email, totalExpenses } = this.props;
    return (
      <header>
        <h2>
          <img src="/trybewallet-logo.jpeg" alt="logo trybe wallet" />
        </h2>
        <p data-testid="email-field">{`Email:  ${email}`}</p>
        <ul>
          <li data-testid="total-field">
            { totalExpenses }
          </li>
          <li data-testid="header-currency-field">BRL</li>
        </ul>
      </header>
    );
  }
}

Header.defaultProps = {
  totalExpenses: 0,
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  totalExpenses: state.wallet.totalExpenses,
});

export default connect(mapStateToProps, null)(Header);
