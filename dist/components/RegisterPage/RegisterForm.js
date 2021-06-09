import _regeneratorRuntime from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';
import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React, { Component } from 'react';
import submitConsents from 'api/Customer/submitConsents';
import Loader from 'components/Loader';
import Consent from 'components/Consents';
import { FromStyled, FormErrorStyled } from 'components/LoginPage/LoginStyled';
import Button from 'components/Button';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';
import {
  validateRegisterPassword,
  validateEmailField,
  validateConsentsField
} from 'util/validators';
import registerCustomer from 'api/Auth/registerCustomer';
import getCustomerLocales from 'api/Customer/getCustomerLocales';
import Auth from 'services/auth';
import { setData } from 'util/appConfigHelper';

const RegisterForm = /* #__PURE__ */ (function(_Component) {
  _inherits(RegisterForm, _Component);

  const _super = _createSuper(RegisterForm);

  function RegisterForm(props) {
    let _this;

    _classCallCheck(this, RegisterForm);

    _this = _super.call(this, props);

    _this.handleClickShowPassword = function() {
      const { showPassword } = _this.state;

      _this.setState({
        showPassword: !showPassword
      });
    };

    _this.validateEmail = function() {
      const _this$state = _this.state;
      const { email } = _this$state;
      const { errors } = _this$state;
      const { t } = _this.props;
      const message = validateEmailField(email);

      _this.setState(function() {
        return {
          errors: _objectSpread(
            _objectSpread({}, errors),
            {},
            {
              email: t(message)
            }
          )
        };
      });
    };

    _this.validatePassword = function() {
      const _this$state2 = _this.state;
      const { password } = _this$state2;
      const { errors } = _this$state2;
      const { t } = _this.props;
      const message = validateRegisterPassword(password);

      _this.setState(function() {
        return {
          errors: _objectSpread(
            _objectSpread({}, errors),
            {},
            {
              password: t(message)
            }
          )
        };
      });
    };

    _this.validateFields = function() {
      const _this$state3 = _this.state;
      const { email } = _this$state3;
      const { password } = _this$state3;
      const { consents } = _this$state3;
      const { consentDefinitions } = _this$state3;
      const { t } = _this.props;
      const errorFields = {
        email: t(validateEmailField(email)),
        password: t(validateRegisterPassword(password)),
        consents: t(validateConsentsField(consents, consentDefinitions))
      };

      _this.setState({
        errors: errorFields
      });

      return !Object.keys(errorFields).find(function(key) {
        return errorFields[key] !== '';
      });
    };

    _this.handleConsentsChange = function(value, consentDefinitions) {
      _this.setState(function(prev) {
        return {
          consents: value,
          consentDefinitions,
          errors: _objectSpread(
            _objectSpread({}, prev.errors),
            {},
            {
              consents: ''
            }
          )
        };
      });
    };

    _this.handleSubmit = function(event) {
      event.preventDefault();

      if (_this.validateFields()) {
        _this.register();
      }
    };

    _this.register = /* #__PURE__ */ _asyncToGenerator(
      /* #__PURE__ */ _regeneratorRuntime.mark(function _callee() {
        let _this$state4;
        let email;
        let password;
        let consents;
        let consentDefinitions;
        let _this$props;
        let offerId;
        let setOfferError;
        let t;
        let localesResponse;
        let locales;
        let response;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                (_this$state4 = _this.state),
                  (email = _this$state4.email),
                  (password = _this$state4.password),
                  (consents = _this$state4.consents),
                  (consentDefinitions = _this$state4.consentDefinitions);
                (_this$props = _this.props),
                  (offerId = _this$props.offerId),
                  (setOfferError = _this$props.setOfferError),
                  (t = _this$props.t);

                if (offerId) {
                  _context.next = 5;
                  break;
                }

                setOfferError(true);
                return _context.abrupt('return', false);

              case 5:
                _this.setState({
                  processing: true
                });

                _context.next = 8;
                return getCustomerLocales();

              case 8:
                localesResponse = _context.sent;

                if (localesResponse.responseData) {
                  _context.next = 12;
                  break;
                }

                _this.setState({
                  processing: false,
                  generalError: t('An error occurred.')
                });

                return _context.abrupt('return', false);

              case 12:
                locales = localesResponse.responseData;
                setData('CLEENG_CUSTOMER_IP', locales.ipAddress);
                _context.next = 16;
                return registerCustomer(
                  email,
                  password,
                  offerId,
                  locales.locale,
                  locales.country,
                  locales.currency
                );

              case 16:
                response = _context.sent;

                if (response.status === 200) {
                  Auth.login(
                    false,
                    true,
                    email,
                    response.responseData.jwt,
                    submitConsents,
                    [consents, consentDefinitions]
                  );
                } else if (response.status === 422) {
                  if (
                    response.errors[0].includes(
                      'Enterprise account is required'
                    )
                  ) {
                    _this.renderError(
                      'You would need our product <a href="https://cleeng.com/core-ott-subscriber-management" target="_blank">Core</a> to call this API'
                    );
                  } else {
                    _this.renderError('Customer already exists.');
                  }
                } else if (response.status === 429) {
                  _this.setState({
                    disableActionButton: true
                  });

                  _this.renderError(
                    'Server overloaded. Please try again later.'
                  );

                  setTimeout(function() {
                    _this.setState({
                      disableActionButton: false,
                      generalError: ''
                    });
                  }, 10 * 1000);
                } else {
                  _this.setState({
                    processing: false,
                    generalError: t('An error occurred.')
                  });
                }

                return _context.abrupt('return', true);

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    );

    _this.renderError = function() {
      const message =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : 'An error occurred.';
      const { t } = _this.props;

      _this.setState({
        processing: false,
        generalError: t(message)
      });
    };

    _this.handlePasswordChange = function(value) {
      const { errors } = _this.state;

      _this.setState({
        password: value,
        errors: _objectSpread(
          _objectSpread({}, errors),
          {},
          {
            password: ''
          }
        )
      });
    };

    _this.disabledRegisterButton = function() {
      _this.setState({
        disableActionButton: true
      });
    };

    _this.state = {
      email: '',
      password: '',
      consents: [],
      errors: {
        email: '',
        password: '',
        consents: ''
      },
      generalError: '',
      showPassword: false,
      consentDefinitions: [],
      processing: false,
      disableActionButton: false
    };
    return _this;
  }

  _createClass(RegisterForm, [
    {
      key: 'render',
      value: function render() {
        const _this2 = this;

        const _this$state5 = this.state;
        const { email } = _this$state5;
        const { password } = _this$state5;
        const { errors } = _this$state5;
        const { generalError } = _this$state5;
        const { showPassword } = _this$state5;
        const { disableActionButton } = _this$state5;
        const { processing } = _this$state5;
        const _this$props2 = this.props;
        const { publisherId } = _this$props2;
        const { t } = _this$props2;
        return /* #__PURE__ */ React.createElement(
          FromStyled,
          {
            onSubmit: this.handleSubmit,
            noValidate: true
          },
          /* #__PURE__ */ React.createElement(FormErrorStyled, {
            dangerouslySetInnerHTML: {
              __html: generalError
            }
          }),
          /* #__PURE__ */ React.createElement(EmailInput, {
            label: t('Email'),
            floatingLabels: false,
            value: email,
            onChange: function onChange(e) {
              return _this2.setState({
                email: e
              });
            },
            onBlur: this.validateEmail,
            error: errors.email
          }),
          /* #__PURE__ */ React.createElement(PasswordInput, {
            label: t('Password'),
            floatingLabels: false,
            value: password,
            onChange: this.handlePasswordChange,
            onBlur: this.validatePassword,
            error: errors.password,
            showVisibilityIcon: true,
            showPassword,
            handleClickShowPassword: this.handleClickShowPassword,
            showPasswordStrength: true,
            t
          }),
          /* #__PURE__ */ React.createElement(Consent, {
            t,
            publisherId,
            error: errors.consents,
            onChangeFn: this.handleConsentsChange,
            disabledRegisterButton: this.disabledRegisterButton
          }),
          /* #__PURE__ */ React.createElement(
            Button,
            {
              type: 'submit',
              size: 'big',
              theme: 'confirm',
              margin: '10px 0',
              disabled: processing || disableActionButton
            },
            processing
              ? /* #__PURE__ */ React.createElement(Loader, {
                  buttonLoader: true,
                  color: '#ffffff'
                })
              : t('Register')
          )
        );
      }
    }
  ]);

  return RegisterForm;
})(Component);

RegisterForm.defaultProps = {
  offerId: '',
  publisherId: '',
  setOfferError: function setOfferError() {},
  t: function t(k) {
    return k;
  }
};
export default RegisterForm;
