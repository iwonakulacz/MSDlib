import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, select } from '@storybook/addon-knobs';
import SubscriptionIcon from './SubscriptionIcon';

storiesOf('Common/SubscriptionIcon', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(function(story) {
    return /* #__PURE__ */ React.createElement(
      'div',
      {
        style: {
          width: 200,
          backgroundColor: 'white',
          padding: 20,
          position: 'relative'
        }
      },
      story()
    );
  })
  .add('Default', function() {
    return /* #__PURE__ */ React.createElement(SubscriptionIcon, {
      period: select('Period', [
        'default',
        'week',
        'month',
        '3months',
        '6months',
        'year'
      ])
    });
  });
