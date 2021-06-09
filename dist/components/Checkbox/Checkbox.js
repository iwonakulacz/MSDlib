import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React, { Component } from 'react';
import {
  CheckboxStyled,
  CheckFrameStyled,
  CheckMarkStyled,
  ConsentDefinitionStyled
} from './CheckboxStyled';

const Checkbox = /* #__PURE__ */ (function(_Component) {
  _inherits(Checkbox, _Component);

  const _super = _createSuper(Checkbox);

  function Checkbox(props) {
    let _this;

    _classCallCheck(this, Checkbox);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(Checkbox, [
    {
      key: 'render',
      value: function render() {
        const _this$props = this.props;
        const { children } = _this$props;
        const { onClickFn } = _this$props;
        const { error } = _this$props;
        const { checked } = _this$props;
        const { required } = _this$props;
        const { isMyAccount } = _this$props;
        const { className } = _this$props;
        const { disabled } = _this$props;
        const { isRadioButton } = _this$props;
        return /* #__PURE__ */ React.createElement(
          CheckboxStyled,
          {
            onClick: function onClick(e) {
              return onClickFn(e, disabled);
            },
            role: 'checkbox',
            tabIndex: '-1',
            'aria-checked': 'false',
            checked,
            'aria-label': children,
            className,
            disabled
          },
          /* #__PURE__ */ React.createElement(
            CheckFrameStyled,
            {
              error: error && required && !checked,
              tabIndex: '0',
              onKeyDown: function onKeyDown(e) {
                return e.keyCode === 32 ? onClickFn() : null;
              },
              isMyAccount,
              isRadioButton,
              checked
            },
            checked &&
              /* #__PURE__ */ React.createElement(CheckMarkStyled, {
                isMyAccount,
                isRadioButton
              })
          ),
          /* #__PURE__ */ React.createElement(ConsentDefinitionStyled, {
            dangerouslySetInnerHTML: {
              __html: ''
                .concat(children)
                .concat(required && isMyAccount ? '*' : '')
            },
            checked
          })
        );
      }
    }
  ]);

  return Checkbox;
})(Component);

Checkbox.defaultProps = {
  error: '',
  checked: false,
  required: false,
  onClickFn: function onClickFn() {},
  children: '',
  isMyAccount: false,
  className: '',
  disabled: false,
  isRadioButton: false
};
export default Checkbox;
