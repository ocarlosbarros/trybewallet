import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import Row from '../components/Row';
import Form from '../components/Form';
import Input from '../components/Input';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Row>
          <Form>
            <Input
              textLabel="Valor:"
              type="number"
              dataTestId="value-input"
            />
            <Input
              textLabel="Moeda"
              type="number"
              dataTestId="currency-input"
            />
            <Input
              textLabel="Descricao"
              type="text"
              dataTestId="description-input"
            />
            <Button
              name="adiciona-despesa"
              dataTestId="add-expense"
              value="Adicionar despesa"
              disabled={ false }
            />
          </Form>
        </Row>
      </section>

    );
  }
}

export default Wallet;
