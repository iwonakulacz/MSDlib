import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';
import { ErrorWrapper } from 'components/Input/InputStyled';
import { WrapStyled, InputElementStyled, InputElementLabelStyled } from './MyAccountInputStyled';

var MyAccountInput = /*#__PURE__*/function (_Component) {
  _inherits(MyAccountInput, _Component);

  var _super = _createSuper(MyAccountInput);

  function MyAccountInput(props) {
    var _this;

    _classCallCheck(this, MyAccountInput);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(MyAccountInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          placeholder = _this$props.placeholder,
          type = _this$props.type,
          value = _this$props.value,
          label = _this$props.label,
          onChange = _this$props.onChange,
          onSubmit = _this$props.onSubmit,
          disabled = _this$props.disabled,
          hideInput = _this$props.hideInput,
          error = _this$props.error,
          onBlur = _this$props.onBlur,
          name = _this$props.name,
          autoComplete = _this$props.autoComplete;
      return /*#__PURE__*/React.createElement(WrapStyled, {
        hideInput: hideInput
      }, /*#__PURE__*/React.createElement(InputElementLabelStyled, {
        htmlFor: id
      }, label), /*#__PURE__*/React.createElement(InputElementStyled, {
        error: error,
        id: id,
        placeholder: placeholder,
        type: type,
        value: value,
        disabled: disabled,
        onSubmit: onSubmit,
        onChange: onChange,
        onBlur: onBlur,
        name: name,
        autoComplete: autoComplete
      }), /*#__PURE__*/React.createElement(ErrorWrapper, {
        id: "".concat(id, "-desc"),
        isMyAccount: true
      }, error));
    }
  }]);

  return MyAccountInput;
}(Component);

export default MyAccountInput;
MyAccountInput.defaultProps = {
  id: '',
  placeholder: '',
  type: 'text',
  value: '',
  label: '',
  onChange: function onChange() {},
  onSubmit: function onSubmit() {},
  onBlur: function onBlur() {},
  disabled: false,
  hideInput: false,
  error: '',
  name: '',
  autoComplete: ''
};