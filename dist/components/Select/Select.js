import React from 'react';
import { SelectStyled, ReactSelectStyled } from './SelectStyled';
export var mapToSelectFormat = function mapToSelectFormat(array) {
  var newArray = array.map(function (item) {
    return {
      label: item,
      value: item
    };
  });
  return newArray;
};

var Select = function Select(_ref) {
  var name = _ref.name,
      values = _ref.values,
      value = _ref.value,
      onChange = _ref.onChange,
      label = _ref.label,
      required = _ref.required,
      disabled = _ref.disabled,
      isMyAccount = _ref.isMyAccount;

  var handleChange = function handleChange(option) {
    onChange(name, option);
  };

  return /*#__PURE__*/React.createElement(SelectStyled, null, /*#__PURE__*/React.createElement(ReactSelectStyled, {
    classNamePrefix: "react-select",
    placeholder: label,
    value: value,
    required: required,
    onChange: handleChange,
    options: values,
    name: name,
    isDisabled: disabled,
    isMyAccount: isMyAccount
  }));
};

Select.defaultProps = {
  values: [],
  label: '',
  required: false,
  name: '',
  value: {},
  onChange: function onChange() {},
  disabled: false,
  isMyAccount: false
};
export default Select;