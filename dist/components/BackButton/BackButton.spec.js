/* eslint-disable react/jsx-props-no-spreading */
import { mount } from 'enzyme';
import React from 'react';
import { PureBackButton } from './BackButton';
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
jest.mock('react-router-dom', function () {
  return {
    Link: function Link() {
      return /*#__PURE__*/React.createElement("div", null);
    }
  };
});
describe('<BackButton/>', function () {
  describe('@renders', function () {
    it('should render initial state', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(PureBackButton, null));
      expect(wrapper.prop('isMyAccount')).toBe(false);
    });
    it('should change pathname when isMyAccount', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(PureBackButton, {
        isMyAccount: true
      }));
      expect(wrapper.prop('isMyAccount')).toBe(true);
    });
  });
});