import React from 'react';
import Input from 'components/Input';

const EmailInput = function EmailInput(_ref) {
  const { value } = _ref;
  const { onChange } = _ref;
  const { onBlur } = _ref;
  const { error } = _ref;
  const { label } = _ref;
  const { floatingLabels } = _ref;
  const { required } = _ref;
  const { reference } = _ref;
  return /* #__PURE__ */ React.createElement(Input, {
    placeholder: label,
    floatingLabels,
    type: 'email',
    value,
    onChange,
    onBlur,
    error,
    required,
    reference,
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
