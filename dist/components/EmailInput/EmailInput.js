import React from 'react';
import Input from 'components/Input';

var EmailInput = function EmailInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      error = _ref.error,
      label = _ref.label,
      floatingLabels = _ref.floatingLabels,
      required = _ref.required,
      reference = _ref.reference;
  return /*#__PURE__*/React.createElement(Input, {
    placeholder: label,
    floatingLabels: floatingLabels,
    type: "email",
    value: value,
    onChange: onChange,
    onBlur: onBlur,
    error: error,
    required: required,
    reference: reference,
    ariaRequired: required,
    ariaInvalid: !!error
  });
};

EmailInput.defaultProps = {
  value: '',
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  error: '',
  label: 'Email',
  floatingLabels: true,
  required: false,
  reference: {
    current: null
  }
};
export default EmailInput;