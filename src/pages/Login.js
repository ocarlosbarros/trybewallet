import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import loginAction from '../actions';
import Button from '../components/Button';
import Input from '../components/Input';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, this.formValidation);
  }

  handleClick() {
    const { email } = this.state;
    const { doLogin } = this.props;
    doLogin(email);
  }

  emailValidation() {
    const { email } = this.state;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/i;
    const isValidEmail = emailRegex.test(email);
    return isValidEmail;
  }

  passwordValidation() {
    const { password } = this.state;
    const PASSWORD_SIZE = password.length;
    const MINIMUM_CHARACTERS_TO_PASSWORD = 6;
    const isValidPassword = PASSWORD_SIZE >= MINIMUM_CHARACTERS_TO_PASSWORD;
    return isValidPassword;
  }

  formValidation() {
    const isValidEmail = this.emailValidation();
    const isValidPassword = this.passwordValidation();
    if (isValidEmail && isValidPassword) {
      this.setState({ disabled: false });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <article>
        <h2>Login</h2>
        <Input
          name="email"
          type="email"
          dataTestId="email-input"
          textLabel="Email:"
          value={ email }
          onChange={ this.handleChange }
        />
        <Input
          name="password"
          type="password"
          dataTestId="password-input"
          textLabel="Senha:"
          value={ password }
          onChange={ this.handleChange }
        />
        <Button
          name="login"
          dataTestId=""
          value="Entrar"
          disabled={ disabled }
          onClick={ this.handleClick }
        />
      </article>
    );
  }
}

Login.propTypes = {
  doLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  doLogin: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
