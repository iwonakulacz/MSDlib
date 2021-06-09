import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, select, text, number, boolean } from '@storybook/addon-knobs';
import { PureSubscriptionCard as SubscriptionCard } from './SubscriptionCard';
storiesOf('Common/SubscriptionCard', module).addDecorator(jsxDecorator).addDecorator(withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 600,
      backgroundColor: 'white',
      padding: 20,
      position: 'relative'
    }
  }, story());
}).add('Default', function () {
  return /*#__PURE__*/React.createElement(SubscriptionCard, {
    period: (select('Period', ['week', 'month', '3months', '6months', 'year']), 'month'),
    title: text('Title', 'Weekly subscription to Company'),
    description: text('Description', 'Some description for this offer'),
    currency: select('Currency', ['$', '€', 'PLN']),
    price: number('Price', 20),
    isSubscriptionOffer: boolean('isSubscriptionOffer', true)
  });
});