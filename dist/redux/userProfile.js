import _objectSpread from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2';

/* eslint-disable no-param-reassign */
import { createAction, createReducer } from '@reduxjs/toolkit';

export var SET_CURRENT_USER = 'SET_CURRENT_USER';
export var setCurrentUser = createAction(SET_CURRENT_USER);
export var SET_USER_CAPTURE = 'SET_USER_CAPTURE';
export var setUserCapture = createAction(SET_USER_CAPTURE);
export var UPDATE_CAPTURE_OPTION = 'UPDATE_CAPTURE_OPTION';
export var updateCaptureOption = createAction(UPDATE_CAPTURE_OPTION);
export var SET_CONSENTS = 'SET_CONSENTS';
export var setConsents = createAction(SET_CONSENTS);
export var SET_CONSENTS_ERROR = 'SET_CONSENTS_ERROR';
export var setConsentsError = createAction(SET_CONSENTS_ERROR);
const initialState = {
  user: null,
  capture: null,
  consents: [],
  consentsError: ''
};
const userProfileReducer = createReducer(initialState, {
  SET_CURRENT_USER: function SET_CURRENT_USER(state, action) {
    state.user = action.payload;
  },
  SET_USER_CAPTURE: function SET_USER_CAPTURE(state, action) {
    state.capture = action.payload;
  },
  UPDATE_CAPTURE_OPTION: function UPDATE_CAPTURE_OPTION(state, action) {
    const newState = _objectSpread(
      _objectSpread({}, state.capture),
      {},
      {
        settings: state.capture.settings.map(function(setting) {
          if (setting.key === action.payload.key) {
            return _objectSpread(
              _objectSpread({}, setting),
              {},
              {
                answer: action.payload.value
              }
            );
          }

          return setting;
        })
      }
    );

    state.capture = newState;
  },
  SET_CONSENTS: function SET_CONSENTS(state, action) {
    state.consents = action.payload;
  },
  SET_CONSENTS_ERROR: function SET_CONSENTS_ERROR(state, action) {
    state.consentsError = action.payload;
  }
});
export default userProfileReducer;
