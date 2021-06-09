import React from 'react';
import { SelectStyled, ReactSelectStyled } from './SelectStyled';

export var mapToSelectFormat = function mapToSelectFormat(array) {
  const newArray = array.map(function(item) {
    return {
      label: item,
      value: item
    };
  });
  return newArray;
};

const Select = function Select(_ref) {
  const { name } = _ref;
  const { values } = _ref;
  const { value } = _ref;
  const { onChange } = _ref;
  const { label } = _ref;
  const { required } = _ref;
  const { disabled } = _ref;
  const { isMyAccount } = _ref;

  const handleChange = function handleChange(option) {
    onChange(name, option);
  };

  return /* #__PURE__ */ React.createElement(
    SelectStyled,
    null,
    /* #__PURE__ */ React.createElement(ReactSelectStyled, {
      classNamePrefix: 'react-select',
      placeholder: label,
      value,
      required,
      onChange: handleChange,
      options: values,
      name,
      isDisabled: disabled,
      isMyAccount
    })
  );
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
