import React from 'react';
import { shallow, mount } from 'enzyme';
import loginCustomerRequest from 'api/Auth/loginCustomer';
import getLocalesRequest from 'api/Customer/getCustomerLocales';
import Auth from 'services/auth';
import PasswordInput from 'components/PasswordInput';
import EmailInput from 'components/EmailInput';
import LoginForm from './LoginForm';
jest.mock('api/Auth/loginCustomer');
jest.mock('api/Customer/getCustomerLocales');
var setOfferErrorMock = jest.fn();
var mockInputValue = 'MOCK_INPUT_VALUE';
var mockEmailValue = 'mockmail@mock.com';
var mockNotValidEmail = 'mock';
var onSubmitMock = jest.fn().mockImplementation(function () {
  return new Promise(function (resolve) {
    resolve(false);
  });
});
var jwtMock = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcklkIjoiNjkwNjI0MjU1IiwicHVibGlzaGVySWQiOjEyMDM1NTU1OX0.EvaMwJ1ZtGR4TNujmROVxiXhiHxzTOp0vgCJPoScXW2bBSroAGsm8kLe-ivnqQ9xoiHJWtDRYZGLKSGASFVuo0bqJT2ZzVEohvCPRwMke0R87p_eaTztWvAUjhbUP0Dk9xo8_AeDvEIDmGln_NXJvTTn6EqU_Xk2Zq3W29_WtbEOjfPplCp49gerR_VpnWA36yTUhfF2sWA1ir0F2HymsDvoQ_6dc8t7nENdslJY08kW-_mSQgj4SbOf4uXgiKAlPU8x3LWzUbO9uFF-eAND7hrJGM-FIWcJreW92DRXmuUMBfe_ws9KXzv-F5gKVcuz7qOpyykkJtZSBvFQJtKMaw';
describe('LoginForm', function () {
  afterEach(function () {
    jest.clearAllMocks();
    delete global.__mobxInstanceCount; // eslint-disable-line
  });
  beforeEach(function () {
    getLocalesRequest.mockResolvedValue({
      status: 200,
      responseData: {
        ipAddress: '1234'
      }
    });
  });
  describe('@events', function () {
    it('should update state on input change', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(LoginForm, {
        offerId: "S649095045_PL"
      }));
      var emailInput = wrapper.find(EmailInput);
      var passwordInput = wrapper.find(PasswordInput);
      emailInput.simulate('change', mockEmailValue);
      passwordInput.simulate('change', mockInputValue);
      expect(wrapper.state().email).toBe(mockEmailValue);
      expect(wrapper.state().password).toBe(mockInputValue);
    });
    it('should set error and not call onSubmit cb when email empty', function () {
      var submitWrapper = mount( /*#__PURE__*/React.createElement(LoginForm, {
        offerId: "S649095045_PL",
        onSubmit: onSubmitMock
      }));
      var instance = submitWrapper.instance();
      onSubmitMock.mockClear();
      instance.setState({
        email: '',
        password: mockInputValue
      });
      submitWrapper.simulate('submit');
      expect(onSubmitMock).not.toHaveBeenCalled();
      expect(submitWrapper.state().errors.email).not.toBe('');
    });
    it('should set error and not call onSubmit cb when password empty', function () {
      var submitWrapper = mount( /*#__PURE__*/React.createElement(LoginForm, {
        offerId: "S649095045_PL",
        onSubmit: onSubmitMock
      }));
      var instance = submitWrapper.instance();
      onSubmitMock.mockClear();
      instance.setState({
        email: mockEmailValue,
        password: ''
      });
      submitWrapper.simulate('submit');
      expect(onSubmitMock).not.toHaveBeenCalled();
      expect(submitWrapper.state().errors.password).not.toBe('');
    });
    it('should set field error if email not valid', function () {
      var submitWrapper = mount( /*#__PURE__*/React.createElement(LoginForm, {
        offerId: "S649095045_PL",
        onSubmit: onSubmitMock
      }));
      var instance = submitWrapper.instance();
      var preventDefaultMock = jest.fn();
      onSubmitMock.mockClear();
      instance.setState({
        email: mockNotValidEmail,
        password: mockNotValidEmail
      });
      submitWrapper.simulate('submit', {
        preventDefault: preventDefaultMock
      });
      expect(onSubmitMock).not.toHaveBeenCalled();
      expect(submitWrapper.state().errors.email).not.toBe('');
    });
    it('should validate fields on blur', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(LoginForm, {
        offerId: "S649095045_PL"
      }));
      var instance = wrapper.instance();
      instance.setState({
        email: '',
        password: ''
      });
      instance.validateEmail();
      instance.validatePassword();
      instance.validateFields();
      expect(instance.state.errors.email).not.toBe('');
      expect(instance.state.errors.password).not.toBe('');
    });
  });
  describe('@onSubmit', function () {
    it('should login with offerId when fields valid', function (done) {
      loginCustomerRequest.mockResolvedValue({
        status: 200,
        responseData: {
          jwt: jwtMock
        }
      });
      onSubmitMock.mockClear();
      Auth.login = jest.fn();
      var wrapper = shallow( /*#__PURE__*/React.createElement(LoginForm, {
        offerId: "S649095045_PL"
      }));
      var instance = wrapper.instance();
      var preventDefaultMock = jest.fn();
      instance.setState({
        email: mockEmailValue,
        password: 'testtest123'
      });
      expect(Auth.login).not.toHaveBeenCalled();
      wrapper.simulate('submit', {
        preventDefault: preventDefaultMock
      });
      expect(preventDefaultMock).toHaveBeenCalledTimes(1);
      setImmediate(function () {
        expect(instance.state.errors.email).toBe('');
        expect(instance.state.errors.password).toBe('');
        expect(instance.state.generalError).toBe('');
        expect(Auth.login).toHaveBeenCalled();
        expect(Auth.login).toHaveBeenCalledTimes(1);
        expect(Auth.login).toHaveBeenCalledWith(false, false, mockEmailValue, jwtMock);
        done();
      });
    });
    it('should login to my account when fields valid', function (done) {
      loginCustomerRequest.mockResolvedValue({
        status: 200,
        responseData: {
          jwt: jwtMock
        }
      });
      onSubmitMock.mockClear();
      Auth.login = jest.fn();
      var wrapper = shallow( /*#__PURE__*/React.createElement(LoginForm, {
        publisher: "123456789",
        isMyAccount: true
      }));
      var instance = wrapper.instance();
      var preventDefaultMock = jest.fn();
      instance.setState({
        email: mockEmailValue,
        password: 'testtest123'
      });
      expect(Auth.login).not.toHaveBeenCalled();
      wrapper.simulate('submit', {
        preventDefault: preventDefaultMock
      });
      expect(preventDefaultMock).toHaveBeenCalledTimes(1);
      setImmediate(function () {
        expect(instance.state.errors.email).toBe('');
        expect(instance.state.errors.password).toBe('');
        expect(instance.state.generalError).toBe('');
        expect(Auth.login).toHaveBeenCalled();
        expect(Auth.login).toHaveBeenCalledTimes(1);
        expect(Auth.login).toHaveBeenCalledWith(true, false, mockEmailValue, jwtMock);
        done();
      });
    });
    it('should set general error when customer doesnt exist', function (done) {
      loginCustomerRequest.mockResolvedValue({
        status: 422
      });
      onSubmitMock.mockClear();
      var wrapper = shallow( /*#__PURE__*/React.createElement(LoginForm, {
        offerId: "S649095045_PL",
        onLoginComplete: onSubmitMock
      }));
      var instance = wrapper.instance();
      var preventDefaultMock = jest.fn();
      instance.setState({
        email: 'john@example.com',
        password: 'testtest123'
      });
      expect(onSubmitMock).not.toHaveBeenCalled();
      wrapper.simulate('submit', {
        preventDefault: preventDefaultMock
      });
      expect(preventDefaultMock).toHaveBeenCalledTimes(1);
      setImmediate(function () {
        expect(instance.state.errors.email).toBe('');
        expect(instance.state.errors.password).toBe('');
        expect(instance.state.generalError).toBe('Wrong email or password');
        expect(onSubmitMock).not.toHaveBeenCalled();
        done();
      });
    });
    it('should set general error when status code 429', function (done) {
      loginCustomerRequest.mockResolvedValue({
        status: 429
      });
      onSubmitMock.mockClear();
      var wrapper = shallow( /*#__PURE__*/React.createElement(LoginForm, {
        offerId: "S649095045_PL",
        onLoginComplete: onSubmitMock
      }));
      var instance = wrapper.instance();
      var preventDefaultMock = jest.fn();
      instance.setState({
        email: 'john@example.com',
        password: 'testtest123'
      });
      expect(onSubmitMock).not.toHaveBeenCalled();
      wrapper.simulate('submit', {
        preventDefault: preventDefaultMock
      });
      expect(preventDefaultMock).toHaveBeenCalledTimes(1);
      setImmediate(function () {
        expect(instance.state.errors.email).toBe('');
        expect(instance.state.errors.password).toBe('');
        expect(instance.state.generalError).toBe('Server overloaded. Please try again later.');
        expect(instance.state.overloaded).toBe(true);
        expect(onSubmitMock).not.toHaveBeenCalled();
        done();
      });
    });
    it('should set general error when error occurred', function (done) {
      loginCustomerRequest.mockResolvedValue({
        status: 500
      });
      onSubmitMock.mockClear();
      var wrapper = shallow( /*#__PURE__*/React.createElement(LoginForm, {
        offerId: "S649095045_PL",
        onLoginComplete: onSubmitMock
      }));
      var instance = wrapper.instance();
      var preventDefaultMock = jest.fn();
      instance.setState({
        email: 'john@example.com',
        password: 'testtest123'
      });
      expect(onSubmitMock).not.toHaveBeenCalled();
      wrapper.simulate('submit', {
        preventDefault: preventDefaultMock
      });
      expect(preventDefaultMock).toHaveBeenCalledTimes(1);
      setImmediate(function () {
        expect(instance.state.errors.email).toBe('');
        expect(instance.state.errors.password).toBe('');
        expect(instance.state.generalError).toBe('An error occurred.');
        expect(onSubmitMock).not.toHaveBeenCalled();
        done();
      });
    });
    it('should return offer error when offerId is not given', function (done) {
      var preventDefaultMock = jest.fn();
      onSubmitMock.mockClear();
      var wrapper = shallow( /*#__PURE__*/React.createElement(LoginForm, {
        offerId: "",
        onLoginComplete: onSubmitMock,
        setOfferError: setOfferErrorMock
      }));
      var instance = wrapper.instance();
      instance.setState({
        email: 'john@example.com',
        password: 'testtest123'
      });
      expect(onSubmitMock).not.toHaveBeenCalled();
      wrapper.simulate('submit', {
        preventDefault: preventDefaultMock
      });
      expect(preventDefaultMock).toHaveBeenCalledTimes(1);
      setImmediate(function () {
        expect(setOfferErrorMock).toHaveBeenCalled();
        done();
      });
    });
  });
});