import { mount } from 'enzyme';
import React from 'react';
import { getData } from 'util/appConfigHelper';
import submitPaymentWithoutDetails from 'api/Offer/submitPaymentWithoutDetails';
import Button from 'components/Button';
import * as planHelper from 'util/planHelper';
import { PureFreeOffer } from './FreeOffer';
import { DescriptionStyled } from './FreeOfferStyled';

jest.mock('util/appConfigHelper');
jest.mock('api/Offer/submitPaymentWithoutDetails');
planHelper.dateFormat = jest.fn().mockReturnValue('11/6/2020 02:31 PM GMT+1');
describe('<FreeOffer/>', function() {
  describe('@render', function() {
    it('should generate description', function() {
      getData.mockImplementationOnce(function() {
        return 'S';
      });
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureFreeOffer, {
          icon: 'month',
          period: 'month',
          expiresAt: '1604669476',
          startTime: 1604669476,
          title: 'Free offer',
          onPaymentComplete: jest.fn()
        })
      );
      expect(wrapper.find(DescriptionStyled).text()).toEqual(
        'Free subscription'
      );
      getData.mockImplementationOnce(function() {
        return 'P';
      });
      const passDesc = wrapper
        .instance()
        .generateDescriptionForFreeOffer('month', null, null);
      expect(passDesc).toEqual('Monthly free pass');
      getData.mockImplementation(function() {
        return 'E';
      });
      const eventDesc = wrapper
        .instance()
        .generateDescriptionForFreeOffer(null, 1604669476, 1604669476);
      expect(eventDesc).toEqual('Free event 11/6/2020 02:31 PM GMT+1');
      getData.mockImplementation(function() {
        return 'R';
      });
      const rentalDesc = wrapper
        .instance()
        .generateDescriptionForFreeOffer('month', null, null);
      expect(rentalDesc).toEqual('Monthly free access');
      getData.mockImplementation(function() {
        return 'A';
      });
      const vodDesc = wrapper
        .instance()
        .generateDescriptionForFreeOffer(null, null, null);
      expect(vodDesc).toEqual('Unlimited access');
    });
  });
  describe('@action', function() {
    it('should give access on button click - success', function(done) {
      const onPaymentCompleteMock = jest.fn();
      getData.mockImplementationOnce(function() {
        return 'S';
      });
      submitPaymentWithoutDetails.mockResolvedValue({
        responseData: {},
        errors: []
      });
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureFreeOffer, {
          icon: 'month',
          period: 'month',
          expiresAt: '1604669476',
          startTime: 1604669476,
          title: 'Free offer',
          onPaymentComplete: onPaymentCompleteMock
        })
      );
      const button = wrapper.find(Button);
      button.simulate('click');
      setImmediate(function() {
        expect(onPaymentCompleteMock).toHaveBeenCalledTimes(1);
        done();
      });
    });
    it('should set error if request failed', function(done) {
      const onPaymentCompleteMock = jest.fn();
      getData.mockImplementationOnce(function() {
        return 'S';
      });
      submitPaymentWithoutDetails.mockResolvedValue({
        errors: ['error']
      });
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureFreeOffer, {
          icon: 'month',
          period: 'month',
          expiresAt: '1604669476',
          startTime: 1604669476,
          title: 'Free offer',
          onPaymentComplete: onPaymentCompleteMock
        })
      );
      const button = wrapper.find(Button);
      button.simulate('click');
      setImmediate(function() {
        expect(onPaymentCompleteMock).not.toHaveBeenCalled();
        expect(wrapper.state().isLoading).toBe(false);
        expect(wrapper.state().error).not.toBe('');
        done();
      });
    });
  });
});
