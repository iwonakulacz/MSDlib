import React from 'react';
import { shallow } from 'enzyme';
import BackButton from 'components/BackButton';
import Auth from 'services/auth';
import ErrorPage from './ErrorPage';
import { IconStyled } from './ErrorPageStyled';
var mockErrorType = 'offerNotExist';
describe('ErrorPage', function () {
  describe('@renders', function () {
    it('renders whoops page on default', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(ErrorPage, null));
      expect(wrapper.text()).toMatch('Whoops');
      expect(wrapper.find(IconStyled).exists()).toBe(true);
    });
    it('renders specified type of error', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(ErrorPage, {
        type: mockErrorType
      }));
      expect(wrapper.text()).toMatch('Offer does not exist or is not provided.');
      expect(wrapper.find(IconStyled).exists()).toBe(true);
    });
    it('renders error message ', function () {
      var errorMessage = 'Some error';
      var wrapper = shallow( /*#__PURE__*/React.createElement(ErrorPage, {
        error: errorMessage
      }));
      expect(wrapper.text()).toMatch(errorMessage);
    });
    it('renders error page with BackButton ', function () {
      Auth.isLogged = jest.fn(function () {
        return false;
      });
      var functionMock = jest.fn();
      var wrapper = shallow( /*#__PURE__*/React.createElement(ErrorPage, {
        type: mockErrorType,
        resetError: functionMock
      }));
      expect(wrapper.text()).toMatch('Offer does not exist or is not provided.');
      expect(wrapper.find(BackButton).exists()).toBe(true);
      expect(wrapper.find(BackButton).prop('onClickFn')).toBe(functionMock);
    });
  });
});