import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import googleIcon from 'assets/images/google.png';
import fbIcon from 'assets/images/fb.svg';
import ErrorPage from 'components/ErrorPage';
import BackButton from 'components/BackButton';
import { ContentWrapperStyled, SocialStyled, SeparatorStyled } from 'components/LoginPage/LoginStyled';
import Button from 'components/Button';
import Header from 'components/Header';
import Footer from 'components/Footer';
import labeling from 'containers/labeling';
import savePublisherId from 'util/publisherIdHelper';
import saveOfferId from 'util/offerIdHelper';
import { isHosted } from 'util/appConfigHelper';
import RegisterForm from './RegisterForm';

var Register = /*#__PURE__*/function (_Component) {
  _inherits(Register, _Component);

  var _super = _createSuper(Register);

  function Register(props) {
    var _this;

    _classCallCheck(this, Register);

    _this = _super.call(this, props);

    _this.setOfferId = function (value) {
      return _this.setState({
        offerId: value
      });
    };

    _this.setPublisherId = function (value) {
      return _this.setState({
        publisherId: value
      });
    };

    _this.setOfferError = function (value) {
      return _this.setState({
        isOfferError: value
      });
    };

    _this.state = {
      offerId: null,
      isOfferError: false,
      publisherId: null
    };
    return _this;
  }

  _createClass(Register, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var urlProps = this.props.urlProps;
      saveOfferId(urlProps.location, this.setOfferId);
      savePublisherId(urlProps.location, this.setPublisherId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isOfferError = _this$state.isOfferError,
          offerId = _this$state.offerId,
          publisherId = _this$state.publisherId;
      var t = this.props.t;
      return isOfferError ? /*#__PURE__*/React.createElement(ErrorPage, {
        type: "offerNotExist",
        resetError: function resetError() {
          return _this2.setOfferError();
        }
      }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(BackButton, null)), /*#__PURE__*/React.createElement(ContentWrapperStyled, null, /*#__PURE__*/React.createElement(RegisterForm, {
        t: t,
        offerId: offerId,
        publisherId: publisherId,
        setOfferError: this.setOfferError
      }), /*#__PURE__*/React.createElement(Button, {
        isLink: true,
        to: {
          pathname: '/login'
        },
        theme: "secondary",
        size: "big"
      }, t('Have an account?')), !isHosted() && /*#__PURE__*/React.createElement(SocialStyled, null, /*#__PURE__*/React.createElement(SeparatorStyled, null, t('Or sign up with')), /*#__PURE__*/React.createElement(Button, {
        theme: "simple",
        fontWeight: "500",
        label: "Sign up with Facebook",
        icon: fbIcon
      }, "Facebook"), /*#__PURE__*/React.createElement(Button, {
        theme: "simple",
        fontWeight: "500",
        label: "Sign up with Google",
        icon: googleIcon
      }, "Google"))), /*#__PURE__*/React.createElement(Footer, null));
    }
  }]);

  return Register;
}(Component);

Register.defaultProps = {
  urlProps: {},
  t: function t(k) {
    return k;
  }
};
export { Register as PureRegister };
export default withTranslation()(labeling()(Register));