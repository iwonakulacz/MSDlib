/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { PureCurrentPlan } from './CurrentPlan';
import {
  SubscriptionStyled,
  SimpleButtonStyled,
  FullWidthButtonStyled
} from './CurrentPlanStyled';
import 'jest-styled-components';

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
const planDetailsMock = [
  {
    offerId: 'S937144802_UA',
    status: 'active',
    expiresAt: 1582706082,
    nextPaymentPrice: 14.4,
    nextPaymentCurrency: 'EUR',
    paymentGateway: 'adyen',
    paymentMethod: 'mc',
    offerTitle: 'Monthly subscription with 7 days trial',
    period: 'month'
  },
  {
    offerId: 'S249781156_UA',
    status: 'cancelled',
    expiresAt: 1597917717,
    nextPaymentPrice: 45.04,
    nextPaymentCurrency: 'EUR',
    paymentGateway: 'adyen',
    paymentMethod: 'mc',
    offerTitle: '6-Month without trial',
    period: '6months'
  }
];
const showInnerPopupMock = jest.fn();
const setOfferToSwitchMock = jest.fn();
const updateList = jest.fn();
describe('<PlanDetails/>', function() {
  afterEach(function() {
    return jest.clearAllMocks();
  });
  describe('@renders', function() {
    it('should render initial state without subscriptions', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureCurrentPlan, {
          showInnerPopup: showInnerPopupMock,
          setOfferToSwitch: setOfferToSwitchMock,
          updateList
        })
      );
      expect(wrapper.prop('subscriptions')).toStrictEqual([]);
    });
    it('should render initial state with subscriptions parameter', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureCurrentPlan, {
          subscriptions: planDetailsMock,
          showInnerPopup: showInnerPopupMock,
          setOfferToSwitch: setOfferToSwitchMock,
          updateList
        })
      );
      expect(wrapper.prop('subscriptions')).toStrictEqual(planDetailsMock);
      expect(wrapper.find(SubscriptionStyled)).toHaveLength(2);
    });
  });
  describe('@actions', function() {
    it('should call showInnerPopup on click unsubscribe', function() {
      const trueValue = true;
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureCurrentPlan, {
          subscriptions: planDetailsMock,
          showInnerPopup: showInnerPopupMock,
          setOfferToSwitch: setOfferToSwitchMock,
          updateList,
          isManagementBarOpen: trueValue
        })
      );
      wrapper.find(SimpleButtonStyled).simulate('click');
      expect(showInnerPopupMock).toHaveBeenCalledTimes(1);
      expect(showInnerPopupMock).toHaveBeenCalledWith({
        type: 'updateSubscription',
        data: {
          action: 'unsubscribe',
          offerData: {
            offerId: 'S937144802_UA',
            expiresAt: 1582706082
          }
        }
      });
    });
    it('should call showInnerPopup on click resubscribe', function() {
      const trueValue = true;
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureCurrentPlan, {
          subscriptions: planDetailsMock.slice(1),
          showInnerPopup: showInnerPopupMock,
          setOfferToSwitch: setOfferToSwitchMock,
          updateList,
          isManagementBarOpen: trueValue
        })
      );
      wrapper.find(FullWidthButtonStyled).simulate('click');
      expect(showInnerPopupMock).toHaveBeenCalledTimes(1);
      expect(showInnerPopupMock).toHaveBeenCalledWith({
        type: 'updateSubscription',
        data: {
          action: 'resubscribe',
          offerData: {
            offerId: 'S249781156_UA',
            expiresAt: 1597917717,
            price: '45.04€'
          }
        }
      });
    });
    it('should save data about offer to switch on click SubscriptionCard', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureCurrentPlan, {
          subscriptions: planDetailsMock,
          showInnerPopup: showInnerPopupMock,
          setOfferToSwitch: setOfferToSwitchMock,
          updateList
        })
      );
      wrapper
        .find(SubscriptionStyled)
        .first()
        .simulate('click');
      expect(setOfferToSwitchMock).toHaveBeenCalledTimes(1);
      expect(setOfferToSwitchMock).toHaveBeenCalledWith(planDetailsMock[0]);
    });
  });
});
