import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';
import { PureSubscriptionSwitchesList as SubscriptionSwitchesList } from './SubscriptionSwitchesList';
var SUBSCRIPTIONMOCK = {
  available: [{
    offerId: 'S582933670_ZW',
    status: 'active',
    expiresAt: 1587035728,
    nextPaymentPrice: 2.7,
    nextPaymentCurrency: 'EUR',
    paymentGateway: 'adyen',
    paymentMethod: 'card',
    offerTitle: 'Monthly subscription to pride&prejudice',
    period: 'month'
  }],
  unavailable: []
};
var showStory = false;

if (showStory) {
  storiesOf('MyAccount/PlanDetails/SubscriptionSwitchesList', module).addDecorator(jsxDecorator).addDecorator(withKnobs).addDecorator(function (story) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 600,
        backgroundColor: 'white',
        padding: 20,
        position: 'relative'
      }
    }, story());
  }).add('Switches List', function () {
    return /*#__PURE__*/React.createElement(SubscriptionSwitchesList, {
      isOfferSelected: false,
      switchSettings: SUBSCRIPTIONMOCK
    });
  });
}