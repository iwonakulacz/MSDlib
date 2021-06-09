import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React, { Component } from 'react';
import { WrapStyled, HeaderStyled } from './QuickActionsStyled';

const QuickActions = /* #__PURE__ */ (function(_Component) {
  _inherits(QuickActions, _Component);

  const _super = _createSuper(QuickActions);

  function QuickActions(props) {
    let _this;

    _classCallCheck(this, QuickActions);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(QuickActions, [
    {
      key: 'render',
      value: function render() {
        return /* #__PURE__ */ React.createElement(
          WrapStyled,
          null,
          /* #__PURE__ */ React.createElement(
            HeaderStyled,
            null,
            'Quick Actions'
          )
        );
      }
    }
  ]);

  return QuickActions;
})(Component);

export default QuickActions;
