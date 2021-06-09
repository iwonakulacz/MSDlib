/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PublicRoute from 'services/publicRoute';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Login from 'components/LoginPage';
import AuthRequest from '../auth';

jest.mock('../auth');
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
describe('PublicRoute', function() {
  it('should render public component when user is not logged', function() {
    AuthRequest.isLogged = jest.fn(function() {
      return false;
    });
    const mockUrlProps = {
      location: {
        search: 'offer:123'
      }
    };
    const wrapper = mount(
      /* #__PURE__ */ React.createElement(
        MemoryRouter,
        {
          initialEntries: ['/login']
        },
        /* #__PURE__ */ React.createElement(PublicRoute, {
          path: '/login',
          component: function component() {
            return /* #__PURE__ */ React.createElement(Login, {
              urlProps: mockUrlProps
            });
          }
        })
      )
    );
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find('Router').prop('history').location.pathname).toEqual(
      '/login'
    );
  });
  it('should redirect from checkout login to offer page if user is logged', function() {
    AuthRequest.isLogged = jest.fn(function() {
      return true;
    });
    const wrapper = mount(
      /* #__PURE__ */ React.createElement(
        MemoryRouter,
        {
          initialEntries: ['/login']
        },
        /* #__PURE__ */ React.createElement(PublicRoute, {
          path: '/login',
          component: Login
        })
      )
    );
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find('Router').prop('history').location.pathname).toEqual(
      '/offer'
    );
  });
  it('should redirect from my account login to plan details page if user is logged', function() {
    AuthRequest.isLogged = jest.fn(function() {
      return true;
    });
    const wrapper = mount(
      /* #__PURE__ */ React.createElement(
        MemoryRouter,
        {
          initialEntries: ['/my-account/login']
        },
        /* #__PURE__ */ React.createElement(PublicRoute, {
          path: '/my-account/login',
          isMyAccount: true,
          component: function component() {
            return /* #__PURE__ */ React.createElement(Login, {
              isMyAccount: true
            });
          }
        })
      )
    );
    expect(wrapper.find(Login)).toHaveLength(0);
    expect(wrapper.find('Router').prop('history').location.pathname).toEqual(
      '/my-account/plan-details'
    );
  });
});
