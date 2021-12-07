import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button';
import Form from '../Form';
import Input from '../Input';
import Select from '../Select';
import './index.css';

class Modal extends Component {
  renderSelects() {
    return (
      <>
        <Select
          name="method"
          dataTestId="method-input"
          options={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          // value={ method }
          onChange={ this.handleChange }
        />
        <Select
          name="tag"
          dataTestId="tag-input"
          options={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          // value={ tag }
          onChange={ this.handleChange }
        />
      </>);
  }

  render() {
    const { show } = this.props;
    if (!show) return '';
    return (
      <div className="modal">
        <h2>Editar despesa</h2>
        <Form>
          <Input
            name="value"
            textLabel="Valor:"
            type="number"
            dataTestId="value-input"
            // value={ value.toString() }
            onChange={ this.handleChange }
          />
          <Select
            name="currency"
            textLabel="Moeda:"
            dataTestId="currency-input"
            options={ ['USD'] }
            // value={ currency }
            onChange={ this.handleChange }
          />
          { this.renderSelects() }
          <Input
            name="description"
            textLabel="Descricao"
            type="text"
            dataTestId="description-input"
            // value={ description }
            onChange={ this.handleChange }
          />
          <Button
            dataTestId=""
            name="Adicionar despesa"
            value="Adicionar despesa"
            disabled={ false }
            onClick={ this.handleClick }
          />
        </Form>
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Modal;
