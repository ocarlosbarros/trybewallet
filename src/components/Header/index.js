import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <>
        <h2 data-testid="email-field">email:</h2>
        <ul>
          <li data-testid="total-field">0</li>
          <li data-testid="header-currency-field">BRL</li>
        </ul>
      </>
    );
  }
}

export default Header;
