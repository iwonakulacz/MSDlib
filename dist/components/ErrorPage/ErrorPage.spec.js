import React from 'react';
import { shallow } from 'enzyme';
import BackButton from 'components/BackButton';
import Auth from 'services/auth';
import ErrorPage from './ErrorPage';
import { IconStyled } from './ErrorPageStyled';

const mockErrorType = 'offerNotExist';
describe('ErrorPage', function() {
  describe('@renders', function() {
    it('renders whoops page on default', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(ErrorPage, null)
      );
      expect(wrapper.text()).toMatch('Whoops');
      expect(wrapper.find(IconStyled).exists()).toBe(true);
    });
    it('renders specified type of error', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(ErrorPage, {
          type: mockErrorType
        })
      );
      expect(wrapper.text()).toMatch(
        'Offer does not exist or is not provided.'
      );
      expect(wrapper.find(IconStyled).exists()).toBe(true);
    });
    it('renders error message ', function() {
      const errorMessage = 'Some error';
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(ErrorPage, {
          error: errorMessage
        })
      );
      expect(wrapper.text()).toMatch(errorMessage);
    });
    it('renders error page with BackButton ', function() {
      Auth.isLogged = jest.fn(function() {
        return false;
      });
      const functionMock = jest.fn();
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(ErrorPage, {
          type: mockErrorType,
          resetError: functionMock
        })
      );
      expect(wrapper.text()).toMatch(
        'Offer does not exist or is not provided.'
      );
      expect(wrapper.find(BackButton).exists()).toBe(true);
      expect(wrapper.find(BackButton).prop('onClickFn')).toBe(functionMock);
    });
  });
});
