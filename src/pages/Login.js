import React, { Component } from 'react';

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
  }

  // Disabled: cria um estado pro disabled (true ou false), e se o state do email passar no regex, e a senha tiver mais do q 6 (ou 8, não lembro) dígitos, aí deixa de ser false

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.enableEnterButton);
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
              minLength="8"
              value={ password }
              onChange={ this.onInputChange }
            />
          </label>
          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ enterEnabled }
            // onClick={ onHandleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
