/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow, mount } from 'enzyme';
import MyAccountError from 'components/MyAccountError';
import { PureTransactions } from './Transactions';
import { InsideWrapperStyled } from './TransactionsStyled';

const mockTransaction = [
  {
    transactionId: 'T650862998',
    transactionDate: 1584361260,
    offerId: 'S568296139_ZW',
    offerType: 'subscription',
    offerTitle: 'Annual subscription (recurring) to pride&amp;prejudice'
  }
];
const toggleTransactionsListMock = jest.fn();
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
describe('<Transactions/>', function() {
  afterEach(function() {
    jest.clearAllMocks();
  });
  describe('@renders', function() {
    it('should render transactions', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PureTransactions, {
          transactions: mockTransaction,
          toggleTransactionsList: toggleTransactionsListMock
        })
      );
      expect(wrapper.find(InsideWrapperStyled).exists()).toBe(true);
    });
    it('should show info when there are no transactions', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PureTransactions, {
          transactions: [],
          toggleTransactionsList: toggleTransactionsListMock
        })
      );
      expect(wrapper.find(MyAccountError).exists()).toBe(true);
      expect(wrapper.find(InsideWrapperStyled).exists()).toBe(false);
    });
    it('should hide button if all transaction are fetched', function() {
      const wrapper = shallow(
        /* #__PURE__ */ React.createElement(PureTransactions, {
          transactions: mockTransaction,
          toggleTransactionsList: toggleTransactionsListMock,
          isShowMoreButtonHidden: true
        })
      );
      expect(wrapper.find('button').exists()).toBe(false);
    });
  });
  describe('@action', function() {
    it('should call toggleTransactionsList on button click', function() {
      const wrapper = mount(
        /* #__PURE__ */ React.createElement(PureTransactions, {
          transactions: mockTransaction,
          toggleTransactionsList: toggleTransactionsListMock,
          isExpanded: true
        })
      );
      wrapper.find('button').simulate('click');
      expect(toggleTransactionsListMock).toHaveBeenCalled();
    });
  });
});
