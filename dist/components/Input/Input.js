import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';
import visibility from 'assets/images/visibility.svg';
import visibilityOff from 'assets/images/visibilityOff.svg';
import { InputComponentStyled, InputElementWrapperStyled, InputElementStyled, ErrorWrapper, StyledButton, StyledPasswordVisibility, LabelStyled, InputIconStyled, InputRequiredStyled } from './InputStyled';

var Input = /*#__PURE__*/function (_Component) {
  _inherits(Input, _Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          placeholder = _this$props.placeholder,
          value = _this$props.value,
          _onChange = _this$props.onChange,
          onBlur = _this$props.onBlur,
          error = _this$props.error,
          showVisibilityIcon = _this$props.showVisibilityIcon,
          handleClickShowPassword = _this$props.handleClickShowPassword,
          showPassword = _this$props.showPassword,
          passwordStrength = _this$props.passwordStrength,
          ariaRequired = _this$props.ariaRequired,
          ariaInvalid = _this$props.ariaInvalid,
          icon = _this$props.icon,
          required = _this$props.required,
          floatingLabels = _this$props.floatingLabels,
          reference = _this$props.reference;
      return /*#__PURE__*/React.createElement(InputComponentStyled, null, /*#__PURE__*/React.createElement(InputElementWrapperStyled, {
        error: error,
        passwordStrength: passwordStrength
      }, icon && /*#__PURE__*/React.createElement(InputIconStyled, null, icon.render()), required && /*#__PURE__*/React.createElement(InputRequiredStyled, null, "*"), /*#__PURE__*/React.createElement(InputElementStyled, {
        id: placeholder,
        autoComplete: "off",
        value: value,
        onChange: function onChange(event) {
          return _onChange(event.target.value);
        },
        type: type,
        onBlur: onBlur,
        ref: reference,
        "aria-required": ariaRequired,
        "aria-invalid": ariaInvalid,
        "aria-describedby": "".concat(placeholder, "-desc"),
        withIcon: icon,
        floatingLabels: floatingLabels
      }), /*#__PURE__*/React.createElement(LabelStyled, {
        htmlFor: placeholder,
        hasValue: value,
        withIcon: icon
      }, placeholder), showVisibilityIcon && /*#__PURE__*/React.createElement(StyledButton, {
        onClick: handleClickShowPassword,
        tabIndex: "0",
        "aria-label": "toggle password visibility",
        type: "button"
      }, showPassword ? /*#__PURE__*/React.createElement(StyledPasswordVisibility, {
        src: visibilityOff,
        alt: ""
      }) : /*#__PURE__*/React.createElement(StyledPasswordVisibility, {
        src: visibility,
        alt: ""
      }))), /*#__PURE__*/React.createElement(ErrorWrapper, {
        passwordStrength: passwordStrength,
        id: "".concat(placeholder, "-desc")
      }, error));
    }
  }]);

  return Input;
}(Component);

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  error: '',
  value: '',
  showVisibilityIcon: false,
  handleClickShowPassword: function handleClickShowPassword() {},
  showPassword: false,
  passwordStrength: '',
  ariaRequired: false,
  ariaInvalid: false,
  icon: null,
  required: false,
  floatingLabels: true,
  reference: {
    current: null
  }
};
export default Input;