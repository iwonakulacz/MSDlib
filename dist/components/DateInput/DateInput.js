import React from 'react';
import Input from 'components/Input';
import { ReactComponent as CalendarIcon } from 'assets/images/calendar.svg';

var DateInput = function DateInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      error = _ref.error,
      label = _ref.label,
      required = _ref.required;
  return /*#__PURE__*/React.createElement(Input, {
    type: "date",
    placeholder: label,
    format: "dd/mm/yyyy",
    value: value,
    icon: CalendarIcon,
    onChange: onChange,
    onBlur: onBlur,
    error: error,
    required: required
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