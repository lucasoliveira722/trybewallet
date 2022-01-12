import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      totalExpenses: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { totalExpenses } = this.state;
    return (
      <header>
        <h3 data-testid="total-field">
          { totalExpenses }
        </h3>
        <h3 data-testid="email-field">
          { email }
        </h3>
        <h3 data-testid="header-currency-field">
          <p> BRL </p>
        </h3>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
