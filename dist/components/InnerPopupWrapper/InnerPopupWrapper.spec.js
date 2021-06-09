/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { PureInnerPopupWrapper } from './InnerPopupWrapper';
import { DotStyled, HeaderTitleStyled } from './InnerPopupWrapperStyled';
import 'jest-styled-components';

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
const defaultProps = {
  steps: 2,
  popupTitle: 'title',
  currentStep: 1,
  children: /* #__PURE__ */ React.createElement('p', null, 'mock'),
  isError: false
};
describe('<InnerPopupWrapper/>', function() {
  afterEach(function() {
    return jest.clearAllMocks();
  });
  describe('@renders', function() {
    it('should render initial state', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureInnerPopupWrapper, defaultProps)
      );
      expect(wrapper.find(DotStyled)).toHaveLength(2);
      expect(wrapper.find(HeaderTitleStyled).text()).toBe('title');
    });
  });
});
