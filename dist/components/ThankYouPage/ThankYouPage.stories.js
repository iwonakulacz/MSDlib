import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { PureThankYouPage } from './ThankYouPage';

storiesOf('Pages/ThankYouPage', module)
  .addDecorator(jsxDecorator)
  .addDecorator(function(story) {
    return /* #__PURE__ */ React.createElement(
      'div',
      {
        style: {
          width: 700,
          backgroundColor: 'white',
          position: 'relative'
        }
      },
      story()
    );
  })
  .add('Default', function() {
    return /* #__PURE__ */ React.createElement(PureThankYouPage, null);
  });
