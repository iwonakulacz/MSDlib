/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { getCustomer } from 'api';
import { PureUpdateProfile } from './UpdateProfile.component';
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
jest.mock('api', function () {
  return {
    getCustomer: jest.fn().mockResolvedValue({
      responseData: {
        id: 338816933,
        email: 'user@example.com',
        firstName: '',
        lastName: '',
        dateOfBirth: null,
        country: 'GB',
        companyName: null,
        phoneNumber: null,
        addressLine1: null,
        regDate: '2020-02-12 15:18:56',
        lastLoginDate: '2020-02-21 07:13:49',
        transactions: '6',
        payment: 'mc',
        termsAccepted: 'no',
        marketingOptIn: 'no',
        lastUserIp: '213.156.120.102',
        externalId: '',
        externalData: null
      },
      errors: []
    }).mockName('getCustomer'),
    getCustomerConsents: jest.fn().mockResolvedValue({
      responseData: {
        id: 338816933,
        email: 'user@example.com',
        firstName: '',
        lastName: '',
        dateOfBirth: null,
        country: 'GB',
        companyName: null,
        phoneNumber: null,
        addressLine1: null,
        regDate: '2020-02-12 15:18:56',
        lastLoginDate: '2020-02-21 07:13:49',
        transactions: '6',
        payment: 'mc',
        termsAccepted: 'no',
        marketingOptIn: 'no',
        lastUserIp: '213.156.120.102',
        externalId: '',
        externalData: null
      },
      errors: []
    }).mockName('getCustomerConsents'),
    getCaptureStatus: jest.fn().mockResolvedValue({
      responseData: {
        isCaptureEnabled: true,
        shouldCaptureBeDisplayed: false,
        settings: [{
          key: 'email',
          enabled: true,
          required: true,
          answer: 'pkaczmarek+topic01@cleeng.com'
        }, {
          key: 'firstNameLastName',
          enabled: true,
          required: true,
          answer: {
            firstName: 'Dareczek',
            lastName: 'Miodek'
          }
        }, {
          key: 'birthDate',
          enabled: false,
          required: true,
          answer: null
        }, {
          key: 'companyName',
          enabled: false,
          required: true,
          answer: null
        }, {
          key: 'phoneNumber',
          enabled: false,
          required: true,
          answer: null
        }, {
          key: 'address',
          enabled: false,
          required: true,
          answer: {
            address: null,
            address2: null,
            city: null,
            state: null,
            postCode: null,
            country: null
          }
        }, {
          key: 'custom_1',
          enabled: false,
          required: false,
          value: 'option 1;option 2;option 3',
          question: 'Which option do you prefer?',
          answer: null
        }, {
          key: 'custom_2',
          enabled: false,
          required: false,
          value: '',
          question: 'Which option do you prefer? - input',
          answer: null
        }, {
          key: 'custom_3',
          enabled: false,
          required: false,
          value: 'option 1',
          question: 'Which option do you prefer?',
          answer: null
        }]
      },
      errors: []
    }).mockName('getCaptureStatus')
  };
});
var setCurrentUserMock = jest.fn();
var setConsentsMock = jest.fn();
var setUserCaptureMock = jest.fn();
var showInnerPopupMock = jest.fn();
var hideInnerPopuprMock = jest.fn();
var updateCaptureOption = jest.fn();
var innerPopupMock = {
  isOpen: false,
  type: '',
  data: {}
};
var defaultProps = {
  setCurrentUser: setCurrentUserMock,
  setConsents: setConsentsMock,
  setUserCapture: setUserCaptureMock,
  showInnerPopup: showInnerPopupMock,
  hideInnerPopup: hideInnerPopuprMock,
  innerPopup: innerPopupMock,
  updateCaptureOption: updateCaptureOption
};
describe('<UpdateProfile/>', function () {
  afterEach(function () {
    jest.clearAllMocks();
  });
  describe('@renders', function () {
    it('should render initial state', function (done) {
      var wrapper = shallow( /*#__PURE__*/React.createElement(PureUpdateProfile, Object.assign({
        userProfile: {
          consentsError: []
        }
      }, defaultProps)));
      expect(getCustomer).toHaveBeenCalled();
      setImmediate(function () {
        expect(wrapper.state().detailsError).toEqual([]);
        done();
      });
    });
    it('should store errors if getCustomer return errors', function (done) {
      var returnedErrors = ['Some error'];
      getCustomer.mockResolvedValueOnce({
        errors: returnedErrors
      });
      var wrapper = shallow( /*#__PURE__*/React.createElement(PureUpdateProfile, Object.assign({
        userProfile: {
          consentsError: []
        }
      }, defaultProps)));
      setImmediate(function () {
        expect(wrapper.state().detailsError).toEqual(returnedErrors);
        done();
      });
    });
    it('should catch errors if getCustomer faild', function (done) {
      getCustomer.mockRejectedValue(new Error('error'));
      var wrapper = shallow( /*#__PURE__*/React.createElement(PureUpdateProfile, Object.assign({
        userProfile: {
          consentsError: []
        }
      }, defaultProps)));
      setImmediate(function () {
        expect(wrapper.state().detailsError).toEqual([new Error('error')]);
        expect(wrapper.state().isUserDetailsLoading).toBe(false);
        done();
      });
    });
  });
});