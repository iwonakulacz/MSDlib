import React from 'react';
import { ReactComponent as SuccessIcon } from 'assets/images/success.svg';
import { MessageBoxStyled, MessageBoxIconWrapStyled, MessageBoxMessageStyled } from './MessageBoxStyled';

var MessageBox = function MessageBox(_ref) {
  var type = _ref.type,
      message = _ref.message;
  return /*#__PURE__*/React.createElement(MessageBoxStyled, {
    type: type
  }, /*#__PURE__*/React.createElement(MessageBoxIconWrapStyled, null, SuccessIcon && /*#__PURE__*/React.createElement(SuccessIcon, null)), /*#__PURE__*/React.createElement(MessageBoxMessageStyled, null, message));
};

MessageBox.defaultProps = {
  type: 'success',
  message: ''
};
export default MessageBox;