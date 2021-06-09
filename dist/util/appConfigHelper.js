/* istanbul ignore file */
import store from 'redux/store';
import {
  setData as setDataInRedux,
  removeData as removeDataFromRedux
} from 'redux/appConfig';

const isLocalStorageAvailable = function isLocalStorageAvailable() {
  try {
    localStorage.setItem('CLEENG_LS', 'yes');

    if (localStorage.getItem('CLEENG_LS') === 'yes') {
      localStorage.removeItem('CLEENG_LS');
      return true;
    }

    return false;
  } catch (e) {
    return false;
  }
};

export var getData = function getData(name) {
  return isLocalStorageAvailable()
    ? localStorage.getItem(name)
    : store.getState().appConfig[name];
};
export var setData = function setData(name, value) {
  return isLocalStorageAvailable()
    ? localStorage.setItem(name, value)
    : store.dispatch(
        setDataInRedux({
          name,
          value
        })
      );
};
export var removeData = function removeData(name) {
  return isLocalStorageAvailable()
    ? localStorage.removeItem(name)
    : store.dispatch(
        removeDataFromRedux({
          name
        })
      );
};
export var sendMessage = function sendMessage(msg) {
  if (window.opener) {
    window.opener.postMessage(msg, '*');
  } else if (window.top) {
    window.top.postMessage(msg, '*');
  }
};
export var isHosted = function isHosted() {
  return getData('CLEENG_HOSTED') && getData('CLEENG_HOSTED') === 'true';
};
