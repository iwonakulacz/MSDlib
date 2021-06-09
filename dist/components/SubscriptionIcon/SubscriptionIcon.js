import React from 'react';
import { periodMapper } from 'util/planHelper';
import { WrapperStyled, LabelStyled } from './SubscriptionIconStyled';

const SubscriptionIcon = function SubscriptionIcon(_ref) {
  const { period } = _ref;
  const { showLabel } = _ref;
  const { className } = _ref;

  const _ref2 = periodMapper[period] || periodMapper.default;
  const { color } = _ref2;
  const { bg } = _ref2;
  const { label } = _ref2;
  const { border } = _ref2;

  return /* #__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* #__PURE__ */ React.createElement(
      WrapperStyled,
      {
        color: color || null,
        bg: bg || null,
        border: border || null,
        className
      },
      showLabel &&
        /* #__PURE__ */ React.createElement(
          LabelStyled,
          {
            label: showLabel
          },
          showLabel
        ),
      label || ''
    )
  );
};

SubscriptionIcon.defaultProps = {
  period: 'default',
  showLabel: '',
  className: ''
};
export default SubscriptionIcon;
