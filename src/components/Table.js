import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';

// código feito com ajuda e baseado no código do Jonatas Passos
class Table extends Component {
  handleClick = (event) => {
    const { tableData } = this.props;
    const newArr = tableData.filter((e) => Number(e.id) !== Number(event.target.value));
    return newArr;
  }

  render() {
    const { tableData, deleteItemWallet } = this.props;

    return (
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        { tableData.map((e) => (
          <tr key={ e.id }>
            <td>{e.description}</td>
            <td>{e.tag}</td>
            <td>{e.method}</td>
            <td>{e.value}</td>
            <td>{(e.exchangeRates[e.currency].name).split('/', 1)}</td>
            <td>{Number(e.exchangeRates[e.currency].ask).toFixed(2)}</td>
            <td>
              {(Number(e.exchangeRates[e.currency].ask) * Number(e.value)).toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                value={ e.id }
                onClick={ (event) => deleteItemWallet(this.handleClick(event)) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  tableData: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteItemWallet: (payload) => dispatch(deleteItem(payload)),
});

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteItemWallet: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
