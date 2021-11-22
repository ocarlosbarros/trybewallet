import React from 'react';

import Input from '../components/Input';

class Login extends React.Component {
  render() {
    return (
      <article>
        <h2>Login</h2>
        <Input
          type="email"
          dataTestId="email-input"
          textLabel="Email:"
        />
        <Input
          type="password"
          dataTestId="password-input"
          textLabel="Senha:"
        />
      </article>
    );
  }
}

export default Login;
