import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpenses, getCurrenciesAction } from '../actions';

import Button from '../components/Button';
import Header from '../components/Header';
import Row from '../components/Row';
import Form from '../components/Form';
import Table from '../components/Table';

import './Wallet.css';
import Footer from '../components/Footer';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

    this.INITIAL_STATE = {
      expense: {
        id: 0,
        currency: 'USD',
        description: '',
        method: 'Dinheiro',
        tag: 'Alimentação',
        value: '',
      },
    };

    this.state = { ...this.INITIAL_STATE };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange({ target: { name, value } }) {
    this.setState((prevState) => ({
      expense: {
        ...prevState.expense,
        [name]: value,
      },
    }));
  }

  handleClick() {
    const { expense } = this.state;
    const { addExpense } = this.props;
    addExpense(expense);
    this.setState({ ...this.INITIAL_STATE });
  }

  render() {
    const { expense } = this.state;
    return (
      <>
        <section>
          <Header />
          <Row>
            <Form expense={ expense } onChange={ this.handleChange } />
            <Button
              dataTestId=""
              name="Adicionar despesa"
              value="Adicionar despesa"
              disabled={ false }
              onClick={ this.handleClick }
            />
          </Row>
          <article>
            <Table expense={ expense } onChange={ this.handleChange } />
          </article>
        </section>
        <Footer />
      </>
    );
  }
}

Wallet.propTypes = {
  addExpense: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpenses(expense)),
  getCurrencies: () => dispatch(getCurrenciesAction()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
