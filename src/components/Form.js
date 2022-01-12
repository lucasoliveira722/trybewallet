import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCoins from '../services/fetch';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      despesa: '',
      descricao: '',
      // moeda: '',
      // fullCoins: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log(fetchCoins());
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick() {
    // const { despesa, descricao, moeda } = this.state;
    // if (despesa !== '' && descricao !== '' && moeda !== '') {

    // }
    console.log('Feito');
  }

  render() {
    const {
      despesa,
      descricao,
    } = this.state;

    return (
      <div>
        Esse é o nosso formulário
        <form>
          <label htmlFor="despesa">
            Insira o valor da despesa
            <input
              data-testid="value-input"
              type="despesa"
              name="despesa"
              value={ despesa }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="descricao">
            Descrição da despesa
            <input
              data-testid="description-input"
              type="descricao"
              name="descricao"
              value={ descricao }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="moeda">
            Selecione a moeda:
            <select htmlFor="moeda" data-testid="currency-input">
              {/* {fullCoins.map} */}
            </select>
          </label>
          <br />
          <label htmlFor="metodo">
            Selecione o método de pagamento:
            <select htmlFor="metodo" data-testid="method-input">
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
              <option value="dinheiro">Dinheiro</option>
            </select>
          </label>
          <br />
          <label htmlFor="categoria">
            Selecione uma categoria:
            <select htmlFor="categoria" data-testid="tag-input">
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>
          <br />
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Form);
