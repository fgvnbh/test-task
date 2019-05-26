import React, { Component } from 'react';
import loading from './loading.svg';

class Callback extends Component {
  render() {
    return (
      <div align="center">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}

export default Callback;
