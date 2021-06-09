import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';
import { CheckboxStyled, CheckFrameStyled, CheckMarkStyled, ConsentDefinitionStyled } from './CheckboxStyled';

var Checkbox = /*#__PURE__*/function (_Component) {
  _inherits(Checkbox, _Component);

  var _super = _createSuper(Checkbox);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onClickFn = _this$props.onClickFn,
          error = _this$props.error,
          checked = _this$props.checked,
          required = _this$props.required,
          isMyAccount = _this$props.isMyAccount,
          className = _this$props.className,
          disabled = _this$props.disabled,
          isRadioButton = _this$props.isRadioButton;
      return /*#__PURE__*/React.createElement(CheckboxStyled, {
        onClick: function onClick(e) {
          return onClickFn(e, disabled);
        },
        role: "checkbox",
        tabIndex: "-1",
        "aria-checked": "false",
        checked: checked,
        "aria-label": children,
        className: className,
        disabled: disabled
      }, /*#__PURE__*/React.createElement(CheckFrameStyled, {
        error: error && required && !checked,
        tabIndex: "0",
        onKeyDown: function onKeyDown(e) {
          return e.keyCode === 32 ? onClickFn() : null;
        },
        isMyAccount: isMyAccount,
        isRadioButton: isRadioButton,
        checked: checked
      }, checked && /*#__PURE__*/React.createElement(CheckMarkStyled, {
        isMyAccount: isMyAccount,
        isRadioButton: isRadioButton
      })), /*#__PURE__*/React.createElement(ConsentDefinitionStyled, {
        dangerouslySetInnerHTML: {
          __html: "".concat(children).concat(required && isMyAccount ? '*' : '')
        },
        checked: checked
      }));
    }
  }]);

  return Checkbox;
}(Component);

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