import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React, { Component } from 'react';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import { AdyenStyled, ConfirmButtonStyled } from './AdyenStyled';

const COMPONENT_CONTAINER_ID = 'component-container';
const PAYMENT_METHOD_CARD = 'card';
const ADYEN_ENV =
  ENVIRONMENT_CONFIGURATION.REACT_ENV === 'production' ? 'live' : 'test';
const ADYEN_STYLESHEET_HREF = 'https://checkoutshopper-'.concat(
  ADYEN_ENV,
  '.adyen.com/checkoutshopper/sdk/3.11.4/adyen.css'
);
const ADYEN_SCRIPT_HREF = 'https://checkoutshopper-'.concat(
  ADYEN_ENV,
  '.adyen.com/checkoutshopper/sdk/3.10.1/adyen.js'
);

const Adyen = /* #__PURE__ */ (function(_Component) {
  _inherits(Adyen, _Component);

  const _super = _createSuper(Adyen);

  function Adyen(props) {
    let _this;

    _classCallCheck(this, Adyen);

    _this = _super.call(this, props);

    _this.loadAdyenStylesheet = function() {
      return new Promise(function(resolve, reject) {
        const linkEl = document.createElement('link');
        linkEl.onload = resolve;
        linkEl.onerror = reject;
        linkEl.rel = 'stylesheet';
        linkEl.href = ADYEN_STYLESHEET_HREF;
        document.body.append(linkEl);
      });
    };

    _this.loadAdyenScript = function() {
      return new Promise(function(resolve, reject) {
        const scriptEl = document.createElement('script');
        scriptEl.onload = resolve;
        scriptEl.onerror = reject;
        scriptEl.src = ADYEN_SCRIPT_HREF;
        document.body.append(scriptEl);
      });
    };

    _this.renderCheckout = function() {
      const _this$props = _this.props;
      const { onSubmit } = _this$props;
      const { onChange } = _this$props;
      const configuration = {
        showPayButton: false,
        environment: ADYEN_ENV,
        clientKey: ENVIRONMENT_CONFIGURATION.ADYEN_CLIENT_KEY,
        onSubmit,
        onChange
      };
      _this.checkout = new window.AdyenCheckout(configuration)
        .create(PAYMENT_METHOD_CARD)
        .mount('#'.concat(COMPONENT_CONTAINER_ID));
    };

    _this.state = {
      isLoaded: false
    };
    return _this;
  }

  _createClass(Adyen, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        const _this2 = this;

        if (window.AdyenCheckout === undefined) {
          this.loadAdyenStylesheet()
            .then(this.loadAdyenScript)
            .then(this.renderCheckout)
            .then(function() {
              _this2.setState({
                isLoaded: true
              });
            });
        } else {
          this.renderCheckout();
          this.setState({
            isLoaded: true
          });
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        const _this3 = this;

        const { isLoaded } = this.state;
        const _this$props2 = this.props;
        const { t } = _this$props2;
        const { isPaymentProcessing } = _this$props2;
        return /* #__PURE__ */ React.createElement(
          AdyenStyled,
          null,
          /* #__PURE__ */ React.createElement('div', {
            id: COMPONENT_CONTAINER_ID
          }),
          isLoaded &&
            /* #__PURE__ */ React.createElement(
              ConfirmButtonStyled,
              null,
              /* #__PURE__ */ React.createElement(
                Button,
                {
                  theme: 'confirm',
                  size: 'big',
                  onClickFn: function onClickFn() {
                    return _this3.checkout.submit();
                  },
                  disabled: isPaymentProcessing
                },
                isPaymentProcessing
                  ? /* #__PURE__ */ React.createElement(Loader, {
                      buttonLoader: true,
                      color: '#ffffff'
                    })
                  : t('Confirm')
              )
            )
        );
      }
    }
  ]);

  return Adyen;
})(Component);

Adyen.defaultProps = {
  t: function t(k) {
    return k;
  },
  onChange: function onChange() {},
  isPaymentProcessing: false
};
export { Adyen as PureAdyen };
export default withTranslation()(labeling()(Adyen));
