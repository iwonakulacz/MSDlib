import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import { MESSAGE_TYPE_SUCCESS } from 'components/Input/InputConstants';
import Button from 'components/Button';
import { PureCouponInput as CouponInput } from './CouponInput';
import { InputElementStyled, MessageStyled, CloseButtonStyled } from './CouponInputStyled';
jest.useFakeTimers();
var onSubmit = jest.fn().mockResolvedValue({});
var onClose = jest.fn();
var MOCK_MESSAGE_1 = 'MOCK_MESSAGE_1';
var MOCK_MESSAGE_2 = 'MOCK_MESSAGE_2';
var DELAY = 5000;
describe('CouponInput', function () {
  describe('@renders', function () {
    it('should render initial state', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(CouponInput, {
        onSubmit: onSubmit
      }));
      var inputComponent = wrapper.find(InputElementStyled);
      expect(inputComponent).toHaveLength(1);
      expect(wrapper.props().couponLoading).toBe(false);
      expect(wrapper.props().showMessage).toBe(false);
      var inputElement = wrapper.find(InputElementStyled);
      expect(inputElement).toHaveLength(1);
      expect(inputElement.props().placeholder).toBe('Your coupon');
      expect(inputElement.props().autoComplete).toBe('off');
    });
    it('should display message according to props', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(CouponInput, {
        onSubmit: onSubmit,
        showMessage: true,
        message: MOCK_MESSAGE_1,
        messageType: MESSAGE_TYPE_SUCCESS
      }));
      wrapper.setState({
        isOpened: true
      });
      var messageEl = wrapper.find(MessageStyled);
      expect(messageEl.text()).toBe(MOCK_MESSAGE_1);
      expect(messageEl).toHaveStyleRule('opacity', '1');
    });
    it("shouldn't display message if not specified", function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(CouponInput, {
        onSubmit: onSubmit,
        message: MOCK_MESSAGE_1,
        messageType: MESSAGE_TYPE_SUCCESS
      }));
      wrapper.setState({
        isOpened: true
      });
      var messageEl = wrapper.find(MessageStyled);
      expect(messageEl.text()).toBe(MOCK_MESSAGE_1);
      expect(messageEl).toHaveStyleRule('opacity', '0');
    });
  });
  describe('@events', function () {
    it('should call onChange cb when input change', function () {
      var onChangeMock = jest.fn();
      var MockInputValue = 'MOCKVALUE';
      var wrapper = mount( /*#__PURE__*/React.createElement(CouponInput, {
        onChange: onChangeMock,
        onSubmit: onSubmit
      }));
      var input = wrapper.find(InputElementStyled);
      input.simulate('change', {
        target: {
          value: MockInputValue
        }
      });
      expect(onChangeMock).toHaveBeenCalledWith(MockInputValue);
    });
    it('should call onSubmit when enter is pressed', function (done) {
      onSubmit.mockClear();
      var mockInputValue = 'MOCK_INPUT_VALUE';
      var wrapper = mount( /*#__PURE__*/React.createElement(CouponInput, {
        onSubmit: onSubmit
      }));
      var input = wrapper.find(InputElementStyled);
      input.blur = jest.fn();
      input.value = mockInputValue;
      input.simulate('keydown', {
        key: 'Enter',
        target: input
      });
      setImmediate(function () {
        expect(onSubmit).toHaveBeenCalledWith(mockInputValue);
        expect(wrapper.state()).toMatchObject({
          suppressMessage: false
        });
        done();
      });
    });
    it('should not call onSubmit when any other key is pressed', function () {
      onSubmit.mockClear();
      var mockInputValue = 'MOCK_INPUT_VALUE';
      var wrapper = mount( /*#__PURE__*/React.createElement(CouponInput, {
        onSubmit: onSubmit
      }));
      var input = wrapper.find(InputElementStyled);
      input.value = mockInputValue;
      input.simulate('keydown', {
        key: 'x',
        target: input
      });
      input.simulate('keydown', {
        key: 'd',
        target: input
      });
      expect(onSubmit).not.toHaveBeenCalled();
    });
    it('should blur on submit when', function () {
      onSubmit.mockClear();
      var wrapper = mount( /*#__PURE__*/React.createElement(CouponInput, {
        onSubmit: onSubmit
      }));
      var input = wrapper.find(InputElementStyled);
      var inputEl = wrapper.getDOMNode();
      jest.spyOn(inputEl, 'blur');
      input.simulate('keydown', {
        key: 'Enter',
        target: inputEl
      });
      expect(inputEl.blur).toHaveBeenCalled();
    });
    it('should suppress message on focus', function () {
      onSubmit.mockClear();
      var wrapper = mount( /*#__PURE__*/React.createElement(CouponInput, {
        onSubmit: onSubmit,
        showMessage: true,
        message: MOCK_MESSAGE_1,
        messageType: MESSAGE_TYPE_SUCCESS
      }));
      var input = wrapper.find(InputElementStyled);
      input.simulate('focus');
      expect(wrapper.state().suppressMessage).toBe(true);
    });
    it('should show previously suppressed message on props change', function () {
      onSubmit.mockClear();
      var wrapper = mount( /*#__PURE__*/React.createElement(CouponInput, {
        onSubmit: onSubmit,
        showMessage: true,
        message: MOCK_MESSAGE_1,
        messageType: MESSAGE_TYPE_SUCCESS
      }));
      var input = wrapper.find(InputElementStyled);
      input.simulate('focus');
      expect(wrapper.state().suppressMessage).toBe(true);
      wrapper.setProps({
        message: MOCK_MESSAGE_2
      });
      expect(wrapper.state().suppressMessage).toBe(false);
    });
    it('should suppress message after 5s', function () {
      onSubmit.mockClear();
      var wrapper = mount( /*#__PURE__*/React.createElement(CouponInput, {
        onSubmit: onSubmit
      }));
      wrapper.setProps({
        showMessage: true,
        message: MOCK_MESSAGE_1,
        messageType: MESSAGE_TYPE_SUCCESS
      });
      expect(wrapper.state().suppressMessage).toBe(false);
      jest.advanceTimersByTime(DELAY);
      expect(wrapper.state().suppressMessage).toBe(true);
    });
    it('should skip state update when unmounted during timeout', function () {
      jest.spyOn(window, 'clearTimeout');
      onSubmit.mockClear();
      var wrapper = mount( /*#__PURE__*/React.createElement(CouponInput, {
        onSubmit: onSubmit
      }));
      wrapper.setProps({
        showMessage: true,
        message: MOCK_MESSAGE_1,
        messageType: MESSAGE_TYPE_SUCCESS
      });

      var _wrapper$state = wrapper.state(),
          timeoutId = _wrapper$state.timeoutId;

      wrapper.unmount();
      expect(clearTimeout).toHaveBeenCalledWith(timeoutId);
    });
    it('should open input field on first click and apply coupon on second click', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(CouponInput, {
        onSubmit: onSubmit,
        value: "mockValue"
      }));
      var buttonComponent = wrapper.find(Button);
      expect(wrapper.state('isOpened')).toBe(false);
      buttonComponent.simulate('click');
      expect(wrapper.state('isOpened')).toBe(true);
      buttonComponent.simulate('click');
      expect(onSubmit).toHaveBeenCalled();
      expect(onSubmit).toHaveBeenCalledWith('mockValue');
    });
    it('should close input field on close button click', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(CouponInput, {
        onSubmit: onSubmit,
        onClose: onClose,
        value: "mockValue"
      }));
      var buttonComponent = wrapper.find(CloseButtonStyled);
      wrapper.setState({
        isOpened: true
      });
      expect(wrapper.state('isOpened')).toBe(true);
      buttonComponent.simulate('click');
      expect(onClose).toHaveBeenCalled();
      expect(wrapper.state('isOpened')).toBe(false);
    });
  });
});