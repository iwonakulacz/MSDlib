/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Input from 'components/Input';
import ResetPasswordRequest from 'api/Auth/resetPassword';
import Button from 'components/Button';
import EmailInput from 'components/EmailInput';
import PasswordReset, { PurePasswordReset } from './PasswordReset';
import { FormStyled } from './PasswordResetStyled';

jest.mock('api/Auth/resetPassword');
jest.mock('react-router-dom', function() {
  return {
    Link: function Link() {
      return /* #__PURE__ */ React.createElement('div', null);
    }
  };
});
const mockUrlProps = {
  location: {
    search: '?offer=123123'
  }
};
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
const MockEmailValue = 'mock@email.com';
const MockInvalidEmailValue = 'mock@.com';
const MockOfferId = '762736382';
const FuncMock = jest.fn();
describe('PasswordReset', function() {
  beforeEach(function() {
    jest.clearAllMocks();
  });
  describe('@renders', function() {
    it('should render initial state', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PasswordReset, {
          onSuccess: jest.fn(),
          urlProps: mockUrlProps
        })
      );
      const inputComponent = wrapper.find(Input);
      expect(inputComponent).toHaveLength(1);
      expect(inputComponent.props().error).toBe('');
      expect(inputComponent.props().value).toBe('');
      const buttons = wrapper.find(Button);
      expect(buttons).toHaveLength(2);
    });
  });
  describe('@events', function() {
    it('should update state on email input change', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PurePasswordReset, {
          onSuccess: jest.fn(),
          urlProps: mockUrlProps
        })
      );
      const inputComponent = wrapper.find(EmailInput);
      inputComponent.simulate('change', MockEmailValue);
      expect(wrapper.state().value).toBe(MockEmailValue);
    });
  });
  describe('@onSubmit', function() {
    it('should call onSuccess cb when email valid', function(done) {
      ResetPasswordRequest.mockResolvedValue({
        errors: []
      });
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PurePasswordReset, {
          onSuccess: FuncMock,
          urlProps: mockUrlProps
        })
      );
      const formComponent = wrapper.find(FormStyled);
      wrapper.setState({
        value: MockEmailValue,
        offerId: MockOfferId
      });
      formComponent.simulate('submit');
      setImmediate(function() {
        expect(wrapper.state().message).toBe('');
        expect(FuncMock).toHaveBeenCalled();
        done();
      });
    });
    it('should not call onSuccess cb when email is not correct', function(done) {
      ResetPasswordRequest.mockResolvedValue({
        errors: MockEmailValue
      });
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PurePasswordReset, {
          onSuccess: FuncMock,
          urlProps: mockUrlProps
        })
      );
      const formComponent = wrapper.find(FormStyled);
      wrapper.setState({
        value: MockEmailValue,
        offerId: MockOfferId
      });
      formComponent.simulate('submit');
      setImmediate(function() {
        expect(wrapper.state().message).not.toBe('');
        expect(FuncMock).not.toHaveBeenCalled();
        done();
      });
    });
    it('should set error when email is not properly formatted', function(done) {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PurePasswordReset, {
          onSuccess: FuncMock,
          urlProps: mockUrlProps
        })
      );
      const formComponent = wrapper.find(FormStyled);
      wrapper.setState({
        value: MockInvalidEmailValue,
        offerId: MockOfferId
      });
      formComponent.simulate('submit');
      setImmediate(function() {
        expect(wrapper.state().message).not.toBe('');
        expect(FuncMock).not.toHaveBeenCalled();
        done();
      });
    });
  });
});
