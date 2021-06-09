import _objectWithoutProperties from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/prop-types  */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from './auth';

function PublicRoute(_ref) {
  var Component = _ref.component,
      _ref$isMyAccount = _ref.isMyAccount,
      isMyAccount = _ref$isMyAccount === void 0 ? false : _ref$isMyAccount,
      rest = _objectWithoutProperties(_ref, ["component", "isMyAccount"]);

  return /*#__PURE__*/React.createElement(Route, Object.assign({}, rest, {
    render: function render(props) {
      return Auth.isLogged() ? /*#__PURE__*/React.createElement(Redirect, {
        to: {
          pathname: isMyAccount ? Auth.myAccount.mainPage : Auth.checkout.mainPage
        }
      }) : /*#__PURE__*/React.createElement(Component, props);
    }
  }));
}

export default PublicRoute;