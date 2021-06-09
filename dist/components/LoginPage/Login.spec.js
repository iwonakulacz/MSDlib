/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import ErrorPage from 'components/ErrorPage';
import LoginForm from 'components/LoginPage/LoginForm';
import Auth from 'services/auth';
import { PureLogin } from './Login';
jest.mock('services/auth');
var mockUrlProps = {
  location: {
    search: '?offer=123123&publisher=123456789'
  }
};
jest.mock('react-router-dom', function () {
  return {
    Link: function Link() {
      return /*#__PURE__*/React.createElement("div", null);
    }
  };
});
jest.mock('containers/labeling', function () {
  return function () {
    return function (Component) {
      return function (props) {
        return /*#__PURE__*/React.createElement(Component, Object.assign({
          t: function t(k) {
            return k;
          }
        }, props));
      };
    };
  };
});
jest.mock('react-i18next', function () {
  return {
    withTranslation: function withTranslation() {
      return function (Component) {
        return function (props) {
          return /*#__PURE__*/React.createElement(Component, Object.assign({
            t: function t(k) {
              return k;
            }
          }, props));
        };
      };
    }
  };
});
describe('Login', function () {
  afterEach(function () {
    return jest.clearAllMocks();
  });
  describe('@renders', function () {
    Auth.isLogged = jest.fn(function () {
      return true;
    });
    it('should render initail state', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(PureLogin, {
        urlProps: mockUrlProps
      }));
      expect(wrapper.find(ErrorPage).exists()).toBe(false);
      expect(wrapper.find(LoginForm).exists()).toBe(true);
    });
    it('should show Error page when offer error occurred', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(PureLogin, {
        urlProps: mockUrlProps
      }));
      wrapper.setState({
        isOfferError: true
      });
      wrapper.update();
      expect(wrapper.find(ErrorPage).exists()).toBe(true);
    });
    it('should update state when offerError occure', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(PureLogin, {
        urlProps: mockUrlProps
      }));
      wrapper.instance().setOfferError(true);
      wrapper.update();
      expect(wrapper.state().isOfferError).toBe(true);
      expect(wrapper.find(ErrorPage).exists()).toBe(true);
    });
  });
});