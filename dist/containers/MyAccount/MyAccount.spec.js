import _toConsumableArray from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray";

/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import getCustomerSubscriptionsRequest from 'api/Customer/getCustomerSubscriptions';
import getCustomerRequest from 'api/Customer/getCustomer';
import getCustomerConsentsRequest from 'api/Customer/getCustomerConsents';
import MyAccount from './MyAccount.component';
jest.mock('api/Customer/getCustomerSubscriptions');
jest.mock('api/Customer/getCustomer');
jest.mock('api/Customer/getCustomerConsents');
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
var customerData = {
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
var subscriptionsData = {
  items: [{
    offerId: 'S937144802_UA',
    status: 'active',
    expiresAt: 1582706082,
    nextPaymentPrice: 14.4,
    nextPaymentCurrency: 'EUR',
    paymentGateway: 'adyen',
    paymentMethod: 'mc',
    offerTitle: 'Monthly subscription with 7 days trial',
    period: 'month'
  }, {
    offerId: 'S249781156_UA',
    status: 'active',
    expiresAt: 1597917717,
    nextPaymentPrice: 45.04,
    nextPaymentCurrency: 'EUR',
    paymentGateway: 'adyen',
    paymentMethod: 'mc',
    offerTitle: '6-Month without trial',
    period: '6months'
  }]
};
var customerConsents = [{
  customerId: '338816933',
  name: 'broadcaster_marketing',
  required: false,
  state: 'declined',
  version: '2',
  needsUpdate: false,
  label: 'Yes, I want to receive Very important company and d3.ru updates by email. TEST',
  value: 'Yes, I want to receive Very important company and d3.ru updates by email. TEST',
  newestVersion: '2',
  date: 1588942073
}, {
  customerId: '338816933',
  name: 'terms',
  required: true,
  state: 'accepted',
  version: '1',
  needsUpdate: false,
  label: 'I accept the <a href="https://cleeng.com/cleeng-user-agreement" target="_blank">Terms and Conditions</a> of Cleeng.',
  value: 'https://cleeng.com/cleeng-user-agreement',
  newestVersion: '1',
  date: 1588942073
}];
var setCurrentPlanMock = jest.fn();
var setCurrentUserMock = jest.fn();
var setConsentsMock = jest.fn();
var setConsentsErrorMock = jest.fn();
var showPopupMock = jest.fn();
var hidePopupMock = jest.fn();
describe('<MyAccount/>', function () {
  afterEach(function () {
    jest.clearAllMocks();
  });
  var defaultProps = {
    setCurrentPlan: setCurrentPlanMock,
    setCurrentUser: setCurrentUserMock,
    setConsents: setConsentsMock,
    setConsentsError: setConsentsErrorMock,
    showPopup: showPopupMock,
    hidePopup: hidePopupMock
  };
  describe('@renders', function () {
    it('should fetch currentPlan, customer and consents on componentDidMount', function (done) {
      getCustomerSubscriptionsRequest.mockResolvedValue({
        responseData: subscriptionsData,
        errors: []
      });
      getCustomerRequest.mockResolvedValue({
        responseData: customerData,
        errors: []
      });
      getCustomerConsentsRequest.mockResolvedValue({
        responseData: {
          consents: customerConsents
        },
        errors: []
      });
      shallow( /*#__PURE__*/React.createElement(MyAccount, Object.assign({}, defaultProps, {
        planDetails: {
          currentPlan: []
        },
        userProfile: {
          user: null,
          consents: []
        }
      })));
      setImmediate(function () {
        expect(setCurrentUserMock).toHaveBeenCalled();
        expect(setCurrentUserMock).toHaveBeenCalledWith(customerData);
        expect(setCurrentPlanMock).toHaveBeenCalledWith(subscriptionsData.items);
        expect(setConsentsMock).toHaveBeenCalledWith(customerConsents);
        done();
      });
    });
    it('should store errors if cannot fetch getCustomerSubscriptions', function (done) {
      var returnedErrors = ['Some error'];
      getCustomerSubscriptionsRequest.mockResolvedValue({
        responseData: {},
        errors: returnedErrors
      });
      var wrapper = shallow( /*#__PURE__*/React.createElement(MyAccount, Object.assign({}, defaultProps, {
        planDetails: {
          currentPlan: []
        },
        userProfile: {
          user: {
            email: 'example@user.com'
          },
          consents: [{
            name: 'mock'
          }]
        }
      })));
      setImmediate(function () {
        expect(setCurrentPlanMock).not.toHaveBeenCalled();
        expect(wrapper.state('errors')).toEqual(returnedErrors);
        done();
      });
    });
    it('should store errors if cannot fetch getCustomer', function (done) {
      var returnedErrors = ['Some error'];
      getCustomerRequest.mockResolvedValue({
        responseData: {},
        errors: returnedErrors
      });
      var wrapper = shallow( /*#__PURE__*/React.createElement(MyAccount, Object.assign({}, defaultProps, {
        planDetails: {
          currentPlan: subscriptionsData.items
        },
        userProfile: {
          user: null,
          consents: [{
            name: 'mock'
          }]
        }
      })));
      setImmediate(function () {
        expect(wrapper.state().errors).toEqual(returnedErrors);
        expect(setCurrentUserMock).not.toHaveBeenCalled();
        done();
      });
    });
    it('should store errors if cannot fetch getCustomerConsents', function (done) {
      var returnedErrors = ['Some error'];
      getCustomerConsentsRequest.mockResolvedValue({
        responseData: {},
        errors: returnedErrors
      });
      shallow( /*#__PURE__*/React.createElement(MyAccount, Object.assign({}, defaultProps, {
        planDetails: {
          currentPlan: subscriptionsData.items
        },
        userProfile: {
          user: {
            email: 'example@user.com'
          },
          consents: []
        }
      })));
      setImmediate(function () {
        expect(setConsentsMock).not.toHaveBeenCalled();
        expect(setConsentsErrorMock).toHaveBeenCalled();
        done();
      });
    });
    it('should setConsentsError if cannot fetch getCustomerConsents', function (done) {
      var returnedErrors = ['Some error'];
      getCustomerConsentsRequest.mockRejectedValue([].concat(returnedErrors));
      shallow( /*#__PURE__*/React.createElement(MyAccount, Object.assign({}, defaultProps, {
        planDetails: {
          currentPlan: subscriptionsData.items
        },
        userProfile: {
          user: {
            email: 'example@user.com'
          },
          consents: []
        }
      })));
      setImmediate(function () {
        expect(setConsentsMock).not.toHaveBeenCalled();
        expect(setConsentsErrorMock).toHaveBeenCalled();
        done();
      });
    });
  });
  describe('@update', function () {
    var CONSENTS = {
      termsUpdateRequired: [{
        customerId: '338816933',
        name: 'terms',
        required: true,
        state: 'declined',
        version: '1',
        needsUpdate: false,
        label: 'I accept the <a href="https://cleeng.com/cleeng-user-agreement" target="_blank">Terms and Conditions</a> of Cleeng.',
        value: 'https://cleeng.com/cleeng-user-agreement',
        newestVersion: '2',
        date: 1588942073
      }],
      consentsUpdateRequired: [{
        customerId: '338816933',
        name: 'broadcaster_marketing',
        required: false,
        state: 'declined',
        version: '1',
        needsUpdate: true,
        label: 'I accept the <a href="https://cleeng.com/cleeng-user-agreement" target="_blank">Terms and Conditions</a> of Cleeng.',
        value: 'https://cleeng.com/cleeng-user-agreement',
        newestVersion: '2',
        date: 1588942073
      }],
      notCheckedTerms: [{
        customerId: '338816933',
        name: 'terms',
        required: true,
        state: 'declined',
        version: '1',
        needsUpdate: false,
        label: 'I accept the <a href="https://cleeng.com/cleeng-user-agreement" target="_blank">Terms and Conditions</a> of Cleeng.',
        value: 'https://cleeng.com/cleeng-user-agreement',
        newestVersion: '1',
        date: 1588942073
      }],
      defaultConsents: [{
        customerId: '338816933',
        name: 'terms',
        required: true,
        state: 'accepted',
        version: '1',
        needsUpdate: false,
        label: 'I accept the <a href="https://cleeng.com/cleeng-user-agreement" target="_blank">Terms and Conditions</a> of Cleeng.',
        value: 'https://cleeng.com/cleeng-user-agreement',
        newestVersion: '1',
        date: 1588942073
      }],
      hidePopup: [{
        customerId: '338816933',
        name: 'terms',
        required: true,
        state: 'accepted',
        version: '1',
        needsUpdate: false,
        label: 'I accept the <a href="https://cleeng.com/cleeng-user-agreement" target="_blank">Terms and Conditions</a> of Cleeng.',
        value: 'https://cleeng.com/cleeng-user-agreement',
        newestVersion: '1',
        date: 1588942073
      }]
    };
    it('should render notCheckedTerms popup', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(MyAccount, Object.assign({}, defaultProps, {
        planDetails: {
          currentPlan: subscriptionsData.items
        },
        userProfile: {
          user: {
            email: 'example@user.com'
          },
          consents: CONSENTS.defaultConsents
        }
      })));
      wrapper.setProps({
        userProfile: {
          consents: CONSENTS.notCheckedTerms
        }
      });
      expect(showPopupMock).toHaveBeenCalledWith({
        type: 'notCheckedTerms',
        consents: CONSENTS.notCheckedTerms
      });
    });
    it('should render complexUpdate popup', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(MyAccount, Object.assign({}, defaultProps, {
        planDetails: {
          currentPlan: subscriptionsData.items
        },
        userProfile: {
          user: {
            email: 'example@user.com'
          },
          consents: CONSENTS.defaultConsents
        }
      })));
      wrapper.setProps({
        userProfile: {
          consents: [].concat(_toConsumableArray(CONSENTS.consentsUpdateRequired), _toConsumableArray(CONSENTS.termsUpdateRequired))
        }
      });
      expect(showPopupMock).toHaveBeenCalledWith({
        type: 'complexUpdate',
        consents: [].concat(_toConsumableArray(CONSENTS.termsUpdateRequired), _toConsumableArray(CONSENTS.consentsUpdateRequired))
      });
    });
    it('should render termsUpdateRequired popup', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(MyAccount, Object.assign({}, defaultProps, {
        planDetails: {
          currentPlan: subscriptionsData.items
        },
        userProfile: {
          user: {
            email: 'example@user.com'
          },
          consents: CONSENTS.defaultConsents
        }
      })));
      wrapper.setProps({
        userProfile: {
          consents: CONSENTS.termsUpdateRequired
        }
      });
      expect(showPopupMock).toHaveBeenCalledWith({
        type: 'termsUpdateRequired',
        consents: CONSENTS.termsUpdateRequired
      });
    });
    it('should render consentsUpdateRequired layout', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(MyAccount, Object.assign({}, defaultProps, {
        planDetails: {
          currentPlan: subscriptionsData.items
        },
        userProfile: {
          user: {
            email: 'example@user.com'
          },
          consents: CONSENTS.defaultConsents
        }
      })));
      wrapper.setProps({
        userProfile: {
          consents: CONSENTS.consentsUpdateRequired
        }
      });
      expect(showPopupMock).toHaveBeenCalledWith({
        type: 'consentsUpdateRequired',
        consents: CONSENTS.consentsUpdateRequired
      });
    });
    it('should hidepopup if consents are valid', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(MyAccount, Object.assign({}, defaultProps, {
        planDetails: {
          currentPlan: subscriptionsData.items
        },
        userProfile: {
          user: {
            email: 'example@user.com'
          },
          consents: CONSENTS.defaultConsents
        }
      })));
      wrapper.setProps({
        userProfile: {
          consents: CONSENTS.hidePopup
        }
      });
      expect(hidePopupMock).toHaveBeenCalled();
    });
  });
});