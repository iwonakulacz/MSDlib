/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';
export var SET_CURRENT_PLAN = 'SET_CURRENT_PLAN';
export var setCurrentPlan = createAction(SET_CURRENT_PLAN);
export var UPDATE_LIST = 'UPDATE_LIST';
export var updateList = createAction(UPDATE_LIST);
export var SET_OFFER_TO_SWITCH = 'SET_OFFER_TO_SWITCH';
export var setOfferToSwitch = createAction(SET_OFFER_TO_SWITCH);
export var SET_SWITCH_SETTINGS = 'SET_SWITCH_SETTINGS';
export var setSwitchSettings = createAction(SET_SWITCH_SETTINGS);
var initialState = {
  currentPlan: [],
  updateList: false,
  offerToSwitch: {},
  switchSettings: {}
};
var paymentDetailsReducer = createReducer(initialState, {
  SET_CURRENT_PLAN: function SET_CURRENT_PLAN(state, action) {
    state.currentPlan = action.payload;
  },
  UPDATE_LIST: function UPDATE_LIST(state) {
    state.updateList = !state.updateList;
  },
  SET_OFFER_TO_SWITCH: function SET_OFFER_TO_SWITCH(state, action) {
    state.offerToSwitch = action.payload;
  },
  SET_SWITCH_SETTINGS: function SET_SWITCH_SETTINGS(state, action) {
    state.switchSettings[action.payload.offerId] = action.payload.settings;
  }
});
export default paymentDetailsReducer;