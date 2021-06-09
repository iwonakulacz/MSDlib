/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import Button from 'components/Button';
import resetPasswordRequest from 'api/Auth/resetPassword';
import { PureEditPassword } from './EditPassword';

jest.mock('api/Auth/resetPassword');
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
const hideInnerPopupMock = jest.fn();
describe('<EditPassword/>', function() {
  afterEach(function() {
    return jest.clearAllMocks();
  });
  describe('@renders', function() {
    it('should render initial state', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureEditPassword, {
          hideInnerPopup: hideInnerPopupMock
        })
      );
      expect(wrapper.state('step')).toBe(1);
      expect(wrapper.state('isLoading')).toBe(false);
      expect(wrapper.state('isError')).toBe(false);
    });
  });
  describe('@actions', function() {
    it('should close popup on "no,thanks" button click', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureEditPassword, {
          hideInnerPopup: hideInnerPopupMock
        })
      );
      const buttons = wrapper.find(Button);
      const cancelButton = buttons.filterWhere(function(button) {
        return button.prop('theme') === 'simple';
      });
      expect(cancelButton).toHaveLength(1);
      cancelButton.simulate('click');
      expect(hideInnerPopupMock).toHaveBeenCalledTimes(1);
    });
    it('should reset password on button click', function(done) {
      resetPasswordRequest.mockResolvedValue({
        responseData: {},
        errors: []
      });
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureEditPassword, {
          hideInnerPopup: hideInnerPopupMock
        })
      );
      const buttons = wrapper.find(Button);
      wrapper.setState({
        step: 1
      });
      const confirmButton = buttons.filterWhere(function(button) {
        return button.prop('theme') === 'confirm';
      });
      confirmButton.simulate('click');
      setImmediate(function() {
        expect(resetPasswordRequest).toHaveBeenCalledTimes(1);
        expect(wrapper.state('step')).toBe(2);
        expect(wrapper.state('isLoading')).toBe(false);
        done();
      });
    });
    it('should logout customer on click button in step 2', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureEditPassword, {
          hideInnerPopup: hideInnerPopupMock
        })
      );
      const buttons = wrapper.find(Button);
      const confirmButton = buttons.filterWhere(function(button) {
        return button.prop('theme') === 'confirm';
      });
      expect(confirmButton).toHaveLength(1);
      wrapper.setState({
        step: 2
      });
      expect(wrapper.state('step')).toBe(2);
      confirmButton.simulate('click');
      expect(hideInnerPopupMock).toHaveBeenCalledTimes(1);
    });
  });
});
