/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import SectionHeader from 'components/SectionHeader/SectionHeader';
import listCustomerTransactionsRequest from 'api/Customer/listCustomerTransactions';
import getPaymentDetailsRequst from 'api/Customer/getPaymentDetails';
import { PurePaymentInfo } from './PaymentInfo.component';

jest.mock('api/Customer/listCustomerTransactions');
jest.mock('api/Customer/getPaymentDetails');
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
const setPaymentMethodMock = jest.fn();
const setTransactionsListMock = jest.fn();
const setTransactionsToShowMock = jest.fn();
const setTransactionsListAsFetchedMock = jest.fn();
const hideShowMoreButtonMock = jest.fn();
const paymentDetailsData = {
  id: 193925086,
  customerId: 280372348,
  token: '8315816736477319',
  paymentGateway: 'adyen',
  paymentMethod: 'card',
  paymentMethodSpecificParams: {
    variant: 'mc',
    lastCardFourDigits: '1111',
    holderName: 'dsadsadsa',
    cardExpirationDate: '10/2020',
    socialSecurityNumber: ''
  },
  paymentMethodId: null
};
const mockError = ['mockError'];
const transactionsListObject = {
  transactionId: 'T650862998',
  transactionDate: 1584361260,
  offerId: 'S568296139_ZW',
  offerType: 'subscription',
  offerTitle: 'Annual subscription (recurring) to pride&amp;prejudice'
};
const defaultProps = {
  setPaymentMethod: setPaymentMethodMock,
  setTransactionsList: setTransactionsListMock,
  setTransactionsToShow: setTransactionsToShowMock,
  setTransactionsListAsFetched: setTransactionsListAsFetchedMock,
  hideShowMoreButton: hideShowMoreButtonMock
};
describe('<PaymentInfo/>', function() {
  afterEach(function() {
    jest.clearAllMocks();
  });
  describe('@render', function() {
    it('should fetch data on componentDidMount', function(done) {
      getPaymentDetailsRequst.mockResolvedValue({
        responseData: {
          paymentDetails: [paymentDetailsData]
        },
        errors: []
      });
      listCustomerTransactionsRequest.mockResolvedValue({
        responseData: {
          items: [transactionsListObject]
        },
        errors: []
      });
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PurePaymentInfo, {
          ...defaultProps,
          paymentInfo: {
            paymentMethod: [],
            transactionsList: []
          }
        })
      );
      expect(wrapper.find(SectionHeader)).toHaveLength(2);
      setImmediate(function() {
        expect(setPaymentMethodMock).toHaveBeenCalled();
        expect(setPaymentMethodMock).toHaveBeenCalledWith([paymentDetailsData]);
        expect(setTransactionsListMock).toHaveBeenCalled();
        expect(setTransactionsListMock).toHaveBeenCalledWith([
          transactionsListObject
        ]);
        expect(setTransactionsToShowMock).toHaveBeenCalled();
        expect(setTransactionsListAsFetchedMock).toHaveBeenCalled();
        expect(hideShowMoreButtonMock).toHaveBeenCalled();
        done();
      });
    });
    it('should not fetch data when data was fetched', function() {
      shallow(
        /* #__PURE__ */ React.createElement(PurePaymentInfo, {
          ...defaultProps,
          paymentInfo: {
            paymentMethod: [paymentDetailsData],
            transactionsList: [transactionsListObject]
          }
        })
      );
      expect(setTransactionsToShowMock).toHaveBeenCalled();
      expect(getPaymentDetailsRequst).not.toHaveBeenCalled();
      expect(listCustomerTransactionsRequest).not.toHaveBeenCalled();
    });
    it('should set errors when fetch faild', function(done) {
      getPaymentDetailsRequst.mockResolvedValue({
        responseData: {},
        errors: mockError
      });
      listCustomerTransactionsRequest.mockResolvedValue({
        responseData: {},
        errors: mockError
      });
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PurePaymentInfo, defaultProps)
      );
      setImmediate(function() {
        expect(wrapper.state('paymentDetailsError')).toBe(mockError);
        expect(setPaymentMethodMock).not.toHaveBeenCalled();
        expect(wrapper.state('transactionsError')).toBe(mockError);
        expect(setTransactionsListMock).not.toHaveBeenCalled();
        done();
      });
    });
    it('should catch error when fetchPaymentDetials fail', function(done) {
      getPaymentDetailsRequst.mockRejectedValue(new Error('error'));
      listCustomerTransactionsRequest.mockResolvedValue({
        responseData: {
          items: [
            transactionsListObject,
            transactionsListObject,
            transactionsListObject,
            transactionsListObject
          ]
        },
        errors: []
      });
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PurePaymentInfo, defaultProps)
      );
      setImmediate(function() {
        expect(wrapper.state('paymentDetailsError')).toEqual(['error']);
        expect(setPaymentMethodMock).not.toHaveBeenCalled();
        expect(wrapper.state('transactionsError')).toEqual([]);
        expect(setTransactionsListMock).toHaveBeenCalled();
        done();
      });
    });
    it('should catch error when fetchTransactionsList fail', function(done) {
      getPaymentDetailsRequst.mockResolvedValue({
        responseData: {
          paymentDetails: [paymentDetailsData]
        },
        errors: []
      });
      listCustomerTransactionsRequest.mockRejectedValue(new Error('error'));
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PurePaymentInfo, defaultProps)
      );
      setImmediate(function() {
        expect(wrapper.state('paymentDetailsError')).toEqual([]);
        expect(setPaymentMethodMock).toHaveBeenCalled();
        expect(wrapper.state('transactionsError')).toEqual(['error']);
        expect(setTransactionsListMock).not.toHaveBeenCalled();
        done();
      });
    });
    it('should not set transaction list as fetched when it is possible to fetch more items', function(done) {
      getPaymentDetailsRequst.mockResolvedValue({
        responseData: {
          paymentDetails: [paymentDetailsData]
        },
        errors: []
      });
      listCustomerTransactionsRequest.mockResolvedValue({
        responseData: {
          items: [
            transactionsListObject,
            transactionsListObject,
            transactionsListObject,
            transactionsListObject
          ]
        },
        errors: []
      });
      shallow(
        /* #__PURE__ */ React.createElement(PurePaymentInfo, defaultProps)
      );
      setImmediate(function() {
        expect(setTransactionsToShowMock).toHaveBeenCalled();
        expect(setTransactionsToShowMock).toHaveBeenCalledWith(3);
        expect(setTransactionsListAsFetchedMock).not.toHaveBeenCalled();
        done();
      });
    });
  });
  describe('@action', function() {
    it('should hide transaction list on click show less button', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PurePaymentInfo, {
          ...defaultProps,
          paymentInfo: {
            paymentMethod: [paymentDetailsData],
            transactionsList: [
              transactionsListObject,
              transactionsListObject,
              transactionsListObject,
              transactionsListObject
            ]
          }
        })
      );
      wrapper.setState({
        isTransactionListExpanded: true
      });
      wrapper.instance().toggleTransactionsList();
      expect(wrapper.state('isTransactionListExpanded')).toBe(false);
      expect(setTransactionsToShowMock).toHaveBeenCalled();
    });
    it('should exapand list and NOT fetch transactions list if data was fetched', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PurePaymentInfo, {
          ...defaultProps,
          paymentInfo: {
            paymentMethod: [paymentDetailsData],
            transactionsList: [
              transactionsListObject,
              transactionsListObject,
              transactionsListObject,
              transactionsListObject
            ],
            isTransactionListFetched: true
          }
        })
      );
      wrapper.instance().toggleTransactionsList();
      expect(wrapper.state('isTransactionListExpanded')).toBe(true);
      expect(setTransactionsToShowMock).toHaveBeenCalled();
    });
    it('should fetch whole transactions list if it was NOT fetched', function(done) {
      listCustomerTransactionsRequest.mockResolvedValue({
        responseData: {
          items: [
            transactionsListObject,
            transactionsListObject,
            transactionsListObject,
            transactionsListObject,
            transactionsListObject
          ]
        },
        errors: []
      });
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PurePaymentInfo, {
          ...defaultProps,
          paymentInfo: {
            paymentMethod: [paymentDetailsData],
            transactionsList: [
              transactionsListObject,
              transactionsListObject,
              transactionsListObject,
              transactionsListObject
            ],
            isTransactionListFetched: false
          }
        })
      );
      wrapper.instance().toggleTransactionsList();
      expect(wrapper.state('isTransactionsItemsLoading')).toBe(true);
      expect(listCustomerTransactionsRequest).toHaveBeenCalled();
      setImmediate(function() {
        expect(wrapper.state('isTransactionListExpanded')).toBe(true);
        expect(wrapper.state('isTransactionsItemsLoading')).toBe(false);
        expect(setTransactionsListAsFetchedMock).toHaveBeenCalled();
        expect(setTransactionsListMock).toHaveBeenCalled();
        expect(setTransactionsListMock).toHaveBeenCalledWith([
          transactionsListObject,
          transactionsListObject,
          transactionsListObject,
          transactionsListObject,
          transactionsListObject
        ]);
        expect(setTransactionsToShowMock).toHaveBeenCalled();
        done();
      });
    });
    it('should set error in state when listCustomerTransactions fail on click show more button', function(done) {
      listCustomerTransactionsRequest.mockResolvedValue({
        responseData: {},
        errors: mockError
      });
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PurePaymentInfo, {
          ...defaultProps,
          paymentInfo: {
            paymentMethod: [paymentDetailsData],
            transactionsList: [
              transactionsListObject,
              transactionsListObject,
              transactionsListObject,
              transactionsListObject
            ],
            isTransactionListFetched: false
          }
        })
      );
      wrapper.instance().toggleTransactionsList();
      expect(wrapper.state('isTransactionsItemsLoading')).toBe(true);
      expect(listCustomerTransactionsRequest).toHaveBeenCalled();
      setImmediate(function() {
        expect(wrapper.state('transactionsError')).toBe(mockError);
        expect(wrapper.state('isTransactionsItemsLoading')).toBe(false);
        expect(setTransactionsListAsFetchedMock).not.toHaveBeenCalled();
        expect(setTransactionsListMock).not.toHaveBeenCalled();
        done();
      });
    });
    it('should catch error when listCustomerTransactions fail on click show more button', function(done) {
      listCustomerTransactionsRequest.mockRejectedValue(new Error('error'));
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PurePaymentInfo, {
          ...defaultProps,
          paymentInfo: {
            paymentMethod: [paymentDetailsData],
            transactionsList: [
              transactionsListObject,
              transactionsListObject,
              transactionsListObject,
              transactionsListObject
            ],
            isTransactionListFetched: false
          }
        })
      );
      wrapper.instance().toggleTransactionsList();
      expect(wrapper.state('isTransactionsItemsLoading')).toBe(true);
      expect(listCustomerTransactionsRequest).toHaveBeenCalled();
      setImmediate(function() {
        expect(wrapper.state('transactionsError')).toEqual(['error']);
        expect(wrapper.state('isTransactionsItemsLoading')).toBe(false);
        expect(setTransactionsListAsFetchedMock).not.toHaveBeenCalled();
        expect(setTransactionsListMock).not.toHaveBeenCalled();
        done();
      });
    });
  });
});
