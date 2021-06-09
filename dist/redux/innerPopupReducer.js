/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';

export var SHOW_INNER_POPUP = 'SHOW_INNER_POPUP';
export var showInnerPopup = createAction(SHOW_INNER_POPUP);
export var HIDE_INNER_POPUP = 'HIDE_INNER_POPUP';
export var hideInnerPopup = createAction(HIDE_INNER_POPUP);
const initialState = {
  isOpen: false,
  type: '',
  data: {}
};
const popupReducer = createReducer(initialState, {
  SHOW_INNER_POPUP: function SHOW_INNER_POPUP(state, action) {
    state.isOpen = true;
    state.type = action.payload.type;
    state.data = action.payload.data;
  },
  HIDE_INNER_POPUP: function HIDE_INNER_POPUP(state) {
    state.isOpen = false;
    state.type = '';
    state.data = {};
  }
});
export default popupReducer;
