import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <th>
            <td>Descrição</td>
            <td>Tag</td>
            <td>Método de pagamento</td>
            <td>Valor</td>
            <td>Moeda</td>
            <td>Câmbio utilizado</td>
            <td>Valor convertido</td>
            <td>Moeda de conversão</td>
          </th>
        </thead>
        <tbody>
          <tr>
            <td />
          </tr>
        </tbody>
        <tfoot />
      </table>
    );
  }
}

export default Table;
