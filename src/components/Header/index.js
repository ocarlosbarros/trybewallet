import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalExpenses: 0,
    };
  }

  componentDidMount() {

  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h2>
          <img src="/trybewallet-logo.jpeg" alt="logo trybe wallet" />
        </h2>
        <p data-testid="email-field">{`Email:  ${email}`}</p>
        <ul>
          <li data-testid="total-field">Despesa Total: 0</li>
          <li data-testid="header-currency-field">BRL</li>
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  value: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
