/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { PureMyAccountError } from './MyAccountError';
import { IconStyled } from './MyAccountErrorStyled';

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
describe('<MyAccountError/>', function() {
  afterEach(function() {
    jest.clearAllMocks();
  });
  describe('@renders', function() {
    it('should render initial state', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PureMyAccountError, null)
      );
      expect(wrapper.find(IconStyled).exists()).toBe(false);
    });
  });
});
