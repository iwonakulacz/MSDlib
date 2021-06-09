import _regeneratorRuntime from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _asyncToGenerator from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import EmailInput from 'components/EmailInput';
import BackButton from 'components/BackButton';
import Button from 'components/Button';
import Header from 'components/Header';
import Loader from 'components/Loader';
import resetPassword from 'api/Auth/resetPassword';
import saveOfferId from 'util/offerIdHelper';
import labeling from 'containers/labeling';
import Footer from 'components/Footer';
import { PasswordResetPageStyled, StyledTitle, StyledMessage, FormStyled } from './PasswordResetStyled'; // eslint-disable-next-line no-useless-escape

var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var PasswordReset = /*#__PURE__*/function (_Component) {
  _inherits(PasswordReset, _Component);

  var _super = _createSuper(PasswordReset);

  function PasswordReset(props) {
    var _this;

    _classCallCheck(this, PasswordReset);

    _this = _super.call(this, props);

    _this.setOfferId = function (value) {
      return _this.setState({
        offerId: value
      });
    };

    _this.onSubmit = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(e) {
        var _this$state, value, offerId, _this$props, onSuccess, t, response;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _this$state = _this.state, value = _this$state.value, offerId = _this$state.offerId;
                _this$props = _this.props, onSuccess = _this$props.onSuccess, t = _this$props.t;

                if (!_this.validateFields()) {
                  _context.next = 9;
                  break;
                }

                _this.setState({
                  processing: true
                });

                _context.next = 7;
                return resetPassword(offerId, value);

              case 7:
                response = _context.sent;

                if (response.errors.length) {
                  if (response.status === 429) {
                    _this.setState({
                      overloaded: true,
                      processing: false,
                      message: 'Server overloaded. Please try again later.'
                    });

                    setTimeout(function () {
                      _this.setState({
                        overloaded: false,
                        message: ''
                      });
                    }, 10 * 1000);
                  } else {
                    _this.setState({
                      processing: false,
                      message: t(response.errors[0])
                    });
                  }
                } else {
                  onSuccess(value);
                }

              case 9:
                return _context.abrupt("return", true);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      offerId: '',
      value: '',
      message: '',
      processing: false,
      overloaded: false
    };
    return _this;
  }

  _createClass(PasswordReset, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var urlProps = this.props.urlProps;
      saveOfferId(urlProps.location, this.setOfferId);
    }
  }, {
    key: "validateFields",
    value: function validateFields() {
      var value = this.state.value;
      var t = this.props.t;
      var errorFields = {
        email: EMAIL_REGEX.test(value) ? '' : t('This address does not seem to have a normal email format.')
      };
      this.setState({
        message: errorFields.email
      });
      return !Object.keys(errorFields).find(function (key) {
        return errorFields[key] !== '';
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          value = _this$state2.value,
          message = _this$state2.message,
          processing = _this$state2.processing,
          overloaded = _this$state2.overloaded;
      var _this$props2 = this.props,
          t = _this$props2.t,
          location = _this$props2.urlProps.location;
      var fromMyAccount = location.state ? location.state.fromMyAccount : false;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(BackButton, {
        isMyAccount: fromMyAccount
      })), /*#__PURE__*/React.createElement(PasswordResetPageStyled, null, /*#__PURE__*/React.createElement(StyledTitle, null, t('Forgot your password?')), /*#__PURE__*/React.createElement(StyledMessage, null, t('Just enter your email address below and we will send you a link to reset your password')), /*#__PURE__*/React.createElement(FormStyled, {
        onSubmit: this.onSubmit,
        noValidate: true
      }, /*#__PURE__*/React.createElement(EmailInput, {
        label: t('Email'),
        error: message,
        value: value,
        onChange: function onChange(v) {
          return _this2.setState({
            value: v
          });
        }
      }), /*#__PURE__*/React.createElement(Button, {
        type: "submit",
        theme: "confirm",
        size: "big",
        disabled: processing || overloaded
      }, processing ? /*#__PURE__*/React.createElement(Loader, {
        buttonLoader: true,
        color: "#ffffff"
      }) : t('Reset Password')))), /*#__PURE__*/React.createElement(Footer, null));
    }
  }]);

  return PasswordReset;
}(Component);

PasswordReset.defaultProps = {
  urlProps: {},
  t: function t(k) {
    return k;
  }
};
export { PasswordReset as PurePasswordReset };
export default withTranslation()(labeling()(PasswordReset));