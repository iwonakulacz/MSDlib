import _classCallCheck from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass';
import _inherits from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits';
import _createSuper from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import PaymentMehod from 'components/PaymentMethod';
import SectionHeader from 'components/SectionHeader';
import Transactions from 'components/Transactions';
import { getPaymentDetails, listCustomerTransactions } from 'api';
import { WrapStyled } from './PaymentInfoStyled';

const DEFAULT_TRANSACTIONS_NUMBER = 3;

const PaymentInfo = /* #__PURE__ */ (function(_Component) {
  _inherits(PaymentInfo, _Component);

  const _super = _createSuper(PaymentInfo);

  function PaymentInfo(props) {
    let _this;

    _classCallCheck(this, PaymentInfo);

    _this = _super.call(this, props);

    _this.toggleTransactionsList = function() {
      const _this$props = _this.props;
      const { setTransactionsList } = _this$props;
      const { setTransactionsToShow } = _this$props;
      const { setTransactionsListAsFetched } = _this$props;
      const { paymentInfo } = _this$props;
      const { isTransactionListExpanded } = _this.state;

      if (isTransactionListExpanded) {
        _this.setState({
          isTransactionListExpanded: false
        });

        setTransactionsToShow(DEFAULT_TRANSACTIONS_NUMBER);
      } else if (paymentInfo.isTransactionListFetched) {
        // if transactions was fetched - show all of them without calling API
        _this.setState({
          isTransactionListExpanded: true
        });

        setTransactionsToShow();
      } else {
        // fetch all transactions when the list expands for the first time
        _this.setState({
          isTransactionsItemsLoading: true
        });

        listCustomerTransactions()
          .then(function(response) {
            if (response.errors.length !== 0) {
              _this.setState({
                transactionsError: response.errors
              });
            } else {
              _this.setState({
                isTransactionListExpanded: true
              });

              setTransactionsListAsFetched();
              setTransactionsList(response.responseData.items); // state to hold whole transactions

              setTransactionsToShow(); // state to hold the array with showed transactions
            }

            _this.setState({
              isTransactionsItemsLoading: false
            });
          })
          .catch(function(err) {
            _this.setState({
              transactionsError: [err.message],
              isTransactionsItemsLoading: false
            });
          });
      }
    };

    _this.fetchPaymentDetials = function() {
      const { setPaymentMethod } = _this.props;
      getPaymentDetails()
        .then(function(response) {
          if (response.errors.length) {
            _this.setState({
              paymentDetailsError: response.errors,
              paymentDetailsLoading: false
            });
          } else {
            setPaymentMethod(response.responseData.paymentDetails);

            _this.setState({
              paymentDetailsLoading: false
            });
          }
        })
        .catch(function(err) {
          _this.setState({
            paymentDetailsError: [err.message],
            paymentDetailsLoading: false
          });
        });
    };

    _this.fetchTransactionsList = function() {
      const _this$props2 = _this.props;
      const { setTransactionsList } = _this$props2;
      const { setTransactionsToShow } = _this$props2;
      const { setTransactionsListAsFetched } = _this$props2;
      const { hideShowMoreButton } = _this$props2;
      listCustomerTransactions(DEFAULT_TRANSACTIONS_NUMBER + 1, 0) // fetching +1 transaction to check if have to show 'show more' button
        .then(function(response) {
          if (response.errors.length) {
            _this.setState({
              transactionsError: response.errors,
              isTransactionsSectionLoading: false
            });
          } else {
            setTransactionsList(response.responseData.items);

            if (
              response.responseData.items.length > DEFAULT_TRANSACTIONS_NUMBER // if there are more transactions to fetch - show only default number
            ) {
              setTransactionsToShow(DEFAULT_TRANSACTIONS_NUMBER);
            } else {
              // if there is nothing more to fetch
              setTransactionsToShow();
              setTransactionsListAsFetched();
              hideShowMoreButton();
            }

            _this.setState({
              isTransactionsSectionLoading: false
            });
          }
        })
        .catch(function(err) {
          _this.setState({
            transactionsError: [err.message],
            isTransactionsSectionLoading: false
          });
        });
    };

    _this.state = {
      paymentDetailsError: [],
      transactionsError: [],
      isTransactionListExpanded: false,
      isTransactionsSectionLoading: false,
      isTransactionsItemsLoading: false,
      paymentDetailsLoading: false
    };
    return _this;
  }

  _createClass(PaymentInfo, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        const _this$props3 = this.props;
        const { paymentInfo } = _this$props3;
        const { setTransactionsToShow } = _this$props3;

        if (paymentInfo.paymentMethod.length === 0) {
          this.setState({
            paymentDetailsLoading: true
          });
          this.fetchPaymentDetials();
        }

        if (paymentInfo.transactionsList.length === 0) {
          this.setState({
            isTransactionsSectionLoading: true
          });
          this.fetchTransactionsList();
        } else if (paymentInfo.transactionsList.length !== 0) {
          setTransactionsToShow(DEFAULT_TRANSACTIONS_NUMBER); // if transactions are in state - show default number of them
        }
      }
    },
    {
      key: 'render',
      value: function render() {
        const _this$props4 = this.props;
        const { paymentInfo } = _this$props4;
        const { t } = _this$props4;
        const _this$state = this.state;
        const { paymentDetailsError } = _this$state;
        const { transactionsError } = _this$state;
        const { isTransactionsItemsLoading } = _this$state;
        const { isTransactionsSectionLoading } = _this$state;
        const { paymentDetailsLoading } = _this$state;
        const { isTransactionListExpanded } = _this$state;
        return /* #__PURE__ */ React.createElement(
          WrapStyled,
          null,
          /* #__PURE__ */ React.createElement(
            SectionHeader,
            {
              marginTop: '0'
            },
            t('Payment method')
          ),
          /* #__PURE__ */ React.createElement(PaymentMehod, {
            paymentDetailsLoading,
            paymentDetails: paymentInfo.paymentMethod.length
              ? paymentInfo.paymentMethod.slice(-1)
              : [],
            error: paymentDetailsError
          }),
          /* #__PURE__ */ React.createElement(
            SectionHeader,
            null,
            t('Transactions')
          ),
          /* #__PURE__ */ React.createElement(Transactions, {
            transactions: paymentInfo.transactionsToShow,
            toggleTransactionsList: this.toggleTransactionsList,
            isTransactionsItemsLoading,
            isTransactionsSectionLoading,
            isShowMoreButtonHidden: paymentInfo.isShowMoreButtonHidden,
            isExpanded: isTransactionListExpanded,
            error: transactionsError
          })
        );
      }
    }
  ]);

  return PaymentInfo;
})(Component);

PaymentInfo.defaultProps = {
  paymentInfo: {
    paymentMethod: [],
    transactionsList: []
  },
  t: function t(k) {
    return k;
  }
};
export { PaymentInfo as PurePaymentInfo };
export default withTranslation()(labeling()(PaymentInfo));
