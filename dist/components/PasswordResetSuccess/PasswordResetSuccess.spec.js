/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Router } from 'react-router-dom';
import { mount } from 'enzyme';
import 'jest-styled-components';
import PasswordResetSuccess from './PasswordResetSuccess';
import { StyledLink, StyledMessage } from './PasswordResetSuccessStyled';

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
describe('PasswordResetSuccess', function() {
  describe('@renders', function() {
    it('should render initial state', function() {
      const MOCK_EMAIL = 'gummybear@cleeng.com';
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(
          Router,
          {
            history: {
              listen: jest.fn(),
              createHref: jest.fn(),
              location: {
                pathname: ''
              }
            }
          },
          /* #__PURE__ */ React.createElement(PasswordResetSuccess, {
            email: MOCK_EMAIL
          })
        )
      );
      const messageComponent = wrapper.find(StyledMessage);
      expect(messageComponent).toHaveLength(1);
      expect(messageComponent.text()).toBe(
        'Please check your inbox at {{email}}'
      );
      const linkComponent = wrapper.find(StyledLink);
      expect(linkComponent).toHaveLength(1);
    });
  });
});
