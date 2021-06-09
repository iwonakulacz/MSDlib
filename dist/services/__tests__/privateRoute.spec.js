/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PrivateRoute from 'services/privateRoute';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import MyAccount from 'containers/MyAccount/MyAccount.container';
import ThankYouPage from 'components/ThankYouPage/ThankYouPage';
import Auth from 'services/auth';
jest.mock('services/auth');
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
describe('PrivateRoute', function () {
  it('should render private component when user is logged', function () {
    Auth.isLogged = jest.fn(function () {
      return true;
    });
    var wrapper = mount( /*#__PURE__*/React.createElement(MemoryRouter, {
      initialEntries: ['/thankyou']
    }, /*#__PURE__*/React.createElement(PrivateRoute, {
      path: "/thankyou",
      component: ThankYouPage
    })));
    expect(wrapper.find(ThankYouPage)).toHaveLength(1);
    expect(wrapper.find('Router').prop('history').location.pathname).toEqual('/thankyou');
  });
  it('should redirect from checkout private route to login page if user is not logged', function () {
    Auth.isLogged = jest.fn(function () {
      return false;
    });
    var wrapper = mount( /*#__PURE__*/React.createElement(MemoryRouter, {
      initialEntries: ['/thankyou']
    }, /*#__PURE__*/React.createElement(PrivateRoute, {
      path: "/thankyou",
      component: ThankYouPage
    })));
    expect(wrapper.find(ThankYouPage)).toHaveLength(0);
    expect(wrapper.find('Router').prop('history').location.pathname).toEqual('/login');
  });
  it('should redirect from myaccount private route to login page if user is not logged', function () {
    Auth.isLogged = jest.fn(function () {
      return false;
    });
    var wrapper = mount( /*#__PURE__*/React.createElement(MemoryRouter, {
      initialEntries: ['/my-account']
    }, /*#__PURE__*/React.createElement(PrivateRoute, {
      path: "/my-account",
      isMyAccount: true,
      component: MyAccount
    })));
    expect(wrapper.find(MyAccount)).toHaveLength(0);
    expect(wrapper.find('Router').prop('history').location.pathname).toEqual('/my-account/login');
  });
});