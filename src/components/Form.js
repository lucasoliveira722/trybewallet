import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCurrencies } from '../actions';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      despesa: '',
      descricao: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestCurrencies());
    // this.setState
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
    const { currencies } = this.props;
    console.log(currencies);
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
            <select
              htmlFor="moeda"
              data-testid="currency-input"
              onChange={ this.handleChange }
            >
              {currencies
                .filter((e) => e !== 'USDT')
                .map((e) => (
                  <option key={ e } data-testid={ e }>{e}</option>
                ))}
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

Form.propTypes = {
  currencies: PropTypes.shape({
    filter: PropTypes.func,
    map: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

// const mapDispatchToProps = (dispatch) => ({
//   requestCurrencies: dispatch(requestCurrencies()),
// });

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  // console.log(state.wallet.currencies);
});

export default connect(mapStateToProps)(Form);
