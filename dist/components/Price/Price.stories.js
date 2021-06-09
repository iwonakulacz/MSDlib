import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import Price from './Price';
storiesOf('Common/Price', module).addDecorator(jsxDecorator).addDecorator(withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      backgroundColor: 'white',
      padding: 20,
      position: 'relative'
    }
  }, story());
}).add('Default', function () {
  return /*#__PURE__*/React.createElement(Price, {
    currency: text('Currency', '$'),
    price: number('Price', '20'),
    period: text('Period', 'month')
  });
});