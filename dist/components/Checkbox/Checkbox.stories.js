import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Checkbox from './Checkbox';
storiesOf('Common/Checkbox', module).addDecorator(jsxDecorator).addDecorator(withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      backgroundColor: 'white',
      padding: 20,
      position: 'relative'
    }
  }, story());
}).add('All options', function () {
  return /*#__PURE__*/React.createElement(Checkbox, {
    checked: boolean('checked', false),
    error: text('consents error', 'Please agree on all consents to use this service'),
    required: boolean('required', false)
  }, text('checkbox label', 'I accept the Terms and Conditions of Cleeng'));
});