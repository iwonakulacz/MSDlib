import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _objectSpread from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';
import submitConsents from 'api/Customer/submitConsents';
import Loader from 'components/Loader';
import Consent from 'components/Consents';
import { FromStyled, FormErrorStyled } from 'components/LoginPage/LoginStyled';
import Button from 'components/Button';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';
import { validateRegisterPassword, validateEmailField, validateConsentsField } from 'util/validators';
import registerCustomer from 'api/Auth/registerCustomer';
import getCustomerLocales from 'api/Customer/getCustomerLocales';
import Auth from 'services/auth';
import { setData } from 'util/appConfigHelper';

var RegisterForm = /*#__PURE__*/function (_Component) {
  _inherits(RegisterForm, _Component);

  var _super = _createSuper(RegisterForm);

  function RegisterForm(props) {
    var _this;

    _classCallCheck(this, RegisterForm);

    _this = _super.call(this, props);

    _this.handleClickShowPassword = function () {
      var showPassword = _this.state.showPassword;

      _this.setState({
        showPassword: !showPassword
      });
    };

    _this.validateEmail = function () {
      var _this$state = _this.state,
          email = _this$state.email,
          errors = _this$state.errors;
      var t = _this.props.t;
      var message = validateEmailField(email);

      _this.setState(function () {
        return {
          errors: _objectSpread(_objectSpread({}, errors), {}, {
            email: t(message)
          })
        };
      });
    };

    _this.validatePassword = function () {
      var _this$state2 = _this.state,
          password = _this$state2.password,
          errors = _this$state2.errors;
      var t = _this.props.t;
      var message = validateRegisterPassword(password);

      _this.setState(function () {
        return {
          errors: _objectSpread(_objectSpread({}, errors), {}, {
            password: t(message)
          })
        };
      });
    };

    _this.validateFields = function () {
      var _this$state3 = _this.state,
          email = _this$state3.email,
          password = _this$state3.password,
          consents = _this$state3.consents,
          consentDefinitions = _this$state3.consentDefinitions;
      var t = _this.props.t;
      var errorFields = {
        email: t(validateEmailField(email)),
        password: t(validateRegisterPassword(password)),
        consents: t(validateConsentsField(consents, consentDefinitions))
      };

      _this.setState({
        errors: errorFields
      });

      return !Object.keys(errorFields).find(function (key) {
        return errorFields[key] !== '';
      });
    };

    _this.handleConsentsChange = function (value, consentDefinitions) {
      _this.setState(function (prev) {
        return {
          consents: value,
          consentDefinitions: consentDefinitions,
          errors: _objectSpread(_objectSpread({}, prev.errors), {}, {
            consents: ''
          })
        };
      });
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();

      if (_this.validateFields()) {
        _this.register();
      }
    };

    _this.register = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _this$state4, email, password, consents, consentDefinitions, _this$props, offerId, setOfferError, t, localesResponse, locales, response;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state4 = _this.state, email = _this$state4.email, password = _this$state4.password, consents = _this$state4.consents, consentDefinitions = _this$state4.consentDefinitions;
              _this$props = _this.props, offerId = _this$props.offerId, setOfferError = _this$props.setOfferError, t = _this$props.t;

              if (offerId) {
                _context.next = 5;
                break;
              }

              setOfferError(true);
              return _context.abrupt("return", false);

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

              return _context.abrupt("return", false);

            case 12:
              locales = localesResponse.responseData;
              setData('CLEENG_CUSTOMER_IP', locales.ipAddress);
              _context.next = 16;
              return registerCustomer(email, password, offerId, locales.locale, locales.country, locales.currency);

            case 16:
              response = _context.sent;

              if (response.status === 200) {
                Auth.login(false, true, email, response.responseData.jwt, submitConsents, [consents, consentDefinitions]);
              } else if (response.status === 422) {
                if (response.errors[0].includes('Enterprise account is required')) {
                  _this.renderError('You would need our product <a href="https://cleeng.com/core-ott-subscriber-management" target="_blank">Core</a> to call this API');
                } else {
                  _this.renderError('Customer already exists.');
                }
              } else if (response.status === 429) {
                _this.setState({
                  disableActionButton: true
                });

                _this.renderError('Server overloaded. Please try again later.');

                setTimeout(function () {
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

              return _context.abrupt("return", true);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    _this.renderError = function () {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'An error occurred.';
      var t = _this.props.t;

      _this.setState({
        processing: false,
        generalError: t(message)
      });
    };

    _this.handlePasswordChange = function (value) {
      var errors = _this.state.errors;

      _this.setState({
        password: value,
        errors: _objectSpread(_objectSpread({}, errors), {}, {
          password: ''
        })
      });
    };

    _this.disabledRegisterButton = function () {
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

  _createClass(RegisterForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state5 = this.state,
          email = _this$state5.email,
          password = _this$state5.password,
          errors = _this$state5.errors,
          generalError = _this$state5.generalError,
          showPassword = _this$state5.showPassword,
          disableActionButton = _this$state5.disableActionButton,
          processing = _this$state5.processing;
      var _this$props2 = this.props,
          publisherId = _this$props2.publisherId,
          t = _this$props2.t;
      return /*#__PURE__*/React.createElement(FromStyled, {
        onSubmit: this.handleSubmit,
        noValidate: true
      }, /*#__PURE__*/React.createElement(FormErrorStyled, {
        dangerouslySetInnerHTML: {
          __html: generalError
        }
      }), /*#__PURE__*/React.createElement(EmailInput, {
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
      }), /*#__PURE__*/React.createElement(PasswordInput, {
        label: t('Password'),
        floatingLabels: false,
        value: password,
        onChange: this.handlePasswordChange,
        onBlur: this.validatePassword,
        error: errors.password,
        showVisibilityIcon: true,
        showPassword: showPassword,
        handleClickShowPassword: this.handleClickShowPassword,
        showPasswordStrength: true,
        t: t
      }), /*#__PURE__*/React.createElement(Consent, {
        t: t,
        publisherId: publisherId,
        error: errors.consents,
        onChangeFn: this.handleConsentsChange,
        disabledRegisterButton: this.disabledRegisterButton
      }), /*#__PURE__*/React.createElement(Button, {
        type: "submit",
        size: "big",
        theme: "confirm",
        margin: "10px 0",
        disabled: processing || disableActionButton
      }, processing ? /*#__PURE__*/React.createElement(Loader, {
        buttonLoader: true,
        color: "#ffffff"
      }) : t('Register')));
    }
  }]);

  return RegisterForm;
}(Component);

RegisterForm.defaultProps = {
  offerId: '',
  publisherId: '',
  setOfferError: function setOfferError() {},
  t: function t(k) {
    return k;
  }
};
export default RegisterForm;