/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SET_CURRENT_USER, SET_CONSENTS } from 'redux/userProfile';
import { SHOW_INNER_POPUP, HIDE_INNER_POPUP } from 'redux/innerPopupReducer';
import { mapStateToProps, mapDispatchToProps } from './UpdateProfile.container';

const userProfileMock = {
  id: 338816933,
  email: 'user@example.com',
  firstName: '',
  lastName: '',
  dateOfBirth: null,
  country: 'GB',
  companyName: null,
  phoneNumber: null,
  addressLine1: null,
  addressLine2: null,
  city: null,
  state: null,
  postalCode: null,
  regDate: '2020-02-12 15:18:56',
  lastLoginDate: '2020-02-21 07:13:49',
  transactions: '6',
  payment: 'mc',
  termsAccepted: 'no',
  marketingOptIn: 'no',
  lastUserIp: '213.156.120.102',
  externalId: '',
  externalData: null
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
describe('<UpdateProfile/>', function() {
  describe('@container', function() {
    it('should show previously added value', function() {
      const initialState = {
        userProfile: userProfileMock,
        userConsents: [],
        consentsError: [],
        innerPopup: {
          isOpen: false,
          type: '',
          data: {}
        }
      };
      expect(mapStateToProps(initialState).userProfile).toEqual(
        userProfileMock
      );
    });
    it('should dispatch SET_CURRENT_USER action', function() {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).setCurrentUser();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: SET_CURRENT_USER
      });
    });
    it('should dispatch SET_CONSENTS action', function() {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).setConsents();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: SET_CONSENTS
      });
    });
    it('should dispatch SHOW_INNER_POPUP action', function() {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).showInnerPopup();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: SHOW_INNER_POPUP
      });
    });
    it('should dispatch HIDE_INNER_POPUP action', function() {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).hideInnerPopup();
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: HIDE_INNER_POPUP
      });
    });
  });
});
