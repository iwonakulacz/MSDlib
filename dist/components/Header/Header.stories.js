import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import 'styles/index.scss';
import { PureBackButton } from 'components/BackButton/BackButton';
import Header from './Header';
storiesOf('Checkout/Header', module).addDecorator(jsxDecorator).addDecorator(withKnobs).addDecorator(StoryRouter()).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 600,
      backgroundColor: '#ffffff',
      position: 'relative'
    }
  }, story());
}).add('Default - with logo', function () {
  return /*#__PURE__*/React.createElement(Header, null);
}).add('With back to login button', function () {
  return /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(PureBackButton, null));
});