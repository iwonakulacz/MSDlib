/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import MyAccountContent from './MyAccountContent';

describe('<MyAccountContent/>', function() {
  const wrapper = mount(
    /* #__PURE__ */ React.createElement(MyAccountContent, null)
  );
  jest.mock('containers/labeling', function() {
    return function() {
      return function(Component) {
        return function(props) {
          return /* #__PURE__ */ React.createElement(Component, {
            t: function t(k) {
              return k;
            },
            ...props
          });
        };
      };
    };
  });
  jest.mock('react-i18next', function() {
    return {
      withTranslation: function withTranslation() {
        return function(Component) {
          return function(props) {
            return /* #__PURE__ */ React.createElement(Component, {
              t: function t(k) {
                return k;
              },
              ...props
            });
          };
        };
      }
    };
  });
  describe('@renders', function() {
    it('should render initial state', function() {
      expect(wrapper.prop('children')).toBe('');
    });
  });
});
