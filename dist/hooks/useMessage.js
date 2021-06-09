import _slicedToArray from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import { useState } from 'react';

var useMessage = function useMessage() {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      setMessageText = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      type = _useState4[0],
      setType = _useState4[1];

  var setMessage = function setMessage(newMessage) {
    setMessageText(newMessage.message);
    setType(newMessage.type);
  };

  var resetMessage = function resetMessage() {
    setMessageText('');
    setType('');
  };

  return [message, type, setMessage, resetMessage];
};

export default useMessage;