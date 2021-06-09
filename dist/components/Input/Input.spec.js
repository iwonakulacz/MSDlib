import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import Input from './Input';
import { InputElementStyled } from './InputStyled';
jest.useFakeTimers();
describe('Input', function () {
  describe('@renders', function () {
    it('should render initial state', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(Input, null));
      var inputElement = wrapper.find(InputElementStyled);
      expect(inputElement).toHaveLength(1);
      expect(inputElement.props().type).toBe('text');
      expect(inputElement.props().autoComplete).toBe('off');
    });
  });
  describe('@events', function () {
    it('should call onChange cb when input change', function () {
      var onChangeMock = jest.fn();
      var MockInputValue = 'MOCKVALUE';
      var wrapper = mount( /*#__PURE__*/React.createElement(Input, {
        onChange: onChangeMock
      }));
      var input = wrapper.find(InputElementStyled);
      input.simulate('change', {
        target: {
          value: MockInputValue
        }
      });
      expect(onChangeMock).toHaveBeenCalledWith(MockInputValue);
    });
  });
});