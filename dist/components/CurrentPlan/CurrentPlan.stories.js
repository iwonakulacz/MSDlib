import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { PureCurrentPlan as CurrentPlan } from './CurrentPlan';
var SUBSCRIPTIONMOCK = [{
  offerId: 'S582933870_ZW',
  status: 'active',
  expiresAt: 1587035728,
  nextPaymentPrice: 2.7,
  nextPaymentCurrency: 'EUR',
  paymentGateway: 'adyen',
  paymentMethod: 'card',
  offerTitle: 'Monthly subscription to pride&prejudice',
  period: 'month'
}];
var showStory = false;

if (showStory) {
  storiesOf('MyAccount/PlanDetails/CurrentPlan', module).addDecorator(withKnobs).addDecorator(jsxDecorator).addDecorator(function (story) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 600,
        backgroundColor: 'white',
        padding: 20,
        position: 'relative'
      }
    }, story());
  }).add('Active subscription', function () {
    return /*#__PURE__*/React.createElement(CurrentPlan, {
      subscriptions: SUBSCRIPTIONMOCK,
      isLoading: boolean('isLoading', false),
      setOfferToSwitch: function setOfferToSwitch() {},
      showInnerPopup: function showInnerPopup() {}
    });
  }).add('No subscription', function () {
    return /*#__PURE__*/React.createElement(CurrentPlan, {
      subscriptions: [],
      isLoading: false,
      setOfferToSwitch: function setOfferToSwitch() {},
      showInnerPopup: function showInnerPopup() {}
    });
  });
}