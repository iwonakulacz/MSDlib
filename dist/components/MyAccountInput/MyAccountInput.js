import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React, { Component } from 'react';
import { ErrorWrapper } from 'components/Input/InputStyled';
import {
  WrapStyled,
  InputElementStyled,
  InputElementLabelStyled
} from './MyAccountInputStyled';

const MyAccountInput = /* #__PURE__ */ (function(_Component) {
  _inherits(MyAccountInput, _Component);

  const _super = _createSuper(MyAccountInput);

  function MyAccountInput(props) {
    let _this;

    _classCallCheck(this, MyAccountInput);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(MyAccountInput, [
    {
      key: 'render',
      value: function render() {
        const _this$props = this.props;
        const { id } = _this$props;
        const { placeholder } = _this$props;
        const { type } = _this$props;
        const { value } = _this$props;
        const { label } = _this$props;
        const { onChange } = _this$props;
        const { onSubmit } = _this$props;
        const { disabled } = _this$props;
        const { hideInput } = _this$props;
        const { error } = _this$props;
        const { onBlur } = _this$props;
        const { name } = _this$props;
        const { autoComplete } = _this$props;
        return /* #__PURE__ */ React.createElement(
          WrapStyled,
          {
            hideInput
          },
          /* #__PURE__ */ React.createElement(
            InputElementLabelStyled,
            {
              htmlFor: id
            },
            label
          ),
          /* #__PURE__ */ React.createElement(InputElementStyled, {
            error,
            id,
            placeholder,
            type,
            value,
            disabled,
            onSubmit,
            onChange,
            onBlur,
            name,
            autoComplete
          }),
          /* #__PURE__ */ React.createElement(
            ErrorWrapper,
            {
              id: ''.concat(id, '-desc'),
              isMyAccount: true
            },
            error
          )
        );
      }
    }
  ]);

  return MyAccountInput;
})(Component);

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
