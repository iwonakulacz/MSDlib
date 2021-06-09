import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';
import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectWithQuery = function RedirectWithQuery(_ref) {
  const { location } = _ref;
  return /* #__PURE__ */ React.createElement(Redirect, {
    to: _objectSpread(
      _objectSpread({}, location),
      {},
      {
        pathname: '/login'
      }
    )
  });
};

RedirectWithQuery.defaultProps = {
  location: {}
};
export default RedirectWithQuery;
