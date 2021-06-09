/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import { MESSAGE_TYPE_SUCCESS } from 'components/Input';
import CheckoutPriceBox from 'components/CheckoutPriceBox';
import FreeOffer from 'components/FreeOffer';
import * as planHelper from 'util/planHelper';
import { PureOffer as Offer } from './Offer';
import { offerDetailsMock, freeOfferDetailsMock, subWithTrialDetailsMock, seasonPassDetailsMock } from './__mocks__/offerDetails';
import { orderDetailsMock, freeOrderDetailsMock } from './__mocks__/orderDetails';
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
planHelper.dateFormat = jest.fn().mockReturnValue('11/6/2020 02:31 PM GMT+1');
var mockCouponProps = {
  showMessage: false,
  message: '',
  messageType: MESSAGE_TYPE_SUCCESS,
  onSubmit: jest.fn().mockResolvedValue({})
};
describe('Offer', function () {
  describe('@render', function () {
    it('displays basic details', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(Offer, {
        offerDetails: offerDetailsMock,
        orderDetails: orderDetailsMock,
        couponProps: mockCouponProps,
        onPaymentComplete: jest.fn(),
        updatePriceBreakdown: jest.fn()
      }));
      expect(wrapper.find(CheckoutPriceBox)).toHaveLength(1);
    });
    it('should render FreeOffer component if the offer is free', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(Offer, {
        offerDetails: freeOfferDetailsMock,
        orderDetails: freeOrderDetailsMock,
        couponProps: mockCouponProps,
        onPaymentComplete: jest.fn(),
        updatePriceBreakdown: jest.fn()
      }));
      expect(wrapper.find(CheckoutPriceBox)).toHaveLength(0);
      expect(wrapper.find(FreeOffer)).toHaveLength(1);
    });
    it('should generate description for all offer types', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(Offer, {
        offerDetails: offerDetailsMock,
        orderDetails: orderDetailsMock,
        couponProps: mockCouponProps,
        onPaymentComplete: jest.fn(),
        updatePriceBreakdown: jest.fn()
      }));
      var subscriptionDescription = wrapper.instance().generateDescription('S');
      var eventDescription = wrapper.instance().generateDescription('E');
      var rentalDescription = wrapper.instance().generateDescription('R');
      var passDescription = wrapper.instance().generateDescription('P');
      var vodDescription = wrapper.instance().generateDescription('A');
      expect(subscriptionDescription).toMatch("You will be charged 20$ for every month.");
      expect(eventDescription).toContain('Pay-per-view event 11/6/2020 02:31 PM GMT+1');
      expect(rentalDescription).toContain('Monthly access');
      expect(passDescription).toContain('Monthly season pass');
      expect(vodDescription).toContain('Unlimited access');
    });
    it('should generate description for subscription with trial', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(Offer, {
        offerDetails: subWithTrialDetailsMock,
        orderDetails: orderDetailsMock,
        couponProps: mockCouponProps,
        onPaymentComplete: jest.fn(),
        updatePriceBreakdown: jest.fn()
      }));
      var description = wrapper.instance().generateDescription('S');
      expect(description).toMatch("You will be charged 20$ after 2 months.");
    });
    it('should generate description for season pass with specific end date', function () {
      var wrapper = shallow( /*#__PURE__*/React.createElement(Offer, {
        offerDetails: seasonPassDetailsMock,
        orderDetails: orderDetailsMock,
        couponProps: mockCouponProps,
        onPaymentComplete: jest.fn(),
        updatePriceBreakdown: jest.fn()
      }));
      var description = wrapper.instance().generateDescription('P');
      expect(description).toMatch("Access until 11/6/2020 02:31 PM GMT+1");
    });
  });
  describe('@events', function () {
    it('should add coupon to state on coupon applied', function () {
      var couponCode = 'abc';
      var wrapper = shallow( /*#__PURE__*/React.createElement(Offer, {
        offerDetails: offerDetailsMock,
        orderDetails: orderDetailsMock,
        couponProps: mockCouponProps,
        onPaymentComplete: jest.fn(),
        updatePriceBreakdown: jest.fn()
      }));
      wrapper.find('CouponInput').simulate('change', couponCode);
      expect(wrapper.state().coupon).toBe(couponCode);
    });
  });
});