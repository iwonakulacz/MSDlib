import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { PurePassword } from './Password';
import 'styles/index.scss';
storiesOf('MyAccount/UpdateProfile/Password', module).addDecorator(withKnobs).addDecorator(jsxDecorator).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 600,
      backgroundColor: 'white',
      position: 'relative'
    }
  }, story());
}).add('Default', function () {
  return /*#__PURE__*/React.createElement(PurePassword, {
    showInnerPopup: function showInnerPopup() {}
  });
});