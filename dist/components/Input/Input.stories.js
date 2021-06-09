import _regeneratorRuntime from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator';
import _asyncToGenerator from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { jsxDecorator } from 'storybook-addon-jsx';
import { State, Store } from '@sambego/storybook-state';
import 'styles/index.scss';
import Input from './Input';

const wrapperState = new Store({
  value: ''
});
const inputTypes = {
  text: 'text',
  email: 'email',
  password: 'password'
};
storiesOf('Checkout/Input', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
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
  .addDecorator(function(story) {
    return /* #__PURE__ */ React.createElement(
      'div',
      {
        style: {
          width: 400,
          backgroundColor: 'white',
          padding: '20px 0'
        }
      },
      story()
    );
  })
  .add('All options', function(state) {
    return /* #__PURE__ */ React.createElement(Input, {
      type: select('type', inputTypes),
      placeholder: text('placeholder', 'Type here...'),
      onSubmit: /* #__PURE__ */ _asyncToGenerator(
        /* #__PURE__ */ _regeneratorRuntime.mark(function _callee() {
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  return _context.abrupt('return', action('onSubmit'));

                case 1:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        })
      ),
      value: state.value,
      onChange: function onChange(e) {
        return wrapperState.set({
          value: e
        });
      },
      error: text('error', ''),
      showVisibilityIcon: boolean('showVisibilityIcon', false)
    });
  });
