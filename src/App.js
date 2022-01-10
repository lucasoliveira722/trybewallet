import React, { Component } from 'react';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <>
        <div>Hello, TrybeWallet!</div>
        <Login
          exact
          path="/"
        />
      </>
    );
  }
}

export default App;
