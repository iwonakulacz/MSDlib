import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _objectSpread from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';
import Loader from 'components/Loader';
import loginCustomer from 'api/Auth/loginCustomer';
import Auth from 'services/auth';
import getCustomerLocales from 'api/Customer/getCustomerLocales';
import Button from 'components/Button';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';
import { validatePasswordField, validateEmailField } from 'util/validators';
import { setData } from 'util/appConfigHelper';
import { FromStyled, FormErrorStyled, FormSuccessStyled } from './LoginStyled';

var LoginForm = /*#__PURE__*/function (_Component) {
  _inherits(LoginForm, _Component);

  var _super = _createSuper(LoginForm);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _super.call(this, props);

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
      var message = validatePasswordField(password);

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
          password = _this$state3.password;
      var t = _this.props.t;
      var errorFields = {
        email: t(validateEmailField(email)),
        password: t(validatePasswordField(password))
      };

      _this.setState({
        errors: errorFields,
        generalError: ''
      });

      return !Object.keys(errorFields).find(function (key) {
        return errorFields[key] !== '';
      });
    };

    _this.handleSubmit = function (event) {
      event.preventDefault();

      if (_this.validateFields()) {
        _this.login();
      }
    };

    _this.login = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _this$props, offerId, setOfferError, isMyAccount, publisherId, _this$state4, email, password, loginBy, response;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, offerId = _this$props.offerId, setOfferError = _this$props.setOfferError, isMyAccount = _this$props.isMyAccount, publisherId = _this$props.publisherId;
              _this$state4 = _this.state, email = _this$state4.email, password = _this$state4.password;

              if (!(!offerId && !isMyAccount)) {
                _context.next = 5;
                break;
              }

              setOfferError(true);
              return _context.abrupt("return", false);

            case 5:
              _this.setState({
                processing: true,
                hideSuccessMessage: true
              });

              if (isMyAccount) {
                loginBy = {
                  publisherId: publisherId
                };
              } else {
                loginBy = {
                  offerId: offerId
                };
              }

              _context.next = 9;
              return loginCustomer(email, password, loginBy);

            case 9:
              response = _context.sent;

              if (!(response.status === 200)) {
                _context.next = 15;
                break;
              }

              _context.next = 13;
              return getCustomerLocales().then(function (resp) {
                setData('CLEENG_CUSTOMER_IP', resp.responseData.ipAddress);
                Auth.login(!!isMyAccount, false, email, response.responseData.jwt);
              }).catch(function () {
                _this.renderError();
              });

            case 13:
              _context.next = 16;
              break;

            case 15:
              if (response.status === 401 || response.status === 422) {
                _this.renderError('Wrong email or password');
              } else if (response.status === 429) {
                _this.setState({
                  overloaded: true
                });

                _this.renderError('Server overloaded. Please try again later.', true);

                setTimeout(function () {
                  _this.setState({
                    overloaded: false,
                    generalError: ''
                  });
                }, 10 * 1000);
              } else {
                _this.renderError();
              }

            case 16:
              return _context.abrupt("return", true);

            case 17:
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

    _this.emailInput = React.createRef();
    _this.state = {
      email: '',
      password: '',
      errors: {
        email: '',
        password: ''
      },
      generalError: '',
      processing: false,
      overloaded: false,
      hideSuccessMessage: false
    };
    return _this;
  }

  _createClass(LoginForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.emailInput && this.emailInput.current) this.emailInput.current.focus();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state5 = this.state,
          email = _this$state5.email,
          password = _this$state5.password,
          errors = _this$state5.errors,
          generalError = _this$state5.generalError,
          processing = _this$state5.processing,
          overloaded = _this$state5.overloaded,
          hideSuccessMessage = _this$state5.hideSuccessMessage;
      var _this$props2 = this.props,
          emailChanged = _this$props2.emailChanged,
          t = _this$props2.t;
      return /*#__PURE__*/React.createElement(FromStyled, {
        onSubmit: this.handleSubmit,
        noValidate: true
      }, emailChanged && !generalError && !hideSuccessMessage ? /*#__PURE__*/React.createElement(FormSuccessStyled, null, t('Your email has been changed succesfully')) : /*#__PURE__*/React.createElement(FormErrorStyled, null, generalError), /*#__PURE__*/React.createElement(EmailInput, {
        reference: this.emailInput,
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
        onChange: function onChange(e) {
          return _this2.setState({
            password: e
          });
        },
        onBlur: this.validatePassword,
        error: errors.password
      }), /*#__PURE__*/React.createElement(Button, {
        type: "submit",
        size: "big",
        theme: "confirm",
        margin: "10px 0",
        disabled: processing || overloaded
      }, processing ? /*#__PURE__*/React.createElement(Loader, {
        buttonLoader: true,
        color: "#ffffff"
      }) : t('Sign in')));
    }
  }]);

  return LoginForm;
}(Component);

LoginForm.defaultProps = {
  offerId: '',
  publisherId: '',
  isMyAccount: false,
  setOfferError: function setOfferError() {},
  emailChanged: false,
  t: function t(k) {
    return k;
  }
};
export default LoginForm;