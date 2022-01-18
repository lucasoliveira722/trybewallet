import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestAll, requestCurrencies } from '../actions';
// import getCurrencyApi from '../services/fetch';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'credito',
      tag: 'alimentacao',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(requestCurrencies());
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(e) {
    const { id, value, description, currency, method, tag } = this.state;
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(requestAll({ id, value, description, currency, method, tag }));
    // console.log('Feito');
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'credito',
      tag: 'alimentacao',
    }));
  }

  // pegar o valor que está na chave expense, multiplicar pelo valor que está no exchangeRates da currency selecionada e adicionar no header

  render() {
    const { currencies } = this.props;
    // console.log(currencies);
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    return (
      <div>
        Esse é o nosso formulário
        <form>
          <label htmlFor="value">
            Insira o valor da despesa
            <input
              data-testid="value-input"
              id="value"
              type="text"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="description">
            Descrição da despesa
            <input
              data-testid="description-input"
              id="description"
              type="text"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="currency">
            Selecione a moeda:
            <select
              name="currency"
              id="currency"
              value={ currency }
              data-testid="currency-input"
              onChange={ this.handleChange }
            >
              {currencies.length && currencies
                .filter((e) => e !== 'USDT')
                .map((e) => (
                  <option key={ e }>{e}</option>
                ))}
            </select>
          </label>
          <br />
          <label htmlFor="method">
            Selecione o método de pagamento:
            <select
              name="method"
              id="method"
              value={ method }
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
              <option value="Dinheiro">Dinheiro</option>
            </select>
          </label>
          <br />
          <label htmlFor="tag">
            Selecione uma categoria:
            <select
              name="tag"
              id="tag"
              value={ tag }
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <br />
          <button
            type="submit"
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
    length: PropTypes.func,
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
