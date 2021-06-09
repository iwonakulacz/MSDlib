import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React from 'react';
import Input from 'components/Input';

const PasswordInput = /* #__PURE__ */ (function(_React$Component) {
  _inherits(PasswordInput, _React$Component);

  const _super = _createSuper(PasswordInput);

  function PasswordInput(props) {
    let _this;

    _classCallCheck(this, PasswordInput);

    _this = _super.call(this, props);

    _this.onChangeFunction = function(value) {
      const _this$props = _this.props;
      const { onChange } = _this$props;
      const { showPasswordStrength } = _this$props;

      if (showPasswordStrength) {
        const passwordStrength = _this.validateNewPassword(value);

        _this.setState({
          passError: _this.getErrorMessage(passwordStrength),
          errorLabel: passwordStrength
        });
      }

      onChange(value);
    };

    _this.validateNewPassword = function(pass) {
      let score = 0;

      if (
        pass &&
        pass.length >= 8 &&
        pass.match(/\d+/) &&
        pass.match(/[a-zA-Z]/)
      ) {
        if (pass.match(/[a-z]/)) {
          score += 1;
        }

        if (pass.match(/[A-Z]/)) {
          score += 5;
        }

        if (pass.match(/\d+/) && !pass.match(/^[0-9]*$/)) {
          score += 5;
        }

        if (pass.match(/(\d.*\d)/)) {
          score += 5;
        }

        if (pass.match(/[!,@#$%^&*?_~]/)) {
          score += 5;
        }

        if (pass.match(/([!,@#$%^&*?_~].*[!,@#$%^&*?_~])/)) {
          score += 5;
        }

        if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) {
          score += 2;
        }

        if (pass.match(/\d/) && pass.match(/\D/)) {
          score += 2;
        }

        if (
          pass.match(/[a-z]/) &&
          pass.match(/[A-Z]/) &&
          pass.match(/\d/) &&
          pass.match(/[!,@#$%^&*?_~]/)
        ) {
          score += 2;
        }

        if (score <= 8) {
          return 'Weak';
        }

        if (score > 8 && score <= 16) {
          return 'Fair';
        }

        if (score > 16 && score <= 24) {
          return 'Good';
        }

        if (score > 24 && score <= 32) {
          return 'Strong';
        }
      }

      return 'NotValid';
    };

    _this.getErrorMessage = function(msg) {
      const { t } = _this.props;
      const errorLabel = {
        Weak: t('Weak'),
        Fair: t('Could be stronger'),
        Good: t('Good password'),
        Strong: t('Strong password'),
        NotValid: t(
          'Your password must contain at least 8 characters, including 1 digit.'
        )
      };
      return errorLabel[msg];
    };

    _this.state = {
      passError: '',
      errorLabel: ''
    };
    return _this;
  }

  _createClass(PasswordInput, [
    {
      key: 'render',
      value: function render() {
        const _this$props2 = this.props;
        const { value } = _this$props2;
        const { onBlur } = _this$props2;
        const { error } = _this$props2;
        const { showVisibilityIcon } = _this$props2;
        const { showPassword } = _this$props2;
        const { handleClickShowPassword } = _this$props2;
        const { label } = _this$props2;
        const { floatingLabels } = _this$props2;
        const _this$state = this.state;
        const { passError } = _this$state;
        const { errorLabel } = _this$state;
        const errorMsg = error || passError;
        return /* #__PURE__ */ React.createElement(
          React.Fragment,
          null,
          /* #__PURE__ */ React.createElement(Input, {
            placeholder: label,
            floatingLabels,
            type: showPassword ? 'text' : 'password',
            value,
            onChange: this.onChangeFunction,
            onBlur,
            error: errorMsg,
            showVisibilityIcon,
            handleClickShowPassword,
            showPassword,
            passwordStrength: errorLabel,
            ariaRequired: true,
            ariaInvalid: errorLabel === 'NotValid'
          })
        );
      }
    }
  ]);

  return PasswordInput;
})(React.Component);

PasswordInput.defaultProps = {
  value: '',
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  error: '',
  showVisibilityIcon: false,
  showPassword: false,
  handleClickShowPassword: function handleClickShowPassword() {},
  label: 'Password',
  floatingLabels: true,
  showPasswordStrength: false,
  t: function t(k) {
    return k;
  }
};
export default PasswordInput;
