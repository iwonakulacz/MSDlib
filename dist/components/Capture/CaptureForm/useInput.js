import _slicedToArray from "/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import { useState } from 'react';

var useInput = function useInput(initialValue) {
  var _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setHookValue = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var setValue = function setValue(v) {
    var newValue = v || '';
    setError('');
    setHookValue(newValue);
  };

  var onChange = function onChange(newValue) {
    setValue(newValue);
  };

  return {
    value: value,
    setValue: setValue,
    error: error,
    setError: setError,
    onChange: onChange
  };
};

export default useInput;