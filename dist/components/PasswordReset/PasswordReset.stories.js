import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import 'styles/index.scss';
import { PurePasswordReset } from './PasswordReset';
storiesOf('Pages/PasswordReset', module).addDecorator(withKnobs).addDecorator(jsxDecorator).addDecorator(StoryRouter()).addDecorator(function (story) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 700,
      backgroundColor: 'white',
      position: 'relative'
    }
  }, story());
}).add('Default', function () {
  return /*#__PURE__*/React.createElement(PurePasswordReset, {
    onSuccess: action('onSuccess'),
    urlProps: {
      location: {
        search: 'http://cleeng.com/'
      }
    }
  });
});