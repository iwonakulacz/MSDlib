import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import ErrorPage from 'components/ErrorPage';
import googleIcon from 'assets/images/google.png';
import fbIcon from 'assets/images/fb.svg';
import Button from 'components/Button';
import Header from 'components/Header';
import Footer from 'components/Footer';
import saveOfferId from 'util/offerIdHelper';
import savePublisherId from 'util/publisherIdHelper';
import labeling from 'containers/labeling';
import { isHosted } from 'util/appConfigHelper';
import {
  ContentWrapperStyled,
  SocialStyled,
  SeparatorStyled
} from './LoginStyled';
import LoginForm from './LoginForm';

const Login = /* #__PURE__ */ (function(_Component) {
  _inherits(Login, _Component);

  const _super = _createSuper(Login);

  function Login(props) {
    let _this;

    _classCallCheck(this, Login);

    _this = _super.call(this, props);

    _this.setOfferId = function(value) {
      return _this.setState({
        offerId: value
      });
    };

    _this.setPublisherId = function(value) {
      return _this.setState({
        publisherId: value
      });
    };

    _this.setOfferError = function(value) {
      return _this.setState({
        isOfferError: value
      });
    };

    _this.state = {
      offerId: '',
      publisherId: '',
      isOfferError: false,
      emailChanged: false
    };
    return _this;
  }

  _createClass(Login, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        const { urlProps } = this.props;
        saveOfferId(urlProps.location, this.setOfferId);
        savePublisherId(urlProps.location, this.setPublisherId);

        if (urlProps.location.search.includes('emailChanged=true')) {
          this.setState({
            emailChanged: true
          });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        const _this2 = this;

        const _this$state = this.state;
        const { isOfferError } = _this$state;
        const { offerId } = _this$state;
        const { publisherId } = _this$state;
        const { emailChanged } = _this$state;
        const _this$props = this.props;
        const { isMyAccount } = _this$props;
        const { t } = _this$props;
        return isOfferError
          ? /* #__PURE__ */ React.createElement(ErrorPage, {
              type: 'offerNotExist',
              resetError: function resetError() {
                return _this2.setOfferError(false);
              }
            })
          : /* #__PURE__ */ React.createElement(
              React.Fragment,
              null,
              /* #__PURE__ */ React.createElement(Header, null),
              /* #__PURE__ */ React.createElement(
                ContentWrapperStyled,
                null,
                /* #__PURE__ */ React.createElement(LoginForm, {
                  t,
                  offerId,
                  publisherId,
                  setOfferError: this.setOfferError,
                  isMyAccount,
                  emailChanged
                }),
                !isMyAccount &&
                  /* #__PURE__ */ React.createElement(
                    React.Fragment,
                    null,
                    /* #__PURE__ */ React.createElement(
                      Button,
                      {
                        isLink: true,
                        to: {
                          pathname: '/register'
                        },
                        theme: 'secondary',
                        size: 'big'
                      },
                      t('Go to register')
                    ),
                    !isHosted() &&
                      /* #__PURE__ */ React.createElement(
                        SocialStyled,
                        null,
                        /* #__PURE__ */ React.createElement(
                          SeparatorStyled,
                          null,
                          t('Or sign in with')
                        ),
                        /* #__PURE__ */ React.createElement(
                          Button,
                          {
                            theme: 'simple',
                            fontWeight: '500',
                            label: t('Sign in with Facebook'),
                            icon: fbIcon
                          },
                          'Facebook'
                        ),
                        /* #__PURE__ */ React.createElement(
                          Button,
                          {
                            theme: 'simple',
                            fontWeight: '500',
                            label: t('Sign in with Google'),
                            icon: googleIcon
                          },
                          'Google'
                        )
                      )
                  ),
                /* #__PURE__ */ React.createElement(
                  Button,
                  {
                    isLink: true,
                    to: {
                      pathname: '/reset-password',
                      fromMyAccount: isMyAccount
                    },
                    theme: 'link',
                    margin: '20px auto'
                  },
                  t('Forgot password?')
                )
              ),
              /* #__PURE__ */ React.createElement(Footer, {
                isCheckout: !isMyAccount
              })
            );
      }
    }
  ]);

  return Login;
})(Component);

Login.defaultProps = {
  urlProps: {},
  isMyAccount: false,
  t: function t(k) {
    return k;
  }
};
export { Login as PureLogin };
export default withTranslation()(labeling()(Login));
