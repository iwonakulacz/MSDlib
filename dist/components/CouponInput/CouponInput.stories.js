import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { jsxDecorator } from 'storybook-addon-jsx';
import { State, Store } from '@sambego/storybook-state';
import { MESSAGE_TYPE_FAIL, MESSAGE_TYPE_SUCCESS } from 'components/Input';
import { PureCouponInput as CouponInput } from './CouponInput';
import 'styles/index.scss';

const wrapperState = new Store({
  value: '',
  isOpened: false
});

const CouponInputFeedbackWrapper = /* #__PURE__ */ (function(_Component) {
  _inherits(CouponInputFeedbackWrapper, _Component);

  const _super = _createSuper(CouponInputFeedbackWrapper);

  function CouponInputFeedbackWrapper(props) {
    let _this;

    _classCallCheck(this, CouponInputFeedbackWrapper);

    _this = _super.call(this, props);

    _this.onSubmit = function(value) {
      action('onSubmit')(value);
      const { messageType } = _this.props;
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          _this.setState({
            showMessage: true
          });

          if (messageType === MESSAGE_TYPE_SUCCESS) {
            resolve();
          } else {
            reject();
          }
        }, 200);
      });
    };

    _this.state = {
      showMessage: false,
      inputValue: ''
    };
    return _this;
  }

  _createClass(CouponInputFeedbackWrapper, [
    {
      key: 'render',
      value: function render() {
        const _this2 = this;

        const _this$props = this.props;
        const { messageType } = _this$props;
        const { message } = _this$props;
        const _this$state = this.state;
        const { showMessage } = _this$state;
        const { inputValue } = _this$state;
        return /* #__PURE__ */ React.createElement(CouponInput, {
          onSubmit: this.onSubmit,
          showMessage,
          message,
          messageType,
          value: inputValue,
          onChange: function onChange(e) {
            return _this2.setState({
              inputValue: e
            });
          }
        });
      }
    }
  ]);

  return CouponInputFeedbackWrapper;
})(Component);

storiesOf('Checkout/CouponInput', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)
  .addDecorator(function(story) {
    return /* #__PURE__ */ React.createElement(
      'div',
      {
        style: {
          width: 600,
          backgroundColor: 'white',
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 20
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
    return /* #__PURE__ */ React.createElement(CouponInput, {
      value: state.value,
      onChange: function onChange(e) {
        return wrapperState.set({
          value: e
        });
      },
      showMessage: boolean('showMessage', false),
      message: text('message', 'Message'),
      messageType: select(
        'messageType',
        {
          success: MESSAGE_TYPE_SUCCESS,
          fail: MESSAGE_TYPE_FAIL
        },
        MESSAGE_TYPE_SUCCESS
      ),
      onSubmit: action('onSubmit')
    });
  })
  .add('UC: Accept any code', function() {
    return /* #__PURE__ */ React.createElement(CouponInputFeedbackWrapper, {
      message: 'Your coupon has been applied! Enjoy your 50% discount.',
      messageType: MESSAGE_TYPE_SUCCESS
    });
  })
  .add('UC: Reject any code', function() {
    return /* #__PURE__ */ React.createElement(CouponInputFeedbackWrapper, {
      message:
        'This is not a valid coupon code for this offer. Please check the code on your coupon and try again.',
      messageType: MESSAGE_TYPE_FAIL
    });
  });
