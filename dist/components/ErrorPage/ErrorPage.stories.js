import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import ErrorPage from './ErrorPage';
import 'styles/index.scss';
storiesOf('Pages/ErrorPage', module).addDecorator(withKnobs).addDecorator(jsxDecorator).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 600,
      backgroundColor: 'white'
    }
  }, story());
}).add('All options', function () {
  return /*#__PURE__*/React.createElement(ErrorPage, {
    type: select('Types', ['offerNotExist', 'generalError', 'alreadyHaveAccess', 'cannotPurchase']),
    error: text('Error label', '')
  });
});