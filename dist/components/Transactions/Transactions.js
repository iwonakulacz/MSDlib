import _toConsumableArray from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray';

/* eslint-disable no-nested-ternary */
import React from 'react';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import Card from 'components/Card';
import { dateFormat } from 'util/planHelper';
import MyAccountError from 'components/MyAccountError';
import Button from 'components/Button';
import { ReactComponent as noTransactionsIcon } from 'assets/images/errors/transaction_icon.svg';
import SkeletonWrapper from 'components/SkeletonWrapper';
import Loader from 'components/Loader';
import {
  WrapStyled,
  InsideWrapperStyled,
  LeftBoxStyled,
  TitleStyled,
  SubTitleStyled,
  RightBoxStyled,
  IdStyled,
  DateStyled,
  ButtonTextStyled,
  TransactionListStyled
} from './TransactionsStyled';

const TransactionsSkeleton = function TransactionsSkeleton() {
  return /* #__PURE__ */ React.createElement(
    Card,
    {
      withBorder: true
    },
    _toConsumableArray(Array(3)).map(function(i, k) {
      return (
        /* #__PURE__ */
        // eslint-disable-next-line react/no-array-index-key
        React.createElement(
          InsideWrapperStyled,
          {
            key: 'skeleton-item-'.concat(k),
            length: 3
          },
          /* #__PURE__ */ React.createElement(
            LeftBoxStyled,
            null,
            /* #__PURE__ */ React.createElement(
              TitleStyled,
              null,
              /* #__PURE__ */ React.createElement(SkeletonWrapper, {
                width: 300
              })
            ),
            /* #__PURE__ */ React.createElement(
              SubTitleStyled,
              null,
              /* #__PURE__ */ React.createElement(SkeletonWrapper, {
                width: 100
              })
            )
          ),
          /* #__PURE__ */ React.createElement(
            RightBoxStyled,
            null,
            /* #__PURE__ */ React.createElement(
              IdStyled,
              null,
              /* #__PURE__ */ React.createElement(SkeletonWrapper, {
                width: 80
              })
            ),
            /* #__PURE__ */ React.createElement(
              DateStyled,
              null,
              /* #__PURE__ */ React.createElement(SkeletonWrapper, {
                width: 80
              })
            )
          )
        )
      );
    })
  );
};

const Transactions = function Transactions(_ref) {
  const { transactions } = _ref;
  const { toggleTransactionsList } = _ref;
  const { isTransactionsItemsLoading } = _ref;
  const { isExpanded } = _ref;
  const { isShowMoreButtonHidden } = _ref;
  const { error } = _ref;
  const { isTransactionsSectionLoading } = _ref;
  const { t } = _ref;
  return isTransactionsSectionLoading
    ? /* #__PURE__ */ React.createElement(TransactionsSkeleton, null)
    : /* #__PURE__ */ React.createElement(
        WrapStyled,
        null,
        error.length !== 0
          ? /* #__PURE__ */ React.createElement(MyAccountError, {
              generalError: true
            })
          : transactions.length === 0
          ? /* #__PURE__ */ React.createElement(MyAccountError, {
              icon: noTransactionsIcon,
              title: t('No transactions found!'),
              subtitle: t(
                'The section will show you recent transactions history after first payment'
              )
            })
          : /* #__PURE__ */ React.createElement(
              Card,
              {
                withBorder: true
              },
              /* #__PURE__ */ React.createElement(
                TransactionListStyled,
                {
                  isExpanded,
                  length: transactions.length
                },
                transactions.map(function(subItem) {
                  return /* #__PURE__ */ React.createElement(
                    InsideWrapperStyled,
                    {
                      key: subItem.transactionId,
                      length: transactions.length
                    },
                    /* #__PURE__ */ React.createElement(
                      LeftBoxStyled,
                      null,
                      /* #__PURE__ */ React.createElement(
                        TitleStyled,
                        null,
                        subItem.offerTitle
                      ),
                      /* #__PURE__ */ React.createElement(
                        SubTitleStyled,
                        null,
                        t('Paid with'),
                        ' ',
                        subItem.paymentMethod === 'card'
                          ? t('card')
                          : subItem.paymentMethod
                      )
                    ),
                    /* #__PURE__ */ React.createElement(
                      RightBoxStyled,
                      null,
                      /* #__PURE__ */ React.createElement(
                        IdStyled,
                        null,
                        subItem.transactionId
                      ),
                      /* #__PURE__ */ React.createElement(
                        DateStyled,
                        null,
                        dateFormat(subItem.transactionDate)
                      )
                    )
                  );
                })
              ),
              !isShowMoreButtonHidden &&
                /* #__PURE__ */ React.createElement(
                  Button,
                  {
                    theme: 'primary',
                    margin: '20px 0 0 auto',
                    width: 'unset',
                    label: (isExpanded && t('Show less')) || t('Show more'),
                    onClickFn: function onClickFn() {
                      return toggleTransactionsList();
                    },
                    padding: '12px 33px 12px 20px'
                  },
                  /* #__PURE__ */ React.createElement(
                    ButtonTextStyled,
                    {
                      isExpanded
                    },
                    (isTransactionsItemsLoading &&
                      /* #__PURE__ */ React.createElement(Loader, {
                        buttonLoader: true,
                        color: '#ffffff'
                      })) ||
                      (isExpanded && t('Show less')) ||
                      t('Show more')
                  )
                )
            )
      );
};

Transactions.defaultProps = {
  transactions: [],
  error: [],
  isTransactionsItemsLoading: false,
  isExpanded: false,
  t: function t(k) {
    return k;
  },
  isShowMoreButtonHidden: false,
  isTransactionsSectionLoading: false
};
export { Transactions as PureTransactions };
export default withTranslation()(labeling()(Transactions));
