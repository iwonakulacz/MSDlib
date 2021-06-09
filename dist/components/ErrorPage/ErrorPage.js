/* eslint-disable import/no-dynamic-require */
import React from 'react';
import Auth from 'services/auth';
import BackButton from 'components/BackButton';
import close from 'assets/images/errors/close.svg';
import deleteCreditCard from 'assets/images/errors/deleteCreditCard.svg';
import lock from 'assets/images/errors/lock.svg';
import warning from 'assets/images/errors/warning.svg';
import Logout from 'components/Logout';
import Header from 'components/Header';
import { ErrorPageStyled, MessageStyled, IconStyled } from './ErrorPageStyled';

const errorTypes = {
  offerNotExist: {
    icon: close,
    description: 'Offer does not exist or is not provided.'
  },
  generalError: {
    icon: warning,
    description: 'Whoops'
  },
  alreadyHaveAccess: {
    icon: lock,
    description:
      'Good news! Your account already gives you access to the content that comes with this plan.'
  },
  cannotPurchase: {
    icon: deleteCreditCard,
    description:
      'We are sorry! The content you are trying to access is not available in your country.'
  }
};

const ErrorPage = function ErrorPage(_ref) {
  const { type } = _ref;
  const { error } = _ref;
  const { resetError } = _ref;
  const typeParams = errorTypes[type];
  return /* #__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* #__PURE__ */ React.createElement(
      Header,
      null,
      Auth.isLogged()
        ? /* #__PURE__ */ React.createElement(Logout, null)
        : type !== 'generalError' &&
            /* #__PURE__ */ React.createElement(BackButton, {
              onClickFn: resetError
            })
    ),
    /* #__PURE__ */ React.createElement(
      ErrorPageStyled,
      null,
      /* #__PURE__ */ React.createElement(IconStyled, {
        src: typeParams.icon
      }),
      /* #__PURE__ */ React.createElement(
        MessageStyled,
        null,
        error || typeParams.description
      )
    )
  );
};

ErrorPage.defaultProps = {
  type: 'generalError',
  error: '',
  resetError: function resetError() {}
};
export default ErrorPage;
