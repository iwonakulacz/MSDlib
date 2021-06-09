import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import Footer from './Footer';
import 'styles/index.scss';

storiesOf('Checkout/Footer', module)
  .addDecorator(jsxDecorator)
  .addDecorator(function(story) {
    return /* #__PURE__ */ React.createElement(
      'div',
      {
        style: {
          width: '600px',
          height: '36px',
          background: '#ffffff',
          position: 'relative'
        }
      },
      story()
    );
  })
  .add('Default', function() {
    return /* #__PURE__ */ React.createElement(Footer, null);
  });
