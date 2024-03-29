import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import googleIcon from 'assets/images/google.png';
import Button from './Button';
storiesOf('Common/Button', module).addDecorator(jsxDecorator).addDecorator(withKnobs).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 400,
      backgroundColor: 'white',
      padding: 20,
      position: 'relative'
    }
  }, story());
}).add('All options', function () {
  return /*#__PURE__*/React.createElement(Button, {
    theme: select('theme', ['primary', 'secondary', 'simple', 'navLink', 'link']),
    size: select('size', ['big']),
    fontSize: text('fontSize'),
    margin: text('margin'),
    fontWeight: text('fontWeight'),
    width: text('width'),
    disabled: boolean('disabled'),
    icon: select('icon', [null, googleIcon])
  }, "Sample button");
});