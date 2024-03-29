import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { Provider } from 'react-redux';
import store from 'redux/store';
import App from 'containers/App/App.container';
import * as serviceWorker from './serviceWorker';
ReactDOM.render( /*#__PURE__*/React.createElement(Provider, {
  store: store
}, /*#__PURE__*/React.createElement(App, null)), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();