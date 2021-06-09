import _toConsumableArray from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray';

/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';

export var SET_PAYMENT_METHOD = 'SET_PAYMENT_METHOD';
export var setPaymentMethod = createAction(SET_PAYMENT_METHOD);
export var SET_TRANSACTIONS_LIST = 'SET_TRANSACTIONS_LIST';
export var setTransactionsList = createAction(SET_TRANSACTIONS_LIST);
export var SET_TRANSACTIONS_TO_SHOW = 'SET_TRANSACTIONS_TO_SHOW';
export var setTransactionsToShow = createAction(SET_TRANSACTIONS_TO_SHOW);
export var SET_TRANSACTIONS_LIST_AS_FETCHED =
  'SET_TRANSACTIONS_LIST_AS_FETCHED';
export var setTransactionsListAsFetched = createAction(
  SET_TRANSACTIONS_LIST_AS_FETCHED
);
export var HIDE_SHOW_MORE_BUTTON = 'HIDE_SHOW_MORE_BUTTON';
export var hideShowMoreButton = createAction(HIDE_SHOW_MORE_BUTTON);
const initialState = {
  paymentMethod: [],
  transactionsList: [],
  transactionsToShow: [],
  isTransactionListFetched: false,
  isShowMoreButtonHidden: false
};
const paymentMethodReducer = createReducer(initialState, {
  SET_PAYMENT_METHOD: function SET_PAYMENT_METHOD(state, action) {
    state.paymentMethod = action.payload;
  },
  SET_TRANSACTIONS_LIST: function SET_TRANSACTIONS_LIST(state, action) {
    state.transactionsList = action.payload;
  },
  SET_TRANSACTIONS_TO_SHOW: function SET_TRANSACTIONS_TO_SHOW(state, action) {
    if (!action.payload) {
      state.transactionsToShow = _toConsumableArray(state.transactionsList);
    } else {
      state.transactionsToShow = state.transactionsList.slice(
        0,
        action.payload
      );
    }
  },
  SET_TRANSACTIONS_LIST_AS_FETCHED: function SET_TRANSACTIONS_LIST_AS_FETCHED(
    state
  ) {
    state.isTransactionListFetched = true;
  },
  HIDE_SHOW_MORE_BUTTON: function HIDE_SHOW_MORE_BUTTON(state) {
    state.isShowMoreButtonHidden = true;
  }
});
export default paymentMethodReducer;
