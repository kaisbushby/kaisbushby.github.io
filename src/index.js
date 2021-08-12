import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

if(module.hot){
  module.hot.accept();
}