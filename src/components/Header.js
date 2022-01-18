import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
    sumValuesExpenses = () => {
      const { expenses } = this.props;
      return expenses.reduce((acc, cur) => {
        const cambio = cur.exchangeRates[cur.currency].ask;
        return acc + (Number(cur.value) * cambio);
      }, 0);
    };

    render() {
      const { email } = this.props;
      // console.log(expenses);
      // const { totalExpenses } = this.state;
      return (
        <header>
          <h3 data-testid="total-field">
            {this.sumValuesExpenses().toFixed(2)}
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
  expenses: PropTypes.shape({
    reduce: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
