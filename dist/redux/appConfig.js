/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';

export var SET_DATA = 'SET_DATA';
export var setData = createAction(SET_DATA);
export var REMOVE_DATA = 'REMOVE_DATA';
export var removeData = createAction(REMOVE_DATA);
const initialState = {
  CLEENG_OFFER_ID: '',
  CLEENG_PUBLISHER_ID: '',
  CLEENG_AUTH_TOKEN: '',
  CLEENG_ORDER_ID: '',
  CLEENG_PAYMENT_METHOD_ID: '',
  CLEENG_CUSTOMER_IP: '',
  CLEENG_CUSTOMER_EMAIL: '',
  CLEENG_HOSTED: '',
  CLEENG_HEADER_OFF: ''
};
const appConfig = createReducer(initialState, {
  SET_DATA: function SET_DATA(state, action) {
    state[action.payload.name] = action.payload.value;
  },
  REMOVE_DATA: function REMOVE_DATA(state, action) {
    state[action.payload.name] = '';
  }
});
export default appConfig;
