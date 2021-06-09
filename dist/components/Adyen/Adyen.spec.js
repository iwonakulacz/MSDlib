import _classCallCheck from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import Adyen from './Adyen';
jest.mock('containers/labeling', function () {
  return function () {
    return function (Component) {
      return function (props) {
        return /*#__PURE__*/React.createElement(Component, Object.assign({
          t: function t(k) {
            return k;
          }
        }, props));
      };
    };
  };
});
jest.mock('react-i18next', function () {
  return {
    withTranslation: function withTranslation() {
      return function (Component) {
        return function (props) {
          return /*#__PURE__*/React.createElement(Component, Object.assign({
            t: function t(k) {
              return k;
            }
          }, props));
        };
      };
    }
  };
});
var mockOnSubmit = jest.fn();
var mockOnChange = jest.fn();

var MockAdyenCheckout = function MockAdyenCheckout(configuration) {
  _classCallCheck(this, MockAdyenCheckout);

  this.create = function (paymentMethod) {
    expect(paymentMethod).toBe('card');
    return {
      mount: function mount(componentContainerId) {
        return expect(componentContainerId).toBe('#component-container');
      }
    };
  };

  expect(configuration).toStrictEqual({
    environment: 'test',
    onSubmit: mockOnSubmit,
    onChange: mockOnChange,
    clientKey: 'foo',
    showPayButton: false
  });
};

describe('Adyen', function () {
  it('calls Adyen API', function () {
    window.AdyenCheckout = MockAdyenCheckout;
    window.ENVIRONMENT_CONFIGURATION = {
      ADYEN_CLIENT_KEY: 'foo'
    };
    shallow( /*#__PURE__*/React.createElement(Adyen, {
      onSubmit: mockOnSubmit,
      onChange: mockOnChange
    })); // assertions are inside the mock class functions
  });
});