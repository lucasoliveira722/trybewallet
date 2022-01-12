import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      enterEnabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.enableEnterButton = this.enableEnterButton.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  // Disabled: cria um estado pro disabled (true ou false), e se o state do email passar no regex, e a senha tiver mais do q 6 (ou 8, não lembro) dígitos, aí deixa de ser false

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.enableEnterButton);
  }

  onHandleClick() {
    const { dispatch, history } = this.props;
    const { email } = this.state;

    dispatch(login(email));

    history.push('/carteira');
  }

  // regex de validação de email tirado de https://www.w3resource.com/javascript/form/email-validation.php
  enableEnterButton() {
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordMin = 6;
    const { password, email } = this.state;
    if ((password.length >= passwordMin) && (email.match(mailformat))) {
      this.setState({
        enterEnabled: false,
      });
    } else {
      this.setState({
        enterEnabled: true,
      });
    }
  }

  render() {
    const {
      email,
      password,
      enterEnabled,
    } = this.state;

    return (
      <div>
        Login
        <form>
          <label htmlFor="email">
            Email:
            <input
              data-testid="email-input"
              type="email"
              name="email"
              value={ email }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              name="password"
              minLength="6"
              value={ password }
              onChange={ this.onInputChange }
            />
          </label>
          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ enterEnabled }
            onClick={ this.onHandleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
