import _slicedToArray from '/Users/iwonakulacz/Documents/repos/msd-package/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray';
import React, { useState } from 'react';
import Button from 'components/Button';
import { withTranslation } from 'react-i18next';
import labeling from 'containers/labeling';
import {
  SubscriptionManagementStyled,
  ManageButtonWrapStyled,
  SubscriptionActionsStyled,
  ButtonTextStyled
} from './SubscriptionManagementStyled';

const SubscriptionManagement = function SubscriptionManagement(_ref) {
  const { isOpened } = _ref;
  const { children } = _ref;
  const { onClose } = _ref;
  const { t } = _ref;

  const _useState = useState(isOpened);
  const _useState2 = _slicedToArray(_useState, 2);
  const isOptionsVisible = _useState2[0];
  const setIsOptionsVisible = _useState2[1];

  const toggle = function toggle(e) {
    e.stopPropagation();
    setIsOptionsVisible(function(isVisible) {
      return !isVisible;
    });
    if (isOptionsVisible) onClose();
  };

  return /* #__PURE__ */ React.createElement(
    SubscriptionManagementStyled,
    null,
    /* #__PURE__ */ React.createElement(
      ManageButtonWrapStyled,
      null,
      /* #__PURE__ */ React.createElement(
        Button,
        {
          theme: 'simple',
          width: 'unset',
          onClickFn: function onClickFn(e) {
            return toggle(e);
          }
        },
        /* #__PURE__ */ React.createElement(
          ButtonTextStyled,
          {
            isExpanded: isOptionsVisible
          },
          t('Manage')
        )
      )
    ),
    /* #__PURE__ */ React.createElement(
      SubscriptionActionsStyled,
      {
        isOpened: isOptionsVisible
      },
      children
    )
  );
};

SubscriptionManagement.defaultProps = {
  isOpened: false,
  children: '',
  onClose: function onClose() {},
  t: function t(k) {
    return k;
  }
};
export { SubscriptionManagement as PureSubscriptionManagement };
export default withTranslation()(labeling()(SubscriptionManagement));
