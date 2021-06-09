import React from 'react';
import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import PasswordInput from './PasswordInput';

const wrapperState = new Store({
  value: '',
  showPassword: false
});
const ERROR_MESSAGES = {
  noError: '',
  wrongFormat:
    'Your password must contain at least 8 characters, including 1 digit.',
  fillField: 'Please fill out this field.'
};
storiesOf('Checkout/PasswordInput', module)
  .addDecorator(jsxDecorator)
  .addDecorator(withKnobs)
  .addDecorator(function(story) {
    return /* #__PURE__ */ React.createElement(
      'div',
      {
        style: {
          width: 400,
          backgroundColor: 'white',
          paddingBottom: 20
        }
      },
      story()
    );
  })
  .addDecorator(function(story) {
    return /* #__PURE__ */ React.createElement(
      State,
      {
        store: wrapperState
      },
      function(state) {
        return story(state);
      }
    );
  })
  .add('All options', function(state) {
    return /* #__PURE__ */ React.createElement(PasswordInput, {
      handleClickShowPassword: function handleClickShowPassword() {
        return wrapperState.set({
          showPassword: !state.showPassword
        });
      },
      error: select('Error message', ERROR_MESSAGES),
      value: state.value,
      onChange: function onChange(e) {
        return wrapperState.set({
          value: e
        });
      },
      showVisibilityIcon: boolean('showVisibilityIcon', true),
      showPassword: state.showPassword || boolean('showPassword', false),
      showPasswordStrength: boolean('showPasswordStrength', false)
    });
  });
