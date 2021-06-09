import React from 'react';
import { periodMapper } from 'util/planHelper';
import { WrapperStyled, LabelStyled } from './SubscriptionIconStyled';

var SubscriptionIcon = function SubscriptionIcon(_ref) {
  var period = _ref.period,
      showLabel = _ref.showLabel,
      className = _ref.className;

  var _ref2 = periodMapper[period] || periodMapper.default,
      color = _ref2.color,
      bg = _ref2.bg,
      label = _ref2.label,
      border = _ref2.border;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WrapperStyled, {
    color: color || null,
    bg: bg || null,
    border: border || null,
    className: className
  }, showLabel && /*#__PURE__*/React.createElement(LabelStyled, {
    label: showLabel
  }, showLabel), label || ''));
};

SubscriptionIcon.defaultProps = {
  period: 'default',
  showLabel: '',
  className: ''
};
export default SubscriptionIcon;