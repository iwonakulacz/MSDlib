/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Checkbox from 'components/Checkbox';
import Button from 'components/Button';
import updateSubscriptionRequest from 'api/Customer/updateSubscription';
import { TitleStyled } from 'components/InnerPopupWrapper/InnerPopupWrapperStyled';
import { PureUpdateSubscription } from './UpdateSubscription';
jest.mock('api/Customer/updateSubscription');
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
var hideInnerPopupMock = jest.fn();
var updateListMock = jest.fn();
var actionUnsubscribeMock = 'unsubscribe';
var actionResubscribeMock = 'resubscribe';
var offerDetailsMock = {
  offerId: '1234',
  price: '12$',
  expiresAt: 54356757
};
describe('<UpdateSubscription/>', function () {
  afterEach(function () {
    jest.clearAllMocks();
  });
  describe('@renders', function () {
    it('should render default state', function () {
      var wrapper = mount( /*#__PURE__*/React.createElement(PureUpdateSubscription, {
        hideInnerPopup: hideInnerPopupMock,
        updateList: updateListMock,
        action: actionUnsubscribeMock,
        offerDetails: offerDetailsMock
      }));
      expect(wrapper.state('checkedReason')).toBe('');
      expect(wrapper.state('isError')).toBe(false);
      expect(wrapper.state('isLoading')).toBe(false);
      expect(wrapper.state('currentStep')).toBe(1);
      expect(wrapper.find(TitleStyled).text()).toEqual('We’re sorry to see you go.');
    });
    describe('@actions', function () {
      it('should set in state checked reason', function () {
        var wrapper = mount( /*#__PURE__*/React.createElement(PureUpdateSubscription, {
          hideInnerPopup: hideInnerPopupMock,
          updateList: updateListMock,
          action: actionUnsubscribeMock,
          offerDetails: offerDetailsMock
        }));
        expect(wrapper.state('currentStep')).toBe(1);
        expect(wrapper.state('checkedReason')).toBe('');
        var checkbox = wrapper.find(Checkbox).first();
        expect(checkbox.exists()).toBe(true);
        checkbox.simulate('click');
        expect(wrapper.state('checkedReason')).toBe('Poor customer support');
      });
      it('should call unsubscribe fn on button click', function () {
        var wrapper = mount( /*#__PURE__*/React.createElement(PureUpdateSubscription, {
          hideInnerPopup: hideInnerPopupMock,
          updateList: updateListMock,
          action: actionUnsubscribeMock,
          offerDetails: offerDetailsMock
        }));
        wrapper.instance().unsubscribe = jest.fn();
        expect(wrapper.state('currentStep')).toBe(1);
        var checkbox = wrapper.find(Checkbox).first();
        checkbox.simulate('click');
        expect(wrapper.state('checkedReason')).toBe('Poor customer support');
        var unsubButton = wrapper.find(Button).last();
        unsubButton.simulate('click');
        expect(wrapper.instance().unsubscribe).toHaveBeenCalled();
      });
      it('should call resubscribe fn on button click', function () {
        var wrapper = mount( /*#__PURE__*/React.createElement(PureUpdateSubscription, {
          hideInnerPopup: hideInnerPopupMock,
          updateList: updateListMock,
          action: actionResubscribeMock,
          offerDetails: offerDetailsMock
        }));
        wrapper.instance().resubscribe = jest.fn();
        wrapper.instance().forceUpdate();
        expect(wrapper.state('currentStep')).toBe(1);
        var resubButton = wrapper.find(Button).last();
        resubButton.simulate('click');
        expect(wrapper.instance().resubscribe).toHaveBeenCalled();
      });
      it('should hide survey when on button click', function () {
        var wrapper = mount( /*#__PURE__*/React.createElement(PureUpdateSubscription, {
          hideInnerPopup: hideInnerPopupMock,
          updateList: updateListMock,
          action: actionUnsubscribeMock,
          offerDetails: offerDetailsMock
        }));
        wrapper.setState({
          currentStep: 2
        });
        wrapper.find(Button).first().simulate('click');
        expect(hideInnerPopupMock).toHaveBeenCalledTimes(1);
        expect(updateListMock).toHaveBeenCalledTimes(1);
        expect(updateListMock).toHaveBeenCalledTimes(1);
      });
    });
    describe('@functions', function () {
      describe('unsubscribe', function () {
        it('should change currentStep and switch off loader if request success', function (done) {
          updateSubscriptionRequest.mockResolvedValue({
            responseData: {},
            errors: []
          });
          var wrapper = shallow( /*#__PURE__*/React.createElement(PureUpdateSubscription, {
            hideInnerPopup: hideInnerPopupMock,
            updateList: updateListMock,
            action: actionUnsubscribeMock,
            offerDetails: offerDetailsMock
          }));
          wrapper.setState({
            chekedReason: 'mock reason'
          });
          wrapper.instance().unsubscribe();
          expect(wrapper.state('isLoading')).toBe(true);
          setImmediate(function () {
            expect(wrapper.state('isError')).toBe(false);
            expect(wrapper.state('currentStep')).toBe(2);
            expect(wrapper.state('isLoading')).toBe(false);
            done();
          });
        });
        it('should set error if request returns errors', function (done) {
          updateSubscriptionRequest.mockResolvedValue({
            responseData: {},
            errors: ['error']
          });
          var wrapper = shallow( /*#__PURE__*/React.createElement(PureUpdateSubscription, {
            hideInnerPopup: hideInnerPopupMock,
            updateList: updateListMock,
            action: actionUnsubscribeMock,
            offerDetails: offerDetailsMock
          }));
          wrapper.setState({
            chekedReason: 'mock reason'
          });
          wrapper.instance().unsubscribe();
          expect(wrapper.state('isLoading')).toBe(true);
          setImmediate(function () {
            expect(wrapper.state('isError')).toBe(true);
            expect(wrapper.state('currentStep')).toBe(1);
            expect(wrapper.state('isLoading')).toBe(false);
            done();
          });
        });
        it('should set error if request fail', function (done) {
          updateSubscriptionRequest.mockRejectedValue(new Error('error'));
          var wrapper = shallow( /*#__PURE__*/React.createElement(PureUpdateSubscription, {
            hideInnerPopup: hideInnerPopupMock,
            updateList: updateListMock,
            action: actionUnsubscribeMock,
            offerDetails: offerDetailsMock
          }));
          wrapper.setState({
            chekedReason: 'mock reason'
          });
          wrapper.instance().unsubscribe();
          expect(wrapper.state('isLoading')).toBe(true);
          setImmediate(function () {
            expect(wrapper.state('isError')).toBe(true);
            expect(wrapper.state('currentStep')).toBe(1);
            expect(wrapper.state('isLoading')).toBe(false);
            done();
          });
        });
      });
      describe('resubscribe', function () {
        it('should change currentStep and switch off loader if request success', function (done) {
          updateSubscriptionRequest.mockResolvedValue({
            responseData: {},
            errors: []
          });
          var wrapper = shallow( /*#__PURE__*/React.createElement(PureUpdateSubscription, {
            hideInnerPopup: hideInnerPopupMock,
            updateList: updateListMock,
            action: actionUnsubscribeMock,
            offerDetails: offerDetailsMock
          }));
          wrapper.instance().resubscribe();
          expect(wrapper.state('isLoading')).toBe(true);
          setImmediate(function () {
            expect(wrapper.state('isError')).toBe(false);
            expect(wrapper.state('currentStep')).toBe(2);
            expect(wrapper.state('isLoading')).toBe(false);
            done();
          });
        });
        it('should set error if request returns errors', function (done) {
          updateSubscriptionRequest.mockResolvedValue({
            responseData: {},
            errors: ['error']
          });
          var wrapper = shallow( /*#__PURE__*/React.createElement(PureUpdateSubscription, {
            hideInnerPopup: hideInnerPopupMock,
            updateList: updateListMock,
            action: actionUnsubscribeMock,
            offerDetails: offerDetailsMock
          }));
          wrapper.instance().resubscribe();
          expect(wrapper.state('isLoading')).toBe(true);
          setImmediate(function () {
            expect(wrapper.state('isError')).toBe(true);
            expect(wrapper.state('currentStep')).toBe(1);
            expect(wrapper.state('isLoading')).toBe(false);
            done();
          });
        });
        it('should set error if request fail', function (done) {
          updateSubscriptionRequest.mockResolvedValue(new Error('error'));
          var wrapper = shallow( /*#__PURE__*/React.createElement(PureUpdateSubscription, {
            hideInnerPopup: hideInnerPopupMock,
            updateList: updateListMock,
            action: actionUnsubscribeMock,
            offerDetails: offerDetailsMock
          }));
          wrapper.instance().resubscribe();
          expect(wrapper.state('isLoading')).toBe(true);
          setImmediate(function () {
            expect(wrapper.state('isError')).toBe(true);
            expect(wrapper.state('currentStep')).toBe(1);
            expect(wrapper.state('isLoading')).toBe(false);
            done();
          });
        });
      });
    });
  });
});