/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import getCustomerSubscriptionsRequest from 'api/Customer/getCustomerSubscriptions';
import UpdateSubscription from 'components/UpdateSubscription';
import SwitchPlanPopup from 'components/SwitchPlanPopup';
import { PurePlanDetails } from './PlanDetails.component';
jest.mock('api/Customer/getCustomerSubscriptions');
jest.mock('api/Customer/getAvailableSwitches');
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
var setCurrentPlanMock = jest.fn();
var showInnerPopupMock = jest.fn();
var hideInnerPopupMock = jest.fn();
var setOfferToSwitchMock = jest.fn();
var setSwitchSettingsMock = jest.fn();
var updateListMock = jest.fn();
var defaultProps = {
  setCurrentPlan: setCurrentPlanMock,
  showInnerPopup: showInnerPopupMock,
  hideInnerPopup: hideInnerPopupMock,
  setOfferToSwitch: setOfferToSwitchMock,
  setSwitchSettings: setSwitchSettingsMock,
  updateList: updateListMock
};
describe('<PlanDetails/>', function () {
  afterEach(function () {
    return jest.clearAllMocks();
  });
  describe('@componentDidMount', function () {
    it('should set state when fetchSubscriptions return error', function (done) {
      getCustomerSubscriptionsRequest.mockResolvedValue({
        responseData: {},
        errors: ['error']
      });
      shallow( /*#__PURE__*/React.createElement(PurePlanDetails, defaultProps));
      setImmediate(function () {
        expect(setCurrentPlanMock).not.toHaveBeenCalled();
        done();
      });
    });
    it('should catch error when fetchSubscriptions fail', function (done) {
      getCustomerSubscriptionsRequest.mockRejectedValue(new Error('error'));
      shallow( /*#__PURE__*/React.createElement(PurePlanDetails, defaultProps));
      setImmediate(function () {
        expect(setCurrentPlanMock).not.toHaveBeenCalled();
        done();
      });
    });
    it('should hide survey on switch tabs', function () {
      mount( /*#__PURE__*/React.createElement(PurePlanDetails, Object.assign({}, defaultProps, {
        planDetails: {
          isSurveyShown: true,
          currentPlan: ['mock']
        },
        innerPopup: {
          isOpen: true
        }
      })));
      expect(hideInnerPopupMock).toHaveBeenCalled();
      expect(updateListMock).toHaveBeenCalled();
    });
  });
  describe('@actions', function () {
    it('should render updateSubscription popup', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(PurePlanDetails, Object.assign({}, defaultProps, {
        planDetails: {
          currentPlan: [1],
          switchSettings: {
            id: [{
              mock: 'mock'
            }]
          },
          offerToSwitch: {
            offerId: 'id'
          },
          updateList: false
        },
        innerPopup: {
          isOpen: true,
          type: 'updateSubscription',
          data: {
            action: 'resubscribe',
            offerData: {
              mock: 'mock'
            }
          }
        }
      })));
      expect(wrapper.find(UpdateSubscription).exists()).toBe(true);
    });
    it('should render SwitchPlan popup', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(PurePlanDetails, Object.assign({}, defaultProps, {
        planDetails: {
          currentPlan: [1],
          switchSettings: {
            id: [{
              mock: 'mock'
            }]
          },
          offerToSwitch: {
            offerId: 'id'
          },
          updateList: false
        },
        innerPopup: {
          isOpen: true,
          type: 'switchPlan',
          data: {
            offerData: {
              mock: 'mock'
            }
          }
        }
      })));
      expect(wrapper.find(SwitchPlanPopup).exists()).toBe(true);
    });
  });
});