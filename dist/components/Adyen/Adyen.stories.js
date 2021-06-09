import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { action } from '@storybook/addon-actions';
import { PureAdyen } from './Adyen';
import 'styles/index.scss';

storiesOf('Checkout/Adyen', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .addDecorator(function(story) {
    return /* #__PURE__ */ React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 40
        }
      },
      story()
    );
  })
  .add('Default', function() {
    return /* #__PURE__ */ React.createElement(PureAdyen, {
      onSubmit: action('onSubmit')
    });
  });
