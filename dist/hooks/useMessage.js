import _slicedToArray from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray';
import { useState } from 'react';

const useMessage = function useMessage() {
  const _useState = useState('');
  const _useState2 = _slicedToArray(_useState, 2);
  const message = _useState2[0];
  const setMessageText = _useState2[1];

  const _useState3 = useState('');
  const _useState4 = _slicedToArray(_useState3, 2);
  const type = _useState4[0];
  const setType = _useState4[1];

  const setMessage = function setMessage(newMessage) {
    setMessageText(newMessage.message);
    setType(newMessage.type);
  };

  const resetMessage = function resetMessage() {
    setMessageText('');
    setType('');
  };

  return [message, type, setMessage, resetMessage];
};

export default useMessage;
