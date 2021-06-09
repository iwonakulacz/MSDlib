/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';

export var SHOW_POPUP = 'SHOW_POPUP';
export var showPopup = createAction(SHOW_POPUP);
export var HIDE_POPUP = 'HIDE_POPUP';
export var hidePopup = createAction(HIDE_POPUP);
const initialState = {
  isPopupShown: false,
  popupType: '',
  consents: []
};
const popupReducer = createReducer(initialState, {
  SHOW_POPUP: function SHOW_POPUP(state, action) {
    state.isPopupShown = true;
    state.popupType = action.payload.type;
    state.consents = action.payload.consents;
  },
  HIDE_POPUP: function HIDE_POPUP(state) {
    state.isPopupShown = false;
  }
});
export default popupReducer;
