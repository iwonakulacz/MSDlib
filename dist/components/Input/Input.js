import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React, { Component } from 'react';
import visibility from 'assets/images/visibility.svg';
import visibilityOff from 'assets/images/visibilityOff.svg';
import {
  InputComponentStyled,
  InputElementWrapperStyled,
  InputElementStyled,
  ErrorWrapper,
  StyledButton,
  StyledPasswordVisibility,
  LabelStyled,
  InputIconStyled,
  InputRequiredStyled
} from './InputStyled';

const Input = /* #__PURE__ */ (function(_Component) {
  _inherits(Input, _Component);

  const _super = _createSuper(Input);

  function Input(props) {
    let _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(Input, [
    {
      key: 'render',
      value: function render() {
        const _this$props = this.props;
        const { type } = _this$props;
        const { placeholder } = _this$props;
        const { value } = _this$props;
        const _onChange = _this$props.onChange;
        const { onBlur } = _this$props;
        const { error } = _this$props;
        const { showVisibilityIcon } = _this$props;
        const { handleClickShowPassword } = _this$props;
        const { showPassword } = _this$props;
        const { passwordStrength } = _this$props;
        const { ariaRequired } = _this$props;
        const { ariaInvalid } = _this$props;
        const { icon } = _this$props;
        const { required } = _this$props;
        const { floatingLabels } = _this$props;
        const { reference } = _this$props;
        return /* #__PURE__ */ React.createElement(
          InputComponentStyled,
          null,
          /* #__PURE__ */ React.createElement(
            InputElementWrapperStyled,
            {
              error,
              passwordStrength
            },
            icon &&
              /* #__PURE__ */ React.createElement(
                InputIconStyled,
                null,
                icon.render()
              ),
            required &&
              /* #__PURE__ */ React.createElement(
                InputRequiredStyled,
                null,
                '*'
              ),
            /* #__PURE__ */ React.createElement(InputElementStyled, {
              id: placeholder,
              autoComplete: 'off',
              value,
              onChange: function onChange(event) {
                return _onChange(event.target.value);
              },
              type,
              onBlur,
              ref: reference,
              'aria-required': ariaRequired,
              'aria-invalid': ariaInvalid,
              'aria-describedby': ''.concat(placeholder, '-desc'),
              withIcon: icon,
              floatingLabels
            }),
            /* #__PURE__ */ React.createElement(
              LabelStyled,
              {
                htmlFor: placeholder,
                hasValue: value,
                withIcon: icon
              },
              placeholder
            ),
            showVisibilityIcon &&
              /* #__PURE__ */ React.createElement(
                StyledButton,
                {
                  onClick: handleClickShowPassword,
                  tabIndex: '0',
                  'aria-label': 'toggle password visibility',
                  type: 'button'
                },
                showPassword
                  ? /* #__PURE__ */ React.createElement(
                      StyledPasswordVisibility,
                      {
                        src: visibilityOff,
                        alt: ''
                      }
                    )
                  : /* #__PURE__ */ React.createElement(
                      StyledPasswordVisibility,
                      {
                        src: visibility,
                        alt: ''
                      }
                    )
              )
          ),
          /* #__PURE__ */ React.createElement(
            ErrorWrapper,
            {
              passwordStrength,
              id: ''.concat(placeholder, '-desc')
            },
            error
          )
        );
      }
    }
  ]);

  return Input;
})(Component);

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
