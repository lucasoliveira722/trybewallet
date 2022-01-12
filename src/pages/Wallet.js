import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    // console.log(email);
    return (
      <div>
        <Header email={ email } />
        <Form />
      </div>);
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Wallet);
