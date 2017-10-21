import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login/Login';


class Boot {
  boot() {
    ReactDOM.render(
      <Login />,
      document.getElementById('fdr')
    );
  }
}

new Boot().boot();
