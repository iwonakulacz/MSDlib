import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { InputElementStyled, ErrorWrapper } from 'components/Input/InputStyled';
import Input from 'components/Input';
import EmailInput from './EmailInput';
var ERROR_MESSAGE = 'MOCK_ERROR_MESSAGE';
describe('EmailInput', function () {
  describe('@renders', function () {
    it('should render initial state', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(EmailInput, null));
      var inputComponent = wrapper.find(Input);
      expect(inputComponent).toHaveLength(1);
      expect(inputComponent.props().value).toBe('');
      var inputElement = wrapper.find(InputElementStyled);
      expect(inputElement).toHaveLength(1);
      expect(inputElement.props().type).toBe('email');
      expect(inputElement.props().autoComplete).toBe('off');
    });
    it('should show error message', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(EmailInput, {
        error: ERROR_MESSAGE
      }));
      var errorWrapper = wrapper.find(ErrorWrapper);
      expect(errorWrapper).toHaveLength(1);
      expect(errorWrapper.text()).toBe(ERROR_MESSAGE);
    });
  });
});