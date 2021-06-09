import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
import _inherits from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import submitPaymentWithoutDetails from 'api/Offer/submitPaymentWithoutDetails';
import { getData } from 'util/appConfigHelper';
import { periodMapper, dateFormat } from 'util/planHelper';
import labeling from 'containers/labeling';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { WrapStyled, TitleStyled, DescriptionStyled, SubTextStyled, CardStyled, SubscriptionIconStyled, ButtonWrapperStyled, ErrorMessageStyled } from './FreeOfferStyled';

var FreeOffer = /*#__PURE__*/function (_Component) {
  _inherits(FreeOffer, _Component);

  var _super = _createSuper(FreeOffer);

  function FreeOffer(props) {
    var _this;

    _classCallCheck(this, FreeOffer);

    _this = _super.call(this, props);

    _this.generateDescriptionForFreeOffer = function (period, expiresAt, startTime) {
      var offerType = getData('CLEENG_OFFER_TYPE');

      switch (offerType) {
        case 'S':
          {
            return "Free subscription";
          }

        case 'P':
          {
            if (!period) {
              return "Access until ".concat(dateFormat(expiresAt, true));
            }

            return "".concat(periodMapper[period].accessText, " free pass");
          }

        case 'E':
          {
            return "Free event ".concat(startTime ? dateFormat(startTime, true) : '');
          }

        case 'R':
          {
            return "".concat(periodMapper[period].accessText, " free access");
          }

        case 'A':
          return 'Unlimited access';

        default:
          return '';
      }
    };

    _this.getAccessToFreeOffer = function () {
      var _this$props = _this.props,
          onPaymentComplete = _this$props.onPaymentComplete,
          t = _this$props.t;

      _this.setState({
        isLoading: true,
        error: ''
      });

      submitPaymentWithoutDetails().then(function (paymentReponse) {
        if (paymentReponse.errors.length) {
          if (paymentReponse.errors[0].includes("Order doesn't have paymentMethodId")) {
            _this.setState({
              isLoading: false,
              error: t('Unable to proceed, because of wrong offer settings. Please, contact the owner of the offer')
            });
          } else {
            _this.setState({
              isLoading: false,
              error: t('Oops, something went wrong! Please, reload the page and try again')
            });
          }
        } else {
          onPaymentComplete();
        }
      });
    };

    _this.state = {
      isLoading: false,
      error: ''
    };
    return _this;
  }

  _createClass(FreeOffer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          icon = _this$props2.icon,
          period = _this$props2.period,
          expiresAt = _this$props2.expiresAt,
          startTime = _this$props2.startTime,
          title = _this$props2.title,
          t = _this$props2.t;
      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          error = _this$state.error;
      return /*#__PURE__*/React.createElement(WrapStyled, null, /*#__PURE__*/React.createElement(CardStyled, null, /*#__PURE__*/React.createElement(SubscriptionIconStyled, {
        icon: icon
      }), /*#__PURE__*/React.createElement(TitleStyled, null, title), /*#__PURE__*/React.createElement(DescriptionStyled, null, this.generateDescriptionForFreeOffer(period, expiresAt, startTime)), /*#__PURE__*/React.createElement(ButtonWrapperStyled, null, /*#__PURE__*/React.createElement(Button, {
        theme: "confirm",
        width: "200px",
        onClickFn: this.getAccessToFreeOffer,
        disabled: isLoading
      }, isLoading ? /*#__PURE__*/React.createElement(Loader, {
        buttonLoader: true,
        color: "#ffffff"
      }) : t('Get Access')), error && /*#__PURE__*/React.createElement(ErrorMessageStyled, null, error)), /*#__PURE__*/React.createElement(SubTextStyled, null, t('Free, no additional cost'))));
    }
  }]);

  return FreeOffer;
}(Component);

FreeOffer.defaultProps = {
  icon: '',
  title: '',
  period: '',
  expiresAt: null,
  startTime: null,
  t: function t(k) {
    return k;
  }
};
export { FreeOffer as PureFreeOffer };
export default withTranslation()(labeling()(FreeOffer));