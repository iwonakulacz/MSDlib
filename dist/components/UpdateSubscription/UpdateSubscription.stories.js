import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { PureUpdateSubscription } from './UpdateSubscription';

const showStory = false;

if (showStory) {
  storiesOf('MyAccount/PlanDetails/UpdateSubscription', module)
    .addDecorator(jsxDecorator)
    .addDecorator(function(story) {
      return /* #__PURE__ */ React.createElement(
        'div',
        {
          style: {
            width: 600,
            backgroundColor: 'white',
            padding: 20,
            position: 'relative'
          }
        },
        story()
      );
    })
    .add('Unsubscribe', function() {
      return /* #__PURE__ */ React.createElement(PureUpdateSubscription, {
        action: 'unsubscribe',
        updateList: function updateList() {},
        offerDetails: {
          offerId: 'S568296139_ZW',
          status: 'active',
          expiresAt: 1615897260,
          nextPaymentPrice: 22.15,
          nextPaymentCurrency: 'EUR',
          paymentGateway: 'adyen',
          paymentMethod: 'card',
          offerTitle: 'Annual subscription to Sport TV',
          period: 'year',
          totalPrice: 90
        },
        hideInnerPopup: function hideInnerPopup() {}
      });
    })
    .add('Resubscribe', function() {
      return /* #__PURE__ */ React.createElement(PureUpdateSubscription, {
        action: 'resubscribe',
        updateList: function updateList() {},
        hideInnerPopup: function hideInnerPopup() {},
        offerDetails: {
          offerId: 'S568296139_ZW',
          status: 'cancelled',
          expiresAt: 1615897260,
          nextPaymentPrice: 22.15,
          nextPaymentCurrency: 'EUR',
          paymentGateway: 'adyen',
          paymentMethod: 'card',
          offerTitle: 'Annual subscription to Sport TV',
          period: 'year',
          totalPrice: 90
        }
      });
    });
}
