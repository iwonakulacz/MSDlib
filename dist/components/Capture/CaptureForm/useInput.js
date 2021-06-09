import _slicedToArray from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray';
import { useState } from 'react';

const useInput = function useInput(initialValue) {
  const _useState = useState(initialValue);
  const _useState2 = _slicedToArray(_useState, 2);
  const value = _useState2[0];
  const setHookValue = _useState2[1];

  const _useState3 = useState('');
  const _useState4 = _slicedToArray(_useState3, 2);
  const error = _useState4[0];
  const setError = _useState4[1];

  const setValue = function setValue(v) {
    const newValue = v || '';
    setError('');
    setHookValue(newValue);
  };

  const onChange = function onChange(newValue) {
    setValue(newValue);
  };

  return {
    value,
    setValue,
    error,
    setError,
    onChange
  };
};

export default useInput;
