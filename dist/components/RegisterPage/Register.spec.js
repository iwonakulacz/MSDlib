/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { PureRegister } from './Register';

jest.mock('react-router-dom', function() {
  return {
    Link: function Link() {
      return /* #__PURE__ */ React.createElement('div', null);
    }
  };
});
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
const mockUrlProps = {
  location: {
    search: '?123123'
  }
};
describe('Register Page', function() {
  describe('@renders', function() {
    it('should update state when offer not exist', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureRegister, {
          urlProps: mockUrlProps
        })
      );
      wrapper.instance().setOfferError(true);
      expect(wrapper.state().isOfferError).toBe(true);
    });
  });
});
