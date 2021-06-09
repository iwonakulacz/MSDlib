import React from 'react';
import Input from 'components/Input';
import { ReactComponent as CalendarIcon } from 'assets/images/calendar.svg';

const DateInput = function DateInput(_ref) {
  const { value } = _ref;
  const { onChange } = _ref;
  const { onBlur } = _ref;
  const { error } = _ref;
  const { label } = _ref;
  const { required } = _ref;
  return /* #__PURE__ */ React.createElement(Input, {
    type: 'date',
    placeholder: label,
    format: 'dd/mm/yyyy',
    value,
    icon: CalendarIcon,
    onChange,
    onBlur,
    error,
    required
  });
};

DateInput.defaultProps = {
  value: '',
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  error: '',
  label: '',
  required: false
};
export default DateInput;
