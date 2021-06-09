import _objectSpread from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";

/* eslint-disable no-nested-ternary */
import React from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import { SubscriptionStyled, SubscriptionActionsStyled, SimpleButtonStyled } from 'components/CurrentPlan/CurrentPlanStyled';
import SubscriptionCard from 'components/SubscriptionCard';
import MyAccountError from 'components/MyAccountError';
import { ReactComponent as selectPlanIcon } from 'assets/images/selectPlan.svg';
import { SkeletonCard } from 'components/CurrentPlan/CurrentPlan';
import mapErrorToText from './helper';

var SubscriptionSwitchesList = function SubscriptionSwitchesList(_ref) {
  var switchSettings = _ref.switchSettings,
      showInnerPopup = _ref.showInnerPopup,
      isOfferSelected = _ref.isOfferSelected,
      isLoading = _ref.isLoading,
      errors = _ref.errors,
      t = _ref.t;

  if (isLoading) {
    return /*#__PURE__*/React.createElement(SkeletonCard, null);
  }

  if (errors.length) {
    return /*#__PURE__*/React.createElement(MyAccountError, {
      generalError: true
    });
  }

  if (!isOfferSelected) {
    return /*#__PURE__*/React.createElement(MyAccountError, {
      icon: selectPlanIcon,
      title: t('Start by selecting the plan that would like to switch from'),
      margin: "0 auto"
    });
  }

  var areAvailable = !!(switchSettings.available && switchSettings.available.length);
  var areUnAvailable = !!(switchSettings.unavailable && switchSettings.unavailable.length);
  var allSwitchesBlocked = switchSettings.unavailableReason;

  if (allSwitchesBlocked) {
    var error = mapErrorToText[allSwitchesBlocked.code] ? mapErrorToText[allSwitchesBlocked.code] : mapErrorToText.DEFAULT;
    return /*#__PURE__*/React.createElement(MyAccountError, {
      icon: error.icon,
      title: error.title,
      subtitle: error.subtitle,
      margin: "0 auto",
      fullWidth: true
    });
  }

  if (!areAvailable && !areUnAvailable) {
    return /*#__PURE__*/React.createElement(MyAccountError, {
      icon: selectPlanIcon,
      title: t("Looks like there aren't any options for switching from your current plan right now"),
      margin: "0 auto"
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, areAvailable && switchSettings.available.map(function (subItem) {
    return /*#__PURE__*/React.createElement(SubscriptionStyled, {
      key: subItem.toOfferId
    }, /*#__PURE__*/React.createElement(SubscriptionCard, {
      period: subItem.period,
      title: subItem.title,
      currency: subItem.nextPaymentPriceCurrencySymbol,
      price: Math.round(subItem.nextPaymentPrice * 100) / 100
    }), /*#__PURE__*/React.createElement(SubscriptionActionsStyled, null, /*#__PURE__*/React.createElement(SimpleButtonStyled, {
      onClickFn: function onClickFn() {
        showInnerPopup({
          type: 'switchPlan',
          data: {
            offerData: _objectSpread({}, subItem)
          }
        });
      }
    }, t('Choose'))));
  }), areUnAvailable && switchSettings.unavailable.map(function (subItem) {
    return /*#__PURE__*/React.createElement(SubscriptionStyled, {
      key: subItem.toOfferId
    }, /*#__PURE__*/React.createElement(SubscriptionCard, {
      period: subItem.period,
      title: subItem.title,
      currency: subItem.nextPaymentPriceCurrencySymbol,
      price: Math.round(subItem.nextPaymentPrice * 100) / 100,
      showInfoBox: subItem.reason.code
    }), /*#__PURE__*/React.createElement(SubscriptionActionsStyled, null, /*#__PURE__*/React.createElement(SimpleButtonStyled, {
      disabled: true
    }, t('Choose'))));
  }));
};

SubscriptionSwitchesList.defaultProps = {
  switchSettings: {},
  showInnerPopup: function showInnerPopup() {},
  errors: [],
  isLoading: false,
  t: function t(k) {
    return k;
  }
};
export { SubscriptionSwitchesList as PureSubscriptionSwitchesList };
export default withTranslation()(labeling()(SubscriptionSwitchesList));